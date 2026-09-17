import React, { useRef } from 'react';
import { ServiceDetail } from '../types';
import { X, CheckCircle2, Calendar, MapPin, Video, Sparkles, ArrowRight } from 'lucide-react';
import { useGsapDialogEntrance } from '../hooks/useGsapAnimations';
import { ROUTES } from '../routes';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  isDark,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  useGsapDialogEntrance(overlayRef, isOpen);

  if (!isOpen || !service) return null;

  return (
    <div
      ref={overlayRef}
      id="service-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-content"
        data-motion-dialog-panel
        className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl transition-all max-h-[90vh] overflow-y-auto ${
          isDark
            ? 'bg-[#151B17] border border-[#2D3930] text-[#F3EFE7]'
            : 'bg-[#FBF9F5] border border-[#E8E2D9] text-[#222823]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar detalle"
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isDark
              ? 'bg-[#222C26] text-[#B7BEA3] hover:text-[#F3EFE7]'
              : 'bg-[#E8ECE9] text-[#5A655C] hover:text-[#222823]'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image and Header */}
        <div className="space-y-4">
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-inner">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              {service.tag && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#AA4664] text-white mb-2 shadow-sm">
                  {service.tag}
                </span>
              )}
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium drop-shadow-sm">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#AA4664] dark:text-[#DDB5C1]">
            {service.subtitle}
          </p>

          {/* Full content description paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] pt-2">
            {service.fullContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="pt-6 border-t border-[#E8E2D9] dark:border-[#2D3930]">
            <h3 className="font-serif text-lg font-medium mb-3 text-[#222823] dark:text-[#F3EFE7]">
              ¿Qué logramos en este acompañamiento?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#1C2420] border-[#2D3930]'
                      : 'bg-white border-[#E8E2D9]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* For Whom */}
          <div className="pt-4">
            <h3 className="font-serif text-lg font-medium mb-3 text-[#222823] dark:text-[#F3EFE7]">
              ¿Para quién está especialmente indicado?
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5A655C] dark:text-[#B7BEA3]">
              {service.forWhom.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AA4664] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modalities & CTA */}
          <div className="pt-6 border-t border-[#E8E2D9] dark:border-[#2D3930] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#5A655C] dark:text-[#B7BEA3]">
              <span className="font-semibold block text-[#222823] dark:text-[#F3EFE7]">
                Duración: {service.duration}
              </span>
              <span>Modalidades: {service.modalities.join(' o ')}</span>
            </div>

            <a
              href={`${ROUTES.contacto}#contact-form`}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                isDark
                  ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                  : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Cita</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
