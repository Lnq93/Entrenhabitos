/**
 * Entrenhábitos - Store Centralizado Reactivo con Persistencia LocalStorage
 * Modelado para R4 (Prototipo Web Interactivo)
 */

import { INITIAL_PROFILES } from './demo_data.js';
import { RulesEngine } from './rules_engine.js';

const STORAGE_KEY = 'entrenhabitos_state_v1';

// In-memory mock storage fallback for headless / Node testing environments
class MemoryStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

const memoryStorageInstance = new MemoryStorage();

function getStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  return memoryStorageInstance;
}

export class AppStateStore {
  constructor() {
    this.profiles = [];
    this.activeProfileId = 'alumno_martin';
    this.interviewRequests = [];
    this.pendingIntervention = null;
    this.listeners = new Set();
    this.initialized = false;

    // Escucha eventos de sincronización multi-pestaña en el navegador
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEY) {
          this.loadFromStorage();
          this.notifyListeners('external-storage-sync');
        }
      });
    }

    this.init();
  }

  /**
   * Inicializa el estado cargando de localStorage o precargando datos demo
   */
  init() {
    const storage = getStorage();
    const saved = storage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.profiles = parsed.profiles || [];
        this.activeProfileId = parsed.activeProfileId || 'alumno_martin';
        this.interviewRequests = parsed.interviewRequests || [];
        this.pendingIntervention = parsed.pendingIntervention || null;
      } catch (e) {
        console.warn('Error al parsear estado de storage, reiniciando datos demo:', e);
        this.resetDemoData();
        return;
      }
    } else {
      this.resetDemoData();
      return;
    }

    this.initialized = true;
    this.notifyListeners('init');
  }

  /**
   * Guarda el estado actual en el motor de almacenamiento
   */
  saveToStorage() {
    const storage = getStorage();
    const payload = {
      version: '1.0.0',
      updatedAt: new Date().toISOString(),
      activeProfileId: this.activeProfileId,
      profiles: this.profiles,
      interviewRequests: this.interviewRequests,
      pendingIntervention: this.pendingIntervention
    };
    storage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  /**
   * Recarga el estado desde storage
   */
  loadFromStorage() {
    const storage = getStorage();
    const saved = storage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.profiles = parsed.profiles || [];
        this.activeProfileId = parsed.activeProfileId || this.activeProfileId;
        this.interviewRequests = parsed.interviewRequests || [];
        this.pendingIntervention = parsed.pendingIntervention || null;
      } catch (e) {
        console.error('Error al recargar de storage:', e);
      }
    }
  }

  /**
   * Notifica a todos los suscriptores y despacha CustomEvent en el DOM
   */
  notifyListeners(action = 'state-updated', payload = null) {
    const detail = {
      action,
      payload,
      activeProfile: this.getActiveProfile(),
      timestamp: Date.now()
    };

    // Callback de suscriptores
    this.listeners.forEach((callback) => {
      try {
        callback(detail);
      } catch (err) {
        console.error('Error en suscriptor de AppState:', err);
      }
    });

    // Despacho de CustomEvent en navegador para reactividad de vista
    if (typeof window !== 'undefined' && window.dispatchEvent && typeof CustomEvent !== 'undefined') {
      window.dispatchEvent(new CustomEvent('entrenhabitos:state-updated', { detail }));
    }
  }

  /**
   * Suscribe una función para recibir actualizaciones de estado
   * @param {Function} callback
   * @returns {Function} Función para cancelar suscripción
   */
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  /**
   * Retorna la lista de todos los perfiles con métricas actualizadas en tiempo real
   */
  getProfiles() {
    return this.profiles.map((p) => {
      const metrics = RulesEngine.calculateMetrics(p);
      return {
        ...p,
        ...metrics
      };
    });
  }

  /**
   * Obtiene un perfil específico por ID con sus métricas actualizadas
   */
  getProfileById(id) {
    const profile = this.profiles.find((p) => p.id === id);
    if (!profile) return null;
    const metrics = RulesEngine.calculateMetrics(profile);
    return {
      ...profile,
      ...metrics
    };
  }

  /**
   * Retorna el perfil activo actual con métricas calculadas
   */
  getActiveProfile() {
    let profile = this.profiles.find((p) => p.id === this.activeProfileId);
    if (!profile && this.profiles.length > 0) {
      profile = this.profiles[0];
      this.activeProfileId = profile.id;
    }
    if (!profile) return null;
    const metrics = RulesEngine.calculateMetrics(profile);
    return {
      ...profile,
      ...metrics
    };
  }

  /**
   * Cambia el perfil activo actual
   */
  setActiveProfile(id) {
    const exists = this.profiles.some((p) => p.id === id);
    if (!exists) {
      throw new Error(`Perfil con id "${id}" no encontrado.`);
    }
    this.activeProfileId = id;
    this.saveToStorage();
    this.notifyListeners('active-profile-changed', { activeProfileId: id });
    return this.getActiveProfile();
  }

  /**
   * Registra el Onboarding y Evaluación Inicial para un perfil
   */
  completeOnboarding(profileId, answers = {}) {
    const targetId = profileId || this.activeProfileId;
    const index = this.profiles.findIndex((p) => p.id === targetId);
    if (index === -1) {
      throw new Error(`Perfil ${targetId} no existe`);
    }

    const diagnosis = RulesEngine.diagnoseProfile(answers);
    const profile = this.profiles[index];

    profile.arquetipo = diagnosis.arquetipo;
    profile.hipotesis = diagnosis.hipotesis;
    profile.planSemanal = diagnosis.planRecomendado;
    profile.frecuenciaObjetivo = diagnosis.frecuenciaRecomendada;
    profile.barreraPredominante = diagnosis.barreraPredominante;

    this.saveToStorage();
    this.notifyListeners('onboarding-completed', { profileId: targetId, diagnosis });
    return this.getProfileById(targetId);
  }

  /**
   * Registra un Check-in diario (<1 min), ejecuta el motor adaptativo y actualiza telemetría
   */
  submitCheckIn(checkInData = {}) {
    const targetId = checkInData.profileId || this.activeProfileId;
    const profileIndex = this.profiles.findIndex((p) => p.id === targetId);
    if (profileIndex === -1) {
      throw new Error(`Perfil ${targetId} no encontrado`);
    }

    const profile = this.profiles[profileIndex];
    if (!profile.historialCheckins) {
      profile.historialCheckins = [];
    }

    const status = checkInData.status || checkInData.estado;
    if (!status) {
      throw new Error('El estado de entrenamiento es obligatorio (ideal, minima o missed).');
    }

    const barrierId = checkInData.barrierId || checkInData.barrera || null;
    if ((status === 'minima' || status === 'missed' || status === 'perdida') && !barrierId) {
      throw new Error('Barrera obligatoria: Si la sesión fue mínima o no entrenó, se debe registrar la barrera que causó la dificultad.');
    }

    // Ejecutar motor de reglas adaptativo
    const context = {
      status,
      barrierId,
      energyLevel: checkInData.energyLevel ?? checkInData.energia ?? 3,
      difficulty: checkInData.difficulty ?? checkInData.dificultad ?? 3,
      timeSpent: checkInData.timeSpent ?? checkInData.tiempoRealMin ?? (status === 'ideal' ? 55 : status === 'minima' ? 18 : 0),
      date: checkInData.date || checkInData.fecha || new Date().toISOString().split('T')[0]
    };

    const recommendation = RulesEngine.evaluate(context, profile);

    // Crear registro del check-in
    const newCheckIn = {
      id: `chk_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      fecha: context.date,
      estado: status,
      barrera: barrierId,
      dificultad: Number(context.difficulty),
      energia: Number(context.energyLevel),
      tiempoRegistroSeg: Number(checkInData.durationSeg ?? checkInData.tiempoRegistroSeg ?? 22),
      tiempoRealMin: Number(context.timeSpent),
      notas: checkInData.notes || '',
      intervencion: recommendation.intervention ? recommendation.intervention.id : null,
      feedbackIntervencion: null
    };

    profile.historialCheckins.push(newCheckIn);

    // Actualizar racha y métricas
    const updatedMetrics = RulesEngine.calculateMetrics(profile);
    profile.scoreAdherencia = updatedMetrics.tasaAdherencia;
    profile.rachaActualSemanas = updatedMetrics.rachaActualSemanas;
    profile.alertaRiesgo = updatedMetrics.alertaRiesgo;
    profile.mttrDias = updatedMetrics.mttrDias;
    profile.tasaSalvatajeMinima = updatedMetrics.tasaSalvatajeMinima;

    this.pendingIntervention = recommendation.intervention ? {
      ...recommendation.intervention,
      ruleId: recommendation.ruleId,
      rationale: recommendation.rationale,
      checkInId: newCheckIn.id
    } : null;

    this.saveToStorage();
    this.notifyListeners('checkin-submitted', {
      checkIn: newCheckIn,
      recommendation,
      profile: this.getProfileById(targetId)
    });

    return {
      checkIn: newCheckIn,
      recommendation,
      intervention: recommendation.intervention,
      profile: this.getProfileById(targetId)
    };
  }

  /**
   * Registra la valoración del alumno sobre si la intervención adaptativa ayudó
   */
  evaluateIntervention(interventionIdOrObj, helpedArg, profileIdArg) {
    let interventionId = interventionIdOrObj;
    let helped = helpedArg;
    let profileId = profileIdArg;

    if (typeof interventionIdOrObj === 'object' && interventionIdOrObj !== null) {
      interventionId = interventionIdOrObj.interventionId || interventionIdOrObj.id;
      helped = interventionIdOrObj.helped;
      profileId = interventionIdOrObj.profileId;
    }

    const targetId = profileId || this.activeProfileId;
    const profile = this.profiles.find((p) => p.id === targetId);
    if (!profile) throw new Error(`Perfil ${targetId} no encontrado`);

    const checkins = profile.historialCheckins || [];
    // Encontrar el último checkin que tuvo esta intervención
    for (let i = checkins.length - 1; i >= 0; i--) {
      if (checkins[i].intervencion === interventionId || !interventionId) {
        checkins[i].feedbackIntervencion = (helped === true || helped === 'si') ? 'si' : (helped === 'parcial' ? 'parcial' : 'no');
        break;
      }
    }

    // Actualizar ponderación de la regla para el usuario
    if (!profile.pesosIntervenciones) profile.pesosIntervenciones = {};
    const key = `${interventionId}`;
    let currWeight = profile.pesosIntervenciones[key] ?? 0.5;
    if (helped === true || helped === 'si') {
      currWeight = Math.min(1.0, currWeight + 0.15);
    } else if (helped === 'parcial') {
      currWeight = Math.min(1.0, Math.max(0.1, currWeight + 0.05));
    } else {
      currWeight = Math.max(0.1, currWeight - 0.20);
    }
    profile.pesosIntervenciones[key] = Number(currWeight.toFixed(2));

    this.saveToStorage();
    this.notifyListeners('intervention-evaluated', {
      interventionId,
      helped,
      profileId: targetId
    });

    return this.getProfileById(targetId);
  }

  /**
   * Modifica o asigna el plan semanal dual de un alumno
   */
  updatePlan(profileId, newPlan) {
    const targetId = profileId || this.activeProfileId;
    const profile = this.profiles.find((p) => p.id === targetId);
    if (!profile) throw new Error(`Perfil ${targetId} no encontrado`);

    profile.planSemanal = newPlan;
    this.saveToStorage();
    this.notifyListeners('plan-updated', { profileId: targetId, plan: newPlan });
    return this.getProfileById(targetId);
  }

  /**
   * Agenda una sesión 1-a-1 personalizada con el coach precargando telemetría
   */
  scheduleInterview(dateOrObj, timeArg, notesArg, profileIdArg) {
    let date = dateOrObj;
    let time = timeArg;
    let notes = notesArg;
    let profileId = profileIdArg;

    if (typeof dateOrObj === 'object' && dateOrObj !== null) {
      date = dateOrObj.date || dateOrObj.fecha;
      time = dateOrObj.time || dateOrObj.hora;
      notes = dateOrObj.notes || dateOrObj.notas;
      profileId = dateOrObj.profileId;
    }

    const targetId = profileId || this.activeProfileId;
    const profile = this.getProfileById(targetId);
    if (!profile) throw new Error(`Perfil ${targetId} no encontrado`);

    const talkingPoints = RulesEngine.generateInterviewTalkingPoints(profile);

    const interviewRequest = {
      id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      profileId: targetId,
      alumnoNombre: profile.nombre,
      alumnoArquetipo: profile.arquetipo,
      fecha: date || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      hora: time || '18:00',
      notas: notes || 'Revisión periódica de adherencia y calibración del plan dual.',
      status: 'confirmada',
      createdAt: new Date().toISOString(),
      resumenTelemetrico: {
        scoreAdherencia: profile.scoreAdherencia,
        tasaSalvatajeMinima: profile.tasaSalvatajeMinima,
        rachaActualSemanas: profile.rachaActualSemanas,
        alertaRiesgo: profile.alertaRiesgo,
        mttrDias: profile.mttrDias,
        totalCheckins: profile.totalCheckins,
        topBarrera: profile.barrerasFrecuentes?.[0]?.name || 'Ninguna registrada'
      },
      puntosConversacionSugeridos: talkingPoints
    };

    this.interviewRequests.push(interviewRequest);
    this.saveToStorage();
    this.notifyListeners('interview-scheduled', { interviewRequest, profile });
    return interviewRequest;
  }

  /**
   * Obtiene la lista de entrevistas 1-a-1 agendadas
   */
  getInterviewRequests() {
    return this.interviewRequests;
  }

  /**
   * Restaura el dataset demo de los 4 perfiles arquetípicos a su estado de fábrica
   */
  resetDemoData() {
    // Clon profundo de los perfiles iniciales
    this.profiles = JSON.parse(JSON.stringify(INITIAL_PROFILES));
    this.activeProfileId = 'alumno_martin';
    this.interviewRequests = [
      {
        id: 'req_demo_martin',
        profileId: 'alumno_martin',
        alumnoNombre: 'Martín Rossi',
        alumnoArquetipo: 'Perfeccionista / Todo o Nada',
        fecha: '2026-10-24',
        hora: '19:00',
        notas: 'Revisión de estrategia para días de audiencias judiciales largas.',
        status: 'confirmada',
        createdAt: '2026-10-21T18:00:00Z',
        resumenTelemetrico: {
          scoreAdherencia: 82,
          tasaSalvatajeMinima: 40,
          rachaActualSemanas: 4,
          alertaRiesgo: 'amarillo',
          mttrDias: 1.2,
          totalCheckins: 5,
          topBarrera: 'Falta de Tiempo / Agenda Saturada'
        },
        puntosConversacionSugeridos: RulesEngine.generateInterviewTalkingPoints(this.profiles[0])
      }
    ];
    this.pendingIntervention = null;
    this.saveToStorage();
    this.notifyListeners('demo-data-reset');
  }

  /**
   * Helper para obtener un plan por defecto
   */
  obtenerPlanPorDefecto(freq = 3) {
    return RulesEngine.buildDefaultPlan(freq);
  }
}

// Singleton global
export const AppState = new AppStateStore();

// Compatibilidad con window en el navegador
if (typeof window !== 'undefined') {
  window.AppState = AppState;
}
