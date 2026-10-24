import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  accent?: 'cobalt' | 'orange' | 'muted';
  className?: string;
  number?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  accent = 'cobalt',
  className = '',
  number,
}) => {
  const accentClasses = {
    cobalt: 'text-cobalt-600',
    orange: 'text-warmOrange-600',
    muted: 'text-studio-muted',
  };

  return (
    <div className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-semibold ${accentClasses[accent]} ${className}`}>
      {number && (
        <span className="inline-block px-1.5 py-0.5 text-[10px] bg-studio-muted/10 rounded-sm">
          {number}
        </span>
      )}
      <span className="inline-block w-4 h-[1px] bg-current opacity-40"></span>
      <span>{children}</span>
    </div>
  );
};
