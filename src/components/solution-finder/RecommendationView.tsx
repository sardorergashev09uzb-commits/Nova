import React from 'react';
import { RecommendationResult } from '../../types/solution-finder';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  FileText,
  HelpCircle,
  Layers
} from 'lucide-react';

interface RecommendationViewProps {
  recommendation: RecommendationResult;
  userAnswers: Record<string, string>;
  onEditAnswers: () => void;
  onReset: () => void;
  onProceedToBrief: (recommendation: RecommendationResult) => void;
}

export const RecommendationView: React.FC<RecommendationViewProps> = ({
  recommendation,
  userAnswers,
  onEditAnswers,
  onReset,
  onProceedToBrief,
}) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Top Banner / Verdict */}
      <div className="bg-studio-black text-white p-8 sm:p-10 border border-studio-charcoal space-y-6 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Badge variant="orange">Tavsiya Qilingan Format</Badge>
          <span className="text-xs font-mono text-slate-400">
            Mantiqiy Qoidalar Tahlili Natijasi
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {recommendation.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {recommendation.subtitle}
          </p>
        </div>

        <div className="pt-4 border-t border-studio-charcoal flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-warmOrange-400" />
            <span>Kutiladigan muddat: <strong className="text-white">{recommendation.estimatedTimeline}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Shaffof mantiqiy asos</span>
          </div>
        </div>
      </div>

      {/* Why This Format Fits */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cobalt-600 font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Nega aynan ushbu format sizga mos keladi?</span>
        </div>
        <div className="bg-white border border-studio-border p-6 sm:p-8 space-y-3">
          {recommendation.whyFit.map((reason, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-studio-dark">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-studio-black font-bold">
          <Layers className="w-4 h-4" />
          <span>Topshiriladigan Asosiy Natijalar (Deliverables):</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommendation.deliverables.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-studio-dark flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-cobalt-600 rounded-full shrink-0"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suitable Alternatives (if any) */}
      {recommendation.suitableAlternatives && recommendation.suitableAlternatives.length > 0 && (
        <div className="p-6 bg-slate-100 border border-slate-200 space-y-2 text-xs">
          <div className="font-mono uppercase font-bold text-slate-700 tracking-wider">
            Muqobil variantlar (Agar byudjet yoki shartlar o‘zgarsa):
          </div>
          <ul className="space-y-1 text-slate-600">
            {recommendation.suitableAlternatives.map((alt, idx) => (
              <li key={idx}>• {alt}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ethics & Guarantee Disclaimer */}
      <div className="p-5 bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 leading-relaxed space-y-1">
        <div className="font-bold flex items-center gap-1.5 font-mono">
          <HelpCircle className="w-4 h-4 text-amber-700" />
          <span>Shaffoflik eslatmasi:</span>
        </div>
        <p>
          Ushbu tavsiya siz kiritgan javoblar asosida deterministik (qoidalarga tayangan) algoritm orqali hisoblandi. Bu "sehrli AI kafolati" emas, balki loyihani to‘g‘ri texnik rejalashtirish uchun professional boshlang‘ich nuqtadir.
        </p>
      </div>

      {/* Bottom Actions Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-studio-border">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onEditAnswers}
            className="px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-studio-dark hover:text-cobalt-600 border border-slate-200 hover:border-slate-400 bg-white transition-colors cursor-pointer"
          >
            Javoblarni Tahrirlash
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Qayta Boshlash</span>
          </button>
        </div>

        <Button
          variant="warm"
          size="lg"
          icon="arrow-right"
          className="w-full sm:w-auto justify-center"
          onClick={() => onProceedToBrief(recommendation)}
        >
          Ushbu Yechim Bo‘yicha Brief Boshlash
        </Button>
      </div>
    </div>
  );
};
