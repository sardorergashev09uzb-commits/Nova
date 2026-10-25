import React, { useState } from 'react';
import { ProjectBriefData } from '../../types/brief';
import { Button } from '../ui/Button';
import {
  CheckCircle2,
  Copy,
  Check,
  Download,
  RotateCcw,
  Sparkles,
  ExternalLink,
  MessageSquare,
  FileCheck,
} from 'lucide-react';

interface BriefSuccessViewProps {
  data: ProjectBriefData;
  referenceCode?: string;
  onReset: () => void;
}

export const BriefSuccessView: React.FC<BriefSuccessViewProps> = ({
  data,
  referenceCode: propRefCode,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);
  const [referenceCode] = useState(() => {
    if (propRefCode) return propRefCode;
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `NV-BRIEF-2026-${randomNum}`;
  });

  const formattedBriefSummary = `=========================================
NOVA® DIGITAL STUDIO — LOYIHA BRIEFI
Ariza kodi: ${referenceCode}
Sana: ${new Date().toLocaleDateString('uz-UZ')}
=========================================

1. ALOQA & KOMPANIYA:
- Ism: ${data.fullName}
- Kompaniya: ${data.companyName} ${data.roleOrPosition ? `(${data.roleOrPosition})` : ''}
- Pochta: ${data.email}
- Telefon / Telegram: ${data.phoneOrTelegram}

2. LOYIHA MOHIYATI:
- Veb-sayt turi: ${data.websiteType}
- Faoliyat sohasi: ${data.businessDescription}
- Asosiy maqsad: ${data.projectGoal}
- Maqsadli auditoriya: ${data.targetAudience || "Ko'rsatilmagan"}

3. QAMROV VA FUNKSIYALAR:
- Sahifalar (${data.pagesNeeded.length} ta): ${data.pagesNeeded.join(', ') || 'Standart'}
- Muhim imkoniyatlar (${data.mustHaveFeatures.length} ta): ${data.mustHaveFeatures.join(', ') || 'Standart'}
- Brending holati: ${data.hasBrandIdentity}
- Namuna / Havolalar: ${data.referenceWebsites || "Yo'q"}

4. BYUDJET VA MUDDAT:
- Byudjet diapazoni: ${data.budgetRange}
- Topshirish muddati: ${data.targetLaunchDate}
- Qo'shimcha izohlar: ${data.additionalNotes || "Yo'q"}
=========================================`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(formattedBriefSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Nusxalashda xatolik:', e);
    }
  };

  const handleDownloadJson = () => {
    const exportData = {
      referenceCode,
      generatedAt: new Date().toISOString(),
      studio: 'NOVA® Digital Studio',
      mode: 'frontend-demo-brief',
      brief: data,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${referenceCode}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white border-2 border-emerald-600 p-6 sm:p-8 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                Muvaffaqiyatli Shakllantirildi
              </div>
              <h3 className="font-display font-bold text-2xl text-studio-black">
                Loyiha Briefi Tayyor
              </h3>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Ariza Referens Kodi
            </span>
            <span className="font-mono text-sm sm:text-base font-bold text-cobalt-700 bg-slate-100 px-3 py-1 inline-block border border-slate-200">
              {referenceCode}
            </span>
          </div>
        </div>

        <div className="pt-6 space-y-4">
          <p className="text-sm text-studio-dark leading-relaxed font-sans">
            Rahmat, <span className="font-bold">{data.fullName}</span>! Sizning <span className="font-bold text-cobalt-600">{data.companyName}</span> loyihasi uchun bergan barcha talablaringiz tizimlashtirildi va to‘liq brief xulosasi yaratildi.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="warm"
              size="md"
              onClick={handleCopySummary}
              className="cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-white" />
                  Brief Nusxalandi!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Brief Matnini Nusxalash
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={handleDownloadJson}
              className="cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              JSON Faylini Yuklab Olish
            </Button>

            <Button
              variant="ghost"
              size="md"
              onClick={onReset}
              className="text-slate-600 hover:text-studio-black cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Yangi Brief Boshlash
            </Button>
          </div>
        </div>
      </div>

      {/* Structured Summary Box */}
      <div className="bg-studio-black text-white p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-studio-charcoal pb-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-warmOrange-500" />
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
              Shakllangan Brief Xulosasi
            </h4>
          </div>
          <span className="text-[11px] font-mono text-warmOrange-400">
            {data.websiteType}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
          <div className="space-y-4">
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Kompaniya & Aloqa</span>
              <p className="font-bold text-sm text-white">{data.companyName}</p>
              <p className="text-slate-300 mt-0.5">{data.fullName} · {data.email}</p>
              <p className="font-mono text-warmOrange-300 text-xs mt-0.5">{data.phoneOrTelegram}</p>
            </div>

            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Asosiy Maqsad</span>
              <p className="text-slate-200 leading-relaxed font-medium">{data.projectGoal}</p>
            </div>

            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Faoliyat Sohasi</span>
              <p className="text-slate-300 leading-relaxed">{data.businessDescription}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">Byudjet & Muddat</span>
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-warmOrange-400 text-sm">
                  {data.budgetRange}
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 font-sans">{data.targetLaunchDate}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">
                Sahifalar ({data.pagesNeeded.length} ta)
              </span>
              <p className="text-slate-300 leading-relaxed">
                {data.pagesNeeded.join(', ') || 'Standart sahifalar'}
              </p>
            </div>

            <div>
              <span className="text-slate-400 block font-mono uppercase text-[10px] mb-1">
                Muhim Funksiyalar ({data.mustHaveFeatures.length} ta)
              </span>
              <p className="text-slate-300 leading-relaxed">
                {data.mustHaveFeatures.join(', ') || 'Standart imkoniyatlar'}
              </p>
            </div>
          </div>
        </div>

        {/* Studio Next Steps */}
        <div className="pt-4 border-t border-studio-charcoal">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            NOVA® bilan ishlashning keyingi 3 bosqichi:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-3 bg-studio-charcoal/50 border border-studio-charcoal">
              <span className="font-mono text-warmOrange-400 font-bold block mb-1">01. Tahlil</span>
              <span>Briefingiz o‘rganilib, texnik imkoniyatlar solishtiriladi.</span>
            </div>
            <div className="p-3 bg-studio-charcoal/50 border border-studio-charcoal">
              <span className="font-mono text-warmOrange-400 font-bold block mb-1">02. Smeta & Reja</span>
              <span>Bosqichma-bosqich kalendar reja va aniq byudjet hisoblanadi.</span>
            </div>
            <div className="p-3 bg-studio-charcoal/50 border border-studio-charcoal">
              <span className="font-mono text-warmOrange-400 font-bold block mb-1">03. Dizayn & Kod</span>
              <span>Individual tahririy dizayn va toza frontend ishlab chiqiladi.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
