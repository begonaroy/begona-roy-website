import React, { useState } from 'react';
import { PERICARDIUM_INFO, IMAGES, CLINICAL_INFO } from '../data/content';
import { NavigationTab } from '../types';
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
  UserCheck
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

  return (
    <div id="pericardio-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HEADER BANNER */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E6DFD3] dark:border-[#667052] bg-[#FDFBF7] dark:bg-[#21251F] text-[#4A5D4E] dark:text-[#A7B39A]">
              <Heart className="w-3.5 h-3.5 text-[#AA4664] fill-current" />
              <span>LIBERACIÓN DE PERICARDIO</span>
            </span>

            <a
              href={PERICARDIUM_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#AA4664]/30 bg-[#AA4664]/10 text-[#AA4664] hover:bg-[#AA4664]/20 transition-colors"
              title="Visitar sitio oficial internacional"
            >
              <span>{PERICARDIUM_INFO.websiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7] leading-tight">
            Liberación del Pericardio
          </h1>

          <p className="text-base sm:text-lg text-[#667052] dark:text-[#B7BEA3] leading-relaxed">
            {PERICARDIUM_INFO.subtitle}
          </p>

          <div className="pt-2 max-w-2xl mx-auto">
            <a
              href={PERICARDIUM_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 sm:p-5 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-left relative overflow-hidden bg-gradient-to-r from-[#FDFBF7] to-[#FDFBF7] dark:from-[#21251F] dark:to-[#171A17] border-[#E6DFD3] dark:border-[#667052] hover:border-[#AA4664]/60 dark:hover:border-[#A7B39A]"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#AA4664]/15 text-[#AA4664] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#24211F] dark:text-[#F3EFE7]">
                    {PERICARDIUM_INFO.facilitatorNote}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#AA4664] text-white group-hover:bg-[#AA4664] transition-colors flex-shrink-0 shadow-sm self-stretch sm:self-auto justify-center">
                  <span>pericardium.org</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. REFINED QUOTE BLOCK (Dancing Script) */}
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-8 sm:p-10 rounded-3xl border text-center transition-all ${
            isDark
              ? 'bg-[#21251F] border-[#667052]'
              : 'bg-[#FDFBF7] border-[#E6DFD3]'
          }`}
        >
          <p className="font-script text-2xl sm:text-3xl leading-relaxed text-[#24211F] dark:text-[#F3EFE7] font-semibold">
            "{PERICARDIUM_INFO.quote}"
          </p>
          <span className="font-serif text-xs uppercase tracking-widest text-[#AA4664] font-medium block mt-3">
            Begoña Roy · Facilitadora de Pericardio
          </span>
        </div>
      </section>

      {/* 3. ENTENDIENDO LA TERAPIA + BOTANICAL ANATOMICAL DIAGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What is it Text & Popular Expressions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
                MEMBRANA PROTECTORA Y CENTRO VITAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
                ¿Qué es el Pericardio y por qué es tan importante?
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
              {PERICARDIUM_INFO.whatIsParagraphs.slice(0, 4).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Popular Expressions Callout Box */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border space-y-3 ${
                isDark
                  ? 'bg-[#171A17] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
                <Quote className="w-4 h-4 text-[#AA4664]" />
                <span>La sabiduría del lenguaje popular:</span>
              </div>
              <p className="text-xs text-[#667052] dark:text-[#B7BEA3] italic">
                ¿Cuántas veces hemos escuchado y sentido expresiones como estas en nuestro cuerpo?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {PERICARDIUM_INFO.popularExpressions.map((exp, i) => (
                  <div
                    key={i}
                    className={`px-3.5 py-2 rounded-xl text-xs font-serif font-medium border text-center ${
                      isDark
                        ? 'bg-[#21251F] border-[#667052] text-[#F3EFE7]'
                        : 'bg-white border-[#E6DFD3] text-[#24211F]'
                    }`}
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
              {PERICARDIUM_INFO.whatIsParagraphs.slice(4).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('liberacion-pericardio')}
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                  isDark
                    ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#AA4664]'
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
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden transition-all ${
                isDark
                  ? 'bg-[#21251F] border-[#667052]'
                  : 'bg-white border-[#E6DFD3]'
              }`}
            >
              {/* Visual Heart Artwork */}
              <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center p-4">
                <img
                  src="/branding/favicon.png"
                  alt="Ilustración de Liberación del Pericardio"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Interactive Connection Tabs */}
              <div className="mt-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA4664] block">
                  Conexiones Anatómicas Principales (Haz clic para ver):
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {PERICARDIUM_INFO.anatomicalConnections.map((conn, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveConnectionIndex(i)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        activeConnectionIndex === i
                          ? isDark
                            ? 'bg-[#21251F] border-[#A7B39A] text-[#F3EFE7] font-semibold'
                            : 'bg-[#E6DFD3] border-[#4A5D4E] text-[#24211F] font-semibold'
                          : isDark
                          ? 'bg-[#171A17] border-[#667052] text-[#B7BEA3]'
                          : 'bg-white border-[#E6DFD3] text-[#667052]'
                      }`}
                    >
                      <span className="block truncate">{conn.title.split(' y ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Connection detail text */}
                <div
                  className={`p-4 rounded-2xl border text-xs leading-relaxed transition-all ${
                    isDark
                      ? 'bg-[#171A17] border-[#667052] text-[#B7BEA3]'
                      : 'bg-[#FDFBF7] border-[#E6DFD3] text-[#667052]'
                  }`}
                >
                  <strong className="block text-[#24211F] dark:text-[#F3EFE7] mb-1 font-serif text-sm">
                    {PERICARDIUM_INFO.anatomicalConnections[activeConnectionIndex].title}
                  </strong>
                  <p>{PERICARDIUM_INFO.anatomicalConnections[activeConnectionIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROCESO DE LIBERACIÓN DEL PERICARDIO (FOTO EN CAMILLA & DESCRIPCIÓN EXTENDIDA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 lg:p-14 rounded-3xl border shadow-sm ${
            isDark
              ? 'bg-[#21251F] border-[#667052]'
              : 'bg-white border-[#E6DFD3]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E6DFD3] dark:border-[#667052] aspect-[4/3] group">
                <img
                  src={IMAGES.pericardio}
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
                    ? 'bg-[#171A17] border-[#667052] text-[#B7BEA3]'
                    : 'bg-[#FDFBF7] border-[#E6DFD3] text-[#667052]'
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
                <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
                  LA VIVENCIA TERAPÉUTICA
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
                  El proceso de liberación del pericardio
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                {PERICARDIUM_INFO.processDescription.map((parr, idx) => (
                  <p key={idx}>{parr}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿CÓMO SON LAS SESIONES? (3 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
            EL ENCUENTRO EN CAMILLA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            ¿Cómo son las sesiones de Pericardio?
          </h2>
          <p className="text-sm text-[#667052] dark:text-[#B7BEA3]">
            Un espacio de seguridad y escucha profunda donde tu cuerpo marca el ritmo. Se realiza con ropa cómoda y sin dolor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERICARDIUM_INFO.sessionSteps.map((stepItem, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all hover:shadow-lg ${
                isDark
                  ? 'bg-[#21251F] border-[#667052]'
                  : 'bg-white border-[#E6DFD3]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#AA4664]">
                    {stepItem.step}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A]">
                    Fase {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                  {stepItem.title}
                </h3>
                <p className="text-xs font-semibold text-[#AA4664]">
                  {stepItem.subtitle}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DFD3] dark:border-[#667052] text-[11px] text-[#667052] dark:text-[#B7BEA3]">
                {i === 0 && 'Tiempo para sintonizar y verbalizar.'}
                {i === 1 && 'Trabajo tisular sutil y respetuoso.'}
                {i === 2 && 'Regeneración y coherencia cardíaca.'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFICIOS CLAVE */}
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-8 sm:p-12 rounded-3xl border space-y-6 ${
            isDark
              ? 'bg-[#171A17] border-[#667052]'
              : 'bg-[#FBF9F5] border-[#E6DFD3]'
          }`}
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
              EFECTOS VIVENCIALES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">
              Beneficios que experimentarás en tu cuerpo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {PERICARDIUM_INFO.benefitsList.map((benefit, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${
                  isDark
                    ? 'bg-[#21251F] border-[#667052] text-[#B7BEA3]'
                    : 'bg-white border-[#E6DFD3] text-[#24211F]'
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
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-10 sm:p-14 rounded-3xl border text-center shadow-xl ${
            isDark
              ? 'bg-gradient-to-br from-[#21251F] to-[#171A17] border-[#A7B39A]/40 text-[#F3EFE7]'
              : 'bg-gradient-to-br from-[#4A5D4E] to-[#21251F] border-[#4A5D4E] text-white'
          }`}
        >
          <div className="space-y-4 max-w-lg mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D8659B]">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A5D4E] hover:bg-[#FDFBF7] transition-colors shadow-lg active:scale-[0.98]"
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
