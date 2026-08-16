import React, { useState, useEffect } from 'react';
import { NavigationTab, ServiceDetail } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { PsicologiaView } from './components/PsicologiaView';
import { PericardioView } from './components/PericardioView';
import { ContactoView } from './components/ContactoView';
import { BioModal } from './components/BioModal';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('inicio');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>(undefined);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceDetail | null>(null);
  const [privacyModalType, setPrivacyModalType] = useState<'privacidad' | 'aviso' | 'cookies' | null>(null);

  // Initialize Theme from localStorage or prefers-color-scheme
  useEffect(() => {
    const savedTheme = localStorage.getItem('begona_roy_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-[#FDFBF7]', 'text-[#24211F]');
      document.body.classList.add('bg-[#171A17]', 'text-[#F3EFE7]');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-[#FDFBF7]', 'text-[#24211F]');
      document.body.classList.remove('bg-[#171A17]', 'text-[#F3EFE7]');
    }
  }, []);

  const handleToggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('begona_roy_theme', newDark ? 'dark' : 'light');

    if (newDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-[#FDFBF7]', 'text-[#24211F]');
      document.body.classList.add('bg-[#171A17]', 'text-[#F3EFE7]');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-[#FDFBF7]', 'text-[#24211F]');
      document.body.classList.remove('bg-[#171A17]', 'text-[#F3EFE7]');
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setBookingInitialService(serviceId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="app-root"
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDark ? 'bg-[#171A17] text-[#F3EFE7]' : 'bg-[#FDFBF7] text-[#24211F]'
      }`}
    >
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'inicio' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenBio={() => setIsBioOpen(true)}
            onSelectServiceDetail={(svc) => setSelectedDetailService(svc)}
            isDark={isDark}
          />
        )}

        {currentTab === 'psicologia' && (
          <PsicologiaView
            onNavigate={handleNavigate}
            onOpenBooking={(svcId) => handleOpenBooking(svcId)}
            onSelectServiceDetail={(svc) => setSelectedDetailService(svc)}
            isDark={isDark}
          />
        )}

        {currentTab === 'pericardio' && (
          <PericardioView
            onNavigate={handleNavigate}
            onOpenBooking={(svcId) => handleOpenBooking(svcId)}
            isDark={isDark}
          />
        )}

        {currentTab === 'contacto' && (
          <ContactoView
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
            isDark={isDark}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        isDark={isDark}
        onOpenPrivacy={(type) => setPrivacyModalType(type)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        isDark={isDark}
        initialServiceId={bookingInitialService}
      />

      <BioModal
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        isDark={isDark}
        onOpenBooking={() => handleOpenBooking()}
      />

      <ServiceDetailModal
        service={selectedDetailService}
        isOpen={!!selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        isDark={isDark}
        onOpenBookingForService={(svcId) => handleOpenBooking(svcId)}
      />

      <PrivacyModal
        isOpen={!!privacyModalType}
        type={privacyModalType || 'privacidad'}
        onClose={() => setPrivacyModalType(null)}
        isDark={isDark}
      />
    </div>
  );
}
