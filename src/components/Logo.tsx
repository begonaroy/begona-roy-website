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
  return (
    <div
      id="brand-logo-container"
      onClick={onClick}
      className={`flex items-center gap-3.5 select-none transition-transform duration-200 hover:scale-[1.01] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Emblem SVG: Organic leaf / yin-yang botanical symbol */}
      <div className="relative flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full p-0.5 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="currentColor"
            strokeWidth="3"
            className={isDark ? 'text-[#A7B39A]' : 'text-[#4A5D4E]'}
          />

          {/* Organic gentle yin-yang leaf curve */}
          <path
            d="M50 3
               C65 3, 85 18, 85 45
               C85 68, 68 85, 50 97
               C50 97, 60 70, 50 50
               C40 30, 50 3, 50 3Z"
            fill="currentColor"
            className={isDark ? 'text-[#A7B39A]' : 'text-[#4A5D4E]'}
          />

          {/* Complementary inner drop/leaf */}
          <path
            d="M50 97
               C35 97, 15 82, 15 55
               C15 32, 32 15, 50 3
               C50 3, 40 30, 50 50
               C60 70, 50 97, 50 97Z"
            fill="currentColor"
            fillOpacity="0.25"
            className={isDark ? 'text-[#A7B39A]' : 'text-[#4A5D4E]'}
          />

          {/* Center heart / seed focal point */}
          <circle
            cx="50"
            cy="50"
            r="4.5"
            fill="currentColor"
            className={isDark ? 'text-[#D8659B]' : 'text-[#AA4664]'}
          />
        </svg>
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif tracking-tight font-medium leading-none text-xl md:text-2xl ${
              isDark ? 'text-[#F3EFE7]' : 'text-[#24211F]'
            }`}
          >
            Begoña Roy
          </span>
          <span
            className={`text-[10px] md:text-xs tracking-[0.18em] uppercase font-sans font-medium mt-1 ${
              isDark ? 'text-[#B7BEA3]' : 'text-[#667052]'
            }`}
          >
            Psicología Sanitaria
          </span>
        </div>
      )}
    </div>
  );
};
