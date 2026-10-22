# Entrenhábitos — Ecosistema de Adherencia y Formación de Hábitos en el Gimnasio

> **Promesa de Producto:** *«Descubrí qué te hace abandonar la rutina y construí un sistema para mantenerlo en tu vida».*

**Estado del Proyecto:** Completado y Verificado (`43/43` pruebas E2E aprobadas)  
**Enfoque Estratégico:** Acompañamiento Híbrido 1-a-1 de Marca Personal (Fase 1) $\rightarrow$ Automatización Conductual (Fase 2) $\rightarrow$ Plataforma SaaS B2C/B2B2C (Fase 3)

---

## 1. Resumen Ejecutivo

**Entrenhábitos** es una aplicación y sistema de acompañamiento diseñado para resolver el principal cuello de botella del fitness: **el abandono temprano del gimnasio** (más del 50-65% de deserción en los primeros 90 días). A diferencia de las aplicaciones tradicionales centradas exclusivamente en prescribir ejercicios o contar series y calorías (que asumen que el usuario ya tiene disciplina), Entrenhábitos opera como un **sistema adaptativo de bucle cerrado**:

1. **Diagnostica** el perfil de adherencia inicial y formula hipótesis de barreras probables.
2. **Planifica con realismo** mediante un **Plan Semanal Dual**: cada día de entrenamiento cuenta con una **Versión Ideal** (45-60 min) y una **Versión Mínima Viable ("Día Difícil", 15-20 min)** que preserva la identidad del hábito sin caer en el sesgo de *"todo o nada"*.
3. **Captura la conducta real en $<45$ segundos** mediante un check-in diario sin fricción ni lenguaje punitivo.
4. **Interviene en tiempo real** usando un **Motor de Reglas Adaptativas** ($IF \to AND \to THEN$) que propone acciones concretas según la barrera registrada y aprende qué estrategias funcionan para cada persona.
5. **Potencia el seguimiento profesional 1-a-1** brindando al entrenador un **Panel de Seguimiento Profesional** con semáforo de riesgo de abandono, comparativa prevista vs. realizada (ideal vs. mínima), barreras repetidas y un generador automático de **Puntos de Conversación (*Talking Points*)** para la entrevista personalizada.

---

## 2. Mapa de Entregables y Estructura del Proyecto

```text
c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\
├── Borrador Marca Personal Entrenhábitos.pdf        # Documento fundacional de origen
├── README.md                                        # Índice general y Matriz de Trazabilidad Cruzada
├── PROJECT.md                                       # Arquitectura general y contratos del sistema
├── docs\
│   ├── R1_DISENO_CONDUCTUAL_E_INNOVACION.md         # [R1] Análisis Crítico, Psicología del Hábito e Ideación (733 líneas)
│   ├── R2_SRS_REQUERIMIENTOS_Y_MODELADO.md          # [R2] Ingeniería de Requerimientos SRS IEEE/ISO (1.138 líneas)
│   └── R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md        # [R3] Plan Director de Proyecto, WBS, Riesgos y KPIs (738 líneas)
├── index.html                                       # [R4] Prototipo Web Interactivo (Vista Alumno + Vista Coach)
├── css\
│   └── styles.css                                   # Sistema de diseño "Athletic Precision" (Dark Slate, Lima, Ámbar, Coral)
├── js\
│   ├── app.js                                       # Controlador reactivo de interfaz (Alumno + Panel Profesional)
│   ├── store.js                                     # Estado centralizado reactivo (LocalStorage + MemoryStorage isomórfico)
│   ├── rules_engine.js                              # Motor determinista de reglas adaptativas, métricas (MTTR/TSVM) y Talking Points
│   └── demo_data.js                                 # Catálogo MECE de barreras, 7 intervenciones y 4 perfiles demo precargados
├── tests\
│   └── e2e_verification.mjs                         # Suite de verificación programática E2E (43 tests en 13 suites)
├── TEST_INFRA.md                                    # Especificación de arquitectura de pruebas
└── TEST_READY.md                                    # Certificación de ejecución de pruebas (100% PASS)
```

### Detalle de la Documentación Estratégica y Técnica (`docs/`)

1. **[`docs/R1_DISENO_CONDUCTUAL_E_INNOVACION.md`](docs/R1_DISENO_CONDUCTUAL_E_INNOVACION.md) — Estrategia de Producto y Diseño Conductual (R1)**
   - Evaluación crítica de las 5 funciones, los 5 problemas frecuentes de abandono y las 6 funcionalidades prioritarias del borrador original.
   - Integración de marcos científicos: **Fogg Behavior Model ($B = MAP$)**, **Hábitos Atómicos (Ley de los 2 minutos y regla *Never Miss Twice*)**, **Teoría de la Autodeterminación (SDT: Autonomía, Competencia, Relación)** y neutralización del efecto *"todo o nada"* (*What-the-Hell Effect*).
   - Taxonomía MECE de **5 Familias de Barreras** (`B1_TIME`, `B2_ENERGY`, `B3_ROUTINE_DISRUPTION`, `B4_LOGISTICS`, `B5_GUILT_ALL_OR_NOTHING`) y **7 Intervenciones Adaptativas Estandarizadas** (`INT-01` a `INT-07`), incluyendo el diseño minuto a minuto de la rutina de emergencia de 20 minutos y el modelo bayesiano de actualización de pesos ($W_{u,b,i}$).

2. **[`docs/R2_SRS_REQUERIMIENTOS_Y_MODELADO.md`](docs/R2_SRS_REQUERIMIENTOS_Y_MODELADO.md) — Ingeniería de Requerimientos y Modelado Funcional (R2)**
   - Identificación de actores (**Alumno/Entrenado**, **Profesional/Coach**, **Motor Adaptativo**) y los 4 arquetipos iniciales de adherencia con sus hipótesis de trabajo contrastables.
   - **18 Requerimientos Funcionales (`RF-01` a `RF-18`)** y **6 Requerimientos No Funcionales (`RNF-01` a `RNF-06`)** como el límite estricto de check-in en $<45$ segundos y máximo 3 toques.
   - **8 Historias de Usuario (`HU-01` a `HU-08`)** con criterios de aceptación formales en sintaxis Gherkin (`Dado / Cuando / Entonces`).
   - **3 Diagramas Mermaid** (Secuencia de extremo a extremo, Máquina de estados de adherencia y Arquitectura de componentes) y especificación matemática/algorítmica del motor de reglas (`R-01` a `R-08`).

3. **[`docs/R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md`](docs/R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md) — Dirección de Proyecto y Planteo General (R3)**
   - Estrategia evolutiva en **3 Fases**:
     - **Fase 1 (Meses 1-2):** MVP Marca Personal 1-a-1 (10-30 alumnos, validación empírica de reglas y entrevistas quincenales).
     - **Fase 2 (Meses 3-4):** Automatización Conductual y Retención Inteligente (hasta 100 alumnos/coach, alertas preventivas y backend cloud).
     - **Fase 3 (Meses 5+):** Plataforma Multi-Coach / SaaS B2B2C para entrenadores y gimnasios.
   - **Estructura de Desglose de Trabajo (WBS)** a 4 niveles, cronograma de 6 hitos, **Matriz de 8 Riesgos Críticos** (incluyendo fatiga de registro y abandono por vergüenza) y **Cuadro de Mando de KPIs en 3 Capas** (Clínica/Conductual: $MTTR$, $TSVM$, $TRR_{48}$; Producto: tiempo de check-in $<45\text{s}$; Negocio: LTV/CAC y Churn).

---

## 3. Cómo Usar el Prototipo Web Interactivo (`R4`)

El prototipo es **100% autocontenido (Zero-Build)** y no requiere instalar paquetes externos para funcionar en el navegador.

### Opción A: Apertura directa o servidor local
1. Abrí el archivo [`index.html`](index.html) directamente en cualquier navegador moderno (Chrome, Edge, Firefox) o servilo localmente con:
   ```powershell
   npx --yes serve "c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS"
   ```

### Guía de Recorrido en Vivo
- **Selector Superior de Rol:** Podés alternar en cualquier momento entre **Vista Alumno (App Móvil)** y **Vista Profesional (Panel Coach)**. Cualquier acción realizada en la Vista Alumno actualiza instantáneamente el Panel Profesional.
- **Selector de Perfiles Demo Precargados:**
  1. **Martín Rossi (*El Perfeccionista Todo-o-Nada*):** Alta autoexigencia; muestra cómo el uso de la **Versión Mínima** salva su continuidad cuando tiene semanas de mucho trabajo.
  2. **Lucía Méndez (*Fatiga Cognitiva Vespertina*):** Sufre agotamiento mental al final del día; permite probar micro-metas de entrada de 2 minutos y rutinas de emergencia.
  3. **Carlos Gómez (*Horarios Caóticos / En Riesgo Rojo*):** Tiene guardias rotativas y 2 sesiones perdidas consecutivas; dispara **Alerta Roja** en el Panel del Coach y genera automáticamente los puntos a tratar en la entrevista 1-a-1.
  4. **Sofía Pereira (*Principiante / Onboarding*):** Ideal para probar desde cero la **Evaluación Inicial**, la generación de hipótesis de adherencia y la prescripción del plan semanal realista.
- **5 Pestañas de la Vista Alumno:**
  1. **1. Evaluación Inicial:** Cuestionario interactivo que diagnostica el arquetipo, detecta barreras probables y aplica una regla de piso sostenible.
  2. **2. Plan Semanal Dual:** Muestra cada día programado con conmutador entre **Versión Ideal (45-60 min)** y **Versión Mínima ("Día Difícil", 15-20 min)**.
  3. **3. Registro Diario (<1 min):** Check-in rápido con cronómetro en vivo; permite reportar si entrenó Ideal, Mínimo o No entrenó, elegir la barrera y el nivel de dificultad.
  4. **4. Motor Adaptativo:** Muestra la intervención personalizada disparada según la barrera y permite responder **"¿Te ayudó esta estrategia?"** (`Sí ayudó` / `No ayudó`), recalibrando en vivo los pesos de efectividad.
  5. **5. Informe & Agendar 1-a-1:** Visualiza el Score de Adherencia, la Tasa de Salvataje por Versión Mínima ($TSVM$), el Tiempo Medio de Retorno ($MTTR$) y permite agendar una sesión con el profesional adjuntando toda la telemetría.

---

## 4. Verificación Programática y Suite de Pruebas (`M6`)

El proyecto incluye una suite de pruebas automatizadas E2E construida con el corredor nativo de Node.js (`node:test` y `node:assert/strict`).

Para ejecutar las 43 pruebas en las 13 suites:

```powershell
cd "c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS"
node tests/e2e_verification.mjs
```

---

## 5. Matriz de Trazabilidad Cruzada Exhaustiva

La siguiente matriz vincula cada elemento de `Borrador Marca Personal Entrenhábitos.pdf` con la estrategia conductual (`R1`), los requerimientos (`R2`), la gestión (`R3`), el prototipo (`R4`) y las pruebas (`M6`):

| Problema del Borrador PDF | Función / Funcionalidad Prioritaria del Borrador | Estrategia Conductual (`R1`) | Requerimientos (`R2`: RF / RNF / HU) | Regla del Motor Adaptativo (`rules_engine.js`) | Componente en el Prototipo Web (`R4`) | Suite de Prueba E2E (`tests/e2e_verification.mjs`) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **P1.** Empiezan con objetivos demasiado exigentes | **F1.** Proponer rutina según objetivos<br>**FP1.** Evaluación inicial<br>**FP2.** Plan semanal realista | Regla del Piso Sostenible + Calibración de expectativas en Onboarding (Fogg Ability) | `RF-01`, `RF-02`, `RF-03`<br>`RNF-02`<br>`HU-01`, `HU-02` | `diagnoseProfile()` + Regla de tope de frecuencia inicial (máx. 3 días base en re-iniciantes) | Pestaña **1. Evaluación Inicial** + Pestaña **2. Plan Semanal Dual** | **Suite 3** (`3.1` a `3.5`) y **Suite 4** (`4.1`, `4.2`) |
| **P2.** Dependen de tener ganas o de sentirse con energía | **F2.** Detectar barreras<br>**F3.** Proponer intervención según barrera<br>**FP2.** Versión mínima para días difíciles | **Versión Mínima Viable (15-20 min)** + **Regla de los 2 Minutos** (Micro-meta de entrada sin exigir energía alta) | `RF-04`, `RF-05`, `RF-06`, `RF-07`, `RF-08`<br>`RNF-01` (<45s)<br>`HU-02`, `HU-03` | `RULE_TIME_01` $\to$ `INT_01` (Versión Mínima 15-20 min)<br>`RULE_ENERGY_01` $\to$ `INT_02` (Micro-meta de Entrada 2 Min) | Botón **"Activar Modo Día Difícil"** en Plan Dual + **Check-in Rápido** + Tarjeta de Intervención | **Suite 5** (`5.1` a `5.4`) y **Suite 6** (`6.1`, `6.2`) |
| **P3.** Interpretan una sesión perdida como un fracaso | **F3.** Intervención según barrera<br>**FP3.** Registro breve diario<br>**FP4.** Recomendaciones adaptativas | Neutralización del sesgo *"Todo o Nada"* + Protocolo **"Never Miss Twice"** + Racha Resiliente y métrica $MTTR$ | `RF-09`, `RF-10`, `RF-11`<br>`RNF-02` (Tono no punitivo)<br>`HU-04`, `HU-05` | `RULE_GUILT_01` $\to$ `INT_05` (Protocolo *Never Miss Twice* y acuerdo de retorno sin culpa) | Check-in de inasistencia empático + Indicador de **Tiempo de Retorno ($MTTR$)** y **Tasa de Salvataje ($TSVM$)** | **Suite 5** (`5.4`), **Suite 6** (`6.5`), **Suite 8** (`8.1` a `8.3`) y **Suite 13** (`13.1`) |
| **P4.** Les cuesta reorganizarse cuando cambia su rutina | **F2.** Detectar barreras<br>**F3.** Intervención adaptativa<br>**FP4.** Recomendaciones adaptativas | Flexibilidad estructural: Día Comodín pre-acordado + Rutina de Emergencia en Casa + Cambio de Ventana Horaria | `RF-08`, `RF-09`, `RF-11`<br>`RNF-03`<br>`HU-04`, `HU-06` | `RULE_DISRUPT_01` $\to$ `INT_04` (Rutina Express en Casa / Viaje)<br>`RULE_LOGISTICS_01` $\to$ `INT_07` (Cambio de ventana horaria) | Selector de barreras `B3_ROUTINE_DISRUPTION` y `B4_LOGISTICS` + Modal de reajuste semanal | **Suite 6** (`6.3`, `6.4`) y **Suite 13** (`13.2`) |
| **P5.** Retoman repetidamente, pero no consiguen sostener la práctica | **F4.** Comprobar si la intervención ayudó<br>**F5.** Entrevista personalizada<br>**FP5.** Panel de seguimiento profesional<br>**FP6.** Informe de progreso + Calendario | Bucle de validación empírica (`¿Ayudó?`) + Rampa de Retorno Progresivo tras inactividad + Coaching 1-a-1 guiado por datos | `RF-12`, `RF-13`, `RF-14`, `RF-15`, `RF-16`, `RF-17`, `RF-18`<br>`RNF-04`, `RNF-05`, `RNF-06`<br>`HU-07`, `HU-08` | `RULE_INACTIVE_01` $\to$ `INT_06` (Rampa de retorno $\ge 7$ días)<br>`RULE_CRITICAL_01` $\to$ `INT_03` + Alerta Roja Coach + `generateInterviewTalkingPoints()` | **Bucle de Feedback** en pestaña 4 + **Informe & Calendario 1-a-1** en pestaña 5 + **Panel Profesional (Coach)** | **Suite 6** (`6.6`, `6.7`), **Suite 7** (`7.1`, `7.2`), **Suite 9** (`9.1`), **Suite 10** (`10.1`, `10.2`) y **Suite 13** (`13.3`) |
