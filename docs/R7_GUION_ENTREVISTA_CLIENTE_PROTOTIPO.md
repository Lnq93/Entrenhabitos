# R7 — Guion de Entrevista con el Cliente y Validación del Prototipo Móvil Dual (v2.2)

**Proyecto:** Entrenhábitos — Plataforma de Adherencia y Formación de Hábitos en el Gimnasio  
**Cliente / Especialista:** Lic. Mariano David Cáceres ([@entrenhabitos](https://www.instagram.com/entrenhabitos/) — *Neuropsicólogo & Personal Trainer*)  
**Rol del Entrevistador:** Ingeniero en Requerimientos & Product Lead  
**Insumos Cruzados:**
1. Documento fundacional: `Borrador Marca Personal Entrenhábitos.pdf`
2. Identidad profesional y propuesta comercial activa en Instagram: `https://www.instagram.com/entrenhabitos/`
3. Prototipo Móvil Interactivo Dual (`v2.2.0` — Web + Android APK `com.entrenhabitos.app` con `🏋️‍♂️ Vista Cliente` y `📋 Vista Coach Móvil`)

---

## 1. Síntesis del Perfil Real del Cliente (`@entrenhabitos`) y Triangulación con el Borrador

El análisis del ecosistema digital del cliente (**Lic. Mariano David Cáceres**, +8.600 seguidores, +310 publicaciones) permite conectar su **Borrador Original** con su práctica profesional real:

### 1.1. Diferencial Clínico-Deportivo: Neuropsicología + Entrenamiento
- **Enfoque:** Mariano combina **Neuropsicología** con **Entrenamiento Personal**. Su lema (*«Ayudo a las personas a comenzar, sostener y mejorar su actividad física»*) y sus contenidos (*«Desconfía de las recetas universales»*, *«Charla sobre gestión del estrés académico/laboral sin explotar»*) confirman que el corazón de su método no es el conteo mecánico de repeticiones, sino la **autorregulación ejecutiva, la gestión de la fricción cognitiva y la flexibilidad conductual**.
- **Traducción en el Prototipo:** Este hallazgo valida por qué el vocabulario del prototipo (*Hipótesis Diagnóstica de Trabajo*, *Arquetipo Conductual*, *Fricción Percibida*, *Batería de Energía*, *Tasa de Salvataje por Versión Mínima* y *Tiempo Medio de Retorno — MTTR*) encaja directamente con su marco teórico profesional.

### 1.2. Cruce entre sus 5 Entregables Actuales ("Asesorías Online 1 a 1") y el Prototipo `v2.2`

En su publicación fijada de **Asesorías Online Personalizadas 1 a 1**, Mariano ofrece actualmente 5 entregables que hoy suelen gestionarse de forma fragmentada (WhatsApp, PDFs, llamadas) y que la app unifica:

| Entregable actual en `@entrenhabitos` (IG) | Estado actual en el Prototipo `v2.2.0` | Punto clave a validar en la entrevista |
| :--- | :--- | :--- |
| **1. Plan de entrenamiento** | Cubierto en la pestaña **`📅 Plan Dual`** (*Versión Ideal 60m* vs. *Versión Mínima 15-20m* con morphing interactivo). | Definir nivel de granularidad técnica (¿bloques limpios vs. registro de kilos/RIR y videos de ejercicios?). |
| **2. Guía de organización del tiempo** | Cubierto reactivamente mediante el **Escudo de 18 min** ante la barrera *Falta de Tiempo (`B1_TIME`)*. | Validar si desea incorporar un bloque preventivo de **"Anclaje Horario / Intención de Implementación"** (Día + Hora + Gatillo cotidiano). |
| **3. Construcción de nuevos hábitos saludables** *(menciona dieta y entrenamiento)* | Enfocado 100% en adherencia al entrenamiento de gimnasio (según el borrador). | Definir si el MVP se mantiene exclusivo en gimnasio o si suma 1-2 micro-hábitos satélite (sueño, hidratación, nutrición flexible). |
| **4. Estrategias para superar obstáculos mentales** | Cubierto en el **Motor de Recomendaciones Adaptativas (`INT-01` a `INT-07`)** y protocolo *Never Miss Twice*. | Validar sus reglas clínicas propias y cómo personaliza la estrategia para cada alumno tras la sesión 1-a-1. |
| **5. Material escrito y audiovisual de soporte** | Actualmente las intervenciones muestran prescripción escrita accionable. | **Oportunidad de alto valor:** Integrar cápsulas de audio/video de 45s grabadas por Mariano dentro de cada recomendación adaptativa. |

---

## 2. Dinámica Recomendada para la Entrevista (Demostración Guiada en Celular)

Dado que el prototipo `v2.2.0` corre de forma nativa en celular (APK Android y Web Móvil) con el **Switch Superior Persistente (`🏋️‍♂️ Vista Cliente` | `📋 Vista Coach 🔴 1` | `🎭 Demo`)**, se recomienda estructurar la entrevista en **3 etapas prácticas** con el teléfono en mano:

1. **Etapa 1 (15 min):** Recorrer juntos las **5 pestañas de la `🏋️‍♂️ Vista Cliente`** simulando el viaje de un alumno (*Martín Rossi* o *Sofía Pereira*).
2. **Etapa 2 (15 min):** Tocar el switch superior hacia **`📋 Vista Coach`** y recorrer las **4 pestañas móviles del Entrenador** (*Semáforo, Ficha 360°, Guion 1-a-1 y Turnos*), probando las intervenciones en vivo `Coach → Cliente`.
3. **Etapa 3 (10 min):** Definir prioridades de personalización, identidad visual y alcance del MVP.

---

## 3. Cuestionario Estructurado Pantalla por Pantalla

### Bloque A: Preguntas sobre la `🏋️‍♂️ Vista Cliente` (Experiencia del Alumno)

#### Pantalla 1: `Diagnóstico` (Evaluación Inicial Paso a Paso e Hipótesis de Trabajo)
> **Referencia en el Borrador:** *«1. Evaluación inicial: Cuestionario y entrevista breve para conocer historial de actividad, objetivos, intentos anteriores, situaciones de abandono, barreras percibidas y contexto cotidiano. Resultado: un perfil inicial de adherencia revisado, con hipótesis de trabajo que luego se contrastan con la conducta real»*.

1. **Preguntas clínicas de su anamnesis real:**
   - *Pregunta:* «Mariano, en el prototipo implementamos un cuestionario paso a paso de 5 preguntas que detecta automáticamente un perfil conductual y redacta una *Hipótesis de Trabajo*. En tu consulta real como neuropsicólogo y entrenador, ¿cuáles son las preguntas exactas que sí o sí les hacés a tus alumnos nuevos antes de armarles el plan?»
2. **Integración de objetivos físicos y técnicos (Función #1 del Borrador):**
   - *Pregunta:* «La primera función que anotaste en tu borrador es *"Proponer una rutina en base a objetivos físicos"*. ¿Querés que este cuestionario inicial incluya también preguntas sobre su objetivo físico (fuerza, salud, estética), lesiones y equipamiento disponible, o esa parte preferís relevarla vos directamente en la primera entrevista 1-a-1?»
3. **Sus arquetipos reales de abandono:**
   - *Pregunta:* «Nosotros configuramos 4 perfiles base (*Perfeccionista / Todo o Nada*, *Fatiga Cognitiva*, *Horarios Caóticos* y *Reiniciador Cíclico*). ¿Sentís que estos 4 perfiles representan bien a tus clientes actuales de `@entrenhabitos`, o cambiarías/agregarías alguno con tu propia terminología?»
4. **Autonomía del diagnóstico inicial:**
   - *Pregunta:* «Cuando el alumno termina las preguntas y ve su *Hipótesis Diagnóstica*, ¿querés que el alumno ya la vea en pantalla como un "insight" motivador inmediato, o preferís que la hipótesis neuropsicológica quede visible primero solo en tu `Vista Coach` hasta que tengas la entrevista con él?»

---

#### Pantalla 2: `Plan Dual` (Versión Ideal vs. Versión Mínima para Días Difíciles)
> **Referencia en el Borrador:** *«2. Plan semanal realista: El usuario define, junto conmigo, cuántas veces entrenará, cuándo y cuál será la versión mínima de cada sesión para los días difíciles. Resultado: un plan que contemple tanto la versión ideal como una alternativa viable»*.

5. **Profundidad del registro físico vs. simplicidad conductual:**
   - *Pregunta:* «Fijate cómo en la pestaña `Plan Dual` el alumno puede tocar un botón para alternar entre su **Versión Ideal (60 min)** y su **Versión Mínima (15-20 min)**. Para ver los ejercicios del día, ¿buscás una vista limpia y rápida como esta para no abrumarlo, o necesitás que anote los kilos, repeticiones hechas en cada serie y vea un video corto de cómo se hace el ejercicio?»
6. **Conexión con su "Guía de organización del tiempo" (Instagram):**
   - *Pregunta:* «En tu Instagram destacás que les enseñás a **gestionar y organizar su tiempo**. ¿Te gustaría que cada día del Plan Semanal tenga asignado un bloque horario acordado con vos (ej. *"Martes 18:30 hs — al salir de la oficina"*) y un "Día Comodín" predefinido por si ese día se le complica?»
7. **Alcance de la Versión Mínima (Gimnasio vs. Casa):**
   - *Pregunta:* «Cuando un alumno tiene un día caótico y activa su *Versión Mínima*, ¿para tu método esa versión mínima significa ir igual al gimnasio pero hacer solo 15-20 minutos clave, o también les dejás armada una variante de 15 minutos en su casa sin elementos para que no pierdan el hábito si no llegan a ir al gym?»

---

#### Pantalla 3: `Check-in (<1 min)` (Registro Diario de Conducta Real, Fricción y Energía)
> **Referencia en el Borrador:** *«3. Registro breve diario: El usuario indica si entrenó, qué ocurrió si no lo hizo y qué dificultad apareció. El registro debería poder completarse en aproximadamente un minuto. Resultado: datos sobre conducta real, no solo sobre intención o motivación declarada»*.

8. **Momento ideal de uso (En caliente antes de faltar vs. Al final del día):**
   - *Pregunta:* «En el prototipo pusimos tanto el botón rápido **`🛡️ Escudo 18m`** arriba del todo como el formulario de `Check-in` con bloques táctiles de **Dificultad (1-5)** y **Batería de Energía (1-5)**. ¿Cómo te imaginás el hábito de uso ideal de tu alumno: que abra la app a las 18:00 hs cuando se siente cansado *antes* de decidir faltar (para que la app lo rescate en el momento), o que registre a la noche cómo le fue en el día?»
9. **El factor Estrés (Tema central de sus charlas en `@entrenhabitos`):**
   - *Pregunta:* «Vimos tu charla sobre *gestión del estrés académico y laboral*. Además de la *Batería de Energía* y la *Dificultad para arrancar*, ¿te sirve que estas sean las dos escalas del check-in diario, o cambiarías alguna por *Nivel de Estrés Mental del Día*?»
10. **Frecuencia de los check-ins:**
    - *Pregunta:* «Si el alumno acordó con vos entrenar 3 veces por semana (ej. Lunes, Miércoles y Viernes), ¿el check-in se le pide únicamente esos 3 días, o también querés algún registro breve los días de descanso?»

---

#### Pantalla 4: `Adaptativo` (Motor de Reglas + Validación "¿Ayudó?")
> **Referencia en el Borrador:** *«3. Proponer una intervención diferente según la barrera probable. 4. Comprobar si esa intervención ayudó»*.

11. **Incorporación de su "Material Escrito y Audiovisual de Soporte":**
    - *Pregunta:* «Mirá lo que pasa cuando el alumno marca que le faltó tiempo o que faltó y siente culpa: el sistema lo lleva a la pestaña `Adaptativo` con una prescripción inmediata. En tu Instagram ofrecés **material escrito y audiovisual para superar obstáculos mentales**. ¿Qué te parecería si en cada una de estas recomendaciones pudieras incrustar un **audio o video corto tuyo de 45 segundos** hablándole directamente al alumno según la barrera que acaba de sufrir?»
12. **Doble validación de efectividad ("¿Cómo comprobamos que ayudó?"):**
    - *Pregunta:* «Abajo de la sugerencia pusimos los 3 botones (`👍 Sí, me sirvió`, `🤔 A medias`, `👎 No me sirvió`). Además de lo que el alumno responda ahí, ¿para vos una intervención se confirma como exitosa recién cuando comprobamos que en la sesión siguiente volvió a entrenar?»
13. **Límite de reglas automáticas vs. derivación a entrevista con vos:**
    - *Pregunta:* «Si a un alumno le salta 2 o 3 veces seguidas la misma barrera y las recomendaciones automáticas de la app no logran destrabarlo, ¿la app debe sugerirle automáticamente agendar una sesión 1-a-1 de emergencia con vos?»

---

#### Pantalla 5: `Progreso` (Informe de Continuidad y Apertura de Calendario)
> **Referencia en el Borrador:** *«6. Informe de progreso: Un resumen de continuidad, frecuencia, interrupciones, tiempo hasta retomar y estrategias que parecen ayudar. Se registra información y se abre un calendario para tener una sesión con el cliente con los datos ya obtenidos»*.

14. **Validación del Anillo Dual y la Huella de Continuidad:**
    - *Pregunta:* «Para combatir el pensamiento *"todo o nada"*, diseñamos el **Anillo Dual de Hábito** (donde las sesiones mínimas suman al cumplimiento total y se destacan como entrenamientos salvados) y la **Huella de Continuidad** junto con el **Tiempo Medio de Retorno (MTTR)**. ¿Qué te parecen estos indicadores para que el alumno vea su progreso sin frustrarse?»

---

### Bloque B: Preguntas sobre la `📋 Vista Coach Móvil` (Su Herramienta Profesional en el Celular)

> **Referencia en el Borrador:** *«5. Panel de seguimiento profesional: Una vista para que yo consulte los registros, las sesiones previstas y realizadas, las barreras repetidas y los cambios que conviene conversar en el seguimiento»*.

#### Pestaña Coach 1: `🚨 Semáforo` (Priorización de Alumnos en el Celular)
15. **Regla exacta de su Semáforo de Riesgo:**
    - *Pregunta:* «Al pasar a `📋 Vista Coach` en el celular, lo primero que ves es la lista de tus alumnos ordenada por urgencia (`🔴 Crítico`, `🟡 Atención`, `🟢 Óptimo`). En tu seguimiento real, ¿qué hace que un alumno pase a estado crítico para vos: faltar 2 veces seguidas, pasar varios días sin dar señales de vida (*ghosting*), o reportar desmotivación alta?»

#### Pestaña Coach 2: `👤 Ficha 360° & Intervenciones en Vivo`
16. **Validación de las "Recetas en 1 Toque" (`Coach → Cliente`):**
    - *Pregunta:* «En la `Ficha 360°` agregamos 3 botones de acción rápida para que desde tu celular puedas intervenir en vivo sobre la app del alumno:
      1. **📲 Enviar Mensaje Empático de Rescate** (notificación Push sin culpa).
      2. **🛡️ Recetar "Semana de Descarga" (Modo Mínimo)** (pasa automáticamente las tarjetas del alumno a Versión Mínima por esa semana).
      3. **🎯 Calibrar Piso a 2 Días Blindados / Semana**.
      ¿Qué otras "intervenciones o ajustes de entrenador" hacés vos habitualmente cuando hablás con tus alumnos que te gustaría tener acá en un botón?»

#### Pestaña Coach 3: `🎯 Guion 1-a-1` (Preparación y Registro de la Entrevista)
17. **Flujo durante la entrevista personalizada:**
    - *Pregunta:* «En la pestaña `Guion 1-a-1` el sistema lee las barreras repetidas del alumno y te prepara una lista de puntos sugeridos con casillas verificables (*checkboxes*) y un campo abajo para guardar el **Acuerdo de la entrevista**. Cuando guardás ese acuerdo, ¿querés que le aparezca fijado en la pantalla principal al alumno como su compromiso de la quincena?»

#### Pestaña Coach 4: `📅 Turnos & Alertas`
18. **Frecuencia y logística de las sesiones 1-a-1:**
    - *Pregunta:* «¿Con qué frecuencia tenés estas sesiones 1-a-1 con cada asesorado (semanal, quincenal, mensual) y por qué canal las realizás hoy (videollamada de Meet/Zoom, llamada de WhatsApp, presencial)? ¿Querés que el calendario de la app gestione tus horarios disponibles o que se conecte con Google Calendar / WhatsApp?»

---

### Bloque C: Identidad Visual, Escalabilidad y Modelo de Negocio

19. **Estética y Colores de Marca (`Athletic Lime` vs. `Azul Cobalto @entrenhabitos`):**
    - *Pregunta:* «En tu perfil de Instagram `@entrenhabitos` usás como colores insignia el **Azul Cobalto/Real vibrante** combinado con blanco y detalles en **Amarillo Dorado (`💛 🌟`)**. En el prototipo actual usamos un modo oscuro deportivo con **Verde Lima y Ámbar**. ¿Te gusta este estilo oscuro deportivo para la app, o preferís que adaptemos la paleta a los tonos Azul Cobalto y Dorado de tu Instagram?»
20. **Escalabilidad de sus +8.600 seguidores (1-a-1 vs. Membresía Autogestionada):**
    - *Pregunta:* «Hoy tenés más de 8.600 seguidores en Instagram, pero el tiempo para dar asesorías 1-a-1 con entrevistas personalizadas es limitado. ¿Pensás esta app exclusivamente para tus clientes de **Asesoría 1-a-1 personalizada**, o también te gustaría ofrecer un **plan de suscripción autogestionado** para que cientos de seguidores puedan usar tu sistema de hábitos y tu motor adaptativo aunque no tengan llamada 1-a-1 con vos?»

---

## 4. Cinco Propuestas de Valor Específicas para Sorprender al Cliente en la Reunión

1. **🎧 Cápsulas de "Neuro-Rescate" en Audio/Video de 45s (Sello Lic. Mariano Cáceres):**
   - Permitir que cada intervención del motor adaptativo (`INT-01` a `INT-07`) incluya un reproductor nativo con un audio o video vertical de 45 segundos de Mariano explicando el "porqué neuropsicológico" de la intervención en el momento exacto en que el alumno sufre la barrera.
2. **⏰ Módulo de "Intención de Implementación y Gestión del Tiempo" en el Plan Dual:**
   - Añadir en cada día de entrenamiento la fórmula conductual de Gollwitzer: *"Voy a entrenar el [Día] a las [Hora] inmediatamente después de [Evento ancla cotidiana]"*, integrando su pilar de *Guía de organización del tiempo* que promociona en Instagram.
3. **🧠 Botón de "Modo Época de Exámenes / Pico de Estrés Laboral":**
   - Alineado con sus charlas de gestión del estrés, permitir activar un protocolo preventivo de 7 a 14 días donde la app protege el hábito con sesiones de descarga de 15 minutos sin exigir récords de carga.
4. **📌 Tarjeta de "Acuerdo Quincenal con Mariano" Fijada en la App del Alumno:**
   - Que el acuerdo escrito por Mariano en la pestaña `🎯 Guion 1-a-1` del Coach se sincronice y quede visible en el tope del teléfono del alumno con el avatar y firma del Lic. Mariano Cáceres.
5. **🎨 Selector de Tema de Marca (`Entrenhábitos Cobalt & Gold` / `Dark Athletic`):**
   - Incorporar la paleta oficial de su Instagram (`#2563EB` Azul Cobalto + `#FACC15` Dorado Hábito) para que sienta la aplicación 100% propia desde el primer vistazo.
