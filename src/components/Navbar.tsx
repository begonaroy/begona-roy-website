import React, { useEffect, useRef, useState } from 'react';
import { NavigationTab } from '../types';
import { ROUTES } from '../routes';
import { CLINICAL_INFO } from '../data/content';
import { Logo } from './Logo';
import { Sun, Moon, Calendar, Menu, X, Phone, Heart } from 'lucide-react';
import { useGsapDynamicEntrance, useGsapPageEntrance } from '../hooks/useGsapAnimations';

interface NavbarProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGsapPageEntrance(headerRef);
  useGsapDynamicEntrance(headerRef, '[data-motion-mobile-menu]', mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavigationTab; label: string; badge?: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'psicologia', label: 'Psicología' },
    { id: 'pericardio', label: 'Pericardio' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#151B17]/90 backdrop-blur-md shadow-sm border-b border-[#2D3930]'
            : 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E2D9]'
          : isDark
          ? 'bg-[#151B17] border-b border-transparent'
          : 'bg-[#FBF9F5] border-b border-transparent'
      }`}
    >
      <div data-motion-hero className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo
            onClick={() => handleNavClick('inicio')}
            className="cursor-pointer"
          />

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={ROUTES[link.id]}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-[#F3EFE7] font-semibold bg-[#222C26]'
                        : 'text-[#222823] font-semibold bg-[#E8ECE9]'
                      : isDark
                      ? 'text-[#B7BEA3] hover:text-[#F3EFE7] hover:bg-[#1C2420]'
                      : 'text-[#5A655C] hover:text-[#222823] hover:bg-[#F3EFEA]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                        isDark ? 'bg-[#7C9682]' : 'bg-[#4A5D4E]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
              className={`p-2.5 rounded-full transition-colors duration-200 ${
                isDark
                  ? 'text-[#A7B39A] hover:text-[#F3EFE7] hover:bg-[#222C26]'
                  : 'text-[#5C7462] hover:text-[#222823] hover:bg-[#E8ECE9]'
              }`}
              title={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-300 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* CTA Button: Pedir Cita */}
            <button
              id="header-booking-cta"
              onClick={onOpenBooking}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] ${
                isDark
                  ? 'bg-[#7C9682] hover:bg-[#8EA694] text-[#171A17]'
                  : 'bg-[#4A5D4E] hover:bg-[#3D4C40] text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Pedir Cita</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDark
                  ? 'text-[#F3EFE7] hover:bg-[#222C26]'
                  : 'text-[#222823] hover:bg-[#E8ECE9]'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          data-motion-mobile-menu
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all duration-200 ${
            isDark
              ? 'bg-[#151B17] border-[#2D3930]'
              : 'bg-[#FBF9F5] border-[#E8E2D9]'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <a
                key={link.id}
                href={ROUTES[link.id]}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? isDark
                      ? 'bg-[#222C26] text-[#F3EFE7] font-semibold'
                      : 'bg-[#E8ECE9] text-[#222823] font-semibold'
                    : isDark
                    ? 'text-[#B7BEA3] hover:bg-[#1C2420]'
                    : 'text-[#5A655C] hover:bg-[#F3EFEA]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isDark ? 'bg-[#7C9682]' : 'bg-[#4A5D4E]'
                    }`}
                  />
                )}
              </a>
            );
          })}

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold uppercase tracking-wider shadow-sm ${
                isDark
                  ? 'bg-[#7C9682] text-[#171A17]'
                  : 'bg-[#4A5D4E] text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Reserva tu primera sesión</span>
            </button>

            <a
              href={`tel:${CLINICAL_INFO.phone}`}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium border transition-colors ${
                isDark
                  ? 'border-[#2D3930] text-[#B7BEA3] hover:bg-[#222C26]'
                  : 'border-[#D8D0C4] text-[#5A655C] hover:bg-[#F3EFEA]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#AA4664] dark:text-[#DDB5C1]" />
              <span>Llamar directamente ({CLINICAL_INFO.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
