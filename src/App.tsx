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
import { ProjectBriefSection } from './components/project-brief/ProjectBriefSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Container } from './components/layout/Container';
import { Badge } from './components/ui/Badge';
import { CaseStudy } from './types/portfolio';
import { RecommendationResult } from './types/solution-finder';
import { ProjectBriefData } from './types/brief';
import { AdminDashboardView } from './components/admin/AdminDashboardView';
import { AdminLoginModal } from './components/admin/AdminLoginModal';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'landing' | 'case-study' | 'admin'>('landing');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [finderAnswers, setFinderAnswers] = useState<Record<string, string>>({});
  const [, setFinderResult] = useState<RecommendationResult | null>(null);

  // Admin Portal State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('nova_admin_session') === 'active';
    }
    return false;
  });
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);

  // Scroll to top when switching between main view and deep-dive
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, selectedCaseStudy]);

  // Support #admin hash navigation directly in URL
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin') {
        if (isAdminLoggedIn) {
          setActiveView('admin');
        } else {
          setShowAdminLoginModal(true);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [isAdminLoggedIn]);

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
        document.getElementById('brief')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('brief')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFinderComplete = (
    recommendation: RecommendationResult,
    answers: Record<string, string>
  ) => {
    setFinderResult(recommendation);
    setFinderAnswers(answers);
    setPrefilledService(recommendation.recommendedType);

    setTimeout(() => {
      const el = document.getElementById('brief');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
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

  const handleOpenAdmin = () => {
    if (isAdminLoggedIn) {
      setActiveView('admin');
    } else {
      setShowAdminLoginModal(true);
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem('nova_admin_session', 'active');
    setShowAdminLoginModal(false);
    setActiveView('admin');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('nova_admin_session');
    setActiveView('landing');
    if (window.location.hash === '#admin') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  // If active view is Admin Dashboard, render full admin portal
  if (activeView === 'admin' && isAdminLoggedIn) {
    return (
      <AdminDashboardView
        onBackToSite={() => setActiveView('landing')}
        onLogout={handleAdminLogout}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-studio-bgLight text-studio-dark font-sans selection:bg-warmOrange-500 selection:text-white">
      {/* Site Header */}
      <Header
        onNavigate={handleNavigate}
        onOpenFinder={handleOpenFinder}
        onOpenBrief={() => handleOpenBrief()}
        onOpenAdmin={handleOpenAdmin}
      />

      <main className="flex-grow">
        {/* Release Milestone Status Bar */}
        <section className="bg-studio-black text-white border-b border-studio-charcoal py-2.5">
          <Container size="wide">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 font-semibold">NOVA® FULLSTACK RELEASE</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">
                  Vercel Serverless Backend & Editorial Lead Admin Panel Faol
                </span>
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <button
                  type="button"
                  onClick={handleOpenAdmin}
                  className="hover:underline text-warmOrange-400 cursor-pointer"
                >
                  <Badge variant="orange">Admin: nova2026</Badge>
                </button>
                <Badge variant="cobalt">Serverless API</Badge>
                <Badge variant="dark">Vercel Ready</Badge>
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

            {/* 7. Live Interactive Multi-step Project Brief (Phase 6 Core) */}
            <ProjectBriefSection
              prefilledType={prefilledService}
              finderAnswers={finderAnswers}
              onBriefSubmitted={(submittedData: ProjectBriefData) => {
                console.log('Project brief saved to storage:', submittedData);
              }}
            />

            {/* 8. Final Call to Action */}
            <FinalCtaSection
              onOpenBrief={() => handleOpenBrief()}
              onOpenFinder={handleOpenFinder}
            />
          </>
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenFinder={handleOpenFinder}
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Studio Admin Passcode Login Modal */}
      <AdminLoginModal
        isOpen={showAdminLoginModal}
        onClose={() => setShowAdminLoginModal(false)}
        onSuccess={handleAdminLoginSuccess}
      />
    </div>
  );
};

export default App;
