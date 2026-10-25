import React from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { ArrowUpRight, ArrowRight, Mail, Send, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBrief?: () => void;
  onOpenFinder?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenBrief,
  onOpenFinder,
}) => {
  return (
    <section id="brief-cta" className="py-24 md:py-36 bg-studio-black text-white relative overflow-hidden">
      {/* Decorative Warm Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-warmOrange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container size="wide">
        <div className="max-w-4xl space-y-8 relative z-10">
          <Eyebrow number="06" accent="orange">
            Loyiha Boshlash
          </Eyebrow>

          <Heading as="h2" size="display" dark className="leading-[1.05]">
            Mavhum talablarsiz, <br />
            <span className="text-warmOrange-500">aniq va sifatli</span> raqamli mahsulot yarating.
          </Heading>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
            Sizda tayyor texnik topshiriq bormi yoki qanday sayt kerakligini endi aniqlamoqchimisiz? Biz loyihangizni tahlil qilib, optimal yo‘nalishni taklif qilamiz.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              variant="warm"
              size="lg"
              icon="arrow-right"
              onClick={onOpenBrief}
            >
              Loyiha briefini boshlash
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-studio-black"
              icon="arrow-up-right"
              onClick={onOpenFinder}
            >
              Solution Finder bilan aniqlash
            </Button>
          </div>

          {/* Contact Direct Options */}
          <div className="pt-12 mt-12 border-t border-studio-charcoal/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-widest block">To‘g‘ridan-to‘g‘ri Email</span>
              <a
                href="mailto:hello@nova-studio.digital"
                className="text-white hover:text-warmOrange-400 transition-colors flex items-center gap-1 font-semibold"
              >
                <span>hello@nova-studio.digital</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-widest block">Tezkor Muloqot</span>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-warmOrange-400 transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Telegram: @novadigital_studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 uppercase tracking-widest block">Studiya Joylashuvi</span>
              <span className="text-slate-300">Toshkent, O‘zbekiston · Global Remote</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
