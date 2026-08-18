import React, { useState } from 'react';
import { ServiceDetail, NavigationTab } from '../types';
import { SERVICES_DATA, CLINICAL_INFO, IMAGES } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Brain,
  HeartHandshake,
  Activity,
  Compass,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface PsicologiaViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenBooking: (serviceId?: string) => void;
  onSelectServiceDetail: (service: ServiceDetail) => void;
  isDark: boolean;
}

export const PsicologiaView: React.FC<PsicologiaViewProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectServiceDetail,
  isDark,
}) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'ansiedad' | 'duelo' | 'psicooncologia' | 'bloqueo'>('todos');

  const filteredServices = activeFilter === 'todos' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.slug === activeFilter);

  const pillars = [
    {
      step: '01',
      title: 'Evaluación y Escucha Profunda',
      desc: 'Comprendemos tu momento vital, tus síntomas y la historia que los sostiene sin etiquetas reduccionistas ni juicios.',
      icon: HeartHandshake
    },
    {
      step: '02',
      title: 'Regulación del Sistema Nervioso',
      desc: 'Dotamos a tu cuerpo de herramientas concretas para rebajar el estado de hiperalerta y recuperar la sensación de seguridad.',
      icon: Activity
    },
    {
      step: '03',
      title: 'Elaboración e Integración',
      desc: 'Trabajamos los nudos emocionales, el duelo, los miedos o el trauma mediante abordajes cognitivo-somáticos (EMDR, mindfulness).',
      icon: Brain
    },
    {
      step: '04',
      title: 'Consolidación de la Autonomía',
      desc: 'Integras tus propios recursos y aprendizajes para responder a la vida desde la serenidad, la autocompasión y la verdad propia.',
      icon: Compass
    }
  ];

  return (
    <div id="psicologia-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HEADER BANNER */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E6DFD3] dark:border-[#667052] bg-[#FDFBF7] dark:bg-[#21251F] text-[#4A5D4E] dark:text-[#A7B39A]">
            <Sparkles className="w-3.5 h-3.5 text-[#AA4664]" />
            <span>PSICOLOGÍA SANITARIA & PSICOONCOLOGÍA</span>
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7] leading-tight">
            Encontrar la luz en el acompañamiento
          </h1>

          <p className="text-base sm:text-lg text-[#667052] dark:text-[#B7BEA3] leading-relaxed">
            La terapia no consiste en "arreglar" a nadie, sino en crear el espacio seguro y las condiciones necesarias para que puedas comprender lo que te sucede, regular tu biología y reencontrar tu equilibrio.
          </p>
        </div>
      </section>

      {/* 2. REFINED QUOTE BLOCK (Dancing Script) */}
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-8 sm:p-10 rounded-3xl border text-center transition-all ${
            isDark
              ? 'bg-[#21251F] border-[#667052]'
              : 'bg-[#E6DFD3] border-[#E6DFD3]'
          }`}
        >
          <p className="font-script text-2xl sm:text-3xl leading-relaxed text-[#24211F] dark:text-[#F3EFE7] font-semibold">
            "El equilibrio no es algo que encuentras, es algo que creas en el espacio entre lo que sucede y cómo eliges responder."
          </p>
          <span className="font-serif text-xs uppercase tracking-widest text-[#AA4664] font-medium block mt-3">
            Begoña Roy · Consulta Sanitaria Zaragoza
          </span>
        </div>
      </section>

      {/* 3. INTERACTIVE FILTER TABS & SPECIALIZED AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#E6DFD3] dark:border-[#667052]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
              ÁREAS DE INTERVENCIÓN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#24211F] dark:text-[#F3EFE7] mt-1">
              Acompañamiento Especializado
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todos', label: 'Todas las áreas' },
              { id: 'ansiedad', label: 'Ansiedad y Estrés' },
              { id: 'duelo', label: 'Duelo y Trauma' },
              { id: 'psicooncologia', label: 'Psicooncología' },
              { id: 'bloqueo', label: 'Bloqueo Emocional' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? isDark
                      ? 'bg-[#A7B39A] text-[#171A17] font-semibold shadow-sm'
                      : 'bg-[#4A5D4E] text-[#FDFBF7] font-semibold shadow-sm'
                    : isDark
                    ? 'bg-[#21251F] text-[#B7BEA3] hover:text-[#F3EFE7] border border-[#667052]'
                    : 'bg-[#FDFBF7] text-[#667052] hover:text-[#24211F] border border-[#E6DFD3]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specialized Areas Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                service.featured
                  ? isDark
                    ? 'bg-gradient-to-b from-[#21251F] to-[#171A17] border-[#A7B39A]/70 ring-1 ring-[#A7B39A]/50'
                    : 'bg-gradient-to-b from-[#FDFBF7] to-white border-[#4A5D4E]/60 ring-1 ring-[#4A5D4E]/40'
                  : isDark
                  ? 'bg-[#171A17] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              {/* Header Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDFBF7]/95 text-[#4A5D4E] dark:bg-[#171A17]/95 dark:text-[#A7B39A] backdrop-blur-sm">
                    {service.tag}
                  </span>
                  {service.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#AA4664] text-[#FDFBF7] shadow-sm">
                      Especialidad Principal
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#FDFBF7] drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="font-serif italic text-sm text-[#AA4664]">
                    {service.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#24211F] dark:text-[#F3EFE7] block">
                      Puntos clave del abordaje:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#667052] dark:text-[#B7BEA3]">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6DFD3] dark:border-[#667052] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceDetail(service)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#4A5D4E] dark:text-[#A7B39A] hover:text-[#AA4664] transition-colors py-2"
                  >
                    <span>Conocer más sobre {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                      isDark
                        ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                        : 'bg-[#4A5D4E] text-[#FDFBF7] hover:bg-[#AA4664]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Pedir Cita</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. METODOLOGÍA: ¿CÓMO TRABAJAMOS EN CONSULTA? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
            PROCESO TERAPÉUTICO
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            ¿Cómo trabajamos en consulta?
          </h2>
          <p className="text-sm text-[#667052] dark:text-[#B7BEA3]">
            Un camino estructurado pero flexible que respeta siempre tu ritmo personal y tu biología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-4 relative ${
                  isDark
                    ? 'bg-[#21251F] border-[#667052]'
                    : 'bg-[#FDFBF7] border-[#E6DFD3]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#AA4664]/50">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-[#24211F] dark:text-[#F3EFE7]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. BOTTOM CTA BLOCK "¿Preparado para dar el primer paso?" */}
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-10 sm:p-14 rounded-3xl border text-center relative overflow-hidden shadow-xl ${
            isDark
              ? 'bg-gradient-to-br from-[#21251F] to-[#171A17] border-[#A7B39A]/40 text-[#F3EFE7]'
              : 'bg-gradient-to-br from-[#E6DFD3] to-[#FDFBF7] border-[#E6DFD3] text-[#24211F]'
          }`}
        >
          {/* Subtle background radial aura */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#4A5D4E]/10 blur-3xl pointer-events-none" />

          <div className="relative space-y-5 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] block">
              COMIENZA TU PROCESO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
              ¿Preparado para dar el primer paso?
            </h2>
            <p className="text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
              Estoy a tu disposición para atenderte tanto en mi consulta en Espacio K alma, C. del Río Huerva, 21 (50006 Zaragoza), como por videoconsulta desde donde estés.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-[0.98] ${
                  isDark
                    ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                    : 'bg-[#4A5D4E] text-[#FDFBF7] hover:bg-[#AA4664]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Contactar Ahora</span>
              </button>

              <button
                onClick={() => onNavigate('contacto')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${
                  isDark
                    ? 'border-[#667052] text-[#F3EFE7] hover:bg-[#21251F]'
                    : 'border-[#E6DFD3] text-[#24211F] hover:bg-[#FDFBF7]'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-[#AA4664]" />
                <span>Ver Preguntas Frecuentes</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
