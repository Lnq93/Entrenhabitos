/**
 * Entrenhábitos - Catálogo de Datos Semilla y Taxonomía Conductual
 * Modelado para R4 (Prototipo Web Interactivo)
 */

export const BARRIERS_CATALOG = {
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

export const INTERVENTIONS_CATALOG = {
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

export const ARCHETYPES_CATALOG = {
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

export const INITIAL_PROFILES = [
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

export const ONBOARDING_QUESTIONS = [
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
