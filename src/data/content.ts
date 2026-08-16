import { ServiceDetail, FAQItem, Testimonial } from '../types';

export const CLINICAL_INFO = {
  name: 'Begoña Roy',
  title: 'Psicóloga Sanitaria & Psicooncóloga',
  degree: 'Licenciada en Psicología por la Universidad de Valencia (1995)',
  collegiateNumber: 'CV-07890 (Colegio Oficial de Psicología)',
  sanitaryRegistration: 'Habilitación Sanitaria Oficial',
  yearsExperience: '+25 años de trayectoria profesional',
  pericardiumSince: 'Facilitadora de Liberación del Pericardio desde 2017',
  location: 'Plaza Europa, 50003 Zaragoza',
  fullAddress: 'Plaza Europa, 50003 Zaragoza (Dirección detallada al concertar la cita)',
  phone: '+34 622 00 00 00',
  phoneDisplay: '+34 622 00 00 00',
  whatsappUrl: 'https://wa.me/34622000000?text=Hola%20Bego%C3%B1a,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20una%20sesi%C3%B3n.',
  email: 'info@begonaroy.com',
  workingHours: 'Lunes a Viernes: 09:00 - 20:00 (Cita previa)',
};

export const IMAGES = {
  heroAtmosphere: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', // Cozy calm interior with ceramic vase and warm light
  begonaPortrait: '/public/people/begona-roy.png', // Professional warm empathetic woman psychologist in sunlit space
  clinicInterior: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80', // Peaceful consultation room with soft armchair and plant
  ansiedad: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', // Serene breathing, hands on heart / meditation
  duelo: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80', // Soft morning mist, gentle sunlight in nature
  psicooncologia: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80', // Gentle warm hands holding each other in trust
  pericardio: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', // Somatic gentle hands therapy / healing hands
  zaragozaCity: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80', // Architectural calm
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'ansiedad-estres',
    slug: 'ansiedad',
    title: 'Gestión de la Ansiedad y Estrés',
    subtitle: 'Regula tu sistema nervioso y recupera el centro de tu vida',
    description: 'Abordaje integral que combina herramientas cognitivas, regulación vagal y consciencia somática para desactivar la hiperalerta y reencontrar la calma.',
    fullContent: [
      'La ansiedad no es un defecto personal ni una debilidad; es una respuesta adaptativa del organismo cuando el sistema nervioso percibe una amenaza o sobrecarga prolongada.',
      'En consulta trabajamos desde la comprensión neurobiológica de la alarma interna, integrando técnicas de regulación del nervio vago, desactivación del bucle de pensamientos catastróficos y anclajes corporales.',
      'Aprenderás a escuchar el mensaje de tu síntoma sin luchar contra él, desarrollando recursos de autorregulación y autocompasión que perduran en el tiempo.'
    ],
    benefits: [
      'Disminución del estado de alerta continuo y la tensión muscular',
      'Herramientas prácticas de respiración y autorregulación somática',
      'Desactivación de pensamientos rumiantes e insomnio',
      'Mayor claridad para la toma de decisiones cotidianas'
    ],
    forWhom: [
      'Personas con sensación constante de agobio o nudo en el estómago',
      'Quienes experimentan ataques de pánico o miedo a perder el control',
      'Profesionales con sobrecarga laboral y síndrome de burnout',
      'Personas con somatizaciones (palpitaciones, bruxismo, molestias digestivas)'
    ],
    duration: '50 - 60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Salud Emocional',
    image: IMAGES.ansiedad
  },
  {
    id: 'duelo-trauma',
    slug: 'duelo',
    title: 'Procesos de Duelo y Trauma',
    subtitle: 'Elaborar la pérdida con ternura, presencia y respeto por tus tiempos',
    description: 'Acompañamiento cercano en duelos significativos, rupturas, pérdida de salud o traumas acumulativos que dificultan avanzar en el presente.',
    fullContent: [
      'El duelo es el proceso natural de reorganización interna tras una pérdida significativa: un ser querido, un proyecto de vida, la salud o una relación.',
      'No existen fórmulas mágicas ni tiempos preestablecidos. Te ofrezco un espacio seguro y sin juicios donde expresar la tristeza, la rabia, la culpa o el desconcierto.',
      'Trabajamos con respeto profundo por tu ritmo biológico, facilitando la integración de la memoria emocional para que el dolor se transforme en recuerdo amoroso y sentido vital.'
    ],
    benefits: [
      'Validación y expresión emocional sin exigencias sociales de "estar bien"',
      'Comprensión de las diferentes etapas y ondulaciones del duelo',
      'Alivio de la culpa y la sensación de vacío abrumador',
      'Reconstrucción gradual de la identidad y del proyecto vital'
    ],
    forWhom: [
      'Pérdida reciente o no elaborada de un ser querido',
      'Duelo por diagnóstico médico de enfermedad crónica o degenerativa',
      'Rupturas afectivas y cambios vitales drásticos',
      'Experiencias traumáticas que reaparecen en forma de recuerdos intrusivos'
    ],
    duration: '50 - 60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Elaboración y Sanación',
    image: IMAGES.duelo
  },
  {
    id: 'psicooncologia',
    slug: 'psicooncologia',
    title: 'Psicooncología y Acompañamiento Oncológico',
    subtitle: 'Sostén psicológico especializado para pacientes y familias en cada etapa',
    description: 'Acompañamiento compasivo desde el impacto del diagnóstico inicial, durante los tratamientos (quimio, radio, cirugía) y en la etapa de supervivencia o final de vida.',
    fullContent: [
      'El diagnóstico de cáncer genera un impacto existencial que sacude todas las áreas de la vida: emocional, corporal, familiar y espiritual.',
      'Como psicóloga sanitaria especializada en Psicooncología con más de dos décadas de experiencia, acompaño tanto a la persona diagnosticada como a sus cuidadores y familiares.',
      'Trabajamos el manejo de la incertidumbre, el miedo a la recidiva, los cambios en la imagen corporal, la fatiga asociada al tratamiento y la comunicación con el entorno cercano.'
    ],
    benefits: [
      'Reducción de la angustia y el shock tras la noticia del diagnóstico',
      'Estrategias para afrontar las pruebas médicas y tratamientos oncológicos',
      'Espacio confidencial para expresar miedos que a veces se ocultan a la familia',
      'Soporte al cuidador principal para prevenir el desgaste emocional y físico'
    ],
    forWhom: [
      'Personas recién diagnosticadas o en tratamiento activo',
      'Supervivientes de cáncer que experimentan temor a la recaída o desorientación vital',
      'Familiares y parejas que desean aprender a acompañar sin sobrecargarse',
      'Pacientes en fases avanzadas que buscan serenidad y cierre emocional'
    ],
    duration: '50 - 60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    featured: true,
    tag: 'Especialidad Destacada',
    image: IMAGES.psicooncologia
  },
  {
    id: 'bloqueo-emocional',
    slug: 'bloqueo',
    title: 'Bloqueo Emocional y Trastornos Psicosomáticos',
    subtitle: 'Escucha lo que tu cuerpo y tus emociones intentan comunicarte',
    description: 'Cuando la palabra no alcanza, el cuerpo habla. Integramos la escucha del síntoma físico y la comprensión de patrones repetitivos o crisis existenciales.',
    fullContent: [
      'Muchos de nuestros malestares físicos recurrentes (opresiones, contracturas crónicas, alteraciones digestivas o fatiga) son ecos de emociones retenidas que no encontraron cauce en su momento.',
      'Mediante un enfoque integrador cuerpo-mente, exploramos el origen de los bloqueos emocionales y las crisis de sentido vital o despertar de consciencia.',
      'Te acompaño a descodificar el mensaje del cuerpo, liberando lealtades inconscientes y reconectando con tu propia verdad y bienestar.'
    ],
    benefits: [
      'Comprensión del sentido biológico y emocional del síntoma',
      'Desbloqueo de emociones atrapadas (ira, tristeza reprimida, miedo arcaico)',
      'Alineación entre lo que sientes, lo que piensas y lo que haces',
      'Apertura a una mayor paz interior y autenticidad en tus relaciones'
    ],
    forWhom: [
      'Sensación de estar estancado o desconectado de tus propios deseos',
      'Síntomas físicos sin causa médica concluyente o exacerbados por estrés',
      'Personas en procesos de cambio profundo o búsqueda espiritual sincera',
      'Patrones de autoexigencia extrema y dificultad para poner límites'
    ],
    duration: '50 - 60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Integración Somática',
    image: IMAGES.clinicInterior
  }
];

export const PERICARDIUM_INFO = {
  title: 'Liberación del Pericardio',
  subtitle: 'Una puerta de entrada suave y profunda para liberar las memorias guardadas en el corazón',
  facilitatorNote: 'Facilito este acompañamiento manual y celular desde el año 2017 tras formarme con el método original.',
  quote: 'El corazón se abre cuando se siente seguro.',
  quoteAuthor: 'Begoña Roy',
  whatIsText: [
    'El pericardio es una membrana fibroserosa sumamente resistente que envuelve, protege y sostiene al corazón en el centro de la caja torácica. Es el guardián biológico y emocional de nuestro centro vital.',
    'Ante cualquier impacto emocional intenso —miedo súbito, shock, duelo, estrés crónico o trauma— el pericardio reacciona de forma automática contrayéndose para amortiguar el impacto sobre el miocardio.',
    'Cuando esta contracción se vuelve crónica, el pericardio no recupera su elasticidad natural, traccionando de sus múltiples inserciones ligamentosas anatómicas (diafragma, esternón, columna vertebral, base del cráneo) y alterando el equilibrio neurovegetativo y circulatorio.',
    'La Liberación del Pericardio es una terapia manual sutil y profunda que restablece el movimiento natural de los tejidos y permite liberar las memorias celulares atrapadas, devolviendo al cuerpo su capacidad innata de autorregulación y alegría de vivir.'
  ],
  anatomicalConnections: [
    {
      title: 'El Diafragma y la Respiración',
      description: 'A través de los ligamentos frénico-pericárdicos, un pericardio contraído bloquea el libre movimiento del diafragma, generando respiración corta, fatiga y sensación de ahogo.',
      icon: 'Wind'
    },
    {
      title: 'El Esternón y las Costillas',
      description: 'Los ligamentos esterno-pericárdicos transmiten la tensión al pecho, manifestándose como sensación de opresión precordial, pesadez torácica o nudo en el centro del pecho.',
      icon: 'Shield'
    },
    {
      title: 'La Columna Cervical y Dorsal',
      description: 'Las inserciones vértebro-pericárdicas conectan el corazón con las vértebras dorsales y cervicales, originando rigidez de hombros, contracturas interescapulares y dolor de cuello.',
      icon: 'Activity'
    },
    {
      title: 'La Base del Cráneo y el Nervio Vago',
      description: 'A través de las fascias prevertebrales y el sistema neurovegetativo, la liberación armoniza el tono vagal, calmando la taquicardia funcional y la ansiedad de origen somático.',
      icon: 'Brain'
    }
  ],
  sessionSteps: [
    {
      step: '01',
      title: 'Recepción y Escucha Consciente',
      subtitle: 'Toma de contacto y mapa corporal',
      description: 'Iniciamos con una conversación tranquila donde revisamos tu momento vital, los motivos de tu visita y cómo responde tu cuerpo a las situaciones de estrés.'
    },
    {
      step: '02',
      title: 'Trabajo Suave en Camilla',
      subtitle: 'Toque respetuoso y sutil',
      description: 'Completamente vestido, te recuestas cómodamente. Mediante una escucha tisular muy suave y respetuosa, sin manipulaciones bruscas ni dolor, se van liberando las tensiones en las inserciones pericárdicas.'
    },
    {
      step: '03',
      title: 'Integración y Calma Celular',
      subtitle: 'Asimilación y descanso profundo',
      description: 'Unos minutos de reposo permiten al sistema nervioso central integrar la apertura torácica, restableciendo la circulación energética y la coherencia cardíaca.'
    }
  ],
  benefitsList: [
    'Sensación inmediata de apertura y ligereza en la caja torácica',
    'Respiración diafragmática fluida, amplia y natural',
    'Disminución del insomnio y la tensión nerviosa acumulada',
    'Liberación de llanto retenido o emociones contenidas sin catarsis forzadas',
    'Mayor conexión afectiva con uno mismo y con los demás'
  ]
};

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Cómo es la primera sesión de valoración?',
    answer: 'La primera sesión es un espacio cálido y sin presiones para conocernos. Dedicaremos el tiempo a escuchar lo que te trae a consulta, comprender tu historia y acordar juntos los objetivos y el enfoque terapéutico que mejor se adapte a tus necesidades.'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: '¿Cuánto dura una sesión y con qué frecuencia se realizan?',
    answer: 'Las sesiones de psicología tienen una duración de entre 50 y 60 minutos. Las de Liberación del Pericardio suelen durar entre 60 y 75 minutos. La frecuencia habitual suele ser semanal o quincenal al inicio, espaciándose conforme vas consolidando tus recursos internos y sintiendo mayor bienestar.'
  },
  {
    id: 'faq-3',
    category: 'online',
    question: '¿Cómo funciona la modalidad de terapia online?',
    answer: 'La terapia online se realiza a través de una plataforma de videoconsulta cifrada y segura. Solo necesitas un dispositivo con cámara y micrófono, buena conexión a internet y un espacio tranquilo y privado donde puedas expresarte con total libertad. Tiene exactamente la misma eficacia clínica que la modalidad presencial.'
  },
  {
    id: 'faq-4',
    category: 'psicologia',
    question: '¿Cuál es la diferencia entre Psicología Sanitaria y Psicooncología?',
    answer: 'La Psicología Sanitaria aborda los problemas emocionales y de salud mental general (ansiedad, depresión, duelo, autoestima). La Psicooncología es una especialidad que profundiza en el impacto biopsicosocial específico del cáncer en pacientes y familiares, abordando el shock del diagnóstico, la tolerancia a tratamientos y el miedo a la recaída.'
  },
  {
    id: 'faq-5',
    category: 'pericardio',
    question: '¿Necesito desvestirme para la sesión de Liberación del Pericardio?',
    answer: 'No. La sesión de Liberación del Pericardio se realiza completamente vestido, con ropa cómoda (preferiblemente de algodón o prendas no restrictivas). Solo tendrás que descalzarte para recostarte en la camilla.'
  },
  {
    id: 'faq-6',
    category: 'pericardio',
    question: '¿La Liberación del Pericardio sustituye a un tratamiento médico?',
    answer: 'En ningún caso. La Liberación del Pericardio es una disciplina complementaria y de acompañamiento somato-emocional que apoya la autorregulación natural del organismo. Nunca se deben abandonar los tratamientos médicos o farmacológicos prescritos por profesionales de la medicina.'
  },
  {
    id: 'faq-7',
    category: 'tarifas',
    question: '¿Cómo se realiza el abono de las sesiones?',
    answer: 'Para las sesiones presenciales en la consulta de Plaza Europa (Zaragoza), el abono puede realizarse en efectivo, tarjeta o Bizum al finalizar. Para las sesiones online, el pago se realiza previamente mediante transferencia bancaria o Bizum.'
  },
  {
    id: 'faq-8',
    category: 'general',
    question: '¿Es confidencial todo lo que hablemos en sesión?',
    answer: 'Absolutamente. Como psicóloga sanitaria colegiada (Col. nº CV-07890), todo el contenido de las sesiones está rigurosamente protegido por el secreto profesional y el Código Deontológico de la Psicología, así como por la normativa europea de protección de datos sanitarios (RGPD).'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Carmen M.',
    service: 'Psicooncología & Duelo',
    quote: 'Encontrar a Begoña durante el tratamiento de mi madre fue un ancla de paz en mitad de la tormenta. Su calidez y su mirada sin juicios nos sostuvieron a todos.',
    context: 'Acompañamiento familiar oncológico'
  },
  {
    id: 'test-2',
    author: 'Javier S.',
    service: 'Gestión de la Ansiedad',
    quote: 'Llegué con crisis de pánico casi diarias y una sensación de opresión constante en el pecho. Aprender a entender lo que mi cuerpo me decía lo cambió todo.',
    context: 'Proceso de 6 meses en consulta'
  },
  {
    id: 'test-3',
    author: 'Elena R.',
    service: 'Liberación del Pericardio',
    quote: 'La sesión de pericardio fue una de las experiencias más reveladoras y amorosas que he vivido. Sentí que volvía a respirar con los pulmones llenos después de años.',
    context: 'Sesiones en Plaza Europa, Zaragoza'
  }
];

export const BIO_FULL_STORY = {
  headline: 'Una mirada integradora al ser humano: Ciencia, Presencia y Corazón',
  paragraphs: [
    'Comencé mi andadura profesional licenciándome en Psicología por la prestigiosa Universidad de Valencia en el año 1995. Desde mis primeros pasos en la profesión supe que mi vocación residía en el acompañamiento profundo del sufrimiento humano.',
    'Durante más de dos décadas he trabajado en el ámbito hospitalario, organizaciones no gubernamentales (ONGs) y en mi consulta privada, especializándome en situaciones de alta vulnerabilidad emocional como los procesos oncológicos, las pérdidas traumáticas y el duelo severo.',
    'Con el paso de los años y la experiencia clínica acumulada, comprendí que el ser humano no puede dividirse en compartimentos estancos: lo que la mente calla o reprime, el cuerpo lo manifiesta en forma de síntoma, dolor o enfermedad.',
    'Por ello, fui complementando mi formación académica tradicional con enfoques humanistas y corporales de vanguardia: Máster en Psicooncología, EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares), Mindfulness aplicado a la salud, BioNeuroEmoción y, desde 2017, la Formación Internacional en Liberación del Pericardio.',
    'Mi misión no es darte respuestas prefabricadas, sino acompañarte a recordar y activar las soluciones y la sabiduría que ya habitan en ti, creando un espacio seguro donde puedas sentirte escuchado, acogido y en paz.'
  ],
  milestones: [
    { year: '1995', title: 'Licenciatura en Psicología', desc: 'Universidad de Valencia. Especialidad Clínica.' },
    { year: '2000 - 2010', title: 'Acompañamiento en ONGs y Salud', desc: 'Coordinación de programas psicosociales y apoyo en duelo.' },
    { year: '2012', title: 'Máster en Psicooncología', desc: 'Formación avanzada en soporte emocional para pacientes de cáncer.' },
    { year: '2017', title: 'Liberación del Pericardio', desc: 'Certificación internacional en el método de liberación celular y pericárdica.' },
    { year: 'Actualidad', title: 'Consulta Sanitaria en Zaragoza (Plaza Europa) & Online', desc: 'Práctica clínica integradora con más de 25 años de vocación.' }
  ]
};
