import React, { useState } from 'react';
import { CLINICAL_INFO, FAQS_DATA } from '../data/content';
import { FAQItem, NavigationTab } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  Calendar,
  Sparkles,
  Search,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ContactoViewProps {
  onOpenBooking: () => void;
  onNavigate: (tab: NavigationTab) => void;
  isDark: boolean;
}

export const ContactoView: React.FC<ContactoViewProps> = ({
  onOpenBooking,
  onNavigate,
  isDark,
}) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceChoice, setServiceChoice] = useState('psicologia-general');
  const [modalityChoice, setModalityChoice] = useState('presencial');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // FAQ State
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !privacyAccepted) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 900);
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = faqCategory === 'todos' || faq.category === faqCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="contacto-view" className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HEADER */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#E6DFD3] dark:border-[#667052] bg-[#FDFBF7] dark:bg-[#21251F] text-[#4A5D4E] dark:text-[#A7B39A]">
            <Sparkles className="w-3.5 h-3.5 text-[#AA4664]" />
            <span>ESTOY A TU LADO</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            Contacto.
          </h1>

          <p className="text-base text-[#667052] dark:text-[#B7BEA3] leading-relaxed">
            Si deseas resolver cualquier duda o solicitar tu primera sesión en Espacio K alma, Zaragoza, o en modalidad online, estaré encantada de atenderte.
          </p>
        </div>
      </section>

      {/* 2. 2-COLUMN MAIN CONTACT SECTION (Form + Direct Info) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-10 rounded-3xl border shadow-lg transition-all ${
                isDark
                  ? 'bg-[#21251F] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              <h2 className="font-serif text-2xl font-medium mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                Escríbeme un mensaje
              </h2>
              <p className="text-xs text-[#667052] dark:text-[#B7BEA3] mb-6">
                Responderé con total confidencialidad en un plazo máximo de 24 horas laborables.
              </p>

              {isSent ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                    Mensaje enviado correctamente
                  </h3>
                  <p className="text-sm text-[#667052] dark:text-[#B7BEA3] max-w-md mx-auto">
                    Gracias por tu confianza, <strong>{name}</strong>. He recibido tu consulta y me pondré en contacto contigo muy pronto.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                      setPrivacyAccepted(false);
                    }}
                    className={`mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors ${
                      isDark
                        ? 'border-[#667052] hover:bg-[#21251F]'
                        : 'border-[#E6DFD3] hover:bg-[#E6DFD3]'
                    }`}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                          isDark
                            ? 'bg-[#171A17] border-[#667052] focus:ring-[#A7B39A] text-[#FDFBF7]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tuemail@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                          isDark
                            ? 'bg-[#171A17] border-[#667052] focus:ring-[#A7B39A] text-[#FDFBF7]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                        Teléfono / WhatsApp (Opcional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+34 600 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                          isDark
                            ? 'bg-[#171A17] border-[#667052] focus:ring-[#A7B39A] text-[#FDFBF7]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                        Motivo principal de consulta
                      </label>
                      <select
                        value={serviceChoice}
                        onChange={(e) => setServiceChoice(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
                          isDark
                            ? 'bg-[#171A17] border-[#667052] focus:ring-[#A7B39A] text-[#FDFBF7]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
                        }`}
                      >
                        <option value="psicologia-general">Ansiedad y Estrés</option>
                        <option value="psicooncologia">Psicooncología (Cáncer)</option>
                        <option value="duelo-trauma">Proceso de Duelo y Pérdida</option>
                        <option value="liberacion-pericardio">Liberación del Pericardio</option>
                        <option value="otro">Otro motivo / Información general</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                      Modalidad de preferencia
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs transition-colors ${
                          modalityChoice === 'presencial'
                            ? isDark
                              ? 'bg-[#21251F] border-[#A7B39A] text-[#F3EFE7] font-semibold'
                              : 'bg-[#E6DFD3] border-[#4A5D4E] text-[#24211F] font-semibold'
                            : isDark
                            ? 'bg-[#171A17] border-[#667052] text-[#B7BEA3]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3] text-[#667052]'
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
                              ? 'bg-[#21251F] border-[#A7B39A] text-[#F3EFE7] font-semibold'
                              : 'bg-[#E6DFD3] border-[#4A5D4E] text-[#24211F] font-semibold'
                            : isDark
                            ? 'bg-[#171A17] border-[#667052] text-[#B7BEA3]'
                            : 'bg-[#FDFBF7] border-[#E6DFD3] text-[#667052]'
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
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-[#24211F] dark:text-[#F3EFE7]">
                      Mensaje *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Cuéntame en qué puedo ayudarte..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 resize-none ${
                        isDark
                          ? 'bg-[#171A17] border-[#667052] focus:ring-[#A7B39A] text-[#FDFBF7]'
                          : 'bg-[#FDFBF7] border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
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
                    <label htmlFor="contact-privacy" className="text-xs text-[#667052] dark:text-[#B7BEA3]">
                      He leído y acepto la política de privacidad y el tratamiento confidencial de datos de salud conforme al RGPD y la Ley de Psicología Sanitaria.
                    </label>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSending || !privacyAccepted || !name || !email}
                      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 ${
                        isDark
                          ? 'bg-[#A7B39A] text-[#171A17] hover:bg-[#B7BEA3]'
                          : 'bg-[#4A5D4E] text-[#FDFBF7] hover:bg-[#AA4664]'
                      }`}
                    >
                      {isSending ? (
                        <span>Enviando mensaje...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Mensaje</span>
                        </>
                      )}
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
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info & Zaragoza Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Details Box */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                isDark
                  ? 'bg-[#21251F] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              <h3 className="font-serif text-xl font-medium text-[#24211F] dark:text-[#F3EFE7]">
                Información Directa
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#667052] dark:text-[#B7BEA3] block">
                      Teléfono y WhatsApp
                    </span>
                    <a
                      href={`tel:${CLINICAL_INFO.phone}`}
                      className="font-medium hover:text-[#AA4664] transition-colors"
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
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#667052] dark:text-[#B7BEA3] block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${CLINICAL_INFO.email}`}
                      className="font-medium hover:text-[#AA4664] transition-colors"
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
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#667052] dark:text-[#B7BEA3] block">
                      Consulta Presencial en Zaragoza
                    </span>
                    <p className="font-medium text-[#24211F] dark:text-[#F3EFE7]">
                      {CLINICAL_INFO.location}
                    </p>
                    <p className="text-xs text-[#667052] dark:text-[#B7BEA3] mt-0.5">
                      Espacio K alma · C. del Río Huerva, 21 · 50006 Zaragoza
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4A5D4E]/10 text-[#4A5D4E] dark:text-[#A7B39A] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#667052] dark:text-[#B7BEA3] block">
                      Horario de Atención
                    </span>
                    <p className="font-medium text-[#24211F] dark:text-[#F3EFE7]">
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
                  ? 'bg-[#171A17] border-[#667052]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3]'
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-medium text-[#24211F] dark:text-[#F3EFE7]">
                  Cómo llegar a la consulta
                </h4>
                <MapPin className="w-4 h-4 text-[#AA4664]" />
              </div>

              <p className="text-xs leading-relaxed text-[#667052] dark:text-[#B7BEA3]">
                Ubicada en Espacio K alma, en C. del Río Huerva, 21, en la zona de Ruiseñores de Zaragoza, con buenas conexiones:
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#AA4664]" />
                  <span><strong>Autobús urbano:</strong> Paradas cercanas en la zona de Paseo de Sagasta y Ruiseñores.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#AA4664]" />
                  <span><strong>Tranvía de Zaragoza:</strong> Conexión próxima desde las paradas de la zona de Gran Vía.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#AA4664]" />
                  <span><strong>Aparcamiento:</strong> Disponible en las calles y aparcamientos públicos del entorno.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREGUNTAS FRECUENTES (FAQS) ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AA4664]">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#24211F] dark:text-[#F3EFE7]">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-[#667052] dark:text-[#B7BEA3]">
            Todo lo que necesitas saber antes de tu primera consulta.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#8F9779]" />
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes (ej: online, duración, tarifas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-xs sm:text-sm transition-colors outline-none focus:ring-2 ${
                isDark
                  ? 'bg-[#21251F] border-[#667052] focus:ring-[#A7B39A] text-[#FDFBF7]'
                  : 'bg-[#FDFBF7] border-[#E6DFD3] focus:ring-[#4A5D4E] text-[#24211F]'
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
                      ? 'bg-[#A7B39A] text-[#171A17] font-semibold'
                      : 'bg-[#4A5D4E] text-[#FDFBF7] font-semibold'
                    : isDark
                    ? 'bg-[#21251F] text-[#B7BEA3] hover:text-[#F3EFE7]'
                    : 'bg-[#FDFBF7] text-[#667052] hover:text-[#24211F] border border-[#E6DFD3]'
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
                      ? 'bg-[#21251F] border-[#A7B39A]/50'
                      : 'bg-[#FDFBF7] border-[#4A5D4E]/40 shadow-sm'
                    : isDark
                    ? 'bg-[#171A17] border-[#667052] hover:border-[#667052]/80'
                    : 'bg-[#FDFBF7] border-[#E6DFD3] hover:border-[#E6DFD3]'
                }`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#24211F] dark:text-[#F3EFE7]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#AA4664] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-[#667052] dark:text-[#B7BEA3] border-t border-[#E6DFD3]/60 dark:border-[#667052]/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-xs text-[#667052] dark:text-[#B7BEA3]">
              No se encontraron preguntas para este término de búsqueda.
            </div>
          )}
        </div>
      </section>

      {/* 4. EMPIEZA HOY BOTTOM BANNER */}
      <section className="max-w-4xl mx-auto px-4">
        <div
          className={`p-10 sm:p-14 rounded-3xl border text-center shadow-xl ${
            isDark
              ? 'bg-gradient-to-br from-[#21251F] to-[#171A17] border-[#A7B39A]/40 text-[#F3EFE7]'
              : 'bg-gradient-to-br from-[#4A5D4E] to-[#21251F] border-[#4A5D4E] text-[#FDFBF7]'
          }`}
        >
          <div className="space-y-4 max-w-lg mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D8659B]">
              EMPIEZA HOY
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-sm leading-relaxed text-[#E6DFD3]">
              Agenda tu primera sesión o consulta lo que necesites sin ningún tipo de compromiso.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDFBF7] text-[#4A5D4E] hover:bg-[#FDFBF7] transition-colors shadow-lg active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita Ahora</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
