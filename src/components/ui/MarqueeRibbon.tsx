import React from 'react';

interface MarqueeRibbonProps {
  items?: string[];
  speed?: 'normal' | 'fast';
  variant?: 'dark' | 'orange' | 'cobalt';
  direction?: 'left' | 'right';
  className?: string;
}

export const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({
  items = [
    'CREATIVE DIRECTION',
    'BESPOKE WEB ARCHITECTURE',
    'INTERACTIVE SOLUTION FINDER',
    'EDITORIAL TYPOGRAPHY',
    'CONVERSION ENGINEERING',
    'ZERO GENERIC TEMPLATES',
    'HIGH PERFORMANCE FRONTEND',
    'SUB-SECOND LOADING',
  ],
  variant = 'dark',
  direction = 'left',
  className = '',
}) => {
  const variantStyles = {
    dark: 'bg-studio-black text-white border-y border-studio-charcoal',
    orange: 'bg-warmOrange-600 text-white border-y border-warmOrange-700',
    cobalt: 'bg-cobalt-900 text-white border-y border-cobalt-800',
  };

  return (
    <div
      className={`py-3 sm:py-4 overflow-hidden relative select-none ${variantStyles[variant]} ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {/* Loop content twice for seamless infinite scrolling */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 shrink-0 font-mono text-xs sm:text-sm tracking-widest uppercase">
            <span className="font-bold">{text}</span>
            <span className="ml-4 sm:ml-6 text-warmOrange-500 font-sans text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
