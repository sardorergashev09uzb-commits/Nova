import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { studioServices } from '../../data/services';
import { CheckCircle2, ArrowRight, HelpCircle, Clock, Layers } from 'lucide-react';

interface ServicesPreviewProps {
  onSelectService?: (serviceId: string) => void;
  onOpenFinder?: () => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onSelectService,
  onOpenFinder,
}) => {
  const [activeServiceId, setActiveServiceId] = useState(studioServices[0].id);
  const activeService = studioServices.find((s) => s.id === activeServiceId) || studioServices[0];

  return (
    <section id="services" className="py-20 md:py-32 bg-white border-b border-studio-border">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-studio-border">
          <div className="space-y-4 max-w-2xl">
            <Eyebrow number="02" accent="cobalt">
              Xizmatlar & Yechimlar
            </Eyebrow>
            <Heading as="h2" size="display">
              Biznes ehtiyojingizga mos aniq arxitektura.
            </Heading>
            <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
              Biz faqat "sayt yasash" bilan shug‘ullanmaymiz. Har bir format biznesingiz oldidagi aniq muammoni (sotuv, nufuz, katalog yoki avtomatlashtirish) hal qilish uchun loyihalanadi.
            </p>
          </div>

          <div className="shrink-0 space-y-2">
            <div className="text-xs font-mono text-studio-muted">Qaysi format kerakligini bilmaysizmi?</div>
            <Button
              variant="outline"
              size="md"
              icon="arrow-up-right"
              onClick={onOpenFinder}
            >
              Solution Finder'dan so‘rash
            </Button>
          </div>
        </div>

        {/* Services Navigation Tabs (Desktop & Tablet) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-studio-border">
          {studioServices.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`text-left p-4 sm:p-6 transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'border-cobalt-600 bg-cobalt-50/50 shadow-sm'
                    : 'border-studio-border hover:border-slate-400 bg-studio-bgLight/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-cobalt-600' : 'text-studio-muted'}`}>
                    {service.number}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cobalt-600"></span>}
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-studio-black line-clamp-2">
                  {service.title}
                </div>
                <div className="text-xs text-studio-muted mt-1 font-mono">
                  {service.typicalTimeline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Architecture Showcase */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-studio-bgLight/60 p-8 sm:p-12 border border-studio-border">
            {/* Left Column: Problem & Proposed Solution */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="cobalt">{activeService.number} / FORMAT</Badge>
                  <span className="font-mono text-xs text-studio-muted">
                    {activeService.pricingIndicator}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black">
                  {activeService.title}
                </h3>
                <p className="text-base text-studio-muted leading-relaxed">
                  {activeService.subtitle}
                </p>
              </div>

              {/* The Business Problem */}
              <div className="p-6 bg-white border border-studio-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-warmOrange-600 font-bold">
                  <HelpCircle className="w-4 h-4" />
                  <span>Hal qilinadigan biznes muammosi</span>
                </div>
                <p className="text-sm sm:text-base text-studio-dark leading-relaxed font-medium">
                  {activeService.businessProblem}
                </p>
              </div>

              {/* Our Solution */}
              <div className="p-6 bg-studio-black text-white border border-studio-charcoal space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-cobalt-400 font-bold">
                  <Layers className="w-4 h-4" />
                  <span>NOVA® Yondashuvi & Yechimi</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeService.ourSolution}
                </p>
              </div>
            </div>

            {/* Right Column: Features, Deliverables & Action */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-studio-black font-bold mb-3">
                    Asosiy xususiyatlar (Key Features)
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-studio-dark">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-studio-border">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-studio-black font-bold mb-3">
                    Topshiriladigan natijalar (Deliverables)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.deliverables.map((deliv, idx) => (
                      <Badge key={idx} variant="neutral">
                        {deliv}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-studio-border flex items-center justify-between text-xs font-mono text-studio-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Muddat: {activeService.typicalTimeline}
                  </span>
                  <span>{activeService.bestFor.split(',')[0]}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  icon="arrow-right"
                  className="w-full justify-center"
                  onClick={() => onSelectService ? onSelectService(activeService.id) : document.getElementById('brief-cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ushbu format bo‘yicha brief to‘ldirish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
