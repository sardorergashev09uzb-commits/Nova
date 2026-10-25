import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, X, ArrowUpRight, ArrowRight, Lock } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
  onOpenBrief?: () => void;
  onOpenFinder?: () => void;
  onOpenAdmin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenBrief,
  onOpenFinder,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Xizmatlar', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Solution Finder', id: 'solution-finder', isSpecial: true },
    { label: 'Brief (Ariza)', id: 'brief' },
    { label: 'Jarayon', id: 'process' },
  ];

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
    <>
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
                      ? 'text-cobalt-700 font-semibold flex items-center gap-1.5'
                      : 'text-studio-dark/80'
                  }`}
                >
                  {link.label}
                  {link.isSpecial && (
                    <span className="w-1.5 h-1.5 rounded-full bg-warmOrange-500 animate-pulse"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenAdmin}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-studio-black border border-slate-200 hover:border-slate-400 bg-white transition-colors cursor-pointer"
                title="Studiya boshqaruv paneli"
              >
                <Lock className="w-3 h-3 text-warmOrange-600" />
                <span>Admin</span>
              </button>

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
                className="md:hidden p-2 text-studio-black hover:text-cobalt-600 focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors"
                aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer & Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-start">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-studio-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative z-50 bg-white border-b-2 border-studio-black px-6 pt-24 pb-8 space-y-6 shadow-2xl animate-in slide-in-from-top-4 duration-250">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono text-studio-muted">
              <span>NAVIGATSIYA</span>
              <span>NOVA® STUDIO</span>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id, link.isSpecial)}
                  className="text-left text-lg font-display font-bold py-3 text-studio-black hover:text-cobalt-600 border-b border-slate-100 flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                  {link.isSpecial ? (
                    <span className="text-xs font-mono uppercase bg-warmOrange-100 text-warmOrange-700 px-2.5 py-1 font-semibold">
                      Interaktiv
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-studio-muted" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <Button
                variant="warm"
                size="md"
                icon="arrow-right"
                onClick={handleBriefClick}
                className="w-full justify-center"
              >
                Loyiha briefini boshlash
              </Button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAdmin) onOpenAdmin();
                }}
                className="w-full text-center py-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-studio-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-warmOrange-600" />
                <span>Studiya Admin Paneli (Boshqaruv)</span>
              </button>
              <div className="text-center text-[11px] font-mono text-studio-muted">
                Toshkent · Masofaviy studiya hamkorligi
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
