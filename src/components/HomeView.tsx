import React from 'react';
import { NavigationTab, ServiceDetail } from '../types';
import { CLINICAL_INFO, IMAGES, SERVICES_DATA, TESTIMONIALS } from '../data/content';
import {
  Calendar,
  ArrowRight,
  Sparkles,
  MapPin,
  Video,
  ShieldCheck,
  Heart,
  Activity,
  CheckCircle2,
  PhoneCall,
  UserCheck
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenBooking: () => void;
  onOpenBio: () => void;
  onSelectServiceDetail: (service: ServiceDetail) => void;
  isDark: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenBio,
  onSelectServiceDetail,
  isDark,
}) => {
  return (
    <div id="home-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-6 sm:pt-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E6DFD3] dark:border-[#667052] bg-[#FDFBF7] dark:bg-[#21251F] text-[#4A5D4E] dark:text-[#A7B39A]">
                <Sparkles className="w-3.5 h-3.5 text-[#AA4664]" />
                <span>BEGOÑA ROY · PSICOLOGÍA SANITARIA & PSICOONCOLOGÍA</span>
              </div>

              {/* H1 */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-[#24211F] dark:text-[#F3EFE7]">
                Acompañamiento <br className="hidden sm:block" />
                <span className="italic font-normal text-[#4A5D4E] dark:text-[#A7B39A]">
                  Psicológico Integral
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg leading-relaxed text-[#667052] dark:text-[#B7BEA3] max-w-2xl mx-auto lg:mx-0">
                Un espacio de calidez, respeto y escucha profunda para transitar la ansiedad, los procesos de duelo, el impacto oncológico y la liberación corporal del pericardio. En Espacio K alma (Zaragoza) y en consulta online.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-cta-booking"
                  onClick={onOpenBooking}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] ${
                    isDark
                      ? 'bg-[#A7B39A] hover:bg-[#B7BEA3] text-[#171A17]'
                      : 'bg-[#4A5D4E] hover:bg-[#AA4664] text-[#FDFBF7]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserva tu primera sesión</span>
                </button>

                <button
                  id="hero-cta-approach"
                  onClick={() => onNavigate('psicologia')}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200 hover:shadow-sm ${
                    isDark
                      ? 'border-[#667052] text-[#F3EFE7] hover:bg-[#21251F]'
                      : 'border-[#E6DFD3] text-[#24211F] hover:bg-[#E6DFD3]'
                  }`}
                >
                  <span>Conoce mi enfoque</span>
                  <ArrowRight className="w-4 h-4 text-[#AA4664]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#667052] dark:text-[#B7BEA3]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#AA4664]" />
                  Col. Nº {CLINICAL_INFO.collegiateNumber}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#AA4664]" />
                  {CLINICAL_INFO.yearsExperience}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#AA4664]" />
                  Espacio K alma (Zaragoza) & Online
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Atmosphere */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background aura */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4A5D4E]/10 to-[#AA4664]/15 blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E6DFD3] dark:border-[#667052] aspect-[4/5] bg-[#E6DFD3] dark:bg-[#21251F]">
                  <img
                    src={IMAGES.heroAtmosphere}
                    alt="Espacio sereno de consulta de psicología con Begoña Roy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FDFBF7]/90 dark:bg-[#171A17]/90 backdrop-blur-md border border-[#FDFBF7]/40 dark:border-[#667052] shadow-lg">
                    <p className="font-serif italic text-sm text-[#24211F] dark:text-[#F3EFE7]">
                      "Un espacio seguro donde respirar y reencontrarte."
                    </p>
                    <p className="text-[11px] font-medium text-[#AA4664] mt-1">
                      Consulta en Espacio K alma (Zaragoza) & Videoconsulta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE QUOTE SECTION (Dancing Script font) */}
      <section
        id="quote-section"
        className="py-12 px-4 text-center max-w-4xl mx-auto"
      >
        <div
          className={`p-8 sm:p-12 rounded-3xl border transition-all ${
            isDark
              ? 'bg-[#21251F] border-[#667052]'
              : 'bg-[#E6DFD3] border-[#E6DFD3]'
          }`}
        >
          <span className="text-3xl sm:text-4xl text-[#AA4664] block font-serif mb-2">
            “
          </span>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#24211F] dark:text-[#F3EFE7] font-semibold">
            Conozca todas las teorías. Domine todas las técnicas, pero al tocar un alma humana sea apenas otra alma humana.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#AA4664]" />
            <span className="font-serif text-sm italic text-[#667052] dark:text-[#B7BEA3]">
              Carl Gustav Jung
            </span>
            <span className="h-px w-8 bg-[#AA4664]" />
          </div>
        </div>
      </section>

      {/* 3. QUIÉN SOY (ABOUT BEGOÑA) */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Photo */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E6DFD3] dark:border-[#667052] aspect-[4/5] max-w-md mx-auto">
              <img
                src={IMAGES.begonaPortrait}
                alt="Begoña Roy Psicóloga Sanitaria"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171A17]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FDFBF7]">
                <span className="text-xs uppercase tracking-widest font-semibold block text-[#B7BEA3]">
                  Colegiada CV-07890
                </span>
                <span className="font-serif text-lg font-medium">
                  Begoña Roy
                </span>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
                QUIÉN SOY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
                Una mirada integradora al ser humano
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
              <p>
                Soy psicóloga por vocación y convicción. Me licencié por la{' '}
                <strong className="text-[#24211F] dark:text-[#F3EFE7]">
                  Universidad de Valencia en 1995
                </strong>
                , y desde entonces he dedicado más de dos décadas al acompañamiento terapéutico en el ámbito sanitario, en organizaciones no gubernamentales y en consulta privada.
              </p>
              <p>
                A lo largo de mi camino clínico comprendí que la mente y el cuerpo no son entidades separadas. Lo que las emociones callan, el cuerpo lo manifiesta en forma de opresión, dolor o síntoma.
              </p>
              <p>
                Por ello, mi abordaje une el rigor de la <strong className="text-[#24211F] dark:text-[#F3EFE7]">Psicología Sanitaria</strong> y la <strong className="text-[#24211F] dark:text-[#F3EFE7]">Psicooncología</strong> con técnicas somáticas avanzadas como la <strong className="text-[#24211F] dark:text-[#F3EFE7]">Liberación del Pericardio</strong> (que facilito desde 2017) y el trabajo con el trauma y el sistema nervioso.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBio}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm border ${
                  isDark
                    ? 'border-[#A7B39A] text-[#A7B39A] hover:bg-[#A7B39A] hover:text-[#171A17]'
                    : 'border-[#4A5D4E] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FDFBF7]'
                }`}
              >
                <span>Leer biografía completa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] hover:underline"
              >
                Pedir cita con Begoña
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESPECIALIDADES (AREAS DE ACOMPAÑAMIENTO) */}
      <section
        id="especialidades-summary"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
            ESPECIALIDADES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            Áreas de Acompañamiento
          </h2>
          <p className="text-sm sm:text-base text-[#667052] dark:text-[#B7BEA3]">
            Cada persona y cada proceso son únicos. Adaptamos el trabajo a tu momento vital y tus necesidades específicas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col group ${
                service.featured
                  ? isDark
                    ? 'bg-[#21251F] border-[#A7B39A]/60 ring-1 ring-[#A7B39A]/40'
                    : 'bg-[#FDFBF7] border-[#4A5D4E]/40 ring-1 ring-[#4A5D4E]/30'
                  : isDark
                  ? 'bg-[#171A17] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FDFBF7]/90 text-[#4A5D4E] dark:bg-[#171A17]/90 dark:text-[#A7B39A] backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg leading-tight font-medium text-[#24211F] dark:text-[#F3EFE7] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#667052] dark:text-[#B7BEA3] line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E6DFD3] dark:border-[#667052] flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceDetail(service)}
                    className="text-xs font-semibold text-[#4A5D4E] dark:text-[#A7B39A] hover:text-[#AA4664] dark:hover:text-[#D8659B] flex items-center gap-1"
                  >
                    <span>Saber más</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-[11px] uppercase tracking-wider font-semibold text-[#AA4664] hover:underline"
                  >
                    Pedir cita
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('psicologia')}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              isDark
                ? 'bg-[#21251F] text-[#F3EFE7] hover:bg-[#667052]'
                : 'bg-[#E6DFD3] text-[#24211F] hover:bg-[#B7BEA3]'
            }`}
          >
            <span>Ver todos los servicios y metodología</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. MODALIDADES DE ATENCIÓN + CTA CARD */}
      <section
        id="modalidades-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
            FLEXIBILIDAD Y CERCANÍA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            Modalidades de Atención
          </h2>
          <p className="text-sm text-[#667052] dark:text-[#B7BEA3]">
            Elige la opción que mejor se adapte a tu ubicación y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Presencial */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
              isDark
                ? 'bg-[#21251F] border-[#667052]'
                : 'bg-[#FDFBF7] border-[#E6DFD3]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                Terapia Presencial
              </h3>
              <p className="text-xs text-[#AA4664] font-semibold uppercase tracking-wider">
                Espacio K alma · Zaragoza (50006)
              </p>
              <p className="text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                En un entorno cálido, íntimo y silencioso en Espacio K alma, C. del Río Huerva, 21 (50006 Zaragoza). Ideal para el contacto humano cercano y para la terapia manual de Pericardio.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E6DFD3] dark:border-[#667052]">
              <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#A7B39A]">
                ✓ Sesiones de 50-60 min
              </span>
            </div>
          </div>

          {/* Card 2: Online */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
              isDark
                ? 'bg-[#21251F] border-[#667052]'
                : 'bg-[#FDFBF7] border-[#E6DFD3]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                Terapia Online
              </h3>
              <p className="text-xs text-[#AA4664] font-semibold uppercase tracking-wider">
                Videoconsulta Segura
              </p>
              <p className="text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                Conéctate desde tu hogar o lugar de trabajo con total privacidad a través de plataforma cifrada de telemedicina. Misma calidez y eficacia clínica.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E6DFD3] dark:border-[#667052]">
              <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#A7B39A]">
                ✓ Toda España y Extranjero
              </span>
            </div>
          </div>

          {/* Card 3: Featured Action Box "¿Comenzamos el camino?" */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between text-[#FDFBF7] shadow-xl ${
              isDark
                ? 'bg-gradient-to-br from-[#21251F] to-[#171A17] border-[#A7B39A]/40'
                : 'bg-gradient-to-br from-[#4A5D4E] to-[#21251F] border-[#4A5D4E]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7]/20 text-[#FDFBF7] flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium">
                ¿Comenzamos el camino?
              </h3>
              <p className="text-xs text-[#D8659B] font-semibold uppercase tracking-wider">
                Primera Sesión de Valoración
              </p>
              <p className="text-sm leading-relaxed text-[#E6DFD3]">
                Dar el primer paso suele ser lo que más cuesta. Estoy aquí para escucharte y encontrar juntos la mejor manera de acompañarte.
              </p>
            </div>

            <div className="pt-6 mt-4">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDFBF7] text-[#4A5D4E] hover:bg-[#FDFBF7] transition-colors shadow"
              >
                <span>Contactar Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIOS Y PALABRAS DE CONFIANZA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
            ESPACIO DE CONFIANZA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            Experiencias en Consulta
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-4 ${
                isDark
                  ? 'bg-[#21251F] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-[#24211F] dark:text-[#F3EFE7]">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-[#E6DFD3] dark:border-[#667052] flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold block text-[#24211F] dark:text-[#F3EFE7]">
                    {item.author}
                  </span>
                  <span className="text-[#AA4664]">{item.service}</span>
                </div>
                <span className="text-[11px] text-[#667052] dark:text-[#B7BEA3]">
                  {item.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
