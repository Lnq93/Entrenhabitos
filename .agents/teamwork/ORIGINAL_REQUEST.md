# Original User Request

## 2026-10-22T02:36:48Z

Analizar el documento fundacional `Borrador Marca Personal Entrenhábitos.pdf` desde los roles de **Director de Proyecto**, **Ingeniero en Requerimientos** y **Estratega de Producto / Especialista en Cambio de Hábitos**, para producir tanto el paquete completo de documentación estratégica y técnica como un **prototipo web interactivo (MVP navegable)** de la aplicación **Entrenhábitos** (enfocada inicialmente en el acompañamiento híbrido 1-a-1 de marca personal para adherencia al gimnasio, con arquitectura preparada para escalar a modelo SaaS/B2C).

Working directory: c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS
Integrity mode: development

Reference material: `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\Borrador Marca Personal Entrenhábitos.pdf`

## Requirements

### R1. Análisis Crítico del Borrador, Ideación de Producto y Diseño Conductual
Analizar a fondo el documento `Borrador Marca Personal Entrenhábitos.pdf` (concepto, promesa, las 5 funciones, los 5 problemas frecuentes de abandono y las 6 funcionalidades prioritarias) y elaborar un documento de visión e innovación de producto que:
- Evalúe fortalezas, brechas y oportunidades del planteo actual frente a marcos probados de formación de hábitos y adherencia (ej. Fogg Behavior Model, Hábitos Atómicos, Teoría de la Autodeterminación, prevención del efecto "todo o nada").
- Proponga ideas concretas y diferenciadoras para resolver los 5 problemas de abandono (objetivos hiper-exigentes, dependencia de la motivación/energía, sesión perdida = fracaso, desorganización ante cambios de rutina, ciclos de retomar y abandonar).
- Diseñe el catálogo estructurado de **barreras de adherencia** y su matriz de **intervenciones adaptativas** (reglas de diagnóstico, acciones propuestas como "versión mínima viable / rutina de emergencia para días difíciles", protocolos de retorno rápido tras interrupción y validación de efectividad de cada intervención).

### R2. Ingeniería de Requerimientos Completa (SRS y Modelado Funcional)
Elaborar la especificación formal de ingeniería de requerimientos para el ecosistema **Entrenhábitos** (vista **Alumno/Entrenado** y vista **Profesional/Coach**), incluyendo:
- Identificación de actores, perfiles de adherencia iniciales e hipótesis de trabajo contrastables con la conducta real.
- Requerimientos Funcionales (RF) detallados y numerados que cubran e integren las 6 funcionalidades prioritarias del borrador: (1) Evaluación inicial, (2) Plan semanal realista (versión ideal + versión mínima para días difíciles), (3) Registro breve diario (<1 minuto), (4) Recomendaciones adaptativas basadas en reglas, (5) Panel de seguimiento profesional, y (6) Informe de progreso con agendamiento de sesión 1-a-1.
- Requerimientos No Funcionales (RNF) clave (usabilidad y fricción <60s en el check-in diario, privacidad de datos, escalabilidad de marca personal 1-a-1 hacia plataforma multi-coach/SaaS).
- Historias de Usuario con criterios de aceptación formales (`Dado / Cuando / Entonces`), diagramas Mermaid de arquitectura/flujo de datos y especificación lógica del motor de reglas adaptativas.

### R3. Dirección de Proyecto y Planteo General (Project Management & Roadmap)
Elaborar el plan director del proyecto asumiendo el rol de Project Manager:
- Planteo general del proyecto y estrategia de producto por fases: **Fase 1 (MVP Marca Personal 1-a-1)**, **Fase 2 (Automatización avanzada y retención)** y **Fase 3 (Escalabilidad SaaS / B2C)**.
- Estructura de Desglose de Trabajo (WBS), hitos, entregables y cronograma estimado.
- Matriz de riesgos del proyecto (técnicos, de negocio y de abandono de la propia app por fatiga de registro) con planes de mitigación accionables.
- Sistema de métricas y KPIs de éxito (tanto métricas clínicas/conductuales de adherencia —frecuencia, tiempo medio de retorno tras interrupción, tasa de uso de versión mínima, efectividad por tipo de barrera— como métricas de producto y negocio).

### R4. Prototipo Web Interactivo (MVP Navegable Alumno + Panel Profesional)
Construir dentro del directorio de trabajo un prototipo web interactivo, funcional y autocontenido que permita experimentar en vivo el flujo completo de **Entrenhábitos** tanto desde la perspectiva del **Alumno/Entrenado** como desde el **Panel de Seguimiento Profesional**:
- **Vista Alumno**:
  1. Onboarding / Evaluación inicial interactiva que genera un perfil inicial de adherencia con hipótesis de barreras principales.
  2. Visualización y configuración del **Plan Semanal Realista**, mostrando claramente para cada sesión su **Versión Ideal** y su **Versión Mínima ("Día Difícil")**.
  3. **Registro Breve Diario (<1 min)**: flujo rápido para registrar si entrenó (ideal o versión mínima) o no entrenó, qué barrera apareció (falta de tiempo, baja energía, cambio de rutina, desmotivación, etc.) y nivel de dificultad.
  4. **Motor de Recomendaciones Adaptativas en vivo**: ante una barrera registrada o sesión perdida, el sistema ejecuta las reglas y propone en pantalla una intervención concreta (ej. activar versión mínima de 20 min, reprogramar día, o acordar el próximo paso de retorno sin culpa) y permite evaluar si la intervención ayudó.
  5. **Informe de Progreso del Alumno**: métricas visuales de continuidad, tiempo hasta retomar, estrategias efectivas y botón/flujo integrado para agendar la sesión 1-a-1 con el profesional con los datos ya precargados.
- **Vista Panel de Seguimiento Profesional (Coach)**:
  1. Dashboard con listado de asesorados, alertas de riesgo de abandono, comparativa entre sesiones previstas vs. realizadas (ideales vs. mínimas), barreras repetidas detectadas, efectividad de intervenciones y puntos sugeridos para conversar en la entrevista personalizada.

## Acceptance Criteria

### Trazabilidad e Integridad Documental
- [ ] Existen en `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS` los documentos estructurados en español que cubren R1 (Análisis e Ideación Conductual), R2 (Ingeniería de Requerimientos / SRS) y R3 (Dirección de Proyecto y Planteo General), además de un `README.md` índice general del proyecto.
- [ ] Los 5 problemas frecuentes y las 6 funcionalidades prioritarias de `Borrador Marca Personal Entrenhábitos.pdf` están explícitamente trazados en una matriz de trazabilidad (Problema del Borrador → Funcionalidad → Requerimiento Funcional → Regla/Componente en el Prototipo).

### Rigor en Ingeniería de Requerimientos y Dirección de Proyecto
- [ ] El documento de requerimientos incluye al menos 15 Requerimientos Funcionales (RF) numerados, 5 Requerimientos No Funcionales (RNF), 8 Historias de Usuario con criterios `Dado/Cuando/Entonces`, diagramas Mermaid válidos y una tabla completa de reglas de decisión del motor adaptativo (Barrera detectada + Patrón histórico → Intervención propuesta → Métrica de comprobación).
- [ ] El plan de dirección de proyecto incluye WBS, roadmap en 3 fases (empezando por Marca Personal 1-a-1 y escalando a SaaS/B2C), matriz de al menos 6 riesgos con impacto/probabilidad/mitigación y cuadro de mando de KPIs de adherencia.

### Verificación Programática y Funcional del Prototipo Web (R4)
- [ ] El prototipo web interactivo puede abrirse o ejecutarse localmente sin errores de consola ni dependencias rotas, e incluye datos de demostración realistas precargados (varios perfiles de alumnos con distintos patrones de adherencia y barreras) para poder probar todas las vistas de inmediato.
- [ ] La interfaz permite alternar entre la **Vista Alumno** y la **Vista Panel Profesional**, y los cambios realizados en la Vista Alumno (completar evaluación inicial, registrar un entrenamiento ideal/mínimo o reportar una barrera, recibir y valorar una recomendación adaptativa, solicitar sesión en el calendario) actualizan dinámicamente el estado y se reflejan en el Panel Profesional y en el Informe de Progreso.
- [ ] Un script o prueba automatizada verifica programáticamente que todos los flujos requeridos (evaluación inicial, plan dual ideal/mínimo, check-in rápido con disparo de regla adaptativa según barrera, informe de progreso con agendamiento y panel profesional) existen y funcionan sin errores.
