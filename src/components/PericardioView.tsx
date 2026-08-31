import React, { useRef, useState } from 'react';
import { PERICARDIUM_INFO, IMAGES, CLINICAL_INFO } from '../data/content';
import { NavigationTab } from '../types';
import { useGsapDynamicEntrance, useGsapPageEntrance } from '../hooks/useGsapAnimations';
import {
  Heart,
  Wind,
  Shield,
  Activity,
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Info,
  Clock,
  Layers,
  ExternalLink,
  Quote,
  Feather,
  UserCheck,
  MapPin
} from 'lucide-react';

interface PericardioViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenBooking: (serviceId?: string) => void;
  isDark: boolean;
}

export const PericardioView: React.FC<PericardioViewProps> = ({
  onNavigate,
  onOpenBooking,
  isDark,
}) => {
  const [activeConnectionIndex, setActiveConnectionIndex] = useState<number>(0);
  const viewRef = useRef<HTMLDivElement>(null);

  useGsapPageEntrance(viewRef);
  useGsapDynamicEntrance(
    viewRef,
    '[data-motion-connection-detail]',
    activeConnectionIndex,
  );

  return (
    <div ref={viewRef} id="pericardio-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION WITH SVG EMBLEM & OFFICIAL WEBSITE LINK */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          {/* Hero content, badges, pericardium.org card and CTA */}
            <div data-motion-hero className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A]">
              <Heart className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1] fill-current" />
              <span>LIBERACIÓN DEL PERICARDIO · MÉTODO MONTSERRAT GASCÓN</span>
            </div>

            <h1 data-motion-hero className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7] leading-[1.18]">
              Liberación del Pericardio
            </h1>

            <p data-motion-hero className="text-base sm:text-lg text-[#5A655C] dark:text-[#B7BEA3] leading-relaxed">
              {PERICARDIUM_INFO.subtitle}
            </p>

            {/* Badges / Pill features */}
            <div data-motion-hero className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8ECE9] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <MapPin className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1]" />
                <span>Espacio K alma · Zaragoza</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8ECE9] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <Feather className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A]" />
                <span>Sesiones en Camilla</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8ECE9] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <Sparkles className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1]" />
                <span>Facilitadora desde 2017</span>
              </span>
            </div>

            {/* pericardium.org Link Card (Primary Action) */}
            <div data-motion-hero className="max-w-4xl mx-auto pt-2">
              <a
                href={PERICARDIUM_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 sm:p-5 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-left relative overflow-hidden bg-gradient-to-r from-[#FAF7F2] to-[#F3EFEA] dark:from-[#1C2420] dark:to-[#151B17] border-[#D8D0C4] dark:border-[#2D3930] hover:border-[#AA4664]/60 dark:hover:border-[#7C9682]"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3.5 flex-1">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                      <img
                        src="/branding/logo-pericardio-oliva.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-10 h-10 object-contain dark:hidden"
                      />
                      <img
                        src="/branding/logo-pericardio-darkmode.svg"
                        alt=""
                        aria-hidden="true"
                        className="hidden w-10 h-10 object-contain dark:block"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#222823] dark:text-[#F3EFE7]">
                      {PERICARDIUM_INFO.facilitatorNote}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4A5D4E] text-white group-hover:bg-[#38483B] dark:bg-[#7C9682] dark:group-hover:bg-[#94AA92] transition-colors flex-shrink-0 shadow-sm self-stretch sm:self-auto justify-center">
                    <span>pericardium.org</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </div>
        </div>
      </section>

      {/* 2. ENTENDIENDO LA TERAPIA + BOTANICAL ANATOMICAL DIAGRAM */}
      <section id="que-es-el-pericardio" data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What is it Text & Popular Expressions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
                MEMBRANA PROTECTORA Y CENTRO VITAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
                ¿Qué es el Pericardio y por qué es tan importante?
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              {PERICARDIUM_INFO.whatIsParagraphs.slice(0, 4).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Popular Expressions Callout Box */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border space-y-3 ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930]'
                  : 'bg-[#FAF7F2] border-[#E8E2D9]'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
                <Quote className="w-4 h-4 text-[#AA4664] dark:text-[#DDB5C1]" />
                <span>La sabiduría del lenguaje popular:</span>
              </div>
              <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] italic">
                ¿Cuántas veces hemos escuchado y sentido expresiones como estas en nuestro cuerpo?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {PERICARDIUM_INFO.popularExpressions.map((exp, i) => (
                  <div
                    key={i}
                    className={`px-3.5 py-2 rounded-xl text-xs font-serif font-medium border text-center ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930] text-[#F3EFE7]'
                        : 'bg-white border-[#E8E2D9] text-[#222823]'
                    }`}
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              {PERICARDIUM_INFO.whatIsParagraphs.slice(4).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('liberacion-pericardio')}
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                  isDark
                    ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Información / Cita</span>
              </button>
            </div>
          </div>

          {/* Right Column: Botanical Heart Illustration / Interactive diagram */}
          <div className="lg:col-span-6 sticky top-24">
            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-xl relative overflow-hidden transition-all ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              {/* Visual Heart Artwork (Reduced size for compact elegance) */}
              <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[220px] mx-auto flex items-center justify-center p-2 mb-2">
                <img
                  src="/branding/favicon.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Interactive Connection Tabs */}
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1] block">
                  Conexiones Anatómicas Principales (Haz clic para explorar):
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  {PERICARDIUM_INFO.anatomicalConnections.map((conn, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveConnectionIndex(i)}
                      className={`p-3 rounded-xl border text-left text-sm transition-all ${
                        activeConnectionIndex === i
                          ? isDark
                            ? 'bg-[#222C26] border-[#7C9682] text-[#F3EFE7] font-semibold shadow-sm ring-1 ring-[#7C9682]/40'
                            : 'bg-[#E8ECE9] border-[#4A5D4E] text-[#222823] font-semibold shadow-sm ring-1 ring-[#4A5D4E]/30'
                          : isDark
                          ? 'bg-[#151B17] border-[#2D3930] text-[#B7BEA3] hover:border-[#7C9682]/50 hover:text-[#F3EFE7]'
                          : 'bg-[#FAF7F2] border-[#E8E2D9] text-[#5A655C] hover:border-[#4A5D4E]/40 hover:text-[#222823]'
                      }`}
                    >
                      <span className="block font-medium truncate">{conn.title.split(' y ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Connection detail text with increased font size */}
                <div
                  data-motion-connection-detail
                  className={`p-4 sm:p-5 rounded-2xl border leading-relaxed transition-all ${
                    isDark
                      ? 'bg-[#151B17] border-[#2D3930] text-[#B7BEA3]'
                      : 'bg-[#FAF7F2] border-[#E8E2D9] text-[#424D44]'
                  }`}
                >
                  <strong className="block text-[#222823] dark:text-[#F3EFE7] mb-2 font-serif text-base sm:text-lg">
                    {PERICARDIUM_INFO.anatomicalConnections[activeConnectionIndex].title}
                  </strong>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {PERICARDIUM_INFO.anatomicalConnections[activeConnectionIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROCESO DE LIBERACIÓN DEL PERICARDIO (FOTO EN CAMILLA & DESCRIPCIÓN EXTENDIDA) */}
      <section data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 lg:p-14 rounded-3xl border shadow-sm ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-white border-[#E8E2D9]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8E2D9] dark:border-[#2D3930] aspect-[4/3] group">
                <img
                  src={IMAGES.pericardioSession}
                  alt="Acompañamiento manual en camilla para la liberación del pericardio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-5">
                  <div className="text-white space-y-1">
                    <p className="font-serif text-base font-medium">
                      Atención plena y escucha tisular en camilla
                    </p>
                    <p className="text-xs text-[#E6DFD3]">
                      Sin maniobras bruscas · Con tu propia ropa · Todas las edades
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm space-y-2 ${
                  isDark
                    ? 'bg-[#151B17] border-[#2D3930] text-[#B7BEA3]'
                    : 'bg-[#FAF7F2] border-[#E8E2D9] text-[#5A655C]'
                }`}
              >
                <div className="flex items-center gap-2 text-[#4A5D4E] dark:text-[#A7B39A] font-semibold">
                  <UserCheck className="w-4 h-4" />
                  <span>Acompañamiento Adaptable e Inclusivo</span>
                </div>
                <p className="leading-relaxed">
                  No tiene ninguna contraindicación. Es maravilloso para todas las edades: desde bebés hasta embarazadas o ancianos, adaptándose a cualquier necesidad (en camilla, de lado o en silla).
                </p>
              </div>
            </div>

            {/* Text Description Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
                  LA VIVENCIA TERAPÉUTICA
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
                  El proceso de liberación del pericardio
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                {PERICARDIUM_INFO.processDescription.map((parr, idx) => (
                  <p key={idx}>{parr}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿CÓMO SON LAS SESIONES? (3 STEPS) */}
      <section data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
            EL ENCUENTRO EN CAMILLA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            ¿Cómo son las sesiones de Pericardio?
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#B7BEA3]">
            Un espacio de seguridad y escucha profunda donde tu cuerpo marca el ritmo. Se realiza con ropa cómoda y sin dolor.
          </p>
        </div>

        <div data-motion-group className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERICARDIUM_INFO.sessionSteps.map((stepItem, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all hover:shadow-lg ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#AA4664] dark:text-[#DDB5C1]">
                    {stepItem.step}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A]">
                    Fase {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                  {stepItem.title}
                </h3>
                <p className="text-xs font-semibold text-[#AA4664] dark:text-[#DDB5C1]">
                  {stepItem.subtitle}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] text-[11px] text-[#5A655C] dark:text-[#B7BEA3]">
                {i === 0 && 'Tiempo para sintonizar y verbalizar.'}
                {i === 1 && 'Trabajo tisular sutil y respetuoso.'}
                {i === 2 && 'Regeneración y coherencia cardíaca.'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFICIOS CLAVE */}
      <section data-motion-reveal className="max-w-4xl mx-auto px-4">
        <div
          className={`p-8 sm:p-12 rounded-3xl border space-y-6 ${
            isDark
              ? 'bg-[#151B17] border-[#2D3930]'
              : 'bg-[#FBF9F5] border-[#E8E2D9]'
          }`}
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
              EFECTOS VIVENCIALES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">
              Beneficios que experimentarás en tu cuerpo
            </h3>
          </div>

          <div data-motion-group className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {PERICARDIUM_INFO.benefitsList.map((benefit, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${
                  isDark
                    ? 'bg-[#1C2420] border-[#2D3930] text-[#B7BEA3]'
                    : 'bg-white border-[#E8E2D9] text-[#222823]'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section data-motion-reveal className="max-w-4xl mx-auto px-4">
        <div
          className={`p-10 sm:p-14 rounded-3xl border text-center shadow-xl ${
            isDark
              ? 'bg-gradient-to-br from-[#2D3D32] to-[#151B17] border-[#7C9682]/40 text-[#F3EFE7]'
              : 'bg-gradient-to-br from-[#4A5D4E] to-[#333F36] border-[#4A5D4E] text-white'
          }`}
        >
          <div className="space-y-4 max-w-lg mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DDB5C1]">
              CONSULTA EN ESPACIO K ALMA · ZARAGOZA
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              ¿Sientes que tu corazón necesita respirar?
            </h2>
            <p className="text-sm leading-relaxed text-[#E6DFD3]">
              Reserva tu sesión presencial de Liberación del Pericardio en Zaragoza (Espacio K alma, C. del Río Huerva, 21, 50006). Una experiencia transformadora para tu salud física y emocional.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onOpenBooking('liberacion-pericardio')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A5D4E] hover:bg-[#FAF7F2] transition-colors shadow-lg active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Sesión de Pericardio</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
