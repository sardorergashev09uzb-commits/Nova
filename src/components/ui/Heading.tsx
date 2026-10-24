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
    hero: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]',
    display: 'text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]',
    title: 'text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight',
    subhead: 'text-xl sm:text-2xl font-medium tracking-tight leading-snug',
  };

  const colorStyles = dark ? 'text-white' : 'text-studio-black';

  return (
    <Component className={`font-display ${sizeStyles[size]} ${colorStyles} ${className}`}>
      {children}
    </Component>
  );
};
