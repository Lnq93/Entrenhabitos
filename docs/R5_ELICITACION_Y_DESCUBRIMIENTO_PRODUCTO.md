# Guía Formal de Elicitación de Requerimientos y Matriz de Decisiones de Producto

**Proyecto:** Entrenhábitos — Ecosistema de Adherencia y Formación de Hábitos en el Gimnasio  
**Rol Autor:** Ingeniero en Requerimientos & Product Discovery Lead  
**Documento Base Analizado:** `Borrador Marca Personal Entrenhábitos.pdf`  
**Propósito:** Proveer el instrumento formal de entrevista de elicitación con el cliente/creador del método para resolver ambigüedades operativas, descubrir reglas de negocio implícitas y priorizar nuevas funcionalidades de alto impacto conductual.

---

## 1. Diagnóstico desde la Ingeniería de Requerimientos

Al analizar el documento fundacional `Borrador Marca Personal Entrenhábitos.pdf`, se observa que la **visión estratégica y el problema de negocio** están claramente definidos:
- **Promesa:** *«Descubrí qué te hace abandonar la rutina y construí un sistema para mantenerlo en tu vida»*.
- **5 Funciones centrales:** Proponer rutina según objetivos físicos, detectar barreras, proponer intervención según barrera, comprobar si ayudó y mantener entrevista personalizada.
- **5 Problemas frecuentes de abandono:** Objetivos demasiado exigentes, dependencia de ganas/energía, sesión perdida = fracaso, dificultad para reorganizarse ante cambios de rutina y ciclos de retomar sin sostener.
- **6 Funcionalidades prioritarias:** Evaluación inicial, Plan semanal realista (con versión mínima), Registro breve diario (~1 min), Recomendaciones adaptativas, Panel de seguimiento profesional e Informe de progreso con apertura de calendario.

Sin embargo, para pasar del borrador conceptual a un producto de software en producción, existen **definiciones operativas, casos borde y reglas de negocio implícitas** que deben relevarse mediante una **Entrevista Estructurada de Elicitación**.

---

## 2. Cuestionario de Elicitación para Entrevistar al Cliente (7 Bloques)

### Bloque 1: Modelo Operativo y Escalabilidad del Profesional (1-a-1 vs. Autónomo)
> **Referencia del borrador:** *«El usuario define, junto conmigo, cuántas veces entrenará...»* y *«Una vez hecho el diagnóstico y recogida la información se mantiene entrevista personalizada»*.

1. **Autonomía en el Alta (Onboarding bloqueante vs. no bloqueante):**
   - **Pregunta para el cliente:** ¿Un alumno nuevo que ingresa a la app puede completar el cuestionario inicial y empezar a entrenar ese mismo día con un plan sugerido automáticamente por el sistema, o el inicio queda bloqueado hasta tener primero una entrevista con vos para aprobar su plan?
   - **Impacto en requerimientos:** Define si el sistema necesita un generador autónomo de planes iniciales o un estado de *"Pendiente de validación por el Coach"*.

2. **Frecuencia y Disparadores de las Entrevistas 1-a-1:**
   - **Pregunta para el cliente:** Cuando tengas 30, 50 o 100 alumnos activos, ¿con qué frecuencia máxima puede agendar una entrevista cada alumno desde su Informe de Progreso? ¿El calendario se habilita fijo (ej. cada 15 o 30 días), se habilita solo cuando el sistema detecta que el alumno está en riesgo de abandono, o queda siempre abierto?
   - **Impacto en requerimientos:** Define las reglas de negocio del módulo de calendario (`RF-16`) para evitar saturar tu agenda personal.

3. **Proyección Multi-Entrenador (Marca Personal vs. Equipo):**
   - **Pregunta para el cliente:** ¿A mediano plazo vas a ser el único profesional mirando el Panel de Seguimiento, o pensás incorporar entrenadores adjuntos bajo tu marca *Entrenhábitos* (donde cada coach vea únicamente a sus alumnos asignados)?
   - **Impacto en requerimientos:** Determina si el modelo de permisos y base de datos debe ser multi-coach (*multi-tenant*) desde la primera versión en la nube.

---

### Bloque 2: Alcance de la "Rutina Física" frente al "Hábito de Adherencia"
> **Referencia del borrador:** *«1. Proponer una rutina en base a objetivos físicos»*.

4. **Nivel de granularidad biomecánica dentro de la aplicación:**
   - **Pregunta para el cliente:** Cuando el alumno ve su rutina del día en la app, ¿querés que funcione como un anotador técnico de gimnasio (cargar kilos de cada serie, repeticiones exactas, RIR, cronómetro de descanso entre series y videos de cada ejercicio), o preferís que muestre una estructura simple y limpia del día para no sobrecargarlo y que el foco sea **cumplir la asistencia y el hábito**?
   - **Impacto en requerimientos:** Construir un tracker de cargas serie por serie duplica la complejidad de pantalla y puede violar la regla de oro de *baja fricción (<1 minuto)* en alumnos principiantes o perfeccionistas.

5. **Origen de las rutinas físicas:**
   - **Pregunta para el cliente:** ¿Vos armás las rutinas desde cero para cada alumno, o manejás un catálogo de plantillas base (ej. 10-12 plantillas según objetivo y cantidad de días) que luego ajustás ligeramente?
   - **Impacto en requerimientos:** Define si el Panel Profesional necesita un **Constructor de Plantillas Duales (Ideal + Mínima)** reutilizables en 2 clics.

---

### Bloque 3: Reglas de Negocio del "Plan Semanal Realista" y la "Versión Mínima"
> **Referencia del borrador:** *«cuántas veces entrenará, cuándo y cuál será la versión mínima de cada sesión para los días difíciles. Resultado: un plan que contemple tanto la versión ideal como una alternativa viable»*.

6. **Definición válida de "Versión Mínima":**
   - **Pregunta para el cliente:** Para tu método, ¿la Versión Mínima exige ir físicamente al gimnasio (ej. estar 15-20 minutos haciendo solo 2 ejercicios principales), o también cuenta hacer una rutina de emergencia en la casa (ej. 15 minutos con peso corporal o bandas elásticas) cuando no llega con el tiempo para trasladarse al gym?
   - **Impacto en requerimientos:** Determina si cada día del Plan Dual debe tener **2 variantes** (*Ideal en Gym* vs. *Mínima en Gym*) o **3 variantes** (*Ideal en Gym*, *Mínima en Gym* y *Mínima en Casa sin traslado*).

7. **Umbral de alerta por uso crónico de la Versión Mínima:**
   - **Pregunta para el cliente:** Si un alumno se compromete a entrenar 4 días ideales de 60 minutos, pero durante 3 semanas seguidas hace **únicamente** la Versión Mínima de 15 minutos, ¿el sistema debe seguir computándolo como éxito total para no desmotivarlo, o debe avisarte a vos en el Panel Profesional para que le propongas bajar su plan ideal a algo más realista?
   - **Impacto en requerimientos:** Define la regla de transición entre refuerzo positivo al alumno y alerta de recalibración para el profesional.

8. **Flexibilidad de días dentro de la semana:**
   - **Pregunta para el cliente:** ¿Los entrenamientos están atados a días fijos del calendario (ej. Lunes, Miércoles y Viernes) o son una "bolsa semanal" (ej. *"3 sesiones por cumplir entre lunes y domingo"*)? Si son días fijos y el lunes no pudo ir, ¿el sistema le propone moverlo automáticamente al martes?

---

### Bloque 4: El Registro Breve Diario (< 1 minuto) y el "Abandono Silencioso"
> **Referencia del borrador:** *«El usuario indica si entrenó, qué ocurrió si no lo hizo y qué dificultad apareció. El registro debería poder completarse en aproximadamente un minuto»*.

9. **Frecuencia de solicitud del registro:**
   - **Pregunta para el cliente:** ¿El alumno debe hacer el check-in **todos los días de la semana** (los 7 días, incluyendo días de descanso) o **únicamente en los días en que tenía programado entrenar**?
   - **Impacto en requerimientos:** Pedir registro los días de descanso suele generar fatiga de notificaciones; pedirlo solo los días de entrenamiento reduce la fricción a 2-4 interacciones por semana.

10. **Momento exacto de la captura (Preventivo en caliente vs. Post-mortem):**
    - **Pregunta para el cliente:** Si un alumno entrena habitualmente a las 19:00 hs, pero a las 17:30 hs sale agotado del trabajo, ¿querés que el check-in ocurra **antes** de la hora de entrenar (para que la app le proponga la Versión Mínima a las 17:30 y salve ese mismo entrenamiento), o el registro es al final del día para contar qué pasó?
    - **Impacto en requerimientos:** Define si el flujo principal tiene **dos momentos**: un *Pre-Check de Energía/Tiempo* (preventivo) y un *Post-Check de Sesión* (registro final).

11. **Protocolo ante el "Abandono Silencioso" (Ghosting):**
    - **Pregunta para el cliente:** Cuando una persona deja de ir al gimnasio por culpa o desmotivación, casi siempre deja también de entrar a la app para no tener que confesar que faltó. Si un alumno pasa 48 o 72 horas sin registrar un día previsto, ¿cómo querés que actúe el sistema? ¿Le manda un mensaje empático de 1 solo clic, o te dispara una alerta a vos para que le escribas personalmente por WhatsApp?

---

### Bloque 5: El Motor de Recomendaciones Adaptativas y Validación de Efectividad
> **Referencia del borrador:** *«3. Proponer una intervención diferente según la barrera probable. 4. Comprobar si esa intervención ayudó»*.

12. **Criterio de éxito de una intervención ("¿Cómo sabemos que ayudó?"):**
    - **Pregunta para el cliente:** Para comprobar si una intervención ayudó (Función #4), ¿alcanza con preguntarle al alumno *"¿Te sirvió esta sugerencia? [Sí / No]"*, o para vos solo cuenta como exitosa si **en los siguientes 7 días el alumno efectivamente entrenó**?
    - **Impacto en requerimientos:** Permite combinar **validación subjetiva declarada** (feedback del usuario) con **validación conductual observada** (asistencia real en la sesión $t+1$).

13. **Escalado ante intervenciones fallidas:**
    - **Pregunta para el cliente:** Si un alumno registra 3 veces seguidas la barrera *"Falta de tiempo"*, el sistema le propone *"Hacer la rutina mínima de 20 min"* y las 3 veces igual termina sin entrenar, ¿qué debe hacer el motor a la tercera vez? ¿Cambiar de estrategia (ej. proponer cambiar el horario de entrenamiento a la mañana) o bloquear nuevas sugerencias automáticas y pedir una sesión 1-a-1 con vos?

14. **Personalización manual de reglas por el Profesional:**
    - **Pregunta para el cliente:** En la entrevista 1-a-1 con tu cliente descubrís algo muy puntual (ej. *"cuando se queda trabajando después de las 20 hs ya no va al gym, pero si entrena al mediodía cumple siempre"*). ¿Querés poder dejar asentado ese acuerdo personalizado en su perfil para que la app se lo recuerde específicamente a él?

---

### Bloque 6: Panel de Seguimiento Profesional e Informe de Progreso
> **Referencia del borrador:** *«5. Panel de seguimiento profesional: Una vista para que yo consulte los registros, las sesiones previstas y realizadas, las barreras repetidas y los cambios que conviene conversar... 6. Informe de progreso»*.

15. **Priorización visual en tu Panel Profesional:**
    - **Pregunta para el cliente:** Cuando abrís tu Panel de Seguimiento y tenés 40 clientes, ¿qué criterio define que un alumno esté arriba del todo en rojo? (Ej.: ¿2 entrenamientos perdidos seguidos? ¿5 días sin abrir la app? ¿Caída del cumplimiento por debajo del 50%?).

16. **Psicología del Informe de Progreso para el Alumno:**
    - **Pregunta para el cliente:** El Problema #3 de tu borrador dice que *"interpretan una sesión perdida como un fracaso"*. Si en el Informe de Progreso le mostramos un gráfico tradicional que dice *"Cumpliste 2 de 4 sesiones (50%)"*, puede sentirse frustrado. ¿Qué métricas querés destacar primero para reforzar que está construyendo el hábito (ej. *Semanas sin abandonar*, *Entrenamientos salvados con Versión Mínima*, *Tiempo de retorno tras una pausa*)?

---

### Bloque 7: Contexto Tecnológico, Canales e Integraciones
17. **Canal principal de interacción cotidiana:**
    - **Pregunta para el cliente:** Para tu público objetivo, ¿preferís que entren todos los días a una aplicación móvil/web (PWA), o te gustaría que en una futura fase el registro diario de 1 minuto también pueda responderse directamente desde un bot de **WhatsApp** integrado a tu panel?
18. **Integración con tu agenda actual:**
    - **Pregunta para el cliente:** Cuando el alumno abre el calendario en el Informe de Progreso para agendar la sesión con vos, ¿qué herramienta de calendario usás hoy en tu día a día (Google Calendar, Calendly, coordinación por WhatsApp)?

---

## 3. Matriz de Decisiones de Producto (Cómo impacta cada respuesta en el Sistema)

Esta matriz sirve durante la entrevista con el cliente para traducir inmediatamente sus respuestas en decisiones de arquitectura y diseño:

| Tema Elicitado | Opción A (Enfoque Ligero / MVP Rápido) | Opción B (Enfoque Avanzado / Fase 2-3) | Recomendación del Ingeniero en Requerimientos |
| :--- | :--- | :--- | :--- |
| **Detalle de la Rutina Física** | Vista de bloques claros (Ejercicios + Series sugeridas + Toggle *Ideal vs. Mínima* en 1 clic). | Tracker completo serie por serie con kilos, RIR, historial de PRs y videos. | **Opción A para el MVP.** Mantiene el foco en el diferencial de *Entrenhábitos* (la adherencia conductual) y cumple el check-in en $<45\text{s}$. |
| **Momento del Check-in** | Registro único del día (al terminar o al final de la jornada). | Doble toque: *Termómetro Pre-Entreno* (2h antes) + *Confirmación Post-Entreno*. | **Híbrido:** Permitir en la pantalla principal el botón **"🚨 Hoy tengo un día difícil"** antes de entrenar, además del check-in rápido de cierre. |
| **Comprobación de "¿Ayudó la intervención?"** | Pregunta directa de 1 clic (`👍 Sí` / `🤔 A medias` / `👎 No`). | Cruce automático entre la respuesta del alumno y si asistió o no a la sesión siguiente ($t+1$). | **Opción B (Implementada en el motor):** Ponderar tanto el feedback del alumno como su asistencia real en la sesión posterior. |
| **Agendamiento de Entrevista 1-a-1** | Solicitud de turno dentro de la app con pre-carga automática del resumen de telemetría. | Sincronización bidireccional con Google Calendar / Calendly + disparo automático ante Alerta Roja. | **Opción A en MVP** con enlace directo a calendario/WhatsApp en Fase 1 y API de Google Calendar en Fase 2. |

---

## 4. Seis Ideas Diferenciadoras de Producto Derivadas de la Elicitación

A partir del análisis de ingeniería de requerimientos sobre el borrador original, se proponen **6 innovaciones concretas** para potenciar el método **Entrenhábitos**:

### 1. El "Termómetro Pre-Entreno" (Intervención Preventiva en Caliente)
* **Por qué nace:** El borrador registra la barrera cuando el usuario ya no entrenó, pero la decisión real de faltar ocurre 1 o 2 horas antes de ir al gimnasio.
* **Funcionamiento:** Antes de la hora habitual de entrenamiento, el alumno puede tocar **"🚨 Hoy es un Día Difícil"**. Antes de que decida quedarse en su casa, la app transforma la sesión del día en su **Versión Mínima de 15-20 minutos** (en el gym o en casa) y le recuerda: *"Hoy 15 minutos valen el 100% de tu hábito"*.

### 2. El "Día Comodín Pre-Acordado" (Antídoto al Problema #4)
* **Por qué nace:** El Problema #4 del borrador señala que *"les cuesta reorganizarse cuando cambia su rutina"*. Reorganizar la agenda en medio de un día caótico exige demasiada energía mental.
* **Funcionamiento:** En la Evaluación Inicial, además de definir los días ideales (ej. Lunes, Miércoles, Viernes), el alumno deja predefinido su **Día/Hora Comodín** (ej. Sábado 10:00 AM). Si un miércoles surge una urgencia, con **1 solo botón** traslada la sesión al Día Comodín sin tener que pensar ni sentir que perdió la semana.

### 3. Trofeo de "Velocidad de Retorno ($MTTR$)" en vez de Rachas Punitivas (Antídoto a los Problemas #3 y #5)
* **Por qué nace:** Las rachas tradicionales (*"llevás 20 días seguidos"*) destruyen la motivación cuando el usuario pierde un día y vuelve a cero (*efecto todo o nada*).
* **Funcionamiento:** La métrica estrella del alumno pasa a ser su **Tiempo Medio de Retorno ($MTTR$)** y su **Tasa de Salvataje**. La app celebra explícitamente cuando el alumno falta un día pero retoma en la sesión siguiente: *"Antes una interrupción te sacaba 3 semanas del gimnasio; hoy volviste en 48 horas"*.

### 4. Selector de "Batería del Día" (Adaptación Automática de Volumen)
* **Por qué nace:** El Problema #2 indica que *"dependen de tener ganas o de sentirse con energía"*.
* **Funcionamiento:** En la vista de rutina del día, incluir un selector rápido de batería (`🔋 Alta` | `⚡ Media` | `🪫 Baja`):
  * `🔋 Alta`: Muestra la **Versión Ideal (50-60 min)**.
  * `⚡ Media`: Recorta series accesorias dejando una sesión de **35 min**.
  * `🪫 Baja`: Activa la **Versión Mínima Viable (15-20 min)** o la **Regla de los 2 Minutos** (ir solo a entrar en calor con permiso de volver).

### 5. "Acuerdos de Entrevista" Visibles en la App del Alumno (Conexión Función #5 $\leftrightarrow$ App)
* **Por qué nace:** El borrador destaca la entrevista personalizada con el profesional como pilar del método.
* **Funcionamiento:** Al terminar la sesión 1-a-1 con el cliente, el profesional escribe en su panel el **"Acuerdo de las próximas 2 semanas"** (ej. *"Por las próximas 2 semanas, los jueves solo hacemos la versión mínima de 20 min al salir de la oficina"*). Ese acuerdo aparece fijado arriba en la app del alumno con tu foto y firma profesional, reforzando el compromiso humano.

### 6. Botón de "Borrón y Cuenta Nueva Sin Culpa" (Protocolo Anti-Ghosting)
* **Por qué nace:** El Problema #5 indica que *"retoman repetidamente, pero no consiguen sostener la práctica"*.
* **Funcionamiento:** Si un alumno pasa más de 7 días sin registrar actividad, al abrir la app no ve alertas rojas ni entrenamientos "adeudados". Ve una pantalla limpia de bienvenida que activa la **Rampa de Retorno Progresivo** (1 semana al 60% de carga para evitar dolor muscular severo) y limpia cualquier sensación de deuda atrasada.
