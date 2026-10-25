import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ServicesPreview } from './components/sections/ServicesPreview';
import { SelectedWork } from './components/sections/SelectedWork';
import { ProcessSection } from './components/sections/ProcessSection';
import { SolutionFinderTeaser } from './components/sections/SolutionFinderTeaser';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Container } from './components/layout/Container';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { X, CheckCircle2, Compass, FileText, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'finder-info' | 'brief-info' | null>(null);

  const handleOpenFinder = () => {
    const el = document.getElementById('solution-finder-teaser');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrief = () => {
    const el = document.getElementById('brief-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    const el = document.getElementById('brief-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-studio-bgLight text-studio-dark font-sans selection:bg-warmOrange-500 selection:text-white">
      {/* Site Header */}
      <Header
        onOpenFinder={handleOpenFinder}
        onOpenBrief={handleOpenBrief}
      />

      <main className="flex-grow">
        {/* Phase 3 Milestone Indicator Bar */}
        <section className="bg-studio-black text-white border-b border-studio-charcoal py-2.5">
          <Container size="wide">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-emerald-400 font-semibold">3-BOSQICH TAYYOR</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">To‘liq Landing Page, Hero & Bo‘limlar Arxitekturasi</span>
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <Badge variant="cobalt">Hero Active</Badge>
                <Badge variant="orange">Services & Works</Badge>
                <Badge variant="dark">Vite Build Pass</Badge>
              </div>
            </div>
          </Container>
        </section>

        {/* 1. Hero Section */}
        <Hero
          onExploreServices={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreFinder={handleOpenFinder}
        />

        {/* 2. Services Preview Section */}
        <ServicesPreview
          onSelectService={handleSelectService}
          onOpenFinder={handleOpenFinder}
        />

        {/* 3. Selected Work (Conceptual Portfolio) */}
        <SelectedWork />

        {/* 4. Process Overview */}
        <ProcessSection />

        {/* 5. Solution Finder Teaser */}
        <SolutionFinderTeaser onStartFinder={() => setActiveModal('finder-info')} />

        {/* 6. Final Call to Action */}
        <FinalCtaSection
          onOpenBrief={() => setActiveModal('brief-info')}
          onOpenFinder={handleOpenFinder}
        />
      </main>

      {/* Site Footer */}
      <Footer onOpenFinder={handleOpenFinder} />

      {/* Info Modal for Solution Finder Roadmap Notice */}
      {activeModal === 'finder-info' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full border border-studio-border p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-studio-dark hover:text-warmOrange-600 border border-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase text-warmOrange-600 font-bold">
              <Compass className="w-4 h-4" />
              <span>Solution Finder · 5-bosqich</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-studio-black">
                Interaktiv Solution Finder
              </h3>
              <p className="text-sm text-studio-muted leading-relaxed">
                Ushbu vosita 5-bosqichda to‘liq ko‘p bosqichli interaktiv forma ko‘rinishida ishga tushadi: savollarga javob berish, orqaga qaytish va javoblarni saqlash imkoniyatiga ega bo‘ladi.
              </p>
            </div>

            <div className="p-4 bg-studio-bgLight border border-slate-200 text-xs font-mono space-y-2">
              <div className="font-bold text-studio-black">Tayyorlangan mantiqiy qoidalar:</div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>4 xil biznes formati bo‘yicha avtomatik tavsiya</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Javoblarni Project Brief shakliga to‘g‘ridan-to‘g‘ri uzatish</span>
              </div>
            </div>

            <Button
              variant="warm"
              size="md"
              icon="arrow-right"
              className="w-full justify-center"
              onClick={() => setActiveModal(null)}
            >
              Tushundim, davom etish
            </Button>
          </div>
        </div>
      )}

      {/* Info Modal for Project Brief Roadmap Notice */}
      {activeModal === 'brief-info' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full border border-studio-border p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-studio-dark hover:text-warmOrange-600 border border-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase text-cobalt-600 font-bold">
              <FileText className="w-4 h-4" />
              <span>Project Brief · 6-bosqich</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-studio-black">
                Ko‘p Bosqichli Project Brief
              </h3>
              <p className="text-sm text-studio-muted leading-relaxed">
                Loyiha arizasi (Brief) shakli 6-bosqichda to‘liq ishga tushadi: kontakt ma'lumotlari, sayt turi, kerakli sahifalar, byudjet va tekshirish (review) qadamlari bilan jihozlanadi.
              </p>
            </div>

            <div className="p-4 bg-studio-bgLight border border-slate-200 text-xs font-mono space-y-2">
              <div className="font-bold text-studio-black">Tizim holati:</div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>TypeScript modellari va validatsiya arxitekturasi tayyor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>To‘g‘ridan-to‘g‘ri email va Telegram aloqalari ochiq</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              icon="arrow-right"
              className="w-full justify-center"
              onClick={() => setActiveModal(null)}
            >
              Tushundim, davom etish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
