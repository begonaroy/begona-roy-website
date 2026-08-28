import React from 'react';
import { BIO_FULL_STORY, CLINICAL_INFO, IMAGES } from '../data/content';
import { X, Award, GraduationCap, Heart, CheckCircle2, Calendar, Briefcase } from 'lucide-react';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onOpenBooking: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({
  isOpen,
  onClose,
  isDark,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="bio-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="bio-modal-content"
        className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl transition-all max-h-[90vh] overflow-y-auto ${
          isDark
            ? 'bg-[#151B17] border border-[#2D3930] text-[#F3EFE7]'
            : 'bg-[#FBF9F5] border border-[#E8E2D9] text-[#222823]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-bio-modal"
          onClick={onClose}
          aria-label="Cerrar biografía"
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isDark
              ? 'bg-[#222C26] text-[#B7BEA3] hover:text-[#F3EFE7] hover:bg-[#2D3930]'
              : 'bg-[#E8ECE9] text-[#5A655C] hover:text-[#222823] hover:bg-[#D1DAD2]'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with portrait and credentials */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-[#E8E2D9] dark:border-[#2D3930]">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
            <img
              src={IMAGES.begonaPortrait}
              alt="Begoña Roy Psicóloga Sanitaria"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="text-center sm:text-left space-y-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isDark
                  ? 'bg-[#222C26] text-[#A7B39A]'
                  : 'bg-[#E8ECE9] text-[#4A5D4E]'
              }`}
            >
              Trayectoria Profesional
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
              Begoña Roy
            </h2>
            <p className="text-sm font-medium text-[#AA4664] dark:text-[#D8659B]">
              Psicóloga General Sanitaria · Psicooncóloga · Facilitadora de Pericardio
            </p>
            <p className="text-xs text-opacity-80 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 pt-1 text-[#5A655C] dark:text-[#B7BEA3]">
              <span>Col. Nº {CLINICAL_INFO.collegiateNumber}</span>
              <span>•</span>
              <span>{CLINICAL_INFO.sanitaryRegistration}</span>
            </p>
          </div>
        </div>

        {/* Bio Text Content */}
        <div className="py-8 space-y-5 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#222823] dark:text-[#F3EFE7]">
            {BIO_FULL_STORY.headline}
          </h3>

          {BIO_FULL_STORY.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Formación y Especializaciones */}
        <div className="py-6 border-t border-[#E8E2D9] dark:border-[#2D3930]">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-[#4A5D4E] dark:text-[#A7B39A]" />
            <h4 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
              Formación y Especializaciones
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {BIO_FULL_STORY.trainings.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                  isDark
                    ? 'bg-[#1C2420] border-[#2D3930] text-[#B7BEA3]'
                    : 'bg-white border-[#E8E2D9] text-[#222823]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#AA4664] dark:text-[#D8659B] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Milestones */}
        <div className="py-6 border-t border-[#E8E2D9] dark:border-[#2D3930]">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-[#4A5D4E] dark:text-[#A7B39A]" />
            <h4 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
              Trayectoria y Experiencia Profesional
            </h4>
          </div>
          <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mb-6">
            {BIO_FULL_STORY.experienceOverview}
          </p>

          <div className="space-y-3.5">
            {BIO_FULL_STORY.milestones.map((item, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 transition-all ${
                  isDark
                    ? 'bg-[#1C2420] border-[#2D3930]'
                    : 'bg-white border-[#E8E2D9]'
                }`}
              >
                <span className="font-serif font-semibold text-xs px-2.5 py-1 rounded-md bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] self-start flex-shrink-0">
                  {item.year}
                </span>
                <div className="space-y-0.5">
                  <h5 className="font-medium text-sm text-[#222823] dark:text-[#F3EFE7]">
                    {item.title}
                  </h5>
                  <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA inside modal */}
        <div className="pt-6 border-t border-[#E8E2D9] dark:border-[#2D3930] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] text-center sm:text-left">
            ¿Deseas iniciar un acompañamiento o resolver cualquier duda?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                isDark
                  ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                  : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Pedir Cita con Begoña</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
