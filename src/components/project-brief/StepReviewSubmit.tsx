import React from 'react';
import { ProjectBriefData } from '../../types/brief';
import { Button } from '../ui/Button';
import {
  User,
  Building2,
  Mail,
  Phone,
  Layout,
  Target,
  Layers,
  Sparkles,
  DollarSign,
  Calendar,
  Edit3,
  CheckCircle2,
  ShieldCheck,
  Send,
} from 'lucide-react';

interface StepReviewSubmitProps {
  data: ProjectBriefData;
  onEditStep: (stepNumber: 1 | 2 | 3 | 4) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export const StepReviewSubmit: React.FC<StepReviewSubmitProps> = ({
  data,
  onEditStep,
  onSubmit,
  isSubmitting = false,
}) => {
  const brandLabels: Record<string, string> = {
    yes: 'To‘liq brendbook mavjud',
    partial: 'Faqat logotip bor',
    no: 'Brending hozircha yo‘q (Noldan kerak)',
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-studio-border pb-4">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-studio-black">
          Loyiha Briefini Tekshirish va Tasdiqlash
        </h3>
        <p className="text-sm text-studio-muted mt-1 font-sans">
          Topshirishdan oldin kiritilgan ma'lumotlarni ko‘rib chiqing. Har qanday bo‘limni tahrirlashingiz mumkin.
        </p>
      </div>

      <div className="space-y-6">
        {/* Section 1: Aloqa & Kompaniya */}
        <div className="bg-white border border-studio-border p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cobalt-600 font-bold">01.</span>
              <h4 className="font-display font-bold text-base text-studio-black">
                Aloqa va Kompaniya
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-xs font-mono text-cobalt-600 hover:text-warmOrange-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Tahrirlash</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Buyurtmachi</span>
              <span className="font-semibold text-studio-black text-sm">{data.fullName}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Kompaniya</span>
              <span className="font-semibold text-studio-black text-sm">{data.companyName}</span>
              {data.roleOrPosition && (
                <span className="text-slate-500 block text-xs">({data.roleOrPosition})</span>
              )}
            </div>
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Elektron pochta</span>
              <span className="font-mono text-studio-black">{data.email}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Telefon / Telegram</span>
              <span className="font-mono text-studio-black">{data.phoneOrTelegram}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Veb-sayt Turi va Maqsad */}
        <div className="bg-white border border-studio-border p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cobalt-600 font-bold">02.</span>
              <h4 className="font-display font-bold text-base text-studio-black">
                Loyiha Yo‘nalishi va Maqsad
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="text-xs font-mono text-cobalt-600 hover:text-warmOrange-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Tahrirlash</span>
            </button>
          </div>

          <div className="space-y-3 text-xs sm:text-sm font-sans">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 font-mono uppercase text-[10px]">Tanlangan format:</span>
              <span className="px-3 py-1 bg-cobalt-100 text-cobalt-800 font-mono font-bold text-xs">
                {data.websiteType}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-0.5">Faoliyat sohasi:</span>
              <p className="text-studio-black leading-relaxed">{data.businessDescription}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-0.5">Asosiy maqsad:</span>
              <p className="text-studio-black font-medium leading-relaxed">{data.projectGoal}</p>
            </div>
            {data.targetAudience && (
              <div>
                <span className="text-slate-400 block font-mono uppercase text-[10px] mb-0.5">Maqsadli auditoriya:</span>
                <p className="text-studio-muted">{data.targetAudience}</p>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Sahifalar va Funksiyalar */}
        <div className="bg-white border border-studio-border p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cobalt-600 font-bold">03.</span>
              <h4 className="font-display font-bold text-base text-studio-black">
                Qamrov, Funksiyalar va Brending
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="text-xs font-mono text-cobalt-600 hover:text-warmOrange-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Tahrirlash</span>
            </button>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-2">
                Kerakli Sahifalar ({data.pagesNeeded.length} ta):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.pagesNeeded.length > 0 ? (
                  data.pagesNeeded.map((page, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-sans"
                    >
                      {page}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400 italic">Sahifalar tanlanmagan</span>
                )}
              </div>
            </div>

            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-2">
                Muhim Funksiyalar ({data.mustHaveFeatures.length} ta):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.mustHaveFeatures.length > 0 ? (
                  data.mustHaveFeatures.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-cobalt-50 border border-cobalt-200 text-cobalt-900 text-xs font-sans"
                    >
                      {feat}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400 italic">Maxsus funksiyalar tanlanmagan</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Brending holati:</span>
                <span className="font-semibold text-studio-black">
                  {brandLabels[data.hasBrandIdentity] || data.hasBrandIdentity}
                </span>
              </div>
              {data.referenceWebsites && (
                <div>
                  <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Namuna saytlar:</span>
                  <span className="text-studio-muted">{data.referenceWebsites}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section 4: Byudjet va Muddat */}
        <div className="bg-white border border-studio-border p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cobalt-600 font-bold">04.</span>
              <h4 className="font-display font-bold text-base text-studio-black">
                Byudjet va Muddat
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onEditStep(4)}
              className="text-xs font-mono text-cobalt-600 hover:text-warmOrange-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Tahrirlash</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Byudjet Diapazoni</span>
              <span className="text-base font-mono font-bold text-studio-black text-warmOrange-600">
                {data.budgetRange}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Topshirish Muddati</span>
              <span className="text-base font-display font-bold text-studio-black">
                {data.targetLaunchDate}
              </span>
            </div>
            {data.additionalNotes && (
              <div className="sm:col-span-2 pt-2 border-t border-slate-100">
                <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Qo‘shimcha izohlar:</span>
                <p className="text-studio-muted leading-relaxed">{data.additionalNotes}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Transparent Frontend-Only Demo Notice */}
      <div className="p-5 bg-warmOrange-50/70 border border-warmOrange-200 text-xs font-sans text-warmOrange-950 space-y-2">
        <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-warmOrange-800 font-bold">
          <ShieldCheck className="w-4 h-4 text-warmOrange-600" />
          <span>Frontend Demo Rejimi Shaffofligi</span>
        </div>
        <p className="leading-relaxed">
          Ushbu veb-sayt NOVA® studiyasining interaktiv konseptual namoyish loyihasidir. Siz yuborgan brief hech qanday yopiq server yoki tashqi ma'lumotlar bazasida saqlanmaydi. Topshirish tugmasini bosganingizda, tizim to‘liq shakllantirilgan loyiha xulosasini taqdim etadi — uni bir tugma bilan nusxalab olishingiz yoki saqlab qo‘yishingiz mumkin.
        </p>
      </div>

      {/* Submission CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-studio-border">
        <button
          type="button"
          onClick={() => onEditStep(4)}
          className="text-xs font-mono text-slate-500 hover:text-studio-black transition-colors"
        >
          ← Ortga: 4-bosqichga qaytish
        </button>

        <Button
          variant="warm"
          size="lg"
          icon="arrow-right"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[260px] justify-center cursor-pointer"
        >
          {isSubmitting ? 'Shakllantirilmoqda...' : 'Briefni Tasdiqlash va Topshirish'}
        </Button>
      </div>
    </div>
  );
};
