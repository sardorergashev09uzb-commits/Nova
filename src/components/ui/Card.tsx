import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'outline' | 'cobalt';
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'light',
  className = '',
  hoverEffect = false,
}) => {
  const variantStyles = {
    light: 'bg-white border border-studio-border text-studio-dark',
    dark: 'bg-studio-cardDark border border-studio-borderDark text-white',
    outline: 'bg-transparent border border-studio-border text-studio-dark',
    cobalt: 'bg-cobalt-900 border border-cobalt-800 text-white',
  };

  const hoverClass = hoverEffect
    ? 'motion-elevate hover:border-cobalt-600'
    : '';

  return (
    <div className={`p-6 sm:p-8 relative ${variantStyles[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
