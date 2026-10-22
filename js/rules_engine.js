/**
 * Entrenhábitos - Motor de Reglas Adaptativas y Diagnóstico Conductual
 * Implementación modular de reglas deterministas (COM-B, Fogg, Hábitos Atómicos, SDT)
 */

import { BARRIERS_CATALOG, INTERVENTIONS_CATALOG, ARCHETYPES_CATALOG } from './demo_data.js';

export class RulesEngine {
  /**
   * Diagnostica el perfil de adherencia inicial a partir del cuestionario de Onboarding
   * @param {Object} answers Respuestas del cuestionario
   * @returns {Object} Diagnóstico con arquetipo, hipótesis, frecuencia sugerida y plan base
   */
  static diagnoseProfile(answers = {}) {
    let archetypeKey = 'PERFECCIONISTA';
    let defaultFreq = 3;

    const falloHint = answers.q_reaccion_fallo || answers.reaccionFallo;
    const causaAbandono = answers.q_motivo_abandono || answers.causaAbandono;
    const disp = answers.q_disponibilidad || answers.disponibilidad;
    const historial = answers.q_historial || answers.historial;
    const minDuda = answers.q_version_minima || answers.versionMinima;

    // Inferencia de arquetipo por respuesta directa o combinación
    if (falloHint === 'todo_o_nada' || falloHint === 'PERFECCIONISTA' || minDuda === 'prefiere_ideal' || minDuda === 'resistant') {
      archetypeKey = 'PERFECCIONISTA';
    } else if (falloHint === 'agotado' || falloHint === 'FATIGA_COGNITIVA' || causaAbandono === 'energia' || causaAbandono === 'B2_ENERGY') {
      archetypeKey = 'FATIGA_COGNITIVA';
    } else if (falloHint === 'desborde' || falloHint === 'HORARIOS_CAOTICOS' || causaAbandono === 'desorganizacion' || causaAbandono === 'B3_ROUTINE_DISRUPTION') {
      archetypeKey = 'HORARIOS_CAOTICOS';
    } else if (falloHint === 'ciclico' || falloHint === 'REINICIADOR_CICLICO' || historial === 'esporadico') {
      archetypeKey = 'REINICIADOR_CICLICO';
    } else if (causaAbandono === 'tiempo' || causaAbandono === 'B1_TIME') {
      archetypeKey = 'PERFECCIONISTA';
    }

    // Frecuencia sugerida (respetando la regla de "Piso Sostenible")
    if (disp === '2_dias' || disp === 2) {
      defaultFreq = 2;
    } else if (disp === '4_dias' || disp === 4) {
      // Si tiene historial previo o es constante permite 4, si es principiante frena en 3
      defaultFreq = (historial === 'principiante' || historial === 'esporadico') ? 3 : 4;
    } else {
      defaultFreq = 3;
    }

    const archetype = ARCHETYPES_CATALOG[archetypeKey] || ARCHETYPES_CATALOG.PERFECCIONISTA;

    // Formulación de hipótesis diagnóstica personalizada
    let hipotesis = '';
    let barreraPredominante = 'B1_TIME';

    switch (archetypeKey) {
      case 'PERFECCIONISTA':
        barreraPredominante = 'B1_TIME';
        hipotesis = 'Fuerte sesgo de todo o nada: percibe que una sesión de menos de 60 minutos carece de valor. Ante un imprevisto de tiempo, tiende a cancelar en vez de adaptar. Hipótesis: Introducir de forma obligatoria la Versión Mínima de 15-20 min como éxito total reducirá el abandono en semanas complejas en más de un 60%.';
        break;
      case 'FATIGA_COGNITIVA':
        barreraPredominante = 'B2_ENERGY';
        hipotesis = 'Agotamiento mental agudo en horarios vespertinos post-jornada laboral. La fricción principal radica en superar la inercia estática y el traslado. Hipótesis: La prescripción de la Micro-meta de Entrada (Regla 2 Min) o rutinas en casa de 15 min permitirá salvar más del 75% de las sesiones en días de baja energía.';
        break;
      case 'HORARIOS_CAOTICOS':
        barreraPredominante = 'B3_ROUTINE_DISRUPTION';
        hipotesis = 'Imprevistos laborales o familiares frecuentes que desarticulan los planes con días fijos. Hipótesis: Habilitar reprogramación flexible con un clic y rutinas de contingencia sin aparatos evitará la desconexión total ante cambios de agenda.';
        break;
      case 'REINICIADOR_CICLICO':
        barreraPredominante = 'B5_GUILT_ALL_OR_NOTHING';
        hipotesis = 'Historial de entusiasmo desmedido en las semanas 1 y 2, seguido de sobrecarga física (agujetas severas) y deserción en semana 3 o 4. Hipótesis: Poner un techo conservador a la frecuencia inicial y activar la Rampa de Retorno Progresivo estabilizará el hábito más allá de los 60 días.';
        break;
    }

    // Generar estructura del plan semanal dual según la frecuencia acordada
    const planRecomendado = this.buildDefaultPlan(defaultFreq);

    return {
      arquetipoKey: archetypeKey,
      arquetipo: archetype.name,
      shortDesc: archetype.shortDesc,
      frecuenciaRecomendada: defaultFreq,
      barreraPredominante,
      hipotesis,
      planRecomendado,
      riskFactor: archetype.riskFactor,
      keyStrategy: archetype.keyStrategy
    };
  }

  // Alias para interoperabilidad de pruebas
  static diagnosticarPerfil(answers) {
    return this.diagnoseProfile(answers);
  }

  /**
   * Construye un plan semanal dual por defecto según la frecuencia deseada
   */
  static buildDefaultPlan(frecuencia = 3) {
    if (frecuencia === 2) {
      return {
        frecuenciaObjetivo: 2,
        dias: [
          {
            dia: 'Martes',
            nombreSesion: 'Full Body Funcional A',
            ideal: {
              titulo: 'Full Body Fuerza y Movilidad (50 min)',
              duracionMin: 50,
              ejercicios: [
                'Sentadilla Goblet con Mancuerna - 3x10',
                'Press de Banca con Mancuernas - 3x10',
                'Remo con Barra o Mancuerna - 3x10',
                'Plancha Abdominal - 3x40s'
              ]
            },
            minima: {
              titulo: 'Básicos Express ("Día Difícil", 15 min)',
              duracionMin: 15,
              ejercicios: [
                'Superserie: Sentadillas Copa (2x12) + Remo Mancuerna (2x10)',
                'Plancha Frontal - 1x45s'
              ]
            }
          },
          {
            dia: 'Jueves',
            nombreSesion: 'Full Body Funcional B',
            ideal: {
              titulo: 'Full Body Tracción y Cadena Posterior (50 min)',
              duracionMin: 50,
              ejercicios: [
                'Peso Muerto Rumano - 3x10',
                'Jalón al Pecho en Polea - 3x10',
                'Press Militar con Mancuernas - 3x10',
                'Zancadas Estáticas - 3x10 por pierna'
              ]
            },
            minima: {
              titulo: 'Cadena Posterior Express ("Día Difícil", 15 min)',
              duracionMin: 15,
              ejercicios: [
                'Superserie: Peso Muerto Mancuernas (2x10) + Jalón Polea (2x10)',
                'Puente de Glúteos - 2x15'
              ]
            }
          }
        ]
      };
    }

    if (frecuencia === 4) {
      return {
        frecuenciaObjetivo: 4,
        dias: [
          {
            dia: 'Lunes',
            nombreSesion: 'Torso Fuerza',
            ideal: {
              titulo: 'Torso Superior Completo (60 min)',
              duracionMin: 60,
              ejercicios: ['Press Banca - 4x8', 'Remo con Barra - 4x10', 'Press Militar - 3x10', 'Jalón Pecho - 3x12']
            },
            minima: {
              titulo: 'Torso Rápido ("Día Difícil", 20 min)',
              duracionMin: 20,
              ejercicios: ['Press Banca Mancuernas - 2x10', 'Remo Polea Baja - 2x10', 'Elevaciones Laterales - 2x15']
            }
          },
          {
            dia: 'Miércoles',
            nombreSesion: 'Pierna Hipertrofia',
            ideal: {
              titulo: 'Pierna Completa (60 min)',
              duracionMin: 60,
              ejercicios: ['Sentadilla Trasera - 4x8', 'Prensa Inclinada - 3x12', 'Peso Muerto Rumano - 3x10', 'Curl Femoral - 3x12']
            },
            minima: {
              titulo: 'Pierna Express ("Día Difícil", 20 min)',
              duracionMin: 20,
              ejercicios: ['Sentadilla Goblet - 2x12', 'Prensa Piernas - 2x10', 'Puente Glúteos - 2x15']
            }
          },
          {
            dia: 'Viernes',
            nombreSesion: 'Full Body',
            ideal: {
              titulo: 'Full Body Funcional (55 min)',
              duracionMin: 55,
              ejercicios: ['Peso Muerto Convencional - 3x8', 'Press Inclinado - 3x10', 'Dominadas o Jalón - 3x10', 'Zancadas - 3x10']
            },
            minima: {
              titulo: 'Full Body Rescate ("Día Difícil", 15 min)',
              duracionMin: 15,
              ejercicios: ['Superserie Prensa (2x12) + Remo (2x10)', 'Plancha - 1x45s']
            }
          },
          {
            dia: 'Sábado',
            nombreSesion: 'Acondicionamiento Activo',
            ideal: {
              titulo: 'Acondicionamiento y Core (45 min)',
              duracionMin: 45,
              ejercicios: ['Cardio continuo - 25 min', 'Circuito de Core - 3 rondas', 'Movilidad articular - 10 min']
            },
            minima: {
              titulo: 'Caminata y Movilidad (20 min)',
              duracionMin: 20,
              ejercicios: ['Caminata rápida - 15 min', 'Movilidad articular - 5 min']
            }
          }
        ]
      };
    }

    // Frecuencia estándar = 3 días
    return {
      frecuenciaObjetivo: 3,
      dias: [
        {
          dia: 'Lunes',
          nombreSesion: 'Empuje y Torso',
          ideal: {
            titulo: 'Torso y Empuje (55 min)',
            duracionMin: 55,
            ejercicios: [
              'Press de Banca con Mancuernas - 4x10',
              'Remo en Polea o Mancuerna - 4x10',
              'Press Militar de Hombros - 3x10',
              'Elevaciones Laterales - 3x12',
              'Plancha Abdominal - 3x40s'
            ]
          },
          minima: {
            titulo: 'Básicos Torso ("Día Difícil", 18 min)',
            duracionMin: 18,
            ejercicios: [
              'Press con Mancuernas - 2x10',
              'Remo con Mancuerna - 2x10',
              'Elevaciones Laterales - 2x12'
            ]
          }
        },
        {
          dia: 'Miércoles',
          nombreSesion: 'Pierna y Cadera',
          ideal: {
            titulo: 'Fuerza Pierna y Glúteo (55 min)',
            duracionMin: 55,
            ejercicios: [
              'Sentadillas en Prensa o Copa - 4x10',
              'Peso Muerto Rumano con Mancuernas - 4x10',
              'Zancadas Estáticas - 3x10 por pierna',
              'Curl Femoral o Puente de Glúteos - 3x12',
              'Gemelos de Pie - 3x15'
            ]
          },
          minima: {
            titulo: 'Pierna Express ("Día Difícil", 18 min)',
            duracionMin: 18,
            ejercicios: [
              'Sentadilla Copa (Goblet) - 2x12',
              'Peso Muerto con Mancuernas - 2x10',
              'Puente de Glúteos - 2x15'
            ]
          }
        },
        {
          dia: 'Viernes',
          nombreSesion: 'Full Body Funcional',
          ideal: {
            titulo: 'Full Body y Salud Postural (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Jalón al Pecho Agarre Neutro - 4x10',
              'Press Inclinado con Mancuernas - 3x10',
              'Prensa Inclinada de Piernas - 3x12',
              'Face Pulls para Hombros y Postura - 3x15',
              'Deadbug y Core - 3 rondas'
            ]
          },
          minima: {
            titulo: 'Circuito 2 Ejercicios ("Día Difícil", 15 min)',
            duracionMin: 15,
            ejercicios: [
              'Superserie: Prensa de Piernas (2x12) + Jalón en Polea (2x10)',
              'Plancha frontal activa - 1x45s'
            ]
          }
        }
      ]
    };
  }

  /**
   * Evalúa el contexto del check-in y el historial del alumno para disparar intervenciones adaptativas
   * @param {Object} checkInContext Vector de entrada del check-in
   * @param {Object} profileHistory Perfil del alumno con su historial de check-ins
   * @returns {Object} Recomendación adaptativa con regla, prioridad, justificación y acción
   */
  static evaluate(checkInContext = {}, profileHistory = {}) {
    const status = checkInContext.status || checkInContext.estado;
    const barrierId = checkInContext.barrierId || checkInContext.barrera;
    const energy = Number(checkInContext.energyLevel ?? checkInContext.energia ?? 3);
    const difficulty = Number(checkInContext.difficulty ?? checkInContext.dificultad ?? 3);
    const checkins = profileHistory.historialCheckins || profileHistory.checkins || [];

    // Calcular sesiones perdidas consecutivas recientes
    let consecutiveMisses = 0;
    for (let i = checkins.length - 1; i >= 0; i--) {
      const s = checkins[i].estado || checkins[i].status;
      if (s === 'missed' || s === 'perdida' || s === 'no_entrene') {
        consecutiveMisses++;
      } else {
        break;
      }
    }
    // Si el check-in actual es inasistencia, sumar al contador
    if (status === 'missed' || status === 'perdida' || status === 'no_entrene') {
      consecutiveMisses++;
    }

    // Calcular días sin entrenar (gap days)
    let gapDays = 0;
    if (checkins.length > 0) {
      const lastSession = checkins[checkins.length - 1];
      const lastDate = new Date(lastSession.fecha || lastSession.date);
      const currDate = new Date(checkInContext.fecha || checkInContext.date || new Date().toISOString().split('T')[0]);
      gapDays = Math.max(0, Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24)));
    }

    // Regla de celebración para sesión ideal sin barreras
    if ((status === 'ideal' || status === 'COMPLETED_IDEAL') && !barrierId) {
      return {
        ruleId: 'RULE_CELEBRATION_01',
        priority: 'low',
        type: 'celebration',
        title: '¡Sesión Ideal Completada!',
        rationale: 'Cumplimiento impecable de la rutina completa. El refuerzo positivo dopaminérgico inmediato consolida la identidad de la persona constante.',
        intervention: null,
        expectedCheck: 'Verificar en el próximo check-in si la energía se mantuvo positiva.'
      };
    }

    // Regla de celebración y refuerzo para versión mínima (¡Salvataje exitoso!)
    if (status === 'minima' || status === 'COMPLETED_MINIMAL') {
      const barrierObj = BARRIERS_CATALOG[barrierId] || { name: 'Día Complejo' };
      return {
        ruleId: 'RULE_RESCUE_CONFIRMED_01',
        priority: 'medium',
        type: 'rescue_confirmed',
        title: '¡Hábito Salvado con la Versión Mínima!',
        rationale: `Fogg Behavior Model: Ante la barrera "${barrierObj.name}", ajustaste la dificultad a 15-20 min en lugar de abandonar. 15 minutos es infinitamente superior a 0 minutos.`,
        intervention: {
          id: 'INT_01',
          code: 'INT-01',
          title: 'Versión Mínima Validada',
          actionType: 'minimal_confirmed',
          badge: 'Hábito Protegido'
        },
        expectedCheck: 'Comprobar en la próxima sesión si la persona retoma con confianza.'
      };
    }

    // REGLAS PARA SESIONES PERDIDAS O BARRERAS DECLARADAS

    // Regla R-07: Inactividad prolongada (gapDays >= 7)
    if (gapDays >= 7) {
      const intObj = INTERVENTIONS_CATALOG.INT_06;
      return {
        ruleId: 'RULE_PROT_RAMP_07',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Activación de Rampa de Retorno Progresivo',
        rationale: 'Han pasado 7 o más días desde tu último entrenamiento. Entrenar hoy al 100% causaría dolor muscular extremo (DOMS) y frustración. Prescribimos 1 semana al 60% de volumen para restaurar el hábito de forma segura.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Se completó la primera sesión suave sin dolor incapacitante?'
      };
    }

    // Regla R-06: Riesgo inminente de abandono (2 o más faltas consecutivas)
    if (consecutiveMisses >= 2) {
      const intObj = INTERVENTIONS_CATALOG.INT_05;
      return {
        ruleId: 'RULE_RECOVERY_02',
        priority: 'critical',
        type: 'coach_alert_and_intervention',
        title: 'Alerta Preventiva: Protocolo de Retorno Sin Culpa',
        rationale: 'Acumulás 2 sesiones consecutivas no realizadas. El peligro no es perder sesiones, sino caer en el ciclo de culpa y desconexión total. Blindamos tu retorno mañana en versión mínima sin compensar deudas.',
        intervention: intObj,
        coachAlert: true,
        expectedCheck: 'Verificar si el alumno reanuda en las próximas 48 horas.'
      };
    }

    // Reglas por Barrera Específica

    // 1. Barrera B1: Falta de Tiempo / Agenda Saturada
    if (barrierId === 'B1_TIME' || barrierId === 'falta_tiempo') {
      const intObj = INTERVENTIONS_CATALOG.INT_01;
      return {
        ruleId: 'RULE_TIME_01',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Activá la Versión Mínima (15-20 min)',
        rationale: 'El sesgo "todo o nada" te hace creer que necesitás 60 minutos libres. Con solo 18 minutos ejecutando 2 ejercicios básicos preservás tu hábito y salud muscular.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Te sirvió activar la versión express para no cancelar el día?'
      };
    }

    // 2. Barrera B2: Baja Energía / Cansancio Extremo
    if (barrierId === 'B2_ENERGY' || barrierId === 'baja_energia' || energy <= 2) {
      const intObj = INTERVENTIONS_CATALOG.INT_02;
      return {
        ruleId: 'RULE_ENERGY_03',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Micro-meta de Entrada (Regla 2 Min)',
        rationale: 'Cuando la motivación cae por fatiga mental, forzarse a 1 hora genera aversión. Tu único compromiso hoy es llegar al gimnasio y caminar 5-10 minutos. Tenés permiso explícito de retirarte si el cansancio persiste.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Superaste la inercia de arranque al aplicar la micro-meta?'
      };
    }

    // 3. Barrera B3: Disrupción de Rutina / Viaje / Imprevisto
    if (barrierId === 'B3_ROUTINE_DISRUPTION' || barrierId === 'cambio_rutina') {
      const intObj = INTERVENTIONS_CATALOG.INT_04;
      return {
        ruleId: 'RULE_DISRUPTION_04',
        priority: 'medium',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Rutina Express en Casa / Habitación (12-15 min)',
        rationale: 'Estás fuera de tu entorno habitual. Para no romper la señal del hábito, te proponemos un circuito de peso corporal de 15 minutos en el lugar donde estés, sin aparatos ni traslados.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Pudiste realizar la rutina de movilidad sin depender del gimnasio?'
      };
    }

    // 4. Barrera B4: Fricción Logística / Gym Colmado / Clima
    if (barrierId === 'B4_LOGISTICS' || barrierId === 'friccion_logistica') {
      const intObj = INTERVENTIONS_CATALOG.INT_07;
      return {
        ruleId: 'RULE_LOGISTICS_07',
        priority: 'medium',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Ventana de Menor Fricción o En Casa',
        rationale: 'El gimnasio saturado o las inclemencias del clima disparan el estrés antes de empezar. Sugerimos ajustar tu horario a primera hora de la mañana o realizar la versión en casa hoy.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Mejoró la adherencia al cambiar de horario o lugar?'
      };
    }

    // 5. Barrera B5: Desmotivación / Culpa ("Todo o Nada")
    if (barrierId === 'B5_GUILT_ALL_OR_NOTHING' || barrierId === 'desmotivacion') {
      const intObj = INTERVENTIONS_CATALOG.INT_05;
      return {
        ruleId: 'RULE_GUILT_05',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Protocolo "Never Miss Twice" (Retorno Sin Culpa)',
        rationale: 'Un tropiezo no borra tu esfuerzo ni arruina tu progreso. En Entrenhábitos no buscamos perfección rígida, sino resiliencia. Bloqueamos tu sesión más cercana en versión mínima.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Lograste volver al día siguiente sin arrastrar culpa?'
      };
    }

    // Fallback general para inasistencias sin barrera declarada
    return {
      ruleId: 'RULE_FALLBACK_DEFAULT',
      priority: 'medium',
      type: 'adaptive_intervention',
      title: 'Protocolo de Retorno Amigable',
      rationale: 'Registrar honestamente que hoy no se pudo es el paso más valioso. Tu rutina te espera sin juicios para la próxima sesión programada.',
      intervention: INTERVENTIONS_CATALOG.INT_03,
      expectedCheck: 'Check-in en t+1: ¿Se reanudó la actividad?'
    };
  }

  // Alias para interoperabilidad de pruebas
  static generarRecomendacion(contexto, historial) {
    return this.evaluate(contexto, historial);
  }

  /**
   * Calcula todas las métricas clínicas, de adherencia y semáforos de riesgo para un perfil
   * @param {Object} profile Datos del alumno con su historial de check-ins
   * @returns {Object} Métricas calculadas en tiempo real
   */
  static calculateMetrics(profile = {}) {
    const checkins = profile.historialCheckins || [];
    const total = checkins.length;

    if (total === 0) {
      return {
        totalCheckins: 0,
        idealCount: 0,
        minimaCount: 0,
        missedCount: 0,
        tasaAdherencia: 0,
        tasaSalvatajeMinima: 0,
        rachaActualSemanas: 0,
        consecutiveMisses: 0,
        mttrDias: 0,
        alertaRiesgo: 'verde',
        barrerasFrecuentes: [],
        efectividadIntervenciones: []
      };
    }

    let idealCount = 0;
    let minimaCount = 0;
    let missedCount = 0;
    const barrierCounts = {};

    checkins.forEach((chk) => {
      const s = chk.estado || chk.status;
      if (s === 'ideal') idealCount++;
      else if (s === 'minima') minimaCount++;
      else if (s === 'missed' || s === 'perdida' || s === 'no_entrene') missedCount++;

      const b = chk.barrera || chk.barrier;
      if (b) {
        barrierCounts[b] = (barrierCounts[b] || 0) + 1;
      }
    });

    const completed = idealCount + minimaCount;
    const tasaAdherencia = Math.round((completed / total) * 100);
    const tasaSalvatajeMinima = completed > 0 ? Math.round((minimaCount / completed) * 100) : 0;

    // Calcular racha actual en semanas (o sesiones consecutivas)
    let consecutiveMisses = 0;
    for (let i = total - 1; i >= 0; i--) {
      const s = checkins[i].estado || checkins[i].status;
      if (s === 'missed' || s === 'perdida' || s === 'no_entrene') {
        consecutiveMisses++;
      } else {
        break;
      }
    }

    // Calcular MTTR (Mean Time to Return en días tras fallos)
    let totalReturnDays = 0;
    let returnEvents = 0;
    for (let i = 0; i < total - 1; i++) {
      const curr = checkins[i];
      const next = checkins[i + 1];
      const currStatus = curr.estado || curr.status;
      const nextStatus = next.estado || next.status;

      if ((currStatus === 'missed' || currStatus === 'perdida') && (nextStatus === 'ideal' || nextStatus === 'minima')) {
        const d1 = new Date(curr.fecha);
        const d2 = new Date(next.fecha);
        const diffDays = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
        totalReturnDays += diffDays;
        returnEvents++;
      }
    }
    const mttrDias = returnEvents > 0 ? Number((totalReturnDays / returnEvents).toFixed(1)) : (missedCount > 0 ? 3.0 : 1.0);

    // Calcular semáforo de riesgo de abandono
    let alertaRiesgo = 'verde';
    if (consecutiveMisses >= 2 || tasaAdherencia < 50) {
      alertaRiesgo = 'rojo';
    } else if (consecutiveMisses === 1 || tasaAdherencia < 75 || tasaSalvatajeMinima >= 50) {
      alertaRiesgo = 'amarillo';
    }

    // Formatear barreras frecuentes
    const barrerasFrecuentes = Object.entries(barrierCounts).map(([key, count]) => {
      const bObj = BARRIERS_CATALOG[key] || { name: key, icon: '⚠️' };
      return {
        id: key,
        name: bObj.name,
        icon: bObj.icon,
        count,
        percentage: Math.round((count / total) * 100)
      };
    }).sort((a, b) => b.count - a.count);

    // Analizar efectividad de intervenciones
    const intervencionesMap = {};
    checkins.forEach((chk) => {
      if (chk.intervencion) {
        if (!intervencionesMap[chk.intervencion]) {
          intervencionesMap[chk.intervencion] = { id: chk.intervencion, total: 0, positive: 0, negative: 0, partial: 0 };
        }
        intervencionesMap[chk.intervencion].total++;
        if (chk.feedbackIntervencion === 'si') intervencionesMap[chk.intervencion].positive++;
        else if (chk.feedbackIntervencion === 'no') intervencionesMap[chk.intervencion].negative++;
        else if (chk.feedbackIntervencion === 'parcial') intervencionesMap[chk.intervencion].partial++;
      }
    });

    const efectividadIntervenciones = Object.values(intervencionesMap).map((it) => {
      const intObj = INTERVENTIONS_CATALOG[it.id] || { title: it.id, code: it.id };
      const rate = it.total > 0 ? Math.round(((it.positive + it.partial * 0.5) / it.total) * 100) : 0;
      return {
        id: it.id,
        code: intObj.code,
        title: intObj.title,
        total: it.total,
        positive: it.positive,
        negative: it.negative,
        successRate: rate
      };
    });

    return {
      totalCheckins: total,
      idealCount,
      minimaCount,
      missedCount,
      tasaAdherencia,
      tasaSalvatajeMinima,
      rachaActualSemanas: profile.rachaActualSemanas || (tasaAdherencia >= 75 ? Math.max(1, Math.floor(total / 3)) : 0),
      consecutiveMisses,
      mttrDias,
      alertaRiesgo,
      barrerasFrecuentes,
      efectividadIntervenciones
    };
  }

  // Alias para interoperabilidad de pruebas
  static calcularMetricas(profile) {
    return this.calculateMetrics(profile);
  }

  /**
   * Genera de forma automatizada los puntos estratégicos de conversación (Talking Points) para la sesión 1-a-1 con el coach
   * @param {Object} profile Datos del alumno
   * @returns {Array<Object>} Lista de 3 a 4 puntos sugeridos con fundamento clínico
   */
  static generateInterviewTalkingPoints(profile = {}) {
    const metrics = this.calculateMetrics(profile);
    const talkingPoints = [];

    // 1. Evaluación de hipótesis de Onboarding
    talkingPoints.push({
      categoria: 'Hipótesis de Adherencia',
      tema: `Contraste de hipótesis: ${profile.arquetipo || 'Perfil General'}`,
      detalle: profile.hipotesis
        ? `Revisar si la hipótesis inicial se corroboró en la práctica: "${profile.hipotesis.slice(0, 120)}..."`
        : 'Evaluar cómo se sintió el alumno con la estructura del plan semanal y la carga percibida.',
      sugerenciaCoach: 'Preguntar: "¿Sentiste que el plan encajó con tu vida real o te generó fricción mental?"'
    });

    // 2. Análisis de barreras recurrentes e intervenciones
    if (metrics.barrerasFrecuentes.length > 0) {
      const topBarrier = metrics.barrerasFrecuentes[0];
      talkingPoints.push({
        categoria: 'Barrera Crónica',
        tema: `Gatillador frecuente: ${topBarrier.name} (${topBarrier.count} veces reportada)`,
        detalle: `Esta barrera representó el ${topBarrier.percentage}% de las fricciones registradas. Es el punto neurálgico a resolver en esta entrevista.`,
        sugerenciaCoach: `Explorar qué ocurre exactamente en los momentos de ${topBarrier.name.toLowerCase()} y co-diseñar una salvaguarda ambiental.`
      });
    } else {
      talkingPoints.push({
        categoria: 'Constancia Destacada',
        tema: 'Excelente consistencia sin barreras severas',
        detalle: 'El alumno no reportó fricciones crónicas en las últimas semanas.',
        sugerenciaCoach: 'Felicitar por el avance y evaluar si desea aumentar un día o si prefiere consolidar la rutina actual.'
      });
    }

    // 3. Calibración del Plan Dual (Uso de Versión Mínima)
    if (metrics.tasaSalvatajeMinima >= 35) {
      talkingPoints.push({
        categoria: 'Calibración de Rutina',
        tema: `Alto uso de Versión Mínima (${metrics.tasaSalvatajeMinima}% de los entrenamientos)`,
        detalle: 'El alumno acude frecuentemente a la rutina de rescate. Aunque evitó el abandono, el plan ideal puede estar sobredimensionado.',
        sugerenciaCoach: 'Proponer convertir formalmente la versión mínima en la rutina oficial o acortar la ideal a 40 minutos.'
      });
    } else if (metrics.tasaSalvatajeMinima > 0) {
      talkingPoints.push({
        categoria: 'Rescate Efectivo',
        tema: `Salvataje exitoso de sesiones (${metrics.tasaSalvatajeMinima}%)`,
        detalle: 'La versión mínima funcionó como ancla de rescate ante días difíciles, evitando el efecto todo o nada.',
        sugerenciaCoach: 'Reforzar el valor de haber entrenado 15 minutos en vez de desistir.'
      });
    }

    // 4. Alerta de Riesgo o Retorno Rápido (MTTR)
    if (metrics.alertaRiesgo === 'rojo') {
      talkingPoints.push({
        categoria: 'Riesgo Crítico de Abandono',
        tema: 'Desconexión reciente / 2+ sesiones no realizadas',
        detalle: `MTTR elevado (${metrics.mttrDias} días). Existe alto riesgo de deserción por vergüenza o pérdida del hábito.`,
        sugerenciaCoach: 'Ofrecer un "Reinicio Limpio sin Deudas": acordar que lo pasado quedó atrás y empezar de cero con la próxima sesión.'
      });
    } else {
      talkingPoints.push({
        categoria: 'Compromiso Futuro',
        tema: 'Blindaje de las próximas dos semanas',
        detalle: `Racha actual protegida: ${metrics.rachaActualSemanas} semanas. Adherencia del ${metrics.tasaAdherencia}%.`,
        sugerenciaCoach: 'Pactar la meta de la próxima quincena y agendar el próximo control quincenal.'
      });
    }

    return talkingPoints;
  }

  // Alias para interoperabilidad de pruebas
  static generarPuntosEntrevista(profile) {
    return this.generateInterviewTalkingPoints(profile);
  }
}

// Global browser window compatibility
if (typeof window !== 'undefined') {
  window.RulesEngine = RulesEngine;
}
