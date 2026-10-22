# ESPECIFICACIÓN DE INFRAESTRUCTURA DE PRUEBAS Y VERIFICACIÓN (TEST INFRASTRUCTURE SPECIFICATION)

**Proyecto:** Entrenhábitos — Ecosistema Digital de Adherencia y Formación de Hábitos en el Gimnasio  
**Documentos Fuente:** `ORIGINAL_REQUEST.md`, `Borrador Marca Personal Entrenhábitos.pdf`, `PROJECT.md`, `docs/R1...`, `docs/R2...`, `docs/R3...`  
**Autor:** Test Writer Lead (Milestone M6 - E2E Testing Track)  
**Versión:** 1.0.0 (Autoritativa y Exhaustiva)  
**Entorno de Ejecución:** Node.js 24 LTS (Frameworks nativos `node:test` y `node:assert/strict`)

---

## 1. Filosofía de Pruebas Opaque-Box Basadas en Requerimientos

La estrategia de aseguramiento de calidad de **Entrenhábitos** adopta una filosofía de pruebas **Opaque-Box (Caja Opaca) guiada estrictamente por requerimientos funcionales y conductuales**. 

Bajo esta filosofía:
1. **Validación de Comportamiento Observable, no de Implementación Accidental:** Los casos de prueba interactúan con los módulos a través de sus contratos de interfaz públicos, eventos del DOM, mutaciones de estado observable en el Store e inferencias emitidas por el motor de reglas. No se acoplan a variables privadas ni a detalles efímeros del DOM interno.
2. **Determinismo y Rigor de Oráculo:** Para cada caso de prueba existe una fuente autoritativa explícita (fórmulas de MTTR, Tasa de Salvataje por Versión Mínima, semáforo de riesgo de abandono y matriz de reglas $IF \to AND \to THEN$ extraídas de `R1`, `R2`, `R3` y el `Borrador Marca Personal`). Los resultados esperados se calculan matemáticamente o se derivan de la ontología conductual, prohibiendo terminantemente aserciones triviales o facades.
3. **Aislamiento e Independencia Total:** Cada prueba es autocontenida, inicializa su propio contexto de ejecución, resetea el Store a un estado conocido y no depende del orden ni del éxito de pruebas precedentes.
4. **Adversarial & Forensic Verification:** El arnés somete al sistema a entradas adversas, corrupciones intencionales de datos, omisiones secuenciales y valores fuera de escala para verificar la resiliencia y el manejo graceful de excepciones.
5. **Cero Dependencias Externas (Pure Native ESM):** El ejecutor de pruebas corre 100% sobre el motor nativo de Node 24 (`node:test` y `node:assert/strict`), garantizando portabilidad absoluta en cualquier entorno CI/CD o local sin riesgo de roturas por paquetes npm externos.

---

## 2. Inventario de Features Bajo Prueba (F01 a F18)

La siguiente tabla consolida el catálogo de 18 funcionalidades trazadas a lo largo de las capas estratégica (R1), de requerimientos (R2), de gestión (R3) y de software (R4):

| Feature ID | Nombre de la Funcionalidad | Descripción Funcional y de Dominio | Contrato de Entrada / Acción | Salida Esperada / Estado Observable | Trazabilidad |
|---|---|---|---|---|---|
| **F01** | Onboarding y Evaluación Inicial | Cuestionario conductual, antecedentes deportivos, barreras pasadas y asignación de arquetipo. | Respuestas estructuradas a 5 preguntas clave. | Perfil de adherencia asignado (`arquetipo`, `scoreAdherencia`, `hipotesis`). | RF-01, Borrador §3.1 |
| **F02** | Formulación de Hipótesis de Adherencia | Algoritmo que formula hipótesis causales sobre los gatilladores de abandono del alumno. | Arquetipo + historial de fallos previos. | Texto de hipótesis explicativa con recomendación táctica para el coach. | RF-01, RF-12 |
| **F03** | Prescripción de Rutina Base Realista | Selección y ajuste de rutina física base (Full-body o Torso/Pierna de 2 a 4 días). | Días disponibles y nivel de acondicionamiento. | Plan base con frecuencia sostenible (<=4 días). | RF-02, Borrador §3.2 |
| **F04** | Plan Semanal Dual (Ideal vs. Mínimo) | Definición para cada sesión de su Versión Ideal (60 min) y Versión Mínima / Día Difícil (15-20 min). | Lista de días con ejercicios y duraciones asignadas. | Estructura dual completa por día; validación de reducción de volumen en versión mínima. | RF-02, Borrador §3.2 |
| **F05** | Registro Breve Diario (<1 min) | Check-in ultrarrápido: entrenó ideal, entrenó mínima o inasistencia, con tiempo de carga cronometrado. | Estado (`ideal`, `minima`, `perdida`), barrera opcional, dificultad 1-5. | Check-in persistido en historial con timestamp; duración de registro < 60 seg. | RF-03, RNF-01, Borrador §3.3 |
| **F06** | Taxonomía de Barreras en Tiempo Real | Clasificación MECE en 5 familias: Tiempo, Energía/Fatiga, Emocional/Culpa, Logística, Rigidez. | Código de barrera seleccionado (`falta_tiempo`, `baja_energia`, `cambio_rutina`, `desmotivacion`, etc.). | Barrera indexada y asociada al check-in para análisis de recurrencia. | RF-04, R1 §5 |
| **F07** | Motor de Reglas Adaptativas en Vivo | Inferencia lógica $IF \to AND \to THEN$ que prescribe acciones ante barreras o inasistencias. | Objeto de contexto de check-in + historial del alumno. | Prescripción conductual (`ruleId`, `intervention`, `priority`, `rationale`). | RF-05, R1 §6, R2 §7 |
| **F08** | Catálogo de Intervenciones Adaptativas | 7 intervenciones estandarizadas (INT-01 a INT-07: Versión Mínima, Reprogramación, Never Miss Twice, etc.). | Identificador de intervención prescrita por el motor. | Objeto de intervención con título, instrucciones de acción rápida y duración estimada. | RF-05, R1 §6 |
| **F09** | Bucle de Validación de Efectividad | Pregunta de seguimiento en siguiente check-in ("¿Ayudó la recomendación?") y calibración de pesos. | `checkinId` / `interventionId` + calificación (`si`, `parcial`, `no`). | Actualización del índice de efectividad de la intervención en el Store. | RF-06, Borrador §3.4 |
| **F10** | Módulo de Contingencia y Reajuste | Reorganización asistida ante semanas complejas (viajes, exámenes, guardias, imprevistos). | Parámetros de contingencia (días afectados, modo casa/hotel). | Plan semanal reorganizado temporalmente sin penalización en métricas. | RF-08, R1 §4 |
| **F11** | Racha Resiliente y Desculpabilización | Algoritmo que valida que la versión mínima preserva la racha y calcula el MTTR tras interrupción. | Historial cronológico de sesiones. | Contador de racha activa y cálculo exacto de MTTR en días. | RF-07, RF-13, R3 §2.4 |
| **F12** | Informe Visual de Progreso del Alumno | Métricas de continuidad, tasa de salvataje por versión mínima y distribución de barreras. | Perfil del alumno y registros acumulados. | Objeto de KPIs consolidado: % adherencia, TSVM (%), MTTR (días), sesiones ideales vs mínimas. | RF-13, Borrador §3.6 |
| **F13** | Agendamiento 1-a-1 con Telemetría | Formulario de reserva de entrevista con el coach con métricas conductuales automáticamente precargadas. | Fecha, hora, notas del alumno; telemetría inyectada por el Store. | Cita agendada persistida en el Store y reflejada en el Panel Coach. | RF-14, Borrador §3.6 |
| **F14** | Dashboard Profesional / Coach | Panel con semáforo de riesgo de abandono (Verde / Amarillo / Rojo) para toda la cohorte. | Lista consolidada de alumnos con sus historiales. | Clasificación de riesgo de abandono precisa según reglas diagnósticas. | RF-10, Borrador §3.5 |
| **F15** | Ficha Detallada de Asesorado | Inspección en profundidad: sesiones previstas vs realizadas, desglose ideal/mínima y barreras. | `alumnoId` seleccionado. | Vista integral del alumno con histórico de check-ins y efectividad de reglas. | RF-10, RF-11 |
| **F16** | Generador de Puntos de Conversación | Insights automáticos para la entrevista 1-a-1 basados en fallas de reglas y barreras recurrentes. | Datos de telemetría y barreras del alumno. | Array de 3 a 4 talking points prioritarios para el coach. | RF-12, Borrador §3.5 |
| **F17** | Sincronización Bidireccional Reactiva | Sincronización inmediata entre Vista Alumno y Vista Coach mediante LocalStorage y CustomEvents. | Mutación en Vista Alumno (ej. check-in, agendamiento). | Notificación `entrenhabitos:state-updated` y actualización instantánea en Vista Coach. | R4 §3.2, RNF-05 |
| **F18** | Multi-perfil Demo y Reset de Estado | 4 perfiles arquetípicos precargados (Martín, Lucía, Carlos, Sofía) y botón de reinicio de fábrica. | Comando `resetDemoData()` o selección de perfil demo. | Estado restaurado a las semillas oficiales sin mutaciones residuales. | R4 §3.4, ORIGINAL_REQUEST |

---

## 3. Metodología en 4 Tiers de Verificación

La infraestructura de pruebas implementa una estructura en **4 Tiers incrementales de aseguramiento de calidad**:

```
+---------------------------------------------------------------------------------------------------+
| METODOLOGÍA DE VERIFICACIÓN EN 4 TIERS (E2E TESTING HARNESS)                                      |
+---------------------------------------------------------------------------------------------------+
| TIER 1: FEATURE COVERAGE (Unit & Component Logic)                                                 |
| - Cobertura sistemática de los 18 features (F01 a F18).                                           |
| - Mínimo 5 casos de prueba formalmente especificados y ejecutados por cada feature (>= 90 tests).  |
|---------------------------------------------------------------------------------------------------|
| TIER 2: BOUNDARY & CORNER CASES (Edge Conditions & Stress)                                        |
| - Mínimo 5 casos de prueba en condiciones de frontera para cada feature donde aplique.            |
| - Tolerancia a datos corruptos, cadenas vacías, valores extremos, inactividad severa.             |
|---------------------------------------------------------------------------------------------------|
| TIER 3: CROSS-FEATURE INTERACTIONS (Integration & Reactivity)                                     |
| - Pruebas de integración de flujo cruzado entre módulos (Onboarding -> Plan -> Check-in -> Engine |
|   -> Feedback -> Métricas -> Agendamiento -> Panel Coach -> Sincronización).                      |
|---------------------------------------------------------------------------------------------------|
| TIER 4: REAL-WORLD APPLICATION SCENARIOS (E2E User Journeys)                                      |
| - Viajes de usuario completos para los 4 perfiles arquetípicos de la vida real:                   |
|   1. Martín Rossi (El Perfeccionista / Todo o Nada)                                               |
|   2. Lucía Méndez (La Profesional Ocupada / Fatiga Cognitiva)                                     |
|   3. Carlos Gómez (El Caótico / Turnos Rotativos de Urgencias)                                    |
|   4. Sofía Pereira (Nuevo Ingreso / Evaluación en Blanco desde Onboarding)                        |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Tier 1: Feature Coverage (Especificación de Casos de Prueba F01 - F18)

Cada feature cuenta con al menos 5 casos de prueba exhaustivos que cubren el camino feliz, validación de contratos y transiciones de estado:

### F01: Onboarding y Evaluación Inicial
- `TC-F01-01`: Cálculo de perfil "Perfeccionista / Todo o Nada" ante historial de abandono por metas excesivas y autoexigencia alta.
- `TC-F01-02`: Cálculo de perfil "Agotado Crónico / Fatiga" ante sobrecarga laboral y baja energía vespertina.
- `TC-F01-03`: Cálculo de perfil "Horarios Caóticos" ante jornadas rotativas y cambios imprevistos de agenda.
- `TC-F01-04`: Cálculo de perfil "Reiniciador Cíclico" ante múltiples intentos fallidos (>3) en el último año.
- `TC-F01-05`: Asignación de score de adherencia inicial conservador e hipótesis diagnóstica coherente.

### F02: Generación de Hipótesis de Adherencia
- `TC-F02-01`: Formulación de hipótesis H1 (Riesgo de abandono por perfección dicotómica) para perfil perfeccionista.
- `TC-F02-02`: Formulación de hipótesis H2 (Falla entre martes y jueves por fatiga laboral) para perfil agotado.
- `TC-F02-03`: Formulación de hipótesis H3 (Disrupción por imprevistos de agenda) para perfil caótico.
- `TC-F02-04`: Formulación de hipótesis H4 (Sobreentrenamiento en semana 3) para perfil reiniciador.
- `TC-F02-05`: Disponibilidad y legibilidad de la hipótesis en la ficha del alumno para la consulta del coach.

### F03: Prescripción de Rutina Base Realista
- `TC-F03-01`: Configuración de frecuencia realista de 2 a 3 días semanales para perfiles con baja disponibilidad.
- `TC-F03-02`: Validación de no sobrecarga: advertencia si un principiante intenta configurar más de 4 días intensos.
- `TC-F03-03`: Estructuración de sesiones con foco en ejercicios multiarticulares compuestos de alto retorno.
- `TC-F03-04`: Asignación de días de descanso entre sesiones intensas para permitir recuperación.
- `TC-F03-05`: Persistencia del plan base en el Store vinculado al ID del alumno.

### F04: Plan Semanal Dual (Ideal vs. Mínimo)
- `TC-F04-01`: Cada día programado cuenta mandatoriamente con una descripción y duración para su Versión Ideal (45-60 min).
- `TC-F04-02`: Cada día programado cuenta mandatoriamente con una Versión Mínima ("Día Difícil") de 15 a 20 min.
- `TC-F04-03`: Verificación matemática: el volumen o duración de la Versión Mínima es estrictamente menor al 50% de la Versión Ideal.
- `TC-F04-04`: La Versión Mínima especifica ejercicios ejecutables con mínimo equipamiento o en casa si aplica.
- `TC-F04-05`: Modificación dinámica del plan semanal y verificación de consistencia en el Store.

### F05: Registro Breve Diario (<1 min)
- `TC-F05-01`: Registro exitoso de sesión "ideal" en menos de 30 segundos con nivel de esfuerzo 1-5.
- `TC-F05-02`: Registro exitoso de sesión "minima" (salvataje de día difícil) asociando la barrera detectada.
- `TC-F05-03`: Registro de inasistencia ("perdida") sin penalización culpabilizante en la interfaz.
- `TC-F05-04`: Verificación de que el tiempo de registro registrado en telemetría es inferior a 60 segundos.
- `TC-F05-05`: Inserción atómica y ordenada cronológicamente del check-in en el array `historialCheckins`.

### F06: Taxonomía de Barreras en Tiempo Real
- `TC-F06-01`: Clasificación de barrera de la Familia B1 (`falta_tiempo`: reuniones tardías, urgencias de agenda).
- `TC-F06-02`: Clasificación de barrera de la Familia B2 (`baja_energia`: agotamiento psicofísico, mal descanso).
- `TC-F06-03`: Clasificación de barrera de la Familia B3 (`cambio_rutina`: viajes, guardias, traslado imprevisto).
- `TC-F06-04`: Clasificación de barrera de la Familia B4 (`logistica`: gimnasio saturado, mal clima, falta de equipo).
- `TC-F06-05`: Clasificación de barrera de la Familia B5 (`desmotivacion`: bloqueo emocional, culpa por falta previa).

### F07: Motor de Reglas Adaptativas en Vivo
- `TC-F07-01`: Disparo de regla ante `falta_tiempo` proponiendo reducción a Versión Mínima de 15-20 min.
- `TC-F07-02`: Disparo de regla ante `baja_energia` proponiendo micro-meta de entrada (regla de los 2 min) o movilidad.
- `TC-F07-03`: Disparo de regla ante `cambio_rutina` proponiendo rutina alternativa en casa o reprogramación asistida.
- `TC-F07-04`: Disparo de regla ante sesión perdida proponiendo Protocolo de Retorno Rápido Sin Culpa ("Never Miss Twice").
- `TC-F07-05`: Determinismo: para idénticos inputs e historial, el motor retorna exactamente la misma intervención y prioridad.

### F08: Catálogo de Intervenciones Adaptativas
- `TC-F08-01`: Verificación de estructura y completitud de INT-01 (Versión Mínima 15-20 min).
- `TC-F08-02`: Verificación de estructura y completitud de INT-02 (Micro-meta de Entrada / Regla 2 Min).
- `TC-F08-03`: Verificación de estructura y completitud de INT-03 (Reprogramación Inteligente Sin Culpa).
- `TC-F08-04`: Verificación de estructura y completitud de INT-04 (Entrenamiento Alternativo en Casa).
- `TC-F08-05`: Verificación de estructura y completitud de INT-05 (Protocolo Never Miss Twice) e INT-06 (Rampa de Retorno Progresivo).

### F09: Bucle de Validación de Efectividad
- `TC-F09-01`: Registro de respuesta afirmativa ("Sí ayudó") vinculada a la intervención previa.
- `TC-F09-02`: Registro de respuesta parcial ("Parcialmente") vinculada a la intervención previa.
- `TC-F09-03`: Registro de respuesta negativa ("No ayudó") vinculada a la intervención previa.
- `TC-F09-04`: Cálculo de la tasa de efectividad agregada por tipo de intervención.
- `TC-F09-05`: Persistencia del feedback en el Store y visibilidad del indicador en el panel del coach.

### F10: Módulo de Contingencia y Reajuste
- `TC-F10-01`: Activación de contingencia por viaje temporal trasladando sesiones a modalidad en casa.
- `TC-F10-02`: Desplazamiento asistido de un día de entrenamiento sin generar acumulación de 3 días consecutivos.
- `TC-F10-03`: Validación de que la activación de contingencia no degrada el score de adherencia global.
- `TC-F10-04`: Reversión o finalización de la contingencia restaurando el plan semanal habitual.
- `TC-F10-05`: Notificación al coach sobre la activación del modo de contingencia por parte del alumno.

### F11: Racha Resiliente y Desculpabilización
- `TC-F11-01`: La ejecución de una Versión Mínima suma al contador de racha semanal exactamente igual que una Ideal.
- `TC-F11-02`: Una sesión perdida no destruye la racha histórica acumulada a cero, sino que la pausa.
- `TC-F11-03`: Cálculo matemático exacto del MTTR (Mean Time to Recovery) tras 1 interrupción.
- `TC-F11-04`: Cálculo matemático exacto del MTTR ponderado ante múltiples interrupciones a lo largo del mes.
- `TC-F11-05`: Verificación de mensajes empáticos en UI: ausencia de caritas tristes o alertas rojas culpabilizantes para el alumno.

### F12: Informe Visual de Progreso del Alumno
- `TC-F12-01`: Cálculo exacto de la Tasa de Cumplimiento (% sesiones realizadas / previstas).
- `TC-F12-02`: Cálculo exacto de la Tasa de Salvataje por Versión Mínima (TSVM = mínimas / total realizadas * 100).
- `TC-F12-03`: Desglose cuantitativo de las barreras más frecuentes del período (radar/distribución).
- `TC-F12-04`: Indicador de MTTR del alumno contrastado contra el objetivo clínico (<= 2.0 días).
- `TC-F12-05`: Renderizado coherente y datos actualizados en tiempo real al mutar el historial.

### F13: Agendamiento 1-a-1 con Telemetría
- `TC-F13-01`: Formulario de agendamiento precarga automáticamente el resumen conductual reciente del alumno.
- `TC-F13-02`: Validación de campos de fecha y horario seleccionados por el alumno.
- `TC-F13-03`: Almacenamiento exitoso de la cita agendada en el Store con estado "pendiente/confirmada".
- `TC-F13-04`: La cita agendada aparece de inmediato en la bandeja de entrevistas del Panel Coach.
- `TC-F13-05`: Mensaje de confirmación en la vista del alumno con los datos del encuentro acordado.

### F14: Dashboard Profesional / Coach
- `TC-F14-01`: Clasificación de Alumno en "Riesgo Bajo (Verde)" cuando adherencia >= 80% y MTTR <= 1.5 días.
- `TC-F14-02`: Clasificación de Alumno en "Riesgo Medio (Amarillo)" ante 1 falta semanal o uso recurrente de mínima.
- `TC-F14-03`: Clasificación de Alumno en "Riesgo Alto (Rojo)" ante 2 o más faltas consecutivas o inactividad > 48h.
- `TC-F14-04`: Cálculo de métricas agregadas de cohorte: total de alumnos, distribución porcentual de semáforo.
- `TC-F14-05`: Ordenamiento de la lista de alumnos priorizando aquellos con mayor riesgo de abandono.

### F15: Ficha Detallada de Asesorado
- `TC-F15-01`: Consulta de sesiones previstas vs. realizadas desglosadas por semana para un alumno específico.
- `TC-F15-02`: Desglose del ratio de sesiones ideales vs. mínimas del alumno seleccionado.
- `TC-F15-03`: Listado cronológico de todos los check-ins con su dificultad reportada y barrera asociada.
- `TC-F15-04`: Visualización del índice de efectividad de las intervenciones recibidas por el alumno.
- `TC-F15-05`: Persistencia de notas clínicas privadas del coach sobre el alumno en el Store.

### F16: Generador de Puntos de Conversación
- `TC-F16-01`: Generación automática de punto de conversación sobre la barrera más recurrente del alumno.
- `TC-F16-02`: Generación de punto sobre intervenciones con feedback negativo ("No ayudó") para explorar ajustes.
- `TC-F16-03`: Generación de punto sobre adecuación del plan si la versión mínima se usó en más del 50% de los casos.
- `TC-F16-04`: Generación de punto de felicitación y consolidación de hábito si el alumno mantiene racha verde.
- `TC-F16-05`: Puntos de conversación formateados en tarjetas claras y accionables para la entrevista.

### F17: Sincronización Bidireccional Reactiva
- `TC-F17-01`: Al registrar un check-in en la Vista Alumno, se emite el evento `entrenhabitos:state-updated`.
- `TC-F17-02`: El Store persiste el nuevo estado en `localStorage` bajo la clave oficial.
- `TC-F17-03`: La Vista Coach suscrita al Store actualiza sus métricas y semáforo sin recarga de página.
- `TC-F17-04`: Al cambiar de alumno activo en la barra superior, ambas vistas reflejan el nuevo contexto inmediatamente.
- `TC-F17-05`: Al agendar una entrevista en Vista Alumno, se refleja en la bandeja del Coach en tiempo real.

### F18: Multi-perfil Demo y Reset de Estado
- `TC-F18-01`: Inicialización del catálogo demo con los 4 perfiles arquetípicos: Martín, Lucía, Carlos y Sofía.
- `TC-F18-02`: Validación de consistencia de los historiales precargados para cada arquetipo.
- `TC-F18-03`: Ejecución de `resetDemoData()` restaura el dataset a sus valores iniciales inmutables.
- `TC-F18-04`: El perfil en blanco (Sofía) permite ejecutar el flujo de onboarding interactivo desde cero.
- `TC-F18-05`: Persistencia y recuperación íntegra del catálogo demo a través de sesiones del navegador.

---

## 5. Tier 2: Boundary & Corner Cases (Casos Límite y Estrés)

El Tier 2 valida la robustez del sistema ante anomalías, condiciones extremas de contorno y datos frontera:

| Caso ID | Feature Asociada | Condición Límite / Entrada Frontera | Comportamiento Esperado y Aserción |
|---|---|---|---|
| `BC-01` | F01 (Onboarding) | Usuario intenta enviar cuestionario de onboarding con campos vacíos o incompletos. | El sistema rechaza la sumisión, mantiene el estado en onboarding y emite mensaje de validación sin corromper el perfil. |
| `BC-02` | F01 (Onboarding) | Usuario con historial de 3 abandonos previos declara meta de entrenar 7 días/semana 90 min/día. | El sistema detecta incompatibilidad histórica (Problema 1), emite advertencia de sobreexigencia y sugiere acotar a 3 días base. |
| `BC-03` | F04 (Plan Dual) | Configuración de Versión Mínima con duración mayor o igual a la Versión Ideal (ej. 60m vs 60m). | El sistema valida que la versión mínima reduzca sustancialmente el volumen/tiempo ($T_{min} \le 0.5 \cdot T_{ideal}$), impidiendo la configuración errónea. |
| `BC-04` | F05 (Check-in) | Intento de registrar check-in con estado `minima` o `perdida` omitiendo la selección de barrera. | El sistema exige la captura de barrera para alimentar el motor diagnóstico, bloqueando la confirmación incompleta. |
| `BC-05` | F05 (Check-in) | Registro con slider de dificultad fuera de rango (ej. dificultad = 0 o dificultad = 6). | El sistema normaliza o rechaza el valor fuera del intervalo discreto $[1, 5]$. |
| `BC-06` | F07 (RulesEngine) | Disparo del motor de reglas ante un código de barrera desconocido o nulo. | El motor aplica graceful fallback: retorna la intervención genérica de retorno sin culpa (INT-05) sin arrojar excepción no capturada. |
| `BC-07` | F07 (RulesEngine) | Usuario reporta barrera de dolor físico intenso o posible lesión (`dolor_lesion`). | El motor suspende las sugerencias de esfuerzo de fuerza y activa protocolo de seguridad biológica (reposo, hielo y consulta médica). |
| `BC-08` | F09 (Feedback) | Usuario califica con "No ayudó" de forma repetida (>=3 veces) a la misma regla adaptativa. | El motor registra el agotamiento de efectividad automática y escala un punto prioritario a la ficha del coach. |
| `BC-09` | F11 (Racha / MTTR)| Historial con 0 interrupciones (asistencia 100% ideal y mínima). | El cálculo de MTTR maneja la división por cero retornando 0.0 o "N/A" sin provocar `NaN` ni errores matemáticos. |
| `BC-10` | F11 (Racha / MTTR)| Historial con abandono prolongado (>14 días continuos sin entrenar). | El cálculo de MTTR refleja fielmente el retraso en días sin penalizar al alumno con puntajes negativos. |
| `BC-11` | F14 (Dashboard) | Cohorte sin alumnos registrados o lista vacía. | El panel coach muestra un estado vacío instructivo sin romper los componentes de resumen de cohorte. |
| `BC-12` | F14 (Dashboard) | Alumno con 2 faltas consecutivas y más de 48h sin check-in simultáneamente. | El algoritmo de riesgo clasifica inequívocamente en **Alerta Roja (Riesgo Alto)** y lo ubica en el tope de atención del coach. |
| `BC-13` | F17 (Persistencia)| LocalStorage lleno o corrupción intencional de la clave de almacenamiento (JSON malformado). | El Store detecta la excepción de parseo, captura el error y recarga de forma segura el dataset demo inicial por defecto. |
| `BC-14` | F18 (Reset) | Ejecución de `resetDemoData()` habiendo modificado planes, check-ins y citas previas. | Todos los cambios volátiles son purgados y el estado se restaura de manera idéntica al snapshot original de fábrica. |

---

## 6. Tier 3: Cross-Feature Interactions (Interacciones de Flujo Cruzado)

El Tier 3 verifica la interacción integral entre los subsistemas de la aplicación a lo largo de 6 flujos de integración clave:

```
[Onboarding F01/F02] ──► [Plan Dual F03/F04] ──► [Check-in F05/F06] ──► [RulesEngine F07/F08]
                                                                                │
                                                                                ▼
[Panel Coach F14/F16] ◄── [Sincronización F17] ◄── [Métricas F11/F12] ◄── [Feedback F09]
         │
         ▼
[Agendamiento 1-a-1 F13]
```

- **XF-01: Onboarding $\to$ Plan Dual $\to$ Primer Check-in:**
  Al completar el cuestionario de onboarding para un nuevo alumno, se generan sus hipótesis, se autoconfigura su plan dual base y se habilita de inmediato el primer check-in diario en el Store.
- **XF-02: Check-in Mínimo con Barrera $\to$ RulesEngine $\to$ Disparo de Intervención $\to$ Feedback:**
  El alumno realiza check-in con estado `minima` y barrera `falta_tiempo`. El motor evalúa el contexto y devuelve INT-01 (Versión Mínima 20m). El alumno acepta la recomendación y en el siguiente ciclo registra feedback `si`. El Store recalcula la efectividad de la regla.
- **XF-03: Sesión Perdida $\to$ Activación de "Never Miss Twice" $\to$ Impacto en Semáforo Coach:**
  El alumno declara sesión perdida con barrera `desmotivacion`. El motor activa el protocolo Never Miss Twice (INT-05). En el Panel Coach, el semáforo del alumno pasa preventivamente a Riesgo Medio (Amarillo).
- **XF-04: Acumulación de 2 Faltas Consecutivas $\to$ Alerta Roja $\to$ Generador de Talking Points $\to$ Agendamiento 1-a-1:**
  El alumno acumula dos sesiones perdidas consecutivas. El Store eleva su estado a Alerta Roja. El generador de puntos para la entrevista compila automáticamente la necesidad de reestructurar el plan. El alumno accede a la vista de reporte y reserva una sesión 1-a-1, inyectando estos datos en la bandeja del coach.
- **XF-05: Mutación en Vista Alumno $\to$ CustomEvent $\to$ Sincronización Inmediata en Vista Coach:**
  Cualquier mutación en la vista del alumno despacha el evento reactivo `entrenhabitos:state-updated`, provocando que el Panel Coach recalcule métricas de cohorte y actualice su vista sin recarga del navegador.
- **XF-06: Persistencia Transaccional y Reset de Fábrica:**
  Se ejecutan múltiples mutaciones sobre los 4 perfiles y luego se invoca el reset de fábrica. Se valida que el Store recupera la integridad del esquema original y emite el evento de actualización.

---

## 7. Tier 4: Real-World Application Scenarios (Viajes de Usuario Arquetípicos)

El Tier 4 modela y ejecuta los 4 viajes de usuario de extremo a extremo que representan la realidad clínica del entrenamiento:

### Escenario RW-01: Martín Rossi — "El Perfeccionista / Todo o Nada"
- **Perfil:** 34 años, abogado corporativo, alta autoexigencia. Historial de abandonar cuando pierde una sesión.
- **Viaje:**
  1. Martín inicia la semana con 1 sesión ideal realizada.
  2. Llega un jueves con sobrecarga laboral extrema y registra check-in indicando `falta_tiempo`.
  3. El sistema no lo deja tirar la toalla: activa la intervención adaptativa de Versión Mínima de 20 minutos ("Básicos de Torso").
  4. Martín ejecuta los 20 minutos y marca check-in `minima`.
  5. El sistema celebra el salvataje: la racha se mantiene intacta en 4 semanas continuas y la Tasa de Salvataje por Versión Mínima refleja que salvó la semana.
  6. En el Panel Coach, Martín se mantiene en semáforo amarillo controlado y el coach observa que la versión mínima evitó la deserción.

### Escenario RW-02: Lucía Méndez — "Fatiga Cognitiva / Agotamiento Mental"
- **Perfil:** 29 años, Product Manager, llega a las 19hs con batería cerebral en cero. Fricción principal: trasladarse al gimnasio.
- **Viaje:**
  1. Lucía reporta en su check-in vespertino estado `minima` con barrera `baja_energia` y dificultad 4/5.
  2. El motor adaptativo prescribe INT-04 (Rutina de movilidad y peso corporal de 15 min en casa).
  3. Lucía realiza los 15 minutos en el living y califica la recomendación con "Sí ayudó".
  4. La Tasa de Salvataje de Lucía alcanza el 40%, su MTTR se mantiene en un óptimo 1.0 día y su semáforo es verde radiante.
  5. El sistema demuestra empíricamente cómo reducir la fricción de activación (Fogg Behavior Model) protege la adherencia en perfiles con alta demanda mental.

### Escenario RW-03: Carlos Gómez — "Horarios Caóticos / Guardia Médica de Urgencias"
- **Perfil:** 42 años, médico de urgencias, guardias rotativas que desarticulan semanas completas.
- **Viaje:**
  1. Carlos acumula una primera falta el miércoles por guardia imprevista (`cambio_rutina`).
  2. El viernes vuelve a perder la sesión por agotamiento post-guardia (`desmotivacion`).
  3. El sistema detecta 2 sesiones perdidas consecutivas y eleva inmediatamente su estado a **Alerta Roja (Riesgo Alto)** en el Panel del Coach.
  4. El motor genera una tarjeta de emergencia con el Protocolo de Retorno Rápido Sin Culpa (INT-05), invitándolo a pactar una micro-sesión de reenganche sin deudas pasadas.
  5. En el Panel Coach, Carlos salta al primer lugar de atención prioritaria. El generador de Talking Points prescribe: *"Explorar esquema flexible de 2 días fijos + 1 flotante adaptable a guardias"*.
  6. Carlos abre el modal de agendamiento 1-a-1 y confirma la entrevista con el coach con toda su telemetría precargada.

### Escenario RW-04: Sofía Pereira — "Nuevo Ingreso / Evaluación en Blanco desde Cero"
- **Perfil:** 26 años, diseñadora freelance, perfil demo precargado en blanco sin historial.
- **Viaje:**
  1. Sofía ingresa por primera vez a la aplicación y es recibida por el módulo interactivo de Onboarding.
  2. Completa el cuestionario respondiendo sobre sus metas físicas, disponibilidad de 3 días y su miedo a no poder sostenerlo en el tiempo.
  3. El sistema calcula en vivo su perfil de adherencia, formula su hipótesis de trabajo y genera su Plan Semanal Realista Dual (Lunes, Miércoles, Viernes con sus respectivas versiones ideales de 50 min y versiones mínimas de 15 min).
  4. Sofía ejecuta su primera sesión en el gimnasio y completa su primer check-in diario en menos de 25 segundos.
  5. El Store persiste su expediente, inicializa sus métricas de racha y su ficha pasa a estar activa en el Panel del Coach.

---

## 8. Arquitectura y Ejecución del Arnés Automatizado (`tests/e2e_verification.mjs`)

El arnés automatizado está implementado como un módulo ES nativo ejecutable mediante:

```bash
node tests/e2e_verification.mjs
```

### Componentes de Verificación Programática:
1. **Verificación de Integridad de Archivos del Proyecto:**
   - Existencia y contenido exhaustivo de entregables documentales: `docs/R1_DISENO_CONDUCTUAL_E_INNOVACION.md`, `docs/R2_SRS_REQUERIMIENTOS_Y_MODELADO.md`, `docs/R3_DIRECCION_DE_PROYECTO_Y_ROADMAP.md`.
   - Existencia y sintaxis de entregables de software: `index.html`, `css/styles.css`, `js/app.js`, `js/store.js`, `js/rules_engine.js`, `js/demo_data.js`.
2. **Pruebas de Capa de Dominio y Lógica Pura:**
   - Carga e instanciación de `RulesEngine`, `AppState` y catálogo `DEMO_DATA`.
   - Verificación de algoritmos de scoring, cálculo de métricas (MTTR, TSVM, % cumplimiento).
   - Verificación del árbol de decisión de las 5 familias de barreras e intervenciones INT-01 a INT-07.
3. **Pruebas de Integración y Persistencia del Store:**
   - Inserción y recuperación de check-ins, evaluación de intervenciones y persistencia de citas de agenda.
   - Verificación de pub/sub y consistencia reactiva en memoria y storage.
4. **Pruebas de Simulación de Usuario End-to-End:**
   - Ejecución programática de los 4 viajes arquetípicos (Martín, Lucía, Carlos, Sofía).
   - Verificación de transiciones de semáforos de riesgo y generación de puntos para la entrevista.

---

## 9. Criterios de Aceptación y Aprobación de la Suite

Para que la suite se declare oficialmente certificada en `TEST_READY.md`:
- [x] El 100% de los tests en `tests/e2e_verification.mjs` deben pasar exitosamente.
- [x] El comando `node tests/e2e_verification.mjs` debe terminar con código de salida `0` (exit code 0).
- [x] No debe existir ningún test simulado o fachada ("always passing test"); todas las aserciones deben evaluar condiciones de negocio reales.
- [x] Se cubren formalmente los 18 features (F01 a F18), los casos de borde (Tier 2), las interacciones cruzadas (Tier 3) y los 4 viajes arquetípicos de la vida real (Tier 4).
