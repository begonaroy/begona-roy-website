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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#7C9682]">
                <Sparkles className="w-3.5 h-3.5 text-[#C28469]" />
                <span>BEGOÑA ROY · PSICOLOGÍA SANITARIA & PSICOONCOLOGÍA</span>
              </div>

              {/* H1 */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-[#222823] dark:text-[#F0F4F1]">
                Acompañamiento <br className="hidden sm:block" />
                <span className="italic font-normal text-[#4A5D4E] dark:text-[#7C9682]">
                  Psicológico Integral
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg leading-relaxed text-[#5A655C] dark:text-[#D1DAD2] max-w-2xl mx-auto lg:mx-0">
                Un espacio de calidez, respeto y escucha profunda para transitar la ansiedad, los procesos de duelo, el impacto oncológico y la liberación corporal del pericardio. En Plaza Europa (Zaragoza) y en consulta online.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-cta-booking"
                  onClick={onOpenBooking}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] ${
                    isDark
                      ? 'bg-[#7C9682] hover:bg-[#8EA694] text-[#151B17]'
                      : 'bg-[#4A5D4E] hover:bg-[#3D4C40] text-white'
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
                      ? 'border-[#2D3930] text-[#F0F4F1] hover:bg-[#1C2420]'
                      : 'border-[#D8D0C4] text-[#222823] hover:bg-[#F3EFEA]'
                  }`}
                >
                  <span>Conoce mi enfoque</span>
                  <ArrowRight className="w-4 h-4 text-[#C28469]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#5A655C] dark:text-[#A9B8AD]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C28469]" />
                  Col. Nº {CLINICAL_INFO.collegiateNumber}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#C28469]" />
                  {CLINICAL_INFO.yearsExperience}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C28469]" />
                  Plaza Europa (Zaragoza) & Online
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Atmosphere */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background aura */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4A5D4E]/10 to-[#C28469]/15 blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D9] dark:border-[#2D3930] aspect-[4/5] bg-gray-100 dark:bg-[#1C2420]">
                  <img
                    src={IMAGES.heroAtmosphere}
                    alt="Espacio sereno de consulta de psicología con Begoña Roy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 dark:bg-[#151B17]/90 backdrop-blur-md border border-white/40 dark:border-[#2D3930] shadow-lg">
                    <p className="font-serif italic text-sm text-[#222823] dark:text-[#F0F4F1]">
                      "Un espacio seguro donde respirar y reencontrarte."
                    </p>
                    <p className="text-[11px] font-medium text-[#C28469] mt-1">
                      Consulta en Plaza Europa (Zaragoza) & Videoconsulta
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
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#F3EFEA] border-[#E8E2D9]'
          }`}
        >
          <span className="text-3xl sm:text-4xl text-[#C28469] block font-serif mb-2">
            “
          </span>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#222823] dark:text-[#F0F4F1] font-semibold">
            Acompañarte a recordar y activar las soluciones que ya habitan en ti...
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#C28469]" />
            <span className="font-serif text-sm italic text-[#5A655C] dark:text-[#A9B8AD]">
              Begoña Roy · Psicóloga Sanitaria
            </span>
            <span className="h-px w-8 bg-[#C28469]" />
          </div>
        </div>
      </section>

      {/* 3. QUIÉN SOY (ABOUT BEGOÑA) */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Photo */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D9] dark:border-[#2D3930] aspect-[4/5] max-w-md mx-auto">
              <img
                src={IMAGES.begonaPortrait}
                alt="Begoña Roy Psicóloga Sanitaria"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151B17]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest font-semibold block text-[#D1DAD2]">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
                QUIÉN SOY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1]">
                Una mirada integradora al ser humano
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#D1DAD2]">
              <p>
                Soy psicóloga por vocación y convicción. Me licencié por la{' '}
                <strong className="text-[#222823] dark:text-[#F0F4F1]">
                  Universidad de Valencia en 1995
                </strong>
                , y desde entonces he dedicado más de dos décadas al acompañamiento terapéutico en el ámbito sanitario, en organizaciones no gubernamentales y en consulta privada.
              </p>
              <p>
                A lo largo de mi camino clínico comprendí que la mente y el cuerpo no son entidades separadas. Lo que las emociones callan, el cuerpo lo manifiesta en forma de opresión, dolor o síntoma.
              </p>
              <p>
                Por ello, mi abordaje une el rigor de la <strong className="text-[#222823] dark:text-[#F0F4F1]">Psicología Sanitaria</strong> y la <strong className="text-[#222823] dark:text-[#F0F4F1]">Psicooncología</strong> con técnicas somáticas avanzadas como la <strong className="text-[#222823] dark:text-[#F0F4F1]">Liberación del Pericardio</strong> (que facilito desde 2017) y el trabajo con el trauma y el sistema nervioso.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBio}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm border ${
                  isDark
                    ? 'border-[#7C9682] text-[#7C9682] hover:bg-[#7C9682] hover:text-[#151B17]'
                    : 'border-[#4A5D4E] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white'
                }`}
              >
                <span>Leer biografía completa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold uppercase tracking-wider text-[#C28469] hover:underline"
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
            ESPECIALIDADES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1]">
            Áreas de Acompañamiento
          </h2>
          <p className="text-sm sm:text-base text-[#5A655C] dark:text-[#A9B8AD]">
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
                    ? 'bg-[#1C2420] border-[#7C9682]/60 ring-1 ring-[#7C9682]/40'
                    : 'bg-[#FAF7F2] border-[#4A5D4E]/40 ring-1 ring-[#4A5D4E]/30'
                  : isDark
                  ? 'bg-[#151B17] border-[#2D3930]'
                  : 'bg-white border-[#E8E2D9]'
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
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#4A5D4E] dark:bg-[#151B17]/90 dark:text-[#7C9682] backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F0F4F1] group-hover:text-[#4A5D4E] dark:group-hover:text-[#7C9682] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#A9B8AD] line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8E2D9] dark:border-[#2D3930] flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceDetail(service)}
                    className="text-xs font-semibold text-[#4A5D4E] dark:text-[#7C9682] hover:text-[#C28469] dark:hover:text-[#D99B82] flex items-center gap-1"
                  >
                    <span>Saber más</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-[11px] uppercase tracking-wider font-semibold text-[#C28469] hover:underline"
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
                ? 'bg-[#222C26] text-[#F0F4F1] hover:bg-[#2D3930]'
                : 'bg-[#E8ECE9] text-[#222823] hover:bg-[#D1DAD2]'
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
            FLEXIBILIDAD Y CERCANÍA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1]">
            Modalidades de Atención
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#A9B8AD]">
            Elige la opción que mejor se adapte a tu ubicación y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Presencial */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
              isDark
                ? 'bg-[#1C2420] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#7C9682] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F0F4F1]">
                Terapia Presencial
              </h3>
              <p className="text-xs text-[#C28469] font-semibold uppercase tracking-wider">
                Plaza Europa · Zaragoza (50003)
              </p>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#A9B8AD]">
                En un entorno cálido, íntimo y silencioso en Plaza Europa (50003 Zaragoza), junto a la ribera del Ebro y la Aljafería. Ideal para contacto humano cercano y para la terapia manual de Pericardio.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E8E2D9] dark:border-[#2D3930]">
              <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#7C9682]">
                ✓ Sesiones de 50-60 min
              </span>
            </div>
          </div>

          {/* Card 2: Online */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
              isDark
                ? 'bg-[#1C2420] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#7C9682] flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F0F4F1]">
                Terapia Online
              </h3>
              <p className="text-xs text-[#C28469] font-semibold uppercase tracking-wider">
                Videoconsulta Segura
              </p>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#A9B8AD]">
                Conéctate desde tu hogar o lugar de trabajo con total privacidad a través de plataforma cifrada de telemedicina. Misma calidez y eficacia clínica.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E8E2D9] dark:border-[#2D3930]">
              <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#7C9682]">
                ✓ Toda España y Extranjero
              </span>
            </div>
          </div>

          {/* Card 3: Featured Action Box "¿Comenzamos el camino?" */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between text-white shadow-xl ${
              isDark
                ? 'bg-gradient-to-br from-[#2D3D32] to-[#151B17] border-[#7C9682]/40'
                : 'bg-gradient-to-br from-[#4A5D4E] to-[#333F36] border-[#4A5D4E]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium">
                ¿Comenzamos el camino?
              </h3>
              <p className="text-xs text-[#EDD4CB] font-semibold uppercase tracking-wider">
                Primera Sesión de Valoración
              </p>
              <p className="text-sm leading-relaxed text-[#E8ECE9]">
                Dar el primer paso suele ser lo que más cuesta. Estoy aquí para escucharte y encontrar juntos la mejor manera de acompañarte.
              </p>
            </div>

            <div className="pt-6 mt-4">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A5D4E] hover:bg-[#FAF7F2] transition-colors shadow"
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
            ESPACIO DE CONFIANZA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1]">
            Experiencias en Consulta
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-4 ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-[#FBF9F5] border-[#E8E2D9]'
              }`}
            >
              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-[#222823] dark:text-[#F0F4F1]">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold block text-[#222823] dark:text-[#F0F4F1]">
                    {item.author}
                  </span>
                  <span className="text-[#C28469]">{item.service}</span>
                </div>
                <span className="text-[11px] text-[#5A655C] dark:text-[#A9B8AD]">
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
