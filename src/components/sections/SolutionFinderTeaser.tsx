import React from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Compass, CheckCircle2, ArrowRight, Sparkles, SlidersHorizontal, FileText } from 'lucide-react';

interface SolutionFinderTeaserProps {
  onStartFinder?: () => void;
}

export const SolutionFinderTeaser: React.FC<SolutionFinderTeaserProps> = ({
  onStartFinder,
}) => {
  return (
    <section id="solution-finder-teaser" className="py-20 md:py-32 bg-studio-bgLight border-b border-studio-border">
      <Container size="wide">
        <div className="bg-white border border-studio-border p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-sm">
          {/* Subtle Decorative Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow number="05" accent="orange">
                Interaktiv Vosita
              </Eyebrow>

              <Heading as="h2" size="display">
                Qaysi turdagi veb-sayt sizga mos kelishini bilmayapsizmi?
              </Heading>

              <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
                Ko‘p biznes egalari sayt buyurtma qilishda qiynaladilar: <span className="text-studio-black font-semibold">Landing page</span> yetarlimi yoki <span className="text-studio-black font-semibold">ko‘p sahifali biznes sayt</span> kerakmi? <span className="text-studio-black font-semibold">Katalog</span> qachon zarur? 
              </p>

              <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
                NOVA® Solution Finder — biznesingiz bosqichi, asosiy maqsadi va assortimentiga asoslanib, sizga mos veb-formatni 2 daqiqada aniqlab beradi va nega aynan shu format to‘g‘ri ekanini shaffof tushuntiradi.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-studio-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-warmOrange-600 shrink-0" />
                  <span>Dasturchi bilan tushunarli muloqot</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-studio-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-warmOrange-600 shrink-0" />
                  <span>Ortiqcha xarajatlarning oldini olish</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-studio-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-warmOrange-600 shrink-0" />
                  <span>Aniq muddat va byudjet tushunchasi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-studio-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-warmOrange-600 shrink-0" />
                  <span>To‘g‘ridan-to‘g‘ri Briefga yuklanadi</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="warm"
                  size="lg"
                  icon="arrow-right"
                  onClick={onStartFinder}
                >
                  Solution Finder'ni sinash
                </Button>
                <span className="text-xs font-mono text-studio-muted">
                  Bepul va ro‘yxatdan o‘tish talab etilmaydi
                </span>
              </div>
            </div>

            {/* Right Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-studio-black text-white p-8 border border-studio-charcoal space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-studio-charcoal">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-warmOrange-400 font-bold">
                    <Compass className="w-4 h-4" />
                    <span>Tavsiya Mexanizmi</span>
                  </div>
                  <Badge variant="orange">4 Ta Oddiy Qadam</Badge>
                </div>

                {/* Steps Demonstration */}
                <div className="space-y-4 text-sm font-mono">
                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10">
                    <span className="text-warmOrange-400 font-bold">01</span>
                    <div>
                      <div className="text-white font-sans font-semibold text-xs">Biznes rivojlanish bosqichi</div>
                      <div className="text-[11px] text-slate-400">Startap / Mavjud biznes / Keng katalog</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10">
                    <span className="text-warmOrange-400 font-bold">02</span>
                    <div>
                      <div className="text-white font-sans font-semibold text-xs">Birlamchi vazifa & maqsad</div>
                      <div className="text-[11px] text-slate-400">Tezkor lead / Nufuz / Sotuv / Avtomatika</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10">
                    <span className="text-warmOrange-400 font-bold">03</span>
                    <div>
                      <div className="text-white font-sans font-semibold text-xs">Assortiment & sahifalar hajmi</div>
                      <div className="text-[11px] text-slate-400">1 sahifa / Xizmatlar / Ko‘p parametrli filtrlar</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10">
                    <span className="text-warmOrange-400 font-bold">04</span>
                    <div>
                      <div className="text-white font-sans font-semibold text-xs">Aniq tavsiya va Project Brief</div>
                      <div className="text-[11px] text-slate-400">Tavsiya sabablari va tayyor ariza tuzilmasi</div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-studio-charcoal flex items-center justify-between">
                  <span>Sun'iy iddaolarsiz</span>
                  <span className="text-emerald-400 font-semibold">100% Shaffof Mantiq</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
