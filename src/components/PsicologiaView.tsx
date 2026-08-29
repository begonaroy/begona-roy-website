import React, { useRef, useState } from 'react';
import { ServiceDetail, NavigationTab } from '../types';
import { IMAGES, SERVICES_DATA, PERICARDIUM_INFO } from '../data/content';
import psicologiaHeroImg from '../assets/images/psicologia_hero_armchair_1787912154813.jpg';
import {
  scrollElementIntoView,
  useGsapDynamicEntrance,
  useGsapPageEntrance,
} from '../hooks/useGsapAnimations';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Brain,
  HeartHandshake,
  Activity,
  Compass,
  Calendar,
  MessageSquare,
  Eye,
  Heart,
  Layers,
  Sparkle,
  Clock,
  Target,
  Users,
  Feather,
  Sun,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MapPin
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
  const [activeApproach, setActiveApproach] = useState<'integral' | 'emdr' | 'psicooncologia'>('integral');
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('ansiedad-estres');
  const viewRef = useRef<HTMLDivElement>(null);

  useGsapPageEntrance(viewRef);
  useGsapDynamicEntrance(viewRef, '[data-motion-approach-panel]', activeApproach);
  useGsapDynamicEntrance(viewRef, '[data-motion-accordion-panel]', openAccordionId);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

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
    <div ref={viewRef} id="psicologia-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION WITH IMAGE */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div data-motion-hero className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A]">
              <Sparkles className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
              <span>PSICOLOGÍA SANITARIA & ACOMPAÑAMIENTO INTEGRAL</span>
            </div>

            <h1 data-motion-hero className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7] leading-[1.18]">
              Un espacio de encuentro, respeto y evolución personal
            </h1>

            <p data-motion-hero className="text-base sm:text-lg text-[#5A655C] dark:text-[#B7BEA3] leading-relaxed">
              Acompañamiento terapéutico personalizado desde la escucha atenta, la empatía y la integración de cuerpo, emoción y mente. Un entorno seguro para escucharte sin prisas y desplegar tus propios recursos internos.
            </p>

            {/* Badges / Pill features */}
            <div data-motion-hero className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8ECE9] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <MapPin className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
                <span>Espacio K alma · Zaragoza</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8ECE9] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A]" />
                <span>Presencial & Online</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8ECE9] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A] border border-[#D8E0DA] dark:border-[#2D3930]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
                <span>Enfoque Humanista & EMDR</span>
              </span>
            </div>

            {/* CTAs */}
            <div data-motion-hero className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg ${
                  isDark
                    ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Pedir Cita</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('especialidades-psicologia');
                  if (el) {
                    scrollElementIntoView(el);
                  }
                }}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold border transition-all ${
                  isDark
                    ? 'border-[#2D3930] text-[#B7BEA3] hover:bg-[#1C2420]'
                    : 'border-[#D8D0C4] text-[#222823] hover:bg-[#F3EFEA]'
                }`}
              >
                <span>Ver Especialidades</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with Armchair & Eucalyptus Vase */}
          <div data-motion-hero className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D9] dark:border-[#2D3930] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] group">
              <img
                src={psicologiaHeroImg}
                alt="Consulta de psicología cálida y serena con sillón bouclé y jarrón con ramas de eucalipto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom Card inside image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-[#151B17]/90 backdrop-blur-md border border-white/40 dark:border-[#2D3930]/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#4A5D4E]/10 dark:bg-[#7C9682]/20 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center flex-shrink-0">
                    <Feather className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-xs sm:text-sm font-medium text-[#222823] dark:text-[#F3EFE7] truncate">
                      Consulta en Espacio K alma
                    </p>
                    <p className="text-[11px] text-[#5A655C] dark:text-[#B7BEA3] truncate">
                      Un ambiente de paz, luz natural y presencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS 3 ABORDAJES TERAPÉUTICOS */}
      <section data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
            DISCIPLINAS Y ENFOQUES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-medium text-[#222823] dark:text-[#F3EFE7]">
            Nuestros Abordajes Principales
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#B7BEA3]">
            Descubre las bases de nuestro trabajo terapéutico adaptado a cada momento de tu vida.
          </p>
        </div>

        {/* Navigation Selector for the 3 Approaches */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] gap-1">
            {[
              { id: 'integral', label: '1. Psicología Integral' },
              { id: 'emdr', label: '2. EMDR' },
              { id: 'psicooncologia', label: '3. Psicooncología' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveApproach(tab.id as any)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeApproach === tab.id
                    ? isDark
                      ? 'bg-[#7C9682] text-[#171A17] font-semibold shadow-sm'
                      : 'bg-[#4A5D4E] text-white font-semibold shadow-sm'
                    : isDark
                    ? 'text-[#B7BEA3] hover:text-[#F3EFE7]'
                    : 'text-[#5A655C] hover:text-[#222823]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* APPROACH 1: PSICOLOGÍA INTEGRAL */}
        {activeApproach === 'integral' && (
          <div
            data-motion-approach-panel
            className={`rounded-3xl border p-6 sm:p-10 transition-all ${
              isDark
                ? 'bg-[#151B17] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A]">
                    Enfoque Global
                  </span>
                  <span className="text-xs font-medium text-[#AA4664] dark:text-[#D8659B]">Cuerpo · Mente · Emociones</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                  1. Psicología Integral
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                  La <strong>psicología integral</strong> es un enfoque que une distintas corrientes de la psicología —como la cognitivo-conductual, la humanista y la psicodinámica—. Ve a la persona como un todo, uniendo cuerpo, mente, emociones, para crear un tratamiento a la medida de cada paciente.
                </p>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <h4 className="font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2 mb-1.5">
                      <Sun className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                      <span>Aporta una visión global</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                      No mira solo el problema actual, también mira la historia personal, el entorno y el cuerpo.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <h4 className="font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2 mb-1.5">
                      <Layers className="w-4 h-4 text-[#4A5D4E] dark:text-[#A7B39A]" />
                      <span>Utiliza diferentes técnicas</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                      Combina herramientas de diferentes escuelas según lo que funcione mejor para ti.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <h4 className="font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2 mb-1.5">
                      <Compass className="w-4 h-4 text-[#4A5D4E] dark:text-[#A7B39A]" />
                      <span>Tratamiento flexible</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                      Puesto que se adapta a tus cambios y necesidades únicas en cada fase del proceso.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <h4 className="font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2 mb-1.5">
                      <Target className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                      <span>Enfoque práctico</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                      Busca sanar la raíz del malestar y no solo quitar los síntomas superficiales.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking('integral')}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                      isDark
                        ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                        : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Pedir Cita para Psicología Integral</span>
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-80 h-72 lg:h-96 rounded-2xl overflow-hidden flex-shrink-0 shadow-md relative">
                <img
                  src={IMAGES.clinicInterior}
                  alt="Psicología Integral"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-sm italic">
                    "Unir cuerpo, mente y emociones para un tratamiento a tu medida."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPROACH 2: EMDR */}
        {activeApproach === 'emdr' && (
          <div
            data-motion-approach-panel
            className={`rounded-3xl border p-6 sm:p-10 transition-all ${
              isDark
                ? 'bg-[#151B17] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#AA4664]/10 text-[#AA4664] dark:text-[#D8659B]">
                    Avalado por la OMS
                  </span>
                  <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#A7B39A]">
                    Desensibilización y Reprocesamiento
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                  2. EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares)
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                  El <strong>EMDR</strong> (Desensibilización y Reprocesamiento por Movimientos Oculares) es una terapia psicológica eficaz avalada por la <strong>Organización Mundial de la Salud (OMS)</strong>. Ayuda a sanar recuerdos dolorosos o traumáticos. El método usa movimientos de los ojos u otros estímulos rítmicos para desbloquear la mente y procesar de forma sana el pasado.
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <p className="font-medium text-[#222823] dark:text-[#F3EFE7] mb-1">
                      🌿 Origen y Evidencia Científica:
                    </p>
                    <p>
                      Fue descubierta de forma casual. En 1987, <strong>Francine Shapiro</strong>, psicóloga norteamericana, descubrió que los movimientos oculares voluntarios reducían la intensidad de la angustia de los pensamientos negativos. Los resultados de investigaciones concluyeron que EMDR reducía de manera significativa los síntomas del <strong>trastorno por estrés postraumático (TEPT)</strong>.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <p className="font-medium text-[#222823] dark:text-[#F3EFE7] mb-1">
                      🧠 Desbloqueo del Procesamiento de Información:
                    </p>
                    <p>
                      La terapia EMDR es un abordaje psicoterapéutico que trabaja sobre el sistema de procesamiento de información del paciente que puede llegar a bloquearse por diversos motivos como <strong>muertes, abusos de todo tipo (psicológicos, emocionales, físicos o sexuales), etc.</strong>, lo cual comienza a generar en el paciente una gran diversidad de síntomas.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <p className="font-medium text-[#222823] dark:text-[#F3EFE7] mb-1">
                      ✨ Rendimiento y Otras Aplicaciones:
                    </p>
                    <p>
                      También podemos utilizar la terapia EMDR para <strong>aliviar la angustia de hablar en público</strong> o para mejorar el rendimiento en el trabajo, en los deportes y en las interpretaciones artísticas.
                    </p>
                  </div>

                  <p className="italic text-[#4A5D4E] dark:text-[#A7B39A] pt-1">
                    La terapia EMDR puede integrarse con éxito con el resto de abordajes, ya que de un modo u otro, todos trabajan con la historia del paciente.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking('emdr')}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                      isDark
                        ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                        : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Pedir Cita para Terapia EMDR</span>
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-80 h-72 lg:h-96 rounded-2xl overflow-hidden flex-shrink-0 shadow-md relative">
                <img
                  src={IMAGES.emdrApproach}
                  alt="Terapia EMDR"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-sm italic">
                    "Desbloquear la mente y procesar de forma sana el pasado."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPROACH 3: PSICOONCOLOGÍA */}
        {activeApproach === 'psicooncologia' && (
          <div
            data-motion-approach-panel
            className={`rounded-3xl border p-6 sm:p-10 transition-all ${
              isDark
                ? 'bg-[#151B17] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#AA4664] text-white shadow-sm">
                    Especialidad Destacada
                  </span>
                  <span className="text-xs font-medium text-[#4A5D4E] dark:text-[#A7B39A]">
                    Pacientes y Familias
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                  3. Psicooncología
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                  La <strong>psicooncología</strong> es una rama de la psicología que estudia y trata el impacto emocional, social y conductual del cáncer. Ayuda a los pacientes y a sus familias a manejar el miedo, la ansiedad y la tristeza en todas las fases de la enfermedad.
                </p>

                {/* Qué hace un psicooncólogo & Etapas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Bloque: Qué hace */}
                  <div
                    className={`p-5 rounded-2xl border space-y-3 ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <h4 className="font-serif font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                      <span>¿Qué hace un psicooncólogo?</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                        <span>Evalúa el estado emocional del paciente.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                        <span>Enseña técnicas para reducir el estrés y la ansiedad.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                        <span>Mejora la comunicación entre la familia y el enfermo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                        <span>Ayuda a aceptar los cambios físicos del tratamiento.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloque: Etapas de apoyo */}
                  <div
                    className={`p-5 rounded-2xl border space-y-3 ${
                      isDark
                        ? 'bg-[#1C2420] border-[#2D3930]'
                        : 'bg-[#FAF7F2] border-[#E8E2D9]'
                    }`}
                  >
                    <h4 className="font-serif font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#4A5D4E] dark:text-[#A7B39A]" />
                      <span>Etapas de apoyo</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#AA4664] flex-shrink-0 mt-1.5" />
                        <span><strong>Diagnóstico:</strong> baja el impacto inicial del shock y el miedo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#AA4664] flex-shrink-0 mt-1.5" />
                        <span><strong>Tratamiento:</strong> da herramientas para soportar el cansancio y el dolor.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#AA4664] flex-shrink-0 mt-1.5" />
                        <span><strong>Supervivencia o cuidados paliativos:</strong> acompaña en el regreso a la rutina o en el duelo.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking('psicooncologia')}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                      isDark
                        ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                        : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Pedir Cita para Psicooncología</span>
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-80 h-72 lg:h-96 rounded-2xl overflow-hidden flex-shrink-0 shadow-md relative">
                <img
                  src={IMAGES.psicooncologiaApproach}
                  alt="Psicooncología"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-sm italic">
                    "Acompañar el miedo, la incertidumbre y el corazón en cada fase."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 2.5. REFINED QUOTE BLOCK (Dancing Script) */}
      <section data-motion-reveal className="max-w-4xl mx-auto px-4">
        <div
          className={`p-8 sm:p-10 rounded-3xl border text-center transition-all ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#F3EFEA] border-[#E8E2D9]'
          }`}
        >
          <p className="font-script text-2xl sm:text-3xl leading-relaxed text-[#222823] dark:text-[#F3EFE7] font-semibold">
            "{PERICARDIUM_INFO.quote}"
          </p>
          <span className="font-serif text-xs uppercase tracking-widest text-[#AA4664] dark:text-[#D8659B] font-medium block mt-3">
            Begoña Roy · Psicóloga Sanitaria y Terapeuta
          </span>
        </div>
      </section>

      {/* 3. ¿QUÉ ENCONTRARÁS EN NUESTRAS SESIONES? */}
      <section data-motion-reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
            EN CONSULTA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#222823] dark:text-[#F3EFE7]">
            ¿Qué encontrarás en nuestras sesiones?
          </h2>
        </div>

        <div data-motion-group className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Espacio seguro y escucha */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border space-y-3 ${
              isDark
                ? 'bg-[#151B17] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
              Espacio Seguro, Confidencial y a tu Ritmo
            </h3>
            <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              Un espacio seguro donde poder expresarte con total libertad, con confidencialidad, a tu ritmo y atendiendo lo que, para ti, en esos momentos, es lo más importante y necesario para tu mejoría.
            </p>
            <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              Te escucho <strong>sin prisas, sin juicio y con mucha calma</strong>, para poder ir conociéndonos y poder ofrecerte ese lugar seguro que puedas encontrar también en ti y desde ahí escucharte a ti misma.
            </p>
          </div>

          {/* Card 2: Dirección compartida y herramientas */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border space-y-3 ${
              isDark
                ? 'bg-[#151B17] border-[#2D3930]'
                : 'bg-white border-[#E8E2D9]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#AA4664]/10 text-[#AA4664] dark:text-[#D8659B] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
              Tú Marcas el Ritmo y Acordamos el Camino
            </h3>
            <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              Tú marcas el ritmo y llegamos a acuerdos juntas. Revisando la dirección para no perder el foco.
            </p>
            <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              Existen diferentes herramientas acordes a cada persona dependiendo de su sistema de creencias y valores y la fase en la que se encuentra. Lo importante es saber que <strong>no a todos nos sirve lo mismo</strong>, y que no todas las técnicas encajan por igual en todas las personas.
            </p>
          </div>
        </div>

        {/* Visión global y abanico de técnicas */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#FAF7F2] border-[#E8E2D9]'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#4A5D4E]/15 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
                Visión Global del Ser Humano
              </h4>
              <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                Integración personalizada según tus necesidades únicas
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] mb-4">
            Por esto, tener en cuenta esta visión global del ser humano nos aporta un conjunto integrado de herramientas, utilizando solamente aquellas que se ajustan más a ti como persona:
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              'Técnicas Cognitivo-Conductuales',
              'Técnicas Centradas en la Emoción',
              'Técnicas Somáticas',
              'EMDR',
              'Mindfulness',
              'Relajación',
              'Visualizaciones',
              'Técnicas Energéticas'
            ].map((tech, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  isDark
                    ? 'bg-[#151B17] border-[#2D3930] text-[#B7BEA3]'
                    : 'bg-white border-[#E8E2D9] text-[#222823]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TE PUEDO AYUDAR EN (ACORDEÓN INTERACTIVO) */}
      <section id="especialidades-psicologia" data-motion-reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
            MOTIVOS DE CONSULTA Y ACOMPAÑAMIENTO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            Te puedo ayudar en
          </h2>
          <p className="text-sm sm:text-base text-[#5A655C] dark:text-[#B7BEA3]">
            Despliega cada una de las áreas para conocer en profundidad cómo trabajamos cada proceso y las herramientas específicas que utilizaremos juntas.
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
                      ? 'bg-[#1C2420] border-[#7C9682]/60 shadow-lg ring-1 ring-[#7C9682]/30'
                      : 'bg-white border-[#4A5D4E]/40 shadow-lg ring-1 ring-[#4A5D4E]/20'
                    : isDark
                    ? 'bg-[#151B17] border-[#2D3930] hover:border-[#7C9682]/40'
                    : 'bg-[#FAF7F2] border-[#E8E2D9] hover:border-[#AA4664]/50'
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
                          ? 'bg-[#AA4664] text-white'
                          : isDark
                          ? 'bg-[#222C26] text-[#B7BEA3]'
                          : 'bg-[#EAE4DC] text-[#5A655C]'
                      }`}
                    >
                      {indexFormatted}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                          {service.title}
                        </h3>
                        {service.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#AA4664] text-white shadow-sm">
                            Especialidad Destacada
                          </span>
                        )}
                        <span
                          className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                            isDark
                              ? 'bg-[#222C26] text-[#A7B39A]'
                              : 'bg-[#E8ECE9] text-[#4A5D4E]'
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>
                      {!isOpen && (
                        <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] truncate mt-0.5">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#AA4664]/15 text-[#AA4664] dark:text-[#D8659B] rotate-180'
                        : isDark
                        ? 'bg-[#222C26] text-[#B7BEA3]'
                        : 'bg-[#E8ECE9] text-[#5A655C]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Expanded Body */}
                {isOpen && (
                  <div data-motion-accordion-panel className="px-5 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-[#E8E2D9] dark:border-[#2D3930]/80 space-y-6">
                    {/* Subtitle & Image row */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1 space-y-3">
                        <p className="font-serif italic text-base sm:text-lg text-[#AA4664] dark:text-[#D8659B]">
                          {service.subtitle}
                        </p>

                        <div className="space-y-3 text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
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
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#4A5D4E] dark:bg-[#151B17]/90 dark:text-[#A7B39A] backdrop-blur-sm">
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
                            ? 'bg-[#151B17] border-[#2D3930]'
                            : 'bg-[#FAF7F2] border-[#E8E2D9]'
                        }`}
                      >
                        <h4 className="font-serif font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] dark:text-[#A7B39A]" />
                          <span>¿Qué trabajamos y logramos?</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                          {service.benefits.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#AA4664] flex-shrink-0 mt-1.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Para quién es */}
                      <div
                        className={`p-5 rounded-2xl border space-y-3 ${
                          isDark
                            ? 'bg-[#151B17] border-[#2D3930]'
                            : 'bg-[#FAF7F2] border-[#E8E2D9]'
                        }`}
                      >
                        <h4 className="font-serif font-semibold text-sm text-[#222823] dark:text-[#F3EFE7] flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                          <span>Indicado especialmente para:</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                          {service.forWhom.map((w, wIdx) => (
                            <li key={wIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] dark:bg-[#7C9682] flex-shrink-0 mt-1.5" />
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-[#E8E2D9] dark:border-[#2D3930] flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3 text-xs text-[#5A655C] dark:text-[#B7BEA3]">
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
                              ? 'border-[#2D3930] text-[#B7BEA3] hover:bg-[#222C26]'
                              : 'border-[#D8D0C4] text-[#222823] hover:bg-white'
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
                              ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                              : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
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
      </section>

      {/* 4.5. ¿CÓMO FUNCIONA EL PROCESO TERAPÉUTICO? */}
      <section data-motion-reveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 rounded-3xl border shadow-sm relative overflow-hidden transition-all ${
            isDark
              ? 'bg-[#1C2420] border-[#2D3930]'
              : 'bg-[#FBF9F5] border-[#E8E2D9]'
          }`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-25 -mr-20 -mt-20 ${
              isDark ? 'bg-[#7C9682]' : 'bg-[#7A8B6E]'
            }`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Accent decoration */}
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
                  VISIÓN DEL ACOMPAÑAMIENTO
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#222823] dark:text-[#F3EFE7] leading-tight">
                ¿Cómo funciona el proceso terapéutico?
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                <p>
                  Para mí implica una <strong>evolución personal</strong>, donde cada uno llevamos nuestro ritmo, nuestros tiempos y donde, como seres individuales y diferentes que somos, aprendemos a mirarnos con ese mimo, cuidado y respeto para poder escucharnos con amabilidad y comprensión.
                </p>
                <p>
                  Este proceso tiene movimiento, aunque a veces no lo parezca o pensemos que no avanzamos, pero es tan importante respetarnos y cuidarnos, que poco a poco se van produciendo los pasos que nos van construyendo y que nos permiten conocernos y querernos tal y como somos. Desde nuestro origen somos seres únicos, diversos y llenos de habilidades y experiencias múltiples, que en el transcurso de nuestra vida se van mostrando y a veces nos sentimos perdidos porque los queremos entender y no sabemos de dónde vienen.
                </p>
                <p>
                  Miraremos todo esto con mucho respeto y cuidado, para poder dejar espacio también a otras partes que, igual no se han dejado ver tanto, pero que contienen también toda esa <strong>fuerza, reconocimiento, valor y amor</strong> para crear nuevas conexiones con nuestro verdadero ser y esencia.
                </p>
              </div>
            </div>

            {/* Illustration Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D9] dark:border-[#2D3930] bg-[#151B17]/5 dark:bg-[#151B17]/40 group">
                <img
                  src="/illustrations/proceso-terapeutico.png"
                  alt="Ilustración del proceso terapéutico y escucha en consulta"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#151B17]/80 backdrop-blur-md text-[11px] font-medium text-[#4A5D4E] dark:text-[#B7BEA3] border border-white/40 dark:border-white/10 shadow-sm">
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#D8659B]" />
                    <span>Conexión, escucha y sintonía</span>
                  </span>
                  <span className="text-[10px] text-[#AA4664] dark:text-[#D8659B] font-semibold uppercase tracking-wider">
                    Presencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGÍA: ¿CÓMO TRABAJAMOS EN CONSULTA? (INTACTA) */}
      <section data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B]">
            PROCESO TERAPÉUTICO
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            ¿Cómo trabajamos en consulta?
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#B7BEA3]">
            Un camino estructurado pero flexible que respeta siempre tu ritmo personal y tu biología.
          </p>
        </div>

        <div data-motion-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-4 relative ${
                  isDark
                    ? 'bg-[#1C2420] border-[#2D3930]'
                    : 'bg-white border-[#E8E2D9]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#AA4664] dark:text-[#D8659B]/50">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM CTA BLOCK "¿Preparado para dar el primer paso?" (INTACTA) */}
      <section data-motion-reveal className="max-w-4xl mx-auto px-4">
        <div
          className={`p-10 sm:p-14 rounded-3xl border text-center relative overflow-hidden shadow-xl ${
            isDark
              ? 'bg-gradient-to-br from-[#222C26] to-[#151B17] border-[#7C9682]/40 text-[#F3EFE7]'
              : 'bg-gradient-to-br from-[#F3EFEA] to-[#FAF7F2] border-[#E8E2D9] text-[#222823]'
          }`}
        >
          {/* Subtle background radial aura */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#4A5D4E]/10 blur-3xl pointer-events-none" />

          <div className="relative space-y-5 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#D8659B] block">
              COMIENZA TU PROCESO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
              ¿Preparado para dar el primer paso?
            </h2>
            <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
              Estoy a tu disposición para atenderte tanto en mi consulta en Espacio K alma (C. del Río Huerva, 21, 50006 Zaragoza) como por videoconsulta desde donde estés.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-[0.98] ${
                  isDark
                    ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Contactar Ahora</span>
              </button>

              <button
                onClick={() => onNavigate('contacto')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${
                  isDark
                    ? 'border-[#2D3930] text-[#F3EFE7] hover:bg-[#222C26]'
                    : 'border-[#D8D0C4] text-[#222823] hover:bg-white'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B]" />
                <span>Ver Preguntas Frecuentes</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
