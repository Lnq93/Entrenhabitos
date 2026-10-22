# Project: Entrenhábitos — Ecosistema de Adherencia al Entrenamiento en Gimnasio

## Architecture
- **Paradigma**: Plataforma de acompañamiento híbrido (Marca Personal 1-a-1 -> Automatización -> SaaS/B2C) con bucle cibernético cerrado de adherencia conductual.
- **Capas de la Solución**:
  1. **Capa Estratégica y Conductual (R1)**: Modelos Fogg Behavior Model ($B=MAP$), Hábitos Atómicos, SDT, prevención del sesgo "todo o nada", matriz de barreras e intervenciones adaptativas.
  2. **Capa de Requerimientos y Reglas (R2)**: SRS formal (18 RF, 6 RNF, 8 HU en Gherkin, diagramas Mermaid, especificación matemática/lógica del motor de inferencia).
  3. **Capa de Gestión y Gobernanza (R3)**: WBS de 4 niveles, Roadmap en 3 fases, Matriz de 7 riesgos críticos con mitigaciones, Sistema integral de KPIs en 3 capas.
  4. **Capa de Software / Prototipo Interactivo (R4)**: Frontend Zero-Build Vanilla ES6+ reactivo, interfaz "Athletic Precision" (Slate oscuro, Lima, Ámbar, Coral), sincronización bidireccional inmediata Alumno/Coach vía LocalStorage reactivo (`CustomEvent` + `storage` listener), 4 perfiles arquetípicos demo.
  5. **Capa de Verificación Automatizada (E2E & Tiers 1-5)**: Suite de pruebas programáticas nativas en Node 24 (`node:test` y `node:assert`) sin dependencias npm, ejecutable con `node tests/e2e_verification.mjs`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F01 | Onboarding y Evaluación Inicial | Cuestionario conductual, antecedentes, barreras históricas y cálculo de perfil inicial | M1, M2, M4 | Survey (spec_miner & explorer_1) |
| F02 | Generación de Hipótesis de Adherencia | Formulación de hipótesis de trabajo contrastables empíricamente con la conducta real | M1, M2, M4 | Survey (spec_miner & explorer_1) |
| F03 | Prescripción de Rutina Base Realista | Selección y ajuste de rutina física base (Full-body o Torso/Pierna de 2 a 4 días) | M2, M4 | Survey (spec_miner) |
| F04 | Plan Semanal Dual (Ideal vs. Mínimo) | Definición para cada sesión de su versión ideal (60 min) y versión mínima/día difícil (15-20 min) | M1, M2, M4 | Survey (spec_miner & explorer_1) |
| F05 | Registro Breve Diario (<1 min) | Check-in ultrarrápido: entrenó ideal, entrenó mínima, no entrenó, barrera y dificultad | M2, M4 | Survey (spec_miner & explorer_1) |
| F06 | Taxonomía de Barreras en Tiempo Real | Clasificación en 5 familias: Tiempo, Energía/Fatiga, Emocional, Logística, Rigidez | M1, M2, M4 | Survey (spec_miner & explorer_1) |
| F07 | Motor de Reglas Adaptativas en Vivo | Ejecución de reglas $IF \to AND \to THEN$ ante barrera o inasistencia | M1, M2, M4 | Survey (explorer_1) |
| F08 | Catálogo de Intervenciones Adaptativas | 7 intervenciones estandarizadas (Versión mínima, Reprogramación, Retorno rápido, etc.) | M1, M2, M4 | Survey (explorer_1) |
| F09 | Bucle de Validación de Efectividad | Pregunta de seguimiento en siguiente check-in ("¿Ayudó la recomendación?") y calibración de pesos | M1, M2, M4 | Survey (spec_miner & explorer_1) |
| F10 | Módulo de Contingencia y Reajuste | Reorganización asistida ante semanas complejas (viajes, exámenes, sobrecarga) | M1, M2, M4 | Survey (explorer_1) |
| F11 | Racha Resiliente y Desculpabilización | Algoritmo que contabiliza versiones mínimas, protege la racha y calcula MTTR | M1, M2, M4 | Survey (explorer_1) |
| F12 | Informe Visual de Progreso del Alumno | Métricas de continuidad, tasa de salvataje, tiempo hasta retomar y gráficos de barreras | M2, M4 | Survey (explorer_1 & 2) |
| F13 | Agendamiento 1-a-1 con Telemetría | Apertura de calendario para sesión personalizada con datos del alumno precargados | M2, M4 | Survey (spec_miner & explorer_2) |
| F14 | Dashboard Profesional / Coach | Panel con semáforo de riesgo de abandono (alto/medio/bajo) para cohorte de alumnos | M2, M4 | Survey (explorer_2) |
| F15 | Ficha Detallada de Asesorado | Detalle de sesiones previstas vs. realizadas, desglose ideal/mínima y barreras | M2, M4 | Survey (explorer_2) |
| F16 | Generador de Puntos de Conversación | Insights automáticos para la entrevista personalizada basados en fallas de reglas y patrones | M1, M2, M4 | Survey (spec_miner & explorer_2) |
| F17 | Sincronización Bidireccional Reactiva | Sincronización inmediata entre Vista Alumno y Vista Coach mediante LocalStorage Store | M4 | Survey (explorer_2) |
| F18 | Multi-perfil Demo y Reset de Estado | 4 perfiles arquetípicos precargados (Martín, Lucía, Carlos, Sofía) y botón de reinicio | M4 | Survey (explorer_2) |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | R1: Diseño Conductual e Innovación | Documento exhaustivo en español `docs/R1_DISENO_CONDUCTUAL_E_INNOVACION.md` | Survey | IN_PROGRESS |
| M2 | R2: SRS e Ingeniería de Requerimientos | Documento exhaustivo en español `docs/R2_SRS_REQUERIMIENTOS_Y_MODELADO.md` | M1 | PLANNED |
| M3 | R3: Dirección de Proyecto y Roadmap | Documento exhaustivo en español `docs/R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md` | M1, M2 | PLANNED |
| M4 | R4: Prototipo Web Interactivo | Prototipo web navegable Alumno + Coach (`index.html`, `css/`, `js/`), datos demo y store reactivo | M1, M2 | PLANNED |
| M5 | README.md y Matriz de Trazabilidad | Índice general y matriz cruzada exhaustiva en `README.md` | M1, M2, M3, M4 | PLANNED |
| M6 | Suite de Pruebas E2E y Verificación Final | Arnés de test automatizado (`tests/e2e_verification.mjs`), `TEST_READY.md`, auditoría forense | M4, M5 | PLANNED |

## Interface Contracts
### AppState ↔ UI Views (Alumno / Coach)
- `AppState.getProfiles()`: Retorna lista de perfiles disponibles con estado y métricas.
- `AppState.getActiveProfile()`: Retorna el perfil actualmente seleccionado.
- `AppState.setActiveProfile(id)`: Cambia el perfil activo y emite `entrenhabitos:state-updated`.
- `AppState.submitCheckIn(data)`: Registra sesión (status: 'ideal' | 'minima' | 'missed', barrierId, difficulty, date), ejecuta motor de reglas y actualiza métricas.
- `AppState.evaluateIntervention(interventionId, helped: boolean)`: Registra la efectividad de la intervención.
- `AppState.scheduleInterview(date, time, notes)`: Agenda sesión 1-a-1 con datos precargados.
- `AppState.resetDemoData()`: Restaura el dataset demo de los 4 perfiles arquetípicos a su estado inicial.

### RulesEngine ↔ CheckIn / Interventions
- `RulesEngine.evaluate(checkInContext, profileHistory)`: Retorna `{ ruleId, intervention: { id, title, description, actionType, payload }, priority, rationale }`.

## Code Layout
```
c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\
├── docs\
│   ├── R1_DISENO_CONDUCTUAL_E_INNOVACION.md
│   ├── R2_SRS_REQUERIMIENTOS_Y_MODELADO.md
│   └── R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md
├── css\
│   └── styles.css
├── js\
│   ├── app.js
│   ├── store.js
│   ├── rules_engine.js
│   └── demo_data.js
├── tests\
│   └── e2e_verification.mjs
├── index.html
├── README.md
├── TEST_READY.md
└── PROJECT.md
```
