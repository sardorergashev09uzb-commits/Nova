import React, { useState } from 'react';
import { StoredBrief, BriefStatus } from '../../types/admin';
import { Button } from '../ui/Button';
import {
  X,
  Mail,
  Phone,
  Building2,
  Calendar,
  DollarSign,
  Layers,
  Sparkles,
  ExternalLink,
  Save,
  Trash2,
  CheckCircle2,
} from 'lucide-react';

interface AdminBriefDetailModalProps {
  brief: StoredBrief | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (id: string, newStatus: BriefStatus) => void;
  onSaveNotes: (id: string, notes: string) => void;
  onDelete: (id: string) => void;
}

export const AdminBriefDetailModal: React.FC<AdminBriefDetailModalProps> = ({
  brief,
  isOpen,
  onClose,
  onStatusChange,
  onSaveNotes,
  onDelete,
}) => {
  if (!isOpen || !brief) return null;

  const [notes, setNotes] = useState(brief.adminNotes || '');
  const [savedNotesFeedback, setSavedNotesFeedback] = useState(false);

  const statusOptions: { value: BriefStatus; label: string; color: string }[] = [
    { value: 'yangi', label: 'Yangi Ariza', color: 'bg-warmOrange-500 text-white' },
    { value: "ko'rib_chiqilmoqda", label: 'Ko‘rib chiqilmoqda', color: 'bg-cobalt-600 text-white' },
    { value: 'taklif_yuborildi', label: 'Taklif yuborildi', color: 'bg-indigo-600 text-white' },
    { value: 'qabul_qilindi', label: 'Qabul qilindi', color: 'bg-emerald-600 text-white' },
    { value: 'rad_etildi', label: 'Rad etildi', color: 'bg-red-600 text-white' },
    { value: 'arxivlandi', label: 'Arxivlandi', color: 'bg-slate-600 text-white' },
  ];

  const handleSaveNotes = () => {
    onSaveNotes(brief.id, notes);
    setSavedNotesFeedback(true);
    setTimeout(() => setSavedNotesFeedback(false), 2000);
  };

  const getCleanTelegramLink = (handleOrPhone: string) => {
    if (handleOrPhone.startsWith('@')) {
      return `https://t.me/${handleOrPhone.replace('@', '')}`;
    }
    const digits = handleOrPhone.replace(/\D/g, '');
    if (digits) {
      return `https://t.me/+${digits}`;
    }
    return `https://t.me/`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-studio-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full border-2 border-studio-black p-6 sm:p-10 relative shadow-2xl space-y-8 my-auto">
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-studio-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold text-cobalt-600">
                {brief.referenceCode}
              </span>
              <span className="text-slate-300">·</span>
              <span className="font-mono text-xs text-slate-500">
                {new Date(brief.createdAt).toLocaleString('uz-UZ')}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-studio-black">
              {brief.data.companyName}
            </h3>
            <p className="text-xs font-mono text-slate-500">
              Buyurtmachi: {brief.data.fullName}{' '}
              {brief.data.roleOrPosition && `(${brief.data.roleOrPosition})`}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-studio-black cursor-pointer transition-colors"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Switcher Row */}
        <div className="bg-slate-50 border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-studio-charcoal font-bold">
              Loyiha Statusi:
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onStatusChange(brief.id, opt.value)}
                className={`px-3 py-1 text-xs font-mono transition-all cursor-pointer border ${
                  brief.status === opt.value
                    ? `${opt.color} font-bold border-transparent shadow-sm`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Client Contacts with Quick Action Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a
            href={`mailto:${brief.data.email}`}
            className="p-3 border border-slate-200 bg-white hover:border-cobalt-600 transition-colors flex items-center gap-2.5 text-xs font-mono text-studio-black group"
          >
            <Mail className="w-4 h-4 text-cobalt-600 shrink-0" />
            <span className="truncate">{brief.data.email}</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cobalt-600 ml-auto" />
          </a>

          <a
            href={getCleanTelegramLink(brief.data.phoneOrTelegram)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-200 bg-white hover:border-warmOrange-600 transition-colors flex items-center gap-2.5 text-xs font-mono text-studio-black group"
          >
            <Phone className="w-4 h-4 text-warmOrange-600 shrink-0" />
            <span className="truncate">{brief.data.phoneOrTelegram}</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-warmOrange-600 ml-auto" />
          </a>

          <div className="p-3 border border-slate-200 bg-slate-50 flex items-center gap-2 text-xs font-mono text-slate-600">
            <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">{brief.data.companyName}</span>
          </div>
        </div>

        {/* Detailed Brief Content Breakdown */}
        <div className="space-y-6 text-xs sm:text-sm font-sans">
          <div className="space-y-1">
            <span className="text-slate-400 font-mono text-[11px] uppercase block">
              Tanlangan Veb-sayt Turi:
            </span>
            <span className="font-display font-bold text-lg text-cobalt-700">
              {brief.data.websiteType}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-mono text-[11px] uppercase block">
              Biznes Faoliyati:
            </span>
            <p className="text-studio-black leading-relaxed bg-slate-50 p-3 border border-slate-100">
              {brief.data.businessDescription}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-mono text-[11px] uppercase block">
              Asosiy Maqsad:
            </span>
            <p className="text-studio-black font-medium leading-relaxed bg-slate-50 p-3 border border-slate-100">
              {brief.data.projectGoal}
            </p>
          </div>

          {brief.data.targetAudience && (
            <div className="space-y-1">
              <span className="text-slate-400 font-mono text-[11px] uppercase block">
                Maqsadli Auditoriya:
              </span>
              <p className="text-studio-muted">{brief.data.targetAudience}</p>
            </div>
          )}

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-studio-bgLight border border-studio-border">
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block mb-1">
                Mo‘ljallangan Byudjet:
              </span>
              <span className="font-mono text-base font-bold text-warmOrange-600">
                {brief.data.budgetRange}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block mb-1">
                Ishga Tushirish Muddati:
              </span>
              <span className="font-display font-bold text-base text-studio-black">
                {brief.data.targetLaunchDate}
              </span>
            </div>
          </div>

          {/* Pages & Features Pills */}
          <div className="space-y-3">
            <span className="text-slate-400 font-mono text-[11px] uppercase block">
              Talab Qilingan Sahifalar ({brief.data.pagesNeeded.length} ta):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {brief.data.pagesNeeded.map((page, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white border border-slate-200 text-xs font-sans"
                >
                  {page}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-slate-400 font-mono text-[11px] uppercase block">
              Muhim Imkoniyatlar ({brief.data.mustHaveFeatures.length} ta):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {brief.data.mustHaveFeatures.map((feat, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-cobalt-50 border border-cobalt-200 text-cobalt-800 text-xs font-sans"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {brief.data.referenceWebsites && (
            <div className="space-y-1">
              <span className="text-slate-400 font-mono text-[11px] uppercase block">
                Namuna Havolalar:
              </span>
              <p className="text-xs font-mono text-slate-600 bg-slate-50 p-2.5 border border-slate-200">
                {brief.data.referenceWebsites}
              </p>
            </div>
          )}

          {brief.data.additionalNotes && (
            <div className="space-y-1">
              <span className="text-slate-400 font-mono text-[11px] uppercase block">
                Mijozning Qo‘shimcha Izohi:
              </span>
              <p className="text-xs text-studio-muted">{brief.data.additionalNotes}</p>
            </div>
          )}
        </div>

        {/* Studio Internal Notes Section */}
        <div className="space-y-3 pt-4 border-t border-studio-border">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono uppercase tracking-wider text-studio-black font-bold">
              Ichki Studiya Qaydlari (Faqat jamoa uchun)
            </label>
            {savedNotesFeedback && (
              <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Qayd saqlandi!</span>
              </span>
            )}
          </div>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Mijoz bilan suhbat xulosasi, smeta raqamlari yoki keyingi qadamlar..."
            className="w-full p-3 bg-slate-50 border border-studio-border text-xs font-sans text-studio-black focus:outline-none focus:border-cobalt-600 resize-y"
          />
          <div className="flex justify-end">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleSaveNotes}
              className="cursor-pointer"
            >
              <Save className="w-3.5 h-3.5 mr-1.5" />
              Qaydni Saqlash
            </Button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-studio-border">
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Haqiqatan ham ushbu briefni o‘chirmoqchimisiz?')) {
                onDelete(brief.id);
                onClose();
              }
            }}
            className="text-xs font-mono text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Briefni O‘chirish</span>
          </button>

          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={onClose}
            className="cursor-pointer"
          >
            Yopish
          </Button>
        </div>
      </div>
    </div>
  );
};
