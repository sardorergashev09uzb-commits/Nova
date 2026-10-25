import React from 'react';
import { Container } from './Container';
import { Eyebrow } from '../ui/Eyebrow';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
  onOpenFinder?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenFinder, onOpenAdmin }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (id: string, isFinder?: boolean) => {
    if (isFinder && onOpenFinder) {
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

  return (
    <footer className="bg-studio-black text-white border-t border-studio-charcoal pt-16 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-studio-charcoal/60">
          {/* Studio Brand and Mission */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-baseline gap-1 text-3xl font-display font-bold tracking-tight">
              <span>NOVA</span>
              <span className="text-warmOrange-500 font-sans text-sm -translate-y-3">®</span>
              <span className="text-xs font-mono uppercase tracking-widest text-studio-muted ml-3">
                Digital Studio
              </span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Biznesingiz ehtiyojlariga mos veb-yechimlarni aniqlaydigan, konseptual dizayn va qat'iy tahririy tipografika asosida mahsulot yaratadigan raqamli studiya.
            </p>
            <div className="pt-2">
              <Eyebrow accent="orange">Ish yondashuvi</Eyebrow>
              <p className="text-xs text-slate-400 mt-2">
                Shablonlarsiz individual yechimlar · Aniq muddat · Shaffof muloqot
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
              Bo‘limlar
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleLink('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Xizmatlar & Yechimlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('portfolio')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio & Keyslar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('solution-finder', true)}
                  className="text-warmOrange-400 hover:text-warmOrange-300 transition-colors font-medium flex items-center gap-1.5"
                >
                  Solution Finder
                  <span className="w-1.5 h-1.5 rounded-full bg-warmOrange-500"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('process')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Ishlash tartibi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('brief')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Loyiha briefi (Ariza)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="text-warmOrange-400/90 hover:text-warmOrange-300 transition-colors font-mono text-xs flex items-center gap-1.5 pt-1"
                >
                  <span>Studiya Boshqaruvi (Admin)</span>
                  <span className="text-[10px] bg-warmOrange-950 text-warmOrange-400 px-1.5 py-0.5 border border-warmOrange-800">
                    Lead CMS
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
              Aloqa & Murojaat
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Yangi g‘oya yoki mavjud veb-saytni qayta loyihalash bo‘yicha to‘g‘ridan-to‘g‘ri studiya bilan bog‘laning:
            </p>
            <div className="space-y-2 text-sm pt-1">
              <div>
                <a
                  href="mailto:hello@nova-studio.digital"
                  className="text-white hover:text-cobalt-400 transition-colors inline-flex items-center gap-1 font-mono text-xs"
                >
                  <span>hello@nova-studio.digital</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-warmOrange-400 transition-colors inline-flex items-center gap-1 font-mono text-xs"
                >
                  <span>Telegram: @novadigital_studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="text-xs text-slate-500 pt-2 font-mono">
                Toshkent, O‘zbekiston · Dush – Juma, 09:00 – 18:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & ethics disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} NOVA® Digital Studio. Barcha huquqlar himoyalangan.
          </div>
          <div className="text-[11px] text-slate-500 max-w-md">
            Mustaqil raqamli studiya konseptsiyasi. Sun'iy sharhlar va soxta natijalarsiz, haqiqiy dizayn qadriyatlariga asoslangan.
          </div>
        </div>
      </Container>
    </footer>
  );
};
