import React, { useState } from 'react';
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
  UserCheck,
  ChevronDown,
  Clock,
  Compass
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenBooking: (serviceId?: string) => void;
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
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('ansiedad-estres');

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };
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
                <Sparkles className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
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
                      : 'bg-[#4A5D4E] hover:bg-[#AA4664] dark:hover:bg-[#D8659B] text-white'
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
                      : 'border-[#E6DFD3] text-[#24211F] hover:bg-[#FDFBF7]'
                  }`}
                >
                  <span>Conoce mi enfoque</span>
                  <ArrowRight className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#667052] dark:text-[#B7BEA3]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                  Col. Nº {CLINICAL_INFO.collegiateNumber}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                  {CLINICAL_INFO.yearsExperience}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                  Espacio K alma (Zaragoza) & Online
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Atmosphere */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background aura */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4A5D4E]/10 to-[#AA4664]/15 dark:to-[#D8659B]/15 blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E6DFD3] dark:border-[#667052] aspect-[4/5] bg-gray-100 dark:bg-[#21251F]">
                  <img
                    src={IMAGES.heroAtmosphere}
                    alt="Espacio sereno de consulta de psicología con Begoña Roy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 dark:bg-[#171A17]/90 backdrop-blur-md border border-white/40 dark:border-[#667052] shadow-lg">
                    <p className="font-serif italic text-sm text-[#24211F] dark:text-[#F3EFE7]">
                      "Un espacio seguro donde respirar y reencontrarte."
                    </p>
                    <p className="text-[11px] font-medium text-[#AA4664] dark:text-[#D8659B] mt-1">
                      Espacio K alma (C. del Río Huerva, 21, Zaragoza)
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
              : 'bg-[#FDFBF7] border-[#E6DFD3]'
          }`}
        >
          <span className="text-3xl sm:text-4xl text-[#AA4664] dark:text-[#D8659B] block font-serif mb-2">
            “
          </span>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl leading-[1.225] text-[#24211F] dark:text-[#F3EFE7] font-semibold">
            Mi objetivo fundamental es acompañarte para traducir las soluciones que ya están en ti y descubrir tus fortalezas...
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#AA4664] dark:bg-[#D8659B]" />
            <span className="font-serif text-sm italic text-[#667052] dark:text-[#B7BEA3]">
              Begoña Roy · Psicología Sanitaria & Liberación del Pericardio
            </span>
            <span className="h-px w-8 bg-[#AA4664] dark:bg-[#D8659B]" />
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
              <div className="absolute bottom-4 left-4 right-4 text-white">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
                QUIÉN SOY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
                Acompañar desde la escucha, la empatía y la sencillez
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
              <p>
                Hola, me llamo <strong className="text-[#24211F] dark:text-[#F3EFE7]">Begoña Roy</strong>. Mi principal impulso ha sido siempre intentar ayudar y acompañar a personas que estuviesen pasando por momentos vitales difíciles desde la escucha, la empatía y la sencillez.
              </p>
              <p>
                Me licencié en Psicología por la <strong className="text-[#24211F] dark:text-[#F3EFE7]">Universidad de Valencia en 1995</strong> y continué con el Máster en Psicología Clínica y el Máster en Psicooncología (UCM). A lo largo de más de 25 años en ONGs, ámbito hospitalario y consulta privada, he buscado distintos enfoques para realizar mi trabajo de la forma más honesta, responsable y humana posible.
              </p>
              <p>
                Mi enfoque es <strong className="text-[#24211F] dark:text-[#F3EFE7]">integral y humanista</strong>: como seres humanos estamos formados por <strong className="text-[#24211F] dark:text-[#F3EFE7]">cuerpo, emoción, mente y espíritu</strong>. Integra la práctica meditativa (Sangha Respira) y la <strong className="text-[#24211F] dark:text-[#F3EFE7]">Liberación del Pericardio</strong> para conectar con tu propia esencia desde el corazón.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBio}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm border ${
                  isDark
                    ? 'border-[#A7B39A] text-[#A7B39A] hover:bg-[#A7B39A] hover:text-[#171A17]'
                    : 'border-[#4A5D4E] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white'
                }`}
              >
                <span>Leer biografía y trayectoria</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B] hover:underline"
              >
                Pedir cita con Begoña
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TE PUEDO AYUDAR EN (ACORDEÓN INTERACTIVO) */}
      <section
        id="especialidades-summary"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
            ACOMPAÑAMIENTO Y ATENCIÓN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            Te puedo ayudar en
          </h2>
          <p className="text-sm sm:text-base text-[#667052] dark:text-[#B7BEA3]">
            Cada persona y cada proceso son únicos. Despliega cada área para conocer cómo abordamos tus necesidades específicas con rigor y calidez.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = openAccordionId === service.id;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? 'bg-[#21251F] border-[#A7B39A]/60 shadow-lg ring-1 ring-[#A7B39A]/30'
                      : 'bg-white border-[#4A5D4E]/40 shadow-lg ring-1 ring-[#4A5D4E]/20'
                    : isDark
                    ? 'bg-[#171A17] border-[#667052] hover:border-[#A7B39A]/40'
                    : 'bg-[#FDFBF7] border-[#E6DFD3] hover:border-[#AA4664]/50 dark:hover:border-[#D8659B]/50'
                }`}
              >
                {/* Accordion Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <span
                      className={`font-serif text-base sm:text-lg font-bold flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center ${
                        isOpen
                          ? 'bg-[#AA4664] dark:bg-[#D8659B] text-white'
                          : isDark
                          ? 'bg-[#21251F] text-[#B7BEA3]'
                          : 'bg-[#E6DFD3] text-[#667052]'
                      }`}
                    >
                      {indexFormatted}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                          {service.title}
                        </h3>
                        {service.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#AA4664] dark:bg-[#D8659B] text-white shadow-sm">
                            Especialidad Destacada
                          </span>
                        )}
                        <span
                          className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                            isDark
                              ? 'bg-[#21251F] text-[#A7B39A]'
                              : 'bg-[#E6DFD3] text-[#4A5D4E]'
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>
                      {!isOpen && (
                        <p className="text-xs text-[#667052] dark:text-[#B7BEA3] truncate mt-0.5">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#AA4664]/15 dark:bg-[#D8659B]/15 text-[#AA4664] dark:text-[#D8659B] rotate-180'
                        : isDark
                        ? 'bg-[#21251F] text-[#B7BEA3]'
                        : 'bg-[#E6DFD3] text-[#667052]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Expanded Body */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-[#E6DFD3] dark:border-[#667052]/80 animate-fadeIn space-y-6">
                    {/* Subtitle & Image row */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1 space-y-3">
                        <p className="font-serif italic text-base sm:text-lg text-[#AA4664] dark:text-[#D8659B]">
                          {service.subtitle}
                        </p>

                        <div className="space-y-3 text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                          {service.fullContent.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {/* Side Image */}
                      <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shadow-md relative flex-shrink-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#4A5D4E] dark:bg-[#171A17]/90 dark:text-[#A7B39A] backdrop-blur-sm">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Benefits & For Whom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      {/* Objetivos y Beneficios */}
                      <div
                        className={`p-5 rounded-2xl border space-y-3 ${
                          isDark
                            ? 'bg-[#171A17] border-[#667052]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3]'
                        }`}
                      >
                        <h4 className="font-serif font-semibold text-sm text-[#24211F] dark:text-[#F3EFE7] flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] dark:text-[#A7B39A]" />
                          <span>¿Qué trabajamos y logramos?</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-[#667052] dark:text-[#B7BEA3]">
                          {service.benefits.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#AA4664] dark:bg-[#D8659B] flex-shrink-0 mt-1.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Para quién es */}
                      <div
                        className={`p-5 rounded-2xl border space-y-3 ${
                          isDark
                            ? 'bg-[#171A17] border-[#667052]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3]'
                        }`}
                      >
                        <h4 className="font-serif font-semibold text-sm text-[#24211F] dark:text-[#F3EFE7] flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                          <span>Indicado especialmente para:</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-[#667052] dark:text-[#B7BEA3]">
                          {service.forWhom.map((w, wIdx) => (
                            <li key={wIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] dark:bg-[#A7B39A] flex-shrink-0 mt-1.5" />
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-[#E6DFD3] dark:border-[#667052] flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3 text-xs text-[#667052] dark:text-[#B7BEA3]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
                          <span>{service.duration}</span>
                        </span>
                        <span>•</span>
                        <span>{service.modalities.join(' / ')}</span>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => onSelectServiceDetail(service)}
                          className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                            isDark
                              ? 'border-[#667052] text-[#B7BEA3] hover:bg-[#21251F]'
                              : 'border-[#E6DFD3] text-[#24211F] hover:bg-white'
                          }`}
                        >
                          <span>Ver en ventana modal</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenBooking(service.id)}
                          className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                            isDark
                              ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                              : 'bg-[#4A5D4E] text-white hover:bg-[#AA4664] dark:hover:bg-[#D8659B]'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Pedir Cita</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
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
                : 'bg-white border-[#E6DFD3]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                Terapia Presencial
              </h3>
              <p className="text-xs text-[#AA4664] dark:text-[#D8659B] font-semibold uppercase tracking-wider">
                Espacio K alma · Zaragoza (50006)
              </p>
              <p className="text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                En un entorno cálido, íntimo y silencioso en Espacio K alma (C. del Río Huerva, 21, 50006 Zaragoza). Ideal para contacto humano cercano y para la terapia manual de Pericardio.
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
                : 'bg-white border-[#E6DFD3]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                Terapia Online
              </h3>
              <p className="text-xs text-[#AA4664] dark:text-[#D8659B] font-semibold uppercase tracking-wider">
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
            className={`p-8 rounded-3xl border flex flex-col justify-between text-white shadow-xl ${
              isDark
                ? 'bg-gradient-to-br from-[#21251F] to-[#171A17] border-[#A7B39A]/40'
                : 'bg-gradient-to-br from-[#4A5D4E] to-[#3e4e42] border-[#4A5D4E]'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center">
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A5D4E] hover:bg-[#FDFBF7] transition-colors shadow"
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
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
                  : 'bg-[#FBF9F5] border-[#E6DFD3]'
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
                  <span className="text-[#AA4664] dark:text-[#D8659B]">{item.service}</span>
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
