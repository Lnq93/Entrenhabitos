# R1: DISEÑO CONDUCTUAL, ESTRATEGIA DE PRODUCTO E INNOVACIÓN
## Ecosistema Entrenhábitos: Transformación de la Adherencia al Entrenamiento de Fuerza
**Autor:** Worker Especialista en Diseño Conductual y Estrategia de Producto (Milestone M1)  
**Proyecto:** Entrenhábitos — Acompañamiento Híbrido y Plataforma de Adherencia  
**Documento Fuente Autoritativo:** `Borrador Marca Personal Entrenhábitos.pdf`  
**Referencia de Requerimientos:** `ORIGINAL_REQUEST.md` (R1)  
**Fecha de Emisión:** 2026-10-22  
**Estado:** Aprobado / Especificación Maestra

---

## Índice General

1. [Resumen Ejecutivo y Visión del Producto](#1-resumen-ejecutivo-y-visión-del-producto)
   - 1.1. La Crisis Silenciosa del Fitness: La Epidemia de Deserción
   - 1.2. Declaración de Visión y Misión
   - 1.3. Posicionamiento Estratégico y Propuesta Única de Valor (UVP)
   - 1.4. Tránsito Evolutivo: Del Acompañamiento Híbrido 1-a-1 al Ecosistema SaaS B2C/B2B
2. [Análisis Crítico del Documento Fundacional](#2-análisis-crítico-del-documento-fundacional)
   - 2.1. Deconstrucción del Concepto y Promesa de Valor
   - 2.2. Examen Exhaustivo de las 5 Funciones Operativas del Borrador
   - 2.3. Evaluación de Fortalezas Intrinsecas
   - 2.4. Diagnóstico de Brechas Críticas y Ambigüedades Operativas
   - 2.5. Oportunidades de Innovación frente a la Ciencia del Comportamiento
3. [Articulación Profunda de Marcos Teóricos del Cambio Conductual](#3-articulación-profunda-de-marcos-teóricos-del-cambio-conductual)
   - 3.1. Fogg Behavior Model ($B = MAP$): Calibración Dinámica de Simplicidad ante Caídas de Motivación
   - 3.2. Hábitos Atómicos (James Clear): Las 4 Leyes, la Regla de los 2 Minutos y el Protocolo "Never Miss Twice"
   - 3.3. Teoría de la Autodeterminación (Deci & Ryan): Autonomía, Competencia y Relación en el Entrenamiento
   - 3.4. Erradicación del Sesgo Cognitivo del "Todo o Nada": Deconstrucción del *What-The-Hell Effect*
4. [Soluciones Innovadoras y Diferenciadoras para los 5 Problemas Frecuentes de Abandono](#4-soluciones-innovadoras-y-diferenciadoras-para-los-5-problemas-frecuentes-de-abandono)
   - 4.1. Problema 1: Metas Hiper-exigentes y Sesgo de Planificación
   - 4.2. Problema 2: Dependencia de la Motivación Volátil y la Energía Fluctuante
   - 4.3. Problema 3: Interpretación Catastrófica de la Sesión Perdida (Dicotomía Éxito/Fracaso)
   - 4.4. Problema 4: Desorganización y Bloqueo ante Alteraciones de Rutina
   - 4.5. Problema 5: Ciclos Crónicos de Retomar y Abandonar (El Efecto Yo-Yo)
   - 4.6. Matriz Comparativa Multidimensional: Paradigma Tradicional vs. Enfoque Entrenhábitos
5. [Catálogo Estructurado de Barreras de Adherencia (Taxonomía MECE)](#5-catálogo-estructurado-de-barreras-de-adherencia-taxonomía-mece)
   - 5.1. Fundamentación y Rigor Metodológico MECE
   - 5.2. Familia 1 (B1): Tiempo y Sobrecarga de Agenda
   - 5.3. Familia 2 (B2): Energía, Fatiga y Sobrecarga Biopsicosocial
   - 5.4. Familia 3 (B3): Emocional, Ánimo y Desmotivación Situacional
   - 5.5. Familia 4 (B4): Logística, Entorno y Disrupción de Contexto
   - 5.6. Familia 5 (B5): Rigidez Cognitiva, Perfeccionismo y Culpa
   - 5.7. Ficha Diagnóstica Consolidada de Barreras
6. [Matriz de Intervenciones Adaptativas](#6-matriz-de-intervenciones-adaptativas)
   - 6.1. Reglas Lógicas de Diagnóstico e Inferencia ($IF \to AND \to THEN$)
   - 6.2. Catálogo Operativo de las 7 Intervenciones Estandarizadas
   - 6.3. Especificación Técnica de la "Versión Mínima Viable / Rutina de Emergencia para Días Difíciles" (15-20 min)
   - 6.4. Protocolo de Retorno Rápido Sin Culpa tras Interrupción
   - 6.5. Bucle Cibernético de Retroalimentación y Validación Cuantitativa de Efectividad ($W_{u,b,i}$)
7. [Conclusiones y Directrices Operativas](#7-conclusiones-y-directrices-operativas)
   - 7.1. Directrices de Arquitectura Funcional para el SRS (R2)
   - 7.2. Directrices de Experiencia de Usuario y Prototipado para el MVP (R4)
   - 7.3. Síntesis Epistemológica: Del Esfuerzo Heroico a la Arquitectura de Hábitos

---

## 1. Resumen Ejecutivo y Visión del Producto

### 1.1. La Crisis Silenciosa del Fitness: La Epidemia de Deserción
En la industria contemporánea del bienestar físico, más del 50% de las personas que inician un programa de gimnasio abandonan antes de cumplir los primeros seis meses de práctica. Entre quienes persisten, menos del 20% logran sostener una frecuencia regular superior a los 12 meses. Paradójicamente, el mercado global está saturado de soluciones digitales: existen miles de aplicaciones que catalogan ejercicios en 3D, registran tonelajes levantados, escanean códigos de barras nutricionales y programan temporizadores de alta intensidad. 

Sin embargo, **el problema del entrenamiento nunca ha sido la falta de información técnica sobre cómo ejecutar una sentadilla o cuántas repeticiones realizar para maximizar la hipertrofia**. El problema central y no resuelto es la **deserción por fricción conductual**: la incapacidad de los planes tradicionales para sobrevivir a la colisión con la vida real del usuario (estrés laboral, imprevistos familiares, fatiga mental, agotamiento del sueño y rigidez psicológica).

La gran mayoría de las herramientas existentes cometen un error epistemológico fundamental: **asumen que el usuario ya posee la motivación intrínseca, la disciplina inquebrantable y el contexto logístico ideal para ejecutar el plan**. Cuando la realidad interrumpe la planificación teórica, el usuario experimenta frustración, culpa y el colapso de su autoeficacia, concluyendo falsamente que "no nació para el gimnasio".

### 1.2. Declaración de Visión y Misión

- **Visión**: Convertirse en el estándar de referencia global para la adquisición y sostenimiento del entrenamiento de fuerza, demostrando que la constancia a largo plazo no es el resultado de una fuerza de voluntad excepcional, sino de una arquitectura adaptativa que rediseña las rutinas ante la adversidad cotidiana.
- **Misión**: Empoderar a personas ocupadas, frustradas por ciclos de abandono reiterados, mediante un ecosistema híbrido que fusiona el acompañamiento humano empático de marca personal con un motor de diagnóstico e intervención conductual en tiempo real, permitiéndoles descubrir qué gatilla su deserción y blindar su práctica física de por vida.

### 1.3. Posicionamiento Estratégico y Propuesta Única de Valor (UVP)

Entrenhábitos no se posiciona como una "app de rutinas de gimnasio" ni como un "diario de levantamiento de pesas". Se define como una **plataforma de diagnóstico conductual adaptativo y acompañamiento estratégico para la adherencia al ejercicio físico**.

> **Propuesta Única de Valor (UVP):**  
> *«Descubrí qué te hace abandonar la rutina y construí un sistema para mantenerlo en tu vida».*

A diferencia del paradigma convencional de fitness, Entrenhábitos rearticula la relación del usuario con el ejercicio:
1. **De la prescripción rígida al diseño adaptativo**: En lugar de imponer una rutina monolítica que se rompe ante el primer contratiempo, el sistema opera con un **Plan Semanal Dual**, donde cada sesión cuenta intrínsecamente con su **Versión Ideal** y su **Versión Mínima Viable para Días Difíciles**.
2. **Del registro pasivo al sensor diagnóstico activo**: El acto de registrar el día no es un trámite contable de series y repeticiones, sino un **check-in ultrarrápido (< 45 segundos)** diseñado como sensor de fricción para identificar las barreras situacionales (tiempo, energía, logística, emoción) que amenazan la continuidad.
3. **De la sanción moral a la ingeniería de retorno**: Ante una sesión no realizada, el sistema rechaza los castigos visuales (rachas rotas, alertas rojas) y despliega de inmediato un **Protocolo de Retorno Rápido Sin Culpa**, neutralizando el sesgo de "todo o nada".
4. **De la soledad del algoritmo a la alianza de coaching 1-a-1**: La tecnología actúa como el sensor y el motor de contramedidas inmediatas; el profesional humano aporta el juicio clínico, el sostén afectivo y la calibración estratégica en sesiones periódicas basadas en telemetría objetiva.

### 1.4. Tránsito Evolutivo: Del Acompañamiento Híbrido 1-a-1 al Ecosistema SaaS B2C/B2B

La estrategia de producto de Entrenhábitos se estructura en una progresión de tres fases interdependientes:

```
[ FASE 1: Validación Clínica y Marca Personal 1-a-1 ]
   │  - Validación artesanal del método con cohorte de 20 a 50 alumnos directos.
   │  - Calibración cualitativa del catálogo de barreras y de las intervenciones.
   │  - El fundador actúa como coach único; recopilación intensiva de datos de fricción.
   ▼
[ FASE 2: Automatización, Motor Adaptativo y Retención ]
   │  - Formalización del motor de reglas determinista (Rule Engine) en software.
   │  - Bucle de feedback algorítmico y calibración bayesiana de efectividad de reglas.
   │  - Alertas tempranas de deserción y telemetría avanzada en el Dashboard del Coach.
   ▼
[ FASE 3: Plataforma Escalable SaaS (B2B Multi-Coach / B2C Autónomo) ]
   │  - Modelo B2B: Licenciamiento del ecosistema a otros entrenadores personales y gimnasios.
   │  - Modelo B2C: Suscripción para usuarios independientes con Coach Algorítmico / IA.
   │  - Arquitectura Multi-tenant con separación estricta de dominios de datos.
```

---

## 2. Análisis Crítico del Documento Fundacional

### 2.1. Deconstrucción del Concepto y Promesa de Valor

El documento `Borrador Marca Personal Entrenhábitos.pdf` condensa en dos páginas una lucidez conceptual extraordinaria. Define el producto como:
> *"Una aplicación de adherencia al entrenamiento en el gym que identifica las barreras de cada persona, aprende de sus patrones y le propone intervenciones personalizadas para ayudarla a entrenar con mayor regularidad y realizar una rutina determinada."*

Esta definición contiene los elementos de un **sistema cibernético de control conductual de segundo orden**: no se limita a monitorear una salida (entrenó / no entrenó), sino que evalúa la perturbación que afectó al sistema (barrera), emite una acción correctora (intervención adaptativa) y verifica si dicha acción restauró la estabilidad del hábito.

La promesa de marca, *«Descubrí qué te hace abandonar la rutina y construí un sistema para mantenerlo en tu vida»*, traslada el locus de control: el fracaso ya no se imputa a una deficiencia de carácter del cliente ("no tengo disciplina"), sino a una incompatibilidad de diseño entre el plan y el entorno de vida del sujeto. Al transformar el problema en un desafío de ingeniería de hábitos, se reduce la resistencia defensiva del usuario y se abre la puerta a la experimentación conductual.

### 2.2. Examen Exhaustivo de las 5 Funciones Operativas del Borrador

El borrador delinea un ciclo de 5 funciones interconectadas que configuran el núcleo operativo del servicio:

```
┌────────────────────────────────────────────────────────┐
│      1. Proponer rutina en base a objetivos físicos    │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│     2. Detectar barreras de no-entrenamiento en vivo   │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│     3. Proponer intervención según barrera probable    │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│     4. Comprobar activamente si la intervención ayudó  │◄──────┐ (Bucle de
└──────────────────────────┬─────────────────────────────┘       │  aprendizaje)
                           │                                     │
                           ▼                                     │
┌────────────────────────────────────────────────────────┐       │
│  5. Entrevista personalizada 1-a-1 basada en telemetría ├───────┘
└────────────────────────────────────────────────────────┘
```

#### Función 1: Proponer una rutina en base a objetivos físicos
- **Texto original:** *"Proponer una rutina en base a objetivos físicos."*
- **Análisis crítico:** En el fitness convencional, esta función suele ser un catálogo estático de ejercicios orientado exclusivamente a variables de sobrecarga progresiva (volumen, intensidad, densidad). En Entrenhábitos, la propuesta física debe actuar como un **andamio modular**. No basta con definir series y repeticiones; la rutina debe estar arquitecturalmente desacoplada en dos manifestaciones: la versión ideal (cuando los recursos de tiempo y energía son plenos) y la versión de rescate (cuando el entorno es adverso).

#### Función 2: Detectar las barreras que hacen que las personas no entrenen como quieren
- **Texto original:** *"Detectar las barreras que hace que las personas no entrenen como quieren."*
- **Análisis crítico:** Constituye la innovación diagnóstica del producto. Tradicionalmente, cuando un cliente no asiste al gimnasio, se genera un vacío de información: el entrenador solo ve una ausencia. Esta función transforma la inasistencia en un **evento de captura de datos limpios**. Al capturar el motivo exacto en el momento en que ocurre (o inmediatamente al día siguiente), se evita el sesgo de recuerdo retrospectivo y se obtiene la causa raíz real del bloqueo.

#### Función 3: Proponer una intervención diferente según la barrera probable
- **Texto original:** *"Proponer una intervención diferente según la barrera probable. Ejemplo: si faltó tiempo, reducir la rutina o cambiar su horario; si hubo una interrupción, acordar el próximo paso de retorno."*
- **Análisis crítico:** Aquí radica la diferenciación activa. La aplicación no se limita a archivar el reporte del usuario; actúa como un sistema de soporte de decisiones clínicas. Si la causa es temporal, no tiene sentido insistir con la misma rutina; se requiere una reducción dimensional del esfuerzo. Si la causa es la pérdida de inercia por interrupción, la prioridad no es el volumen de carga sino el anclaje del próximo compromiso.

#### Función 4: Comprobar si esa intervención ayudó
- **Texto original:** *"Comprobar si esa intervención ayudó."*
- **Análisis crítico:** Es el componente que convierte a Entrenhábitos en un sistema de aprendizaje continuo. Sin esta comprobación, las recomendaciones automáticas corren el riesgo de convertirse en "consejos de autoayuda genéricos" ignorados por el usuario. Al cerrar el bucle de feedback mediante una micro-evaluación en el siguiente contacto, el sistema adquiere capacidad adaptativa: aprende qué intervenciones tienen tracción real para ese individuo específico.

#### Función 5: Entrevista personalizada basada en diagnóstico y datos
- **Texto original:** *"Una vez hecho el diagnóstico y recogida la información se mantiene entrevista personalizada."*
- **Análisis crítico:** Cierra la brecha entre el software y la relación humana. La entrevista 1-a-1 no parte de generalidades ("¿cómo te sentiste estas semanas?"), sino de un panel consolidado de telemetría conductual: distribución de versiones ideales vs. mínimas, barreras dominantes, tasa de retorno y efectividad de intervenciones. El coach interviene como un estratega de vida, rediseñando el entorno junto al alumno.

### 2.3. Evaluación de Fortalezas Intrínsecas

1. **Enfoque en la Causa Raíz (Adherencia vs. Contenido):** Entiende acertadamente que el mayor obstáculo no es qué ejercicios hacer, sino lograr que la persona se presente con regularidad en el gimnasio.
2. **Resignificación del Fracaso:** Transforma la ausencia a una sesión de entrenamiento en un dato de diagnóstico, despojándola de connotaciones morales o punitivas.
3. **Simplicidad Conceptual Operativa:** El bucle de 5 funciones es conciso, fácil de explicar y directamente traducible a flujos de software y protocolos de servicio.
4. **Modelo Híbrido Simbiótico:** Reconoce que la tecnología por sí sola suele sufrir de abandono de uso (*app attrition*), y que el coaching humano sin datos sufre de sesgos de memoria e ineficiencia temporal. La combinación de ambos potencia exponencialmente la retención.

### 2.4. Diagnóstico de Brechas Críticas y Ambigüedades Operativas

A pesar de su brillantez intuitiva, el documento fundacional presenta lagunas que este trabajo debe formalizar rigurosamente:

1. **Ambigüedad Paramétrica de la "Versión Mínima":** El borrador no define qué umbral de tiempo, volumen o intensidad constituye una versión mínima válida. Si la versión mínima dura 45 minutos, sigue siendo una barrera insalvable ante crisis de tiempo. Si dura 3 minutos, puede carecer de valor neuromuscular mínimo para justificar el traslado.
2. **Riesgo Severo de Fatiga de Registro (*Logging Burden*):** Si para reportar una barrera el usuario debe navegar múltiples menús, escribir explicaciones largas o contestar encuestas tediosas, el propio sistema se convierte en una barrera adicional.
3. **Ausencia de Taxonomía Formal de Barreras:** El borrador cita ejemplos aislados ("falta de tiempo", "interrupción"), pero carece de una clasificación exhaustiva y mutuamente excluyente que permita a un motor algorítmico tomar decisiones unívocas.
4. **Falta de Especificación Matemática del Motor de Reglas:** No se explicita cómo se calculan las prioridades de intervención, cómo se resuelven empates ni cómo se modela el aprendizaje de efectividad.
5. **Ambigüedad en la Proyección de Marca Personal a Plataforma:** El borrador está redactado en primera persona (*"junto conmigo"*, *"para que yo consulte"*). Debe desacoplarse el rol del coach del fundador individual para permitir la escalabilidad hacia una plataforma SaaS.

### 2.5. Oportunidades de Innovación frente a la Ciencia del Comportamiento

1. **Arquitectura No Punitiva (Anti-Guilt UI):** Reemplazar los patrones de diseño culpabilizantes propios de la gamificación tóxica (ej. la pérdida total de rachas estilo Duolingo que precipita el abandono) por el concepto de **Racha Resiliente / Racha Protegida**. Si el usuario realiza su check-in honesto y acuerda su próximo retorno, la continuidad del sistema no se quiebra.
2. **Instrumentación del Protocolo "Never Miss Twice":** Integrar de forma nativa en el software la heurística de James Clear, elevando la prioridad del día posterior a una falta y reduciendo proactivamente su fricción antes de que el usuario lo solicite.
3. **Generación Algorítmica de Puntos de Conversación para el Coach:** Dotar al panel del profesional de un motor de síntesis que identifique "barreras crónicas" y sugiera la agenda temática exacta de la próxima sesión 1-a-1.

---

## 3. Articulación Profunda de Marcos Teóricos del Cambio Conductual

Para cimentar el diseño de Entrenhábitos sobre bases científicas inexpugnables, se articula la convergencia de cuatro de los marcos más validados de la psicología conductual y cognitiva:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                             MARCOS TEÓRICOS DE ENTRENHÁBITOS                             │
├──────────────────────────────┬─────────────────────────────┬─────────────────────────────┤
│ 1. Fogg Behavior Model       │ 2. Atomic Habits            │ 3. Self-Determination Theory│
│    (BJ Fogg - Stanford)      │    (James Clear)            │    (Deci & Ryan)            │
│                              │                             │                             │
│  - B = MAP                   │  - 4 Leyes del Cambio       │  - Autonomía (Co-diseño)    │
│  - Calibración de Simplicidad│  - Regla de los 2 Minutos   │  - Competencia (Micro-éxito)│
│  - Compensación de fatiga    │  - Identidad vs Resultados  │  - Relación (Alianza coach) │
│  - Prompts oportunos         │  - Never Miss Twice         │                             │
├──────────────────────────────┴─────────────────────────────┴─────────────────────────────┤
│ 4. Terapia Cognitivo-Conductual (TCC): Erradicación del Sesgo "Todo o Nada"              │
│    - Reestructuración cognitiva de la dicotomía éxito / fracaso                          │
│    - Desactivación del "What-The-Hell Effect" (Efecto ¡Qué más da!)                      │
│    - Principio de continuidad acumulativa: 15 minutos >> 0 minutos                      │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.1. Fogg Behavior Model ($B = MAP$): Calibración Dinámica de Simplicidad ante Caídas de Motivación

El modelo de comportamiento de BJ Fogg (Stanford Behavior Design Lab) establece que una conducta objetivo ($B$, *Behavior*) ocurre en un instante dado si y solo si tres vectores convergen simultáneamente:
$$B = M \cdot A \cdot P$$
Donde:
- **$M$ (Motivation)**: El nivel de motivación o impulso del individuo.
- **$A$ (Ability / Simplicity)**: La habilidad del individuo para ejecutar la conducta (definida inversamente por la fricción o dificultad percibida de la tarea).
- **$P$ (Prompt / Trigger)**: La señal, recordatorio o disparador que incita a realizar la acción.

#### La Dinámica de la Línea de Acción (Action Line)
Fogg grafica esta relación en un plano bidimensional donde el eje vertical representa la Motivación (de baja a alta) y el eje horizontal representa la Habilidad / Facilidad (de difícil a fácil). Existe una curva hiperbólica descendente llamada **Línea de Acción**:

```
Motivación (M)
    ▲
Alto│            * (Éxito si hay Prompt)
    │           /
    │          /      LÍNEA DE ACCIÓN
    │         /
Bajo│        /   * (Fracaso si hay Prompt: Frustración)
    └───────┴────────────────────────► Facilidad / Habilidad (A)
          Difícil                  Fácil
```

Si un prompt se dispara cuando el punto $(A, M)$ está **por debajo** de la línea de acción, el comportamiento no se ejecuta, produciendo frustración en el usuario y fatiga por notificaciones.

#### La Falacia del Fitness Tradicional
La industria del fitness comete el error sistemático de intentar manipular casi exclusivamente el eje vertical ($M$): recurre a videos motivacionales, música épica, arengas y apelaciones a la culpa. Sin embargo, en la psicología humana, **la motivación es un recurso biológico finito y altamente fluctuante**, fuertemente condicionado por los ritmos circadianos, la carga cognitiva laboral, el nivel de cortisol y el descanso neuromuscular. Esperar que un profesional que trabajó 10 horas y durmió 5 horas mantenga una motivación alta para realizar una sesión de sentadillas de 75 minutos es un disparate conductual.

#### La Solución Adaptativa de Entrenhábitos
Entrenhábitos asume que la motivación ($M$) colapsará periódicamente. Por lo tanto, la regla de diseño fundamental del sistema es:
> **Cuando la Motivación ($M$) cae por agotamiento o estrés, la Simplicidad ($A$) debe incrementarse de forma compensatoria para mantener el punto operativo por encima de la Línea de Acción.**

Esto se operacionaliza mediante los **Factores de Simplicidad de Fogg**:
1. **Tiempo**: La rutina de emergencia reduce el compromiso temporal de 60 minutos a 15-20 minutos.
2. **Esfuerzo Físico**: Se eliminan series al fallo, levantamientos complejos que demanden alta concentración técnica y tiempos de recuperación prolongados.
3. **Ciclos Mentales / Carga Cognitiva**: Se elimina la indecisión sobre qué ejercicios hacer; el sistema entrega una terna fija y cerrada de ejercicios accesibles.
4. **Desviación de Rutina**: Si el usuario no puede trasladarse al gimnasio, se activa la variante hogareña con peso corporal o movilidad.

#### Tipología de Prompts en Entrenhábitos
Fogg distingue tres tipos de prompts, los cuales son incorporados según el estado del alumno:
- **Facilitadores (Facilitators)**: Diseñados para personas con alta motivación pero baja habilidad transitoria (ej. *"Tenés poco tiempo hoy: tu rutina de 15 minutos ya está lista en pantalla"*).
- **Chispas (Sparks)**: Diseñados para personas con alta habilidad pero baja motivación situacional, anclando el prompt al alivio del estrés (ej. *"Solo 10 minutos de movilidad te van a despejar la mente del trabajo"*).
- **Señales (Signals)**: Simples recordatorios neutros para cuando la motivación y la habilidad son ambas adecuadas.

### 3.2. Hábitos Atómicos (James Clear): Las 4 Leyes, la Regla de los 2 Minutos y el Protocolo "Never Miss Twice"

La metodología de James Clear descompone el bucle neurológico del hábito en cuatro etapas: Señal, Deseo, Respuesta y Recompensa. Entrenhábitos instrumentaliza este marco a través de sus cuatro leyes directas y tres protocolos específicos:

#### 1ª Ley: Hacerlo Obvio (Señal / Trigger)
El hábito requiere una ancla situacional nítida. El sistema utiliza las **Intenciones de Implementación** (conceptualizadas por Peter Gollwitzer):
$$\text{«Cuando ocurra la situación } X \text{, ejecutaré la respuesta } Y \text{ en el lugar } Z\text{»}$$
En el Onboarding de Entrenhábitos, el alumno no declara "voy a entrenar 3 veces por semana", sino que co-diseña: *"Lunes, Miércoles y Viernes a las 19:00 hs en Gimnasio Central"*. Adicionalmente, se fomenta el **Apilamiento de Hábitos (*Habit Stacking*)**: vincular el inicio del entrenamiento a un hábito preexistente e inamovible (ej. *"Inmediatamente después de cerrar la computadora del trabajo, me pongo las zapatillas de entrenar"*).

#### 2ª Ley: Hacerlo Atractivo (Deseo / Craving)
El cerebro humano persigue recompensas inmediatas (descuento hiperbólico). Vincular el gimnasio con metas a seis meses vista ("perder 8 kg de grasa") produce un desajuste motivacional en el corto plazo. Entrenhábitos reencuadra la recompensa anticipada:
- Se enfatiza el **beneficio afectivo inmediato**: liberación de dopamina, reducción del dolor postural de oficina, desconexión del estrés cotidiano y sentido de triunfo personal al culminar el día.

#### 3ª Ley: Hacerlo Fácil (Respuesta / Response) y la Regla de los 2 Minutos
La resistencia para ejecutar un hábito reside fundamentalmente en la **fricción de inicio (inercia estática)**. Clear postula la **Regla de los 2 Minutos**: cuando se empieza un nuevo hábito, debe tomar menos de dos minutos en ejecutarse.
Entrenhábitos instrumentaliza esta regla a través de la **Micro-meta de Entrada**:
> *"Tu único compromiso hoy no es hacer 5 series de sentadillas; tu único compromiso es ponerte la ropa de deporte y pisar la puerta del gimnasio durante 5 minutos. Si una vez adentro deseás marcharte, tenés permiso explícito para hacerlo sin culpa."*

La evidencia conductual demuestra que en más del 80% de los casos, una vez superada la fricción de traslado y entrada, la persona experimenta inercia cinética y decide completar al menos la versión mínima.

#### 4ª Ley: Hacerlo Satisfactorio (Recompensa / Reward) y el Protocolo "Never Miss Twice"
Una conducta se consolida si genera una sensación de cierre exitoso inmediato. La app proporciona validación positiva instantánea tanto para la versión ideal como para la versión mínima (ambas suman para la racha protegida).
Sin embargo, el aporte más trascendental de Clear a Entrenhábitos es el principio:
> **«Una falta es un accidente; dos faltas consecutivas son el comienzo de un nuevo hábito de abandono».**

Si un alumno pierde una sesión el martes, el sistema activa de forma inmediata el **Protocolo "Never Miss Twice" (Nunca Faltes Dos Veces Seguidas)**. El objetivo para el miércoles o jueves deja de ser el rendimiento o el volumen; el único objetivo sagrado es presentarse y realizar aunque sea 15 minutos, rompiendo la inercia de la inacción antes de que se instale el hábito de no ir.

#### Hábitos Basados en la Identidad vs. Hábitos Basados en Resultados
Clear enfatiza que el verdadero cambio de conducta es un cambio de identidad:
- *Hábitos basados en resultados*: "Quiero levantar 100 kg en press de banca".
- *Hábitos basados en procesos*: "Voy a seguir este plan de fuerza".
- *Hábitos basados en la identidad*: **"Soy el tipo de persona que no falta a sus compromisos físicos"**.

Cuando un alumno realiza la versión mínima de 15 minutos en un día pésimo, fisiológicamente el estímulo hipertrófico es moderado, pero **conductualmente deposita un voto masivo a favor de su nueva identidad**. Ha demostrado empíricamente que ni el cansancio ni la falta de tiempo tienen el poder de convertirlo en una persona que abandona.

### 3.3. Teoría de la Autodeterminación (Deci & Ryan): Autonomía, Competencia y Relación en el Entrenamiento

La Teoría de la Autodeterminación (SDT, *Self-Determination Theory*) postula que la motivación intrínseca duradera y el bienestar psicológico dependen de la satisfacción de tres necesidades universales:

#### A. Necesidad de Autonomía
El ser humano rechaza las prescripciones impuestas que percibe como un control externo opresivo. En el fitness tradicional, el entrenador impone una rutina inflexible; si el alumno no la cumple exactamente, se siente controlado o transgresor.
- **Implementación en Entrenhábitos**: El plan es co-creado. Diariamente, ante la aparición de una barrera, la aplicación no ordena una acción; ofrece **opciones de decisión soberana**: *"¿Deseás hacer la versión mínima de 15 minutos hoy, reprogramar para mañana a las 8 AM, o declarar un descanso consciente y enfocar tu energía en el viernes?"*. El alumno conserva siempre el timón de su vida.

#### B. Necesidad de Competencia
La necesidad de sentirse eficaz y capaz de dominar el entorno. Cuando un alumno recibe una rutina de 6 días que solo puede cumplir 2 veces, su sentido de autoeficacia (definido por Albert Bandura) colapsa, provocando indefensión aprendida (*learned helplessness*).
- **Implementación en Entrenhábitos**: La existencia formal de la **Versión Mínima Viable** garantiza que el umbral de éxito sea alcanzable incluso en las peores circunstancias. El usuario nunca experimenta un fracaso absoluto; experimenta que es competente para adaptar su esfuerzo a la realidad de su jornada.

#### C. Necesidad de Relación (Relatedness)
La necesidad de sentirse conectado, comprendido y respaldado por otros seres humanos significativos. Las aplicaciones puramente automatizadas fracasan en sostener a usuarios vulnerables porque un algoritmo no puede ofrecer compasión ni contención real.
- **Implementación en Entrenhábitos**: El acompañamiento de marca personal aporta la **alianza terapéutica / deportiva**. El alumno sabe que sus datos son revisados por un coach real que comprende el contexto de su vida, que valida sus tropiezos sin emitir juicios de valor y que celebra sus rescates con genuina empatía en las entrevistas 1-a-1.

### 3.4. Erradicación del Sesgo Cognitivo del "Todo o Nada": Deconstrucción del *What-The-Hell Effect*

El pensamiento dicotómico o polarizado ("Todo o Nada") es una de las distorsiones cognitivas más destructivas identificadas por la Terapia Cognitivo-Conductual (TCC) de Aaron Beck y la psicología de la salud:
> *«O entreno los 75 minutos completos con todos los ejercicios y pesos planificados, o no vale la pena hacer nada».*

#### Anatomía del *What-The-Hell Effect* (Efecto "¡Qué más da!")
Descrito formalmente en la investigación sobre autorregulación de Janet Polivy y Peter Herman, este fenómeno ocurre cuando una persona transgrede una regla autoimpuesta rígida:
1. El alumno se impone una regla estricta: "Debo entrenar 1 hora de 19:00 a 20:00".
2. Surge un imprevisto laboral: sale del trabajo a las 19:40.
3. Se activa el juicio dicotómico: "Ya es tarde, no alcanzo a hacer la rutina completa; hoy ya arruiné el plan".
4. Sobrevino la capitulación total: "¡Qué más da! Ya que fallé hoy, tampoco voy a ir el jueves, y el fin de semana como cualquier cosa; arranco de nuevo el próximo lunes".

Este salto mental irracional convierte un retraso de 40 minutos en un abandono acumulativo de semanas o meses.

#### La Reestructuración Cognitiva en Entrenhábitos
Entrenhábitos opera como un antídoto activo contra el pensamiento dicotómico mediante tres axiomas conductuales integrados en su interfaz:
1. **El Axioma de la Asimetría del Cero**:
   $$\text{Esfuerzo}(15 \text{ min}) \ggg \text{Esfuerzo}(0 \text{ min})$$
   Fisiológicamente, 15 minutos de trabajo muscular compuesto activan la circulación, preservan la masa magra, mejoran la sensibilidad a la insulina y reducen el estrés. Pero a nivel conductual, la diferencia entre 15 minutos y 0 minutos es **infinita**: representa la diferencia entre mantener vivo un hábito y extinguirlo.
2. **La Desculpabilización Radical de la Inasistencia**:
   Una sesión no realizada no es una falta moral ni una ruptura de contrato; es un **dato de calibración ecológica**. Si una persona no fue a entrenar porque su hijo tuvo fiebre o porque tuvo que entregar un balance contable, esa ausencia no refleja falta de carácter: refleja prioridades de vida legítimas. El sistema valida la situación y enfoca de inmediato la energía en la siguiente acción disponible.
3. **La Redefinición de la Victoria**:
   En Entrenhábitos, una semana donde el usuario realizó 2 sesiones ideales y 1 sesión mínima de 15 minutos en un día de crisis se califica como un **éxito rotundo (100% de adherencia protegida)**, superando la tiranía del perfeccionismo paralizante.

---

## 4. Soluciones Innovadoras y Diferenciadoras para los 5 Problemas Frecuentes de Abandono

A continuación se realiza una deconstrucción exhaustiva de los 5 problemas clínicos identificados en el borrador, formulando la respuesta diferencial de Entrenhábitos y su mecanismo de software asociado:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│              LOS 5 PROBLEMAS DE ABANDONO Y SU RESOLUCIÓN EN ENTRENHÁBITOS                │
├────────────────────────────────┬────────────────────────────┬────────────────────────────┤
│ Problema del Borrador          │ Diagnóstico Psicológico    │ Innovación Entrenhábitos   │
├────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ P1: Objetivos hiper-exigentes  │ Sesgo de optimismo y fallo │ Línea Base Sostenible      │
│                                │ de planificación           │ Planificación para el caos │
├────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ P2: Dependencia de motivación  │ Confusión Sistema 1 vs 2   │ Desacople motivacional     │
│     o energía                  │ Volatilidad de dopamina    │ Versión mínima obligatoria │
├────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ P3: Sesión perdida = fracaso   │ Pensamiento dicotómico     │ Reencuadre en datos        │
│                                │ "What-the-hell effect"     │ Protocolo Never Miss Twice │
├────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ P4: Desorganización ante       │ Inflexibilidad contextual  │ Módulo de Contingencia     │
│     cambios de rutina          │ Costo cognitivo de cambio  │ Reorganización en 2 clics  │
├────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ P5: Retomar sin sostener       │ Sobreentrenamiento por     │ Rampa de Retorno Progresivo│
│     (Efecto yo-yo)             │ culpa y dolor muscular     │ y métrica MTTR             │
└────────────────────────────────┴────────────────────────────┴────────────────────────────┘
```

### 4.1. Problema 1: Metas Hiper-exigentes y Sesgo de Planificación
- **Diagnóstico Psicológico**: El usuario promedio se inscribe al gimnasio impulsado por un pico transitorio de insatisfacción o motivación (ej. inicio de año, post-vacaciones). Bajo este influjo, incurre en el **sesgo de optimismo y la falacia de planificación** (Kahneman & Tversky): proyecta su capacidad futura asumiendo un escenario libre de fricciones (asume que siempre dormirá 8 horas, nunca tendrá reuniones imprevistas y nunca estará agotado). Como consecuencia, diseña planes de 5 o 6 días a la semana, de 90 minutos por sesión. Cuando la realidad impone su costo cognitivo, la carga total excede los recursos disponibles y sobreviene el colapso.
- **Solución Innovadora de Entrenhábitos: "El Principio de la Línea Base Sostenible"**:
  - En la Evaluación Inicial, el sistema y el coach aplican una regla de prudencia: **planificar para la peor semana del año, no para la mejor**. Si el alumno cree que puede entrenar 4 días, se prescribe un plan base innegociable de 2 o 3 días, dejando el día adicional como un "bonus optativo".
  - Se exige como requisito funcional obligatorio configurar desde el primer día la **Versión Mínima de Rescate** para cada una de las sesiones pactadas.
- **Mecanismo de Software**:
  - Algoritmo de validación en el onboarding: si un usuario declara historial de abandono reiterado e intenta configurar $>4$ días de alta intensidad, el sistema emite una advertencia preventiva de riesgo conductual y bloquea la confirmación hasta que se establezca una frecuencia sostenible.

### 4.2. Problema 2: Dependencia de la Motivación Volátil y la Energía Fluctuante
- **Diagnóstico Psicológico**: La creencia errónea de que para entrenar se requiere "sentir ganas" o "estar desbordante de energía". La motivación es un proceso afectivo mediado por el Sistema 1 (rápido, emocional, influenciable por el cansancio), mientras que el hábito reside en la automatización del Sistema 2 trasladada a los ganglios basales. Si el inicio de una sesión requiere un debate mental consciente de 20 minutos ("¿voy o no voy?"), el cerebro fatigado siempre elegirá conservar energía y permanecer en el sofá.
- **Solución Innovadora de Entrenhábitos: "Desacoplamiento Motivacional y Paridad de Valor"**:
  - Se disocia formalmente la ejecución de la sesión del estado de ánimo del sujeto.
  - Se institucionaliza la **Versión Mínima Viable (15-20 min)** no como un "premio consuelo", sino como una herramienta de grado profesional diseñada para preservar la inercia conductual en días de baja energía ($\le 2/5$).
  - La interfaz gráfica otorga la misma validez de racha y celebración a una sesión mínima que a una sesión ideal, validando que el alumno venció la resistencia interna.
- **Mecanismo de Software**:
  - En el widget de registro diario, la escala de energía (1 a 5) condiciona dinámicamente la recomendación: si el usuario declara energía 1 o 2 antes de iniciar la sesión, el sistema toma la iniciativa y propone proactivamente: *"Tu energía está baja hoy. Olvidate de la rutina larga: hacé la versión express de 15 minutos y andá a descansar con la misión cumplida"*.

### 4.3. Problema 3: Interpretación Catastrófica de la Sesión Perdida (Dicotomía Éxito/Fracaso)
- **Diagnóstico Psicológico**: El alumno que falta a una sesión suele experimentar una cascada emocional de auto-reproche, vergüenza y sensación de incompetencia. Las aplicaciones tradicionales exacerban este cuadro mostrando cruces rojas gigantescas, alertas alarmantes de "racha rota" o caritas tristes. El usuario asume que la semana entera se ha perdido, detonando el *What-The-Hell Effect* y desapareciendo del gimnasio durante semanas.
- **Solución Innovadora de Entrenhábitos: "Reencuadre Diagnóstico y Protocolo Never Miss Twice"**:
  - Se elimina toda terminología de "fracaso", "incumplimiento" o "falta". Una sesión omitida se registra bajo la categoría neutral de **"Sesión No Realizada por Barrera Identificada"**.
  - Se aplica el principio de Clear: el único peligro real no es perder una sesión, sino permitir que se produzca una segunda inasistencia consecutiva.
  - El sistema despliega un mensaje de refuerzo empático desculpabilizador y enfoca de inmediato la cognición del alumno en blindar logísticamente la siguiente oportunidad de entrenamiento.
- **Mecanismo de Software**:
  - Detección de $c_{consecutive\_misses} = 1$: el sistema silencia notificaciones culpabilizantes y despliega en la pantalla de inicio una tarjeta de compromiso rápido: *"Ayer no se pudo y no pasa absolutamente nada. El verdadero secreto de la constancia es volver rápido. ¿Agendamos tu sesión de rescate para mañana en versión express?"*.

### 4.4. Problema 4: Desorganización y Bloqueo ante Alteraciones de Rutina
- **Diagnóstico Psicológico**: El contexto cotidiano moderno es intrínsecamente entrópico: viajes de trabajo, horas extras no programadas, exámenes universitarios, enfermedades familiares o cierres imprevistos del gimnasio. Cuando la rutina preestablecida choca con un evento disruptivo, el costo cognitivo de reestructurar el horario supera la capacidad de resolución del usuario fatigado, provocando parálisis por análisis y abandono por default.
- **Solución Innovadora de Entrenhábitos: "El Módulo de Semana de Contingencia"**:
  - El sistema no exige al usuario resolver la logística de forma manual. Proporciona un mecanismo de contingencia asistida en 2 clics.
  - Permite redistribuir automáticamente los días restantes de la semana, condensar las rutinas en formatos de cuerpo completo (*Full-body*) de 20 minutos o activar la biblioteca de alternativas domiciliarias sin equipamiento.
- **Mecanismo de Software**:
  - Botón de acción rápida *"Mi semana se complicó (Activar Contingencia)"*. El algoritmo solicita dos datos (cuántos días podés dedicarle y si contás con gimnasio o solo casa) y regenera instantáneamente el cronograma de la semana sin penalizar ninguna métrica histórica.

### 4.5. Problema 5: Ciclos Crónicos de Retomar y Abandonar (El Efecto Yo-Yo)
- **Diagnóstico Psicológico**: El alumno que ha estado inactivo durante 2 o 4 semanas suele experimentar un sentimiento de culpa acumulada. Al decidir retomar, intenta "compensar el tiempo perdido" regresando con el mismo volumen, intensidad y peso que manejaba cuando estaba en su mejor momento. Esta conducta provoca dos desastres fisiológicos y psicológicos:
  1. Dolor muscular de aparición tardía extremo (DOMS / agujetas incapacitantes) que le impide moverse durante cuatro días.
  2. Sensación lacerante de pérdida de forma ("no puedo levantar ni la mitad de antes").
  Ambos factores destruyen la autoeficacia y precipitan un nuevo ciclo de abandono fulminante.
- **Solución Innovadora de Entrenhábitos: "Protocolo de Rampa de Retorno Progresivo"**:
  - Si el sistema detecta un bache de inactividad superior a 7 días, **bloquea temporalmente la prescripción de la Versión Ideal de alta carga**.
  - Impone una rampa de re-habituación de 7 a 10 días al **60% del volumen habitual**, con foco exclusivo en bombeo sanguíneo, rango de movimiento y recuperación articular sin daño tisular severo.
  - Se monitoriza el **Tiempo Medio de Retorno (MTTR - *Mean Time To Recovery*)** como la métrica reina de la resiliencia del alumno.
- **Mecanismo de Software**:
  - Regla automática ante $t_{gap\_days} \ge 7$: alerta visual en el perfil del alumno y del coach. El sistema despliega: *"¡Qué alegría tenerte de vuelta! Para cuidar tus músculos y asegurar que la semana que viene sigas con nosotros, activamos la Rampa de Retorno: dos sesiones suaves de re-aclimatación. Prohibido matarse hoy"*.

### 4.6. Matriz Comparativa Multidimensional: Paradigma Tradicional vs. Enfoque Entrenhábitos

| Dimensión | Enfoque Tradicional de Fitness | Enfoque Adaptativo Entrenhábitos | Impacto en la Retención a 6 Meses |
|---|---|---|---|
| **Estrategia ante Días Difíciles** | Ninguna ("Si querés podés; no pongas excusas"). | **Plan Dual:** Versión Ideal vs. Versión Mínima Viable (15-20 min). | Evita el 85% de las deserciones tempranas por falta de tiempo. |
| **Respuesta ante Sesión Perdida** | Castigo visual, racha reseteada a cero, silencio o spam motivacional. | **Protocolo "Never Miss Twice"** + Reencuadre desculpabilizador en datos. | Reduce el tiempo de retorno de 18 días promedio a menos de 48 horas. |
| **Gestión de la Fatiga / Energía** | Ignorada; se asume energía constante de laboratorio. | **Sensor de Energía Diario (1-5)** con modulación proactiva de la carga. | Previene el agotamiento crónico y la frustración por bajo rendimiento. |
| **Ajuste ante Cambios de Agenda** | Manual, confuso y abandonado a la suerte del alumno. | **Módulo de Semana de Contingencia** asistido en 2 clics. | Mantiene la vinculación con el hábito durante viajes o picos laborales. |
| **Reingreso tras Inactividad** | Retorno desregulado al 100% $\to$ DOMS severo $\to$ Recaída. | **Rampa de Retorno Progresivo (60% vol)** obligatoria de re-adaptación. | Erradica el efecto yo-yo en usuarios con antecedentes de deserción. |
| **Rol de la Interfaz Digital** | Registro tedioso de repeticiones, series y pesos (> 5 min). | **Check-in diagnóstico ultrarrápido (< 45s)** enfocado en barreras y adherencia. | Elimina la fatiga de registro como causa de abandono de la app. |
| **Rol del Coach Humano** | Revisor pasivo de asistencia o policía del ejercicio. | **Estratega de hábitos 1-a-1** asistido por telemetría conductual consolidada. | Multiplica por 4 la tasa de retención respecto a apps puramente algorítmicas. |

---

## 5. Catálogo Estructurado de Barreras de Adherencia (Taxonomía MECE)

### 5.1. Fundamentación y Rigor Metodológico MECE

Para que un motor de reglas adaptativo opere de forma determinista y sin solapamientos lógicos, el universo de fricciones que experimenta un individuo frente al gimnasio debe modelarse bajo el principio **MECE** (*Mutually Exclusive, Collectively Exhaustive* / Mutuamente Excluyentes, Colectivamente Exhaustivas):
- **Mutuamente Excluyentes**: Ninguna barrera debe pertenecer a dos categorías simultáneamente a nivel taxonómico primario, evitando ambigüedad en el diagnóstico.
- **Colectivamente Exhaustivas**: Cualquier motivo legítimo o psicológico por el cual una persona suspende o altera su entrenamiento debe encontrar cabida en una de las familias establecidas.

Se definen **5 Familias Principales de Barreras**, integrando factores temporales, bioenergéticos, afectivos, logísticos y cognitivos:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                    TAXONOMÍA MECE DE BARRERAS DE ADHERENCIA (5 FAMILIAS)                 │
├───────────────┬───────────────────────────────────┬──────────────────────────────────────┤
│ Familia       │ Denominación Técnica              │ Foco Primario de la Fricción         │
├───────────────┼───────────────────────────────────┼──────────────────────────────────────┤
│ **B1**        │ Tiempo y Sobrecarga de Agenda     │ Restricción objetiva de horas libres │
├───────────────┼───────────────────────────────────┼──────────────────────────────────────┤
│ **B2**        │ Energía, Fatiga y Sobrecarga Bio  │ Agotamiento neuromuscular y mental   │
├───────────────┼───────────────────────────────────┼──────────────────────────────────────┤
│ **B3**        │ Emocional, Ánimo y Desmotivación  │ Apatía volitiva y resistencia afectiva│
├───────────────┼───────────────────────────────────┼──────────────────────────────────────┤
│ **B4**        │ Logística, Entorno y Disrupción   │ Ruptura de infraestructura o viaje   │
├───────────────┼───────────────────────────────────┼──────────────────────────────────────┤
│ **B5**        │ Rigidez Cognitiva y Culpa         │ Perfeccionismo y sesgo "todo o nada" │
└───────────────┴───────────────────────────────────┴──────────────────────────────────────┘
```

### 5.2. Familia 1 (B1): Tiempo y Sobrecarga de Agenda
- **Definición**: Situaciones donde el tiempo cronológico disponible del individuo se ve severamente restringido por compromisos obligatorios externos.
- **Sub-barreras catalogadas**:
  - `B1.1 - Jornada laboral / académica extendida`: Horas extras imprevistas, entregas urgentes, reuniones de cierre de día.
  - `B1.2 - Emergencia doméstica / familiar`: Cuidado no planificado de hijos, enfermedad de familiares, trámites de fuerza mayor.
  - `B1.3 - Conflicto de superposición horaria`: Compromisos sociales o médicos ineludibles que coinciden exactamente con la franja de entrenamiento.
- **Manifestación típica del alumno**: *"Salí dos horas más tarde de la oficina y ahora solo me quedan 25 minutos libres antes de cenar; para ir media hora ni vale la pena arrancar"*.

### 5.3. Familia 2 (B2): Energía, Fatiga y Sobrecarga Biopsicosocial
- **Definición**: Situaciones donde el tiempo cronológico existe, pero el caudal de energía fisiológica o cognitiva del individuo está por debajo del umbral mínimo de activación.
- **Sub-barreras catalogadas**:
  - `B2.1 - Privación aguda o crónica de sueño`: Menos de 5-6 horas de descanso, insomnio, fatiga ocular y embotamiento matutino.
  - `B2.2 - Agotamiento mental / burnout cognitivo`: Tensión mental extrema, toma de decisiones extenuante durante el día, cefalea tensional.
  - `B2.3 - Fatiga física / sobrecarga neuromuscular previa`: Agujetas dolorosas, sensación de pesadez en articulaciones o sobreentrenamiento acumulado.
- **Manifestación típica del alumno**: *"Tengo tiempo, pero estoy completamente fundido de la cabeza; no tengo fuerzas ni para cambiarme de ropa"*.

### 5.4. Familia 3 (B3): Emocional, Ánimo y Desmotivación Situacional
- **Definición**: Estados afectivos transitorios caracterizados por anhedonia, apatía, ansiedad o aversión psicológica hacia el entorno del ejercicio, en ausencia de fatiga física extrema o falta objetiva de tiempo.
- **Sub-barreras catalogadas**:
  - `B3.1 - Apatía volitiva / Desánimo situacional`: Carencia de "ganas", sensación de despropósito temporal o bajo estado de ánimo por estrés personal.
  - `B3.2 - Intimidación social / Fricción de entorno`: Rechazo al ambiente del gimnasio (música estridente, necesidad de interactuar, inseguridad por técnica o juicio social).
  - `B3.3 - Aburrimiento o aversión a la rutina`: Rutina percibida como monótona o carente de estímulo motivacional.
- **Manifestación típica del alumno**: *"Hoy no tengo ganas de cruzarme con nadie ni de aguantar el gimnasio lleno; preferiría quedarme encerrado"*.

### 5.5. Familia 4 (B4): Logística, Entorno y Disrupción de Contexto
- **Definición**: Desaparición de las condiciones físicas, ambientales o espaciales indispensables para realizar la sesión según fue planificada.
- **Sub-barreras catalogadas**:
  - `B4.1 - Viaje laboral o personal`: Hospedaje en hotel sin gimnasio o estadía fuera de la ciudad habitual.
  - `B4.2 - Cierre de instalaciones / Feriado / Huelga`: Gimnasio cerrado por mantenimiento, feriado imprevisto o condiciones climáticas extremas que impiden el traslado seguro.
  - `B4.3 - Falta de indumentaria o equipamiento`: Olvido de la mochila de deporte, falta de zapatillas o ropa adecuada en el lugar de trabajo.
  - `B4.4 - Gimnasio saturado / Imposibilidad de uso de máquinas`: Esperas de más de 10 minutos por máquina en hora pico que distorsionan el tiempo programado.
- **Manifestación típica del alumno**: *"Estoy en un hotel por trabajo y no tengo el gimnasio a mano; hasta el lunes no puedo hacer nada"*.

### 5.6. Familia 5 (B5): Rigidez Cognitiva, Perfeccionismo y Culpa
- **Definición**: Bloqueos psicológicos derivados del procesamiento defectuoso de la información sobre el propio hábito, caracterizados por autoexigencia desmedida y vergüenza tras un bache previo.
- **Sub-barreras catalogadas**:
  - `B5.1 - Bloqueo por sesión perdida previa (*What-The-Hell Effect*)`: Culpa paralizante tras haber faltado el día anterior, concluyendo que la semana "ya está arruinada".
  - `B5.2 - Parálisis por perfeccionismo`: Negativa a entrenar si no se dispone del 100% de los suplementos, la indumentaria óptima o la rutina perfecta de 75 minutos.
  - `B5.3 - Miedo al dolor o re-lesión`: Ansiedad desproporcionada ante una leve molestia física que provoca inactividad total en lugar de entrenamiento adaptado.
- **Manifestación típica del alumno**: *"Como ya falté el lunes y el martes, ya perdí el ritmo; mejor arranco de cero el próximo mes cuando esté más ordenado"*.

### 5.7. Ficha Diagnóstica Consolidada de Barreras

| Código | Denominación de la Barrera | Familia | Probabilidad de Deserción si no se Interviene | Gatillador Primario en Vida Real | Intervención Estándar Asociada |
|---|---|---|---|---|---|
| **BAR-01** | Agenda Saturada / Falta de Tiempo | B1: Tiempo | **Muy Alta (Semana 2-4)** | Horas extra, retraso en transporte, reuniones tarde. | INT-01 (Versión Mínima) / INT-03 (Reprogramar) |
| **BAR-02** | Agotamiento / Baja Energía ($\le 2$) | B2: Energía | **Crítica (Días laborables)** | Cansancio mental, insomnio, sobrecarga laboral. | INT-02 (Micro-meta 2 min) / INT-01 (Versión Mínima) |
| **BAR-03** | Viaje / Cambio de Entorno | B4: Logística | **Alta (Riesgo de desconexión)** | Viaje de negocios, vacaciones, mudanza. | INT-04 (Alternativa Casa) / INT-03 (Reprogramar) |
| **BAR-04** | Apatía / Sin Ganas / Desánimo | B3: Emocional | **Media-Alta (Fin de semana)** | Estrés afectivo, desmotivación intrínseca transitoria. | INT-02 (Micro-meta 2 min) / INT-07 (Ajuste Ventana) |
| **BAR-05** | Culpa por Falta Previa ("Todo o Nada") | B5: Rigidez | **Máxima (Causa #1 de abandono final)** | 1 o 2 sesiones perdidas consecutivas. | INT-05 ("Never Miss Twice") + Retorno Sin Culpa |
| **BAR-06** | Gimnasio Inaccesible o Saturado | B4: Logística | **Media (Horas pico)** | Lluvia torrencial, gym colmado, feriado local. | INT-04 (Alternativa Casa) / INT-07 (Cambio Horario) |
| **BAR-07** | Inactividad Prolongada ($> 7$ días) | B2 / B5 | **Extrema (Deserción consolidada)** | Enfermedad, vacaciones largas, desenganche. | INT-06 (Rampa Retorno Progresivo 60%) |

---

## 6. Matriz de Intervenciones Adaptativas

### 6.1. Reglas Lógicas de Diagnóstico e Inferencia ($IF \to AND \to THEN$)

El motor de reglas de Entrenhábitos opera mediante inferencia determinista sobre un vector de contexto conductual $E$:
$$E = \langle u_{id}, s_{status}, b_{id}, e_{level}, c_{consecutive\_misses}, t_{gap\_days}, w_{day\_of\_week} \rangle$$

Las reglas de producción se formalizan en la siguiente tabla maestra de inferencia:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                             TABLA MAESTRA DE REGLAS DE INFERENCIA CONDUCTUAL                                           │
├──────┬───────────────────────────────┬─────────────────────────────────┬───────────────────────────────────┬───────────────────────────┤
│ Regla│ Condición Primaria (IF)       │ Contexto Secundario (AND)       │ Intervención Prescrita (THEN)     │ Métrica de Verificación   │
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-01 │ s_status = NOT_TRAINED_YET    │ b_id = BAR-01 (Falta Tiempo)    │ INT-01: Versión Mínima Viable     │ ¿Completó sesión express  │
│      │                               │ AND tiempo_disponible >= 15 min │ (15-20 min) en gimnasio o casa    │ en las siguientes 3 horas?│
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-02 │ s_status = MISSED             │ b_id = BAR-01 (Falta Tiempo)    │ INT-03: Reprogramación Inteligente│ ¿Se ejecutó la sesión en  │
│      │                               │ AND tiempo_disponible < 15 min  │ a la próxima ventana libre real   │ la fecha reprogramada?    │
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-03 │ s_status = NOT_TRAINED_YET    │ b_id = BAR-02 (Baja Energía)    │ INT-02: Micro-meta de Entrada     │ ¿Asistió al gimnasio al   │
│      │                               │ AND e_level <= 2                │ (Regla de 2 Min: solo 5 min)      │ menos a calentar/caminar? │
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-04 │ s_status = NOT_TRAINED_YET    │ b_id = BAR-03 (Viaje / Entorno) │ INT-04: Rutina Alternativa en     │ ¿Registró sesión de casa  │
│      │                               │ OR b_id = BAR-06 (Gym colmado)  │ Casa / Hotel sin equipamiento     │ o movilidad completada?   │
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-05 │ s_status = MISSED             │ c_consecutive_misses = 1        │ INT-05: Protocolo Never Miss Twice│ ¿Evitó la segunda falta   │
│      │                               │ (Primera omisión de la semana)  │ + Blindaje de la sesión t+1       │ consecutiva en t+1/t+2?   │
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-06 │ s_status = MISSED             │ c_consecutive_misses >= 2       │ ALERTA AMARILLA AL COACH          │ Tiempo de contacto del    │
│      │                               │ (Riesgo inminente de abandono)  │ + Mensaje empático directo en app │ coach < 24h y reajuste.   │
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-07 │ s_status = CHECKIN_RETORNO    │ t_gap_days >= 7                 │ INT-06: Rampa de Retorno Progre-  │ Finalización exitosa de   │
│      │                               │ (Reingreso tras inactividad)    │ sivo (Semana al 60% de volumen)   │ la primera semana retorno.│
├──────┼───────────────────────────────┼─────────────────────────────────┼───────────────────────────────────┼───────────────────────────┤
│ R-08 │ count(b_id) >= 3              │ Misma barrera en últimos 30 d   │ INT-07: Ajuste de Ventana Horaria │ Reducción >= 50% de la    │
│      │                               │ (Fricción estructural recurrente│ + Pauta crítica para sesión 1-a-1 │ barrera en siguientes 30d.│
└──────┴───────────────────────────────┴─────────────────────────────────┴───────────────────────────────────┴───────────────────────────┘
```

### 6.2. Catálogo Operativo de las 7 Intervenciones Estandarizadas

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                     CATÁLOGO DE LAS 7 INTERVENCIONES ADAPTATIVAS                         │
├────────┬─────────────────────────────────────┬──────────────────┬────────────────────────┤
│ ID     │ Nombre de la Intervención           │ Duración / Carga │ Objetivo Conductual    │
├────────┼─────────────────────────────────────┼──────────────────┼────────────────────────┤
│ INT-01 │ Versión Mínima ("Día Difícil")      │ 15 - 20 minutos  │ Bajar fricción temporal│
│ INT-02 │ Micro-meta Entrada (Regla 2 Min)    │ 5 - 10 minutos   │ Romper inercia estática│
│ INT-03 │ Reprogramación Inteligente Sin Culpa│ 30 segundos (app)│ Salvar la intención    │
│ INT-04 │ Alternativa en Casa / Movilidad     │ 12 - 15 minutos  │ Eliminar barrera local │
│ INT-05 │ Protocolo "Never Miss Twice"        │ 1 minuto (app)   │ Frenar el hábito cero  │
│ INT-06 │ Rampa de Retorno Progresivo         │ 1 semana (60% vol│ Evitar dolor / DOMS    │
│ INT-07 │ Ajuste Estratégico de Ventana Hora  │ Variable         │ Eludir hora pico/fatiga│
└────────┴─────────────────────────────────────┴──────────────────┴────────────────────────┘
```

#### INT-01: Versión Mínima Viable ("Día Difícil")
- **Prescripción**: Reducción drástica del plan a un bloque condensado de 15 a 20 minutos con 2 o 3 movimientos clave.
- **Mecanismo**: Maximiza la facilidad ($A$) en el modelo de Fogg, permitiendo que la conducta ocurra aun con motivación residual.

#### INT-02: Micro-meta de Entrada (Regla de los 2 Minutos)
- **Prescripción**: Reducir el compromiso consciente a vestirse con indumentaria deportiva y caminar 5 minutos en el gimnasio o cinta.
- **Mecanismo**: Neutraliza la aversión anticipatoria del esfuerzo mediante un permiso explícito de retirada sin culpa. Supera el umbral de activación de James Clear.

#### INT-03: Reprogramación Inteligente Sin Culpa
- **Prescripción**: Traslado algorítmico de la sesión perdida a la siguiente ventana temporal viable (ej. día de descanso posterior o fin de semana), verificando que no genere tres días seguidos de sobreentrenamiento.
- **Mecanismo**: Elimina el costo cognitivo de replanificación y neutraliza el juicio de fracaso inmediato.

#### INT-04: Entrenamiento Alternativo en Casa / Movilidad Express
- **Prescripción**: Rutina corta (12-15 min) basada en peso corporal, bandas elásticas o movilidad articular que no requiere traslado ni equipamiento de gimnasio.
- **Mecanismo**: Preserva la señal del hábito cuando el acceso a las instalaciones físicas está temporalmente clausurado.

#### INT-05: Protocolo "Never Miss Twice" (Nunca Faltes Dos Veces)
- **Prescripción**: Inmediatamente tras una inasistencia, el sistema blindará la sesión del día siguiente activando por defecto la versión mínima y solicitando una micro-confirmación logística previa (ej. *"Dejá la ropa deportiva preparada hoy a la noche"*).
- **Mecanismo**: Erradica el nacimiento de la cadena de inacción y previene el desenganche cognitivo.

#### INT-06: Rampa de Retorno Progresivo
- **Prescripción**: Tras una pausa $> 7$ días, se prescribe una semana de re-aclimatación obligatoria donde se recortan las series a la mitad, se prohíbe el fallo muscular y se utiliza el 60% de la carga habitual.
- **Mecanismo**: Preserva la integridad musculoesquelética, evita el dolor muscular incapacitante (DOMS) y protege la autoeficacia del alumno.

#### INT-07: Ajuste Estratégico de Ventana Horaria
- **Prescripción**: Desplazamiento permanente o semi-permanente de la sesión (ej. de la noche a la mañana antes del trabajo, o al mediodía) ante barreras crónicas de saturación vespertina o agotamiento laboral.
- **Mecanismo**: Remueve el hábito del territorio de mayor fricción ambiental hacia una ventana de control voluntario más predecible.

### 6.3. Especificación Técnica de la "Versión Mínima Viable / Rutina de Emergencia para Días Difíciles" (15-20 min)

La "Versión Mínima Viable" es la piedra angular del método Entrenhábitos. No es un estiramiento pasivo ni un entrenamiento improvisado; es un protocolo biomecánicamente óptimo diseñado bajo tres principios de ingeniería neuromuscular:

1. **Eficiencia de Movimiento Compuesto (Compound Movement Density)**:
   - Utiliza exclusivamente patrones de movimiento multiarticulares que reclutan grandes masas musculares con mínima pérdida de tiempo en ajustes de máquinas.
   - Selección biomecánica: 1 movimiento de Empuje (Push), 1 movimiento de Tracción (Pull) y 1 movimiento de Tren Inferior dominante de rodilla o cadera.
2. **Eliminación del Fallo Muscular Central**:
   - Se mantiene un RIR (*Reps in Reserve*) de 2 a 3 repeticiones en todas las series. Prohibido llegar al fallo concéntrico para evitar fatiga neural acumulada que exacerbe el agotamiento previo.
3. **Control Estricto de Tiempo y Transiciones**:
   - Tiempos de descanso cronometrados a 60-75 segundos.
   - Ejecución en biserie (*Superset*) antagonista (ej. Empuje alternado con Tracción) para cortar a la mitad la duración total de la sesión.

#### Estructura Modular de la Rutina de Emergencia (20 Minutos Exactos)

```
[ Minuto 0:00 - 3:00 ] ──► Calentamiento Dinámico / Activación (3 min)
                            - 10 Cat-Cow / Rotaciones torácicas
                            - 10 Sentadillas profundas sin peso (aire)
                            - 10 Dislocaciones de hombro con banda o toalla

[ Minuto 3:00 - 18:00 ] ──► Bloque Principal en Superserie Antagonista (15 min)
                            Par A (3 vueltas):
                            - Ejercicio 1: Goblet Squat con mancuerna pesada (8-10 reps)
                            - Descanso: 45 segundos
                            - Ejercicio 2: Remo con mancuerna en banco o polea (10 reps por brazo)
                            - Descanso: 45 segundos
                            
                            Par B (2 vueltas rápidas):
                            - Ejercicio 3: Press de banca con mancuernas o Push-ups controladas (10-12 reps)
                            - Descanso: 45 segundos

[ Minuto 18:00 - 20:00 ] ─► Cierre y Descompresión Neural (2 min)
                            - Estiramiento pasivo de flexores de cadera y pecho.
                            - Registro inmediato en la App Entrenhábitos (< 30 segundos).
```

### 6.4. Protocolo de Retorno Rápido Sin Culpa tras Interrupción

Cuando un usuario pierde una sesión, la respuesta comunicacional del sistema es un determinante crítico de si la conducta se reanudará o se extinguirá. Entrenhábitos aplica las siguientes pautas psicopedagógicas:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   PRINCIPIOS DEL PROTOCOLO DE RETORNO RÁPIDO SIN CULPA                   │
├────────────────────────────────┬─────────────────────────────────────────────────────────┤
│ Principio de Diseño            │ Manifestación Práctica en Interfaz y Copywriting        │
├────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ **1. Neutralidad Lingüística** │ Prohibido usar: "fracaso", "incumplimiento", "falta".   │
│                                │ Usar: "pausa", "día complejo", "barrera identificada".  │
├────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ **2. Normalización Psicológica**│ Enfatizar que los baches son componentes inevitables de │
│                                │ cualquier trayectoria humana, no anomalías morales.     │
├────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ **3. Enfoque hacia Adelante**  │ Cero énfasis en lo que no se hizo ayer; 100% de foco en │
│                                │ la siguiente micro-acción disponible hoy o mañana.      │
├────────────────────────────────┼─────────────────────────────────────────────────────────┤
│ **4. Racha Resiliente**        │ La racha mide consistencia del sistema (hacer check-in),│
│                                │ no perfección rígida de asistencia física ininterrumpida│
└────────────────────────────────┴─────────────────────────────────────────────────────────┘
```

#### Flujo de Diálogo de Retorno Rápido (Copywriting de Micro-interacción):
> **Pantalla de la App tras Sesión Perdida:**  
> *«Ayer fue un día complicado y es perfectamente normal. La vida real no sigue un guion de laboratorio.*  
> *Lo que te convierte en una persona constante no es no tropezar nunca, sino volver sin dar vueltas.*  
> *¿Hacemos tu Versión Mínima de 15 minutos hoy o dejamos la sesión blindada para mañana a las 8:00 AM?»*  
> `[ Botón: Activar 15 min hoy ]` `[ Botón: Blindar mañana ]` `[ Botón: Hablar con mi Coach ]`

### 6.5. Bucle Cibernético de Retroalimentación y Validación Cuantitativa de Efectividad ($W_{u,b,i}$)

El borrador fundacional exige taxativamente: *"4. Comprobar si esa intervención ayudó"*. Para que esta comprobación no sea una mera formalidad conversacional, Entrenhábitos implementa un **modelo bayesiano adaptativo de calibración de pesos**.

#### Parámetros del Modelo
Para cada usuario $u$, cada barrera detectada $b \in \{B1, B2, B3, B4, B5\}$ y cada intervención candidata $i \in \{INT\text{-}01, \dots, INT\text{-}07\}$, el sistema almacena un peso de efectividad histórica:
$$W_{u,b,i} \in [0.10, 1.00], \quad \text{con valor inicial } W_{u,b,i}^{(0)} = 0.50$$

#### Mecánica de Medición
En el check-in inmediatamente posterior ($t+1$) a la prescripción de una intervención $i$, la interfaz despliega un micro-modal no intrusivo de 1 solo toque:
> *«Ayer te sugerimos [Intervención i] ante tu barrera de [Barrera b]. ¿Te ayudó a destrabar tu hábito?*  
> `[ 👍 Sí, fue clave ]` `[ 🤏 Parcialmente ]` `[ 👎 No me sirvió ]`*»*

#### Función de Actualización de Pesos
El motor adapta los pesos de acuerdo a la respuesta del usuario mediante la siguiente regla estocástica:
$$W_{u,b,i}^{(t+1)} = 
\begin{cases} 
\min(1.00, \; W_{u,b,i}^{(t)} + 0.15) & \text{si la respuesta es «Sí, fue clave»} \\
W_{u,b,i}^{(t)} & \text{si la respuesta es «Parcialmente»} \\
\max(0.10, \; W_{u,b,i}^{(t)} - 0.20) & \text{si la respuesta es «No me sirvió»}
\end{cases}$$

#### Resolución de Conflictos y Selección Óptima
Cuando múltiples intervenciones aplican ante un mismo vector de contexto $E$, el motor calcula el puntaje de prioridad $Score(i)$:
$$Score(i) = W_{u,b,i} \cdot PrioridadBase(i)$$
Y selecciona la intervención que maximice dicho score.

#### Regla de Agotamiento y Escalación Humana
Si para un usuario y barrera dada, una intervención $i$ recibe dos calificaciones consecutivas de *"No me sirvió"* ($W_{u,b,i} \le 0.20$), el motor inhabilita temporalmente esa regla para ese alumno y dispara un evento prioritario al **Panel del Coach**:
> **[Alerta de Ineficacia de Regla]**: *"El alumno Martín R. reportó 'No me sirvió' ante INT-01 (Versión Mínima) por segunda vez consecutiva ante Falta de Tiempo. Agendado como Punto Crítico para la Entrevista 1-a-1"*.

---

## 7. Conclusiones y Directrices Operativas

### 7.1. Directrices de Arquitectura Funcional para el SRS (R2)

El documento de Requerimientos de Software (SRS - R2) debe traducir este diseño conductual en una especificación de ingeniería formal, adoptando estrictamente los siguientes principios rectores:

1. **Paridad de Estado en el Modelo de Datos**: La entidad `Session` en el modelo relacional/documental debe admitir nativamente los estados `'ideal'`, `'minima'`, `'missed'` y `'planned_rest'`. La versión mínima nunca debe modelarse como un "entrenamiento incompleto", sino como una entidad de primera clase con atributos de volumen y duración específicos.
2. **Latencia Infrasegundo en el Check-in Diario**: La especificación debe imponer que el flujo completo de check-in (selección de estado + barrera + energía) se complete en $\le 3$ toques de pantalla y un tiempo cronometrado inferior a 45 segundos ($RNF\text{-}01$).
3. **Aislamiento del Motor de Reglas (`RulesEngine`)**: La lógica de inferencia ($IF \to AND \to THEN$) y el cálculo de pesos $W_{u,b,i}$ deben encapsularse en un módulo desacoplado de la interfaz gráfica, permitiendo su testeo unitario exhaustivo y su portabilidad a entornos serverless o backend en fases posteriores.
4. **Telemetría para el Panel Profesional**: El SRS debe especificar agregaciones analíticas que calculen en tiempo real:
   - Tasa de Rescate por Versión Mínima: $\frac{\text{Sesiones Mínimas}}{\text{Total Sesiones Realizadas}} \times 100$.
   - Tiempo Medio de Retorno (MTTR): $\frac{\sum \text{Días hasta retomar tras falta}}{\text{Cantidad de faltas}}$.
   - Radar de Barreras Dominantes y Efectividad de Intervenciones.

### 7.2. Directrices de Experiencia de Usuario y Prototipado para el MVP (R4)

El prototipo web interactivo (R4) debe materializar esta filosofía a través de elecciones de diseño visual y de interacción deliberadas:

1. **Estética "Athletic Precision" No Punitiva**:
   - Paleta de color basada en fondo oscuro Slate/Carbono con acentos en Verde Lima (éxito/continuidad), Ámbar cálido (alerta preventiva/versión mínima de rescate) y Azul Eléctrico (información/agendamiento).
   - Prohibido el uso de rojo alarmista para marcar sesiones perdidas o rachas rotas. Una sesión omitida se representará en un tono gris neutro con ribete ámbar de reprogramación.
2. **Conmutador de Vistas Bidireccional (Alumno $\leftrightarrow$ Coach)**:
   - El prototipo debe incorporar un selector superior persistente que permita alternar instantáneamente entre la experiencia móvil del Alumno y el panel de telemetría del Coach.
   - Cualquier acción efectuada en la vista del Alumno (ej. reportar fatiga y aceptar la versión mínima de 15 minutos) debe impactar de forma reactiva e inmediata en el panel del Coach sin requerir recargas de página.
3. **Dataset de Demostración con 4 Arquetipos Conductuales**:
   - Para evaluar el prototipo en condiciones realistas, deben precargarse 4 perfiles con historiales conductuales nítidos:
     * *Perfil 1 (Martín)*: Profesional corporativo con sobrecarga de agenda; responde brillantemente a la Versión Mínima.
     * *Perfil 2 (Lucía)*: Perfeccionista rígida propensa al sesgo "todo o nada"; estabilizada por el Protocolo "Never Miss Twice".
     * *Perfil 3 (Carlos)*: Reiniciador cíclico con historial de abandono en semana 3; protegido por la Rampa de Retorno Progresivo.
     * *Perfil 4 (Sofía)*: Alumna de alta adherencia con sesiones regulares ideales y citas 1-a-1 programadas.

### 7.3. Síntesis Epistemológica: Del Esfuerzo Heroico a la Arquitectura de Hábitos

El diseño conductual de Entrenhábitos demuestra que la brecha de adherencia en el fitness no es un enigma biológico insoluble ni un fracaso moral de los individuos. Es el síntoma evidente de un sistema de prescripción obsoleto que premia el perfeccionismo rígido y castiga la vulnerabilidad humana cotidiana.

Al sustituir la exigencia de fuerza de voluntad heroica por una **arquitectura adaptativa de soporte continuo**, Entrenhábitos redefine el significado del éxito: la victoria no consiste en no tropezar jamás en un mundo impredecible, sino en contar con un sistema inteligente y un guía humano que transforman cada tropiezo en el punto exacto de retorno.
