# RELEVAMIENTO EXHAUSTIVO Y ESPECIFICACIÓN FUNDACIONAL: ENTRENHÁBITOS
**Documento Fuente Autoritativo:** `Borrador Marca Personal Entrenhábitos.pdf`  
**Referencia de Requerimientos:** `ORIGINAL_REQUEST.md`  
**Rol del Agente:** Specification Miner (Relevamiento y Descubrimiento de Especificaciones)  
**Fecha:** 2026-10-22  
**Estado:** Autorizado / Exhaustivo

---

## 1. Resumen Ejecutivo y Metadatos de la Especificación

El presente documento constituye la extracción, minería y formalización exhaustiva de la especificación autoritativa de **Entrenhábitos**, a partir del documento fundacional manuscrito/digitalizado `Borrador Marca Personal Entrenhábitos.pdf` y del marco de requerimientos `ORIGINAL_REQUEST.md`.

Entrenhábitos nace como una propuesta híbrida de **marca personal de alto valor (coaching 1-a-1 asistido por tecnología)** orientada a resolver la epidemia de deserción en el entrenamiento de fuerza y gimnasio. A diferencia de las aplicaciones tradicionales de fitness (centradas en contar calorías, registrar repeticiones o mostrar videos de ejercicios asumiendo que el usuario ya posee la motivación y disciplina para ejecutarlos), Entrenhábitos opera como un **sistema de ingeniería conductual y diagnóstico adaptativo**, cuyo núcleo de valor es identificar qué dispara el abandono en cada individuo, aprender de sus patrones reales de conducta y desplegar contramedidas inmediatas para sostener el hábito a lo largo del tiempo.

### Metadatos del Documento de Origen
- **Título Original:** Marca Personal: Entrenhábitos
- **Subtítulo:** Una app para dejar de abandonar y favorecer la adherencia al gimnasio.
- **Naturaleza del Documento:** Documento de visión de producto y diseño de servicio de marca personal (2 páginas de alta densidad conceptual).
- **Voz y Perspectiva:** Primera persona del fundador/coach («junto conmigo», «para que yo consulte los registros», «entrevista personalizada») combinada con especificación de sistema de reglas y producto digital.

---

## 2. Propósito, Concepto y Promesa de Valor

### 2.1. Propósito Fundacional
Resolver la brecha entre la **intención declarada** de entrenar y la **conducta real sostenida**. La mayoría de las personas se inscriben al gimnasio con entusiasmo genuino, pero abandonan antes de consolidar el hábito (usualmente entre las semanas 2 y 6) debido a fricciones psicológicas, rigidez en los planes y falta de mecanismos de rescate ante días difíciles.

### 2.2. Concepto de Producto
> *"Una aplicación de adherencia al entrenamiento en el gym que identifica las barreras de cada persona, aprende de sus patrones y le propone intervenciones personalizadas para ayudarla a entrenar con mayor regularidad y realizar una rutina determinada."*

**Pilares Conceptuales Identificados:**
1. **Foco exclusivo en Adherencia:** No compite con apps de rutinas o biomecánica; su foco es la consistencia y la eliminación de la deserción.
2. **Diagnóstico continuo de Barreras:** Trata cada omisión de entrenamiento no como una falla de carácter, sino como un síntoma de una barrera subyacente que debe ser diagnosticada.
3. **Aprendizaje de Patrones:** El sistema correlaciona variables contextuales (días, horarios, fatiga, tipo de barrera) con la probabilidad de cumplimiento.
4. **Intervención Adaptativa Inmediata:** Propuesta proactiva de una acción alternativa en lugar de un registro pasivo de inasistencia.
5. **Cierre de Ciclo Cibernético:** Verificación explícita de si la intervención funcionó o no, refinando el modelo.

### 2.3. Promesa de Marca y Valor
> **«Descubrí qué te hace abandonar la rutina y construí un sistema para mantenerlo en tu vida».**

Esta promesa transforma el problema: deja de culpar a la "falta de fuerza de voluntad" del usuario y le ofrece un **sistema externalizado de soporte y autoconocimiento conductual**.

---

## 3. Las 5 Funciones Clave del Borrador

El documento fundacional enumera 5 funciones operativas que describen el ciclo de vida de la experiencia del usuario y del coach:

```
[1. Proponer rutina física] 
           │
           ▼
[2. Detectar barreras de no-entrenamiento]
           │
           ▼
[3. Proponer intervención según barrera]
           │
           ▼
[4. Comprobar si la intervención ayudó] ◄──┐ (Bucle de aprendizaje)
           │                               │
           ▼                               │
[5. Entrevista personalizada 1-a-1 con datos acumulados]
```

### Función 1: Proponer una rutina en base a objetivos físicos
- **Definición en el Borrador:** "Proponer una rutina en base a objetivos físicos."
- **Alcance Operativo:** Define la estructura base de entrenamiento según lo que la persona busca (hipertrofia, salud general, fuerza, pérdida de grasa, reacondicionamiento). 
- **Matiz Crítico:** A diferencia de un generador ciego de rutinas, esta propuesta física debe servir como ancla para modularse en dos capas: la **Versión Ideal** (lo que se haría en condiciones óptimas) y la **Versión Mínima Viable ("Día Difícil")** (lo que preserva el hábito ante adversidad).

### Función 2: Detectar las barreras que hacen que las personas no entrenen como quieren
- **Definición en el Borrador:** "Detectar las barreras que hace que las personas no entrenen como quieren."
- **Alcance Operativo:** Capturar en tiempo real, mediante un micro-registro (< 1 minuto), el obstáculo concreto que impidió la sesión o que generó fricción.
- **Diferenciador:** Distingue entre la intención previa y el obstáculo situacional real (falta de tiempo, fatiga imprevista, imprevisto laboral/familiar, desgano psicológico, dolor o incomodidad).

### Función 3: Proponer una intervención diferente según la barrera probable
- **Definición en el Borrador:** "Proponer una intervención diferente según la barrera probable."
- **Alcance Operativo:** Disparar una prescripción conductual accionable y específica adaptada al diagnóstico.
- **Ejemplos del Borrador:**
  - Si faltó tiempo: reducir la rutina (activar versión mínima) o cambiar su horario.
  - Si hubo una interrupción: acordar el próximo paso de retorno inmediato (evitar que 1 día perdido se convierta en 2 semanas).

### Función 4: Comprobar si esa intervención ayudó
- **Definición en el Borrador:** "Comprobar si esa intervención ayudó."
- **Alcance Operativo:** Mecanismo de feedback post-intervención. Preguntar al usuario en el siguiente contacto si la estrategia sugerida (ej. hacer la versión de 15 minutos o reprogramar al día siguiente) resolvió la fricción o si persistió el bloqueo.
- **Valor Sistémico:** Permite descartar intervenciones ineficaces y rankear las de mayor efectividad para ese perfil de usuario.

### Función 5: Entrevista personalizada basada en diagnóstico y datos
- **Definición en el Borrador:** "Una vez hecho el diagnóstico y recogida la información se mantiene entrevista personalizada."
- **Alcance Operativo:** Instancia de coaching 1-a-1 de alto impacto. El coach no llega a "adivinar qué pasó" ni a reprender al cliente; llega con un panel de telemetría conductual consolidada (sesiones realizadas vs. perdidas, barreras recurrentes, intervenciones aceptadas y rechazadas) para co-diseñar ajustes estructurales al plan de vida del alumno.

---

## 4. Los 5 Problemas Frecuentes de Abandono (Análisis y Solución)

El borrador identifica con notable agudeza clínica los 5 patrones universales de fracaso en el fitness. A continuación se desglosan, vinculándolos con la ciencia del comportamiento:

| # | Problema del Borrador | Diagnóstico Conductual / Psicológico | Solución Propuesta por el Método Entrenhábitos | Mecanismo de Software Asociado |
|---|-----------------------|--------------------------------------|------------------------------------------------|--------------------------------|
| **P1** | **Empiezan con objetivos demasiado exigentes.** | *Sesgo de planificación y exceso de optimismo inicial.* El alumno diseña su rutina como si viviera en un laboratorio (ej. 5-6 días/semana, 90 min/día). A la primera semana ocupada, la carga cognitiva y física se vuelve insostenible. | **Diseño de Plan Semanal Realista.** Anclaje en un compromiso de piso bajo, con frecuencia sustentable y definición previa obligatoria de la "Versión Mínima Viable" (Plan B). | Regla de validación en Evaluación Inicial que frena metas irreales y exige configurar la versión "Día Difícil". |
| **P2** | **Dependen de tener ganas o de sentirse con energía.** | *Dependencia de estados emocionales fluctuantes (Sistema 1).* La motivación es un recurso escaso que se agota con el estrés laboral y la falta de sueño. Si el hábito requiere alta motivación, fracasa ante el cansancio. | **Disminución drástica de la fricción de activación (Fogg Behavior Model: si la motivación baja, la habilidad/facilidad debe subir).** Rutinas de rescate de 15-20 min que no exigen motivación para comenzar. | Intervención ante barrera "Baja energía/Cansancio": sustitución inmediata por versión mínima de bajo impacto o movilidad. |
| **P3** | **Interpretan una sesión perdida como un fracaso.** | *Distorsión cognitiva de "Todo o Nada" (Dicotomía rígida) y el "Efecto ¡Qué más da!" (What-The-Hell Effect).* Perder el martes hace sentir al alumno que "ya arruinó la semana", lo que precipita el abandono total. | **Reencuadre cognitivo y Protocolo de Retorno Rápido.** Una sesión perdida es un dato de calibración, no un juicio moral. Regla de "Nunca falles dos veces consecutivas" (James Clear). | Detección de sesión perdida -> Mensaje desculpabilizador + Acción de compromiso inmediato para la próxima sesión más cercana. |
| **P4** | **Les cuesta reorganizarse cuando cambia su rutina.** | *Inflexibilidad del plan ante imprevistos contextuales.* Viajes de trabajo, horas extras, exámenes o emergencias familiares rompen el horario rígido preestablecido y la persona no sabe cómo reacomodarse. | **Flexibilidad adaptativa guiada.** Reprogramación asistida con un clic, traslados de días o adaptación al entorno (ej. versión hotel/casa). | Botón de "Reorganizar semana": redistribución algorítmica de los días restantes sin sobrecargar los días sucesivos. |
| **P5** | **Retoman repetidamente, pero no consiguen sostener la práctica.** | *Ciclo de recaída crónica (Efecto Yo-Yo).* Cada intento de reinicio se encara con la misma intensidad que provocó el abandono anterior, produciendo dolor muscular excesivo (DOMS), frustración y nueva renuncia. | **Rampa de reinserción progresiva y memoria histórica de barreras.** El sistema recuerda por qué abandonó antes y activa salvaguardas antes de que el patrón se repita. | Alerta temprana al Coach y al Alumno tras 2 omisiones consecutivas; activación de protocolo de reinserción suave. |

---

## 5. Las 6 Funcionalidades Prioritarias del Producto

El documento fundacional delimita 6 funcionalidades prioritarias que constituyen la columna vertebral del MVP:

### 5.1. Evaluación Inicial
- **Descripción en el Borrador:** Cuestionario y entrevista breve para conocer historial de actividad, objetivos, intentos anteriores, situaciones de abandono, barreras percibidas y contexto cotidiano.
- **Resultado Estipulado:** *Un perfil inicial de adherencia revisado, con hipótesis de trabajo que luego se contrastan con la conducta real.*
- **Formalización Funcional:**
  - Captura anamnesis de entrenamiento previa (frecuencia pasada, qué actividades disfrutó o detestó).
  - Identificación de los "puntos de quiebre históricos" (cuándo y por qué abandonó en el pasado: trabajo, lesiones, aburrimiento, horario).
  - Declaración de disponibilidad real en días y franjas horarias.
  - Generación del **Perfil Arquetípico de Adherencia** (ej. "Entusiasta de Alta Exigencia", "Prisionero del Horario Laboral", "Sensible a la Fatiga", "Retomador Cíclico").
  - Formulación de **Hipótesis de Riesgo**: "Es altamente probable que ante picos laborales los jueves, el alumno omita la sesión del viernes".

### 5.2. Plan Semanal Realista (Dual: Ideal vs. Mínima)
- **Descripción en el Borrador:** El usuario define, junto conmigo [con el coach], cuántas veces entrenará, cuándo y cuál será la versión mínima de cada sesión para los días difíciles.
- **Resultado Estipulado:** *Un plan que contemple tanto la versión ideal como una alternativa viable.*
- **Formalización Funcional:**
  - Calendario semanal estructurado con días asignados (ej. Lunes, Miércoles, Viernes).
  - **Paridad Obligatoria Dual por Sesión:**
    - **Versión Ideal:** 45-60 min, 5-6 ejercicios, volumen completo de hipertrofia o fuerza.
    - **Versión Mínima ("Día Difícil"):** 15-20 min, 2-3 ejercicios multiarticulares clave o rutina express de preservación de hábito. Su objetivo no es maximizar ganancia muscular, sino mantener la identidad de quien no abandona.
  - Se pacta de mutuo acuerdo entre coach y alumno en la sesión de kickoff.

### 5.3. Registro Breve Diario (< 1 Minuto)
- **Descripción en el Borrador:** El usuario indica si entrenó, qué ocurrió si no lo hizo y qué dificultad apareció. El registro debería poder completarse en aproximadamente un minuto.
- **Resultado Estipulado:** *Datos sobre conducta real, no solo sobre intención o motivación declarada.*
- **Formalización Funcional:**
  - Micro-interacción optimizada para evitar la fatiga de carga (máximo 3 toques/pantallas, < 45 segundos).
  - Opciones de estado inmediato:
    1. *Entrené (Versión Ideal)*
    2. *Entrené (Versión Mínima / Día Difícil)* -> ¡Celebración del rescate!
    3. *No pude entrenar hoy*
  - Si no entrenó o hubo dificultad: Menú selector de Barreras pre-clasificadas + campo opcional de 1 línea.
  - Escala de Percepción de Esfuerzo / Dificultad (1 a 5).

### 5.4. Recomendaciones Adaptativas (Motor de Reglas)
- **Descripción en el Borrador:** Un sistema inicial de reglas que propone una acción concreta según la barrera registrada. Ejemplo: si faltó tiempo, reducir la rutina o cambiar su horario; si hubo una interrupción, acordar el próximo paso de retorno.
- **Formalización Funcional:**
  - Motor de reglas reactivo y proactivo (Rule Engine).
  - Estructura formal de regla: `SI (Barrera == X) Y (Contexto/Historial == Y) ENTONCES (Prescribir Intervención Z)`.
  - Despliegue de tarjetas de intervención en pantalla con llamada a la acción (CTA) inmediata:
    - *Opción A: Reducir a Versión Mínima (20 min hoy).*
    - *Opción B: Mover sesión a mañana a la misma hora.*
    - *Opción C: Declarar descanso estratégico y blindar la próxima sesión.*
  - Feedback Loop: Registrar si el alumno aceptó la recomendación y consultar posteriormente: *"¿Esta estrategia te ayudó a destrabar el hábito? (Sí / Parcialmente / No)"*.

### 5.5. Panel de Seguimiento Profesional (Vista Coach)
- **Descripción en el Borrador:** Una vista para que yo [el profesional] consulte los registros, las sesiones previstas y realizadas, las barreras repetidas y los cambios que conviene conversar en el seguimiento.
- **Formalización Funcional:**
  - Panel tipo Cockpit para el entrenador/coach con métricas agregadas y detalle por alumno:
    - Semáforo de riesgo de abandono (Verde = Adherencia > 80%; Amarillo = 1 omisión o uso frecuente de versión mínima; Rojo = 2+ omisiones consecutivas o inactividad de registro > 48h).
    - Tasa de cumplimiento: Sesiones Previstas vs. Realizadas (Ideales vs. Mínimas).
    - Radar de Barreras Recurrentes (ej. 60% tiempo, 30% energía).
    - Eficacia de Intervenciones (cuáles funcionaron y cuáles fallaron para ese alumno).
    - Generador automático de **Puntos Sugeridos para la Sesión 1-a-1** ("Hablar sobre la fricción de los jueves a la noche").

### 5.6. Informe de Progreso y Agendamiento 1-a-1
- **Descripción en el Borrador:** Un resumen de continuidad, frecuencia, interrupciones, tiempo hasta retomar y estrategias que parecen ayudar. Se registra información y se abre un calendario para tener una sesión con el cliente con los datos ya obtenidos.
- **Formalización Funcional:**
  - Vista de reporte visual compartida entre alumno y coach:
    - Días consecutivos de continuidad / Semanas activas.
    - Tiempo medio hasta retomar tras una interrupción (Bounce-back time en días).
    - Porcentaje de salvataje gracias a la Versión Mínima (cuántas sesiones se salvaron en días difíciles).
    - Top 3 de barreras superadas.
  - **Integración de Agendamiento:** Botón directo para seleccionar turno en el calendario del coach con la ficha del alumno y sus métricas automáticamente vinculadas a la cita.

---

## 6. Perfil del Alumno, Modelo de Negocio y Proyección Estratégica

### 6.1. Perfil del Alumno Objetivo (Target Persona)
- **Denominación:** El "Abandonador Crónico Frustrado" o "Profesional Ocupado con Buena Intención".
- **Demografía:** Adultos de 25 a 55 años, con responsabilidades laborales o familiares demandantes.
- **Psicografía y Puntos de Dolor:**
  - Valora la salud y la estética del entrenamiento de fuerza, pero siente culpa constante por no poder mantener la constancia.
  - Ha pagado membresías anuales en gimnasios que utilizó durante 3 semanas.
  - Cree erróneamente que "para ir 30 minutos, mejor no voy", cayendo en la trampa del todo o nada.
  - Se abruma ante rutinas hiper-complejas de 6 días que no encajan en su vida real.
  - Responde positivamente al accountability humano (saber que alguien lo acompaña y comprende su contexto).

### 6.2. Modelo de Negocio Inicial: Marca Personal 1-a-1 (High-Touch Coaching)
- **Propuesta:** Servicio premium de acompañamiento para la adherencia al gimnasio, liderado por el fundador (coach de marca personal).
- **Componentes del Paquete:**
  1. Onboarding profundo y calibración de perfil.
  2. Co-diseño del Plan Semanal Dual (Ideal + Mínima).
  3. Acceso a la App Entrenhábitos para check-in diario y recomendaciones inmediatas.
  4. Monitoreo diario/semanal por parte del coach a través del Panel Profesional.
  5. Sesiones 1-a-1 periódicas (quincenales o mensuales) para ajustar el sistema.
- **Estructura de Monetización:** Suscripción mensual / Membresía de acompañamiento (ticket medio-alto).

### 6.3. Proyección Futura y Escalabilidad (Transición a SaaS)
El producto está concebido en 3 horizontes estratégicos:
1. **Fase 1 (MVP Marca Personal 1-a-1):** Validación clínica y humana del método. El fundador valida las reglas adaptativas manualmente o semi-asistidas con sus primeros 20-50 clientes.
2. **Fase 2 (Automatización y Retención):** El motor de reglas se sofistica con base en los datos empíricos de la Fase 1. Se automatizan recordatorios, resúmenes semanales y detección preventiva de deserción.
3. **Fase 3 (Plataforma SaaS Multi-Coach / B2C):** 
   - *B2B (SaaS para entrenadores y gimnasios):* Licenciamiento de la plataforma a otros personal trainers y centros de fitness que sufren deserción de clientes.
   - *B2C (App Autónoma):* Versión de suscripción masiva con Coach Algorítmico/IA para usuarios que desean auto-acompañamiento sin costo de coaching 1-a-1.

---

## 7. Features Discovered (Catálogo Exhaustivo de Funcionalidades)

Conforme a las directivas del rol de Specification Miner, se detalla a continuación el inventario exhaustivo de todas las funciones explícitas e inferidas del documento autoritativo y su solicitud:

| # | Categoría | Feature | Descripción | Inputs | Outputs | Comportamiento ante Errores / Excepciones | Descubierto Vía |
|---|-----------|---------|-------------|--------|---------|-------------------------------------------|-----------------|
| **F01** | Evaluación Inicial | Cuestionario de Historial y Contexto | Captura de historial físico, intentos fallidos pasados, disponibilidad de días/horas y barreras percibidas. | Formulario con respuestas de opción múltiple y texto breve. | Datos estructurados de contexto histórico del usuario. | Campos obligatorios vacíos bloquean avance con mensaje explicativo. | Borrador PDF Pág. 1, Sec. 3.1 |
| **F02** | Evaluación Inicial | Generador de Perfil e Hipótesis de Adherencia | Algoritmo que clasifica al usuario en un perfil de riesgo y formula hipótesis de trabajo sobre sus gatilladores de abandono. | Respuestas del cuestionario inicial. | Ficha de perfil de adherencia con hipótesis explícitas (ej. "Riesgo jueves tarde"). | Si las respuestas son contradictorias, se asigna perfil híbrido y se marca para revisión del coach. | Borrador PDF Pág. 1, Sec. 3.1; R2 |
| **F03** | Planificación | Configuración de Plan Semanal Dual | Definición conjunta (coach-alumno) de días, horarios y pares de rutina (Versión Ideal + Versión Mínima). | Días seleccionados, duración ideal, ejercicios ideales, versión mínima express (15-20 min). | Calendario semanal activo con vista dual en cada día programado. | Si el usuario intenta programar más de 4 días de alta exigencia siendo principiante, se dispara alerta de riesgo. | Borrador PDF Pág. 1, Sec. 3.2 |
| **F04** | Planificación | Editor de Rutina de Emergencia ("Día Difícil") | Interfaz para preconfigurar la versión reducida (2-3 ejercicios básicos o protocolo express de 15 min). | Selección de ejercicios clave o duración corta predefinida. | Bloque de rutina mínima guardado y anclado a cada sesión. | Si no se configura versión mínima, el sistema asigna por defecto una plantilla básica de movilidad/fuerza. | Borrador PDF Pág. 1, Sec. 3.2 |
| **F05** | Registro Diario | Check-in Rápido (< 60 seg) | Registro diario ultra-simplificado donde el usuario reporta en 3 toques su estado de entrenamiento. | Estado: Entrenó Ideal / Entrenó Mínima / No Entrenó; hora de registro. | Estado de la sesión actualizado en base de datos y calendario. | Si pasan 48h sin registro, el sistema genera evento de "inactividad no reportada". | Borrador PDF Pág. 1, Sec. 3.3 |
| **F06** | Registro Diario | Selector Diagnóstico de Barreras | Menú contextual que aparece cuando el usuario no entrenó o usó versión mínima, para categorizar la fricción. | Categoría de barrera: Falta de tiempo, Baja energía, Imprevisto de rutina, Desmotivación, Dolor/Molestia. | Barrera vinculada a la sesión y guardada en el historial de fricciones. | Si selecciona "Otro", solicita texto libre de hasta 100 caracteres. | Borrador PDF Pág. 1, Sec. 3.3 y Pág. 2, Sec. 4 |
| **F07** | Registro Diario | Calificación de Dificultad Percibida | Escala rápida (1 a 5 o emojis) sobre el nivel de esfuerzo que costó iniciar la sesión. | Nivel de dificultad (1=Fácil, 5=Extremadamente difícil). | Métrica de resistencia psicológica almacenada. | Campo opcional; si se omite, se asume neutro (3). | Borrador PDF Pág. 1, Sec. 3.3 |
| **F08** | Motor Adaptativo | Evaluación de Reglas de Intervención | Motor lógico que cruza la barrera reportada + historial reciente y selecciona una acción correctiva. | Barrera actual, racha previa, historial de omisiones, perfil de adherencia. | Prescripción conductual recomendada con tarjeta de acción. | Si no hay coincidencia exacta de regla, aplica regla fallback general de retorno sin culpa. | Borrador PDF Pág. 2, Sec. 4 |
| **F09** | Motor Adaptativo | Intervención: Reducción Inmediata a Versión Mínima | Sugerencia activa de hacer la versión corta de 15-20 min cuando se alega falta de tiempo o cansancio antes de cancelar. | Disparo por barrera "Falta de tiempo" o "Baja energía" antes del horario de fin del día. | Pantalla de activación con temporizador o guía rápida de 3 ejercicios. | Si el usuario rechaza la opción, deriva a reprogramación sin culpa. | Borrador PDF Pág. 2, Sec. 4 |
| **F10** | Motor Adaptativo | Intervención: Protocolo de Retorno Rápido (Anti-Todo o Nada) | Mensaje desculpabilizador y propuesta concreta de fecha/hora para la siguiente sesión ante omisión consumada. | Disparo por omisión de entrenamiento (No entrenó). | Compromiso explícito agendado para la próxima sesión más cercana. | Si el usuario rechaza dos fechas sugeridas, escala al panel del coach como alerta amarilla. | Borrador PDF Pág. 2, Sec. 4; ORIGINAL_REQUEST R1 |
| **F11** | Motor Adaptativo | Bucle de Validación de Intervención | Pregunta de seguimiento en el próximo check-in: "¿La recomendación de [X] te ayudó?". | Respuesta: Sí / Parcialmente / No. | Índice de efectividad de la intervención actualizado; ajuste de peso de la regla. | Si la respuesta es "No" repetida (>=2), la regla se inhabilita para ese usuario y se marca para el coach. | Borrador PDF Pág. 1, Sec. 1.4 y Pág. 2, Sec. 6 |
| **F12** | Panel Profesional | Tablero General de Asesorados (Cockpit Coach) | Vista consolidada para el coach con lista de alumnos, semáforo de riesgo de deserción y filtros de actividad. | Filtros por estado, riesgo, nombre, fecha de última interacción. | Tabla/Tarjetas con métricas clave por alumno (Riesgo, % Adherencia, Último Check-in). | Si un alumno no registra datos en 72h, parpadea en rojo en el tope del listado. | Borrador PDF Pág. 2, Sec. 5 |
| **F13** | Panel Profesional | Ficha de Detalle y Telemetría del Alumno | Inspección profunda de un alumno: sesiones previstas vs. realizadas (ideales vs. mínimas), barreras frecuentes y notas. | ID del alumno seleccionado. | Gráficos de barra comparativos, desglose de barreras, historial cronológico de check-ins. | Alumno sin registros muestra mensaje vacío con botón de "Enviar recordatorio". | Borrador PDF Pág. 2, Sec. 5 |
| **F14** | Panel Profesional | Asistente de Puntos para la Entrevista | Algoritmo que sintetiza los problemas críticos observados para sugerir la agenda de la próxima llamada 1-a-1. | Historial de barreras e intervenciones fallidas del período. | Lista sugerida de 2 a 3 temas clave ("Profundizar en la sobrecarga de los martes"). | Si no hay incidentes, sugiere felicitación por consistencia y aumento progresivo opcional. | Borrador PDF Pág. 2, Sec. 5 |
| **F15** | Progreso y Agenda | Informe Visual de Continuidad y Rescate | Dashboard de métricas para el alumno: días activos, ratio de sesiones ideales vs. mínimas, tiempo hasta retomar. | Período de tiempo (últimos 30/60/90 días). | Gráficos visuales de racha protegida, bounce-back time y salvatajes por versión mínima. | Período sin suficientes datos muestra estado de calibración inicial. | Borrador PDF Pág. 2, Sec. 6 |
| **F16** | Progreso y Agenda | Módulo de Agendamiento de Sesión 1-a-1 | Selector de fecha y hora para reservar entrevista con el coach, con integración de datos precargados. | Disponibilidad del coach, selección del alumno. | Cita confirmada en calendario con link y ficha de datos adjunta automáticamente. | Conflicto de horario impide reserva simultánea y ofrece franja alternativa. | Borrador PDF Pág. 2, Sec. 6 |
| **F17** | Gestión de Identidad | Modo Dual de Vistas (Alumno / Coach) | Selector de rol en prototipo para alternar entre la perspectiva del entrenado y la del profesional sin cerrar sesión. | Clic en conmutador de perfil en cabecera. | Cambio instantáneo de layout y contexto de datos. | Si se producen cambios en vista Alumno, se sincronizan de inmediato al panel Coach. | ORIGINAL_REQUEST R4 |
| **F18** | Gamificación Suave | Métrica de Resiliencia (Bounce-Back Score) | Indicador conductual que premia la velocidad para volver a entrenar tras una sesión perdida (no premia la perfección rígida). | Días transcurridos entre una sesión perdida y la siguiente sesión efectiva. | Puntuación de resiliencia y medallas de "Retorno Rápido". | Si hay abandono prolongado, el indicador no penaliza con números negativos, sino que se reinicia con rampa suave. | ORIGINAL_REQUEST R1, R3 |

---

## 8. Catálogo Exhaustivo de Casos Borde (Edge Cases Table)

A continuación se analizan los casos extremos, situaciones atípicas y condiciones de contorno identificadas al contrastar el borrador con la vida real de los usuarios en el gimnasio:

| # | Feature Vinculada | Input / Condición Borde | Comportamiento Observado / Especificado |
|---|-------------------|-------------------------|-----------------------------------------|
| **E01** | Evaluación Inicial | El usuario declara objetivos extremos (ej. "Quiero entrenar 6 días a la semana 2 horas cada día") habiendo abandonado 3 veces antes. | El sistema detecta incompatibilidad histórica (objetivo hiper-exigente = Problema 1). Emite una advertencia preventiva: *"Tu historial indica que empezar con 6 días suele generar abandono en la semana 3. Te recomendamos comenzar con 3 días fijos y 1 opcional"*. Bloquea la confirmación sin asignar versión mínima. |
| **E02** | Plan Semanal Dual | El usuario intenta definir una "Versión Mínima" que dura lo mismo o es igual de exigente que la "Versión Ideal". | El sistema valida que la versión mínima tenga al menos un 50% menos de volumen/tiempo o menor carga de ejercicios que la ideal. De lo contrario, advierte: *"La versión mínima debe ser ejecutable incluso cuando estés sin energía o con solo 20 minutos disponibles"*. |
| **E03** | Registro Diario | El usuario no ingresa a la aplicación durante 3 días consecutivos (abandono silencioso de registro). | Al no haber check-in, el sistema no asume ni éxito ni fracaso pasivo; a las 48h envía una notificación no intrusiva de rescate: *"¿Días complicados? No te preocupes por lo que pasó. Solo contanos en 1 toque si necesitás pausar o hacer 10 min hoy"*. En el panel del coach pasa inmediatamente a Semáforo Rojo. |
| **E04** | Registro Diario | El usuario intenta registrar un entrenamiento a las 3:00 AM o múltiples check-ins el mismo día. | El sistema admite el registro pero solicita confirmación de fecha: *"¿Este entrenamiento corresponde a ayer o a hoy?"*, evitando duplicación accidental de sesiones en la misma franja de 24h. |
| **E05** | Motor Adaptativo | El usuario reporta la barrera "Dolor / Molestia física / Posible lesión". | El motor suspende las recomendaciones de entrenamiento de fuerza habitual y activa una regla de seguridad biológica: propone descanso activo, aplicación de hielo/reposo y consulta profesional, bloqueando la sugerencia de versión mínima que involucre la zona afectada. |
| **E06** | Motor Adaptativo | El usuario utiliza la "Versión Mínima" en el 100% de las sesiones durante 3 semanas consecutivas. | El sistema celebra la continuidad (cero abandono), pero dispara una regla de recalibración: le sugiere al coach que el plan ideal tal vez está sobredimensionado y que la versión mínima debería convertirse en el nuevo estándar oficial. |
| **E07** | Motor Adaptativo | El usuario califica con "No ayudó" a 3 intervenciones adaptativas consecutivas ante la misma barrera (ej. falta de tiempo). | El sistema agota las reglas automáticas y eleva un ticket prioritario al panel del coach: *"Las reglas automáticas para Falta de Tiempo no están funcionando para este alumno. Se requiere ajuste humano en la entrevista 1-a-1"*. |
| **E08** | Motor Adaptativo | El usuario pierde una sesión y declara "Desmotivación / Sentimiento de culpa". | Se dispara el protocolo de desculpabilización: en lugar de mostrar gráficos en rojo o rachas rotas a cero, la interfaz muestra: *"Un tropiezo no borra tu esfuerzo. Lo que define el hábito no es no fallar nunca, sino volver rápido. ¿Agendamos tu retorno mañana?"*. |
| **E09** | Panel Profesional | El coach tiene más de 30 alumnos activos y varios presentan alertas rojas simultáneas. | El panel implementa ordenamiento por criticidad (Risk Score descendente), destacando a quienes acumulan mayor tiempo sin retorno o mayor número de intervenciones fallidas, optimizando el tiempo de respuesta del coach. |
| **E10** | Informe de Progreso | El alumno tuvo una interrupción de 15 días por enfermedad o viaje y luego retoma. | El cálculo de métricas separa el período antes y después del bache. No aniquila su historial completo; calcula la tasa de retorno ("Lograste volver tras un bache de 15 días") reconociendo el mérito del reenganche en lugar de castigarlo con un cero permanente. |
| **E11** | Agendamiento 1-a-1 | El alumno intenta agendar una sesión personalizada cuando todavía no tiene al menos 7 días de datos registrados. | El sistema avisa: *"Para aprovechar al máximo tu entrevista con el coach, recomendamos acumular al menos 1 semana de registros. Si tenés una urgencia, podés agendar de todos modos"*, manteniendo la flexibilidad pero guiando el valor de los datos. |
| **E12** | Sincronización Dual | En el prototipo interactivo, el evaluador simula un check-in de barrera en la Vista Alumno y de inmediato conmuta a la Vista Coach. | El estado global en memoria/almacenamiento local refleja inmediatamente la nueva barrera en el panel del coach, actualiza el semáforo de riesgo y recalcula los temas sugeridos para la reunión sin requerir recarga manual de página. |

---

## 9. Identificación de Vacíos, Ambigüedades y Reglas Tácitas Formalizadas

Al analizar minuciosamente el documento de 2 páginas frente a los requerimientos de ingeniería de software y ciencias del comportamiento, se identificaron varios vacíos y reglas tácitas que deben ser formalizadas para que el sistema funcione sólidamente:

### Vacío 1: ¿Qué constituye exactamente una "Versión Mínima"?
- **Ambigüedad en el Borrador:** Dice *"cuál será la versión mínima de cada sesión para los días difíciles"*, pero no define sus límites técnicos.
- **Formalización:**
  - La Versión Mínima debe diseñarse bajo el principio de **baja fricción cognitiva y física**:
    - Tiempo límite: Entre 12 y 25 minutos.
    - Cantidad de ejercicios: Máximo 2 a 3 movimientos compuestos (ej. Goblet Squat, Push-ups, Remo con mancuerna) o incluso variantes con peso corporal si no puede llegar al gimnasio físico.
    - Criterio de éxito: Terminarla otorga el 100% del valor de adherencia del día (el calendario la muestra verde/dorada, no como un "medio entrenamiento" frustrante).

### Vacío 2: La Taxonomía de Barreras no estaba formalizada
- **Ambigüedad en el Borrador:** Menciona solo dos ejemplos dispersos: *"si faltó tiempo"*, *"si hubo una interrupción"*, más los 5 problemas de la lista general.
- **Formalización:** Se estructura una taxonomía formal MECE (Mutuamente Excluyente y Colectivamente Exhaustiva) de 5 familias de barreras:
  1. **Barrera Temporal:** Falta de tiempo real, sobrecarga imprevista de trabajo, reuniones extendidas.
  2. **Barrera Biológica / Energética:** Agotamiento extremo, sueño deficiente, fatiga acumulada, molestias musculares agudas.
  3. **Barrera Emocional / Volitiva:** Carencia de ganas, apatía, desánimo, intimidación por el ambiente del gimnasio.
  4. **Barrera Logística / Contextual:** Viajes, mudanzas, mal clima, gimnasio cerrado, compromisos familiares o de pareja.
  5. **Barrera de Rigidez / Metodológica:** Rutina demasiado larga, sensación de no progresar, duda sobre la técnica de los ejercicios.

### Vacío 3: El ciclo de vida de la "Sesión Perdida" y la prevención del "Todo o Nada"
- **Ambigüedad en el Borrador:** Se menciona que *"interpretan una sesión perdida como un fracaso"* y que ante una interrupción se debe *"acordar el próximo paso de retorno"*, pero no se especifica cómo el software previene la culpa.
- **Formalización:**
  - El sistema prohíbe el uso de elementos visuales punitivos (cruces rojas grandes, alertas de fracaso, pérdida total de rachas estilo Duolingo).
  - Se formaliza el concepto de **"Racha Protegida / Racha Resiliente"**: si el usuario no entrena pero realiza su check-in honesto y acuerda la fecha de retorno, su racha de registro se mantiene activa. Lo único que rompe el sistema es el silencio/desaparición.

### Vacío 4: El mecanismo de verificación de intervenciones ("Comprobar si ayudó")
- **Ambigüedad en el Borrador:** La función 4 establece *"Comprobar si esa intervención ayudó"*, pero no indica el momento ni la escala de medición.
- **Formalización:**
  - En el siguiente check-in posterior a la aplicación de una intervención adaptativa, aparece un micro-diálogo: *"Ayer te sugerimos [reducir a 20 min / mover a hoy]. ¿Eso te ayudó a mantenerte en movimiento? [Sí, fue clave | Me sirvió a medias | No me sirvió]"*.
  - Esta métrica alimenta la tabla de **Efectividad de Intervenciones** en el panel del coach, permitiendo ver qué intervenciones tienen 90% de éxito y cuáles tienen baja adherencia para ese individuo.

### Vacío 5: La transición del rol del coach de 1-a-1 hacia SaaS
- **Ambigüedad en el Borrador:** El borrador está escrito en tono personal de un entrenador individual (*"junto conmigo"*, *"para que yo consulte"*).
- **Formalización:**
  - La arquitectura de base de datos y la interfaz de usuario deben parametrizar al actor:
    - En Fase 1: El rol Coach es la persona específica de la marca personal.
    - En Fase 2/3: El rol Coach es una entidad multi-tenant (cualquier entrenador certificado en Entrenhábitos o un agente de asistencia automatizado).

---

## 10. Matriz de Trazabilidad Fundacional

Para asegurar que ningún elemento del borrador quede desatendido, se establece la matriz de trazabilidad biunívoca:

| Concepto en el Borrador | Función del Borrador | Problema Frecuente | Funcionalidad Prioritaria | Feature del Sistema (F01-F18) | Componente en el Prototipo Web |
|-------------------------|----------------------|--------------------|---------------------------|-------------------------------|--------------------------------|
| Objetivos físicos realistas | F1: Proponer rutina física | P1: Objetivos demasiado exigentes | FP1: Evaluación inicial | F01, F02, F03 | Formulario de Onboarding + Generador de Perfil |
| Planes flexibles y viables | F1: Proponer rutina física | P2: Dependencia de motivación | FP2: Plan semanal realista | F03, F04 | Pantalla de Plan Semanal con toggle Ideal / Mínima |
| Detección de barreras | F2: Detectar barreras | P4: Desorganización ante cambios | FP3: Registro breve diario | F05, F06, F07 | Modal de Check-in rápido (<60s) con selector de barreras |
| Intervenciones adaptativas | F3: Proponer intervención | P3: Sesión perdida = fracaso | FP4: Recomendaciones adaptativas | F08, F09, F10 | Tarjeta interactiva de recomendación con botones de acción |
| Comprobar si ayudó | F4: Comprobar intervención | P5: Retomar sin sostener | FP4 & FP6: Recomendaciones e Informe | F11, F15 | Micro-pregunta de efectividad en check-in subsiguiente |
| Acompañamiento humano | F5: Entrevista personalizada | P5: Retomar sin sostener | FP5: Panel de seguimiento | F12, F13, F14 | Dashboard de Coach con lista de alumnos y puntos de charla |
| Consolidación y agenda | F5: Entrevista personalizada | P3 & P4: Fracaso y desorganización | FP6: Informe de progreso | F15, F16 | Vista de Informe con métricas de resiliencia y botón de cita |

---

## 11. Conclusión del Relevamiento

El documento `Borrador Marca Personal Entrenhábitos.pdf` contiene una visión extremadamente lúcida y coherente para un producto digital de alta retención. No adolece de exceso de funciones accesorias; por el contrario, su enfoque es quirúrgico: **cerrar la brecha de adherencia mediante un bucle cerrado de diagnóstico de barreras, prescripción adaptativa y rendición de cuentas humana.**

Los hallazgos catalogados en este documento proporcionan el cimiento indiscutible para que los agentes de Arquitectura, Requerimientos, Planificación y Desarrollo construyan el SRS, el Plan Director y el Prototipo Web Interactivo sin desvíos respecto a la visión fundacional.
