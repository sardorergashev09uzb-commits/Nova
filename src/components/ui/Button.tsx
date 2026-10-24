import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warm';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-up-right' | 'arrow-right' | 'none';
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  className = '',
  asLink = false,
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-tight';

  const variantStyles = {
    primary:
      'bg-cobalt-600 text-white hover:bg-cobalt-700 active:bg-cobalt-800 shadow-sm hover:shadow',
    secondary:
      'bg-studio-black text-white hover:bg-studio-charcoal active:bg-black',
    warm:
      'bg-warmOrange-600 text-white hover:bg-warmOrange-500 active:bg-warmOrange-700 shadow-sm',
    outline:
      'border border-studio-black text-studio-black bg-transparent hover:bg-studio-black hover:text-white',
    ghost:
      'text-studio-black hover:text-cobalt-600 bg-transparent hover:bg-studio-bgLight/80',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-3 gap-2',
    lg: 'text-base px-7 py-4 gap-2.5 font-semibold',
  };

  const renderIcon = () => {
    if (icon === 'arrow-up-right') {
      return <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    }
    if (icon === 'arrow-right') {
      return <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />;
    }
    return null;
  };

  const combinedClasses = `group rounded-none ${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClasses}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
