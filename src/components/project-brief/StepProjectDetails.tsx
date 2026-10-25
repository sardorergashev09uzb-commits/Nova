import React from 'react';
import { ProjectBriefData, BriefValidationErrors, WebsiteType } from '../../types/brief';
import { Layout, Globe, Grid, Cpu, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

interface StepProjectDetailsProps {
  data: ProjectBriefData;
  errors: BriefValidationErrors;
  onChange: (field: keyof ProjectBriefData, value: any) => void;
  prefilledFromFinder?: boolean;
}

export const StepProjectDetails: React.FC<StepProjectDetailsProps> = ({
  data,
  errors,
  onChange,
  prefilledFromFinder,
}) => {
  const websiteTypes: {
    type: WebsiteType;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      type: 'Landing Page',
      title: 'Landing Page',
      description: 'Bitta asosiy maqsadga yo‘naltirilgan, yuqori konversiyali taqdimot sahifasi.',
      icon: <Layout className="w-5 h-5" />,
    },
    {
      type: 'Business Website',
      title: 'Business Website',
      description: 'Brend nufuzi, xizmatlar taqdimoti va ko‘p sahifali korporativ veb-sayt.',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      type: 'Product Catalog',
      title: 'Product Catalog',
      description: 'Mahsulotlar katalogi, toifalar, parametrlar bo‘yicha filtr va buyurtma yuborish.',
      icon: <Grid className="w-5 h-5" />,
    },
    {
      type: 'Custom Web App',
      title: 'Custom Web App',
      description: 'Shaxsiy kabinet, biznes jarayonlarni avtomatlashtirish va maxsus arxitektura.',
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      type: 'Not Sure',
      title: 'Hozircha aniq emas',
      description: 'Qaysi format to‘g‘ri kelishini studiya tahlili yordamida aniqlamoqchimiz.',
      icon: <HelpCircle className="w-5 h-5" />,
    },
  ];

  const commonGoals = [
    'Yangi mijozlar va sifatli lidlar jalb qilish',
    'Bozorda brend nufuzi va ishonchini mustahkamlash',
    'Mahsulotlar katalogini tizimli taqdim etish',
    'Mijozlar bilan ishlash jarayonini avtomatlashtirish',
    'Eski saytni zamonaviy standartlar bo‘yicha qayta qurish',
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-studio-border pb-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-studio-black">
              Loyiha Turi va Asosiy Maqsad
            </h3>
            <p className="text-sm text-studio-muted mt-1 font-sans">
              Biznesingiz nimaga muhtojligi va veb-sayt qanday asosiy natijani ta'minlashi kerakligini ko‘rsating.
            </p>
          </div>
          {prefilledFromFinder && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-warmOrange-50 text-warmOrange-700 border border-warmOrange-200 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-warmOrange-600" />
              <span>Solution Finder tavsiyasi asosida to‘ldirildi</span>
            </div>
          )}
        </div>
      </div>

      {/* Website Type Selector */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Kerakli Veb-sayt Turi <span className="text-warmOrange-600">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {websiteTypes.map((item) => {
            const isSelected = data.websiteType === item.type;
            return (
              <button
                key={item.type}
                type="button"
                onClick={() => onChange('websiteType', item.type)}
                className={`text-left p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-cobalt-600 bg-cobalt-50/50 shadow-sm ring-1 ring-cobalt-600'
                    : 'border-studio-border bg-white hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2.5 rounded-none border ${
                        isSelected
                          ? 'bg-cobalt-600 text-white border-cobalt-600'
                          : 'bg-slate-100 text-studio-dark border-slate-200'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-cobalt-600 bg-cobalt-600'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-studio-black mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-studio-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
        {errors.websiteType && (
          <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.websiteType}</span>
          </p>
        )}
      </div>

      {/* Business Description */}
      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Faoliyat Sohasi / Kompaniya nima bilan shug'ullanadi? <span className="text-warmOrange-600">*</span>
        </label>
        <textarea
          rows={3}
          value={data.businessDescription}
          onChange={(e) => onChange('businessDescription', e.target.value)}
          placeholder="Masalan: Biz Markaziy Osiyo va Yevropa o‘rtasida sanoat yuklarini xalqaro tashish bilan shug‘ullanamiz..."
          className={`w-full p-4 bg-white border text-sm font-sans text-studio-black transition-colors focus:outline-none resize-y ${
            errors.businessDescription
              ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
              : 'border-studio-border focus:border-cobalt-600'
          }`}
        />
        {errors.businessDescription && (
          <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.businessDescription}</span>
          </p>
        )}
      </div>

      {/* Primary Goal */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Loyiha Oldidagi Asosiy Maqsad <span className="text-warmOrange-600">*</span>
        </label>

        {/* Quick select chips */}
        <div className="flex flex-wrap gap-2 mb-2">
          {commonGoals.map((goal) => (
            <button
              key={goal}
              type="button"
              onClick={() => onChange('projectGoal', goal)}
              className={`text-xs px-3 py-1.5 border transition-colors cursor-pointer text-left ${
                data.projectGoal === goal
                  ? 'bg-studio-black text-white border-studio-black'
                  : 'bg-white text-studio-dark border-slate-200 hover:border-slate-400'
              }`}
            >
              + {goal}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={data.projectGoal}
          onChange={(e) => onChange('projectGoal', e.target.value)}
          placeholder="Yoki o‘zingiz yozing: sayt qanday natija berishi kutilmoqda..."
          className={`w-full p-3.5 bg-white border text-sm font-sans text-studio-black transition-colors focus:outline-none ${
            errors.projectGoal
              ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
              : 'border-studio-border focus:border-cobalt-600'
          }`}
        />
        {errors.projectGoal && (
          <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.projectGoal}</span>
          </p>
        )}
      </div>

      {/* Target Audience */}
      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Maqsadli Auditoriya (Saytingiz foydalanuvchilari kimlar?)
        </label>
        <input
          type="text"
          value={data.targetAudience}
          onChange={(e) => onChange('targetAudience', e.target.value)}
          placeholder="Masalan: B2B korporativ buyurtmachilar, xususiy xaridorlar yoki xalqaro hamkorlar"
          className="w-full p-3.5 bg-white border border-studio-border text-sm font-sans text-studio-black focus:outline-none focus:border-cobalt-600 transition-colors"
        />
      </div>
    </div>
  );
};
