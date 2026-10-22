# Handoff Report — Relevamiento de Especificación Entrenhábitos

**Agent:** `spec_miner_survey_1`  
**Conversation ID:** `4a1b9eb5-d5ab-4ae6-970b-fd9cb53ed2bd`  
**Recipient / Parent:** `af5f15d8-6c5b-4275-b663-c5dee5a2b77a` (orchestrator_1)  
**Date:** 2026-10-22  
**Handoff Type:** Hard (Task complete)

---

## 1. Observation
1. Se inspeccionó el archivo de requerimientos generales `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\ORIGINAL_REQUEST.md` (59 líneas), que exige:
   - R1: Análisis crítico del borrador, ideación de producto y diseño conductual.
   - R2: Ingeniería de requerimientos completa (SRS, actores, RF numerados >= 15, RNF >= 5, 8 Historias de Usuario `Dado/Cuando/Entonces`, diagramas Mermaid, motor de reglas).
   - R3: Dirección de proyecto y planteo general (WBS, 3 fases, riesgos >= 6, KPIs de adherencia).
   - R4: Prototipo web interactivo (Alumno + Panel Profesional) autocontenido y testeable.
   - Criterios de aceptación y matriz de trazabilidad explícita.
2. Se ejecutó la herramienta `view_file` sobre el documento fundacional autoritativo `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\Borrador Marca Personal Entrenhábitos.pdf` (105.068 bytes, 2 páginas), obteniendo OCR y texto íntegro:
   - *Página 1:*
     - Título: *"Marca Personal: Entrenhábitos. Una app para dejar de abandonar y favorecer la adherencia al gimnasio."*
     - Concepto de producto: *"Una aplicación de adherencia al entrenamiento en el gym que identifica las barreras de cada persona, aprende de sus patrones y le propone intervenciones personalizadas para ayudarla a entrenar con mayor regularidad y realizar una rutina determinada."*
     - Promesa: *«Descubrí qué te hace abandonar la rutina y construí un sistema para mantenerlo en tu vida».*
     - 5 Funciones:
       1. *"Proponer una rutina en base a objetivos físicos."*
       2. *"Detectar las barreras que hace que las personas no entrenen como quieren."*
       3. *"Proponer una intervención diferente según la barrera probable."*
       4. *"Comprobar si esa intervención ayudó."*
       5. *"Una vez hecho el diagnóstico y recogida la información se mantiene entrevista personalizada."*
     - 5 Problemas frecuentes de abandono:
       1. *"Empiezan con objetivos demasiado exigentes."*
       2. *"Dependen de tener ganas o de sentirse con energía."*
       3. *"Interpretan una sesión perdida como un fracaso."*
       4. *"Les cuesta reorganizarse cuando cambia su rutina."*
       5. *"Retoman repetidamente, pero no consiguen sostener la práctica."*
     - Funcionalidades prioritarias (1 a 3):
       1. Evaluación inicial (*"Cuestionario y entrevista breve..."* -> *"perfil inicial de adherencia revisado, con hipótesis de trabajo que luego se contrastan con la conducta real."*)
       2. Plan semanal realista (*"El usuario define, junto conmigo, cuántas veces entrenará, cuándo y cuál será la versión mínima de cada sesión para los días difíciles."* -> *"un plan que contemple tanto la versión ideal como una alternativa viable."*)
       3. Registro breve diario (*"El usuario indica si entrenó, qué ocurrió si no lo hizo y qué dificultad apareció. El registro debería poder completarse en aproximadamente un minuto."* -> *"datos sobre conducta real, no solo sobre intención o motivación declarada."*)
   - *Página 2:*
     - Funcionalidades prioritarias (4 a 6):
       4. Recomendaciones adaptativas (*"Un sistema inicial de reglas que propone una acción concreta según la barrera registrada. Ejemplo: si faltó tiempo, reducir la rutina o cambiar su horario; si hubo una interrupción, acordar el próximo paso de retorno."*)
       5. Panel de seguimiento profesional (*"Una vista para que yo consulte los registros, las sesiones previstas y realizadas, las barreras repetidas y los cambios que conviene conversar en el seguimiento."*)
       6. Informe de progreso (*"Un resumen de continuidad, frecuencia, interrupciones, tiempo hasta retomar y estrategias que parecen ayudar. Se registra información y se abre un calendario para tener una sesión con el cliente con los datos ya obtenidos."*)
3. Se generó el documento de especificación exhaustiva `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\spec_miner_survey_1\spec_analysis.md` (460 líneas), estructurando 18 features descubiertas (F01 a F18), 12 casos borde analizados (E01 a E12), la formalización de 5 vacíos/ambigüedades, y la matriz de trazabilidad biunívoca.

---

## 2. Logic Chain
1. **De la redacción en primera persona al modelo híbrido:** Frases como *"junto conmigo"*, *"para que yo consulte"*, *"entrevista personalizada"* y *"se abre un calendario para tener una sesión con el cliente"* demuestran que el sistema nace no como una app puramente B2C desatendida, sino como una herramienta operativa para un servicio de alto contacto y alto valor de marca personal (Coach + App).
2. **De los 5 problemas al diseño conductual:** 
   - El Problema 1 (objetivos hiper-exigentes) y el Problema 3 (sesión perdida = fracaso) revelan que la principal causa de deserción es la trampa cognitiva del "Todo o Nada".
   - Por ende, la "Versión Mínima / Día Difícil" (15-20 min) no es una característica opcional ni un detalle estético, sino la contramedida ontológica central del producto: redefine el éxito pasando de "completar 1 hora perfecta" a "mantener la identidad y no romper la cadena de presencia".
3. **Del bucle cibernético al motor de reglas:**
   - La correlación entre la Función 2 (detectar barreras), Función 3 (proponer intervención) y Función 4 (comprobar si ayudó) conforma un bucle cerrado de control (feedback loop).
   - Para que el software sea funcional, las barreras deben agruparse en una taxonomía estructurada (Tiempo, Energía, Emocional, Logística, Rigidez) y las intervenciones deben poseer métricas de efectividad medibles (`% éxito`), permitiendo al coach intervenir quirúrgicamente cuando las reglas automáticas fallen 2 o más veces.
4. **De la Vista Dual a la Arquitectura Técnica:**
   - Para cumplir con el requerimiento de experimentar el flujo tanto de Alumno como de Coach en un prototipo navegable, la arquitectura de datos debe ser compartida y reactiva: las acciones tomadas en la vista Alumno (check-in, barrera, aceptación de recomendación) deben alimentar de inmediato las vistas agregadas del Coach (semáforos, ratios, puntos de conversación para la entrevista).

---

## 3. Caveats
1. **Límites de personalización de la rutina biomecánica:** El borrador fundacional declara como Función 1 *"Proponer una rutina en base a objetivos físicos"*, pero aclara que el foco diferencial del producto es la **adherencia** y no la prescripción biomecánica avanzada o periodización para atletas de élite. Se asume que las rutinas base se componen de esquemas clásicos de fuerza/hipertrofia (Full-body o Torso/Pierna) con variantes mínimas estandarizadas de 2-3 ejercicios.
2. **Integración externa de calendario:** La función 6 estipula que *"se abre un calendario para tener una sesión con el cliente"*. En la Fase 1 / Prototipo se resuelve mediante un selector integrado y funcional de agenda con datos precargados; en fases comerciales se integrará con APIs tipo Calendly o Google Calendar.
3. **Privacidad y multi-tenancy:** En esta etapa se modela el rol del profesional asignado como coach titular; el modelo de datos contempla la clave foránea `coach_id` para garantizar que la transición a SaaS multi-coach no requiera refactorizaciones destructivas.

---

## 4. Conclusion
El relevamiento documental y la minería de especificación han concluido exitosamente.
El producto **Entrenhábitos** está exhaustivamente mapeado en sus 5 funciones, sus 5 problemas conductuales, sus 6 módulos prioritarios, sus 18 funcionalidades técnicas detalladas y sus 12 escenarios de borde. 

El artefacto `spec_analysis.md` proporciona la base conceptual, funcional y analítica definitiva para que los agentes `explorer_survey_1` y `explorer_survey_2`, así como el equipo de arquitectura y desarrollo, elaboren el SRS (R2), el Plan Director de Proyecto (R3), el Diseño Conductual (R1) y el Prototipo Web Interactivo (R4) con 100% de coherencia y rigor de trazabilidad.

---

## 5. Verification Method
Para verificar de manera independiente las afirmaciones y hallazgos de este reporte:
1. **Inspección de fuentes autoritativas:**
   - Ejecutar `view_file` en `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\Borrador Marca Personal Entrenhábitos.pdf` y contrastar las citas textuales de las secciones 1, 2 y 3.
   - Ejecutar `view_file` en `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\ORIGINAL_REQUEST.md` y comprobar que todos los requerimientos R1-R4 y criterios de aceptación están contemplados en la matriz.
2. **Inspección del informe generado:**
   - Inspeccionar el archivo `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\spec_miner_survey_1\spec_analysis.md`.
   - Verificar la presencia de las tablas `## Features Discovered` (F01 a F18), `## Edge Cases` (E01 a E12), la formalización de vacíos y la Matriz de Trazabilidad.
3. **Condición de Invalidación:**
   - Este relevamiento se consideraría invalidado únicamente si se demostrara que se omitió alguna función, problema o prioridad explícita del PDF fundacional, o si se contradijera la naturaleza híbrida 1-a-1 hacia SaaS exigida en el requerimiento del usuario.
