## 2026-10-22T02:49:54Z
Tu identidad: Eres el Worker Desarrollador Frontend Lead para Entrenhábitos (Milestone M4).
Tu directorio de trabajo exclusivo es: `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\worker_m4`

Debes leer minuciosamente:
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\ORIGINAL_REQUEST.md` (Lectura OBLIGATORIA)
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\Borrador Marca Personal Entrenhábitos.pdf`
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\orchestrator_1\PROJECT.md`
- Informes de relevamiento:
  - `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\spec_miner_survey_1\spec_analysis.md`
  - `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\explorer_survey_1\behavioral_and_reqs_survey.md`
  - `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\.agents\teamwork\explorer_survey_2\tech_and_pm_survey.md`

Propiedad exclusiva de archivos a implementar:
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\index.html`
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\css\styles.css`
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\js\app.js`
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\js\store.js`
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\js\rules_engine.js`
- `c:\Users\lauta\Proyectos\PROYECTO ENTRENHABITOS\js\demo_data.js`

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Instrucciones para implementar el Prototipo Web Interactivo R4:
El prototipo debe ser 100% autocontenido, ejecutable directamente en el navegador abriendo `index.html` (o mediante servidor local), moderno, responsivo y sin dependencias externas pesadas que puedan fallar sin conexión a internet.

Características requeridas:
1. **Diseño Visual "Athletic Precision"**:
   - Tema moderno oscuro (Slate #0f172a, #1e293b) con acentos verde lima de alta energía (#84cc16 / #22c55e), ámbar para alertas (#f59e0b) y coral para barreras (#ef4444).
   - Componentes UI limpios: tarjetas, insignias, botones táctiles, selectores rápidos, modal de agenda, barras de progreso y racha.
2. **Selector de Roles y Perfiles**:
   - Barra superior que permite alternar instantáneamente entre la **Vista Alumno** y la **Vista Panel Profesional (Coach)**.
   - Selector de perfiles demo precargados (4 perfiles arquetípicos: Martín - Principiante sobreexigido; Lucía - Profesional con falta de tiempo; Carlos - Historial de abandono por fatiga/estrés; Sofía - Vuelta progresiva tras pausa) y botón "Reiniciar Datos Demo".
3. **Vista Alumno**:
   - **Onboarding / Evaluación Inicial**: Cuestionario interactivo con cálculo en tiempo real de perfil de adherencia e hipótesis de barreras.
   - **Plan Semanal Realista**: Visualización clara de los días de entrenamiento mostrando explícitamente para cada sesión su **Versión Ideal (60 min)** y su **Versión Mínima ("Día Difícil", 15-20 min)**.
   - **Registro Breve Diario (<1 min)**: Modal o tarjeta de check-in con botones rápidos para registrar si entrenó (Ideal o Versión Mínima) o si no entrenó, selector de barrera detectada (Falta de tiempo, Baja energía, Cambio de rutina, Desmotivación, etc.) y nivel de dificultad percibida (1 a 5).
   - **Motor de Recomendaciones Adaptativas en Vivo**: Ejecución inmediata de la inferencia ante el check-in, mostrando en pantalla la intervención adaptativa recomendada con su justificación y botones interactivos para calificar si ayudó ("¿Te sirvió esta sugerencia? Sí / No").
   - **Informe de Progreso**: Métricas visuales de continuidad, sesiones ideales vs mínimas, tasa de salvataje, tiempo hasta retomar, barreras frecuentes y **botón interactivo para agendar sesión 1-a-1 con el coach** con datos del alumno precargados y confirmación.
4. **Vista Panel Profesional (Coach)**:
   - Dashboard de seguimiento de la cohorte de asesorados con tarjetas de resumen y tabla de estado.
   - Semáforos de riesgo de abandono (Verde = Adherencia alta, Amarillo = En riesgo, Rojo = Abandono inminente / Desconectado).
   - Métricas agregadas: sesiones previstas vs realizadas (ideales vs mínimas), tasa de uso de versión mínima.
   - Ficha detallada de asesorado con historial de check-ins, barreras frecuentes y efectividad de intervenciones automáticas.
   - Generador automático de **Puntos Sugeridos para la Entrevista 1-a-1** basados en las barreras no resueltas y el patrón del alumno.
5. **Store Reactivo y Sincronización en Tiempo Real (`store.js`)**:
   - Gestión de estado basada en `LocalStorage` con despacho de eventos `CustomEvent('entrenhabitos:state-updated')` y listener de `window.addEventListener('storage')`.
   - Cualquier acción realizada en la Vista Alumno (hacer un check-in, reportar barrera, agendar sesión) actualiza el estado de inmediato y se refleja reactivamente en el Panel Coach y en el Informe de Progreso sin necesidad de recargar la página.
6. **Motor de Reglas Modular (`rules_engine.js`)**:
   - Implementa de manera fidedigna las reglas de decisión diagnóstica e inferencia descritas en el SRS, evaluando el contexto actual e historial del alumno.
