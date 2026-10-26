import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Sparkles, ArrowDown, Compass, ShieldCheck, Zap, Clock } from 'lucide-react';

interface HeroProps {
  onExploreServices?: () => void;
  onExploreFinder?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onExploreFinder }) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('uz-UZ', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Tashkent',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-32 border-b border-studio-border overflow-hidden bg-studio-bgLight film-grain">
      {/* Editorial Decorative Grid Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0a0f1d_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Subtle Warm & Cobalt Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cobalt-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-warmOrange-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        {/* Top Studio Meta Strip with Live Tashkent Clock */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-studio-border mb-12 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-studio-black font-semibold tracking-wider uppercase">NOVA® Digital Studio</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Toshkent {timeStr || '16:00'} (GMT+5) · Qabul Faol</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-slate-500 hidden sm:flex">
            <span>Konseptual Web Dizayn</span>
            <span>·</span>
            <span>Interaktiv Yechimlar</span>
            <span>·</span>
            <span className="px-2 py-0.5 bg-slate-200 text-slate-800 text-[10px] font-bold">2026 EDITION</span>
          </div>
        </div>

        {/* Main Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left / Primary Column (Oversized Headline & Value Proposition) */}
          <div className="lg:col-span-8 space-y-8">
            <Eyebrow number="01" accent="cobalt">
              Kreativ Direksiya & Web Muhandislik
            </Eyebrow>

            <Heading as="h1" size="hero" className="max-w-4xl">
              Biznes muammolarini <br />
              <span className="text-cobalt-600 underline decoration-warmOrange-500 decoration-4 underline-offset-8">
                chiroyli va foydali
              </span> <br />
              raqamli yechimga aylantiramiz.
            </Heading>

            <p className="text-lg sm:text-xl text-studio-muted max-w-2xl font-sans leading-relaxed pt-2">
              NOVA® — qolipli va bir xil shablonlardan charchagan korxonalar uchun individual dizayn tizimi, 
              qat'iy tahririy tipografika va aniq biznes vazifalarini hal qiluvchi veb-mahsulotlar yaratadi.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                icon="arrow-right"
                onClick={onExploreServices || (() => handleScrollTo('services'))}
                className="w-full sm:w-auto justify-center"
              >
                Xizmatlar & Yechimlar
              </Button>

              <Button
                variant="warm"
                size="lg"
                icon="arrow-up-right"
                onClick={onExploreFinder || (() => handleScrollTo('solution-finder-teaser'))}
                className="w-full sm:w-auto justify-center"
              >
                Solution Finder (Tavsiya)
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo('portfolio')}
                className="w-full sm:w-auto justify-center"
              >
                Keyslarni ko‘rish
              </Button>
            </div>
          </div>

          {/* Right Column (Editorial Manifesto & Credibility Block) */}
          <div className="lg:col-span-4 space-y-6 pt-4 lg:pt-0">
            {/* Dark Studio Statement Card */}
            <div className="bg-studio-black text-white p-8 border border-studio-charcoal relative">
              <div className="absolute top-4 right-4 text-warmOrange-500 font-mono text-xs">
                EST. 2026
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-warmOrange-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Studiya Manifesti</span>
                </div>

                <p className="font-display font-medium text-lg leading-snug text-slate-100">
                  "Sayt faqat tashrif qog‘ozi emas — u kompaniyaning eng intellektual va ishonchli xodimi bo‘lishi lozim."
                </p>

                <div className="pt-4 border-t border-studio-charcoal/80 space-y-3 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>0% Generic Shablonlar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-warmOrange-400 shrink-0" />
                    <span>Sub-second Tezkor Yuklanish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-cobalt-400 shrink-0" />
                    <span>Shaffof Ehtiyoj Tahlili</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="bg-white p-6 border border-studio-border text-sm space-y-2">
              <div className="text-xs font-mono uppercase text-studio-muted tracking-wider">
                Kimlar uchun ishlaymiz?
              </div>
              <p className="text-studio-dark font-medium leading-relaxed">
                Nima kerakligini biladigan yoki veb-sayt talablarini qanday tushuntirishda qiynalayotgan kichik va o‘rta biznes egalari uchun.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Three-Pillar Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-studio-border">
          <div className="space-y-2">
            <div className="font-mono text-xs text-cobalt-600 font-semibold">01 / ART DIRECTION</div>
            <h3 className="font-display font-bold text-xl text-studio-black">Individual Vizual Til</h3>
            <p className="text-sm text-studio-muted leading-relaxed">
              Brendingizning o‘ziga xosligini ochib beruvchi maxsus tipografik grid, yuqori kontrast va betakror kompozitsiya.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs text-warmOrange-600 font-semibold">02 / PROBLEM SOLVING</div>
            <h3 className="font-display font-bold text-xl text-studio-black">Solution Finder & Brief</h3>
            <p className="text-sm text-studio-muted leading-relaxed">
              Keraksiz xarajatlarning oldini oluvchi shaffof tahlil: landing, biznes sayt, katalog yoki veb-ilova tanlovi.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs text-studio-black font-semibold">03 / MODERN ENGINE</div>
            <h3 className="font-display font-bold text-xl text-studio-black">Tezkor & Toza Muhandislik</h3>
            <p className="text-sm text-studio-muted leading-relaxed">
              Ortiqcha og‘ir kutubxonalarsiz, eng so‘nggi veb-standartlar, mukammal mobil moslashuv va SEO integratsiyasi.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
