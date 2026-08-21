
import React from 'react';

type LogoProps = {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'contrast';
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ 
  showText = true, 
  size = 'md', 
  variant = 'default',
  className = '' 
}) => {
  const sizeConfig = {
    sm: {
      svg: 32,
      text: 'text-sm',
      subtext: 'text-[10px]',
      gap: 'gap-3'
    },
    md: {
      svg: 44,
      text: 'text-[16px]',
      subtext: 'text-[13px]',
      gap: 'gap-4'
    },
    lg: {
      svg: 64,
      text: 'text-2xl',
      subtext: 'text-lg',
      gap: 'gap-5'
    },
    xl: {
      svg: 120,
      text: 'text-4xl',
      subtext: 'text-2xl',
      gap: 'gap-8'
    }
  };

  const current = sizeConfig[size];

  const colors = variant === 'contrast' 
    ? {
        outerStroke: 'rgba(255,255,255,0.2)',
        innerStroke: '#FFFFFF',
        bg: 'rgba(255,255,255,0.1)',
        letter: '#FFFFFF',
        text: 'text-white',
        accent: 'text-seed-accent-green',
        separator: 'bg-white/10'
      }
    : {
        // Light mode colors matching Tailwind: seed-text-primary is #1B4332, seed-accent-green is #52B788
        outerStroke: 'rgba(27, 67, 50, 0.3)',
        innerStroke: '#1B4332',
        bg: 'rgba(27, 67, 50, 0.05)',
        letter: '#1B4332',
        text: 'text-seed-text-primary dark:text-seed-accent-green',
        accent: 'text-seed-text-primary/80 dark:text-seed-accent-green/80',
        separator: 'bg-seed-text-primary/10 dark:bg-white/10'
      };

  return (
    <div className={`flex items-center ${current.gap} ${className}`}>
      {/* Mark as SVG for perfect scaling and PNG export */}
      <svg 
        width={current.svg} 
        height={current.svg} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer Square */}
        <rect x="2" y="2" width="96" height="96" rx="4" stroke={colors.outerStroke} strokeWidth="1" />
        
        {/* Inner Box */}
        <rect x="18" y="18" width="64" height="64" rx="2" fill={colors.bg} stroke={colors.innerStroke} strokeWidth="6" />
        
        {/* The "A" */}
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="central" 
          textAnchor="middle" 
          fill={colors.letter} 
          fontFamily="Playfair Display, serif" 
          fontWeight="900" 
          fontSize="50"
          dy="4"
        >
          A
        </text>
      </svg>

      {showText && (
        <>
          <div className={`h-8 w-px ${colors.separator} hidden sm:block`}></div>
          <div className="flex items-baseline gap-2 overflow-hidden">
            <span className={`${current.text} font-black ${colors.text} leading-tight uppercase tracking-[0.15em] font-sans truncate`}>
              A Solution Group
            </span>
            <span className={`${current.subtext} font-black ${colors.accent} leading-tight uppercase tracking-[0.15em] flex-shrink-0`}>
              CDC
            </span>
          </div>
        </>
      )}
    </div>
  );
};
