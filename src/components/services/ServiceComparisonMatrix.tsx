import React from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { studioServices } from '../../data/services';
import { Check, X, ArrowRight, Info, Sparkles } from 'lucide-react';

interface ServiceComparisonMatrixProps {
  onSelectService?: (serviceId: string) => void;
  onOpenFinder?: () => void;
}

export const ServiceComparisonMatrix: React.FC<ServiceComparisonMatrixProps> = ({
  onSelectService,
  onOpenFinder,
}) => {
  return (
    <section id="comparison-matrix" className="py-20 bg-white border-b border-studio-border">
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-studio-border">
          <div className="space-y-4 max-w-2xl">
            <Eyebrow number="COMPARE" accent="cobalt">
              Formatlar Taqqoslashi
            </Eyebrow>
            <Heading as="h2" size="display">
              Qaysi yechim aynan sizga to‘g‘ri keladi?
            </Heading>
            <p className="text-base text-studio-muted leading-relaxed">
              Sayt turlari orasidagi farqni tushunish — ortiqcha xarajatlarning va noto‘g‘ri kutilmalarning oldini oladi. Quyidagi jadval orqali har bir formatning vazifasini solishtiring.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="warm"
              size="md"
              icon="arrow-up-right"
              onClick={onOpenFinder}
            >
              Solution Finder orqali aniqlash
            </Button>
          </div>
        </div>

        {/* Comparison Table (Responsive with horizontal scroll on small screens) */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b-2 border-studio-black bg-studio-bgLight">
                <th className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-studio-muted w-1/5">
                  Xususiyat / Format
                </th>
                {studioServices.map((service) => (
                  <th key={service.id} className="p-4 sm:p-5 w-1/5">
                    <div className="space-y-1">
                      <div className="font-mono text-xs text-cobalt-600 font-bold">
                        {service.number}
                      </div>
                      <div className="font-display font-bold text-base text-studio-black">
                        {service.title}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-studio-border text-sm">
              {/* Row 1: Primary Goal */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase bg-studio-bgLight/40">
                  Birlamchi Maqsad
                </td>
                <td className="p-4 sm:p-5 text-studio-dark">
                  Bitta mahsulot/xizmatga tezkor mijoz va so‘rovlar (lead) yig‘ish
                </td>
                <td className="p-4 sm:p-5 text-studio-dark">
                  Kompaniya nufuzi, ekspertizasi va ishonchini oshirish
                </td>
                <td className="p-4 sm:p-5 text-studio-dark">
                  Keng assortimentni parametrlar bo‘yicha ko‘rsatish va buyurtma olish
                </td>
                <td className="p-4 sm:p-5 text-studio-dark">
                  Biznes jarayonlarni, shaxsiy kabinet yoki hisob-kitobni avtomatlashtirish
                </td>
              </tr>

              {/* Row 2: Page Scope */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase bg-studio-bgLight/40">
                  Sahifalar Hajmi
                </td>
                {studioServices.map((service) => (
                  <td key={service.id} className="p-4 sm:p-5 font-mono text-xs text-slate-700">
                    {service.comparisonMetrics?.pagesCount}
                  </td>
                ))}
              </tr>

              {/* Row 3: Typical Timeline */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase bg-studio-bgLight/40">
                  Ishlab Chiqish Muddati
                </td>
                {studioServices.map((service) => (
                  <td key={service.id} className="p-4 sm:p-5 font-mono text-xs font-semibold text-studio-black">
                    {service.typicalTimeline}
                  </td>
                ))}
              </tr>

              {/* Row 4: Target Audience */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase bg-studio-bgLight/40">
                  Asosiy Auditoriya
                </td>
                {studioServices.map((service) => (
                  <td key={service.id} className="p-4 sm:p-5 text-xs text-studio-muted leading-relaxed">
                    {service.comparisonMetrics?.targetAudience}
                  </td>
                ))}
              </tr>

              {/* Row 5: Content Complexity */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase bg-studio-bgLight/40">
                  Kontent Murakkabligi
                </td>
                {studioServices.map((service) => (
                  <td key={service.id} className="p-4 sm:p-5 text-xs text-studio-muted leading-relaxed">
                    {service.comparisonMetrics?.contentComplexity}
                  </td>
                ))}
              </tr>

              {/* Row 6: Budget Indicator */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase bg-studio-bgLight/40">
                  Byudjet Ko‘rsatkichi
                </td>
                {studioServices.map((service) => (
                  <td key={service.id} className="p-4 sm:p-5">
                    <Badge variant={service.id === 'landing-page' ? 'neutral' : service.id === 'business-website' ? 'cobalt' : service.id === 'product-catalog' ? 'orange' : 'dark'}>
                      {service.pricingIndicator}
                    </Badge>
                  </td>
                ))}
              </tr>

              {/* Row 7: Action CTA */}
              <tr className="bg-slate-50">
                <td className="p-4 sm:p-5 font-mono text-xs text-studio-black font-bold uppercase">
                  Tanlov
                </td>
                {studioServices.map((service) => (
                  <td key={service.id} className="p-4 sm:p-5">
                    <button
                      onClick={() => onSelectService ? onSelectService(service.id) : document.getElementById('brief-cta')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cobalt-600 hover:text-cobalt-800 transition-colors cursor-pointer"
                    >
                      <span>Briefga o‘tish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
