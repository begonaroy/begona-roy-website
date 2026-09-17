import React, { useEffect, useRef, useState } from 'react';
import { BookingDraft } from '../types';
import { CLINICAL_INFO } from '../data/content';
import { X, Calendar as CalendarIcon, Clock, MapPin, Video, ChevronRight, ChevronLeft } from 'lucide-react';
import { useGsapDialogEntrance, useGsapDynamicEntrance } from '../hooks/useGsapAnimations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (draft: BookingDraft) => void;
  isDark: boolean;
  initialServiceId?: string;
}

const todayIso = () => new Date().toISOString().slice(0, 10);

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onComplete, isDark, initialServiceId }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedModality, setSelectedModality] = useState<'presencial' | 'online'>('presencial');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const isPericardiumBooking = initialServiceId === 'liberacion-pericardio';

  useGsapDialogEntrance(overlayRef, isOpen);
  useGsapDynamicEntrance(overlayRef, '[data-motion-booking-step]', `${isOpen}-${step}`);

  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setSelectedModality('presencial');
    setPreferredDate('');
    setPreferredTime('');
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusCloseButton = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !overlayRef.current) return;
      const focusableElements = Array.from(overlayRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')) as HTMLElement[];
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!firstElement || !lastElement) return;
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusCloseButton);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleComplete = (event: React.FormEvent) => {
    event.preventDefault();
    if (!fullName || !email || !phone || !preferredDate || !preferredTime) return;
    onComplete({ modality: selectedModality, preferredDate, preferredTime, fullName, email, phone, message });
  };

  const inputClassName = `w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus-visible:ring-2 ${isDark ? 'bg-[#1C2420] border-[#2D3930] focus-visible:ring-[#7C9682] text-white' : 'bg-white border-[#E8E2D9] focus-visible:ring-[#4A5D4E] text-[#222823]'}`;
  const primaryButtonClassName = `inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:ring-2 ${isDark ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694] focus-visible:ring-[#F3EFE7]' : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40] focus-visible:ring-[#4A5D4E]'}`;

  return (
    <div ref={overlayRef} id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div id="booking-modal-container" data-motion-dialog-panel role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto ${isDark ? 'bg-[#151B17] border border-[#2D3930] text-[#F3EFE7]' : 'bg-[#FBF9F5] border border-[#E8E2D9] text-[#222823]'}`}>
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Cerrar solicitud de cita" className={`absolute top-5 right-5 p-2 rounded-full transition-colors focus-visible:ring-2 ${isDark ? 'bg-[#222C26] text-[#B7BEA3] hover:text-[#F3EFE7] focus-visible:ring-[#7C9682]' : 'bg-[#E8ECE9] text-[#5A655C] hover:text-[#222823] focus-visible:ring-[#4A5D4E]'}`}>
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="mb-8 pr-10">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#AA4664] dark:text-[#DDB5C1] mb-2"><span>Paso {step} de 3</span><span>{step === 1 ? 'Modalidad' : step === 2 ? 'Preferencia' : 'Tus datos'}</span></div>
          <div className="grid grid-cols-3 gap-2" aria-hidden="true">{[1, 2, 3].map((currentStep) => <div key={currentStep} className={`h-1.5 rounded-full ${currentStep <= step ? isDark ? 'bg-[#7C9682]' : 'bg-[#4A5D4E]' : isDark ? 'bg-[#222C26]' : 'bg-[#E8ECE9]'}`} />)}</div>
        </div>

        {step === 1 ? (
          <section data-motion-booking-step className="space-y-6" aria-labelledby="booking-modal-title">
            <div><h2 id="booking-modal-title" className="font-serif text-2xl font-medium tracking-tight">Elige la modalidad de tu sesión</h2><p className="text-sm mt-1 text-[#5A655C] dark:text-[#B7BEA3]">Indícanos cómo prefieres realizarla. La disponibilidad se confirmará personalmente.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button type="button" onClick={() => setSelectedModality('presencial')} aria-pressed={selectedModality === 'presencial'} className={`p-6 rounded-2xl border text-left transition-colors relative focus-visible:ring-2 ${selectedModality === 'presencial' ? isDark ? 'bg-[#222C26] border-[#7C9682] ring-1 ring-[#7C9682] focus-visible:ring-[#7C9682]' : 'bg-[#E8ECE9] border-[#4A5D4E] ring-1 ring-[#4A5D4E] focus-visible:ring-[#4A5D4E]' : isDark ? 'bg-[#1C2420] border-[#2D3930] hover:border-[#7C9682]/50 focus-visible:ring-[#7C9682]' : 'bg-white border-[#E8E2D9] hover:border-[#4A5D4E]/40 focus-visible:ring-[#4A5D4E]'}`}>
                <div className="p-3 rounded-xl bg-[#4A5D4E]/10 w-fit mb-4 text-[#4A5D4E] dark:text-[#A7B39A]"><MapPin className="w-6 h-6" aria-hidden="true" /></div><h3 className="font-serif text-lg font-medium">Terapia presencial</h3><p className="text-xs text-[#AA4664] dark:text-[#DDB5C1] font-medium mt-1">{CLINICAL_INFO.location}</p>
              </button>
              <button type="button" disabled={isPericardiumBooking} onClick={() => setSelectedModality('online')} aria-pressed={selectedModality === 'online'} className={`p-6 rounded-2xl border text-left transition-colors relative focus-visible:ring-2 ${isPericardiumBooking ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-[#1C2420] border-gray-300' : selectedModality === 'online' ? isDark ? 'bg-[#222C26] border-[#7C9682] ring-1 ring-[#7C9682] focus-visible:ring-[#7C9682]' : 'bg-[#E8ECE9] border-[#4A5D4E] ring-1 ring-[#4A5D4E] focus-visible:ring-[#4A5D4E]' : isDark ? 'bg-[#1C2420] border-[#2D3930] hover:border-[#7C9682]/50 focus-visible:ring-[#7C9682]' : 'bg-white border-[#E8E2D9] hover:border-[#4A5D4E]/40 focus-visible:ring-[#4A5D4E]'}`}>
                <div className="p-3 rounded-xl bg-[#4A5D4E]/10 w-fit mb-4 text-[#4A5D4E] dark:text-[#A7B39A]"><Video className="w-6 h-6" aria-hidden="true" /></div><h3 className="font-serif text-lg font-medium">Terapia online</h3><p className="text-xs text-[#AA4664] dark:text-[#DDB5C1] font-medium mt-1">Videoconsulta segura y confidencial</p>{isPericardiumBooking ? <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-2 font-medium">La Liberación del Pericardio es exclusivamente presencial.</p> : null}
              </button>
            </div>
            <div className="flex justify-end pt-4"><button type="button" onClick={() => setStep(2)} className={primaryButtonClassName}><span>Elegir preferencia</span><ChevronRight className="w-4 h-4" aria-hidden="true" /></button></div>
          </section>
        ) : null}

        {step === 2 ? (
          <section data-motion-booking-step className="space-y-6" aria-labelledby="booking-modal-title">
            <div><h2 id="booking-modal-title" className="font-serif text-2xl font-medium tracking-tight">Indica fecha y hora preferidas</h2><p className="text-sm mt-1 text-[#5A655C] dark:text-[#B7BEA3]">No representa disponibilidad confirmada; Begoña la confirmará contigo.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label htmlFor="booking-preferred-date" className="block text-xs font-semibold uppercase tracking-wider mb-1.5">Fecha preferida *</label><div className="relative"><CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A655C] dark:text-[#B7BEA3] pointer-events-none" aria-hidden="true" /><input id="booking-preferred-date" name="preferredDate" type="date" required min={todayIso()} value={preferredDate} onChange={(event) => setPreferredDate(event.target.value)} className={`${inputClassName} pl-11`} /></div></div>
              <div><label htmlFor="booking-preferred-time" className="block text-xs font-semibold uppercase tracking-wider mb-1.5">Hora preferida *</label><div className="relative"><Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A655C] dark:text-[#B7BEA3] pointer-events-none" aria-hidden="true" /><input id="booking-preferred-time" name="preferredTime" type="time" required value={preferredTime} onChange={(event) => setPreferredTime(event.target.value)} className={`${inputClassName} pl-11`} /></div></div>
            </div>
            <div className="flex justify-between items-center pt-4"><button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A655C] dark:text-[#B7BEA3] hover:underline focus-visible:ring-2"><ChevronLeft className="w-4 h-4" aria-hidden="true" /><span>Volver</span></button><button type="button" disabled={!preferredDate || !preferredTime} onClick={() => setStep(3)} className={`${primaryButtonClassName} disabled:opacity-50`}><span>Completar datos</span><ChevronRight className="w-4 h-4" aria-hidden="true" /></button></div>
          </section>
        ) : null}

        {step === 3 ? (
          <form data-motion-booking-step onSubmit={handleComplete} className="space-y-5" aria-labelledby="booking-modal-title">
            <div><h2 id="booking-modal-title" className="font-serif text-2xl font-medium tracking-tight">Completa tus datos</h2><p className="text-sm mt-1 text-[#5A655C] dark:text-[#B7BEA3]">Podrás revisar y corregir toda la información antes de abrir tu correo.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider mb-1.5">Nombre completo *</label><input id="booking-name" name="name" type="text" autoComplete="name" required value={fullName} onChange={(event) => setFullName(event.target.value)} className={inputClassName} /></div><div><label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider mb-1.5">Teléfono / WhatsApp *</label><input id="booking-phone" name="tel" type="tel" autoComplete="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} className={inputClassName} /></div></div>
            <div><label htmlFor="booking-email" className="block text-xs font-semibold uppercase tracking-wider mb-1.5">Correo electrónico *</label><input id="booking-email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={inputClassName} /></div>
            <div><label htmlFor="booking-message" className="block text-xs font-semibold uppercase tracking-wider mb-1.5">Breve motivo de consulta</label><textarea id="booking-message" name="message" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} className={`${inputClassName} resize-none`} /></div>
            <div className="flex justify-between items-center pt-4"><button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A655C] dark:text-[#B7BEA3] hover:underline focus-visible:ring-2"><ChevronLeft className="w-4 h-4" aria-hidden="true" /><span>Volver</span></button><button type="submit" className={primaryButtonClassName}><span>Revisar en contacto</span><ChevronRight className="w-4 h-4" aria-hidden="true" /></button></div>
          </form>
        ) : null}
      </div>
    </div>
  );
};
