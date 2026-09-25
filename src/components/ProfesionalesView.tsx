import React, { useRef } from 'react';
import { Calendar, ShieldCheck, Users } from 'lucide-react';
import { IMAGES } from '../data/content';
import { useGsapPageEntrance } from '../hooks/useGsapAnimations';
import { ROUTES } from '../routes';

interface ProfesionalesViewProps {
  isDark: boolean;
}

export const ProfesionalesView: React.FC<ProfesionalesViewProps> = ({ isDark }) => {
  const viewRef = useRef<HTMLDivElement>(null);
  useGsapPageEntrance(viewRef);

  return (
    <div ref={viewRef} id="profesionales-view" className="space-y-16 pb-20 sm:space-y-24">
      <section className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div data-motion-hero className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D9] bg-[#FAF7F2] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#AA4664] shadow-sm dark:border-[#2D3930] dark:bg-[#1C2420] dark:text-[#DDB5C1]">
            <Users aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Acción social</span>
          </div>

          <h1 data-motion-hero className="font-serif text-3xl font-medium leading-[1.2] tracking-tight text-[#222823] dark:text-[#F3EFE7] sm:text-4xl lg:text-5xl">
            Apoyo psicológico para profesionales del ámbito social y ONGs
          </h1>

          <p data-motion-hero className="mx-auto max-w-3xl text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] sm:text-lg">
            Un espacio terapéutico diseñado por y para quienes sostienen realidades complejas a diario.
          </p>
        </div>

        <article data-motion-hero className={`mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border shadow-lg ${isDark ? 'border-[#2D3930] bg-[#1C2420]' : 'border-[#E8E2D9] bg-white'}`}>
          <div className="grid items-stretch lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <figure className="border-b border-[#E8E2D9]/80 dark:border-[#2D3930] lg:border-b-0 lg:border-r">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={IMAGES.profesionales}
                  alt="Sendero entre árboles en un entorno natural"
                  width={1200}
                  height={896}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
                <div aria-hidden="true" className={`pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent ${isDark ? 'from-[#151B17] to-transparent opacity-60' : 'from-[#FAF7F2] to-transparent opacity-40'}`} />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E8E2D9]/80 p-4 text-xs text-[#5A655C] dark:border-[#2D3930] dark:text-[#B7BEA3] sm:p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#4A5D4E] dark:text-[#A7B39A]" />
                  <span className="font-medium">Espacio de confidencialidad absoluta y rigor ético</span>
                </div>
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#4A5D4E] dark:bg-[#A7B39A]" />
                  <span>Modalidad presencial en Zaragoza y videoconsulta online</span>
                </div>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-base font-normal leading-[1.75] text-[#3D473F] dark:text-[#D1DAD2] sm:text-lg">
                Tras más de 25 años caminando junto al tejido asociativo y las entidades sociales, conozco de cerca lo que significan las luces y las sombras de trabajar por y para los demás. Sé lo que implica la gestión de recursos —lidiar con su escasez—, la alta exigencia emocional, el peso de la responsabilidad y esa delgada línea donde la vocación a menudo se cruza con el agotamiento invisible.
              </p>

              <div className="mt-8 border-t border-[#E8E2D9] pt-8 dark:border-[#2D3930]">
                <div className="flex items-start gap-4">
                  <p className="text-base font-normal leading-[1.75] text-[#3D473F] dark:text-[#D1DAD2] sm:text-lg">
                    En este espacio, ofrezco un refugio seguro para expresarte libremente, sin necesidad de dar explicaciones innecesarias, donde no tienes que justificar tu compromiso para que entienda tu cansancio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section data-motion-reveal id="profesionales-quote-section" className="mx-auto max-w-4xl px-4 py-12 text-center">
        <div className={`rounded-3xl border p-8 sm:p-12 ${isDark ? 'border-[#2D3930] bg-[#1C2420]' : 'border-[#E8E2D9] bg-[#F3EFEA]'}`}>
          <span aria-hidden="true" className="mb-2 block font-serif text-3xl text-[#AA4664] dark:text-[#DDB5C1] sm:text-4xl">“</span>
          <p className="font-script text-2xl font-semibold leading-[1.225] text-[#222823] dark:text-[#F3EFE7] sm:text-3xl md:text-4xl">
            Mi objetivo es acompañarte a cuidar de ti con la misma dedicación con la que tú cuidas del mundo, ayudándote a sostener tu bienestar profesional y personal desde una experiencia real y compartida.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span aria-hidden="true" className="h-px w-8 bg-[#AA4664] dark:bg-[#DDB5C1]" />
            <span className="font-serif text-sm italic text-[#5A655C] dark:text-[#B7BEA3]">Begoña Roy · Psicóloga Sanitaria y Colaboradora en Entidades Sociales</span>
            <span aria-hidden="true" className="h-px w-8 bg-[#AA4664] dark:bg-[#DDB5C1]" />
          </div>
        </div>
      </section>

      <section data-motion-reveal className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl space-y-2 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">Garantía sanitaria y ética</span>
          <h2 className="font-serif text-2xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7] sm:text-3xl">Privacidad · Intimidad · Un espacio seguro</h2>
          <p className="text-sm text-[#5A655C] dark:text-[#B7BEA3]">Las tres coordenadas que sostienen cada encuentro terapéutico.</p>
        </div>

        <div data-motion-group className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className={`group relative overflow-hidden rounded-3xl border p-7 transition-shadow hover:shadow-md ${isDark ? 'border-[#2D3930] bg-[#1C2420]' : 'border-[#E8E2D9] bg-white'}`}>
            <img
              src={isDark ? '/icons/secure-light.svg' : '/icons/secure.svg'}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 select-none object-contain opacity-[0.16] transition-[transform,opacity] duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:opacity-[0.22] dark:group-hover:opacity-[0.28]"
            />
            <div className="relative z-10 pt-16">
              <h3 className="mb-2 font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">Privacidad</h3>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#D1DAD2]">Total secreto profesional amparado por el Código Deontológico de la Psicología y la legislación sanitaria. Nada de lo compartido sale de la sesión.</p>
            </div>
          </article>

          <article className={`group relative overflow-hidden rounded-3xl border p-7 transition-shadow hover:shadow-md ${isDark ? 'border-[#2D3930] bg-[#1C2420]' : 'border-[#E8E2D9] bg-white'}`}>
            <img
              src={isDark ? '/icons/heart-light.svg' : '/icons/heart.svg'}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 select-none object-contain opacity-[0.16] transition-[transform,opacity] duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:opacity-[0.22] dark:group-hover:opacity-[0.28]"
            />
            <div className="relative z-10 pt-16">
              <h3 className="mb-2 font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">Intimidad</h3>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#D1DAD2]">Un entorno libre de juicios ni evaluaciones de rendimiento laboral. Un lugar donde despojarte de la armadura profesional y atender lo que sientes.</p>
            </div>
          </article>

          <article className={`group relative overflow-hidden rounded-3xl border p-7 transition-shadow hover:shadow-md ${isDark ? 'border-[#2D3930] bg-[#1C2420]' : 'border-[#E8E2D9] bg-white'}`}>
            <img
              src={isDark ? '/icons/shield-light.svg' : '/icons/shield.svg'}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 select-none object-contain opacity-[0.16] transition-[transform,opacity] duration-500 group-hover:scale-105 group-hover:opacity-[0.22] dark:opacity-[0.22] dark:group-hover:opacity-[0.28]"
            />
            <div className="relative z-10 pt-16">
              <h3 className="mb-2 font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">Un espacio seguro</h3>
              <p className="text-sm leading-relaxed text-[#5A655C] dark:text-[#D1DAD2]">Donde tu desgaste, tus dudas y tu agotamiento son legítimos. Un remanso de contención, calma y escucha respetuosa para reencontrarte.</p>
            </div>
          </article>
        </div>
      </section>

      <section data-motion-reveal className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className={`relative overflow-hidden rounded-3xl border p-8 text-center shadow-xl sm:p-12 lg:p-14 ${isDark ? 'border-[#7C9682]/40 bg-gradient-to-br from-[#2D3D32] to-[#151B17] text-[#F3EFE7]' : 'border-[#4A5D4E] bg-gradient-to-br from-[#4A5D4E] to-[#333F36] text-white'}`}>
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-xl space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EDD4CB]">A tu lado cuando lo necesites</span>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Hablemos en un espacio seguro</h2>
            <p className="text-sm leading-relaxed text-[#E8ECE9] sm:text-base">Da el paso hacia un espacio donde ser tú sin etiquetas ni presiones. Puedes concertar una sesión presencial en Zaragoza o realizarla cómodamente online.</p>

            <div className="flex flex-col items-center justify-center gap-3.5 pt-4 sm:flex-row">
              <a href={`${ROUTES.contacto}#contact-form`} className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#4A5D4E] shadow-lg transition-colors hover:bg-[#FAF7F2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto">
                <Calendar aria-hidden="true" className="h-4 w-4" />
                <span>Reserva una sesión</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
