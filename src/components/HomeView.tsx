import React, { useRef } from 'react';
import { NavigationTab, ServiceDetail } from '../types';
import { CLINICAL_INFO, IMAGES, SERVICES_DATA, TESTIMONIALS } from '../data/content';
import couchImg from '../assets/images/couch.png';
import onlineAImg from '../assets/images/online-a.png';
import { useGsapPageEntrance } from '../hooks/useGsapAnimations';
import { ROUTES } from '../routes';
import {
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Video,
  ShieldCheck,
  Heart,
  CheckCircle2,
  PhoneCall,
  UserCheck,
  ChevronDown,
  Feather,
  Layers,
  Star,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenBio: () => void;
  onSelectServiceDetail: (service: ServiceDetail) => void;
  isDark: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBio,
  onSelectServiceDetail,
  isDark,
}) => {
  const viewRef = useRef<HTMLDivElement>(null);
  useGsapPageEntrance(viewRef);

  return (
    <div ref={viewRef} id="home-view" className="space-y-20 sm:space-y-28 pb-20">
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
              <div data-motion-hero className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A]">
                <Sparkles className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1]" />
                <span>BEGOÑA ROY · PSICOLOGÍA SANITARIA & PSICOONCOLOGÍA</span>
              </div>

              {/* H1 */}
              <h1 data-motion-hero className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-[#222823] dark:text-[#F3EFE7]">
                Acompañamiento <br className="hidden sm:block" />
                <span className="italic font-normal text-[#4A5D4E] dark:text-[#A7B39A]">
                  Psicológico Integral
                </span>
              </h1>

              {/* Description */}
              <p data-motion-hero className="text-base sm:text-lg leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] max-w-2xl mx-auto lg:mx-0">
                Acompañamiento terapéutico integrador para comprender tu momento vital, cuidar de tu bienestar emocional y reconectar con tus propios recursos internos. En Zaragoza y en consulta online.
              </p>

              {/* CTAs */}
              <div data-motion-hero className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  id="hero-cta-booking"
                  href={`${ROUTES.contacto}#contact-form`}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] ${
                    isDark
                      ? 'bg-[#7C9682] hover:bg-[#8EA694] text-[#171A17]'
                      : 'bg-[#4A5D4E] hover:bg-[#3D4C40] text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserva tu primera sesión</span>
                </a>

                <button
                  id="hero-cta-approach"
                  onClick={() => onNavigate('psicologia')}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200 hover:shadow-sm ${
                    isDark
                      ? 'border-[#2D3930] text-[#F3EFE7] hover:bg-[#1C2420]'
                      : 'border-[#D8D0C4] text-[#222823] hover:bg-[#F3EFEA]'
                  }`}
                >
                  <span>Conoce mi enfoque</span>
                  <ArrowRight className="w-4 h-4 text-[#AA4664] dark:text-[#DDB5C1]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div data-motion-hero className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#AA4664] dark:text-[#DDB5C1]" />
                  Col. Nº {CLINICAL_INFO.collegiateNumber}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#AA4664] dark:text-[#DDB5C1]" />
                  {CLINICAL_INFO.yearsExperience}
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#AA4664] dark:text-[#DDB5C1]" />
                  Zaragoza · Consulta presencial y online
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Atmosphere */}
            <div data-motion-hero className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background aura */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4A5D4E]/10 to-[#AA4664]/15 blur-xl -z-10" />

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
                    <p className="font-serif italic text-sm text-[#222823] dark:text-[#F3EFE7]">
                      "Un espacio seguro donde respirar y reencontrarte."
                    </p>
                    <p className="text-[11px] font-medium text-[#AA4664] dark:text-[#DDB5C1] mt-1">
                      {CLINICAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. ESPACIO DE ENCUENTRO Y SEGURIDAD */}
      <section
        id="espacio-seguridad-section"
        data-motion-reveal
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`relative p-8 sm:p-12 lg:p-14 rounded-3xl border shadow-xs overflow-hidden text-center ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#FAF7F2] border-[#E8E2D9]'
          }`}
        >
          {/* Subtle Ambient Radial Glows */}
          <div
            className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 ${
              isDark ? 'bg-[#A7B39A]' : 'bg-[#AA4664]'
            }`}
          />
          <div
            className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 ${
              isDark ? 'bg-[#DDB5C1]' : 'bg-[#4A5D4E]'
            }`}
          />

          <div data-motion-group="fast" className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FCFCFA]/80 dark:bg-[#151B17]/80 backdrop-blur-sm border border-[#E8E2D9] dark:border-[#2D3930] text-[#AA4664] dark:text-[#DDB5C1] shadow-xs">
              <Feather aria-hidden="true" className="w-3.5 h-3.5" />
              <span>EL VALOR DEL VÍNCULO</span>
            </div>

            {/* Core statement */}
            <p className="font-script text-2xl sm:text-3xl md:text-4xl leading-[1.225] text-[#222823] dark:text-[#F3EFE7] font-semibold">
              “Un espacio de calidez, respeto y escucha profunda para transitar tu proceso individual, a tu ritmo, en un espacio de seguridad y confidencialidad”
            </p>
          </div>
        </div>
      </section>

      {/* 2.5. VISIÓN RÁPIDA: SERVICIOS Y ÁREAS DE ACOMPAÑAMIENTO ("TE PUEDO AYUDAR EN") */}
      <section id="servicios-resumen-section" data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-6 sm:p-10 lg:p-12 rounded-3xl border shadow-sm transition-all ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#FAF7F2] border-[#E8E2D9]'
          }`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-[#E8E2D9] dark:border-[#2D3930]">
            <div className="space-y-2 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E8ECE9] dark:bg-[#151B17] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <Layers className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1]" />
                <span>ÁREAS DE ACOMPAÑAMIENTO</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
                Te puedo ayudar en
              </h2>
              <p className="text-sm sm:text-base text-[#5A655C] dark:text-[#B7BEA3] leading-relaxed">
                Acompañamiento individualizado en consulta presencial en Zaragoza y online, integrando cuerpo, emoción y mente.
              </p>
            </div>

            <button
              onClick={() => onNavigate('psicologia')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border self-start md:self-auto bg-white dark:bg-[#151B17] border-[#D8D0C4] dark:border-[#2D3930] text-[#222823] dark:text-[#F3EFE7] hover:border-[#AA4664] hover:text-[#AA4664] dark:hover:text-[#DDB5C1] shadow-sm hover:shadow"
            >
              <span>Ver todos los detalles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 8 Highlighted Visual Service Cards Grid */}
          <div data-motion-group="fast" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* 1. Ansiedad y Estrés */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'ansiedad-estres');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/1-calma-light.png' : '/icons/1-calma.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] block mb-1">
                  Calma & Regulación
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors leading-snug">
                  Ansiedad y Estrés
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Crisis de pánico, rumiación mental, insomnio y desbordamiento emocional.
                </p>
              </div>
            </button>

            {/* 2. Tristeza / Depresión */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'tristeza-depresion');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/2-vitalidad-light.png' : '/icons/2-vitalidad.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D4E] dark:text-[#A7B39A] block mb-1">
                  Ánimo & Vitalidad
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors leading-snug">
                  Tristeza / Depresión
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Falta de energía vital, desmotivación profunda, culpa y vacío interior.
                </p>
              </div>
            </button>

            {/* 3. Duelo */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'duelo');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/3-duelo-light.png' : '/icons/3-duelo.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] block mb-1">
                  Pérdida & Proceso
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors leading-snug">
                  Duelo
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Despedida de seres queridos, rupturas y reorganización de la vida con ternura.
                </p>
              </div>
            </button>

            {/* 4. Psicooncología */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'psicooncologia');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/4-psicooncologia-light.png' : '/icons/4-psicooncologia.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D4E] dark:text-[#A7B39A] block mb-1">
                  Especialidad Máster UCM
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors leading-snug">
                  Psicooncología
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Soporte emocional especializado para pacientes con cáncer y sus familias.
                </p>
              </div>
            </button>

            {/* 5. Bloqueo Emocional */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'bloqueo-emocional-trauma');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/5-emdr-light.png' : '/icons/5-emdr.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] block mb-1">
                  EMDR
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors leading-snug">
                  Bloqueo Emocional
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Integración de vivencias pasadas no resueltas y desbloqueo emocional seguro.
                </p>
              </div>
            </button>

            {/* 6. Trastornos Psicosomáticos */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'trastornos-psicosomaticos');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/6-psicosomatico-light.png' : '/icons/6-psicosomatico.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D4E] dark:text-[#A7B39A] block mb-1">
                  Cuerpo & Emoción
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#4A5D4E] dark:group-hover:text-[#A7B39A] transition-colors leading-snug">
                  Psicosomáticos
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Dolor crónico, tensión muscular y síntomas físicos con raíz emocional.
                </p>
              </div>
            </button>

            {/* 7. Despertar Espiritual */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'despertar-espiritual');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]'
                  : 'bg-white border-[#E8E2D9] hover:border-[#AA4664]/50'
              }`}
            >
              <img
                src={isDark ? '/icons/7-espiritual-light.png' : '/icons/7-espiritual.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.16] dark:opacity-[0.22] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:group-hover:opacity-[0.28]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#5A655C] dark:text-[#B7BEA3] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] block mb-1">
                  Sentido & Conexión
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors leading-snug">
                  Despertar Espiritual
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Crisis existenciales, apertura de conciencia y práctica de meditación.
                </p>
              </div>
            </button>

            {/* 8. Liberación del Pericardio */}
            <button
              type="button"
              onClick={() => {
                const s = SERVICES_DATA.find((item) => item.id === 'liberacion-pericardio');
                if (s) onSelectServiceDetail(s);
              }}
              className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? 'bg-[#151B17] border-[#7C9682]/40 hover:border-[#7C9682]'
                  : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#AA4664]/30 hover:border-[#AA4664]'
              }`}
            >
              <img
                src={isDark ? '/icons/8-pericardio-light.png' : '/icons/8-pericardio.png'}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-28 h-28 object-contain pointer-events-none select-none opacity-[0.18] dark:opacity-[0.24] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.24] dark:group-hover:opacity-[0.3]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-end min-h-[48px] mb-6">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-[#FAF7F2] dark:bg-[#1C2420] text-[#AA4664] dark:text-[#DDB5C1] group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] block mb-1">
                  Método Montserrat Gascón
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7] group-hover:text-[#AA4664] dark:group-hover:text-[#DDB5C1] transition-colors leading-snug">
                  Liberación del Pericardio
                </h3>
                <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-2 leading-relaxed">
                  Sesión en camilla para liberar el centro emocional y recuperar la vitalidad.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE QUOTE SECTION (Dancing Script font) */}
      <section
        id="quote-section"
        data-motion-reveal
        className="py-12 px-4 text-center max-w-4xl mx-auto"
      >
        <div
          className={`p-8 sm:p-12 rounded-3xl border transition-all ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#F3EFEA] border-[#E8E2D9]'
          }`}
        >
          <span className="text-3xl sm:text-4xl text-[#AA4664] dark:text-[#DDB5C1] block font-serif mb-2">
            “
          </span>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl leading-[1.225] text-[#222823] dark:text-[#F3EFE7] font-semibold">
            Mi objetivo fundamental es acompañarte para traducir las soluciones que ya están en ti y descubrir tus fortalezas...
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#AA4664]" />
            <span className="font-serif text-sm italic text-[#5A655C] dark:text-[#B7BEA3]">
              Begoña Roy · Psicóloga
            </span>
            <span className="h-px w-8 bg-[#AA4664]" />
          </div>
        </div>
      </section>

      {/* 3. MODALIDADES DE ATENCIÓN + CTA CARD */}
      <section
        id="modalidades-section"
        data-motion-reveal
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
            FLEXIBILIDAD Y CERCANÍA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            Modalidades de Atención
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#B7BEA3]">
            Elige la opción que mejor se adapte a tu ubicación y estilo de vida.
          </p>
        </div>

        <div data-motion-group className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Presencial */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all relative overflow-hidden group min-h-[340px] ${
              isDark
                ? 'bg-[#1C2420] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            {/* Background Illustration Couch (Bottom Right, Responsive, Non-intrusive) */}
            <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden flex items-end justify-end">
              <img
                src={couchImg}
                alt=""
                aria-hidden="true"
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain translate-x-1 translate-y-1 opacity-40 dark:opacity-20 transition-all duration-500 group-hover:scale-105 group-hover:opacity-55 dark:group-hover:opacity-30"
              />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                Terapia Presencial
              </h3>
              <p className="text-xs text-[#AA4664] dark:text-[#DDB5C1] font-semibold uppercase tracking-wider">
                Zaragoza (50006)
              </p>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] max-w-[82%] sm:max-w-[78%]">
                En un entorno cálido, íntimo y silencioso. Ideal para contacto humano cercano y para la terapia manual de Pericardio.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] relative z-10 max-w-[70%] sm:max-w-[65%]">
              <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#A7B39A]">
                ✓ Sesiones de 60 min
              </span>
            </div>
          </div>

          {/* Card 2: Online */}
          <div
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all relative overflow-hidden group min-h-[340px] ${
              isDark
                ? 'bg-[#1C2420] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            {/* Background Illustration Online (Bottom Right, Responsive, Non-intrusive) */}
            <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden flex items-end justify-end">
              <img
                src={onlineAImg}
                alt=""
                aria-hidden="true"
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain translate-x-1 translate-y-1 opacity-40 dark:opacity-20 transition-all duration-500 group-hover:scale-105 group-hover:opacity-55 dark:group-hover:opacity-30"
              />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                Terapia Online
              </h3>
              <p className="text-xs text-[#AA4664] dark:text-[#DDB5C1] font-semibold uppercase tracking-wider">
                Videoconsulta Segura
              </p>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] max-w-[82%] sm:max-w-[78%]">
                Conéctate desde tu hogar o lugar de trabajo con total privacidad a través de videollamadas.
                <br />
                Misma calidez y eficacia clínica.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] relative z-10 max-w-[70%] sm:max-w-[65%]">
              <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#A7B39A]">
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
              <p className="text-xs text-[#DDB5C1] font-semibold uppercase tracking-wider">
                Pide cita y nos conocemos
              </p>
              <p className="text-sm leading-relaxed text-[#E6DFD3]">
                Dar el primer paso suele ser lo que más cuesta. Estoy aquí para escucharte y encontrar juntos la mejor manera de acompañarte.
              </p>
            </div>

            <div className="pt-6 mt-4">
              <a
                href={`${ROUTES.contacto}#contact-form`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A5D4E] hover:bg-[#FAF7F2] transition-colors shadow"
              >
                <span>Contactar Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUIÉN SOY (ABOUT BEGOÑA) */}
      <section id="about-section" data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="text-xs uppercase tracking-widest font-semibold block text-[#B7BEA3]">
                  Colegiada {CLINICAL_INFO.collegiateNumber}
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
              <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
                QUIÉN SOY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
                Acompañar desde la escucha, la empatía y la sencillez
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              <p>
                Hola, me llamo <strong className="text-[#222823] dark:text-[#F3EFE7]">Begoña Roy</strong>. Mi principal impulso ha sido siempre ayudar y acompañar a personas que estuviesen pasando por momentos vitales difíciles desde la escucha, la empatía y la sencillez.
              </p>
              <p>
                Me licencié en Psicología por la <strong className="text-[#222823] dark:text-[#F3EFE7]">Universidad de Valencia en 1995</strong> y continué con una formación privada de posgrado en Psicología Clínica, en un centro especializado en terapia cognitivo-conductual, y con el Máster en Psicooncología (UCM). A lo largo de más de 25 años en ONGs, ámbito hospitalario y consulta privada, he buscado distintos enfoques para realizar mi trabajo de la forma más honesta, responsable y humana posible.
              </p>
              <p>
                Mi enfoque es <strong className="text-[#222823] dark:text-[#F3EFE7]">integral y humanista</strong>: como seres humanos estamos formados por <strong className="text-[#222823] dark:text-[#F3EFE7]">cuerpo, emoción, mente y espíritu</strong>. Integra la práctica meditativa (Sangha Respira) y la <strong className="text-[#222823] dark:text-[#F3EFE7]">Liberación del Pericardio</strong> para conectar con tu propia esencia desde el corazón.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBio}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm border ${
                  isDark
                    ? 'border-[#7C9682] text-[#A7B39A] hover:bg-[#7C9682] hover:text-[#171A17]'
                    : 'border-[#4A5D4E] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white'
                }`}
              >
                <span>Leer biografía y trayectoria</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${ROUTES.contacto}#contact-form`}
                className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] hover:underline"
              >
                Pedir cita con Begoña
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIOS Y PALABRAS DE CONFIANZA */}
      <section data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
            ESPACIO DE CONFIANZA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            Experiencias en Consulta
          </h2>
        </div>

        <div data-motion-group className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-4 ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-[#FBF9F5] border-[#E8E2D9]'
              }`}
            >
              <div
                className="flex items-center gap-1 text-[#4A5D4E] dark:text-[#B7BEA3]"
                role="img"
                aria-label="Valoración de 5 sobre 5 estrellas"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="w-4 h-4 fill-current"
                  />
                ))}
              </div>

              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-[#222823] dark:text-[#F3EFE7]">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold block text-[#222823] dark:text-[#F3EFE7]">
                    {item.author}
                  </span>
                  <span className="text-[#AA4664] dark:text-[#DDB5C1]">{item.service}</span>
                </div>
                <span className="text-[11px] text-[#5A655C] dark:text-[#B7BEA3]">
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
