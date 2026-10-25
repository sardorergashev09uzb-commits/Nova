import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
  onOpenBrief?: () => void;
  onOpenFinder?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenBrief,
  onOpenFinder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Xizmatlar', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Solution Finder', id: 'solution-finder', isSpecial: true },
    { label: 'Brief', id: 'brief' },
    { label: 'Jarayon', id: 'process' },
  ];

  const handleLinkClick = (id: string, isSpecial?: boolean) => {
    setMobileMenuOpen(false);
    if (isSpecial && onOpenFinder) {
      onOpenFinder();
      return;
    }
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBriefClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBrief) {
      onOpenBrief();
    } else {
      const el = document.getElementById('brief');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-studio-bgLight/90 backdrop-blur-md border-b border-studio-border">
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand mark */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="group flex items-baseline gap-1 text-2xl font-display font-bold tracking-tight text-studio-black"
            >
              <span>NOVA</span>
              <span className="text-warmOrange-600 font-sans text-xs -translate-y-2 group-hover:scale-125 transition-transform duration-200">®</span>
            </a>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-studio-muted border-l border-studio-border pl-3">
              Digital Studio
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id, link.isSpecial)}
                className={`text-sm font-medium transition-colors hover:text-cobalt-600 tracking-tight cursor-pointer ${
                  link.isSpecial
                    ? 'text-cobalt-700 font-semibold flex items-center gap-1'
                    : 'text-studio-dark/80'
                }`}
              >
                {link.label}
                {link.isSpecial && <span className="w-1.5 h-1.5 rounded-full bg-warmOrange-500 animate-pulse"></span>}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              icon="arrow-up-right"
              onClick={handleBriefClick}
              className="hidden sm:inline-flex"
            >
              Brief to‘ldirish
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-studio-black hover:text-cobalt-600 focus:outline-none focus:ring-2 focus:ring-cobalt-600"
              aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-studio-border bg-white px-6 py-6 space-y-4 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id, link.isSpecial)}
                className="text-left text-base font-medium py-2 text-studio-dark hover:text-cobalt-600 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isSpecial ? (
                  <span className="text-xs font-mono uppercase bg-warmOrange-100 text-warmOrange-700 px-2 py-0.5 font-semibold">
                    Interaktiv
                  </span>
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-studio-muted" />
                )}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <Button
              variant="warm"
              size="md"
              icon="arrow-right"
              onClick={handleBriefClick}
              className="w-full justify-center"
            >
              Loyiha briefini boshlash
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
