import React from 'react';
import { ProjectBriefData } from '../../types/brief';
import { Check, CheckSquare, Square, Link as LinkIcon } from 'lucide-react';

interface StepFeaturesScopeProps {
  data: ProjectBriefData;
  onChange: (field: keyof ProjectBriefData, value: any) => void;
}

export const StepFeaturesScope: React.FC<StepFeaturesScopeProps> = ({
  data,
  onChange,
}) => {
  const availablePages = [
    { id: 'home', label: 'Bosh sahifa (Hero, xizmatlar, keyslar, CTA)' },
    { id: 'services', label: 'Xizmatlar / Takliflar taqdimoti' },
    { id: 'about', label: 'Kompaniya haqida / Jamoa va qadriyatlar' },
    { id: 'portfolio', label: 'Portfolio / Real keyslar va natijalar' },
    { id: 'catalog', label: 'Mahsulotlar katalogi / Toifalar' },
    { id: 'pricing', label: 'Narxlar / Paketlar va kalkulyator' },
    { id: 'contact', label: 'Aloqa / Xarita va to‘g‘ridan-to‘g‘ri shakl' },
    { id: 'blog', label: 'Blog / Ekspert maqolalari va yangiliklar' },
    { id: 'dashboard', label: 'Shaxsiy kabinet / Foydalanuvchi paneli' },
  ];

  const availableFeatures = [
    { id: 'responsive', label: '100% Moslashuvchan dizayn (Mobile/Tablet/Desktop)' },
    { id: 'multilingual', label: 'Ko‘p tillilik (O‘zbek, Rus, Ingliz)' },
    { id: 'telegram', label: 'Telegram-bot bilan zudlikda bildirishnomalar' },
    { id: 'cms', label: 'CMS boshqaruv paneli (Matn va rasmlarni mustaqil yangilash)' },
    { id: 'seo', label: 'SEO optimizatsiya (Google qidiruvida tez topilish)' },
    { id: 'interactive', label: 'Yuqori darajadagi interaktiv animatsiyalar va mikro-o‘tishlar' },
    { id: 'calculator', label: 'Maxsus narx hisoblash yoki filtrli qidiruv tizimi' },
    { id: 'darkmode', label: 'Mavzular almashtirish (Dark / Light rejimlari)' },
  ];

  const brandOptions: {
    value: 'yes' | 'partial' | 'no';
    title: string;
    desc: string;
  }[] = [
    {
      value: 'yes',
      title: 'To‘liq brendbook mavjud',
      desc: 'Logotip, shriftlar, ranglar palitrasi va korporativ uslub qoidalari tayyor.',
    },
    {
      value: 'partial',
      title: 'Faqat logotip bor',
      desc: 'Logotip mavjud, lekin sayt uchun qo‘shimcha vizual uslub va shrift tanlash kerak.',
    },
    {
      value: 'no',
      title: 'Hozircha brending yo‘q',
      desc: 'Noldan boshlaymiz, vizual identifikatsiya va logotip dizayni ham zarur.',
    },
  ];

  const togglePage = (pageLabel: string) => {
    const exists = data.pagesNeeded.includes(pageLabel);
    if (exists) {
      onChange('pagesNeeded', data.pagesNeeded.filter((p) => p !== pageLabel));
    } else {
      onChange('pagesNeeded', [...data.pagesNeeded, pageLabel]);
    }
  };

  const toggleFeature = (featureLabel: string) => {
    const exists = data.mustHaveFeatures.includes(featureLabel);
    if (exists) {
      onChange('mustHaveFeatures', data.mustHaveFeatures.filter((f) => f !== featureLabel));
    } else {
      onChange('mustHaveFeatures', [...data.mustHaveFeatures, featureLabel]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-studio-border pb-4">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-studio-black">
          Sahifalar, Funksiyalar va Brending
        </h3>
        <p className="text-sm text-studio-muted mt-1 font-sans">
          Sayt tarkibiga qaysi sahifalar kirishi va qanday texnik imkoniyatlar muhimligini belgilang.
        </p>
      </div>

      {/* Pages Needed Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Mo‘ljallangan Sahifalar
          </label>
          <span className="text-xs font-mono text-studio-muted">
            Tanlandi: {data.pagesNeeded.length} ta
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {availablePages.map((page) => {
            const isChecked = data.pagesNeeded.includes(page.label);
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => togglePage(page.label)}
                className={`text-left p-3.5 border transition-colors flex items-start gap-3 cursor-pointer ${
                  isChecked
                    ? 'border-cobalt-600 bg-cobalt-50/40 text-studio-black'
                    : 'border-studio-border bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                <div
                  className={`mt-0.5 w-4 h-4 rounded-none border flex items-center justify-center flex-shrink-0 ${
                    isChecked
                      ? 'bg-cobalt-600 border-cobalt-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs sm:text-sm font-sans leading-snug">
                  {page.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Must-have Features Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
            Muhim Texnik Funksiyalar va Imkoniyatlar
          </label>
          <span className="text-xs font-mono text-studio-muted">
            Tanlandi: {data.mustHaveFeatures.length} ta
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {availableFeatures.map((feat) => {
            const isChecked = data.mustHaveFeatures.includes(feat.label);
            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => toggleFeature(feat.label)}
                className={`text-left p-3.5 border transition-colors flex items-start gap-3 cursor-pointer ${
                  isChecked
                    ? 'border-cobalt-600 bg-cobalt-50/40 text-studio-black'
                    : 'border-studio-border bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                <div
                  className={`mt-0.5 w-4 h-4 rounded-none border flex items-center justify-center flex-shrink-0 ${
                    isChecked
                      ? 'bg-cobalt-600 border-cobalt-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs sm:text-sm font-sans leading-snug">
                  {feat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Identity Status */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Brending va Vizual Uslub Holati
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brandOptions.map((opt) => {
            const isSelected = data.hasBrandIdentity === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('hasBrandIdentity', opt.value)}
                className={`text-left p-4 border transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-cobalt-600 bg-cobalt-50/50 ring-1 ring-cobalt-600'
                    : 'border-studio-border bg-white hover:border-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-sm text-studio-black">
                    {opt.title}
                  </h4>
                  <span
                    className={`w-3 h-3 rounded-full border ${
                      isSelected
                        ? 'border-cobalt-600 bg-cobalt-600'
                        : 'border-slate-300 bg-white'
                    }`}
                  />
                </div>
                <p className="text-xs text-studio-muted font-sans leading-relaxed">
                  {opt.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Reference Websites */}
      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
          Namuna yoki Yoqqan Veb-saytlar <span className="text-slate-400 font-normal font-sans lowercase">(ixtiyoriy)</span>
        </label>
        <div className="relative">
          <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
            <LinkIcon className="w-4 h-4" />
          </div>
          <textarea
            rows={2}
            value={data.referenceWebsites || ''}
            onChange={(e) => onChange('referenceWebsites', e.target.value)}
            placeholder="Masalan: apple.com kabi katta tipografika, stripe.com animatsiyalari, linear.app toza strukturasi..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-studio-border text-sm font-sans text-studio-black focus:outline-none focus:border-cobalt-600 transition-colors resize-y"
          />
        </div>
      </div>
    </div>
  );
};
