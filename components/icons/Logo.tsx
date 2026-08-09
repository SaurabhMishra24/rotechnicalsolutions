import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md'
}) => {
  const dimensions = {
    sm: { icon: 32, text: 'text-lg', subtext: 'text-[9px]' },
    md: { icon: 42, text: 'text-xl', subtext: 'text-[10px]' },
    lg: { icon: 54, text: 'text-2xl', subtext: 'text-[11px]' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG: Shield + Water Drop + Dynamic Waves */}
      <div className="relative flex items-center justify-center transition-transform hover:scale-105 duration-300">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#0B1329" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Shield Outer Path */}
          <path
            d="M50 5 L88 20 V48 C88 72 70 90 50 96 C30 90 12 72 12 48 V20 L50 5 Z"
            fill="url(#shieldGrad)"
            stroke="url(#accentGlow)"
            strokeWidth="3"
          />

          {/* Water Drop Path inside Shield */}
          <path
            d="M50 24 C50 24 33 46 33 60 C33 69.38 40.62 77 50 77 C59.38 77 67 69.38 67 60 C67 46 50 24 50 24 Z"
            fill="url(#dropGrad)"
          />

          {/* Inner Highlight Water Reflection Curve */}
          <path
            d="M44 48 C40 54 40 60 43 65"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Service Gear / Badge Arc */}
          <circle cx="50" cy="60" r="8" fill="#FFFFFF" opacity="0.95" />
          
          {/* Bold RO Text inside Drop */}
          <text
            x="50"
            y="64"
            fill="#0B1329"
            fontSize="10"
            fontWeight="900"
            fontFamily="Poppins, sans-serif"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            RO
          </text>
        </svg>

        {/* Outer Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md pointer-events-none -z-10" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className={`${dimensions.text} font-extrabold tracking-tight text-slate-900 dark:text-white font-poppins`}>
              RO
            </span>
            <span className={`${dimensions.text} font-bold text-cyan-600 dark:text-cyan-400 font-poppins`}>
              TECHNICAL
            </span>
          </div>
          <span className={`${dimensions.subtext} font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-inter mt-0.5`}>
            SOLUTIONS • 20+ YRS EXCELLENCE
          </span>
        </div>
      )}
    </div>
  );
};
