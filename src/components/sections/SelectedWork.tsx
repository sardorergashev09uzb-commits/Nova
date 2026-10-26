import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { conceptualCaseStudies } from '../../data/caseStudies';
import { CaseStudy } from '../../types/portfolio';
import { ArrowUpRight, AlertCircle, ArrowRight } from 'lucide-react';

interface SelectedWorkProps {
  onOpenCaseStudy?: (study: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
              onClick={() => onOpenCaseStudy && onOpenCaseStudy(study)}
              className="group bg-white border border-studio-border hover:border-cobalt-600 transition-all duration-300 motion-elevate flex flex-col justify-between cursor-pointer overflow-hidden card-glow shadow-sm"
            >
              {/* Visual Mockup Cover */}
              {study.imageUrl && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-studio-black">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="bg-studio-black/80 backdrop-blur-sm px-2.5 py-1 border border-white/20 font-medium">
                      Konseptual Prototip
                    </span>
                    <span className="text-warmOrange-400 font-bold bg-studio-black/80 backdrop-blur-sm px-2 py-0.5 border border-warmOrange-500/30">
                      Case Study
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div>
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
                  <div className="space-y-2 pt-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black group-hover:text-cobalt-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-studio-muted leading-relaxed line-clamp-2">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Problem & Approach Teaser */}
                  <div className="bg-studio-bgLight/60 p-4 border border-studio-border/70 space-y-2 text-xs mt-4">
                    <div>
                      <span className="font-mono uppercase font-bold text-studio-black mr-2">Muammo:</span>
                      <span className="text-studio-muted line-clamp-2">{study.problem}</span>
                    </div>
                    <div>
                      <span className="font-mono uppercase font-bold text-cobalt-600 mr-2">Yechim:</span>
                      <span className="text-studio-dark line-clamp-2">{study.solution}</span>
                    </div>
                  </div>
                </div>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {study.deliverables.slice(0, 3).map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-block px-2.5 py-1 text-[11px] font-mono bg-slate-100 text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                  {study.deliverables.length > 3 && (
                    <span className="inline-block px-2 py-1 text-[11px] font-mono bg-slate-100 text-slate-400">
                      +{study.deliverables.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-studio-muted">
                  Batafsil keys tahlili
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cobalt-600 group-hover:text-cobalt-800 transition-colors">
                  <span>To‘liq ochish</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
