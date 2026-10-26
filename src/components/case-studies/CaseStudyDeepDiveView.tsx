import React from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CaseStudy } from '../../types/portfolio';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  HelpCircle, 
  Lightbulb, 
  FileCheck, 
  Code,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface CaseStudyDeepDiveViewProps {
  study: CaseStudy;
  onBack: () => void;
  onStartBriefWithService?: (serviceCategory: string) => void;
}

export const CaseStudyDeepDiveView: React.FC<CaseStudyDeepDiveViewProps> = ({
  study,
  onBack,
  onStartBriefWithService,
}) => {
  return (
    <article className="min-h-screen bg-studio-bgLight py-12 md:py-20 animate-in fade-in duration-200">
      <Container size="wide">
        {/* Top Back Navigation & Concept Disclaimer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-studio-border mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-studio-black hover:text-cobalt-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Barcha Keyslarga Qaytish</span>
          </button>

          <div className="flex items-center gap-3">
            <Badge variant="orange">Konseptual Prototip</Badge>
            <span className="text-xs font-mono text-studio-muted hidden sm:inline">
              NOVA® Case Study #{study.id}
            </span>
          </div>
        </div>

        {/* Hero Title & Executive Summary */}
        <div className="space-y-6 pb-14 border-b border-studio-border max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cobalt">{study.category}</Badge>
            <span className="text-xs font-mono text-studio-muted">
              Soha: {study.clientType}
            </span>
          </div>

          <Heading as="h1" size="hero">
            {study.title}
          </Heading>

          <p className="text-xl sm:text-2xl text-studio-black font-display font-medium leading-relaxed">
            {study.subtitle}
          </p>

          <p className="text-base sm:text-lg text-studio-muted leading-relaxed font-sans">
            {study.summary}
          </p>

          {/* Hero Visual Mockup Banner */}
          {study.imageUrl && (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-studio-black border-2 border-studio-black mt-8 shadow-xl">
              <img
                src={study.imageUrl}
                alt={study.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20">
                  {study.clientType}
                </span>
                <span className="text-warmOrange-400 font-bold bg-studio-black/80 px-3 py-1 border border-warmOrange-500/30">
                  {study.metricsContext}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Deep Dive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14">
          {/* Main Story Content (Col 8) */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. The Core Business Problem */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-red-600" />
                <h2 className="font-display font-bold text-2xl text-studio-black">
                  01 / Biznes Muammosi & Qarshiliklar
                </h2>
              </div>
              <p className="text-base text-studio-dark leading-relaxed">
                {study.problem}
              </p>

              {study.challengeDetails && study.challengeDetails.length > 0 && (
                <div className="bg-red-50/50 border border-red-200/70 p-6 space-y-3">
                  <div className="font-mono text-xs uppercase font-bold text-red-800 tracking-wider">
                    Asosiy to‘siqlar:
                  </div>
                  <ul className="space-y-2.5">
                    {study.challengeDetails.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <span className="font-mono text-red-600 font-bold shrink-0">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* 2. Creative Direction & Approach */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warmOrange-600" />
                <h2 className="font-display font-bold text-2xl text-studio-black">
                  02 / Kreativ Direksiya & Yondashuv
                </h2>
              </div>
              <p className="text-base text-studio-dark leading-relaxed">
                {study.approach}
              </p>

              {study.strategyPoints && study.strategyPoints.length > 0 && (
                <div className="bg-white border border-studio-border p-6 space-y-3">
                  <div className="font-mono text-xs uppercase font-bold text-warmOrange-600 tracking-wider">
                    Qo‘llanilgan strategik yondashuvlar:
                  </div>
                  <ul className="space-y-2.5">
                    {study.strategyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-warmOrange-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* 3. The Proposed Engineering Solution & Blueprint */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-cobalt-600" />
                <h2 className="font-display font-bold text-2xl text-studio-black">
                  03 / Arxitektura & Tayyor Yechim
                </h2>
              </div>
              <p className="text-base text-studio-dark leading-relaxed">
                {study.solution}
              </p>

              {/* Interactive Visual Wireframe / Highlights Representation */}
              {study.visualHighlights && study.visualHighlights.length > 0 && (
                <div className="bg-studio-black text-white p-8 border border-studio-charcoal space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-studio-charcoal">
                    <span className="font-mono text-xs uppercase text-cobalt-400 font-bold">
                      Interfaol Prototip Elementlari
                    </span>
                    <Badge variant="orange">Blueprint</Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.visualHighlights.map((hl, idx) => (
                      <div key={idx} className="p-4 bg-white/5 border border-white/10 space-y-2">
                        <div className="font-mono text-xs text-warmOrange-400 font-bold">
                          0{idx + 1} / {hl.label}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {hl.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* 4. Why Not Other Formats? */}
            {study.whyNotOtherFormats && (
              <section className="p-6 bg-slate-100 border border-slate-200 space-y-2 text-sm">
                <div className="font-mono text-xs uppercase font-bold text-studio-black tracking-wider">
                  Nega aynan {study.category} tanlandi?
                </div>
                <p className="text-studio-muted leading-relaxed">
                  {study.whyNotOtherFormats}
                </p>
              </section>
            )}
          </div>

          {/* Right Sticky Sidebar: Deliverables & Tech Specs (Col 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-studio-border p-8 sticky top-28 space-y-8">
              {/* Deliverables Checklist */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-studio-black font-bold">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Topshirilgan Natijalar</span>
                </div>
                <div className="space-y-2.5">
                  {study.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-studio-dark">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              {study.techStack && study.techStack.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-studio-black font-bold">
                    <Code className="w-4 h-4 text-cobalt-600" />
                    <span>Texnologik Stek</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono bg-studio-bgLight border border-slate-200 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Context Metric Note */}
              <div className="space-y-2 pt-6 border-t border-slate-100 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-cobalt-600" />
                  <span>Etika & Kontekst:</span>
                </div>
                <p className="leading-relaxed">
                  {study.metricsContext}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="warm"
                  size="md"
                  icon="arrow-right"
                  className="w-full justify-center"
                  onClick={() => onStartBriefWithService ? onStartBriefWithService(study.category) : onBack()}
                >
                  Ushbu formatda brief boshlash
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
};
