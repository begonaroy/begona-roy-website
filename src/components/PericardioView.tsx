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
  Layers
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

  const iconsMap: Record<string, React.ElementType> = {
    Wind: Wind,
    Shield: Shield,
    Activity: Activity,
    Brain: Brain,
  };

  return (
    <div id="pericardio-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HEADER BANNER */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#7C9682]">
            <Heart className="w-3.5 h-3.5 text-[#C28469] fill-current" />
            <span>TERAPIA FÍSICA Y EMOCIONAL</span>
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1] leading-tight">
            Liberación del Pericardio
          </h1>

          <p className="text-base sm:text-lg text-[#5A655C] dark:text-[#D1DAD2] leading-relaxed">
            {PERICARDIUM_INFO.subtitle}
          </p>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#C28469]">
            {PERICARDIUM_INFO.facilitatorNote}
          </p>
        </div>
      </section>

      {/* 2. REFINED QUOTE BLOCK (Dancing Script) */}
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-8 sm:p-10 rounded-3xl border text-center transition-all ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#F3EFEA] border-[#E8E2D9]'
          }`}
        >
          <p className="font-script text-2xl sm:text-3xl leading-relaxed text-[#222823] dark:text-[#F0F4F1] font-semibold">
            "{PERICARDIUM_INFO.quote}"
          </p>
          <span className="font-serif text-xs uppercase tracking-widest text-[#C28469] font-medium block mt-3">
            Begoña Roy · Facilitadora de Pericardio
          </span>
        </div>
      </section>

      {/* 3. ENTENDIENDO LA TERAPIA + BOTANICAL ANATOMICAL DIAGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: What is it Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
                ENTENDIENDO LA TERAPIA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1]">
                ¿Qué es la Liberación del Pericardio?
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#D1DAD2]">
              {PERICARDIUM_INFO.whatIsText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('liberacion-pericardio')}
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                  isDark
                    ? 'bg-[#7C9682] text-[#151B17] hover:bg-[#8EA694]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Información / Cita</span>
              </button>
            </div>
          </div>

          {/* Right Column: Botanical Heart Illustration / Interactive diagram */}
          <div className="lg:col-span-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden transition-all ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              {/* Visual Heart Artwork */}
              <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center p-4">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full drop-shadow-md"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Botanical Leaves Background Ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="170"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    className="text-[#ADC0B0] dark:text-[#3D4C40]"
                  />

                  {/* Botanical Leaves Surrounding */}
                  <g className="text-[#5C7462] dark:text-[#7C9682] opacity-40">
                    <path d="M190 20 C180 50, 160 80, 200 90 C220 70, 210 30, 190 20Z" fill="currentColor" />
                    <path d="M360 180 C330 190, 310 220, 320 250 C340 240, 370 210, 360 180Z" fill="currentColor" />
                    <path d="M40 200 C70 190, 90 220, 80 250 C60 240, 30 210, 40 200Z" fill="currentColor" />
                    <path d="M210 380 C220 350, 240 320, 200 310 C180 330, 190 370, 210 380Z" fill="currentColor" />
                  </g>

                  {/* Pericardium Outer Membrane Silhouette */}
                  <path
                    d="M200 70
                       C270 70, 330 130, 330 210
                       C330 290, 250 340, 200 360
                       C150 340, 70 290, 70 210
                       C70 130, 130 70, 200 70Z"
                    fill="currentColor"
                    className={isDark ? 'text-[#2D3D32]' : 'text-[#E8ECE9]'}
                    stroke="currentColor"
                    strokeWidth="3"
                  />

                  {/* Inner Heart Muscle Shape */}
                  <path
                    d="M200 120
                       C245 80, 300 120, 290 180
                       C280 240, 220 280, 200 310
                       C180 280, 120 240, 110 180
                       C100 120, 155 80, 200 120Z"
                    fill="currentColor"
                    className="text-[#C28469] opacity-80"
                  />

                  {/* Anatomical Ribbon Insertions */}
                  {/* Top: Base of Skull & Vagus */}
                  <line x1="200" y1="70" x2="200" y2="25" stroke="#C28469" strokeWidth="2.5" strokeDasharray="3 3" />
                  {/* Bottom: Diaphragm */}
                  <line x1="200" y1="360" x2="200" y2="390" stroke="#C28469" strokeWidth="2.5" strokeDasharray="3 3" />
                  {/* Left: Sternum / Costal */}
                  <line x1="70" y1="210" x2="30" y2="210" stroke="#C28469" strokeWidth="2.5" strokeDasharray="3 3" />
                  {/* Right: Spine / Dorsal */}
                  <line x1="330" y1="210" x2="370" y2="210" stroke="#C28469" strokeWidth="2.5" strokeDasharray="3 3" />

                  {/* Center Sparkle */}
                  <circle cx="200" cy="200" r="12" fill="#FFFFFF" fillOpacity="0.8" />
                  <circle cx="200" cy="200" r="6" fill="#C28469" />
                </svg>
              </div>

              {/* Interactive Connection Tabs */}
              <div className="mt-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C28469] block">
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
                            ? 'bg-[#222C26] border-[#7C9682] text-[#F0F4F1] font-semibold'
                            : 'bg-[#E8ECE9] border-[#4A5D4E] text-[#222823] font-semibold'
                          : isDark
                          ? 'bg-[#151B17] border-[#2D3930] text-[#A9B8AD]'
                          : 'bg-white border-[#E8E2D9] text-[#5A655C]'
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
                      ? 'bg-[#151B17] border-[#2D3930] text-[#D1DAD2]'
                      : 'bg-[#FAF7F2] border-[#E8E2D9] text-[#5A655C]'
                  }`}
                >
                  <strong className="block text-[#222823] dark:text-[#F0F4F1] mb-1 font-serif text-sm">
                    {PERICARDIUM_INFO.anatomicalConnections[activeConnectionIndex].title}
                  </strong>
                  <p>{PERICARDIUM_INFO.anatomicalConnections[activeConnectionIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿CÓMO SON LAS SESIONES? (3 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
            EL ENCUENTRO EN CAMILLA
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F0F4F1]">
            ¿Cómo son las sesiones de Pericardio?
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#A9B8AD]">
            Un espacio de seguridad y escucha profunda donde tu cuerpo marca el ritmo. Se realiza con ropa cómoda y sin dolor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <span className="font-serif text-3xl font-bold text-[#C28469]">
                    {stepItem.step}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#7C9682]">
                    Fase {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F0F4F1]">
                  {stepItem.title}
                </h3>
                <p className="text-xs font-semibold text-[#C28469]">
                  {stepItem.subtitle}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5A655C] dark:text-[#A9B8AD]">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] text-[11px] text-[#5A655C] dark:text-[#A9B8AD]">
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
              ? 'bg-[#151B17] border-[#2D3930]'
              : 'bg-[#FBF9F5] border-[#E8E2D9]'
          }`}
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C28469]">
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
                    ? 'bg-[#1C2420] border-[#2D3930] text-[#D1DAD2]'
                    : 'bg-white border-[#E8E2D9] text-[#222823]'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 text-[#4A5D4E] dark:text-[#7C9682] flex-shrink-0 mt-0.5" />
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
              ? 'bg-gradient-to-br from-[#2D3D32] to-[#151B17] border-[#7C9682]/40 text-[#F0F4F1]'
              : 'bg-gradient-to-br from-[#4A5D4E] to-[#333F36] border-[#4A5D4E] text-white'
          }`}
        >
          <div className="space-y-4 max-w-lg mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EDD4CB]">
              CONSULTA EN PLAZA EUROPA · ZARAGOZA
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              ¿Sientes que tu corazón necesita respirar?
            </h2>
            <p className="text-sm leading-relaxed text-[#E8ECE9]">
              Reserva tu sesión presencial de Liberación del Pericardio en Zaragoza (Plaza Europa, 50003). Una experiencia transformadora para tu salud física y emocional.
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
