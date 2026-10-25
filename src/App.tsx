import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ServicesPreview } from './components/sections/ServicesPreview';
import { SelectedWork } from './components/sections/SelectedWork';
import { ServiceComparisonMatrix } from './components/services/ServiceComparisonMatrix';
import { CaseStudyDeepDiveView } from './components/case-studies/CaseStudyDeepDiveView';
import { ProcessSection } from './components/sections/ProcessSection';
import { SolutionFinderSection } from './components/solution-finder/SolutionFinderSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Container } from './components/layout/Container';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { CaseStudy } from './types/portfolio';
import { RecommendationResult } from './types/solution-finder';
import { X, CheckCircle2, FileText } from 'lucide-react';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'landing' | 'case-study'>('landing');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [finderResult, setFinderResult] = useState<RecommendationResult | null>(null);
  const [activeModal, setActiveModal] = useState<'brief-info' | null>(null);

  // Scroll to top when switching between main view and deep-dive
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, selectedCaseStudy]);

  const handleOpenCaseStudy = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    setActiveView('case-study');
  };

  const handleBackToLanding = () => {
    setActiveView('landing');
    setSelectedCaseStudy(null);
  };

  const handleOpenFinder = () => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        document.getElementById('solution-finder')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('solution-finder')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrief = (serviceCategory?: string) => {
    if (serviceCategory) {
      setPrefilledService(serviceCategory);
    }
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        document.getElementById('brief-cta')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('brief-cta')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFinderComplete = (recommendation: RecommendationResult, answers: Record<string, string>) => {
    setFinderResult(recommendation);
    setPrefilledService(recommendation.recommendedType);
    const el = document.getElementById('brief-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-studio-bgLight text-studio-dark font-sans selection:bg-warmOrange-500 selection:text-white">
      {/* Site Header */}
      <Header
        onNavigate={handleNavigate}
        onOpenFinder={handleOpenFinder}
        onOpenBrief={() => handleOpenBrief()}
      />

      <main className="flex-grow">
        {/* Phase 5 Milestone Status Bar */}
        <section className="bg-studio-black text-white border-b border-studio-charcoal py-2.5">
          <Container size="wide">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-warmOrange-500 animate-pulse"></span>
                <span className="text-warmOrange-400 font-semibold">5-BOSQICH TAYYOR</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">Interaktiv Solution Finder · 5 Bosqichli Tavsiya Mexanizmi</span>
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <Badge variant="orange">State Preserved</Badge>
                <Badge variant="cobalt">Rule-based Logic</Badge>
                <Badge variant="dark">Phase 5 Verified</Badge>
              </div>
            </div>
          </Container>
        </section>

        {/* View Switch: Case Study Detail or Full Landing */}
        {activeView === 'case-study' && selectedCaseStudy ? (
          <CaseStudyDeepDiveView
            study={selectedCaseStudy}
            onBack={handleBackToLanding}
            onStartBriefWithService={(cat) => handleOpenBrief(cat)}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreServices={() => handleNavigate('services')}
              onExploreFinder={handleOpenFinder}
            />

            {/* 2. Services Preview Section */}
            <ServicesPreview
              onSelectService={(serviceId) => handleOpenBrief(serviceId)}
              onOpenFinder={handleOpenFinder}
            />

            {/* 3. Service Comparison Matrix */}
            <ServiceComparisonMatrix
              onSelectService={(serviceId) => handleOpenBrief(serviceId)}
              onOpenFinder={handleOpenFinder}
            />

            {/* 4. Selected Work with Deep-Dive triggers */}
            <SelectedWork onOpenCaseStudy={handleOpenCaseStudy} />

            {/* 5. Process Overview */}
            <ProcessSection />

            {/* 6. Live Interactive Solution Finder (Phase 5 Core) */}
            <SolutionFinderSection onProceedToBrief={handleFinderComplete} />

            {/* 7. Final Call to Action */}
            <FinalCtaSection
              onOpenBrief={() => setActiveModal('brief-info')}
              onOpenFinder={handleOpenFinder}
            />
          </>
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} onOpenFinder={handleOpenFinder} />

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
                {prefilledService ? (
                  <span className="font-semibold text-cobalt-600 block mb-1">
                    Solution Finder'dan kelgan tavsiya: {prefilledService}.
                  </span>
                ) : null}
                Loyiha arizasi shakli navbatdagi 6-bosqichda to‘liq ko‘p bosqichli shakl (kontaktlar, sayt vazifasi, sahifalar va byudjet, tekshirish) ko‘rinishida ishga tushadi.
              </p>
            </div>

            <div className="p-4 bg-studio-bgLight border border-slate-200 text-xs font-mono space-y-2">
              <div className="font-bold text-studio-black">Tizim tayyorgarligi:</div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Solution Finder ma'lumotlarini qabul qilish integratsiyasi tayyor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Frontend-only xavfsiz demo topshirish rejimi</span>
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
