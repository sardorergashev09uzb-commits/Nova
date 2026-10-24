import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'cobalt' | 'orange' | 'dark' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const variantStyles = {
    neutral: 'bg-slate-100 text-slate-800 border-slate-200',
    cobalt: 'bg-cobalt-50 text-cobalt-700 border-cobalt-200',
    orange: 'bg-warmOrange-50 text-warmOrange-700 border-warmOrange-200',
    dark: 'bg-studio-black text-white border-studio-charcoal',
    outline: 'border border-slate-300 text-slate-700 bg-transparent',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium border uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
