import React from 'react';
import { ProjectBriefData, BriefValidationErrors } from '../../types/brief';
import { DollarSign, Clock, AlertCircle } from 'lucide-react';

interface StepBudgetTimelineProps {
  data: ProjectBriefData;
  errors: BriefValidationErrors;
  onChange: (field: keyof ProjectBriefData, value: any) => void;
}

export const StepBudgetTimeline: React.FC<StepBudgetTimelineProps> = ({
  data,
  errors,
  onChange,
}) => {
  const budgetOptions: {
    range: string;
    label: string;
    description: string;
  }[] = [
    {
      range: '$1,200 – $2,500',
      label: 'Ixcham & Aniq',
      description: 'Landing Page yoki startap uchun ixcham biznes taqdimot sayti.',
    },
    {
      range: '$2,500 – $5,000',
      label: 'Standart Korporativ',
      description: 'Ko‘p sahifali to‘liq biznes sayt, xizmatlar va keyslar taqdimoti.',
    },
    {
      range: '$5,000 – $10,000',
      label: 'Keng Ko‘lamli & Interaktiv',
      description: 'Filtrli mahsulot katalogi, ko‘p tillilik va maxsus interaktiv yechimlar.',
    },
    {
      range: '$10,000+',
      label: 'Maxsus Veb-ilova',
      description: 'Shaxsiy kabinet, murakkab biznes mantiq va tashqi API integratsiyalari.',
    },
    {
      range: 'Hozircha aniq emas',
      label: 'Maslahat zarur',
      description: 'Loyiha hajmi aniqlangach, optimal byudjetni birgalikda belgilaymiz.',
    },
  ];

  const timelineOptions = [
    {
      id: 'urgent',
      value: '2-3 hafta (Shoshilinch)',
      desc: 'Tezkor ishga tushirish talab qilinadigan ixcham loyihalar uchun.',
    },
    {
      id: 'standard',
      value: '4-6 hafta (Standart)',
      desc: 'Arxitektura, dizayn va dasturlash uchun eng maqbul sifatli davr.',
    },
    {
      id: 'large',
      value: '2-3 oy (Keng hajm)',
      desc: 'Ko‘p sahifali portal, katalog yoki maxsus arxitekturali tizimlar.',
    },
    {
      id: 'flexible',
      value: 'Moslashuvchan',
      desc: 'Sifat, tahririy yondashuv va puxta natija birinchi o‘rinda.',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-studio-border pb-4">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-studio-black">
          Byudjet Diapazoni va Muddat
        </h3>
        <p className="text-sm text-studio-muted mt-1 font-sans">
          Rejangizga mos byudjet va topshirish muddatini belgilash texnik arxitekturani to‘g‘ri shakllantirishga yordam beradi.
        </p>
      </div>

      {/* Budget Options */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Mo‘ljallangan Byudjet Diapazoni <span className="text-warmOrange-600">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {budgetOptions.map((opt) => {
            const isSelected = data.budgetRange === opt.range;
            return (
              <button
                key={opt.range}
                type="button"
                onClick={() => onChange('budgetRange', opt.range)}
                className={`text-left p-4 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-cobalt-600 bg-cobalt-50/50 shadow-sm ring-1 ring-cobalt-600'
                    : 'border-studio-border bg-white hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono font-bold text-studio-black">
                      {opt.range}
                    </span>
                    <span
                      className={`w-3 h-3 rounded-full border ${
                        isSelected
                          ? 'border-cobalt-600 bg-cobalt-600'
                          : 'border-slate-300 bg-white'
                      }`}
                    />
                  </div>
                  <div className="text-xs font-semibold text-cobalt-600 uppercase tracking-wider mb-1 font-mono">
                    {opt.label}
                  </div>
                  <p className="text-xs text-studio-muted font-sans leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
        {errors.budgetRange && (
          <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.budgetRange}</span>
          </p>
        )}
      </div>

      {/* Target Launch Date / Timeline */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Kutilayotgan Ishga Tushirish Muddati <span className="text-warmOrange-600">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {timelineOptions.map((opt) => {
            const isSelected = data.targetLaunchDate === opt.value;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange('targetLaunchDate', opt.value)}
                className={`text-left p-4 border transition-colors cursor-pointer flex items-start justify-between ${
                  isSelected
                    ? 'border-cobalt-600 bg-cobalt-50/50 ring-1 ring-cobalt-600'
                    : 'border-studio-border bg-white hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="font-display font-bold text-sm text-studio-black">
                      {opt.value}
                    </span>
                  </div>
                  <p className="text-xs text-studio-muted font-sans leading-relaxed pl-6">
                    {opt.desc}
                  </p>
                </div>
                <span
                  className={`w-3 h-3 rounded-full border mt-1 flex-shrink-0 ${
                    isSelected
                      ? 'border-cobalt-600 bg-cobalt-600'
                      : 'border-slate-300 bg-white'
                  }`}
                />
              </button>
            );
          })}
        </div>
        {errors.targetLaunchDate && (
          <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.targetLaunchDate}</span>
          </p>
        )}
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Qo‘shimcha Istaklar yoki Izohlar <span className="text-slate-400 font-normal font-sans lowercase">(ixtiyoriy)</span>
        </label>
        <textarea
          rows={3}
          value={data.additionalNotes || ''}
          onChange={(e) => onChange('additionalNotes', e.target.value)}
          placeholder="Loyiha bo‘yicha har qanday qo‘shimcha texnik talablar, integratsiya ehtiyojlari yoki alohida fikrlaringiz..."
          className="w-full p-3.5 bg-white border border-studio-border text-sm font-sans text-studio-black focus:outline-none focus:border-cobalt-600 transition-colors resize-y"
        />
      </div>
    </div>
  );
};
