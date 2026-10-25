import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { studioServices } from '../../data/services';
import { Check, X, ArrowRight, Info, Sparkles, Smartphone, Table as TableIcon } from 'lucide-react';

interface ServiceComparisonMatrixProps {
  onSelectService?: (serviceId: string) => void;
  onOpenFinder?: () => void;
}

export const ServiceComparisonMatrix: React.FC<ServiceComparisonMatrixProps> = ({
  onSelectService,
  onOpenFinder,
}) => {
  const [mobileMode, setMobileMode] = useState<'table' | 'cards'>('cards');
  const [activeCardTab, setActiveCardTab] = useState<string>(studioServices[0].id);

  const activeService = studioServices.find((s) => s.id === activeCardTab) || studioServices[0];

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

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="warm"
              size="md"
              icon="arrow-up-right"
              onClick={onOpenFinder}
              className="cursor-pointer"
            >
              Solution Finder orqali aniqlash
            </Button>
          </div>
        </div>

        {/* Mobile View Toggle Buttons (< md screens) */}
        <div className="flex md:hidden items-center justify-between gap-2 pt-6">
          <span className="text-xs font-mono uppercase text-studio-muted">Ko‘rinish rejimi:</span>
          <div className="flex items-center border border-studio-border p-1 bg-studio-bgLight">
            <button
              type="button"
              onClick={() => setMobileMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono cursor-pointer transition-colors ${
                mobileMode === 'cards'
                  ? 'bg-studio-black text-white font-bold'
                  : 'text-studio-muted hover:text-studio-black'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Kartalar</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono cursor-pointer transition-colors ${
                mobileMode === 'table'
                  ? 'bg-studio-black text-white font-bold'
                  : 'text-studio-muted hover:text-studio-black'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Jadval</span>
            </button>
          </div>
        </div>

        {/* 1. Mobile Cards Mode (< md screens only when mobileMode === 'cards') */}
        <div className={`md:hidden mt-6 space-y-6 ${mobileMode === 'cards' ? 'block' : 'hidden'}`}>
          {/* Service Selector Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 scroll-indicator">
            {studioServices.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveCardTab(service.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider shrink-0 border transition-all cursor-pointer ${
                  activeCardTab === service.id
                    ? 'bg-cobalt-600 text-white border-cobalt-600 font-bold'
                    : 'bg-white text-studio-muted border-studio-border hover:border-slate-400'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Card Detail */}
          <div className="bg-white border-2 border-studio-black p-6 space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-mono text-xs text-warmOrange-600 font-bold">
                {activeService.number}
              </span>
              <Badge variant="cobalt">{activeService.pricingIndicator}</Badge>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-studio-black mb-1">
                {activeService.title}
              </h3>
              <p className="text-xs text-studio-muted font-sans leading-relaxed">
                {activeService.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs font-sans">
              <div className="p-3 bg-studio-bgLight border border-slate-200">
                <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                  Birlamchi Maqsad:
                </span>
                <span className="text-studio-black font-medium leading-relaxed block">
                  {activeService.businessProblem}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                    Sahifalar:
                  </span>
                  <span className="font-mono text-xs font-semibold text-studio-black">
                    {activeService.comparisonMetrics?.pagesCount}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                    Ishlash muddati:
                  </span>
                  <span className="font-mono text-xs font-semibold text-warmOrange-600">
                    {activeService.typicalTimeline}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200">
                <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                  Auditoriya & Qamrov:
                </span>
                <span className="text-slate-700">
                  {activeService.comparisonMetrics?.targetAudience}
                </span>
              </div>
            </div>

            <Button
              variant="warm"
              size="md"
              icon="arrow-right"
              onClick={() =>
                onSelectService
                  ? onSelectService(activeService.id)
                  : document.getElementById('brief')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full justify-center"
            >
              Ushbu format bo‘yicha brief to‘ldirish
            </Button>
          </div>
        </div>

        {/* 2. Responsive Table (Always visible on desktop, toggleable on mobile) */}
        <div
          className={`mt-8 md:mt-12 ${
            mobileMode === 'table' ? 'block' : 'hidden md:block'
          }`}
        >
          {/* Mobile swipe helper hint */}
          <div className="md:hidden flex items-center justify-center gap-2 p-2 mb-3 bg-warmOrange-50 border border-warmOrange-200 text-[11px] font-mono text-warmOrange-800">
            <span>← To‘liq solishtirish uchun jadvalni suring →</span>
          </div>

          <div className="overflow-x-auto scroll-indicator pb-4">
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
                      <Badge
                        variant={
                          service.id === 'landing-page'
                            ? 'neutral'
                            : service.id === 'business-website'
                            ? 'cobalt'
                            : service.id === 'product-catalog'
                            ? 'orange'
                            : 'dark'
                        }
                      >
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
                        onClick={() =>
                          onSelectService
                            ? onSelectService(service.id)
                            : document.getElementById('brief')?.scrollIntoView({ behavior: 'smooth' })
                        }
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
        </div>
      </Container>
    </section>
  );
};
