/**
 * ============================================================================
 * ENTRENHÁBITOS — E2E TEST & AUDIT VERIFICATION HARNESS
 * ============================================================================
 * Suite de Verificación Programática y de Integridad de Extremo a Extremo
 * Framework: Nativo Node.js 24 (node:test y node:assert/strict)
 * Arquitectura: Opaque-Box guiada por requerimientos (4 Tiers)
 *
 * Trazabilidad:
 * - ORIGINAL_REQUEST.md (R1, R2, R3, R4, Criterios de Aceptación)
 * - PROJECT.md (Features F01 a F18)
 * - TEST_INFRA.md (Metodología de 4 Tiers)
 * ============================================================================
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolver directorios del proyecto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Importaciones del Núcleo de Software (ESM)
import {
  BARRIERS_CATALOG,
  INTERVENTIONS_CATALOG,
  ARCHETYPES_CATALOG,
  INITIAL_PROFILES,
  ONBOARDING_QUESTIONS
} from '../js/demo_data.js';

import { RulesEngine } from '../js/rules_engine.js';
import { AppState, AppStateStore } from '../js/store.js';

// ============================================================================
// SUITE 1: INTEGRIDAD DE ENTREGABLES Y ARTEFACTOS DEL SISTEMA
// ============================================================================
describe('SUITE 1: Integridad y Existencia de Archivos del Proyecto', () => {

  it('1.1 Debe existir la documentación estratégica y técnica completa en docs/ con contenido sustancial', () => {
    const requiredDocs = [
      { file: 'docs/R1_DISENO_CONDUCTUAL_E_INNOVACION.md', minBytes: 40000, keywords: ['Fogg', 'MAP', 'Hábitos Atómicos', 'Todo o Nada', 'INT-01'] },
      { file: 'docs/R2_SRS_REQUERIMIENTOS_Y_MODELADO.md', minBytes: 40000, keywords: ['IEEE', 'RF-01', 'RNF-01', 'Gherkin', 'Mermaid'] },
      { file: 'docs/R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md', minBytes: 30000, keywords: ['WBS', 'Roadmap', 'MTTR', 'Salvataje', 'Riesgos'] },
      { file: 'TEST_INFRA.md', minBytes: 15000, keywords: ['Opaque-Box', 'Tier 1', 'F01', 'F18', 'Martín Rossi'] }
    ];

    for (const doc of requiredDocs) {
      const fullPath = path.join(ROOT_DIR, doc.file);
      assert.ok(fs.existsSync(fullPath), `El archivo requerido ${doc.file} debe existir.`);
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size >= doc.minBytes, `${doc.file} debe tener contenido exhaustivo (>= ${doc.minBytes} bytes, actual: ${stat.size} bytes).`);

      const content = fs.readFileSync(fullPath, 'utf8');
      for (const kw of doc.keywords) {
        assert.ok(content.includes(kw), `${doc.file} debe contener el concepto clave "${kw}".`);
      }
    }
  });

  it('1.2 Debe existir el prototipo web interactivo autocontenido (HTML, CSS, JS)', () => {
    const requiredFiles = [
      'index.html',
      'css/styles.css',
      'js/app.js',
      'js/store.js',
      'js/rules_engine.js',
      'js/demo_data.js'
    ];

    for (const relPath of requiredFiles) {
      const fullPath = path.join(ROOT_DIR, relPath);
      assert.ok(fs.existsSync(fullPath), `El archivo de software ${relPath} debe existir.`);
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size > 500, `El archivo ${relPath} debe tener contenido válido (>500 bytes).`);
    }
  });

  it('1.3 index.html debe incluir los contenedores y elementos semánticos para Vista Alumno y Coach', () => {
    const htmlContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

    // Selectores de rol y perfiles
    assert.ok(htmlContent.includes('id="btn-role-student"'), 'Debe existir botón de Vista Alumno');
    assert.ok(htmlContent.includes('id="btn-role-coach"'), 'Debe existir botón de Vista Coach');
    assert.ok(htmlContent.includes('id="global-profile-select"'), 'Debe existir selector global de perfiles');
    assert.ok(htmlContent.includes('id="btn-reset-demo"'), 'Debe existir botón de reinicio demo');

    // Secciones de vista
    assert.ok(htmlContent.includes('id="view-student"'), 'Debe existir contenedor #view-student');
    assert.ok(htmlContent.includes('id="view-coach"'), 'Debe existir contenedor #view-coach');

    // Pestañas del Alumno
    assert.ok(htmlContent.includes('tab-student-onboarding'), 'Debe existir tab de Onboarding');
    assert.ok(htmlContent.includes('tab-student-plan'), 'Debe existir tab de Plan Dual');
    assert.ok(htmlContent.includes('tab-student-checkin'), 'Debe existir tab de Check-in Rápido');
    assert.ok(htmlContent.includes('tab-student-adaptive'), 'Debe existir tab de Recomendaciones Adaptativas');
    assert.ok(htmlContent.includes('tab-student-progress'), 'Debe existir tab de Progreso y Agenda');

    // Elementos de Coach
    assert.ok(htmlContent.includes('coach-header-stats') || htmlContent.includes('cohort-table'), 'Debe existir resumen de cohorte en Coach');
    assert.ok(htmlContent.includes('coach-talking-points-list'), 'Debe existir contenedor de Talking Points');
    assert.ok(htmlContent.includes('coach-interviews-tray'), 'Debe existir bandeja de entrevistas agendadas');

    // Scripts cargados como type="module"
    assert.ok(htmlContent.includes('src="js/demo_data.js"'), 'Debe cargar demo_data.js');
    assert.ok(htmlContent.includes('src="js/rules_engine.js"'), 'Debe cargar rules_engine.js');
    assert.ok(htmlContent.includes('src="js/store.js"'), 'Debe cargar store.js');
    assert.ok(htmlContent.includes('src="js/app.js"'), 'Debe cargar app.js');
  });

  it('1.4 css/styles.css debe definir el sistema de diseño "Athletic Precision"', () => {
    const cssContent = fs.readFileSync(path.join(ROOT_DIR, 'css', 'styles.css'), 'utf8');

    // Tokens de color requeridos
    assert.ok(cssContent.includes('--bg-primary') || cssContent.includes('#0f172a'), 'Debe definir fondo dark slate');
    assert.ok(cssContent.includes('--accent-green') || cssContent.includes('#22c55e') || cssContent.includes('#84cc16'), 'Debe definir acento lima');
    assert.ok(cssContent.includes('--accent-amber') || cssContent.includes('#f59e0b'), 'Debe definir acento preventivo ámbar');
    assert.ok(cssContent.includes('--accent-coral') || cssContent.includes('#ef4444'), 'Debe definir acento crítico coral');

    // Reglas de diseño responsivo
    assert.ok(cssContent.includes('@media'), 'Debe incluir media queries responsivas');
  });
});

// ============================================================================
// SUITE 2: CATÁLOGO DEMO, ARQUETIPOS Y MODELOS DE DOMINIO
// ============================================================================
describe('SUITE 2: Carga e Inicialización del Catálogo Demo', () => {

  it('2.1 Debe cargar el catálogo de las 5 familias de barreras conductuales MECE', () => {
    assert.ok(BARRIERS_CATALOG, 'El catálogo de barreras debe estar definido');
    const barrierKeys = Object.keys(BARRIERS_CATALOG);
    assert.equal(barrierKeys.length, 5, 'Debe haber exactamente 5 familias principales de barreras');

    const expectedFamilies = ['B1_TIME', 'B2_ENERGY', 'B3_ROUTINE_DISRUPTION', 'B4_LOGISTICS', 'B5_GUILT_ALL_OR_NOTHING'];
    for (const expectedId of expectedFamilies) {
      assert.ok(BARRIERS_CATALOG[expectedId], `Debe existir la barrera ${expectedId}`);
      assert.ok(BARRIERS_CATALOG[expectedId].name.length > 5, 'La barrera debe tener nombre descriptivo');
      assert.ok(BARRIERS_CATALOG[expectedId].description.length > 10, 'La barrera debe tener descripción diagnóstica');
    }
  });

  it('2.2 Debe cargar el catálogo de las 7 intervenciones adaptativas estandarizadas (INT-01 a INT-07)', () => {
    assert.ok(INTERVENTIONS_CATALOG, 'El catálogo de intervenciones debe estar definido');
    const interventionKeys = Object.keys(INTERVENTIONS_CATALOG);
    assert.equal(interventionKeys.length, 7, 'Debe haber exactamente 7 intervenciones estandarizadas');

    for (let i = 1; i <= 7; i++) {
      const code = `INT_0${i}`;
      assert.ok(INTERVENTIONS_CATALOG[code], `Debe existir la intervención ${code}`);
      const item = INTERVENTIONS_CATALOG[code];
      assert.ok(item.title.length > 5, `${code} debe tener título`);
      assert.ok(item.description.length > 15, `${code} debe tener descripción operativa`);
      assert.ok(item.rationale.length > 15, `${code} debe tener fundamentación científica`);
      assert.ok(Array.isArray(item.details), `${code} debe contener pasos detallados de acción`);
    }
  });

  it('2.3 Debe cargar los 4 perfiles arquetípicos demo precargados con datos consistentes', () => {
    assert.ok(Array.isArray(INITIAL_PROFILES), 'INITIAL_PROFILES debe ser un array');
    assert.equal(INITIAL_PROFILES.length, 4, 'Deben existir exactamente 4 perfiles arquetípicos demo');

    const expectedIds = ['alumno_martin', 'alumno_lucia', 'alumno_carlos', 'alumno_sofia'];
    const actualIds = INITIAL_PROFILES.map((p) => p.id);
    assert.deepEqual(actualIds, expectedIds, 'Los IDs de los 4 perfiles deben coincidir con la especificación');

    // Martín Rossi (Perfeccionista / Todo o Nada)
    const martin = INITIAL_PROFILES.find((p) => p.id === 'alumno_martin');
    assert.equal(martin.nombre, 'Martín Rossi');
    assert.equal(martin.alertaRiesgo, 'amarillo');
    assert.ok(martin.historialCheckins.length >= 5, 'Martín debe tener historial precargado');

    // Lucía Méndez (Fatiga Cognitiva / Baja Energía)
    const lucia = INITIAL_PROFILES.find((p) => p.id === 'alumno_lucia');
    assert.equal(lucia.nombre, 'Lucía Méndez');
    assert.equal(lucia.alertaRiesgo, 'verde');
    assert.ok(lucia.scoreAdherencia >= 85, 'Lucía debe tener adherencia alta');

    // Carlos Gómez (Horarios Caóticos / Turnos de Urgencia)
    const carlos = INITIAL_PROFILES.find((p) => p.id === 'alumno_carlos');
    assert.equal(carlos.nombre, 'Carlos Gómez');
    assert.equal(carlos.alertaRiesgo, 'rojo');
    assert.ok(carlos.mttrDias > 2.0, 'Carlos debe tener MTTR alto indicando riesgo de deserción');

    // Sofía Pereira (Nuevo Ingreso / Evaluación en Blanco)
    const sofia = INITIAL_PROFILES.find((p) => p.id === 'alumno_sofia');
    assert.equal(sofia.nombre, 'Sofía Pereira');
    assert.equal(sofia.historialCheckins.length, 0, 'Sofía debe iniciar con historial vacío para onboarding');
  });

  it('2.4 Debe existir el cuestionario formal de Onboarding (5 preguntas clave)', () => {
    assert.ok(Array.isArray(ONBOARDING_QUESTIONS), 'ONBOARDING_QUESTIONS debe ser un array');
    assert.equal(ONBOARDING_QUESTIONS.length, 5, 'Deben existir 5 preguntas clave de onboarding');
    for (const q of ONBOARDING_QUESTIONS) {
      assert.ok(q.id && q.title, 'Cada pregunta debe tener ID y enunciado');
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, 'Cada pregunta debe tener opciones');
    }
  });
});

// ============================================================================
// SUITE 3: EVALUACIÓN INICIAL, ONBOARDING Y FORMULACIÓN DE HIPÓTESIS (F01, F02)
// ============================================================================
describe('SUITE 3: Evaluación Inicial / Onboarding y Cálculo de Perfil', () => {

  it('3.1 Debe diagnosticar arquetipo "PERFECCIONISTA" ante tendencia al todo o nada', () => {
    const respuestas = {
      q_reaccion_fallo: 'todo_o_nada',
      q_motivo_abandono: 'desmotivacion',
      q_disponibilidad: '3_dias',
      q_version_minima: 'prefiere_ideal'
    };

    const diag = RulesEngine.diagnoseProfile(respuestas);
    assert.equal(diag.arquetipoKey, 'PERFECCIONISTA');
    assert.match(diag.arquetipo, /Perfeccionista/i);
    assert.match(diag.hipotesis, /todo o nada|perfeccion/i);
    assert.equal(diag.frecuenciaRecomendada, 3);
    assert.ok(diag.planRecomendado && diag.planRecomendado.dias.length === 3);
  });

  it('3.2 Debe diagnosticar arquetipo "FATIGA_COGNITIVA" ante sobrecarga mental vespertina', () => {
    const respuestas = {
      q_reaccion_fallo: 'agotado',
      q_motivo_abandono: 'energia',
      q_disponibilidad: '3_dias',
      q_version_minima: 'si_clave'
    };

    const diag = RulesEngine.diagnoseProfile(respuestas);
    assert.equal(diag.arquetipoKey, 'FATIGA_COGNITIVA');
    assert.equal(diag.barreraPredominante, 'B2_ENERGY');
    assert.match(diag.hipotesis, /Agotamiento mental|inercia estática/i);
  });

  it('3.3 Debe diagnosticar arquetipo "HORARIOS_CAOTICOS" ante imprevistos frecuentes', () => {
    const respuestas = {
      q_reaccion_fallo: 'desborde',
      q_motivo_abandono: 'desorganizacion',
      q_disponibilidad: '2_dias',
      q_version_minima: 'si_clave'
    };

    const diag = RulesEngine.diagnoseProfile(respuestas);
    assert.equal(diag.arquetipoKey, 'HORARIOS_CAOTICOS');
    assert.equal(diag.barreraPredominante, 'B3_ROUTINE_DISRUPTION');
    assert.equal(diag.frecuenciaRecomendada, 2);
    assert.match(diag.hipotesis, /Imprevistos laborales|reprogramación flexible/i);
  });

  it('3.4 Debe limitar a frecuencia realista conservadora (regla de piso sostenible)', () => {
    // Si un principiante pide 4 días, el sistema lo calibra en 3 días para proteger adherencia
    const respuestas = {
      q_historial: 'principiante',
      q_disponibilidad: '4_dias',
      q_reaccion_fallo: 'ciclico'
    };

    const diag = RulesEngine.diagnoseProfile(respuestas);
    assert.equal(diag.frecuenciaRecomendada, 3, 'Principiante con disponibilidad de 4 días debe ser guiado a 3 días base');
  });

  it('3.5 AppState.completeOnboarding debe mutar el estado y persistir el perfil del alumno', () => {
    const store = new AppStateStore();
    store.resetDemoData();

    const diagnosis = store.completeOnboarding('alumno_sofia', {
      q_reaccion_fallo: 'todo_o_nada',
      q_motivo_abandono: 'tiempo',
      q_disponibilidad: '3_dias',
      q_version_minima: 'si_clave'
    });

    assert.equal(diagnosis.arquetipo, 'Perfeccionista / Todo o Nada');
    const sofiaActualizada = store.getProfileById('alumno_sofia');
    assert.equal(sofiaActualizada.arquetipo, 'Perfeccionista / Todo o Nada');
    assert.ok(sofiaActualizada.planSemanal, 'Sofía debe tener un plan semanal asignado');
    assert.equal(sofiaActualizada.planSemanal.frecuenciaObjetivo, 3);
  });
});

// ============================================================================
// SUITE 4: PLAN SEMANAL DUAL (IDEAL VS. VERSIÓN MÍNIMA "DÍA DIFÍCIL") (F03, F04)
// ============================================================================
describe('SUITE 4: Plan Semanal Dual (Ideal vs. Versión Mínima)', () => {

  it('4.1 Cada día del plan dual debe contar con Versión Ideal (45-60 min) y Versión Mínima (15-20 min)', () => {
    for (const freq of [2, 3, 4]) {
      const plan = RulesEngine.buildDefaultPlan(freq);
      assert.equal(plan.frecuenciaObjetivo, freq);
      assert.equal(plan.dias.length, freq);

      for (const dia of plan.dias) {
        assert.ok(dia.dia, 'El día debe tener nombre (ej. Lunes)');
        assert.ok(dia.nombreSesion, 'La sesión debe tener denominación');

        // Versión Ideal
        assert.ok(dia.ideal, 'Debe contener objeto ideal');
        assert.ok(dia.ideal.duracionMin >= 45 && dia.ideal.duracionMin <= 60, 'Versión Ideal debe durar entre 45 y 60 min');
        assert.ok(Array.isArray(dia.ideal.ejercicios) && dia.ideal.ejercicios.length >= 3, 'Versión Ideal debe tener 3+ ejercicios');

        // Versión Mínima ("Día Difícil")
        assert.ok(dia.minima, 'Debe contener objeto minima');
        assert.ok(dia.minima.duracionMin >= 15 && dia.minima.duracionMin <= 20, 'Versión Mínima debe durar entre 15 y 20 min');
        assert.ok(Array.isArray(dia.minima.ejercicios) && dia.minima.ejercicios.length >= 2, 'Versión Mínima debe tener al menos 2 ejercicios');

        // Invariante de Reducción de Fricción: Mínima < 50% de Ideal
        assert.ok(dia.minima.duracionMin <= dia.ideal.duracionMin * 0.5, 'La duración mínima debe ser <= 50% de la ideal');
      }
    }
  });

  it('4.2 AppState.updatePlan debe permitir modificar el plan y persistirlo', () => {
    const store = new AppStateStore();
    store.resetDemoData();

    const customPlan = {
      frecuenciaObjetivo: 2,
      dias: [
        {
          dia: 'Lunes',
          nombreSesion: 'Fuerza Superior',
          ideal: { titulo: 'Torso Completo (50 min)', duracionMin: 50, ejercicios: ['Press Banca 4x10', 'Remo 4x10'] },
          minima: { titulo: 'Torso Express (15 min)', duracionMin: 15, ejercicios: ['Press con Mancuernas 2x10'] }
        },
        {
          dia: 'Jueves',
          nombreSesion: 'Fuerza Inferior',
          ideal: { titulo: 'Pierna Completa (50 min)', duracionMin: 50, ejercicios: ['Sentadillas 4x10', 'Peso Muerto 4x10'] },
          minima: { titulo: 'Pierna Express (15 min)', duracionMin: 15, ejercicios: ['Sentadillas Goblet 2x12'] }
        }
      ]
    };

    const updated = store.updatePlan('alumno_martin', customPlan);
    assert.equal(updated.planSemanal.frecuenciaObjetivo, 2);
    assert.equal(updated.planSemanal.dias.length, 2);
  });
});

// ============================================================================
// SUITE 5: FLUJO DE CHECK-IN BREVE DIARIO (<1 MIN) (F05, F06)
// ============================================================================
describe('SUITE 5: Flujo de Check-in Breve Diario (<1 min)', () => {
  let store;

  beforeEach(() => {
    store = new AppStateStore();
    store.resetDemoData();
  });

  it('5.1 Registro de entrenamiento IDEAL exitoso sin exigir barrera', () => {
    const res = store.submitCheckIn({
      profileId: 'alumno_martin',
      status: 'ideal',
      barrierId: null,
      difficulty: 2,
      energyLevel: 4,
      durationSeg: 20
    });

    assert.ok(res.checkIn, 'Debe devolver el objeto checkIn creado');
    assert.equal(res.checkIn.estado, 'ideal');
    assert.equal(res.checkIn.barrera, null);
    assert.equal(res.checkIn.tiempoRegistroSeg, 20);
    assert.ok(res.checkIn.tiempoRegistroSeg < 60, 'El check-in debe realizarse en < 60 segundos');

    // Recomendación de celebración
    assert.equal(res.recommendation.ruleId, 'RULE_CELEBRATION_01');
  });

  it('5.2 Debe exigir captura obligatoria de barrera si la sesión fue MÍNIMA o NO ENTRENÓ', () => {
    assert.throws(() => {
      store.submitCheckIn({
        profileId: 'alumno_martin',
        status: 'minima',
        barrierId: null
      });
    }, /Barrera obligatoria/);

    assert.throws(() => {
      store.submitCheckIn({
        profileId: 'alumno_martin',
        status: 'missed',
        barrierId: null
      });
    }, /Barrera obligatoria/);
  });

  it('5.3 Registro de entrenamiento en VERSIÓN MÍNIMA salvando el hábito', () => {
    const res = store.submitCheckIn({
      profileId: 'alumno_martin',
      status: 'minima',
      barrierId: 'B1_TIME',
      difficulty: 4,
      energyLevel: 2,
      durationSeg: 28
    });

    assert.equal(res.checkIn.estado, 'minima');
    assert.equal(res.checkIn.barrera, 'B1_TIME');
    assert.equal(res.recommendation.ruleId, 'RULE_RESCUE_CONFIRMED_01');
    assert.match(res.recommendation.title, /Hábito Salvado/i);
  });

  it('5.4 Registro de INASISTENCIA (Sesión perdida) sin juicios culpabilizantes', () => {
    const res = store.submitCheckIn({
      profileId: 'alumno_martin',
      status: 'missed',
      barrierId: 'B5_GUILT_ALL_OR_NOTHING',
      difficulty: 5,
      energyLevel: 3,
      durationSeg: 32
    });

    assert.equal(res.checkIn.estado, 'missed');
    assert.equal(res.checkIn.barrera, 'B5_GUILT_ALL_OR_NOTHING');
    assert.ok(res.recommendation, 'Debe ofrecer recomendación de retorno');
    assert.match(res.recommendation.rationale, /tropiezo no borra tu esfuerzo|resiliencia/i);
  });
});

// ============================================================================
// SUITE 6: MOTOR DE REGLAS ADAPTATIVAS ANTE LAS 5 FAMILIAS DE BARRERAS (F07, F08)
// ============================================================================
describe('SUITE 6: Disparo del Motor de Reglas Adaptativas (5 Familias)', () => {

  it('6.1 Familia B1 (Falta de Tiempo): Dispara INT-01 (Versión Mínima 15-20 min)', () => {
    const contexto = { status: 'missed', barrierId: 'B1_TIME' };
    const rec = RulesEngine.evaluate(contexto, { historialCheckins: [] });

    assert.equal(rec.ruleId, 'RULE_TIME_01');
    assert.equal(rec.priority, 'high');
    assert.equal(rec.intervention.id, 'INT_01');
    assert.equal(rec.intervention.code, 'INT-01');
    assert.match(rec.title, /Versión Mínima/i);
    assert.match(rec.rationale, /todo o nada|60 minutos/i);
  });

  it('6.2 Familia B2 (Baja Energía / Agotamiento): Dispara INT-02 (Micro-meta de Entrada 2 Min)', () => {
    const contexto = { status: 'missed', barrierId: 'B2_ENERGY', energyLevel: 2 };
    const rec = RulesEngine.evaluate(contexto, { historialCheckins: [] });

    assert.equal(rec.ruleId, 'RULE_ENERGY_03');
    assert.equal(rec.priority, 'high');
    assert.equal(rec.intervention.id, 'INT_02');
    assert.equal(rec.intervention.code, 'INT-02');
    assert.match(rec.title, /Micro-meta de Entrada/i);
  });

  it('6.3 Familia B3 (Disrupción / Viaje / Cierre): Dispara INT-04 (Rutina en Casa sin equipos)', () => {
    const contexto = { status: 'missed', barrierId: 'B3_ROUTINE_DISRUPTION' };
    const rec = RulesEngine.evaluate(contexto, { historialCheckins: [] });

    assert.equal(rec.ruleId, 'RULE_DISRUPTION_04');
    assert.equal(rec.intervention.id, 'INT_04');
    assert.match(rec.title, /En Casa|Habitación/i);
  });

  it('6.4 Familia B4 (Fricción Logística / Gym Colmado): Dispara INT-07 (Cambio horario / menor fricción)', () => {
    const contexto = { status: 'missed', barrierId: 'B4_LOGISTICS' };
    const rec = RulesEngine.evaluate(contexto, { historialCheckins: [] });

    assert.equal(rec.ruleId, 'RULE_LOGISTICS_07');
    assert.equal(rec.intervention.id, 'INT_07');
    assert.match(rec.title, /Ventana de Menor Fricción/i);
  });

  it('6.5 Familia B5 (Desmotivación / Culpa "Todo o Nada"): Dispara INT-05 (Never Miss Twice)', () => {
    const contexto = { status: 'missed', barrierId: 'B5_GUILT_ALL_OR_NOTHING' };
    const rec = RulesEngine.evaluate(contexto, { historialCheckins: [] });

    assert.equal(rec.ruleId, 'RULE_GUILT_05');
    assert.equal(rec.intervention.id, 'INT_05');
    assert.match(rec.title, /Never Miss Twice/i);
  });

  it('6.6 Inactividad >= 7 días: Dispara INT-06 (Rampa de Retorno Progresivo anti-agujetas)', () => {
    const perfilConPausa = {
      historialCheckins: [
        { fecha: '2026-10-01', estado: 'ideal' }
      ]
    };
    const contexto = { status: 'missed', fecha: '2026-10-12', barrierId: 'B2_ENERGY' };
    const rec = RulesEngine.evaluate(contexto, perfilConPausa);

    assert.equal(rec.ruleId, 'RULE_PROT_RAMP_07');
    assert.equal(rec.intervention.id, 'INT_06');
    assert.match(rec.title, /Rampa de Retorno Progresivo/i);
  });

  it('6.7 Dos o más faltas consecutivas: Dispara regla crítica con alerta para el coach', () => {
    const perfilEnRiesgo = {
      historialCheckins: [
        { fecha: '2026-10-18', estado: 'missed', barrera: 'B1_TIME' }
      ]
    };
    const contexto = { status: 'missed', fecha: '2026-10-20', barrierId: 'B5_GUILT_ALL_OR_NOTHING' };
    const rec = RulesEngine.evaluate(contexto, perfilEnRiesgo);

    assert.equal(rec.ruleId, 'RULE_RECOVERY_02');
    assert.equal(rec.priority, 'critical');
    assert.equal(rec.coachAlert, true);
    assert.match(rec.title, /Alerta Preventiva|Retorno Sin Culpa/i);
  });
});

// ============================================================================
// SUITE 7: BUCLE DE VALIDACIÓN DE EFECTIVIDAD DE INTERVENCIONES (F09)
// ============================================================================
describe('SUITE 7: Registro del Feedback de la Intervención ("¿Ayudó?")', () => {
  let store;

  beforeEach(() => {
    store = new AppStateStore();
    store.resetDemoData();
  });

  it('7.1 Feedback positivo ("Sí ayudó") incrementa la ponderación histórica de la regla', () => {
    // Check-in inicial con intervención
    store.submitCheckIn({
      profileId: 'alumno_martin',
      status: 'minima',
      barrierId: 'B1_TIME'
    });

    const evaluado = store.evaluateIntervention('INT_01', 'si', 'alumno_martin');
    assert.ok(evaluado.pesosIntervenciones['INT_01'] > 0.5, 'El peso de efectividad debe incrementarse');

    // Verificar en el último check-in
    const ultimo = evaluado.historialCheckins[evaluado.historialCheckins.length - 1];
    assert.equal(ultimo.feedbackIntervencion, 'si');
  });

  it('7.2 Feedback negativo ("No ayudó") calibra hacia abajo el peso de la regla', () => {
    store.submitCheckIn({
      profileId: 'alumno_martin',
      status: 'missed',
      barrierId: 'B3_ROUTINE_DISRUPTION'
    });

    const evaluado = store.evaluateIntervention('INT_04', 'no', 'alumno_martin');
    assert.ok(evaluado.pesosIntervenciones['INT_04'] < 0.5, 'El peso de efectividad debe disminuir');

    const ultimo = evaluado.historialCheckins[evaluado.historialCheckins.length - 1];
    assert.equal(ultimo.feedbackIntervencion, 'no');
  });
});

// ============================================================================
// SUITE 8: GENERACIÓN DE MÉTRICAS DE PROGRESO Y KPIS (F11, F12)
// ============================================================================
describe('SUITE 8: Generación de Métricas de Progreso (MTTR, Salvataje, Adherencia)', () => {

  it('8.1 Debe calcular con exactitud matemática el MTTR (Mean Time to Recovery)', () => {
    const perfil = {
      historialCheckins: [
        { fecha: '2026-10-01', estado: 'ideal' },
        { fecha: '2026-10-03', estado: 'missed' },
        { fecha: '2026-10-05', estado: 'minima' }, // Interrupción 1: 2 días (03 al 05)
        { fecha: '2026-10-07', estado: 'ideal' },
        { fecha: '2026-10-09', estado: 'missed' },
        { fecha: '2026-10-10', estado: 'ideal' }  // Interrupción 2: 1 día (09 al 10)
      ]
    };

    // MTTR esperado: (2 + 1) / 2 = 1.5 días
    const metrics = RulesEngine.calculateMetrics(perfil);
    assert.equal(metrics.mttrDias, 1.5);
  });

  it('8.2 Debe calcular con exactitud la Tasa de Salvataje por Versión Mínima (TSVM)', () => {
    const perfil = {
      historialCheckins: [
        { estado: 'ideal' },
        { estado: 'ideal' },
        { estado: 'minima' },
        { estado: 'minima' },
        { estado: 'missed' }
      ]
    };

    // Sesiones realizadas: 2 ideales + 2 mínimas = 4
    // Tasa salvataje: 2 / 4 * 100 = 50%
    const metrics = RulesEngine.calculateMetrics(perfil);
    assert.equal(metrics.tasaSalvatajeMinima, 50);
    // Tasa adherencia: 4 realizadas / 5 totales = 80%
    assert.equal(metrics.tasaAdherencia, 80);
  });

  it('8.3 Manejo robusto de división por cero en perfiles sin faltas (100% adherencia)', () => {
    const perfilPerfecto = {
      historialCheckins: [
        { fecha: '2026-10-01', estado: 'ideal' },
        { fecha: '2026-10-03', estado: 'minima' },
        { fecha: '2026-10-05', estado: 'ideal' }
      ]
    };

    const metrics = RulesEngine.calculateMetrics(perfilPerfecto);
    assert.equal(metrics.missedCount, 0);
    assert.equal(metrics.tasaAdherencia, 100);
    assert.equal(metrics.alertaRiesgo, 'verde');
    assert.ok(!isNaN(metrics.mttrDias), 'El MTTR no debe ser NaN');
  });
});

// ============================================================================
// SUITE 9: AGENDAMIENTO DE ENTREVISTA 1-A-1 CON TELEMETRÍA PRECARGADA (F13)
// ============================================================================
describe('SUITE 9: Flujo de Agendamiento de Entrevista 1-a-1', () => {
  let store;

  beforeEach(() => {
    store = new AppStateStore();
    store.resetDemoData();
  });

  it('9.1 Permite agendar entrevista 1-a-1 precargando automáticamente la telemetría del alumno', () => {
    const cita = store.scheduleInterview({
      profileId: 'alumno_martin',
      date: '2026-10-28',
      time: '19:30',
      notes: 'Quiero revisar cómo manejar las semanas de audiencias judiciales.'
    });

    assert.ok(cita.id, 'Debe generar un ID de cita');
    assert.equal(cita.profileId, 'alumno_martin');
    assert.equal(cita.alumnoNombre, 'Martín Rossi');
    assert.equal(cita.fecha, '2026-10-28');
    assert.equal(cita.hora, '19:30');
    assert.equal(cita.status, 'confirmada');

    // Telemetría inyectada automáticamente
    assert.ok(cita.resumenTelemetrico, 'Debe incluir telemetría precargada');
    assert.equal(cita.resumenTelemetrico.scoreAdherencia, 82);
    assert.equal(cita.resumenTelemetrico.alertaRiesgo, 'amarillo');

    // Puntos de conversación sugeridos para el coach
    assert.ok(Array.isArray(cita.puntosConversacionSugeridos));
    assert.ok(cita.puntosConversacionSugeridos.length >= 3, 'Debe incluir al menos 3 talking points');

    // Persistencia en la bandeja de entrevistas
    const bandeja = store.getInterviewRequests();
    const encontrada = bandeja.find((req) => req.id === cita.id);
    assert.ok(encontrada, 'La cita debe estar en la bandeja persistida');
  });
});

// ============================================================================
// SUITE 10: PANEL COACH, SEMÁFOROS DE RIESGO Y TALKING POINTS (F14, F15, F16)
// ============================================================================
describe('SUITE 10: Panel Coach (Alertas de Riesgo y Puntos de Conversación)', () => {

  it('10.1 Debe clasificar con precisión los semáforos de riesgo: Verde, Amarillo y Rojo', () => {
    // Caso 1: Verde (Adherencia alta >= 80%, sin faltas recientes)
    const perfilVerde = {
      historialCheckins: [
        { estado: 'ideal' }, { estado: 'ideal' }, { estado: 'minima' }, { estado: 'ideal' }
      ]
    };
    assert.equal(RulesEngine.calculateMetrics(perfilVerde).alertaRiesgo, 'verde');

    // Caso 2: Amarillo (1 sesión perdida reciente o uso alto de versión mínima)
    const perfilAmarillo = {
      historialCheckins: [
        { estado: 'ideal' }, { estado: 'ideal' }, { estado: 'minima' }, { estado: 'missed' }
      ]
    };
    assert.equal(RulesEngine.calculateMetrics(perfilAmarillo).alertaRiesgo, 'amarillo');

    // Caso 3: Rojo (2 o más faltas consecutivas o adherencia < 50%)
    const perfilRojo = {
      historialCheckins: [
        { estado: 'ideal' }, { estado: 'missed' }, { estado: 'missed' }
      ]
    };
    assert.equal(RulesEngine.calculateMetrics(perfilRojo).alertaRiesgo, 'rojo');
  });

  it('10.2 Generador de Talking Points para el coach produce pauta clínica estructurada', () => {
    const perfilCarlos = INITIAL_PROFILES.find((p) => p.id === 'alumno_carlos');
    const talkingPoints = RulesEngine.generateInterviewTalkingPoints(perfilCarlos);

    assert.ok(Array.isArray(talkingPoints));
    assert.ok(talkingPoints.length >= 3, 'Debe generar al menos 3 puntos clave');

    // Verificar categorías clínicas
    const categorias = talkingPoints.map((tp) => tp.categoria);
    assert.ok(categorias.includes('Hipótesis de Adherencia'), 'Debe incluir contraste de hipótesis');
    assert.ok(categorias.includes('Barrera Crónica'), 'Debe incluir tratamiento de barrera crónica');
    assert.ok(categorias.includes('Riesgo Crítico de Abandono'), 'Debe incluir alerta de riesgo de deserción');

    // Cada punto debe tener sugerencia accionable para el coach
    for (const tp of talkingPoints) {
      assert.ok(tp.tema && tp.detalle && tp.sugerenciaCoach, 'Cada punto debe tener tema, detalle y sugerencia para el coach');
    }
  });
});

// ============================================================================
// SUITE 11: REACTIVIDAD DEL STORE Y SINCRONIZACIÓN (F17, F18)
// ============================================================================
describe('SUITE 11: Sincronización Reactiva en el Store y Reset de Fábrica', () => {
  let store;

  beforeEach(() => {
    store = new AppStateStore();
    store.resetDemoData();
  });

  it('11.1 El Store debe despachar eventos a los suscriptores ante cualquier mutación de estado', () => {
    const eventosCapturados = [];
    const unsubscribe = store.subscribe((event) => {
      eventosCapturados.push(event);
    });

    // 1. Cambiar perfil activo
    store.setActiveProfile('alumno_lucia');
    assert.equal(eventosCapturados.length, 1);
    assert.equal(eventosCapturados[0].action, 'active-profile-changed');

    // 2. Enviar check-in
    store.submitCheckIn({
      profileId: 'alumno_lucia',
      status: 'ideal',
      barrierId: null
    });
    assert.equal(eventosCapturados.length, 2);
    assert.equal(eventosCapturados[1].action, 'checkin-submitted');

    // 3. Evaluar intervención
    store.evaluateIntervention('INT_04', 'si', 'alumno_lucia');
    assert.equal(eventosCapturados.length, 3);
    assert.equal(eventosCapturados[2].action, 'intervention-evaluated');

    unsubscribe();
    store.setActiveProfile('alumno_carlos');
    assert.equal(eventosCapturados.length, 3, 'Tras cancelar suscripción no debe recibir más eventos');
  });

  it('11.2 resetDemoData() debe restaurar de forma inmutable el dataset de fábrica', () => {
    // Mutar datos
    store.completeOnboarding('alumno_sofia', { q_reaccion_fallo: 'todo_o_nada', q_disponibilidad: '3_dias' });
    store.submitCheckIn({ profileId: 'alumno_sofia', status: 'ideal' });
    assert.equal(store.getProfileById('alumno_sofia').historialCheckins.length, 1);

    // Reiniciar
    store.resetDemoData();

    // Comprobar estado limpio
    const sofiaRestaurada = store.getProfileById('alumno_sofia');
    assert.equal(sofiaRestaurada.historialCheckins.length, 0);
    assert.equal(sofiaRestaurada.planSemanal, null);

    const martinRestaurado = store.getProfileById('alumno_martin');
    assert.equal(martinRestaurado.nombre, 'Martín Rossi');
    assert.equal(martinRestaurado.historialCheckins.length, 5);
  });
});

// ============================================================================
// SUITE 12: CONDICIONES DE BORDE Y TOLERANCIA A EXCEPCIONES (TIER 2 BOUNDARY)
// ============================================================================
describe('SUITE 12: Casos de Borde y Condiciones Extremas (Tier 2)', () => {

  it('12.1 Rechaza IDs de perfil inexistentes con mensaje de error limpio', () => {
    const store = new AppStateStore();
    assert.throws(() => {
      store.setActiveProfile('perfil_fantasma_999');
    }, /no encontrado/i);

    assert.throws(() => {
      store.submitCheckIn({ profileId: 'perfil_fantasma_999', status: 'ideal' });
    }, /no encontrado/i);
  });

  it('12.2 Manejo de historial con 100% de uso de versión mínima', () => {
    const perfilSoloMinima = {
      historialCheckins: [
        { estado: 'minima' }, { estado: 'minima' }, { estado: 'minima' }, { estado: 'minima' }
      ]
    };

    const metrics = RulesEngine.calculateMetrics(perfilSoloMinima);
    assert.equal(metrics.tasaSalvatajeMinima, 100);
    assert.equal(metrics.tasaAdherencia, 100);
    // Como la tasa de mínima es >= 50%, el sistema eleva a alerta amarilla para sugerir recalibración del plan
    assert.equal(metrics.alertaRiesgo, 'amarillo');
  });

  it('12.3 Manejo de feedback repetido "No ayudó" reduce el peso sin valores negativos', () => {
    const store = new AppStateStore();
    store.resetDemoData();

    // Evaluar 5 veces negativas
    for (let i = 0; i < 5; i++) {
      store.evaluateIntervention('INT_03', 'no', 'alumno_martin');
    }

    const martin = store.getProfileById('alumno_martin');
    assert.ok(martin.pesosIntervenciones['INT_03'] >= 0.1, 'El peso mínimo no debe descender de 0.1');
  });
});

// ============================================================================
// SUITE 13: VIAJES DE USUARIO COMPLETOS PARA LOS 4 ARQUETIPOS (TIER 4 E2E)
// ============================================================================
describe('SUITE 13: Viajes de Usuario E2E en Tiempo Real (Tier 4 Real-World)', () => {
  let store;

  beforeEach(() => {
    store = new AppStateStore();
    store.resetDemoData();
  });

  it('13.1 Viaje RW-01: Martín Rossi (Perfeccionista / Todo o Nada salvado por Versión Mínima)', () => {
    store.setActiveProfile('alumno_martin');
    const initialMartin = store.getActiveProfile();
    assert.equal(initialMartin.arquetipo, 'Perfeccionista / Todo o Nada');

    // Llega jueves ocupado y Martín registra que no tiene tiempo
    const checkinRes = store.submitCheckIn({
      profileId: 'alumno_martin',
      status: 'minima',
      barrierId: 'B1_TIME',
      energyLevel: 3,
      difficulty: 4,
      durationSeg: 24
    });

    // Se dispara la validación de rescate
    assert.equal(checkinRes.recommendation.ruleId, 'RULE_RESCUE_CONFIRMED_01');

    // Alumno confirma feedback en siguiente contacto
    store.evaluateIntervention('INT_01', 'si', 'alumno_martin');

    // El perfil actualizado mantiene su racha activa y refleja salvataje
    const finalMartin = store.getProfileById('alumno_martin');
    assert.ok(finalMartin.tasaSalvatajeMinima > 0);
    assert.equal(finalMartin.alertaRiesgo, 'amarillo'); // controlado
  });

  it('13.2 Viaje RW-02: Lucía Méndez (Fatiga Cognitiva salvada por Rutina en Casa)', () => {
    store.setActiveProfile('alumno_lucia');
    const lucia = store.getActiveProfile();
    assert.equal(lucia.arquetipo, 'Fatiga Cognitiva / Agotamiento Mental');

    // Lucía llega a las 19hs con energía 1/5
    const res = store.submitCheckIn({
      profileId: 'alumno_lucia',
      status: 'minima',
      barrierId: 'B2_ENERGY',
      energyLevel: 1,
      difficulty: 3,
      durationSeg: 19
    });

    assert.equal(res.checkIn.estado, 'minima');
    assert.equal(res.checkIn.barrera, 'B2_ENERGY');

    // Feedback: la rutina en casa le sirvió
    store.evaluateIntervention('INT_02', 'si', 'alumno_lucia');

    const finalLucia = store.getProfileById('alumno_lucia');
    assert.equal(finalLucia.alertaRiesgo, 'verde');
    assert.ok(finalLucia.scoreAdherencia >= 85);
  });

  it('13.3 Viaje RW-03: Carlos Gómez (Guardias imprevistas que generan Alerta Roja y Agendamiento 1-a-1)', () => {
    store.setActiveProfile('alumno_carlos');
    const carlos = store.getActiveProfile();
    assert.equal(carlos.alertaRiesgo, 'rojo');

    // Carlos acumula una nueva inasistencia
    const res = store.submitCheckIn({
      profileId: 'alumno_carlos',
      status: 'missed',
      barrierId: 'B3_ROUTINE_DISRUPTION',
      energyLevel: 1,
      difficulty: 5
    });

    // Se dispara el protocolo crítico Never Miss Twice
    assert.equal(res.recommendation.ruleId, 'RULE_RECOVERY_02');
    assert.equal(res.recommendation.priority, 'critical');

    // El coach revisa los talking points
    const tp = RulesEngine.generateInterviewTalkingPoints(store.getProfileById('alumno_carlos'));
    assert.ok(tp.some((p) => p.categoria.includes('Riesgo Crítico')));

    // Carlos agenda una sesión 1-a-1 de emergencia con el coach
    const cita = store.scheduleInterview({
      profileId: 'alumno_carlos',
      date: '2026-10-26',
      time: '20:00',
      notes: 'Necesito adaptar mi plan a mis turnos nocturnos rotativos.'
    });

    assert.equal(cita.status, 'confirmada');
    assert.equal(cita.resumenTelemetrico.alertaRiesgo, 'rojo');
  });

  it('13.4 Viaje RW-04: Sofía Pereira (Onboarding completo desde cero y primer check-in)', () => {
    store.setActiveProfile('alumno_sofia');
    const sofiaInicial = store.getActiveProfile();
    assert.equal(sofiaInicial.historialCheckins.length, 0);

    // 1. Sofía completa el cuestionario de Onboarding
    const diag = store.completeOnboarding('alumno_sofia', {
      q_historial: 'esporadico',
      q_motivo_abandono: 'tiempo',
      q_reaccion_fallo: 'todo_o_nada',
      q_disponibilidad: '3_dias',
      q_version_minima: 'si_clave'
    });

    assert.equal(diag.arquetipo, 'Perfeccionista / Todo o Nada');

    // 2. Realiza su primer entrenamiento (Ideal)
    const primerCheckin = store.submitCheckIn({
      profileId: 'alumno_sofia',
      status: 'ideal',
      barrierId: null,
      difficulty: 3,
      energyLevel: 4,
      durationSeg: 25
    });

    assert.equal(primerCheckin.checkIn.estado, 'ideal');
    const sofiaFinal = store.getProfileById('alumno_sofia');
    assert.equal(sofiaFinal.historialCheckins.length, 1);
    assert.equal(sofiaFinal.scoreAdherencia, 100);
    assert.equal(sofiaFinal.alertaRiesgo, 'verde');
  });
});
