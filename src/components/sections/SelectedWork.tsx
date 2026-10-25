import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { conceptualCaseStudies } from '../../data/caseStudies';
import { CaseStudy } from '../../types/portfolio';
import { ArrowUpRight, X, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Landing Page', 'Business Website', 'Product Catalog', 'Custom Web App'];

  const filteredStudies = selectedCategory === 'All'
    ? conceptualCaseStudies
    : conceptualCaseStudies.filter(s => s.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-studio-bgLight border-b border-studio-border">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-studio-border">
          <div className="space-y-4 max-w-2xl">
            <Eyebrow number="03" accent="orange">
              Selected Work · Studio Concepts
            </Eyebrow>
            <Heading as="h2" size="display">
              Konseptual keyslar va prototiplar.
            </Heading>
            <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
              Biz soxta mijoz sharhlari yoki to‘qima statistikalar ko‘rsatmaymiz. Quyidagi har bir loyiha — haqiqiy biznes muammolariga studiyamiz tomonidan berilgan muhandislik va dizayn yechimlari prototipidir.
            </p>
          </div>

          {/* Ethics guarantee pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-studio-border text-xs font-mono text-studio-muted">
            <AlertCircle className="w-4 h-4 text-warmOrange-600 shrink-0" />
            <span>100% Shaffof Dizayn Konsepsiyasi</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer border ${
                selectedCategory === category
                  ? 'bg-studio-black text-white border-studio-black font-semibold'
                  : 'bg-white text-studio-dark/70 border-studio-border hover:border-slate-400 hover:text-studio-black'
              }`}
            >
              {category === 'All' ? 'Barcha Loyihalar' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className="group bg-white border border-studio-border hover:border-cobalt-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-8 space-y-6">
                {/* Meta Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Badge variant={idx % 2 === 0 ? 'cobalt' : 'orange'}>
                      {study.category}
                    </Badge>
                    <span className="text-[11px] font-mono text-slate-400">
                      Concept #{idx + 1}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-studio-muted">
                    {study.clientType}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black group-hover:text-cobalt-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-studio-muted leading-relaxed line-clamp-2">
                    {study.subtitle}
                  </p>
                </div>

                {/* Problem & Approach Teaser */}
                <div className="bg-studio-bgLight/60 p-5 border border-studio-border/70 space-y-3 text-xs">
                  <div>
                    <span className="font-mono uppercase font-bold text-studio-black mr-2">Muammo:</span>
                    <span className="text-studio-muted line-clamp-2">{study.problem}</span>
                  </div>
                  <div>
                    <span className="font-mono uppercase font-bold text-cobalt-600 mr-2">Yechim:</span>
                    <span className="text-studio-dark line-clamp-2">{study.solution}</span>
                  </div>
                </div>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.deliverables.slice(0, 3).map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-block px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                  {study.deliverables.length > 3 && (
                    <span className="inline-block px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-400">
                      +{study.deliverables.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-studio-muted">
                  Batafsil tahlilni o‘qish
                </span>
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cobalt-600 hover:text-cobalt-800 transition-colors cursor-pointer"
                >
                  <span>Keysni ochish</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Case Study Detailed Modal View */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-studio-border shadow-2xl relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-studio-border p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <Badge variant="cobalt">{activeModalStudy.category}</Badge>
                <span className="text-xs font-mono uppercase text-studio-muted">
                  Konseptual Keys
                </span>
              </div>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="p-1.5 text-studio-dark hover:text-warmOrange-600 border border-slate-200 hover:border-warmOrange-500 transition-colors cursor-pointer"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-studio-black">
                  {activeModalStudy.title}
                </h2>
                <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
                  {activeModalStudy.subtitle}
                </p>
                <div className="text-xs font-mono text-slate-500 pt-1">
                  Mijoz yo‘nalishi: {activeModalStudy.clientType}
                </div>
              </div>

              {/* Problem Block */}
              <div className="p-6 bg-red-50/40 border border-red-200/60 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-red-700 font-bold">
                  01 / Biznes Muammosi
                </h4>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {activeModalStudy.problem}
                </p>
              </div>

              {/* Approach Block */}
              <div className="p-6 bg-blue-50/40 border border-blue-200/60 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cobalt-700 font-bold">
                  02 / Kreativ Yondashuv
                </h4>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {activeModalStudy.approach}
                </p>
              </div>

              {/* Solution Block */}
              <div className="p-6 bg-studio-black text-white border border-studio-charcoal space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-warmOrange-400 font-bold">
                  03 / Amalga Oshirilgan Yechim
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeModalStudy.solution}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-studio-black font-bold">
                  Topshirilgan mahsulotlar (Deliverables):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalStudy.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-studio-dark">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Context Note */}
              <div className="p-4 bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
                <span className="font-bold text-slate-800">Kontekst natijasi: </span>
                {activeModalStudy.metricsContext}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-studio-bgLight border-t border-studio-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-studio-muted">
                Shu kabi loyiha sizning biznesingizga ham kerakmi?
              </span>
              <Button
                variant="warm"
                size="md"
                icon="arrow-right"
                onClick={() => {
                  setActiveModalStudy(null);
                  document.getElementById('brief-cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Loyiha briefini yuborish
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
