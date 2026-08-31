import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'compact';
  isDark?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  isDark = false,
  className = '',
  onClick,
}) => {
  const slotSizeClass = variant === 'compact' ? 'h-9 sm:h-10' : 'h-11 sm:h-12';
  const imageSizeClass = variant === 'compact' ? 'h-12 sm:h-14' : 'h-14 sm:h-16';

  return (
    <div
      id="brand-logo-container"
      onClick={onClick}
      className={`flex ${slotSizeClass} items-center select-none transition-transform duration-200 hover:scale-[1.01] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <img
        src={isDark ? '/branding/logo-begona-roy-light.png' : '/branding/logo-begona-roy-h.png'}
        alt="Begoña Roy · Psicología Sanitaria"
        className={`${imageSizeClass} w-auto max-w-[20rem] object-contain object-left`}
        draggable={false}
      />
    </div>
  );
};
