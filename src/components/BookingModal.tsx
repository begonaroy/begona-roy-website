import React, { useState } from 'react';
import { CLINICAL_INFO, SERVICES_DATA } from '../data/content';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Video,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  isDark,
  initialServiceId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || 'ansiedad-estres'
  );
  const [selectedModality, setSelectedModality] = useState<'presencial' | 'online'>(
    'presencial'
  );
  const [selectedDate, setSelectedDate] = useState<string>('2025-05-12');
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const servicesOptions = [
    {
      id: 'ansiedad-estres',
      title: 'Ansiedad / Estrés',
      duration: '50-60 min',
      badge: 'Presencial / Online'
    },
    {
      id: 'tristeza-depresion',
      title: 'Tristeza / Depresión',
      duration: '50-60 min',
      badge: 'Presencial / Online'
    },
    {
      id: 'duelo',
      title: 'Duelo (Pérdidas y Rupturas)',
      duration: '50-60 min',
      badge: 'Presencial / Online'
    },
    {
      id: 'psicooncologia',
      title: 'Psicooncología (Cáncer y Familiares)',
      duration: '50-60 min',
      badge: 'Especialidad Destacada'
    },
    {
      id: 'bloqueo-emocional-trauma',
      title: 'Bloqueo Emocional y Trauma (EMDR)',
      duration: '50-60 min',
      badge: 'Presencial / Online'
    },
    {
      id: 'trastornos-psicosomaticos',
      title: 'Trastornos Psicosomáticos',
      duration: '50-60 min',
      badge: 'Mente y Cuerpo'
    },
    {
      id: 'despertar-espiritual',
      title: 'Síntomas del Despertar Espiritual',
      duration: '50-60 min',
      badge: 'Consciencia / PAS'
    },
    {
      id: 'liberacion-pericardio',
      title: 'Liberación del Pericardio (Terapia Somática)',
      duration: '60-75 min',
      badge: 'Solo Presencial en Zaragoza'
    },
    {
      id: 'valoracion-inicial',
      title: 'Primera Sesión de Valoración y Escucha',
      duration: '50-60 min',
      badge: 'Recomendada'
    }
  ];

  const timeSlots = [
    '09:30', '11:00', '12:30', '16:00', '17:30', '19:00'
  ];

  const upcomingDates = [
    { dayName: 'Lun', dayNumber: '12', fullDate: '2025-05-12', month: 'Mayo' },
    { dayName: 'Mar', dayNumber: '13', fullDate: '2025-05-13', month: 'Mayo' },
    { dayName: 'Mié', dayNumber: '14', fullDate: '2025-05-14', month: 'Mayo' },
    { dayName: 'Jue', dayNumber: '15', fullDate: '2025-05-15', month: 'Mayo' },
    { dayName: 'Vie', dayNumber: '16', fullDate: '2025-05-16', month: 'Mayo' },
    { dayName: 'Lun', dayNumber: '19', fullDate: '2025-05-19', month: 'Mayo' },
  ];

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !privacyAccepted) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5); // Success step
    }, 800);
  };

  const getServiceTitle = (id: string) => {
    const found = servicesOptions.find((s) => s.id === id);
    return found ? found.title : 'Consulta de Psicología';
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl transition-all max-h-[90vh] overflow-y-auto ${
          isDark
            ? 'bg-[#171A17] border border-[#667052] text-[#F3EFE7]'
            : 'bg-[#FBF9F5] border border-[#E6DFD3] text-[#24211F]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal de reserva"
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isDark
              ? 'bg-[#21251F] text-[#B7BEA3] hover:text-[#F3EFE7]'
              : 'bg-[#E6DFD3] text-[#667052] hover:text-[#24211F]'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar & Header */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#AA4664] dark:text-[#D8659B] mb-2">
              <span>Paso {step} de 4</span>
              <span>
                {step === 1 && 'Servicio'}
                {step === 2 && 'Modalidad'}
                {step === 3 && 'Fecha y Hora'}
                {step === 4 && 'Tus Datos'}
              </span>
            </div>

            {/* Step indicators */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s <= step
                      ? isDark
                        ? 'bg-[#A7B39A]'
                        : 'bg-[#4A5D4E]'
                      : isDark
                      ? 'bg-[#21251F]'
                      : 'bg-[#E6DFD3]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                ¿Qué tipo de acompañamiento necesitas?
              </h3>
              <p className="text-sm mt-1 text-[#667052] dark:text-[#B7BEA3]">
                Selecciona la opción que mejor se ajuste a tu momento vital.
              </p>
            </div>

            <div className="space-y-3">
              {servicesOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedService(opt.id);
                    // If pericardium, default to presencial
                    if (opt.id === 'liberacion-pericardio') {
                      setSelectedModality('presencial');
                    }
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    selectedService === opt.id
                      ? isDark
                        ? 'bg-[#21251F] border-[#A7B39A] ring-1 ring-[#A7B39A]'
                        : 'bg-[#E6DFD3] border-[#4A5D4E] ring-1 ring-[#4A5D4E]'
                      : isDark
                      ? 'bg-[#21251F] border-[#667052] hover:border-[#A7B39A]/50'
                      : 'bg-white border-[#E6DFD3] hover:border-[#4A5D4E]/40'
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] mr-2">
                      {opt.badge}
                    </span>
                    <h4 className="font-medium text-sm sm:text-base text-[#24211F] dark:text-[#F3EFE7] mt-1">
                      {opt.title}
                    </h4>
                    <span className="text-xs text-[#667052] dark:text-[#B7BEA3]">
                      Duración: {opt.duration}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      selectedService === opt.id
                        ? isDark
                          ? 'bg-[#A7B39A] border-[#A7B39A]'
                          : 'bg-[#4A5D4E] border-[#4A5D4E]'
                        : 'border-gray-400'
                    }`}
                  >
                    {selectedService === opt.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isDark
                    ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#AA4664] dark:hover:bg-[#D8659B]'
                }`}
              >
                <span>Continuar</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Modality */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                Elige la modalidad de tu sesión
              </h3>
              <p className="text-sm mt-1 text-[#667052] dark:text-[#B7BEA3]">
                Ambas modalidades ofrecen la misma cercanía, profesionalidad y rigor sanitario.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Presencial */}
              <button
                type="button"
                onClick={() => setSelectedModality('presencial')}
                className={`p-6 rounded-2xl border text-left transition-all relative ${
                  selectedModality === 'presencial'
                    ? isDark
                      ? 'bg-[#21251F] border-[#A7B39A] ring-1 ring-[#A7B39A]'
                      : 'bg-[#E6DFD3] border-[#4A5D4E] ring-1 ring-[#4A5D4E]'
                    : isDark
                    ? 'bg-[#21251F] border-[#667052] hover:border-[#A7B39A]/50'
                    : 'bg-white border-[#E6DFD3] hover:border-[#4A5D4E]/40'
                }`}
              >
                <div className="p-3 rounded-xl bg-[#4A5D4E]/10 w-fit mb-4 text-[#4A5D4E] dark:text-[#A7B39A]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-medium">
                  Terapia Presencial
                </h4>
                <p className="text-xs text-[#AA4664] dark:text-[#D8659B] font-medium mt-1">
                  {CLINICAL_INFO.location}
                </p>
                <p className="text-xs mt-3 leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                  Espacio acogedor y silencioso para trabajar cara a cara en un ambiente cuidado y sereno.
                </p>
              </button>

              {/* Online */}
              <button
                type="button"
                disabled={selectedService === 'liberacion-pericardio'}
                onClick={() => setSelectedModality('online')}
                className={`p-6 rounded-2xl border text-left transition-all relative ${
                  selectedService === 'liberacion-pericardio'
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-[#21251F] border-gray-300'
                    : selectedModality === 'online'
                    ? isDark
                      ? 'bg-[#21251F] border-[#A7B39A] ring-1 ring-[#A7B39A]'
                      : 'bg-[#E6DFD3] border-[#4A5D4E] ring-1 ring-[#4A5D4E]'
                    : isDark
                    ? 'bg-[#21251F] border-[#667052] hover:border-[#A7B39A]/50'
                    : 'bg-white border-[#E6DFD3] hover:border-[#4A5D4E]/40'
                }`}
              >
                <div className="p-3 rounded-xl bg-[#4A5D4E]/10 w-fit mb-4 text-[#4A5D4E] dark:text-[#A7B39A]">
                  <Video className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-medium">
                  Terapia Online
                </h4>
                <p className="text-xs text-[#AA4664] dark:text-[#D8659B] font-medium mt-1">
                  Videoconsulta Segura y Confidencial
                </p>
                <p className="text-xs mt-3 leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                  Realiza la sesión desde la comodidad de tu hogar, sin desplazamientos ni tiempos de espera.
                </p>
                {selectedService === 'liberacion-pericardio' && (
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-2 font-medium">
                    * La terapia de pericardio es exclusivamente presencial.
                  </p>
                )}
              </button>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#667052] dark:text-[#B7BEA3] hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isDark
                    ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#AA4664] dark:hover:bg-[#D8659B]'
                }`}
              >
                <span>Elegir Horario</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Date and Time */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                Selecciona fecha y hora preferida
              </h3>
              <p className="text-sm mt-1 text-[#667052] dark:text-[#B7BEA3]">
                Te confirmaremos la disponibilidad exacta por WhatsApp o correo electrónico.
              </p>
            </div>

            {/* Date Picker row */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#667052] dark:text-[#B7BEA3]">
                Día de la semana
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {upcomingDates.map((item) => {
                  const isSelected = selectedDate === item.fullDate;
                  return (
                    <button
                      key={item.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(item.fullDate)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? isDark
                            ? 'bg-[#A7B39A] text-[#171A17] border-[#A7B39A]'
                            : 'bg-[#4A5D4E] text-white border-[#4A5D4E]'
                          : isDark
                          ? 'bg-[#21251F] border-[#667052] hover:bg-[#21251F]'
                          : 'bg-white border-[#E6DFD3] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <span className="text-[11px] block font-medium opacity-80">
                        {item.dayName}
                      </span>
                      <span className="text-lg font-bold block my-0.5">
                        {item.dayNumber}
                      </span>
                      <span className="text-[10px] block opacity-70">
                        {item.month}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#667052] dark:text-[#B7BEA3]">
                Franja Horaria Disponible
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                        isSelected
                          ? isDark
                            ? 'bg-[#A7B39A] text-[#171A17] border-[#A7B39A]'
                            : 'bg-[#4A5D4E] text-white border-[#4A5D4E]'
                          : isDark
                          ? 'bg-[#21251F] border-[#667052] hover:bg-[#21251F]'
                          : 'bg-white border-[#E6DFD3] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      {slot} h
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#667052] dark:text-[#B7BEA3] hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(4)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isDark
                    ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#AA4664] dark:hover:bg-[#D8659B]'
                }`}
              >
                <span>Tus Datos de Contacto</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact info & confirm */}
        {step === 4 && (
          <form onSubmit={handleSubmitBooking} className="space-y-5">
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                Completa tus datos
              </h3>
              <p className="text-sm mt-1 text-[#667052] dark:text-[#B7BEA3]">
                Trataremos tus datos con absoluta confidencialidad sanitaria.
              </p>
            </div>

            {/* Summary pill */}
            <div
              className={`p-3.5 rounded-xl border text-xs flex flex-wrap items-center justify-between gap-2 ${
                isDark
                  ? 'bg-[#21251F] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              <div>
                <span className="font-semibold block text-[#4A5D4E] dark:text-[#A7B39A]">
                  {getServiceTitle(selectedService)}
                </span>
                <span className="opacity-80">
                  {selectedModality === 'presencial'
                    ? 'Presencial en Zaragoza (Plaza Europa)'
                    : 'Online por Videoconsulta'}{' '}
                  · {selectedDate} a las {selectedTime} h
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[#AA4664] dark:text-[#D8659B] font-medium hover:underline text-[11px]"
              >
                Cambiar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellidos"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-[#21251F] border-[#667052] focus:ring-[#A7B39A] text-white'
                      : 'bg-white border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+34 600 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-[#21251F] border-[#667052] focus:ring-[#A7B39A] text-white'
                      : 'bg-white border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                Correo Electrónico *
              </label>
              <input
                type="email"
                required
                placeholder="tuemail@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-[#21251F] border-[#667052] focus:ring-[#A7B39A] text-white'
                    : 'bg-white border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                Breve motivo de consulta (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Cuéntame brevemente qué te gustaría abordar..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 resize-none ${
                  isDark
                    ? 'bg-[#21251F] border-[#667052] focus:ring-[#A7B39A] text-white'
                    : 'bg-white border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                }`}
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="booking-privacy"
                type="checkbox"
                required
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-[#4A5D4E] focus:ring-[#4A5D4E]"
              />
              <label htmlFor="booking-privacy" className="text-xs text-[#667052] dark:text-[#B7BEA3]">
                He leído y acepto la política de privacidad y el tratamiento confidencial de datos de salud conforme al RGPD y la Ley de Psicología Sanitaria.
              </label>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#667052] dark:text-[#B7BEA3] hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting || !privacyAccepted || !fullName || !email || !phone}
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-50 ${
                  isDark
                    ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                    : 'bg-[#4A5D4E] text-white hover:bg-[#AA4664] dark:hover:bg-[#D8659B]'
                }`}
              >
                {isSubmitting ? (
                  <span>Procesando...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirmar Solicitud de Cita</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 5: Success Screen */}
        {step === 5 && (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="text-sm max-w-md mx-auto text-[#667052] dark:text-[#B7BEA3] leading-relaxed">
                Gracias, <strong className="text-[#24211F] dark:text-[#F3EFE7]">{fullName}</strong>. Begoña revisará tu solicitud para el{' '}
                <strong className="text-[#24211F] dark:text-[#F3EFE7]">{selectedDate}</strong> a las{' '}
                <strong className="text-[#24211F] dark:text-[#F3EFE7]">{selectedTime} h</strong> y te contactará en breve vía WhatsApp o correo electrónico para confirmar la cita y enviarte las indicaciones.
              </p>
            </div>

            {/* Direct WhatsApp shortcut button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/34622458912?text=Hola%20Bego%C3%B1a,%20acabo%20de%20solicitar%20cita%20a%20nombre%20de%20${encodeURIComponent(
                  fullName
                )}%20para%20el%20d%C3%ADa%20${selectedDate}%20a%20las%20${selectedTime}h.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar aviso rápido por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  isDark
                    ? 'border-[#667052] hover:bg-[#21251F]'
                    : 'border-[#E6DFD3] hover:bg-[#FDFBF7]'
                }`}
              >
                Finalizar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
