/**
 * Entrenh?bitos - Bundle Autocontenido compatible con file:// y http://
 */
(function() {

// === js/demo_data.js ===
/**
 * Entrenhábitos - Catálogo de Datos Semilla y Taxonomía Conductual
 * Modelado para R4 (Prototipo Web Interactivo)
 */
const BARRIERS_CATALOG = {
  B1_TIME: {
    id: 'B1_TIME',
    name: 'Falta de Tiempo / Agenda Saturada',
    family: 'Temporal',
    icon: '⏰',
    description: 'Reuniones extendidas, jornadas laborales largas o imprevistos de agenda.',
    typicalImpact: 'Sesión omitida por creencia de que se necesita 1 hora libre completa.'
  },
  B2_ENERGY: {
    id: 'B2_ENERGY',
    name: 'Baja Energía / Agotamiento Mental',
    family: 'Biológica / Energética',
    icon: '🔋',
    description: 'Cansancio acumulado, mal descanso nocturno o fatiga cognitiva extrema.',
    typicalImpact: 'Incapacidad de superar la inercia estática para iniciar la rutina.'
  },
  B3_ROUTINE_DISRUPTION: {
    id: 'B3_ROUTINE_DISRUPTION',
    name: 'Cambio de Rutina / Viaje / Imprevisto',
    family: 'Logística / Contextual',
    icon: '🌪️',
    description: 'Viajes laborales, mudanzas, días feriados o gimnasio habitual cerrado.',
    typicalImpact: 'Ruptura del anclaje espacial y horario habitual.'
  },
  B4_LOGISTICS: {
    id: 'B4_LOGISTICS',
    name: 'Fricción Logística / Gym Colmado / Clima',
    family: 'Operativa',
    icon: '🚗',
    description: 'Gimnasio desbordado en hora pico, lluvia torrencial, distancia o tráfico.',
    typicalImpact: 'Aversión al estrés adicional del entorno que frena la salida.'
  },
  B5_GUILT_ALL_OR_NOTHING: {
    id: 'B5_GUILT_ALL_OR_NOTHING',
    name: 'Desmotivación / Culpa ("Todo o Nada")',
    family: 'Emocional / Volitiva',
    icon: '🧠',
    description: 'Sentimiento de haber "arruinado la semana" tras una sesión perdida.',
    typicalImpact: 'Efecto "What-The-Hell": abandono total tras un pequeño desliz.'
  }
};
const INTERVENTIONS_CATALOG = {
  INT_01: {
    id: 'INT_01',
    code: 'INT-01',
    title: 'Versión Mínima ("Día Difícil")',
    durationMin: 18,
    actionType: 'activate_minimal_version',
    badge: 'Rescate de Hábito',
    description: 'Realizá 2 o 3 ejercicios multiarticulares clave a ritmo moderado. Tu único objetivo hoy es preservar la identidad de quien no abandona.',
    details: [
      '2 series de Sentadillas en Copa (Goblet Squat) o Prensa (10-12 reps)',
      '2 series de Remo con mancuerna o Jalón al Pecho (10-12 reps)',
      '1 serie de Plancha abdominal (45 segundos)'
    ],
    rationale: 'Fogg Behavior Model: Al caer la motivación o el tiempo, bajamos drásticamente la dificultad para cruzar la línea de acción.'
  },
  INT_02: {
    id: 'INT_02',
    code: 'INT-02',
    title: 'Micro-meta de Entrada (Regla de los 2 Minutos)',
    durationMin: 10,
    actionType: 'entry_micrometa',
    badge: 'Activación Inmediata',
    description: 'Compromiso exclusivo de ponerte la ropa deportiva, llegar al gimnasio y hacer 5-10 minutos de caminata suave. Tenés permiso explícito de retirarte luego si persiste el agotamiento.',
    details: [
      'Ponerse ropa deportiva sin negociar',
      'Trasladarse al gimnasio / espacio de entreno',
      '5 min de caminata o movilidad suave articular',
      'Decisión libre: ¿seguís 10 min más o te volvés a descansar cumpliendo la micro-meta?'
    ],
    rationale: 'Hábitos Atómicos: Superar la inercia estática de inicio. El 80% de las veces, una vez en movimiento, se continúa.'
  },
  INT_03: {
    id: 'INT_03',
    code: 'INT-03',
    title: 'Reprogramación Inteligente Sin Culpa',
    durationMin: 0,
    actionType: 'smart_reschedule',
    badge: 'Ajuste de Calendario',
    description: 'Reubicamos esta sesión en la próxima ventana disponible de tu semana sin sobrecargar días consecutivos y sin deudas emocionales.',
    details: [
      'Mover la sesión al día siguiente o al fin de semana',
      'No intentar "compensar" duplicando el entrenamiento',
      'Proteger la hidratación y descanso el resto del día'
    ],
    rationale: 'Cognitivo-Conductual: Tratar el desvío como un dato de calibración de agenda, no como una falta moral.'
  },
  INT_04: {
    id: 'INT_04',
    code: 'INT_04',
    title: 'Entrenamiento Alternativo en Casa / Movilidad Express',
    durationMin: 15,
    actionType: 'home_mobility_express',
    badge: 'Cero Fricción de Traslado',
    description: 'Circuito con peso corporal en el living de tu casa o habitación de hotel. No requiere máquinas ni traslado.',
    details: [
      '3 rondas: 12 Sentadillas al aire + 10 Flexiones en pared/suelo + 15 Puente de glúteos',
      '3 minutos de estiramiento suave de columna y cadera',
      'Respiración diafragmática para bajar cortisol'
    ],
    rationale: 'Mantiene el disparador del hábito activo eliminando la fricción logística de transporte y equipamiento.'
  },
  INT_05: {
    id: 'INT_05',
    code: 'INT-05',
    title: 'Protocolo "Never Miss Twice" (Blindaje Próxima Sesión)',
    durationMin: 5,
    actionType: 'never_miss_twice',
    badge: 'Protección de Cadena',
    description: 'Ayer no se pudo y es parte de la vida. Hoy protegemos la regla de oro: nunca fallar dos veces seguidas. Preparamos la mochila y fijamos la hora innegociable.',
    details: [
      'Dejar la ropa deportiva lista hoy mismo a la vista',
      'Bloquear 30 minutos inamovibles en el calendario',
      'Compromiso de hacer al menos la versión mínima mañana'
    ],
    rationale: 'James Clear: Un fallo es un accidente, dos fallos consecutivos es el inicio de un nuevo hábito de abandono.'
  },
  INT_06: {
    id: 'INT_06',
    code: 'INT-06',
    title: 'Rampa de Retorno Progresivo (Anti-Agujetas)',
    durationMin: 25,
    actionType: 'progressive_return_ramp',
    badge: 'Reinserción Segura',
    description: 'Tras más de 7 días de pausa, volver a la misma intensidad genera dolor muscular extremo (DOMS) y nuevo abandono. Entrenamos al 60% de volumen esta semana.',
    details: [
      'Reducción de series a la mitad (2 series por ejercicio)',
      'Dejar 4 repeticiones en reserva (RIR 4, lejos del fallo)',
      'Priorizar la fluidez articular sobre el tonelaje'
    ],
    rationale: 'Fisiología y Conducta: Evitar la aversión al dolor muscular desmedido que sabotea la reanudación del hábito.'
  },
  INT_07: {
    id: 'INT_07',
    code: 'INT-07',
    title: 'Ventana Horaria de Menor Fricción',
    durationMin: 0,
    actionType: 'schedule_window_shift',
    badge: 'Optimización de Contexto',
    description: 'Cambiar el turno del entrenamiento de la tarde/noche (hora pico, cansancio acumulado) a la mañana o mediodía.',
    details: [
      'Probar sesión matutina de 30 min antes de iniciar la jornada',
      'O aprovechar la pausa de almuerzo para una rutina express cerca del trabajo'
    ],
    rationale: 'Arquitectura de Decisiones: Eludir la pérdida de fuerza de voluntad por fatiga de decisiones vespertina.'
  }
};
const ARCHETYPES_CATALOG = {
  PERFECCIONISTA: {
    name: 'Perfeccionista / Todo o Nada',
    shortDesc: 'Exceso de exigencia inicial y susceptibilidad a la culpa tras fallos.',
    defaultFrequency: 3,
    riskFactor: 'Abandono por desmoralización ante cualquier desvío del plan ideal.',
    keyStrategy: 'Validación obligatoria de la Versión Mínima como éxito total.'
  },
  FATIGA_COGNITIVA: {
    name: 'Fatiga Cognitiva / Agotamiento Mental',
    shortDesc: 'Jornadas profesionales intensas con batería mental agotada al atardecer.',
    defaultFrequency: 3,
    riskFactor: 'Incapacidad de arrancar tras un día laboral demandante.',
    keyStrategy: 'Micro-metas de entrada y rutinas en casa sin necesidad de traslado.'
  },
  HORARIOS_CAOTICOS: {
    name: 'Horarios Caóticos / Turnos Rotativos',
    shortDesc: 'Imprevistos continuos de guardias, viajes o entregas de proyectos.',
    defaultFrequency: 3,
    riskFactor: 'Desconexión por imposibilidad de sostener días fijos preestablecidos.',
    keyStrategy: 'Flexibilidad adaptativa, semanas de contingencia y rescate dinámico.'
  },
  REINICIADOR_CICLICO: {
    name: 'Reiniciador Cíclico / Efecto Yo-Yo',
    shortDesc: 'Múltiples arranques con gran entusiasmo seguidos de renuncia en semana 3.',
    defaultFrequency: 2,
    riskFactor: 'Sobreentrenamiento temprano, dolor muscular severo y decepción.',
    keyStrategy: 'Rampa de retorno progresivo y freno de metas hiper-exigentes.'
  }
};
const INITIAL_PROFILES = [
  {
    id: 'alumno_martin',
    nombre: 'Martín Rossi',
    edad: 34,
    profesion: 'Abogado Corporativo',
    avatar: '👨‍💼',
    arquetipo: 'Perfeccionista / Todo o Nada',
    alertaRiesgo: 'amarillo',
    scoreAdherencia: 82,
    rachaActualSemanas: 4,
    mttrDias: 1.2,
    tasaSalvatajeMinima: 40,
    hipotesis: 'Fuerte autoexigencia inicial. Considera que menos de 60 minutos "no vale la pena". Excelente respuesta demostrada a la Versión Mínima de 20 min cuando se le encuadra como preservación de identidad.',
    objetivos: 'Hipertrofia general, salud cardiovascular y desconexión mental tras el trabajo.',
    planSemanal: {
      frecuenciaObjetivo: 4,
      dias: [
        {
          dia: 'Lunes',
          nombreSesion: 'Fuerza Torso Superior',
          ideal: {
            titulo: 'Fuerza Torso Superior (60 min)',
            duracionMin: 60,
            ejercicios: [
              'Press Banca con Barra - 4x8',
              'Remo con Barra - 4x10',
              'Press Militar con Mancuernas - 3x10',
              'Jalón al Pecho - 3x12',
              'Fondos en Paralelas / Elevaciones Laterales - 3x12'
            ]
          },
          minima: {
            titulo: 'Básicos Torso ("Día Difícil", 20 min)',
            duracionMin: 20,
            ejercicios: [
              'Press de Banca con Mancuernas - 2x10',
              'Remo en Polea Baja - 2x10',
              'Elevaciones Laterales - 2x15'
            ]
          }
        },
        {
          dia: 'Miércoles',
          nombreSesion: 'Fuerza y Potencia Pierna',
          ideal: {
            titulo: 'Fuerza Pierna Completa (60 min)',
            duracionMin: 60,
            ejercicios: [
              'Sentadilla Trasera con Barra - 4x8',
              'Prensa Inclinada - 3x12',
              'Peso Muerto Rumano - 4x10',
              'Curl Femoral Tumbado - 3x12',
              'Elevación de Talones en Máquina - 4x15'
            ]
          },
          minima: {
            titulo: 'Pierna Express ("Día Difícil", 20 min)',
            duracionMin: 20,
            ejercicios: [
              'Sentadillas en Copa (Goblet) con Mancuerna - 2x12',
              'Peso Muerto Rumano con Mancuernas - 2x10',
              'Zancadas Estáticas - 2x10 por pierna'
            ]
          }
        },
        {
          dia: 'Viernes',
          nombreSesion: 'Full Body Funcional',
          ideal: {
            titulo: 'Full Body Fuerza y Resistencia (60 min)',
            duracionMin: 60,
            ejercicios: [
              'Peso Muerto Convencional - 4x6',
              'Press Inclinado con Mancuernas - 3x10',
              'Dominadas Asistidas o Jalón - 3x10',
              'Zancadas Caminando - 3x12',
              'Plancha Abdominal con Peso - 3x45s'
            ]
          },
          minima: {
            titulo: 'Circuito 2 Ejercicios ("Día Difícil", 15 min)',
            duracionMin: 15,
            ejercicios: [
              'Superserie: Prensa de Piernas (2x12) + Jalón al Pecho (2x10)',
              '1 minuto de Plancha final'
            ]
          }
        },
        {
          dia: 'Sábado',
          nombreSesion: 'Acondicionamiento y Core',
          ideal: {
            titulo: 'Acondicionamiento y Recuperación Activa (45 min)',
            duracionMin: 45,
            ejercicios: [
              'Remoergómetro / Bici estática - 20 min intervalos suaves',
              'Circuito de Core (Abwheel, Plancha Lateral, Deadbug) - 3 rondas',
              'Movilidad de cadera y hombros - 10 min'
            ]
          },
          minima: {
            titulo: 'Caminata Rápida y Movilidad (20 min)',
            duracionMin: 20,
            ejercicios: [
              'Caminata vigorosa al aire libre o cinta - 15 min',
              'Movilidad articular suave - 5 min'
            ]
          }
        }
      ]
    },
    historialCheckins: [
      {
        id: 'chk_m1',
        fecha: '2026-10-14',
        estado: 'ideal',
        barrera: null,
        dificultad: 2,
        energia: 4,
        tiempoRegistroSeg: 18,
        tiempoRealMin: 60,
        intervencion: null,
        feedbackIntervencion: null
      },
      {
        id: 'chk_m2',
        fecha: '2026-10-16',
        estado: 'minima',
        barrera: 'B1_TIME',
        dificultad: 4,
        energia: 3,
        tiempoRegistroSeg: 25,
        tiempoRealMin: 20,
        intervencion: 'INT_01',
        feedbackIntervencion: 'si'
      },
      {
        id: 'chk_m3',
        fecha: '2026-10-18',
        estado: 'ideal',
        barrera: null,
        dificultad: 3,
        energia: 4,
        tiempoRegistroSeg: 15,
        tiempoRealMin: 55,
        intervencion: null,
        feedbackIntervencion: null
      },
      {
        id: 'chk_m4',
        fecha: '2026-10-19',
        estado: 'missed',
        barrera: 'B5_GUILT_ALL_OR_NOTHING',
        dificultad: 5,
        energia: 2,
        tiempoRegistroSeg: 32,
        tiempoRealMin: 0,
        intervencion: 'INT_05',
        feedbackIntervencion: 'si'
      },
      {
        id: 'chk_m5',
        fecha: '2026-10-21',
        estado: 'minima',
        barrera: 'B1_TIME',
        dificultad: 3,
        energia: 3,
        tiempoRegistroSeg: 20,
        tiempoRealMin: 18,
        intervencion: 'INT_01',
        feedbackIntervencion: 'si'
      }
    ],
    pesosIntervenciones: {
      'B1_TIME:INT_01': 0.85,
      'B5_GUILT_ALL_OR_NOTHING:INT_05': 0.80
    }
  },
  {
    id: 'alumno_lucia',
    nombre: 'Lucía Méndez',
    edad: 29,
    profesion: 'Product Manager Tech',
    avatar: '👩‍💻',
    arquetipo: 'Fatiga Cognitiva / Agotamiento Mental',
    alertaRiesgo: 'verde',
    scoreAdherencia: 90,
    rachaActualSemanas: 6,
    mttrDias: 1.0,
    tasaSalvatajeMinima: 25,
    hipotesis: 'Agotamiento mental agudo pasadas las 19 hs. La mayor fricción es trasladarse al gimnasio y cambiarse. La intervención de movilidad/fuerza de 15 min en casa le permite sostener el hábito con 90% de éxito.',
    objetivos: 'Tonificación, manejo del estrés laboral y salud postural.',
    planSemanal: {
      frecuenciaObjetivo: 3,
      dias: [
        {
          dia: 'Martes',
          nombreSesion: 'Gimnasio Empuje y Hombros',
          ideal: {
            titulo: 'Empuje y Deltoides (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Press Banca Inclinado con Mancuernas - 3x10',
              'Press de Hombro Sentada - 3x10',
              'Fondos en Banco para Tríceps - 3x12',
              'Elevaciones Laterales - 3x15',
              'Extensiones de Tríceps en Polea - 3x12'
            ]
          },
          minima: {
            titulo: 'Flexiones y Bandas en Casa (15 min)',
            duracionMin: 15,
            ejercicios: [
              'Flexiones apoyando rodillas o en pared - 3x10',
              'Aperturas con Banda Elástica - 3x15',
              'Plancha frontal activa - 2x40s'
            ]
          }
        },
        {
          dia: 'Jueves',
          nombreSesion: 'Gimnasio Tracción y Espalda',
          ideal: {
            titulo: 'Tracción y Postura (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Jalón al Pecho Agarre Neutro - 4x10',
              'Remo Gironda en Polea - 3x12',
              'Face Pulls para deltoides posterior - 4x15',
              'Curl de Bíceps con Mancuernas - 3x12',
              'Paseo del Granjero con Mancuernas - 3x30s'
            ]
          },
          minima: {
            titulo: 'Remo con Mancuerna y Plancha en Casa (15 min)',
            duracionMin: 15,
            ejercicios: [
              'Remo a una mano con mancuerna o garrafa - 2x10 por brazo',
              'Pájaro para deltoides posterior - 2x12',
              'Plancha lateral - 2x30s por lado'
            ]
          }
        },
        {
          dia: 'Sábado',
          nombreSesion: 'Pierna y Glúteos',
          ideal: {
            titulo: 'Pierna, Cadera y Glúteo (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Hip Thrust con Barra - 4x10',
              'Prensa de Piernas Pies Altos - 3x12',
              'Sentadilla Búlgara con Mancuernas - 3x10 por pierna',
              'Abductores en Máquina - 3x15',
              'Puente de Glúteos Unilateral - 3x12'
            ]
          },
          minima: {
            titulo: 'Movilidad y Peso Corporal en Casa (20 min)',
            duracionMin: 20,
            ejercicios: [
              'Puente de glúteos en colchoneta - 3x15',
              'Sentadillas profundas sin peso - 2x15',
              'Estiramiento de psoas y cadena posterior - 5 min'
            ]
          }
        }
      ]
    },
    historialCheckins: [
      {
        id: 'chk_l1',
        fecha: '2026-10-15',
        estado: 'ideal',
        barrera: null,
        dificultad: 2,
        energia: 4,
        tiempoRegistroSeg: 22,
        tiempoRealMin: 50,
        intervencion: null,
        feedbackIntervencion: null
      },
      {
        id: 'chk_l2',
        fecha: '2026-10-17',
        estado: 'minima',
        barrera: 'B2_ENERGY',
        dificultad: 3,
        energia: 2,
        tiempoRegistroSeg: 19,
        tiempoRealMin: 15,
        intervencion: 'INT_04',
        feedbackIntervencion: 'si'
      },
      {
        id: 'chk_l3',
        fecha: '2026-10-19',
        estado: 'ideal',
        barrera: null,
        dificultad: 2,
        energia: 4,
        tiempoRegistroSeg: 17,
        tiempoRealMin: 48,
        intervencion: null,
        feedbackIntervencion: null
      },
      {
        id: 'chk_l4',
        fecha: '2026-10-21',
        estado: 'ideal',
        barrera: null,
        dificultad: 3,
        energia: 4,
        tiempoRegistroSeg: 14,
        tiempoRealMin: 52,
        intervencion: null,
        feedbackIntervencion: null
      }
    ],
    pesosIntervenciones: {
      'B2_ENERGY:INT_04': 0.90
    }
  },
  {
    id: 'alumno_carlos',
    nombre: 'Carlos Gómez',
    edad: 42,
    profesion: 'Médico de Urgencias',
    avatar: '👨‍⚕️',
    arquetipo: 'Horarios Caóticos / Turnos Rotativos',
    alertaRiesgo: 'rojo',
    scoreAdherencia: 45,
    rachaActualSemanas: 0,
    mttrDias: 4.5,
    tasaSalvatajeMinima: 0,
    hipotesis: 'Turnos nocturnos rotativos desarticulan la planificación fija. Tras 2 sesiones perdidas consecutivas aparece desconexión por vergüenza de no poder cumplir. Requiere alerta urgente del coach y reestructuración sin culpa.',
    objetivos: 'Reducción de dolor lumbar, fuerza funcional y resistencia al estrés.',
    planSemanal: {
      frecuenciaObjetivo: 3,
      dias: [
        {
          dia: 'Lunes',
          nombreSesion: 'Fuerza General Funcional',
          ideal: {
            titulo: 'Fuerza General A (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Sentadilla Goblet - 3x10',
              'Remo con Mancuerna - 3x10',
              'Press de Banca con Mancuernas - 3x10',
              'Plancha Abdominal - 3x40s'
            ]
          },
          minima: {
            titulo: 'Circuito Rápido de Emergencia (15 min)',
            duracionMin: 15,
            ejercicios: [
              '2 rondas: 10 Sentadillas + 10 Flexiones + 30s Plancha'
            ]
          }
        },
        {
          dia: 'Miércoles',
          nombreSesion: 'Fuerza General B',
          ideal: {
            titulo: 'Fuerza General B (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Peso Muerto Rumano con Mancuernas - 3x10',
              'Jalón en Polea - 3x10',
              'Press Militar con Mancuernas - 3x10',
              'Bird-Dog y Deadbug - 3 rondas'
            ]
          },
          minima: {
            titulo: 'Circuito Rápido de Emergencia (15 min)',
            duracionMin: 15,
            ejercicios: [
              '2 rondas: 10 Peso Muerto Mancuernas + 10 Jalón + 30s Core'
            ]
          }
        },
        {
          dia: 'Viernes',
          nombreSesion: 'Cardio y Movilidad Lumbar',
          ideal: {
            titulo: 'Cardio y Descompresión Lumbar (40 min)',
            duracionMin: 40,
            ejercicios: [
              'Elíptica o Cinta continua - 25 min suaves',
              'Descompresión en barra fija y estiramiento lumbar - 15 min'
            ]
          },
          minima: {
            titulo: 'Pausa Activa y Movilidad en Guardia (10 min)',
            duracionMin: 10,
            ejercicios: [
              'Movilidad de cadera y columna suave - 10 min'
            ]
          }
        }
      ]
    },
    historialCheckins: [
      {
        id: 'chk_c1',
        fecha: '2026-10-13',
        estado: 'ideal',
        barrera: null,
        dificultad: 2,
        energia: 4,
        tiempoRegistroSeg: 20,
        tiempoRealMin: 50,
        intervencion: null,
        feedbackIntervencion: null
      },
      {
        id: 'chk_c2',
        fecha: '2026-10-15',
        estado: 'missed',
        barrera: 'B3_ROUTINE_DISRUPTION',
        dificultad: 5,
        energia: 1,
        tiempoRegistroSeg: 35,
        tiempoRealMin: 0,
        intervencion: 'INT_03',
        feedbackIntervencion: 'parcial'
      },
      {
        id: 'chk_c3',
        fecha: '2026-10-17',
        estado: 'missed',
        barrera: 'B3_ROUTINE_DISRUPTION',
        dificultad: 5,
        energia: 1,
        tiempoRegistroSeg: 40,
        tiempoRealMin: 0,
        intervencion: 'INT_05',
        feedbackIntervencion: 'no'
      },
      {
        id: 'chk_c4',
        fecha: '2026-10-20',
        estado: 'missed',
        barrera: 'B5_GUILT_ALL_OR_NOTHING',
        dificultad: 5,
        energia: 1,
        tiempoRegistroSeg: 45,
        tiempoRealMin: 0,
        intervencion: 'INT_06',
        feedbackIntervencion: null
      }
    ],
    pesosIntervenciones: {
      'B3_ROUTINE_DISRUPTION:INT_03': 0.35,
      'B3_ROUTINE_DISRUPTION:INT_05': 0.25
    }
  },
  {
    id: 'alumno_sofia',
    nombre: 'Sofía Pereira',
    edad: 26,
    profesion: 'Diseñadora Gráfica Freelance',
    avatar: '🎨',
    arquetipo: 'Nuevo Ingreso / Evaluación Pendiente',
    alertaRiesgo: 'verde',
    scoreAdherencia: 0,
    rachaActualSemanas: 0,
    mttrDias: 0,
    tasaSalvatajeMinima: 0,
    hipotesis: 'Perfil nuevo listo para realizar el Onboarding y Diagnóstico Inicial interactivo en vivo.',
    objetivos: 'Iniciar entrenamiento de fuerza por primera vez de forma sustentable.',
    planSemanal: null,
    historialCheckins: [],
    pesosIntervenciones: {}
  }
];
const ONBOARDING_QUESTIONS = [
  {
    id: 'q_historial',
    title: '1. ¿Cuál es tu historial previo con el entrenamiento físico?',
    options: [
      { value: 'principiante', label: 'Nunca entrené con constancia / Principiante absoluto', score: 1 },
      { value: 'esporadico', label: 'Entrené algunos meses pero siempre terminé abandonando', score: 2 },
      { value: 'experimentado_parado', label: 'Fui deportista o constante en el pasado, pero llevo meses parado', score: 3 }
    ]
  },
  {
    id: 'q_motivo_abandono',
    title: '2. En tus intentos anteriores, ¿cuál fue la causa principal de abandono?',
    options: [
      { value: 'tiempo', label: 'Falta de tiempo por sobrecarga de trabajo / estudio', barrier: 'B1_TIME' },
      { value: 'energia', label: 'Llegaba al final del día sin energía mental ni física', barrier: 'B2_ENERGY' },
      { value: 'desmotivacion', label: 'Perdí un par de sesiones, me sentí culpable y tiré la toalla', barrier: 'B5_GUILT_ALL_OR_NOTHING' },
      { value: 'desorganizacion', label: 'Un viaje, examen o feriado rompió mi rutina y no supe reenganchar', barrier: 'B3_ROUTINE_DISRUPTION' }
    ]
  },
  {
    id: 'q_reaccion_fallo',
    title: '3. Si una semana no podés cumplir tus entrenamientos planeados, ¿qué pensás?',
    options: [
      { value: 'todo_o_nada', label: '"Ya arruiné la semana; para hacer poco o nada, arranco el próximo lunes"', archetypeHint: 'PERFECCIONISTA' },
      { value: 'agotado', label: '"Mi cuerpo no da más, debería dormir en lugar de forzarme"', archetypeHint: 'FATIGA_COGNITIVA' },
      { value: 'desborde', label: '"Mi vida es un caos imprevisto y no encaja en un plan fijo"', archetypeHint: 'HORARIOS_CAOTICOS' },
      { value: 'ciclico', label: '"Otra vez lo mismo, siempre me pasa igual a las 3 semanas"', archetypeHint: 'REINICIADOR_CICLICO' }
    ]
  },
  {
    id: 'q_disponibilidad',
    title: '4. ¿Cuántos días REALISTAS podés comprometerte a entrenar en tu peor semana?',
    options: [
      { value: '2_dias', label: '2 días fijos a la semana (Compromiso blindado)', days: 2 },
      { value: '3_dias', label: '3 días a la semana (Frecuencia estándar recomendada)', days: 3 },
      { value: '4_dias', label: '4 días a la semana (Requiere agenda disciplinada)', days: 4 }
    ]
  },
  {
    id: 'q_version_minima',
    title: '5. ¿Estarías dispuesto/a a hacer una "Versión Mínima" de 15-20 min en días difíciles?',
    options: [
      { value: 'si_clave', label: '¡Sí! Saber que con 15 min cumplo me quitaría una enorme carga de culpa', agreement: true },
      { value: 'duda', label: 'Tengo dudas de si 15 minutos realmente sirven para algo', agreement: 'skeptical' },
      { value: 'prefiere_ideal', label: 'Prefiero no ir si no puedo hacer la rutina completa de 1 hora', agreement: 'resistant' }
    ]
  }
];

// Helper to support CommonJS / Global browser window
if (typeof window !== 'undefined') {
  window.BARRIERS_CATALOG = BARRIERS_CATALOG;
  window.INTERVENTIONS_CATALOG = INTERVENTIONS_CATALOG;
  window.ARCHETYPES_CATALOG = ARCHETYPES_CATALOG;
  window.INITIAL_PROFILES = INITIAL_PROFILES;
  window.ONBOARDING_QUESTIONS = ONBOARDING_QUESTIONS;
}


// === js/rules_engine.js ===
/**
 * Entrenhábitos - Motor de Reglas Adaptativas y Diagnóstico Conductual
 * Implementación modular de reglas deterministas (COM-B, Fogg, Hábitos Atómicos, SDT)
 */
class RulesEngine {
  /**
   * Diagnostica el perfil de adherencia inicial a partir del cuestionario de Onboarding
   * @param {Object} answers Respuestas del cuestionario
   * @returns {Object} Diagnóstico con arquetipo, hipótesis, frecuencia sugerida y plan base
   */
  static diagnoseProfile(answers = {}) {
    let archetypeKey = 'PERFECCIONISTA';
    let defaultFreq = 3;

    const falloHint = answers.q_reaccion_fallo || answers.reaccionFallo;
    const causaAbandono = answers.q_motivo_abandono || answers.causaAbandono;
    const disp = answers.q_disponibilidad || answers.disponibilidad;
    const historial = answers.q_historial || answers.historial;
    const minDuda = answers.q_version_minima || answers.versionMinima;

    // Inferencia de arquetipo por respuesta directa o combinación
    if (falloHint === 'todo_o_nada' || falloHint === 'PERFECCIONISTA' || minDuda === 'prefiere_ideal' || minDuda === 'resistant') {
      archetypeKey = 'PERFECCIONISTA';
    } else if (falloHint === 'agotado' || falloHint === 'FATIGA_COGNITIVA' || causaAbandono === 'energia' || causaAbandono === 'B2_ENERGY') {
      archetypeKey = 'FATIGA_COGNITIVA';
    } else if (falloHint === 'desborde' || falloHint === 'HORARIOS_CAOTICOS' || causaAbandono === 'desorganizacion' || causaAbandono === 'B3_ROUTINE_DISRUPTION') {
      archetypeKey = 'HORARIOS_CAOTICOS';
    } else if (falloHint === 'ciclico' || falloHint === 'REINICIADOR_CICLICO' || historial === 'esporadico') {
      archetypeKey = 'REINICIADOR_CICLICO';
    } else if (causaAbandono === 'tiempo' || causaAbandono === 'B1_TIME') {
      archetypeKey = 'PERFECCIONISTA';
    }

    // Frecuencia sugerida (respetando la regla de "Piso Sostenible")
    if (disp === '2_dias' || disp === 2) {
      defaultFreq = 2;
    } else if (disp === '4_dias' || disp === 4) {
      // Si tiene historial previo o es constante permite 4, si es principiante frena en 3
      defaultFreq = (historial === 'principiante' || historial === 'esporadico') ? 3 : 4;
    } else {
      defaultFreq = 3;
    }

    const archetype = ARCHETYPES_CATALOG[archetypeKey] || ARCHETYPES_CATALOG.PERFECCIONISTA;

    // Formulación de hipótesis diagnóstica personalizada
    let hipotesis = '';
    let barreraPredominante = 'B1_TIME';

    switch (archetypeKey) {
      case 'PERFECCIONISTA':
        barreraPredominante = 'B1_TIME';
        hipotesis = 'Fuerte sesgo de todo o nada: percibe que una sesión de menos de 60 minutos carece de valor. Ante un imprevisto de tiempo, tiende a cancelar en vez de adaptar. Hipótesis: Introducir de forma obligatoria la Versión Mínima de 15-20 min como éxito total reducirá el abandono en semanas complejas en más de un 60%.';
        break;
      case 'FATIGA_COGNITIVA':
        barreraPredominante = 'B2_ENERGY';
        hipotesis = 'Agotamiento mental agudo en horarios vespertinos post-jornada laboral. La fricción principal radica en superar la inercia estática y el traslado. Hipótesis: La prescripción de la Micro-meta de Entrada (Regla 2 Min) o rutinas en casa de 15 min permitirá salvar más del 75% de las sesiones en días de baja energía.';
        break;
      case 'HORARIOS_CAOTICOS':
        barreraPredominante = 'B3_ROUTINE_DISRUPTION';
        hipotesis = 'Imprevistos laborales o familiares frecuentes que desarticulan los planes con días fijos. Hipótesis: Habilitar reprogramación flexible con un clic y rutinas de contingencia sin aparatos evitará la desconexión total ante cambios de agenda.';
        break;
      case 'REINICIADOR_CICLICO':
        barreraPredominante = 'B5_GUILT_ALL_OR_NOTHING';
        hipotesis = 'Historial de entusiasmo desmedido en las semanas 1 y 2, seguido de sobrecarga física (agujetas severas) y deserción en semana 3 o 4. Hipótesis: Poner un techo conservador a la frecuencia inicial y activar la Rampa de Retorno Progresivo estabilizará el hábito más allá de los 60 días.';
        break;
    }

    // Generar estructura del plan semanal dual según la frecuencia acordada
    const planRecomendado = this.buildDefaultPlan(defaultFreq);

    return {
      arquetipoKey: archetypeKey,
      arquetipo: archetype.name,
      shortDesc: archetype.shortDesc,
      frecuenciaRecomendada: defaultFreq,
      barreraPredominante,
      hipotesis,
      planRecomendado,
      riskFactor: archetype.riskFactor,
      keyStrategy: archetype.keyStrategy
    };
  }

  // Alias para interoperabilidad de pruebas
  static diagnosticarPerfil(answers) {
    return this.diagnoseProfile(answers);
  }

  /**
   * Construye un plan semanal dual por defecto según la frecuencia deseada
   */
  static buildDefaultPlan(frecuencia = 3) {
    if (frecuencia === 2) {
      return {
        frecuenciaObjetivo: 2,
        dias: [
          {
            dia: 'Martes',
            nombreSesion: 'Full Body Funcional A',
            ideal: {
              titulo: 'Full Body Fuerza y Movilidad (50 min)',
              duracionMin: 50,
              ejercicios: [
                'Sentadilla Goblet con Mancuerna - 3x10',
                'Press de Banca con Mancuernas - 3x10',
                'Remo con Barra o Mancuerna - 3x10',
                'Plancha Abdominal - 3x40s'
              ]
            },
            minima: {
              titulo: 'Básicos Express ("Día Difícil", 15 min)',
              duracionMin: 15,
              ejercicios: [
                'Superserie: Sentadillas Copa (2x12) + Remo Mancuerna (2x10)',
                'Plancha Frontal - 1x45s'
              ]
            }
          },
          {
            dia: 'Jueves',
            nombreSesion: 'Full Body Funcional B',
            ideal: {
              titulo: 'Full Body Tracción y Cadena Posterior (50 min)',
              duracionMin: 50,
              ejercicios: [
                'Peso Muerto Rumano - 3x10',
                'Jalón al Pecho en Polea - 3x10',
                'Press Militar con Mancuernas - 3x10',
                'Zancadas Estáticas - 3x10 por pierna'
              ]
            },
            minima: {
              titulo: 'Cadena Posterior Express ("Día Difícil", 15 min)',
              duracionMin: 15,
              ejercicios: [
                'Superserie: Peso Muerto Mancuernas (2x10) + Jalón Polea (2x10)',
                'Puente de Glúteos - 2x15'
              ]
            }
          }
        ]
      };
    }

    if (frecuencia === 4) {
      return {
        frecuenciaObjetivo: 4,
        dias: [
          {
            dia: 'Lunes',
            nombreSesion: 'Torso Fuerza',
            ideal: {
              titulo: 'Torso Superior Completo (60 min)',
              duracionMin: 60,
              ejercicios: ['Press Banca - 4x8', 'Remo con Barra - 4x10', 'Press Militar - 3x10', 'Jalón Pecho - 3x12']
            },
            minima: {
              titulo: 'Torso Rápido ("Día Difícil", 20 min)',
              duracionMin: 20,
              ejercicios: ['Press Banca Mancuernas - 2x10', 'Remo Polea Baja - 2x10', 'Elevaciones Laterales - 2x15']
            }
          },
          {
            dia: 'Miércoles',
            nombreSesion: 'Pierna Hipertrofia',
            ideal: {
              titulo: 'Pierna Completa (60 min)',
              duracionMin: 60,
              ejercicios: ['Sentadilla Trasera - 4x8', 'Prensa Inclinada - 3x12', 'Peso Muerto Rumano - 3x10', 'Curl Femoral - 3x12']
            },
            minima: {
              titulo: 'Pierna Express ("Día Difícil", 20 min)',
              duracionMin: 20,
              ejercicios: ['Sentadilla Goblet - 2x12', 'Prensa Piernas - 2x10', 'Puente Glúteos - 2x15']
            }
          },
          {
            dia: 'Viernes',
            nombreSesion: 'Full Body',
            ideal: {
              titulo: 'Full Body Funcional (55 min)',
              duracionMin: 55,
              ejercicios: ['Peso Muerto Convencional - 3x8', 'Press Inclinado - 3x10', 'Dominadas o Jalón - 3x10', 'Zancadas - 3x10']
            },
            minima: {
              titulo: 'Full Body Rescate ("Día Difícil", 15 min)',
              duracionMin: 15,
              ejercicios: ['Superserie Prensa (2x12) + Remo (2x10)', 'Plancha - 1x45s']
            }
          },
          {
            dia: 'Sábado',
            nombreSesion: 'Acondicionamiento Activo',
            ideal: {
              titulo: 'Acondicionamiento y Core (45 min)',
              duracionMin: 45,
              ejercicios: ['Cardio continuo - 25 min', 'Circuito de Core - 3 rondas', 'Movilidad articular - 10 min']
            },
            minima: {
              titulo: 'Caminata y Movilidad (20 min)',
              duracionMin: 20,
              ejercicios: ['Caminata rápida - 15 min', 'Movilidad articular - 5 min']
            }
          }
        ]
      };
    }

    // Frecuencia estándar = 3 días
    return {
      frecuenciaObjetivo: 3,
      dias: [
        {
          dia: 'Lunes',
          nombreSesion: 'Empuje y Torso',
          ideal: {
            titulo: 'Torso y Empuje (55 min)',
            duracionMin: 55,
            ejercicios: [
              'Press de Banca con Mancuernas - 4x10',
              'Remo en Polea o Mancuerna - 4x10',
              'Press Militar de Hombros - 3x10',
              'Elevaciones Laterales - 3x12',
              'Plancha Abdominal - 3x40s'
            ]
          },
          minima: {
            titulo: 'Básicos Torso ("Día Difícil", 18 min)',
            duracionMin: 18,
            ejercicios: [
              'Press con Mancuernas - 2x10',
              'Remo con Mancuerna - 2x10',
              'Elevaciones Laterales - 2x12'
            ]
          }
        },
        {
          dia: 'Miércoles',
          nombreSesion: 'Pierna y Cadera',
          ideal: {
            titulo: 'Fuerza Pierna y Glúteo (55 min)',
            duracionMin: 55,
            ejercicios: [
              'Sentadillas en Prensa o Copa - 4x10',
              'Peso Muerto Rumano con Mancuernas - 4x10',
              'Zancadas Estáticas - 3x10 por pierna',
              'Curl Femoral o Puente de Glúteos - 3x12',
              'Gemelos de Pie - 3x15'
            ]
          },
          minima: {
            titulo: 'Pierna Express ("Día Difícil", 18 min)',
            duracionMin: 18,
            ejercicios: [
              'Sentadilla Copa (Goblet) - 2x12',
              'Peso Muerto con Mancuernas - 2x10',
              'Puente de Glúteos - 2x15'
            ]
          }
        },
        {
          dia: 'Viernes',
          nombreSesion: 'Full Body Funcional',
          ideal: {
            titulo: 'Full Body y Salud Postural (50 min)',
            duracionMin: 50,
            ejercicios: [
              'Jalón al Pecho Agarre Neutro - 4x10',
              'Press Inclinado con Mancuernas - 3x10',
              'Prensa Inclinada de Piernas - 3x12',
              'Face Pulls para Hombros y Postura - 3x15',
              'Deadbug y Core - 3 rondas'
            ]
          },
          minima: {
            titulo: 'Circuito 2 Ejercicios ("Día Difícil", 15 min)',
            duracionMin: 15,
            ejercicios: [
              'Superserie: Prensa de Piernas (2x12) + Jalón en Polea (2x10)',
              'Plancha frontal activa - 1x45s'
            ]
          }
        }
      ]
    };
  }

  /**
   * Evalúa el contexto del check-in y el historial del alumno para disparar intervenciones adaptativas
   * @param {Object} checkInContext Vector de entrada del check-in
   * @param {Object} profileHistory Perfil del alumno con su historial de check-ins
   * @returns {Object} Recomendación adaptativa con regla, prioridad, justificación y acción
   */
  static evaluate(checkInContext = {}, profileHistory = {}) {
    const status = checkInContext.status || checkInContext.estado;
    const barrierId = checkInContext.barrierId || checkInContext.barrera;
    const energy = Number(checkInContext.energyLevel ?? checkInContext.energia ?? 3);
    const difficulty = Number(checkInContext.difficulty ?? checkInContext.dificultad ?? 3);
    const checkins = profileHistory.historialCheckins || profileHistory.checkins || [];

    // Calcular sesiones perdidas consecutivas recientes
    let consecutiveMisses = 0;
    for (let i = checkins.length - 1; i >= 0; i--) {
      const s = checkins[i].estado || checkins[i].status;
      if (s === 'missed' || s === 'perdida' || s === 'no_entrene') {
        consecutiveMisses++;
      } else {
        break;
      }
    }
    // Si el check-in actual es inasistencia, sumar al contador
    if (status === 'missed' || status === 'perdida' || status === 'no_entrene') {
      consecutiveMisses++;
    }

    // Calcular días sin entrenar (gap days)
    let gapDays = 0;
    if (checkins.length > 0) {
      const lastSession = checkins[checkins.length - 1];
      const lastDate = new Date(lastSession.fecha || lastSession.date);
      const currDate = new Date(checkInContext.fecha || checkInContext.date || new Date().toISOString().split('T')[0]);
      gapDays = Math.max(0, Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24)));
    }

    // Regla de celebración para sesión ideal sin barreras
    if ((status === 'ideal' || status === 'COMPLETED_IDEAL') && !barrierId) {
      return {
        ruleId: 'RULE_CELEBRATION_01',
        priority: 'low',
        type: 'celebration',
        title: '¡Sesión Ideal Completada!',
        rationale: 'Cumplimiento impecable de la rutina completa. El refuerzo positivo dopaminérgico inmediato consolida la identidad de la persona constante.',
        intervention: null,
        expectedCheck: 'Verificar en el próximo check-in si la energía se mantuvo positiva.'
      };
    }

    // Regla de celebración y refuerzo para versión mínima (¡Salvataje exitoso!)
    if (status === 'minima' || status === 'COMPLETED_MINIMAL') {
      const barrierObj = BARRIERS_CATALOG[barrierId] || { name: 'Día Complejo' };
      return {
        ruleId: 'RULE_RESCUE_CONFIRMED_01',
        priority: 'medium',
        type: 'rescue_confirmed',
        title: '¡Hábito Salvado con la Versión Mínima!',
        rationale: `Fogg Behavior Model: Ante la barrera "${barrierObj.name}", ajustaste la dificultad a 15-20 min en lugar de abandonar. 15 minutos es infinitamente superior a 0 minutos.`,
        intervention: {
          id: 'INT_01',
          code: 'INT-01',
          title: 'Versión Mínima Validada',
          actionType: 'minimal_confirmed',
          badge: 'Hábito Protegido'
        },
        expectedCheck: 'Comprobar en la próxima sesión si la persona retoma con confianza.'
      };
    }

    // REGLAS PARA SESIONES PERDIDAS O BARRERAS DECLARADAS

    // Regla R-07: Inactividad prolongada (gapDays >= 7)
    if (gapDays >= 7) {
      const intObj = INTERVENTIONS_CATALOG.INT_06;
      return {
        ruleId: 'RULE_PROT_RAMP_07',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Activación de Rampa de Retorno Progresivo',
        rationale: 'Han pasado 7 o más días desde tu último entrenamiento. Entrenar hoy al 100% causaría dolor muscular extremo (DOMS) y frustración. Prescribimos 1 semana al 60% de volumen para restaurar el hábito de forma segura.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Se completó la primera sesión suave sin dolor incapacitante?'
      };
    }

    // Regla R-06: Riesgo inminente de abandono (2 o más faltas consecutivas)
    if (consecutiveMisses >= 2) {
      const intObj = INTERVENTIONS_CATALOG.INT_05;
      return {
        ruleId: 'RULE_RECOVERY_02',
        priority: 'critical',
        type: 'coach_alert_and_intervention',
        title: 'Alerta Preventiva: Protocolo de Retorno Sin Culpa',
        rationale: 'Acumulás 2 sesiones consecutivas no realizadas. El peligro no es perder sesiones, sino caer en el ciclo de culpa y desconexión total. Blindamos tu retorno mañana en versión mínima sin compensar deudas.',
        intervention: intObj,
        coachAlert: true,
        expectedCheck: 'Verificar si el alumno reanuda en las próximas 48 horas.'
      };
    }

    // Reglas por Barrera Específica

    // 1. Barrera B1: Falta de Tiempo / Agenda Saturada
    if (barrierId === 'B1_TIME' || barrierId === 'falta_tiempo') {
      const intObj = INTERVENTIONS_CATALOG.INT_01;
      return {
        ruleId: 'RULE_TIME_01',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Activá la Versión Mínima (15-20 min)',
        rationale: 'El sesgo "todo o nada" te hace creer que necesitás 60 minutos libres. Con solo 18 minutos ejecutando 2 ejercicios básicos preservás tu hábito y salud muscular.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Te sirvió activar la versión express para no cancelar el día?'
      };
    }

    // 2. Barrera B2: Baja Energía / Cansancio Extremo
    if (barrierId === 'B2_ENERGY' || barrierId === 'baja_energia' || energy <= 2) {
      const intObj = INTERVENTIONS_CATALOG.INT_02;
      return {
        ruleId: 'RULE_ENERGY_03',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Micro-meta de Entrada (Regla 2 Min)',
        rationale: 'Cuando la motivación cae por fatiga mental, forzarse a 1 hora genera aversión. Tu único compromiso hoy es llegar al gimnasio y caminar 5-10 minutos. Tenés permiso explícito de retirarte si el cansancio persiste.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Superaste la inercia de arranque al aplicar la micro-meta?'
      };
    }

    // 3. Barrera B3: Disrupción de Rutina / Viaje / Imprevisto
    if (barrierId === 'B3_ROUTINE_DISRUPTION' || barrierId === 'cambio_rutina') {
      const intObj = INTERVENTIONS_CATALOG.INT_04;
      return {
        ruleId: 'RULE_DISRUPTION_04',
        priority: 'medium',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Rutina Express en Casa / Habitación (12-15 min)',
        rationale: 'Estás fuera de tu entorno habitual. Para no romper la señal del hábito, te proponemos un circuito de peso corporal de 15 minutos en el lugar donde estés, sin aparatos ni traslados.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Pudiste realizar la rutina de movilidad sin depender del gimnasio?'
      };
    }

    // 4. Barrera B4: Fricción Logística / Gym Colmado / Clima
    if (barrierId === 'B4_LOGISTICS' || barrierId === 'friccion_logistica') {
      const intObj = INTERVENTIONS_CATALOG.INT_07;
      return {
        ruleId: 'RULE_LOGISTICS_07',
        priority: 'medium',
        type: 'adaptive_intervention',
        title: 'Recomendación Adaptativa: Ventana de Menor Fricción o En Casa',
        rationale: 'El gimnasio saturado o las inclemencias del clima disparan el estrés antes de empezar. Sugerimos ajustar tu horario a primera hora de la mañana o realizar la versión en casa hoy.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Mejoró la adherencia al cambiar de horario o lugar?'
      };
    }

    // 5. Barrera B5: Desmotivación / Culpa ("Todo o Nada")
    if (barrierId === 'B5_GUILT_ALL_OR_NOTHING' || barrierId === 'desmotivacion') {
      const intObj = INTERVENTIONS_CATALOG.INT_05;
      return {
        ruleId: 'RULE_GUILT_05',
        priority: 'high',
        type: 'adaptive_intervention',
        title: 'Protocolo "Never Miss Twice" (Retorno Sin Culpa)',
        rationale: 'Un tropiezo no borra tu esfuerzo ni arruina tu progreso. En Entrenhábitos no buscamos perfección rígida, sino resiliencia. Bloqueamos tu sesión más cercana en versión mínima.',
        intervention: intObj,
        expectedCheck: 'Check-in en t+1: ¿Lograste volver al día siguiente sin arrastrar culpa?'
      };
    }

    // Fallback general para inasistencias sin barrera declarada
    return {
      ruleId: 'RULE_FALLBACK_DEFAULT',
      priority: 'medium',
      type: 'adaptive_intervention',
      title: 'Protocolo de Retorno Amigable',
      rationale: 'Registrar honestamente que hoy no se pudo es el paso más valioso. Tu rutina te espera sin juicios para la próxima sesión programada.',
      intervention: INTERVENTIONS_CATALOG.INT_03,
      expectedCheck: 'Check-in en t+1: ¿Se reanudó la actividad?'
    };
  }

  // Alias para interoperabilidad de pruebas
  static generarRecomendacion(contexto, historial) {
    return this.evaluate(contexto, historial);
  }

  /**
   * Calcula todas las métricas clínicas, de adherencia y semáforos de riesgo para un perfil
   * @param {Object} profile Datos del alumno con su historial de check-ins
   * @returns {Object} Métricas calculadas en tiempo real
   */
  static calculateMetrics(profile = {}) {
    const checkins = profile.historialCheckins || [];
    const total = checkins.length;

    if (total === 0) {
      return {
        totalCheckins: 0,
        idealCount: 0,
        minimaCount: 0,
        missedCount: 0,
        tasaAdherencia: 0,
        tasaSalvatajeMinima: 0,
        rachaActualSemanas: 0,
        consecutiveMisses: 0,
        mttrDias: 0,
        alertaRiesgo: 'verde',
        barrerasFrecuentes: [],
        efectividadIntervenciones: []
      };
    }

    let idealCount = 0;
    let minimaCount = 0;
    let missedCount = 0;
    const barrierCounts = {};

    checkins.forEach((chk) => {
      const s = chk.estado || chk.status;
      if (s === 'ideal') idealCount++;
      else if (s === 'minima') minimaCount++;
      else if (s === 'missed' || s === 'perdida' || s === 'no_entrene') missedCount++;

      const b = chk.barrera || chk.barrier;
      if (b) {
        barrierCounts[b] = (barrierCounts[b] || 0) + 1;
      }
    });

    const completed = idealCount + minimaCount;
    const tasaAdherencia = Math.round((completed / total) * 100);
    const tasaSalvatajeMinima = completed > 0 ? Math.round((minimaCount / completed) * 100) : 0;

    // Calcular racha actual en semanas (o sesiones consecutivas)
    let consecutiveMisses = 0;
    for (let i = total - 1; i >= 0; i--) {
      const s = checkins[i].estado || checkins[i].status;
      if (s === 'missed' || s === 'perdida' || s === 'no_entrene') {
        consecutiveMisses++;
      } else {
        break;
      }
    }

    // Calcular MTTR (Mean Time to Return en días tras fallos)
    let totalReturnDays = 0;
    let returnEvents = 0;
    for (let i = 0; i < total - 1; i++) {
      const curr = checkins[i];
      const next = checkins[i + 1];
      const currStatus = curr.estado || curr.status;
      const nextStatus = next.estado || next.status;

      if ((currStatus === 'missed' || currStatus === 'perdida') && (nextStatus === 'ideal' || nextStatus === 'minima')) {
        const d1 = new Date(curr.fecha);
        const d2 = new Date(next.fecha);
        const diffDays = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
        totalReturnDays += diffDays;
        returnEvents++;
      }
    }
    const mttrDias = returnEvents > 0 ? Number((totalReturnDays / returnEvents).toFixed(1)) : (missedCount > 0 ? 3.0 : 1.0);

    // Calcular semáforo de riesgo de abandono
    let alertaRiesgo = 'verde';
    if (consecutiveMisses >= 2 || tasaAdherencia < 50) {
      alertaRiesgo = 'rojo';
    } else if (consecutiveMisses === 1 || tasaAdherencia < 75 || tasaSalvatajeMinima >= 50) {
      alertaRiesgo = 'amarillo';
    }

    // Formatear barreras frecuentes
    const barrerasFrecuentes = Object.entries(barrierCounts).map(([key, count]) => {
      const bObj = BARRIERS_CATALOG[key] || { name: key, icon: '⚠️' };
      return {
        id: key,
        name: bObj.name,
        icon: bObj.icon,
        count,
        percentage: Math.round((count / total) * 100)
      };
    }).sort((a, b) => b.count - a.count);

    // Analizar efectividad de intervenciones
    const intervencionesMap = {};
    checkins.forEach((chk) => {
      if (chk.intervencion) {
        if (!intervencionesMap[chk.intervencion]) {
          intervencionesMap[chk.intervencion] = { id: chk.intervencion, total: 0, positive: 0, negative: 0, partial: 0 };
        }
        intervencionesMap[chk.intervencion].total++;
        if (chk.feedbackIntervencion === 'si') intervencionesMap[chk.intervencion].positive++;
        else if (chk.feedbackIntervencion === 'no') intervencionesMap[chk.intervencion].negative++;
        else if (chk.feedbackIntervencion === 'parcial') intervencionesMap[chk.intervencion].partial++;
      }
    });

    const efectividadIntervenciones = Object.values(intervencionesMap).map((it) => {
      const intObj = INTERVENTIONS_CATALOG[it.id] || { title: it.id, code: it.id };
      const rate = it.total > 0 ? Math.round(((it.positive + it.partial * 0.5) / it.total) * 100) : 0;
      return {
        id: it.id,
        code: intObj.code,
        title: intObj.title,
        total: it.total,
        positive: it.positive,
        negative: it.negative,
        successRate: rate
      };
    });

    return {
      totalCheckins: total,
      idealCount,
      minimaCount,
      missedCount,
      tasaAdherencia,
      tasaSalvatajeMinima,
      rachaActualSemanas: profile.rachaActualSemanas || (tasaAdherencia >= 75 ? Math.max(1, Math.floor(total / 3)) : 0),
      consecutiveMisses,
      mttrDias,
      alertaRiesgo,
      barrerasFrecuentes,
      efectividadIntervenciones
    };
  }

  // Alias para interoperabilidad de pruebas
  static calcularMetricas(profile) {
    return this.calculateMetrics(profile);
  }

  /**
   * Genera de forma automatizada los puntos estratégicos de conversación (Talking Points) para la sesión 1-a-1 con el coach
   * @param {Object} profile Datos del alumno
   * @returns {Array<Object>} Lista de 3 a 4 puntos sugeridos con fundamento clínico
   */
  static generateInterviewTalkingPoints(profile = {}) {
    const metrics = this.calculateMetrics(profile);
    const talkingPoints = [];

    // 1. Evaluación de hipótesis de Onboarding
    talkingPoints.push({
      categoria: 'Hipótesis de Adherencia',
      tema: `Contraste de hipótesis: ${profile.arquetipo || 'Perfil General'}`,
      detalle: profile.hipotesis
        ? `Revisar si la hipótesis inicial se corroboró en la práctica: "${profile.hipotesis.slice(0, 120)}..."`
        : 'Evaluar cómo se sintió el alumno con la estructura del plan semanal y la carga percibida.',
      sugerenciaCoach: 'Preguntar: "¿Sentiste que el plan encajó con tu vida real o te generó fricción mental?"'
    });

    // 2. Análisis de barreras recurrentes e intervenciones
    if (metrics.barrerasFrecuentes.length > 0) {
      const topBarrier = metrics.barrerasFrecuentes[0];
      talkingPoints.push({
        categoria: 'Barrera Crónica',
        tema: `Gatillador frecuente: ${topBarrier.name} (${topBarrier.count} veces reportada)`,
        detalle: `Esta barrera representó el ${topBarrier.percentage}% de las fricciones registradas. Es el punto neurálgico a resolver en esta entrevista.`,
        sugerenciaCoach: `Explorar qué ocurre exactamente en los momentos de ${topBarrier.name.toLowerCase()} y co-diseñar una salvaguarda ambiental.`
      });
    } else {
      talkingPoints.push({
        categoria: 'Constancia Destacada',
        tema: 'Excelente consistencia sin barreras severas',
        detalle: 'El alumno no reportó fricciones crónicas en las últimas semanas.',
        sugerenciaCoach: 'Felicitar por el avance y evaluar si desea aumentar un día o si prefiere consolidar la rutina actual.'
      });
    }

    // 3. Calibración del Plan Dual (Uso de Versión Mínima)
    if (metrics.tasaSalvatajeMinima >= 35) {
      talkingPoints.push({
        categoria: 'Calibración de Rutina',
        tema: `Alto uso de Versión Mínima (${metrics.tasaSalvatajeMinima}% de los entrenamientos)`,
        detalle: 'El alumno acude frecuentemente a la rutina de rescate. Aunque evitó el abandono, el plan ideal puede estar sobredimensionado.',
        sugerenciaCoach: 'Proponer convertir formalmente la versión mínima en la rutina oficial o acortar la ideal a 40 minutos.'
      });
    } else if (metrics.tasaSalvatajeMinima > 0) {
      talkingPoints.push({
        categoria: 'Rescate Efectivo',
        tema: `Salvataje exitoso de sesiones (${metrics.tasaSalvatajeMinima}%)`,
        detalle: 'La versión mínima funcionó como ancla de rescate ante días difíciles, evitando el efecto todo o nada.',
        sugerenciaCoach: 'Reforzar el valor de haber entrenado 15 minutos en vez de desistir.'
      });
    }

    // 4. Alerta de Riesgo o Retorno Rápido (MTTR)
    if (metrics.alertaRiesgo === 'rojo') {
      talkingPoints.push({
        categoria: 'Riesgo Crítico de Abandono',
        tema: 'Desconexión reciente / 2+ sesiones no realizadas',
        detalle: `MTTR elevado (${metrics.mttrDias} días). Existe alto riesgo de deserción por vergüenza o pérdida del hábito.`,
        sugerenciaCoach: 'Ofrecer un "Reinicio Limpio sin Deudas": acordar que lo pasado quedó atrás y empezar de cero con la próxima sesión.'
      });
    } else {
      talkingPoints.push({
        categoria: 'Compromiso Futuro',
        tema: 'Blindaje de las próximas dos semanas',
        detalle: `Racha actual protegida: ${metrics.rachaActualSemanas} semanas. Adherencia del ${metrics.tasaAdherencia}%.`,
        sugerenciaCoach: 'Pactar la meta de la próxima quincena y agendar el próximo control quincenal.'
      });
    }

    return talkingPoints;
  }

  // Alias para interoperabilidad de pruebas
  static generarPuntosEntrevista(profile) {
    return this.generateInterviewTalkingPoints(profile);
  }
}

// Global browser window compatibility
if (typeof window !== 'undefined') {
  window.RulesEngine = RulesEngine;
}


// === js/store.js ===
/**
 * Entrenhábitos - Store Centralizado Reactivo con Persistencia LocalStorage
 * Modelado para R4 (Prototipo Web Interactivo)
 */


const STORAGE_KEY = 'entrenhabitos_state_v1';

// In-memory mock storage fallback for headless / Node testing environments
class MemoryStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

const memoryStorageInstance = new MemoryStorage();

function getStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  return memoryStorageInstance;
}
class AppStateStore {
  constructor() {
    this.profiles = [];
    this.activeProfileId = 'alumno_martin';
    this.interviewRequests = [];
    this.pendingIntervention = null;
    this.listeners = new Set();
    this.initialized = false;

    // Escucha eventos de sincronización multi-pestaña en el navegador
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEY) {
          this.loadFromStorage();
          this.notifyListeners('external-storage-sync');
        }
      });
    }

    this.init();
  }

  /**
   * Inicializa el estado cargando de localStorage o precargando datos demo
   */
  init() {
    const storage = getStorage();
    const saved = storage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.profiles = parsed.profiles || [];
        this.activeProfileId = parsed.activeProfileId || 'alumno_martin';
        this.interviewRequests = parsed.interviewRequests || [];
        this.pendingIntervention = parsed.pendingIntervention || null;
      } catch (e) {
        console.warn('Error al parsear estado de storage, reiniciando datos demo:', e);
        this.resetDemoData();
        return;
      }
    } else {
      this.resetDemoData();
      return;
    }

    this.initialized = true;
    this.notifyListeners('init');
  }

  /**
   * Guarda el estado actual en el motor de almacenamiento
   */
  saveToStorage() {
    const storage = getStorage();
    const payload = {
      version: '1.0.0',
      updatedAt: new Date().toISOString(),
      activeProfileId: this.activeProfileId,
      profiles: this.profiles,
      interviewRequests: this.interviewRequests,
      pendingIntervention: this.pendingIntervention
    };
    storage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  /**
   * Recarga el estado desde storage
   */
  loadFromStorage() {
    const storage = getStorage();
    const saved = storage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.profiles = parsed.profiles || [];
        this.activeProfileId = parsed.activeProfileId || this.activeProfileId;
        this.interviewRequests = parsed.interviewRequests || [];
        this.pendingIntervention = parsed.pendingIntervention || null;
      } catch (e) {
        console.error('Error al recargar de storage:', e);
      }
    }
  }

  /**
   * Notifica a todos los suscriptores y despacha CustomEvent en el DOM
   */
  notifyListeners(action = 'state-updated', payload = null) {
    const detail = {
      action,
      payload,
      activeProfile: this.getActiveProfile(),
      timestamp: Date.now()
    };

    // Callback de suscriptores
    this.listeners.forEach((callback) => {
      try {
        callback(detail);
      } catch (err) {
        console.error('Error en suscriptor de AppState:', err);
      }
    });

    // Despacho de CustomEvent en navegador para reactividad de vista
    if (typeof window !== 'undefined' && window.dispatchEvent && typeof CustomEvent !== 'undefined') {
      window.dispatchEvent(new CustomEvent('entrenhabitos:state-updated', { detail }));
    }
  }

  /**
   * Suscribe una función para recibir actualizaciones de estado
   * @param {Function} callback
   * @returns {Function} Función para cancelar suscripción
   */
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  /**
   * Retorna la lista de todos los perfiles con métricas actualizadas en tiempo real
   */
  getProfiles() {
    return this.profiles.map((p) => {
      const metrics = RulesEngine.calculateMetrics(p);
      return {
        ...p,
        ...metrics
      };
    });
  }

  /**
   * Obtiene un perfil específico por ID con sus métricas actualizadas
   */
  getProfileById(id) {
    const profile = this.profiles.find((p) => p.id === id);
    if (!profile) return null;
    const metrics = RulesEngine.calculateMetrics(profile);
    return {
      ...profile,
      ...metrics
    };
  }

  /**
   * Retorna el perfil activo actual con métricas calculadas
   */
  getActiveProfile() {
    let profile = this.profiles.find((p) => p.id === this.activeProfileId);
    if (!profile && this.profiles.length > 0) {
      profile = this.profiles[0];
      this.activeProfileId = profile.id;
    }
    if (!profile) return null;
    const metrics = RulesEngine.calculateMetrics(profile);
    return {
      ...profile,
      ...metrics
    };
  }

  /**
   * Cambia el perfil activo actual
   */
  setActiveProfile(id) {
    const exists = this.profiles.some((p) => p.id === id);
    if (!exists) {
      throw new Error(`Perfil con id "${id}" no encontrado.`);
    }
    this.activeProfileId = id;
    this.saveToStorage();
    this.notifyListeners('active-profile-changed', { activeProfileId: id });
    return this.getActiveProfile();
  }

  /**
   * Registra el Onboarding y Evaluación Inicial para un perfil
   */
  completeOnboarding(profileId, answers = {}) {
    const targetId = profileId || this.activeProfileId;
    const index = this.profiles.findIndex((p) => p.id === targetId);
    if (index === -1) {
      throw new Error(`Perfil ${targetId} no existe`);
    }

    const diagnosis = RulesEngine.diagnoseProfile(answers);
    const profile = this.profiles[index];

    profile.arquetipo = diagnosis.arquetipo;
    profile.hipotesis = diagnosis.hipotesis;
    profile.planSemanal = diagnosis.planRecomendado;
    profile.frecuenciaObjetivo = diagnosis.frecuenciaRecomendada;
    profile.barreraPredominante = diagnosis.barreraPredominante;

    this.saveToStorage();
    this.notifyListeners('onboarding-completed', { profileId: targetId, diagnosis });
    return this.getProfileById(targetId);
  }

  /**
   * Registra un Check-in diario (<1 min), ejecuta el motor adaptativo y actualiza telemetría
   */
  submitCheckIn(checkInData = {}) {
    const targetId = checkInData.profileId || this.activeProfileId;
    const profileIndex = this.profiles.findIndex((p) => p.id === targetId);
    if (profileIndex === -1) {
      throw new Error(`Perfil ${targetId} no encontrado`);
    }

    const profile = this.profiles[profileIndex];
    if (!profile.historialCheckins) {
      profile.historialCheckins = [];
    }

    const status = checkInData.status || checkInData.estado;
    if (!status) {
      throw new Error('El estado de entrenamiento es obligatorio (ideal, minima o missed).');
    }

    const barrierId = checkInData.barrierId || checkInData.barrera || null;
    if ((status === 'minima' || status === 'missed' || status === 'perdida') && !barrierId) {
      throw new Error('Barrera obligatoria: Si la sesión fue mínima o no entrenó, se debe registrar la barrera que causó la dificultad.');
    }

    // Ejecutar motor de reglas adaptativo
    const context = {
      status,
      barrierId,
      energyLevel: checkInData.energyLevel ?? checkInData.energia ?? 3,
      difficulty: checkInData.difficulty ?? checkInData.dificultad ?? 3,
      timeSpent: checkInData.timeSpent ?? checkInData.tiempoRealMin ?? (status === 'ideal' ? 55 : status === 'minima' ? 18 : 0),
      date: checkInData.date || checkInData.fecha || new Date().toISOString().split('T')[0]
    };

    const recommendation = RulesEngine.evaluate(context, profile);

    // Crear registro del check-in
    const newCheckIn = {
      id: `chk_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      fecha: context.date,
      estado: status,
      barrera: barrierId,
      dificultad: Number(context.difficulty),
      energia: Number(context.energyLevel),
      tiempoRegistroSeg: Number(checkInData.durationSeg ?? checkInData.tiempoRegistroSeg ?? 22),
      tiempoRealMin: Number(context.timeSpent),
      notas: checkInData.notes || '',
      intervencion: recommendation.intervention ? recommendation.intervention.id : null,
      feedbackIntervencion: null
    };

    profile.historialCheckins.push(newCheckIn);

    // Actualizar racha y métricas
    const updatedMetrics = RulesEngine.calculateMetrics(profile);
    profile.scoreAdherencia = updatedMetrics.tasaAdherencia;
    profile.rachaActualSemanas = updatedMetrics.rachaActualSemanas;
    profile.alertaRiesgo = updatedMetrics.alertaRiesgo;
    profile.mttrDias = updatedMetrics.mttrDias;
    profile.tasaSalvatajeMinima = updatedMetrics.tasaSalvatajeMinima;

    this.pendingIntervention = recommendation.intervention ? {
      ...recommendation.intervention,
      ruleId: recommendation.ruleId,
      rationale: recommendation.rationale,
      checkInId: newCheckIn.id
    } : null;

    this.saveToStorage();
    this.notifyListeners('checkin-submitted', {
      checkIn: newCheckIn,
      recommendation,
      profile: this.getProfileById(targetId)
    });

    return {
      checkIn: newCheckIn,
      recommendation,
      intervention: recommendation.intervention,
      profile: this.getProfileById(targetId)
    };
  }

  /**
   * Registra la valoración del alumno sobre si la intervención adaptativa ayudó
   */
  evaluateIntervention(interventionIdOrObj, helpedArg, profileIdArg) {
    let interventionId = interventionIdOrObj;
    let helped = helpedArg;
    let profileId = profileIdArg;

    if (typeof interventionIdOrObj === 'object' && interventionIdOrObj !== null) {
      interventionId = interventionIdOrObj.interventionId || interventionIdOrObj.id;
      helped = interventionIdOrObj.helped;
      profileId = interventionIdOrObj.profileId;
    }

    const targetId = profileId || this.activeProfileId;
    const profile = this.profiles.find((p) => p.id === targetId);
    if (!profile) throw new Error(`Perfil ${targetId} no encontrado`);

    const checkins = profile.historialCheckins || [];
    // Encontrar el último checkin que tuvo esta intervención
    for (let i = checkins.length - 1; i >= 0; i--) {
      if (checkins[i].intervencion === interventionId || !interventionId) {
        checkins[i].feedbackIntervencion = (helped === true || helped === 'si') ? 'si' : (helped === 'parcial' ? 'parcial' : 'no');
        break;
      }
    }

    // Actualizar ponderación de la regla para el usuario
    if (!profile.pesosIntervenciones) profile.pesosIntervenciones = {};
    const key = `${interventionId}`;
    let currWeight = profile.pesosIntervenciones[key] ?? 0.5;
    if (helped === true || helped === 'si') {
      currWeight = Math.min(1.0, currWeight + 0.15);
    } else if (helped === 'parcial') {
      currWeight = Math.min(1.0, Math.max(0.1, currWeight + 0.05));
    } else {
      currWeight = Math.max(0.1, currWeight - 0.20);
    }
    profile.pesosIntervenciones[key] = Number(currWeight.toFixed(2));

    this.saveToStorage();
    this.notifyListeners('intervention-evaluated', {
      interventionId,
      helped,
      profileId: targetId
    });

    return this.getProfileById(targetId);
  }

  /**
   * Modifica o asigna el plan semanal dual de un alumno
   */
  updatePlan(profileId, newPlan) {
    const targetId = profileId || this.activeProfileId;
    const profile = this.profiles.find((p) => p.id === targetId);
    if (!profile) throw new Error(`Perfil ${targetId} no encontrado`);

    profile.planSemanal = newPlan;
    this.saveToStorage();
    this.notifyListeners('plan-updated', { profileId: targetId, plan: newPlan });
    return this.getProfileById(targetId);
  }

  /**
   * Agenda una sesión 1-a-1 personalizada con el coach precargando telemetría
   */
  scheduleInterview(dateOrObj, timeArg, notesArg, profileIdArg) {
    let date = dateOrObj;
    let time = timeArg;
    let notes = notesArg;
    let profileId = profileIdArg;

    if (typeof dateOrObj === 'object' && dateOrObj !== null) {
      date = dateOrObj.date || dateOrObj.fecha;
      time = dateOrObj.time || dateOrObj.hora;
      notes = dateOrObj.notes || dateOrObj.notas;
      profileId = dateOrObj.profileId;
    }

    const targetId = profileId || this.activeProfileId;
    const profile = this.getProfileById(targetId);
    if (!profile) throw new Error(`Perfil ${targetId} no encontrado`);

    const talkingPoints = RulesEngine.generateInterviewTalkingPoints(profile);

    const interviewRequest = {
      id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      profileId: targetId,
      alumnoNombre: profile.nombre,
      alumnoArquetipo: profile.arquetipo,
      fecha: date || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      hora: time || '18:00',
      notas: notes || 'Revisión periódica de adherencia y calibración del plan dual.',
      status: 'confirmada',
      createdAt: new Date().toISOString(),
      resumenTelemetrico: {
        scoreAdherencia: profile.scoreAdherencia,
        tasaSalvatajeMinima: profile.tasaSalvatajeMinima,
        rachaActualSemanas: profile.rachaActualSemanas,
        alertaRiesgo: profile.alertaRiesgo,
        mttrDias: profile.mttrDias,
        totalCheckins: profile.totalCheckins,
        topBarrera: profile.barrerasFrecuentes?.[0]?.name || 'Ninguna registrada'
      },
      puntosConversacionSugeridos: talkingPoints
    };

    this.interviewRequests.push(interviewRequest);
    this.saveToStorage();
    this.notifyListeners('interview-scheduled', { interviewRequest, profile });
    return interviewRequest;
  }

  /**
   * Obtiene la lista de entrevistas 1-a-1 agendadas
   */
  getInterviewRequests() {
    return this.interviewRequests;
  }

  /**
   * Restaura el dataset demo de los 4 perfiles arquetípicos a su estado de fábrica
   */
  resetDemoData() {
    // Clon profundo de los perfiles iniciales
    this.profiles = JSON.parse(JSON.stringify(INITIAL_PROFILES));
    this.activeProfileId = 'alumno_martin';
    this.interviewRequests = [
      {
        id: 'req_demo_martin',
        profileId: 'alumno_martin',
        alumnoNombre: 'Martín Rossi',
        alumnoArquetipo: 'Perfeccionista / Todo o Nada',
        fecha: '2026-10-24',
        hora: '19:00',
        notas: 'Revisión de estrategia para días de audiencias judiciales largas.',
        status: 'confirmada',
        createdAt: '2026-10-21T18:00:00Z',
        resumenTelemetrico: {
          scoreAdherencia: 82,
          tasaSalvatajeMinima: 40,
          rachaActualSemanas: 4,
          alertaRiesgo: 'amarillo',
          mttrDias: 1.2,
          totalCheckins: 5,
          topBarrera: 'Falta de Tiempo / Agenda Saturada'
        },
        puntosConversacionSugeridos: RulesEngine.generateInterviewTalkingPoints(this.profiles[0])
      }
    ];
    this.pendingIntervention = null;
    this.saveToStorage();
    this.notifyListeners('demo-data-reset');
  }

  /**
   * Helper para obtener un plan por defecto
   */
  obtenerPlanPorDefecto(freq = 3) {
    return RulesEngine.buildDefaultPlan(freq);
  }
}

// Singleton global
const AppState = new AppStateStore();

// Compatibilidad con window en el navegador
if (typeof window !== 'undefined') {
  window.AppState = AppState;
}


// === js/app.js ===
/**
 * Entrenhábitos - Controlador Principal de Aplicación y Reactividad
 * Conecta UI, State Store y Motor de Reglas Adaptativo
 */



class AppController {
  constructor() {
    this.currentRole = 'mobile'; // 'mobile' | 'split' | 'student' | 'coach'
    this.currentStudentTab = 'onboarding'; // 'onboarding' | 'plan' | 'checkin' | 'adaptive' | 'progress'
    this.selectedCheckinStatus = 'ideal';
    this.selectedBarrierId = null;
    this.timerInterval = null;
    this.timerSeconds = 0;
    this.inspectedCoachStudentId = 'alumno_martin';
  }

  init() {
    this.bindEvents();
    this.startCheckinTimer();
    this.switchRole('mobile');

    // Suscripción a cambios del Store reactivo
    AppState.subscribe((event) => {
      this.render();
      if (event.action === 'checkin-submitted') {
        this.switchStudentTab('adaptive');
      }
    });

    // Listener de CustomEvent del DOM para sincronización bidireccional
    window.addEventListener('entrenhabitos:state-updated', () => {
      this.render();
    });

    console.log('✅ Entrenhábitos App (Simulador Móvil + Coach) inicializada con éxito.');
  }

  /**
   * Vincula eventos del DOM
   */
  bindEvents() {
    // 1. Selector de Modos / Roles (App Celular, Dual, Alumno Web, Coach)
    const roleBtns = document.querySelectorAll('.role-switcher .role-btn');
    roleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role');
        this.switchRole(role);
      });
    });

    // 2. Selector global de perfil de alumno
    const selectProfile = document.getElementById('global-profile-select');
    if (selectProfile) {
      selectProfile.addEventListener('change', (e) => {
        AppState.setActiveProfile(e.target.value);
        this.inspectedCoachStudentId = e.target.value;
        this.showToast(`Perfil activo: ${AppState.getActiveProfile().nombre}`);
      });
    }

    // 3. Botón de Reinicio Demo
    const btnResetDemo = document.getElementById('btn-reset-demo');
    if (btnResetDemo) {
      btnResetDemo.addEventListener('click', () => {
        AppState.resetDemoData();
        this.inspectedCoachStudentId = 'alumno_martin';
        this.showToast('↺ Datos de los 4 perfiles restaurados al estado inicial');
      });
    }

    // 4. Sub-navegación de pestañas del Alumno (Web + Barra Inferior del Celular + Botones de Salto Rápido)
    const allTabButtons = document.querySelectorAll('.student-subnav .tab-btn, .phone-bottom-nav .phone-nav-item, .quick-jump-tab');
    allTabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (tab) {
          this.switchStudentTab(tab);
        }
      });
    });

    // 4b. Botón SOS "Día Difícil (18m)" en la cabecera de la App Celular
    const btnPhoneSos = document.getElementById('btn-phone-quick-sos');
    if (btnPhoneSos) {
      btnPhoneSos.addEventListener('click', () => {
        this.runScenarioSimulation('lack_of_time');
      });
    }

    // 4c. Botones del Centro de Simulación Interactiva en 1 Clic
    const simBtns = document.querySelectorAll('.sim-scenario-btn');
    simBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const simType = btn.getAttribute('data-sim');
        this.runScenarioSimulation(simType);
      });
    });

    // 5. Botones táctiles de estado de Check-in
    const checkinBtns = document.querySelectorAll('.checkin-btn');
    checkinBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        checkinBtns.forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedCheckinStatus = btn.getAttribute('data-status');
        this.toggleBarrierPanel();
      });
    });

    // 6. Chips de selección de barreras
    const barrierChips = document.querySelectorAll('.barrier-chip');
    barrierChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        barrierChips.forEach((c) => c.classList.remove('selected'));
        chip.classList.add('selected');
        this.selectedBarrierId = chip.getAttribute('data-barrier');
      });
    });

    // 7. Sliders de dificultad y energía
    const sliderDiff = document.getElementById('input-difficulty');
    const diffVal = document.getElementById('difficulty-val');
    if (sliderDiff && diffVal) {
      sliderDiff.addEventListener('input', (e) => {
        diffVal.textContent = `${e.target.value} / 5`;
      });
    }

    const sliderEnergy = document.getElementById('input-energy');
    const energyVal = document.getElementById('energy-val');
    if (sliderEnergy && energyVal) {
      sliderEnergy.addEventListener('input', (e) => {
        energyVal.textContent = `${e.target.value} / 5`;
      });
    }

    // 8. Envío del Formulario de Check-in (<1 min)
    const checkinForm = document.getElementById('checkin-form');
    if (checkinForm) {
      checkinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCheckinSubmit();
      });
    }

    // 9. Feedback Loop en Motor Adaptativo
    const feedbackBtns = document.querySelectorAll('.feedback-btn');
    feedbackBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        feedbackBtns.forEach((b) => {
          b.classList.remove('active-positive', 'active-negative');
        });
        const helped = btn.getAttribute('data-helped');
        if (helped === 'si' || helped === 'parcial') {
          btn.classList.add('active-positive');
        } else {
          btn.classList.add('active-negative');
        }

        const profile = AppState.getActiveProfile();
        const pending = AppState.pendingIntervention;
        const intId = pending ? pending.id : 'INT_01';
        AppState.evaluateIntervention(intId, helped, profile.id);
        this.showToast('✅ ¡Gracias! El sistema calibró tu preferencia para futuras intervenciones.');
      });
    });

    // Botón Aceptar Recomendación
    const btnAcceptRec = document.getElementById('btn-accept-rec');
    if (btnAcceptRec) {
      btnAcceptRec.addEventListener('click', () => {
        this.showToast('🎯 Intervención activada. Tu compromiso es ejecutarla sin sobreexigencia.');
      });
    }

    const btnDismissRec = document.getElementById('btn-dismiss-rec');
    if (btnDismissRec) {
      btnDismissRec.addEventListener('click', () => {
        this.switchStudentTab('plan');
      });
    }

    // 10. Formulario de Onboarding
    const onboardingForm = document.getElementById('onboarding-form');
    if (onboardingForm) {
      onboardingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleOnboardingSubmit();
      });
    }

    // Botón aplicar plan desde diagnóstico
    const btnApplyPlan = document.getElementById('btn-apply-onboarding-plan');
    if (btnApplyPlan) {
      btnApplyPlan.addEventListener('click', () => {
        this.switchStudentTab('plan');
        this.showToast('📅 Plan Semanal Dual asignado y activado.');
      });
    }

    // 11. Formulario de Agendamiento 1-a-1
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleBookingSubmit();
      });
    }
  }

  /**
   * Cambia el modo / rol principal (mobile, split, student, coach)
   */
  switchRole(role) {
    this.currentRole = role;
    const roleBtns = document.querySelectorAll('.role-switcher .role-btn');
    roleBtns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-role') === role;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    const viewStudent = document.getElementById('view-student');
    const viewCoach = document.getElementById('view-coach');

    document.body.classList.remove('mode-mobile', 'mode-split', 'mode-student-web', 'mode-coach');

    if (role === 'mobile') {
      document.body.classList.add('mode-mobile');
      if (viewStudent) viewStudent.classList.add('active');
      if (viewCoach) viewCoach.classList.remove('active');
    } else if (role === 'split') {
      document.body.classList.add('mode-split');
      if (viewStudent) viewStudent.classList.add('active');
      if (viewCoach) viewCoach.classList.add('active');
    } else if (role === 'student') {
      document.body.classList.add('mode-student-web');
      if (viewStudent) viewStudent.classList.add('active');
      if (viewCoach) viewCoach.classList.remove('active');
    } else {
      document.body.classList.add('mode-coach');
      if (viewCoach) viewCoach.classList.add('active');
      if (viewStudent) viewStudent.classList.remove('active');
    }

    this.render();
  }

  /**
   * Ejecuta un escenario de simulación interactivo en 1 clic
   */
  runScenarioSimulation(simType) {
    const profile = AppState.getActiveProfile();
    if (!profile) return;
    this.inspectedCoachStudentId = profile.id;

    const todayStr = new Date().toISOString().split('T')[0];

    if (simType === 'open_split_mode') {
      this.switchRole('split');
      this.showToast('📱+📋 Modo Dual activado: Celular Alumno + Panel Coach en vivo');
      return;
    }

    if (simType === 'lack_of_time') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'minima',
        barrierId: 'B1_TIME',
        difficulty: 4,
        energyLevel: 3,
        durationSeg: 18,
        notes: 'Simulación: Salí tarde del trabajo y activé la Versión Mínima de 18m',
        date: todayStr
      });
      this.switchStudentTab('adaptive');
      this.showToast('⏰ Simulado: Día con poco tiempo → Versión Mínima activada y racha salvada');
    } else if (simType === 'low_energy') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'minima',
        barrierId: 'B2_ENERGY',
        difficulty: 4,
        energyLevel: 1,
        durationSeg: 16,
        notes: 'Simulación: Batería mental baja → Micro-meta de 2 min completada',
        date: todayStr
      });
      this.switchStudentTab('adaptive');
      this.showToast('🔋 Simulado: Baja energía → Regla de los 2 Minutos activada');
    } else if (simType === 'missed_guilt') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'missed',
        barrierId: 'B5_GUILT_ALL_OR_NOTHING',
        difficulty: 5,
        energyLevel: 2,
        durationSeg: 21,
        notes: 'Simulación: No pude asistir hoy, evitando caer en el Todo o Nada',
        date: todayStr
      });
      this.switchStudentTab('adaptive');
      this.showToast('🛡️ Simulado: Sesión perdida → Protocolo "Never Miss Twice" sin culpa activado');
    } else if (simType === 'completed_ideal') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'ideal',
        barrierId: null,
        difficulty: 2,
        energyLevel: 4,
        durationSeg: 14,
        notes: 'Simulación: Sesión ideal de 60 minutos completada con éxito',
        date: todayStr
      });
      this.switchStudentTab('progress');
      this.showToast('🟢 Simulado: ¡Sesión Ideal completada! Adherencia actualizada');
    } else if (simType === 'schedule_1on1') {
      const req = AppState.scheduleInterview({
        profileId: profile.id,
        date: todayStr,
        time: '19:00',
        notes: 'Quiero revisar cómo sostener la rutina en semanas de cierre laboral.'
      });
      this.switchStudentTab('progress');
      this.showToast(`📅 Turno 1-a-1 agendado (${req.fecha} ${req.hora} hs) y enviado al Panel Coach`);
    }
  }

  /**
   * Cambia la pestaña activa dentro de la Vista Alumno (tanto Web como App Celular)
   */
  switchStudentTab(tabName) {
    this.currentStudentTab = tabName;
    const tabBtns = document.querySelectorAll('.student-subnav .tab-btn, .phone-bottom-nav .phone-nav-item');
    tabBtns.forEach((btn) => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const sections = [
      { id: 'tab-student-onboarding', name: 'onboarding' },
      { id: 'tab-student-plan', name: 'plan' },
      { id: 'tab-student-checkin', name: 'checkin' },
      { id: 'tab-student-adaptive', name: 'adaptive' },
      { id: 'tab-student-progress', name: 'progress' }
    ];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        el.style.display = sec.name === tabName ? 'block' : 'none';
      }
    });

    const phoneViewport = document.getElementById('phone-viewport-scroll');
    if (phoneViewport) {
      phoneViewport.scrollTop = 0;
    }

    if (tabName === 'checkin') {
      this.resetCheckinTimer();
    }

    this.render();
  }

  /**
   * Alterna visibilidad del panel de barreras según el botón de check-in seleccionado
   */
  toggleBarrierPanel() {
    const barrierPanel = document.getElementById('barrier-selection-panel');
    if (!barrierPanel) return;

    if (this.selectedCheckinStatus === 'minima' || this.selectedCheckinStatus === 'missed') {
      barrierPanel.classList.add('active');
      // Si no hay ninguna seleccionada, preseleccionar la primera por defecto
      if (!this.selectedBarrierId) {
        const firstChip = barrierPanel.querySelector('.barrier-chip');
        if (firstChip) {
          firstChip.classList.add('selected');
          this.selectedBarrierId = firstChip.getAttribute('data-barrier');
        }
      }
    } else {
      barrierPanel.classList.remove('active');
      this.selectedBarrierId = null;
      const chips = barrierPanel.querySelectorAll('.barrier-chip');
      chips.forEach((c) => c.classList.remove('selected'));
    }
  }

  /**
   * Cronómetro de usabilidad del check-in
   */
  startCheckinTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const timerDisplay = document.getElementById('checkin-timer-display');
      if (timerDisplay) {
        const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
        const secs = String(this.timerSeconds % 60).padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  resetCheckinTimer() {
    this.timerSeconds = 0;
  }

  /**
   * Procesa el envío del check-in
   */
  handleCheckinSubmit() {
    try {
      const profile = AppState.getActiveProfile();
      if (!profile) return;

      const difficulty = Number(document.getElementById('input-difficulty')?.value || 3);
      const energy = Number(document.getElementById('input-energy')?.value || 3);
      const notes = document.getElementById('checkin-notes')?.value || '';

      if ((this.selectedCheckinStatus === 'minima' || this.selectedCheckinStatus === 'missed') && !this.selectedBarrierId) {
        this.selectedBarrierId = 'B1_TIME'; // Fallback preventivo
      }

      const checkInData = {
        profileId: profile.id,
        status: this.selectedCheckinStatus,
        barrierId: this.selectedBarrierId,
        difficulty,
        energyLevel: energy,
        durationSeg: Math.max(5, this.timerSeconds),
        notes,
        date: new Date().toISOString().split('T')[0]
      };

      const result = AppState.submitCheckIn(checkInData);

      this.showToast('✅ Check-in guardado con éxito');
      this.switchStudentTab('adaptive');
    } catch (err) {
      alert(`Error al registrar check-in: ${err.message}`);
    }
  }

  /**
   * Procesa el formulario de onboarding
   */
  handleOnboardingSubmit() {
    const form = document.getElementById('onboarding-form');
    if (!form) return;

    const formData = new FormData(form);
    const answers = {
      q_historial: formData.get('q_historial'),
      q_motivo_abandono: formData.get('q_motivo_abandono'),
      q_reaccion_fallo: formData.get('q_reaccion_fallo'),
      q_disponibilidad: formData.get('q_disponibilidad'),
      q_version_minima: formData.get('q_version_minima')
    };

    const profile = AppState.getActiveProfile();
    AppState.completeOnboarding(profile.id, answers);

    this.showToast('⚡ Diagnóstico conductual generado correctamente');
    this.render();
  }

  /**
   * Procesa el agendamiento de entrevista 1-a-1
   */
  handleBookingSubmit() {
    const date = document.getElementById('booking-date')?.value;
    const time = document.getElementById('booking-time')?.value;
    const notes = document.getElementById('booking-notes')?.value;

    if (!date) {
      alert('Por favor seleccioná una fecha para la entrevista.');
      return;
    }

    const profile = AppState.getActiveProfile();
    const req = AppState.scheduleInterview({
      profileId: profile.id,
      date,
      time,
      notes
    });

    this.showToast(`📅 Sesión 1-a-1 agendada para el ${req.fecha} a las ${req.hora} hs.`);
    document.getElementById('booking-notes').value = '';
    this.render();
  }

  /**
   * Toast flotante para feedback visual
   */
  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /**
   * Renderizado general de toda la aplicación
   */
  render() {
    const activeProfile = AppState.getActiveProfile();
    if (!activeProfile) return;

    // 1. Sincronizar Cabecera Global y Cabecera de App Celular
    const select = document.getElementById('global-profile-select');
    if (select && select.value !== activeProfile.id) {
      select.value = activeProfile.id;
    }

    const streakText = document.getElementById('header-streak-text');
    if (streakText) {
      streakText.textContent = `${activeProfile.rachaActualSemanas || 0} semanas`;
    }

    const phoneAvatar = document.getElementById('phone-header-avatar');
    const phoneName = document.getElementById('phone-header-name');
    const phoneArch = document.getElementById('phone-header-archetype');
    if (phoneAvatar) phoneAvatar.textContent = activeProfile.avatar || '👤';
    if (phoneName) phoneName.textContent = activeProfile.nombre;
    if (phoneArch) phoneArch.textContent = activeProfile.arquetipo || 'Evaluación Pendiente';

    // 2. Renderizar Vista Alumno
    this.renderOnboardingTab(activeProfile);
    this.renderPlanTab(activeProfile);
    this.renderAdaptiveTab(activeProfile);
    this.renderProgressTab(activeProfile);

    // 3. Renderizar Espejo en Vivo del Panel de Simulación
    this.renderSimulationMirror(activeProfile);

    // 4. Renderizar Vista Coach
    this.renderCoachView();
  }

  /**
   * Renderiza el espejo en vivo del Coach en el Centro de Simulación
   */
  renderSimulationMirror(profile) {
    const mirrorEl = document.getElementById('sim-coach-mini-mirror');
    if (!mirrorEl) return;

    const r = profile.alertaRiesgo || 'verde';
    const riskPill = r === 'rojo'
      ? '<span class="badge badge-risk-rojo">🔴 Crítico / Intervenir</span>'
      : (r === 'amarillo' ? '<span class="badge badge-risk-amarillo">🟡 Riesgo Medio</span>' : '<span class="badge badge-risk-verde">🟢 Adherencia Saludable</span>');

    const tps = RulesEngine.generateInterviewTalkingPoints(profile);
    const topTp = tps[1] || tps[0];

    mirrorEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.6rem;">
        <span style="font-weight: 800; color: var(--text-primary);">📡 Telemetría en Vivo del Alumno (${profile.nombre}):</span>
        ${riskPill}
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem; margin-bottom: 0.65rem;">
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Adherencia</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--lime-bright);">${profile.scoreAdherencia}%</div>
        </div>
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Salvadas (Mínima)</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--amber-light);">${profile.tasaSalvatajeMinima}%</div>
        </div>
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Retorno (MTTR)</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary);">${profile.mttrDias} d</div>
        </div>
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Ideales / Mínimas / Faltas</div>
          <div style="font-size: 1rem; font-weight: 800; color: var(--text-primary);">${profile.idealCount} / ${profile.minimaCount} / ${profile.missedCount}</div>
        </div>
      </div>
      <div style="border-left: 3px solid var(--cyan-primary); padding-left: 0.65rem; font-size: 0.8rem;">
        <strong style="color: var(--cyan-primary);">🎯 Insight automático para el Coach:</strong> ${topTp ? `${topTp.tema} — <em>${topTp.sugerenciaCoach}</em>` : 'Listo para seguimiento.'}
      </div>
    `;
  }

  /**
   * Renderiza Pestaña Onboarding
   */
  renderOnboardingTab(profile) {
    const badge = document.getElementById('onboarding-status-badge');
    if (badge) {
      if (profile.planSemanal && profile.arquetipo && profile.id !== 'alumno_sofia') {
        badge.className = 'badge badge-risk-verde';
        badge.textContent = 'Calibrado y Activo';
      } else {
        badge.className = 'badge badge-risk-amarillo';
        badge.textContent = 'Pendiente de Evaluación';
      }
    }

    const titleEl = document.getElementById('diag-archetype-title');
    const descEl = document.getElementById('diag-archetype-desc');
    const hypoEl = document.getElementById('diag-hypothesis-text');
    const stratEl = document.getElementById('diag-strategy-text');
    const freqEl = document.getElementById('diag-frecuencia-badge');

    if (titleEl) titleEl.textContent = profile.arquetipo || 'Pendiente de Diagnóstico';
    if (descEl) descEl.textContent = profile.profesion ? `${profile.profesion} • ${profile.edad} años` : 'Completa el cuestionario';
    if (hypoEl) hypoEl.textContent = profile.hipotesis || 'Completá las 5 preguntas para formular tu hipótesis de trabajo conductual.';
    if (stratEl) stratEl.textContent = profile.objetivos || 'Validación obligatoria de la Versión Mínima como éxito total del día.';
    if (freqEl) freqEl.textContent = `${profile.planSemanal?.frecuenciaObjetivo || 3} días / sem`;
  }

  /**
   * Renderiza Pestaña Mi Plan Dual
   */
  renderPlanTab(profile) {
    const freqBadge = document.getElementById('plan-frequency-badge');
    const plan = profile.planSemanal || AppState.obtenerPlanPorDefecto(3);

    if (freqBadge) {
      freqBadge.textContent = `Frecuencia: ${plan.frecuenciaObjetivo} días / semana`;
    }

    const grid = document.getElementById('weekly-plan-cards-grid');
    if (!grid) return;

    grid.innerHTML = '';

    (plan.dias || []).forEach((d, idx) => {
      const card = document.createElement('div');
      card.className = 'day-card';
      const dayId = `day_${idx}`;

      card.innerHTML = `
        <div class="day-card-header">
          <span class="day-name">${d.dia}</span>
          <span class="day-tag">${d.nombreSesion || 'Entrenamiento'}</span>
        </div>

        <div class="dual-tabs">
          <button type="button" class="dual-tab-btn active ideal-tab" data-target="${dayId}_ideal">
            🟢 Versión Ideal (${d.ideal.duracionMin}m)
          </button>
          <button type="button" class="dual-tab-btn minima-tab" data-target="${dayId}_minima">
            🟡 Versión Mínima (${d.minima.duracionMin}m)
          </button>
        </div>

        <div class="day-content">
          <!-- Versión Ideal -->
          <div id="${dayId}_ideal" class="version-block">
            <span class="version-badge ideal">Versión Completa</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${d.ideal.titulo}</h4>
            <ul class="exercise-list">
              ${d.ideal.ejercicios.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
          </div>

          <!-- Versión Mínima (Día Difícil) -->
          <div id="${dayId}_minima" class="version-block" style="display: none;">
            <span class="version-badge minima">Día Difícil (Rescate)</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--amber-light); margin-bottom: 0.5rem;">${d.minima.titulo}</h4>
            <ul class="exercise-list minima">
              ${d.minima.ejercicios.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.75rem;">
              ⚡ <em>Completar esta versión preserva el 100% de tu hábito en días complicados.</em>
            </p>
          </div>
        </div>
      `;

      // Eventos de toggle para las pestañas de versión dual dentro del día
      const idealBtn = card.querySelector('.ideal-tab');
      const minimaBtn = card.querySelector('.minima-tab');
      const idealBlock = card.querySelector(`#${dayId}_ideal`);
      const minimaBlock = card.querySelector(`#${dayId}_minima`);

      idealBtn.addEventListener('click', () => {
        idealBtn.classList.add('active');
        minimaBtn.classList.remove('active');
        idealBlock.style.display = 'block';
        minimaBlock.style.display = 'none';
      });

      minimaBtn.addEventListener('click', () => {
        minimaBtn.classList.add('active');
        idealBtn.classList.remove('active');
        minimaBlock.style.display = 'block';
        idealBlock.style.display = 'none';
      });

      grid.appendChild(card);
    });
  }

  /**
   * Renderiza Pestaña de Recomendaciones Adaptativas
   */
  renderAdaptiveTab(profile) {
    const pending = AppState.pendingIntervention;
    const ruleBadge = document.getElementById('rec-rule-id-badge');
    const titleEl = document.getElementById('rec-title');
    const ratEl = document.getElementById('rec-rationale');
    const stepsList = document.getElementById('rec-action-steps');
    const durationBadge = document.getElementById('rec-duration-badge');

    if (pending) {
      if (ruleBadge) ruleBadge.textContent = pending.ruleId || 'RULE_TIME_01';
      if (titleEl) titleEl.textContent = pending.title || 'Recomendación Adaptativa Activa';
      if (ratEl) ratEl.innerHTML = `<strong>¿Por qué esta sugerencia?</strong> ${pending.rationale || 'Adaptación inmediata a tu nivel de energía y tiempo.'}`;
      if (durationBadge) durationBadge.textContent = pending.durationMin ? `⏱️ ${pending.durationMin} min de rescate` : '⚡ Acción Inmediata';

      if (stepsList) {
        if (pending.details && pending.details.length > 0) {
          stepsList.innerHTML = pending.details.map((d) => `<li>${d}</li>`).join('');
        } else {
          stepsList.innerHTML = `
            <li>Realizá 2 series de sentadillas en copa o prensa</li>
            <li>Realizá 2 series de remo en polea o mancuerna</li>
            <li>1 serie de plancha abdominal (45 segundos)</li>
          `;
        }
      }
    } else {
      // Estado cuando no hay intervención pendiente
      if (ruleBadge) ruleBadge.textContent = 'EN ESPERA DE REGISTRO';
      if (titleEl) titleEl.textContent = 'Tu sistema adaptativo está listo para intervenir';
      if (ratEl) ratEl.innerHTML = 'Cuando registres una sesión mínima o no puedas entrenar por una barrera cotidiana, el motor generará aquí tu intervención personalizada.';
      if (durationBadge) durationBadge.textContent = '⏱️ Monitoreo activo';
      if (stepsList) {
        stepsList.innerHTML = `
          <li>Elaboración de plan B ante falta de tiempo</li>
          <li>Micro-meta de entrada ante fatiga mental</li>
          <li>Protocolo "Never Miss Twice" ante tropiezos</li>
        `;
      }
    }
  }

  /**
   * Renderiza Pestaña de Progreso del Alumno y Agendamiento 1-a-1
   */
  renderProgressTab(profile) {
    // Badges y Métricas
    const riskBadge = document.getElementById('student-risk-badge');
    if (riskBadge) {
      const r = profile.alertaRiesgo || 'verde';
      riskBadge.className = `badge badge-risk-${r}`;
      riskBadge.textContent = r === 'rojo' ? '🔴 Riesgo Alto' : (r === 'amarillo' ? '🟡 Riesgo Medio' : '🟢 Riesgo Bajo');
    }

    const adhVal = document.getElementById('metric-adherence-val');
    const salVal = document.getElementById('metric-salvataje-val');
    const mttrVal = document.getElementById('metric-mttr-val');
    const rachaVal = document.getElementById('metric-racha-val');

    if (adhVal) adhVal.textContent = `${profile.scoreAdherencia ?? 0}%`;
    if (salVal) salVal.textContent = `${profile.tasaSalvatajeMinima ?? 0}%`;
    if (mttrVal) mttrVal.textContent = `${profile.mttrDias ?? 1.0} d`;
    if (rachaVal) rachaVal.textContent = `${profile.rachaActualSemanas ?? 0} sem`;

    // Historial de Checkins
    const tbody = document.getElementById('student-checkins-history-tbody');
    if (tbody) {
      tbody.innerHTML = '';
      const checkins = profile.historialCheckins || [];
      if (checkins.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Sin registros aún. ¡Realizá tu primer check-in!</td></tr>';
      } else {
        checkins.slice().reverse().forEach((chk) => {
          const tr = document.createElement('tr');
          const isIdeal = chk.estado === 'ideal';
          const isMinima = chk.estado === 'minima';
          const statusBadge = isIdeal
            ? '<span class="badge badge-risk-verde">🟢 Ideal</span>'
            : (isMinima ? '<span class="badge badge-risk-amarillo">🟡 Mínima</span>' : '<span class="badge badge-risk-rojo">🔴 No Entrenó</span>');

          const bObj = BARRIERS_CATALOG[chk.barrera] || (chk.barrera ? { name: chk.barrera } : { name: '-' });
          const intObj = INTERVENTIONS_CATALOG[chk.intervencion] || (chk.intervencion ? { title: chk.intervencion } : { title: '-' });
          const helpedBadge = chk.feedbackIntervencion === 'si'
            ? '<span style="color: var(--lime-bright);">👍 Sí</span>'
            : (chk.feedbackIntervencion === 'no' ? '<span style="color: var(--coral-light);">👎 No</span>' : (chk.feedbackIntervencion === 'parcial' ? '<span style="color: var(--amber-light);">🤔 A medias</span>' : '<span style="color: var(--text-muted);">-</span>'));

          tr.innerHTML = `
            <td>${chk.fecha}</td>
            <td>${statusBadge}</td>
            <td>${chk.tiempoRealMin || (isIdeal ? 60 : isMinima ? 18 : 0)} min</td>
            <td>${bObj.name}</td>
            <td>${intObj.title}</td>
            <td>${helpedBadge}</td>
          `;
          tbody.appendChild(tr);
        });
      }
    }

    // Ficha de Telemetría Precargada para el Agendamiento 1-a-1
    const telemetryBox = document.getElementById('booking-telemetry-preview');
    if (telemetryBox) {
      const topBarrier = profile.barrerasFrecuentes?.[0]?.name || 'Ninguna registrada';
      telemetryBox.innerHTML = `
        <div style="margin-bottom: 0.5rem;"><strong>Alumno:</strong> ${profile.nombre} (${profile.arquetipo || 'Perfil General'})</div>
        <div style="margin-bottom: 0.5rem;"><strong>Adherencia acumulada:</strong> ${profile.scoreAdherencia}% (${profile.totalCheckins || 0} sesiones registradas)</div>
        <div style="margin-bottom: 0.5rem;"><strong>Tasa de Salvataje por Versión Mínima:</strong> ${profile.tasaSalvatajeMinima}% de los entrenamientos</div>
        <div style="margin-bottom: 0.5rem;"><strong>Tiempo medio de retorno (MTTR):</strong> ${profile.mttrDias} días</div>
        <div style="margin-bottom: 0.5rem;"><strong>Gatillador más frecuente:</strong> ${topBarrier}</div>
        <div style="font-size: 0.8rem; color: #38bdf8; margin-top: 0.75rem;">
          ℹ️ <em>Esta telemetría se adjuntará automáticamente a la cita en el panel del coach para optimizar la llamada.</em>
        </div>
      `;
    }
  }

  /**
   * Renderiza el Panel Profesional del Coach
   */
  renderCoachView() {
    const profiles = AppState.getProfiles();

    // 1. Métricas agregadas de cohorte
    const totalStudentsEl = document.getElementById('coach-total-students');
    const riskDistEl = document.getElementById('coach-risk-distribution');
    const salvatajeCohortEl = document.getElementById('coach-salvataje-cohort');
    const mttrCohortEl = document.getElementById('coach-mttr-cohort');

    let verdeCount = 0;
    let amarilloCount = 0;
    let rojoCount = 0;
    let sumSalvataje = 0;
    let sumMttr = 0;

    profiles.forEach((p) => {
      if (p.alertaRiesgo === 'rojo') rojoCount++;
      else if (p.alertaRiesgo === 'amarillo') amarilloCount++;
      else verdeCount++;

      sumSalvataje += (p.tasaSalvatajeMinima || 0);
      sumMttr += (p.mttrDias || 1.0);
    });

    const avgSalvataje = profiles.length > 0 ? Math.round(sumSalvataje / profiles.length) : 0;
    const avgMttr = profiles.length > 0 ? (sumMttr / profiles.length).toFixed(1) : '1.0';

    if (totalStudentsEl) totalStudentsEl.textContent = profiles.length;
    if (riskDistEl) riskDistEl.innerHTML = `🟢 ${verdeCount} &nbsp; 🟡 ${amarilloCount} &nbsp; 🔴 ${rojoCount}`;
    if (salvatajeCohortEl) salvatajeCohortEl.textContent = `${avgSalvataje}%`;
    if (mttrCohortEl) mttrCohortEl.textContent = `${avgMttr} d`;

    // 2. Tabla de Cohorte
    const tbody = document.getElementById('coach-cohort-tbody');
    if (tbody) {
      tbody.innerHTML = '';
      profiles.forEach((p) => {
        const tr = document.createElement('tr');
        const rBadge = p.alertaRiesgo === 'rojo'
          ? '<span class="badge badge-risk-rojo">🔴 Crítico</span>'
          : (p.alertaRiesgo === 'amarillo' ? '<span class="badge badge-risk-amarillo">🟡 Alerta</span>' : '<span class="badge badge-risk-verde">🟢 Óptimo</span>');

        tr.innerHTML = `
          <td>
            <div class="student-name-cell">
              <span>${p.avatar || '👤'}</span>
              <div>
                <div>${p.nombre}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${p.profesion || 'Asesorado'}</div>
              </div>
            </div>
          </td>
          <td>${p.arquetipo || 'Sin diagnóstico'}</td>
          <td>${rBadge}</td>
          <td><strong>${p.scoreAdherencia}%</strong></td>
          <td><span style="color: var(--amber-light); font-weight: 700;">${p.tasaSalvatajeMinima}%</span></td>
          <td>${p.mttrDias} d</td>
          <td>
            <button class="btn btn-secondary btn-sm btn-inspect-student" data-id="${p.id}">
              🔍 Ficha
            </button>
          </td>
        `;

        const btnInspect = tr.querySelector('.btn-inspect-student');
        btnInspect.addEventListener('click', () => {
          this.inspectedCoachStudentId = p.id;
          this.renderCoachStudentDossier(p);
          this.showToast(`Inspeccionando a ${p.nombre}`);
        });

        tbody.appendChild(tr);
      });
    }

    // 3. Renderizar el expediente del alumno inspeccionado
    const inspectedProfile = AppState.getProfileById(this.inspectedCoachStudentId) || profiles[0];
    if (inspectedProfile) {
      this.renderCoachStudentDossier(inspectedProfile);
    }
  }

  /**
   * Renderiza el expediente detallado del alumno en el Panel Coach
   */
  renderCoachStudentDossier(profile) {
    const avatarEl = document.getElementById('coach-detail-avatar');
    const nameEl = document.getElementById('coach-detail-name');
    const subtitleEl = document.getElementById('coach-detail-subtitle');
    const riskBadgeEl = document.getElementById('coach-detail-risk-badge');
    const hypoEl = document.getElementById('coach-detail-hypothesis');

    if (avatarEl) avatarEl.textContent = profile.avatar || '👤';
    if (nameEl) nameEl.textContent = profile.nombre;
    if (subtitleEl) subtitleEl.textContent = `${profile.edad || 30} años • ${profile.profesion || 'Profesional'} • Arquetipo: ${profile.arquetipo || 'General'}`;

    if (riskBadgeEl) {
      const r = profile.alertaRiesgo || 'verde';
      riskBadgeEl.className = `badge badge-risk-${r}`;
      riskBadgeEl.textContent = r === 'rojo' ? '🔴 Riesgo Alto / Deserción' : (r === 'amarillo' ? '🟡 Riesgo Medio / Atención' : '🟢 Riesgo Bajo / Adherencia Saludable');
    }

    if (hypoEl) hypoEl.textContent = profile.hipotesis || 'Sin hipótesis diagnóstica registrada.';

    // Métricas Ideales vs Mínimas vs No realizadas
    const statIdeales = document.getElementById('coach-stat-ideales');
    const statMinimas = document.getElementById('coach-stat-minimas');
    const statMissed = document.getElementById('coach-stat-missed');

    if (statIdeales) statIdeales.textContent = profile.idealCount ?? 0;
    if (statMinimas) statMinimas.textContent = profile.minimaCount ?? 0;
    if (statMissed) statMissed.textContent = profile.missedCount ?? 0;

    // Generador Automático de Puntos para la Entrevista 1-a-1
    const talkingPointsList = document.getElementById('coach-talking-points-list');
    if (talkingPointsList) {
      talkingPointsList.innerHTML = '';
      const talkingPoints = RulesEngine.generateInterviewTalkingPoints(profile);

      talkingPoints.forEach((tp) => {
        const item = document.createElement('div');
        item.className = 'talking-point-item';
        item.innerHTML = `
          <div class="tp-category">${tp.categoria}</div>
          <div class="tp-title">${tp.tema}</div>
          <div class="tp-detail">${tp.detalle}</div>
          <div class="tp-suggestion">💬 <strong>Sugerencia para el Coach:</strong> ${tp.sugerenciaCoach}</div>
        `;
        talkingPointsList.appendChild(item);
      });
    }

    // Bandeja de Entrevistas Solicitadas por este alumno
    const tray = document.getElementById('coach-interviews-tray');
    if (tray) {
      const allRequests = AppState.getInterviewRequests();
      const studentRequests = allRequests.filter((r) => r.profileId === profile.id);

      if (studentRequests.length === 0) {
        tray.innerHTML = '<div style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">No hay sesiones 1-a-1 agendadas pendientes para este alumno.</div>';
      } else {
        tray.innerHTML = `
          <table class="cohort-table">
            <thead>
              <tr>
                <th>Fecha y Hora</th>
                <th>Estado</th>
                <th>Inquietudes del Alumno</th>
                <th>Gatillador Principal</th>
              </tr>
            </thead>
            <tbody>
              ${studentRequests.map((req) => `
                <tr>
                  <td><strong>${req.fecha}</strong> a las ${req.hora} hs</td>
                  <td><span class="badge badge-risk-verde">Confirmada</span></td>
                  <td>${req.notas || 'Revisión periódica'}</td>
                  <td><span class="badge badge-cyan">${req.resumenTelemetrico?.topBarrera || 'General'}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }
    }
  }
}

// Inicialización automática cuando el DOM está listo (con guarda para evitar doble inicialización)
function bootEntrenhabitosApp() {
  if (window.appController) return;
  const app = new AppController();
  window.appController = app;
  app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootEntrenhabitosApp);
} else {
  bootEntrenhabitosApp();
}


})();
