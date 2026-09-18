import { ServiceDetail, FAQItem, Testimonial } from '../types';
import despertarEspiritualImg from '../assets/images/despertar_espiritual_meditacion_1787930836551.jpg';
import ansiedadEstresImg from '../assets/images/ansiedad_estres_dialogo_1787931280502.jpg';
import dueloImg from '../assets/images/duelo_abrazo_espejo_1787931967055.jpg';
import tristezaDepresionImg from '../assets/images/tristeza_depresion_apoyo_1787932165448.jpg';
import traumaImg from '../assets/images/trauma_sanacion_corazon_1787932373434.jpg';
import psicosomaticosImg from '../assets/images/psicosomaticos_escucha_cuerpo_1787932714411.jpg';
import psicooncologiaImg from '../assets/images/psicooncologia_manos_apoyo_1787933101360.jpg';
import pericardioImg from '../assets/images/pericardio_florecer_corazon_1787933418955.jpg';

export const CLINICAL_INFO = {
  name: 'Begoña Roy',
  title: 'Psicóloga Sanitaria & Psicooncóloga',
  degree: 'Licenciada en Psicología por la Universidad de Valencia (1995)',
  collegiateNumber: 'A-1008',
  sanitaryRegistration: 'Acompañamiento personalizado',
  yearsExperience: '+25 años de trayectoria profesional',
  pericardiumSince: 'Facilitadora de Liberación del Pericardio desde 2017',
  location: 'C/ Arzobispo Morcillo 40 - Pral. E2 | 50006 Zaragoza',
  fullAddress: 'C/ Arzobispo Morcillo 40 - Pral. E2, 50006 Zaragoza',
  phone: '+34655514830',
  phoneDisplay: '+34 655 514 830',
  whatsappUrl: 'https://wa.me/34655514830?text=Hola%20Bego%C3%B1a,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20una%20sesi%C3%B3n.',
  email: 'psicologiaroy@gmail.com',
  workingHours: 'Lunes a Viernes: 09:00 - 20:00 (Cita previa)',
};

export const IMAGES = {
  heroAtmosphere: '/people/begonaroy-psicologa.jpeg', // Cozy calm interior with ceramic vase and warm light
  begonaPortrait: '/people/begona-roy-escucha-integral.png', // Professional warm empathetic woman psychologist in sunlit space
  clinicInterior: '/people/begona-psicologaintegral.jpg', // Peaceful consultation room with soft armchair and plant
  ansiedad: '/illustrations/escucha-integral.png', // Editorial therapy room conversation illustration with site colors
  depresion: '/illustrations/tristeza-depresion.png', // Editorial compassionate support illustration with site colors
  duelo: '/illustrations/duelo.png', // Editorial grief & self-compassion mirror hug illustration with site colors
  psicooncologia: '/illustrations/psicooncologia.png', // Editorial psycho-oncology hands holding & purple cancer ribbon illustration with site colors
  trauma: '/illustrations/trauma.png', // Editorial somatic trauma healing & heart connection illustration with site colors
  psicosomaticos: '/illustrations/psicosomaticos.png', // Editorial mind-body somatic awareness illustration with site colors
  espiritual: '/illustrations/despertarEspiritual.png', // Minimalist meditation in nature illustration with site colors
  pericardio: '/illustrations/pericardio.jpg', // Editorial blooming heart & osteopathic pericardium release illustration with site colors
  pericardioSession: '/people/begona-roy-pericardio.jpg', // Session in treatment table image
  emdrApproach: '/people/begonaroy-emdr.jpeg', // EMDR approach image
  psicooncologiaApproach: '/img/psicooncologia-begona-roy.jpg', // Psico-oncology approach image
  zaragozaCity: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80', // Architectural calm
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'ansiedad-estres',
    slug: 'ansiedad',
    title: 'Ansiedad / Estrés',
    subtitle: 'Regula tu sistema nervioso, desactiva la alarma interna y recupera la calma',
    description: 'Abordaje integral que combina herramientas cognitivas, regulación del sistema nervioso y consciencia somática para salir del estado de hiperalerta continuo.',
    fullContent: [
      'La ansiedad no es un defecto personal ni una debilidad; es una respuesta adaptativa del organismo cuando el sistema nervioso percibe una sobrecarga o amenaza prolongada.',
      'En consulta trabajamos desde la comprensión neurobiológica de la alarma interna, integrando técnicas de regulación del nervio vago, desactivación del bucle de pensamientos catastróficos y anclajes corporales.',
      'Aprenderás a escuchar el mensaje de tu síntoma sin luchar contra él, desarrollando recursos de autorregulación y autocompasión que perduran en el tiempo.'
    ],
    benefits: [
      'Disminución del estado de alerta continuo y la tensión muscular',
      'Herramientas prácticas de respiración y autorregulación somática',
      'Desactivación de pensamientos rumiantes e insomnio',
      'Mayor serenidad y claridad para la toma de decisiones cotidianas'
    ],
    forWhom: [
      'Personas con sensación constante de prisa, nudo en el estómago o agobio',
      'Quienes experimentan ataques de pánico o miedo a perder el control',
      'Profesionales con sobrecarga laboral y síndrome de burnout',
      'Personas con somatizaciones como palpitaciones, bruxismo o molestias digestivas'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Salud Emocional',
    image: IMAGES.ansiedad
  },
  {
    id: 'tristeza-depresion',
    slug: 'depresion',
    title: 'Tristeza / Depresión',
    subtitle: 'Un espacio compasivo para comprender el vacío y reencontrar la luz y el sentido',
    description: 'Acompañamiento sin juicios ni exigencias para transitar la falta de energía, la desmotivación profunda y el dolor emocional desde el respeto absoluto por tus ritmos.',
    fullContent: [
      'La tristeza profunda o el estado depresivo nos indica que algo en nuestra vida necesita ser escuchado, atendido o despedido. Forzarse a "estar bien" suele generar más culpa y aislamiento.',
      'En sesión creamos un lugar seguro donde poder ser tal y como estás en este momento, comprendiendo el origen de tu desánimo sin etiquetas que te limiten.',
      'Poco a poco reconstruimos puentes con tu bienestar, rescatando tus recursos internos y reconectando con deseos genuinos a tu propio compás.'
    ],
    benefits: [
      'Validación de tu estado emocional sin exigencias sociales de positividad forzada',
      'Recuperación gradual de la energía vital y la motivación',
      'Alivio de la autocrítica destructiva, la apatía y la culpa',
      'Reconexión con el sentido vital y el autocuidado consciente'
    ],
    forWhom: [
      'Sensación de vacío, abatimiento prolongado o pérdida de ilusión',
      'Dificultad para levantarse con energía o afrontar las tareas diarias',
      'Personas que sienten que han perdido el rumbo o la conexión consigo mismas',
      'Estados de tristeza recurrente tras cambios de etapa vital'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Reconexión Vital',
    image: IMAGES.depresion
  },
  {
    id: 'duelo',
    slug: 'duelo',
    title: 'Duelo',
    subtitle: 'Elaborar las pérdidas vitales con ternura, presencia y respeto por tus tiempos',
    description: 'Acompañamiento en el proceso de despedida y reorganización interna ante el fallecimiento de un ser querido, rupturas o pérdidas de salud y proyectos.',
    fullContent: [
      'El duelo es el proceso natural de reorganización interna tras una pérdida significativa: un ser querido, un proyecto de vida, la salud o una relación.',
      'No existen fórmulas mágicas ni tiempos preestablecidos. Te ofrezco un espacio seguro y sin juicios donde expresar la tristeza, la rabia, la culpa o el desconcierto.',
      'Trabajamos con respeto profundo por tu ritmo biológico, facilitando la integración de la memoria emocional para que el dolor se transforme en recuerdo amoroso y sentido vital.'
    ],
    benefits: [
      'Validación y expresión emocional sin exigencias de "superarlo rápido"',
      'Comprensión de las diferentes etapas y ondulaciones del duelo',
      'Alivio de la culpa y la sensación de vacío abrumador',
      'Reconstrucción gradual de la identidad y del proyecto vital'
    ],
    forWhom: [
      'Pérdida reciente o no elaborada de un ser querido',
      'Duelo por diagnóstico médico o pérdida de capacidades físicas',
      'Rupturas afectivas y cambios vitales drásticos',
      'Duelos desautorizados o congelados en el tiempo'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Elaboración y Sanación',
    image: IMAGES.duelo
  },
  {
    id: 'psicooncologia',
    slug: 'psicooncologia',
    title: 'Psicooncología',
    subtitle: 'Sostén psicológico especializado para pacientes y familiares en todas las etapas del cáncer',
    description: 'Acompañamiento compasivo desde el impacto del diagnóstico inicial, durante los tratamientos (quimio, radio, cirugía) y en la etapa de supervivencia o final de vida.',
    fullContent: [
      'El diagnóstico de cáncer genera un impacto existencial que sacude todas las áreas de la vida: emocional, corporal, familiar y espiritual.',
      'Como psicóloga sanitaria especializada en Psicooncología con más de dos décadas de experiencia asistencial, acompaño tanto a la persona diagnosticada como a sus cuidadores y familiares.',
      'Trabajamos el manejo de la incertidumbre, el miedo a la recidiva, los cambios en la imagen corporal, la fatiga asociada al tratamiento y la comunicación con el entorno cercano.'
    ],
    benefits: [
      'Reducción de la angustia y el shock tras la noticia del diagnóstico',
      'Estrategias para afrontar las pruebas médicas y tratamientos oncológicos',
      'Espacio confidencial para expresar miedos que a veces se ocultan a la familia',
      'Soporte al cuidador principal para prevenir el desgaste emocional y físico'
    ],
    forWhom: [
      'Personas recién diagnosticadas o en tratamiento activo de cáncer',
      'Supervivientes que experimentan temor a la recaída o desorientación vital',
      'Familiares y parejas que desean aprender a acompañar sin sobrecargarse',
      'Pacientes en fases avanzadas que buscan serenidad, alivio y cierre emocional'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    image: IMAGES.psicooncologia
  },
  {
    id: 'bloqueo-emocional-trauma',
    slug: 'trauma',
    title: 'Bloqueo Emocional',
    subtitle: 'Desbloquear recuerdos dolorosos, heridas del pasado e integrar tu historia',
    description: 'Terapia integrativa con EMDR y enfoque somático para procesar experiencias traumáticas (físicas, emocionales o relacionales) que impiden avanzar en el presente.',
    fullContent: [
      'Cuando vivimos situaciones abrumadoras o de indefensión, nuestro sistema de procesamiento de información puede quedar bloqueado, generando síntomas que reaparecen años después.',
      'Mediante la terapia EMDR (avalada por la OMS) y técnicas de integración somática, facilitamos que el cerebro procese de forma adaptativa los recuerdos que causan dolor.',
      'El objetivo es que el pasado deje de doler en el presente y puedas habitar tu vida con mayor seguridad, ligereza y autoconfianza.'
    ],
    benefits: [
      'Reprocesamiento y desensibilización de recuerdos dolorosos con EMDR',
      'Disolución de bloqueos emocionales recurrentes y miedos paralizantes',
      'Recuperación de la sensación de seguridad y calma en el propio cuerpo',
      'Mayor libertad para elegir cómo responder ante las situaciones de la vida'
    ],
    forWhom: [
      'Experiencias traumáticas pasadas (accidentes, abusos, negligencias emocionales)',
      'Recuerdos intrusivos, pesadillas o hipervigilancia',
      'Bloqueos repentinos ante retos personales, laborales o de pareja',
      'Sensación de vivir atrapado/a en vivencias del pasado'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Terapia EMDR & Somática',
    image: IMAGES.trauma
  },
  {
    id: 'trastornos-psicosomaticos',
    slug: 'psicosomaticos',
    title: 'Trastornos Psicosomáticos',
    subtitle: 'Escucha lo que tu cuerpo expresa cuando las palabras no alcanzan',
    description: 'Abordaje psicosomático integrador para descodificar el síntoma físico (contracturas crónicas, colon irritable, cefaleas, opresiones) y restaurar el equilibrio mente-cuerpo.',
    fullContent: [
      'Muchos de nuestros malestares físicos recurrentes (opresiones torácicas, contracturas crónicas, problemas digestivos o fatiga sin causa médica concluyente) son ecos de emociones retenidas que no encontraron cauce en su momento.',
      'Mediante un enfoque integrador cuerpo-mente, exploramos el sentido y la raíz del síntoma, facilitando la autorregulación del sistema nervioso y la liberación de tensiones profundas.',
      'Aprenderás a dialogar con las señales corporales como guías de salud y autoconocimiento en lugar de vivirlas como enemigas.'
    ],
    benefits: [
      'Comprensión del sentido biológico y emocional del síntoma físico',
      'Alivio de la tensión somática crónica y mejora del descanso',
      'Alineación entre lo que sientes, lo que piensas y lo que haces en tu vida',
      'Autorregulación neurovegetativa y mayor bienestar integral'
    ],
    forWhom: [
      'Personas con somatizaciones frecuentes (cefaleas tensionales, colon irritable, bruxismo)',
      'Síntomas físicos agravados por épocas de estrés o tensión emocional',
      'Sensación de desconexión corporal o cuerpo en tensión continua',
      'Dificultad para poner límites o expresar emociones que terminan somatizándose'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Mente y Cuerpo',
    image: IMAGES.psicosomaticos
  },
  {
    id: 'despertar-espiritual',
    slug: 'espiritual',
    title: 'Síntomas del Despertar Espiritual',
    subtitle: 'Anclaje, sentido y sostén psicológico en procesos de transformación interior y alta sensibilidad',
    description: 'Un marco de acogida profesional, cálido y sin dogmas para integrar aperturas de conciencia, hipersensibilidad y crisis existenciales profundas.',
    fullContent: [
      'En momentos de despertar de conciencia o de profundas crisis existenciales, las viejas estructuras caen y podemos experimentar desorientación, hipersensibilidad, cambios de valores o sensación de no encajar en el entorno habitual.',
      'Te ofrezco un espacio seguro y profesional donde validar estas vivencias sin patologizarlas, combinando la psicología integradora con el enraizamiento a tierra y la presencia consciente.',
      'Trabajamos para que tu evolución interior se traduzca en una vida cotidiana más coherente, amorosa, pacífica y arraigada.'
    ],
    benefits: [
      'Validación y comprensión de crisis existenciales y procesos de despertar',
      'Herramientas prácticas de anclaje a tierra (grounding) y gestión de la alta sensibilidad',
      'Clarificación del propósito y alineación con tus valores esenciales',
      'Paz interior y armonía entre tu vida espiritual y tu día a día'
    ],
    forWhom: [
      'Personas viviendo crisis de sentido, cambios repentinos de valores o noche oscura del alma',
      'Personas con Alta Sensibilidad (PAS) que sienten sobrecarga energética o sensorial',
      'Quienes buscan un terapeuta que comprenda la dimensión espiritual sin perder el rigor clínico',
      'Procesos de búsqueda interior, meditación profunda o necesidad de reconectar con la esencia'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza', 'Online'],
    tag: 'Consciencia y Sentido',
    image: IMAGES.espiritual
  },
  {
    id: 'liberacion-pericardio',
    slug: 'pericardio',
    title: 'Liberación del Pericardio',
    subtitle: 'Método de desbloqueo físico, emocional y celular creado por Montserrat Gascón',
    description: 'Tratamiento manual suave en camilla para liberar las retracciones del pericardio y devolver la expansión y vitalidad al corazón y a todo el organismo.',
    fullContent: [
      'El pericardio es la membrana que protege y sostiene el corazón físico y emocional. Ante cualquier impacto doloroso (miedo, tristeza, estrés, trauma), el pericardio se retrae y se endurece de forma automática.',
      'A través de una escucha tisular y un toque sutil y respetuoso en camilla, facilitamos la liberación de estas retracciones retenidas en las fascias e inserciones anatómicas.',
      'Sin manipulaciones bruscas ni dolor, permitimos que el cuerpo reconozca su propia energía de salud, recuperando la ligereza, la paz profunda y la conexión con el corazón.'
    ],
    benefits: [
      'Profunda relajación y alivio de la sensación de opresión en el pecho',
      'Desbloqueo de tensiones en diafragma, cuello, dorsales y zona torácica',
      'Regulación del sistema neurovegetativo (reducción del estrés y la hiperalerta)',
      'Reconexión con la propia esencia vital, alegría y ligereza interior'
    ],
    forWhom: [
      'Personas con opresión en el pecho, nudo en la garganta o respiración entrecortada',
      'Sobrecarga de estrés, contracturas de origen tensional o bloqueos emocionales',
      'Quienes desean un abordaje corporal y energético para sanar heridas del corazón',
      'Apto para todas las edades (adultos, jóvenes, mayores, embarazadas y niños)'
    ],
    duration: '60 minutos por sesión',
    modalities: ['Presencial en Zaragoza'],
    tag: 'Método Montserrat Gascón',
    image: IMAGES.pericardio
  }
];

export const PERICARDIUM_INFO = {
  title: 'Liberación del Pericardio',
  subtitle: 'Método de desbloqueo físico, emocional y espiritual descubierto y creado por Montserrat Gascón.',
  websiteUrl: 'https://pericardium.org',
  websiteDisplay: 'pericardium.org',
  facilitatorNote: 'Una formación y experiencia de vida en mí ha sido el tratamiento de liberación de pericardio: llevo formándome y practicándolo desde 2017.',
  quote: 'El corazón se abre cuando se siente seguro.',
  quoteAuthor: 'Begoña Roy',
  popularExpressions: [
    '“Tengo el corazón en un puño”',
    '“Me rompió el corazón”',
    '“Me ha dado un vuelco el corazón”',
    '“Tiene el corazón duro como una piedra”'
  ],
  whatIsParagraphs: [
    'El pericardio físicamente es una membrana muy especial que envuelve, sostiene, contiene y PROTEGE al corazón sosteniéndolo en el centro de nuestro ser.',
    'Por sus múltiples inserciones anatómicas y neurofisiológicas, cualquier reacción del pericardio afecta a todo nuestro organismo. El pericardio está íntimamente ligado al corazón, y a través de sus múltiples inserciones anatómicas y neurofisiológicas está directamente ligado a todos los sistemas de nuestro cuerpo: el cardio-vascular, respiratorio (pulmones, diafragma), neuro-vegetativo (responsable del estrés y del relax), inmunitario, neuro-hormonal, digestivo y musculo-esquelético (base del cráneo, costillas y toda la columna).',
    'Su misión principal es guardar y proteger al corazón a todos los niveles: físico, microbiológico y sobre todo a nivel emocional.',
    'El pericardio guarda todas las memorias emocionales desde nuestra infancia y esta membrana se retrae como una célula cuando sufrimos impactos emocionales. Cada vez que vivimos situaciones dolorosas y sentimos tristeza, miedo, ansiedad, soledad, rabia, incertidumbre, etc., se retrae, se endurece y se cierra.',
    'El pericardio hace esto de forma natural y automática para proteger al corazón y que siga bombeando para mantenernos con vida. Nuestro corazón es nuestro centro, el primer órgano en formarse y el último en morir. Si el pericardio está cerrado por los impactos emocionales, se bloquea nuestra energía y movimiento de vida, bloqueándose también nuestra energía espiritual.',
    'Cuando tenemos el pericardio retraído, la expresión y la expansión de quienes somos —de nuestra Esencia, Luz, Energía, Amor y Vibración— se encuentra limitada y cerrada. Físicamente, al estar conectado con otras partes de nuestro cuerpo, se producen todo tipo de problemas digestivos, de circulación, lumbalgias, presión en el pecho, dolores de cabeza, etc. Y al estar conectado también con el sistema nervioso simpático se produce mayor ansiedad, estrés, bloqueos y síntomas emocionales.',
    'Cuando el pericardio permanece cerrado durante un tiempo prolongado, comienza a generar bloqueos que afectan a todo el cuerpo.'
  ],
  processDescription: [
    'Es un masaje a través del cuerpo físico que se realiza en la camilla y donde el terapeuta utiliza sus manos para sentir el movimiento sutil de las células, órganos y fascias.',
    'Ponemos la atención para reconocer y sentir ese movimiento y, sin imponer ni poner intención —solo la atención—, permitimos que tu propio cuerpo recupere su equilibrio. Liberando la energía contenida en el corazón, liberando las retracciones y tensiones del cuerpo físico, energético y emocional, haciendo llegar toda esta energía del corazón, donde está contenida toda la información de nuestra esencia, a todas las partes de nuestro cuerpo, sin forzar ni realizar maniobras bruscas, solo acompañando su propio movimiento.',
    'Restableciendo así el equilibrio de salud, la homeostasis y la armonía.',
    'En el tratamiento no ponemos ninguna energía externa: cada persona tiene, de origen, su propia energía sanadora y ponemos la atención para que se sienta reconocida y poder expresarse desde la alegría y el amor.',
    'Cada sesión es específica para cada persona, no se trata de maniobras, y por eso también cada día se puede sentir diferente. La posición habitual es vestido, con su propia ropa y tumbado en la camilla. Aunque si se requiere, se puede adaptar la posición a las circunstancias de cada persona: tumbados de lado, en silla, sillas de ruedas… No tiene ninguna contraindicación. Es maravilloso para todas las edades, desde bebés hasta embarazadas o ancianos. Porque el terapeuta se adapta al ritmo, al baile, de cada ser.',
    'Cada tratamiento puede sentirse de forma diferente, dependiendo del momento y el ritmo de cada persona, pero siempre se conecta con ese estado de relajación, mayor conciencia y conexión con uno mismo desde la paz y la calma.',
    'Este tratamiento es un método de desbloqueo que llega a la raíz de cualquier problema a nivel físico, visceral, metabólico, emocional y energético cuyo resultado es una profunda relajación, bienestar, armonización y ligereza de todo el organismo.'
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
      description: 'Completamente vestido con tu propia ropa, te recuestas cómodamente. Mediante una escucha tisular muy suave y respetuosa, sin maniobras bruscas ni dolor, se van liberando las tensiones y retracciones en las inserciones pericárdicas.'
    },
    {
      step: '03',
      title: 'Integración y Calma Celular',
      subtitle: 'Asimilación y descanso profundo',
      description: 'Unos minutos de reposo permiten al sistema nervioso central integrar la apertura torácica, restableciendo la circulación energética, la homeostasis y la coherencia cardíaca.'
    }
  ],
  benefitsList: [
    'Sensación inmediata de apertura, ligereza y desahogo en la caja torácica',
    'Respiración diafragmática fluida, amplia, profunda y natural',
    'Alivio de opresión en el pecho, dolores de cabeza, lumbalgias y tensiones musculares',
    'Disminución notable de la ansiedad, el estrés crónico y el insomnio',
    'Liberación de memorias emocionales, llanto retenido y bloqueos sin catarsis forzadas',
    'Reconexión profunda con la propia Esencia, la paz interior, la alegría y la vitalidad'
  ]
};

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Cómo serán nuestras sesiones?',
    answer: 'La primera sesión es un espacio cálido y sin presiones para conocernos. Dedicaremos el tiempo a escuchar lo que te trae a consulta, comprender tu historia y acordar juntos los objetivos y el enfoque terapéutico que mejor se adapte a tus necesidades.'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: '¿Cuánto dura una sesión y con qué frecuencia se realizan?',
    answer: 'Todas las sesiones tienen una duración aproximada de 60 minutos. La frecuencia habitual suele ser semanal o quincenal al inicio, espaciándose conforme vas consolidando tus recursos internos y sintiendo mayor bienestar.'
  },
  {
    id: 'faq-3',
    category: 'online',
    question: '¿Cómo funciona la modalidad de terapia online?',
    answer: 'La terapia online se realiza a través de una videollamada cifrada y segura. Solo necesitas un dispositivo con cámara y micrófono, buena conexión a internet y un espacio tranquilo y privado donde puedas expresarte con total libertad. Tiene exactamente la misma eficacia clínica que la modalidad presencial.'
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
    answer: 'Para las sesiones presenciales en la consulta de C/ Arzobispo Morcillo 40 - Pral. E2, Zaragoza, el abono puede realizarse en efectivo o Bizum al finalizar. Para las sesiones online, el pago se realiza previamente mediante transferencia bancaria o Bizum.'
  },
  {
    id: 'faq-8',
    category: 'general',
    question: '¿Es confidencial todo lo que hablemos en sesión?',
    answer: 'Absolutamente. Como psicóloga colegiada (Col. nº A-1008), todo el contenido de las sesiones está rigurosamente protegido por el secreto profesional y el Código Deontológico de la Psicología, así como por la normativa europea de protección de datos sanitarios (RGPD).'
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
    context: 'Sesiones presenciales en Zaragoza'
  }
];

export const BIO_FULL_STORY = {
  headline: 'Acompañamiento desde la escucha, la empatía y la sencillez',
  paragraphs: [
    'Hola, me llamo Begoña Roy. Mi principal impulso ha sido siempre ayudar y acompañar a personas que estuviesen pasando por momentos vitales difíciles desde la escucha, la empatía y la sencillez.',
    'Por ello decidí estudiar psicología en la Universidad de Valencia, finalizando mi formación en 1995. Mientras terminaba inicié formación de posgrado en Psicología Clínica, con especialidad en terapia cognitivo-conductual, para ampliar mi preparación, y he continuado formándome buscando distintos enfoques para realizar mi trabajo de la forma más honesta, responsable y humana de la que soy capaz, y ofrecer así el servicio que todo ser humano merece.',
    'Mi enfoque es integral y humanista. Como seres humanos que somos estamos formados por cuerpo, emoción, mente y espíritu, y es desde esa visión más amplia que puedo ir acompañando a cada persona en su proceso individual según sus ritmos, necesidades y prioridades, de una manera más específica y concreta, encontrando soluciones juntos para seguir desarrollándote y creciendo.',
    'El enfoque humanista es particularmente eficaz para afrontar una amplia variedad de problemas psicológicos, ya que está basado en la comprensión de cómo la persona percibe e interpreta sus sentimientos, pensamientos y experiencias y cómo esto, a su vez, influye en su comportamiento y bienestar emocional.',
    'Además, empecé a practicar meditación de la tradición de Thich Nhat Hanh a través de la Sangha Respira en Zaragoza, y esto me ayudó a conectar con esa parte interior espiritual que poco a poco he ido desarrollando y conociendo más.',
    'Y en todo este proceso de búsqueda, de aprendizaje, de conocimiento y mejora personal, apareció en mi vida el tratamiento de Liberación del Pericardio creado por Montserrat Gascón, que ayuda a conectar con tu propia esencia desde el corazón.',
    'Mi objetivo fundamental es acompañarte para que sepas traducir las soluciones que ya están en ti, descubrir tus fortalezas —que en muchas ocasiones las tenemos olvidadas o no las hemos reconocido ni visto— y también mostrarte otras que puedan ayudarte a conocerte más y estar mejor.'
  ],
  trainings: [
    'Licenciatura en Psicología (Universidad de Valencia, 1995)',
    'Formación de posgrado en Psicología Clínica, con especialidad en terapia cognitivo-conductual (Valencia)',
    'Máster en Psicooncología (Universidad Complutense de Madrid)',
    'Formación Básica de Terapia Familiar Fásica',
    'Diploma en Gerontología Social (Fundación Universidad-Empresa de Valencia)',
    'Curso de Trastornos de Personalidad (Asociación de Psicoterapia)',
    'Tratamiento Transdiagnóstico de los Trastornos Emocionales',
    'Certificado Internacional en PNL (Programación Neurolingüística)',
    'EMDR Europe Nivel I',
    'Liberación del Pericardio (Método Montserrat Gascón, facilitadora desde 2017)'
  ],
  experienceOverview: 'Desde 1995 he trabajado como psicóloga en diferentes ONGs llevando a cabo distintas tareas tanto de gestión como de atención individual y grupal en torno a temas de la salud, así como profesora en una academia especializada de psicología y en consulta privada.',
  milestones: [
    {
      year: '1995 - 1996',
      title: 'Cruz Roja Castellón',
      desc: 'Psicóloga en programa de atención a drogodependientes en la prisión de Castellón. Formación intensiva en adicciones, duelo y counselling centrado en la persona y comunicación consciente.'
    },
    {
      year: '1996 - 2000',
      title: 'Fundación Salud y Comunidad',
      desc: 'Psicóloga atendiendo a personas con VIH-Sida, profundizando en la preparación en duelo, cuidados paliativos, salud y acompañamiento en situaciones críticas.'
    },
    {
      year: '2001 - 2007',
      title: 'Profesora en Academia Especializada ARKE',
      desc: 'Docente universitaria impartiendo distintas asignaturas de la carrera de Psicología para la UNED en Zaragoza.'
    },
    {
      year: '2003',
      title: 'Asociación OMSIDA (Zaragoza)',
      desc: 'Psicóloga de apoyo emocional y acompañamiento individual y grupal para personas afectadas por VIH y sus familias.'
    },
    {
      year: '2005 - 2011',
      title: 'Asociación de Mujeres AMAC-GEMA',
      desc: 'Psicóloga y psicooncóloga atendiendo a mujeres diagnosticadas de cáncer de mama y/o genital y a sus familiares. Cursó en esta etapa el Máster en Psicooncología en la Universidad Complutense de Madrid.'
    },
    {
      year: '2015 - 2016',
      title: 'Fundación de Ayuda a Accidentados de Tráfico',
      desc: 'Atención psicológica y acompañamiento en trauma repentino, duelo y reestructuración vital tras accidentes graves.'
    },
    {
      year: '2015 - 2018',
      title: 'Grupo Quirón · Psicooncología',
      desc: 'Psicooncóloga integrada en equipo médico y asistencial multidisciplinar para el soporte de pacientes oncológicos y sus allegados.'
    },
    {
      year: '2014 - Actualidad',
      title: 'Consulta Privada (Zaragoza & Online)',
      desc: 'Atención integral como Psicóloga Sanitaria, Psicooncóloga y Facilitadora de Liberación del Pericardio, aunando cuerpo, mente, emoción y alma.'
    }
  ]
};
