import React, { useRef, useState } from 'react';
import { CLINICAL_INFO, FAQS_DATA } from '../data/content';
import { FAQItem, NavigationTab } from '../types';
import { useGsapDynamicEntrance, useGsapPageEntrance } from '../hooks/useGsapAnimations';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ChevronDown,
  Calendar,
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';

interface ContactoViewProps {
  onNavigate: (tab: NavigationTab) => void;
  isDark: boolean;
}

export const ContactoView: React.FC<ContactoViewProps> = ({
  onNavigate,
  isDark,
}) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modalityChoice, setModalityChoice] = useState('presencial');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formError, setFormError] = useState('');

  // FAQ State
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const viewRef = useRef<HTMLDivElement>(null);

  useGsapPageEntrance(viewRef);
  useGsapDynamicEntrance(viewRef, '[data-motion-faq-panel]', openFaqId);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setFormError('Completa los campos obligatorios y acepta la política de privacidad para abrir el correo.');
      e.currentTarget.reportValidity();
      return;
    }

    setFormError('');
    const modality = modalityChoice === 'presencial' ? 'Presencial en Zaragoza' : 'Online por videoconsulta';
    const body = [
      'Solicitud de cita desde begonaroy.com',
      '',
      `Nombre: ${name}`,
      `Correo de respuesta: ${email}`,
      `Modalidad: ${modality}`,
      '',
      'Mensaje:',
      message || 'Sin mensaje adicional.',
    ].join('\n');
    const subject = `Solicitud de cita — ${name}`;
    const gmailComposeUrl = new URL('https://mail.google.com/mail/');
    gmailComposeUrl.searchParams.set('view', 'cm');
    gmailComposeUrl.searchParams.set('fs', '1');
    gmailComposeUrl.searchParams.set('to', CLINICAL_INFO.email);
    gmailComposeUrl.searchParams.set('su', subject);
    gmailComposeUrl.searchParams.set('body', body);
    window.location.assign(gmailComposeUrl.toString());
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = faqCategory === 'todos' || faq.category === faqCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={viewRef} id="contacto-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HEADER */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div data-motion-hero className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E8E2D9] dark:border-[#2D3930] bg-[#FAF7F2] dark:bg-[#1C2420] text-[#4A5D4E] dark:text-[#A7B39A]">
            <Sparkles className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1]" />
            <span>ESTOY A TU LADO</span>
          </div>

          <h1 data-motion-hero className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            Contacto.
          </h1>

          <p data-motion-hero className="text-base text-[#5A655C] dark:text-[#B7BEA3] leading-relaxed">
            Si deseas resolver cualquier duda o solicitar tu primera sesión en Zaragoza o en modalidad online, estaré encantada de atenderte.
          </p>
        </div>
      </section>

      {/* 2. 2-COLUMN MAIN CONTACT SECTION (Form + Direct Info) */}
      <section data-motion-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-motion-group className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-10 rounded-3xl border shadow-lg transition-all ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              <h2 className="font-serif text-2xl font-medium mb-1 text-[#222823] dark:text-[#F3EFE7]">
                Escríbeme un mensaje
              </h2>
              <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mb-6">
                Estoy aquí para escucharte, pide cita y nos conocemos.
              </p>

              <form id="contact-form" noValidate onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#222823] dark:text-[#F3EFE7]">
                        Nombre completo *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                          isDark
                            ? 'bg-[#151B17] border-[#2D3930] focus:ring-[#7C9682] text-white'
                            : 'bg-[#FBF9F5] border-[#E8E2D9] focus:ring-[#4A5D4E] text-[#222823]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#222823] dark:text-[#F3EFE7]">
                        Correo electrónico *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="tuemail@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                          isDark
                            ? 'bg-[#151B17] border-[#2D3930] focus:ring-[#7C9682] text-white'
                            : 'bg-[#FBF9F5] border-[#E8E2D9] focus:ring-[#4A5D4E] text-[#222823]'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#222823] dark:text-[#F3EFE7]">
                      Modalidad de preferencia
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs transition-colors ${
                          modalityChoice === 'presencial'
                            ? isDark
                              ? 'bg-[#222C26] border-[#7C9682] text-[#F3EFE7] font-semibold'
                              : 'bg-[#E8ECE9] border-[#4A5D4E] text-[#222823] font-semibold'
                            : isDark
                            ? 'bg-[#151B17] border-[#2D3930] text-[#B7BEA3]'
                            : 'bg-[#FBF9F5] border-[#E8E2D9] text-[#5A655C]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="modality"
                          value="presencial"
                          checked={modalityChoice === 'presencial'}
                          onChange={() => setModalityChoice('presencial')}
                          className="text-[#4A5D4E] focus:ring-[#4A5D4E]"
                        />
                        <span>Presencial (Zaragoza)</span>
                      </label>

                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs transition-colors ${
                          modalityChoice === 'online'
                            ? isDark
                              ? 'bg-[#222C26] border-[#7C9682] text-[#F3EFE7] font-semibold'
                              : 'bg-[#E8ECE9] border-[#4A5D4E] text-[#222823] font-semibold'
                            : isDark
                            ? 'bg-[#151B17] border-[#2D3930] text-[#B7BEA3]'
                            : 'bg-[#FBF9F5] border-[#E8E2D9] text-[#5A655C]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="modality"
                          value="online"
                          checked={modalityChoice === 'online'}
                          onChange={() => setModalityChoice('online')}
                          className="text-[#4A5D4E] focus:ring-[#4A5D4E]"
                        />
                        <span>Online (Videollamada)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#222823] dark:text-[#F3EFE7]">
                      Mensaje *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Cuéntame en qué puedo ayudarte..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 resize-none ${
                        isDark
                          ? 'bg-[#151B17] border-[#2D3930] focus:ring-[#7C9682] text-white'
                          : 'bg-[#FBF9F5] border-[#E8E2D9] focus:ring-[#4A5D4E] text-[#222823]'
                      }`}
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      id="contact-privacy"
                      type="checkbox"
                      required
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-[#4A5D4E] focus:ring-[#4A5D4E]"
                    />
                    <label htmlFor="contact-privacy" className="text-xs text-[#5A655C] dark:text-[#B7BEA3]">
                      He leído y acepto la política de privacidad y el tratamiento confidencial de datos de salud conforme al RGPD y la Ley de Psicología Sanitaria.
                    </label>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        isDark
                          ? 'bg-[#7C9682] text-[#171A17] hover:bg-[#8EA694]'
                          : 'bg-[#4A5D4E] text-white hover:bg-[#3D4C40]'
                      }`}
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Enviar</span>
                    </button>

                    <a
                      href={CLINICAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/40 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Escribir por WhatsApp</span>
                    </a>
                  </div>
                  {formError && (
                    <p role="alert" className="text-xs font-medium text-[#AA4664] dark:text-[#DDB5C1]">
                      {formError}
                    </p>
                  )}
              </form>
            </div>
          </div>

          {/* Right Column: Direct Info & Zaragoza Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Details Box */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930]'
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              <h3 className="font-serif text-xl font-medium text-[#222823] dark:text-[#F3EFE7]">
                Información Directa
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#5A655C] dark:text-[#B7BEA3] block">
                      Teléfono y WhatsApp
                    </span>
                    <a
                      href={`tel:${CLINICAL_INFO.phone}`}
                      className="font-medium hover:text-[#AA4664] dark:hover:text-[#DDB5C1] transition-colors"
                    >
                      {CLINICAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#5A655C] dark:text-[#B7BEA3] block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${CLINICAL_INFO.email}`}
                      className="font-medium hover:text-[#AA4664] dark:hover:text-[#DDB5C1] transition-colors"
                    >
                      {CLINICAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#5A655C] dark:text-[#B7BEA3] block">
                      Consulta Presencial en Zaragoza
                    </span>
                    <p className="font-medium text-[#222823] dark:text-[#F3EFE7]">
                      {CLINICAL_INFO.location}
                    </p>
                    <p className="text-xs text-[#5A655C] dark:text-[#B7BEA3] mt-0.5">
                      Dirección completa facilitada al agendar la cita.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#5A655C] dark:text-[#B7BEA3] block">
                      Horario de Atención
                    </span>
                    <p className="font-medium text-[#222823] dark:text-[#F3EFE7]">
                      {CLINICAL_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Transport guide card */}
            <div
              className={`p-6 rounded-3xl border space-y-4 ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930]'
                  : 'bg-[#FAF7F2] border-[#E8E2D9]'
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
                  Cómo llegar a la consulta
                </h4>
                <MapPin className="w-4 h-4 text-[#AA4664] dark:text-[#DDB5C1]" />
              </div>

              <p className="text-xs leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
                La consulta presencial está en <strong>{CLINICAL_INFO.fullAddress}</strong>.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINICAL_INFO.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A5D4E] dark:text-[#A7B39A] hover:underline focus-visible:ring-2"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Ver la ubicación en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREGUNTAS FRECUENTES (FAQS) ACCORDION */}
      <section data-motion-reveal className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664] dark:text-[#DDB5C1]">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#222823] dark:text-[#F3EFE7]">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-[#5A655C] dark:text-[#B7BEA3]">
            Todo lo que necesitas saber antes de tu primera consulta.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#869288]" />
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes (ej: online, duración, tarifas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-xs sm:text-sm transition-colors outline-none focus:ring-2 ${
                isDark
                  ? 'bg-[#1C2420] border-[#2D3930] focus:ring-[#7C9682] text-white'
                  : 'bg-white border-[#E8E2D9] focus:ring-[#4A5D4E] text-[#222823]'
              }`}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'todos', label: 'Todas' },
              { id: 'general', label: 'General' },
              { id: 'psicologia', label: 'Psicología' },
              { id: 'pericardio', label: 'Pericardio' },
              { id: 'online', label: 'Online' },
              { id: 'tarifas', label: 'Tarifas y Pago' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFaqCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  faqCategory === cat.id
                    ? isDark
                      ? 'bg-[#7C9682] text-[#171A17] font-semibold'
                      : 'bg-[#4A5D4E] text-white font-semibold'
                    : isDark
                    ? 'bg-[#1C2420] text-[#B7BEA3] hover:text-[#F3EFE7]'
                    : 'bg-white text-[#5A655C] hover:text-[#222823] border border-[#E8E2D9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? isDark
                      ? 'bg-[#1C2420] border-[#7C9682]/50'
                      : 'bg-white border-[#4A5D4E]/40 shadow-sm'
                    : isDark
                    ? 'bg-[#151B17] border-[#2D3930] hover:border-[#2D3930]/80'
                    : 'bg-[#FAF7F2] border-[#E8E2D9] hover:border-[#D8D0C4]'
                }`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#222823] dark:text-[#F3EFE7]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#AA4664] dark:text-[#DDB5C1] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div data-motion-faq-panel className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3] border-t border-[#E8E2D9]/60 dark:border-[#2D3930]/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-xs text-[#5A655C] dark:text-[#B7BEA3]">
              No se encontraron preguntas para este término de búsqueda.
            </div>
          )}
        </div>
      </section>

      {/* 4. EMPIEZA HOY BOTTOM BANNER */}
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
              EMPIEZA HOY
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-sm leading-relaxed text-[#E6DFD3]">
              Agenda tu primera sesión o consulta lo que necesites sin ningún tipo de compromiso.
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A5D4E] hover:bg-[#FAF7F2] transition-colors shadow-lg active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Pedir Cita Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
