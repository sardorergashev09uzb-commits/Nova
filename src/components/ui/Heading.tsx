import React from 'react';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'hero' | 'display' | 'title' | 'subhead';
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'display',
  children,
  className = '',
  dark = false,
}) => {
  const sizeStyles = {
    hero: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.0] break-words',
    display: 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] break-words',
    title: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight break-words',
    subhead: 'text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-snug break-words',
  };

  const colorStyles = dark ? 'text-white' : 'text-studio-black';

  return (
    <Component className={`font-display ${sizeStyles[size]} ${colorStyles} ${className}`}>
      {children}
    </Component>
  );
};
