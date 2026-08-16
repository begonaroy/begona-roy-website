import React from 'react';
import { NavigationTab } from '../types';
import { CLINICAL_INFO } from '../data/content';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ArrowUp, Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  isDark: boolean;
  onOpenPrivacy: (type: 'privacidad' | 'aviso' | 'cookies') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  isDark,
  onOpenPrivacy,
  onOpenBooking,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#0E1310] border-[#222C26] text-[#A9B8AD]'
          : 'bg-[#F3EFEA] border-[#E8E2D9] text-[#5A655C]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Professional Credibility */}
          <div className="space-y-4">
            <Logo isDark={isDark} />
            <p className="text-sm leading-relaxed mt-2">
              Acompañamiento psicológico integrador y liberación celular del pericardio. Un espacio cálido, seguro y confidencial en Plaza Europa (Zaragoza) y en modalidad online.
            </p>
            <div
              className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                isDark
                  ? 'bg-[#151B17] border-[#2D3930] text-[#D1DAD2]'
                  : 'bg-[#FAF7F2] border-[#E8E2D9] text-[#4A5D4E]'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C28469] flex-shrink-0" />
                <span>Ejercicio Sanitario Colegiado</span>
              </div>
              <p className="text-[11px] leading-tight text-opacity-80">
                Col. Nº {CLINICAL_INFO.collegiateNumber}
              </p>
              <p className="text-[11px] leading-tight text-opacity-80">
                {CLINICAL_INFO.degree}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-[#F0F4F1]' : 'text-[#222823]'
              }`}
            >
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('inicio');
                    scrollToTop();
                  }}
                  className="hover:underline transition-colors hover:text-[#C28469]"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('psicologia');
                    scrollToTop();
                  }}
                  className="hover:underline transition-colors hover:text-[#C28469]"
                >
                  Psicología Sanitaria & Psicooncología
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pericardio');
                    scrollToTop();
                  }}
                  className="hover:underline transition-colors hover:text-[#C28469]"
                >
                  Liberación del Pericardio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    scrollToTop();
                  }}
                  className="hover:underline transition-colors hover:text-[#C28469]"
                >
                  Contacto & Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#C28469] font-medium hover:underline flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserva de Cita</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-[#F0F4F1]' : 'text-[#222823]'
              }`}
            >
              Contacto Directo
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C28469] flex-shrink-0 mt-0.5" />
                <span>{CLINICAL_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C28469] flex-shrink-0" />
                <a
                  href={`tel:${CLINICAL_INFO.phone}`}
                  className="hover:underline hover:text-[#C28469]"
                >
                  {CLINICAL_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C28469] flex-shrink-0" />
                <a
                  href={`mailto:${CLINICAL_INFO.email}`}
                  className="hover:underline hover:text-[#C28469]"
                >
                  {CLINICAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C28469] flex-shrink-0 mt-0.5" />
                <span>{CLINICAL_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Modalidades & Ubicación */}
          <div className="space-y-4">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-[#F0F4F1]' : 'text-[#222823]'
              }`}
            >
              Modalidades de Atención
            </h3>
            <div className="space-y-2 text-xs">
              <div
                className={`p-3 rounded-lg border ${
                  isDark ? 'bg-[#151B17] border-[#2D3930]' : 'bg-white border-[#E8E2D9]'
                }`}
              >
                <span className="font-semibold block text-[#4A5D4E] dark:text-[#7C9682]">
                  🌿 Consulta Presencial
                </span>
                <p className="text-[11px] mt-0.5">
                  Plaza Europa (50003 Zaragoza). Espacio accesible junto a la ribera del Ebro.
                </p>
              </div>
              <div
                className={`p-3 rounded-lg border ${
                  isDark ? 'bg-[#151B17] border-[#2D3930]' : 'bg-white border-[#E8E2D9]'
                }`}
              >
                <span className="font-semibold block text-[#4A5D4E] dark:text-[#7C9682]">
                  💻 Consulta Online
                </span>
                <p className="text-[11px] mt-0.5">
                  Videoconsulta segura desde cualquier lugar de España o el extranjero.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links and Back-to-Top */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDark ? 'border-[#222C26]' : 'border-[#E8E2D9]'
          }`}
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Begoña Roy. Todos los derechos reservados.</span>
            <button
              onClick={() => onOpenPrivacy('privacidad')}
              className="hover:underline hover:text-[#C28469]"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => onOpenPrivacy('aviso')}
              className="hover:underline hover:text-[#C28469]"
            >
              Aviso Legal
            </button>
            <button
              onClick={() => onOpenPrivacy('cookies')}
              className="hover:underline hover:text-[#C28469]"
            >
              Política de Cookies
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors ${
              isDark
                ? 'border-[#2D3930] hover:bg-[#151B17] text-[#D1DAD2]'
                : 'border-[#D8D0C4] hover:bg-white text-[#5A655C]'
            }`}
          >
            <span>Arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
