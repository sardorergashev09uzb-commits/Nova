import React, { useState } from 'react';
import { StoredBrief, BriefStatus, BriefFilterOptions } from '../../types/admin';
import { WebsiteType } from '../../types/brief';
import { Badge } from '../ui/Badge';
import { Search, Filter, Eye, ChevronRight, Inbox } from 'lucide-react';

interface AdminBriefsTableProps {
  briefs: StoredBrief[];
  onSelectBrief: (brief: StoredBrief) => void;
}

export const AdminBriefsTable: React.FC<AdminBriefsTableProps> = ({
  briefs,
  onSelectBrief,
}) => {
  const [filters, setFilters] = useState<BriefFilterOptions>({
    status: 'barchasi',
    websiteType: 'barchasi',
    searchQuery: '',
  });

  const statusMap: Record<BriefStatus, { label: string; badge: 'orange' | 'cobalt' | 'neutral' | 'dark' }> = {
    yangi: { label: 'Yangi', badge: 'orange' },
    "ko'rib_chiqilmoqda": { label: 'Jarayonda', badge: 'cobalt' },
    taklif_yuborildi: { label: 'Taklif yuborildi', badge: 'cobalt' },
    qabul_qilindi: { label: 'Qabul qilindi', badge: 'neutral' },
    rad_etildi: { label: 'Rad etildi', badge: 'dark' },
    arxivlandi: { label: 'Arxivlandi', badge: 'dark' },
  };

  const filtered = briefs.filter((b) => {
    // Status match
    if (filters.status !== 'barchasi' && b.status !== filters.status) {
      return false;
    }
    // Type match
    if (filters.websiteType !== 'barchasi' && b.data.websiteType !== filters.websiteType) {
      return false;
    }
    // Search match
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      const matchName = b.data.fullName.toLowerCase().includes(q);
      const matchCompany = b.data.companyName.toLowerCase().includes(q);
      const matchEmail = b.data.email.toLowerCase().includes(q);
      const matchPhone = b.data.phoneOrTelegram.toLowerCase().includes(q);
      const matchRef = b.referenceCode.toLowerCase().includes(q);
      if (!matchName && !matchCompany && !matchEmail && !matchPhone && !matchRef) {
        return false;
      }
    }
    return true;
  });

  const statusesList: { value: BriefStatus | 'barchasi'; label: string }[] = [
    { value: 'barchasi', label: 'Barcha Statuslar' },
    { value: 'yangi', label: 'Yangi Arizalar' },
    { value: "ko'rib_chiqilmoqda", label: 'Jarayonda' },
    { value: 'taklif_yuborildi', label: 'Taklif Yuborildi' },
    { value: 'qabul_qilindi', label: 'Qabul Qilindi' },
    { value: 'rad_etildi', label: 'Rad Etildi' },
  ];

  const typesList: (WebsiteType | 'barchasi')[] = [
    'barchasi',
    'Landing Page',
    'Business Website',
    'Product Catalog',
    'Custom Web App',
  ];

  return (
    <div className="bg-white border border-studio-border shadow-sm space-y-4">
      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-6 border-b border-studio-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setFilters((p) => ({ ...p, searchQuery: e.target.value }))}
            placeholder="Qidiruv: ism, kompaniya, email, kod..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-studio-border text-xs font-mono text-studio-black focus:outline-none focus:border-cobalt-600 transition-colors"
          />
        </div>

        {/* Website Type Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 uppercase">Format:</span>
          <select
            value={filters.websiteType}
            onChange={(e) =>
              setFilters((p) => ({ ...p, websiteType: e.target.value as any }))
            }
            className="px-3 py-2 bg-slate-50 border border-studio-border text-xs font-mono text-studio-black focus:outline-none cursor-pointer"
          >
            {typesList.map((t) => (
              <option key={t} value={t}>
                {t === 'barchasi' ? 'Barcha formatlar' : t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="px-4 sm:px-6 flex overflow-x-auto gap-2 pb-1 scroll-indicator">
        {statusesList.map((s) => {
          const isActive = filters.status === s.value;
          return (
            <button
              key={s.value}
              type="button"
              onClick={() => setFilters((p) => ({ ...p, status: s.value }))}
              className={`px-3 py-1.5 text-xs font-mono whitespace-nowrap transition-colors cursor-pointer border ${
                isActive
                  ? 'bg-studio-black text-white border-studio-black font-bold'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto scroll-indicator">
        {filtered.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <Inbox className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-sans text-studio-muted">
              Hech qanday ariza topilmadi. Qidiruv so‘zini o‘zgartiring yoki filtrlarni tozalang.
            </p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="border-y border-studio-border bg-slate-50/60 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-3 px-6">Referens & Sana</th>
                <th className="py-3 px-6">Mijoz / Kompaniya</th>
                <th className="py-3 px-6">Loyiha Formati</th>
                <th className="py-3 px-6">Byudjet & Muddat</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Amal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-studio-border text-xs font-sans">
              {filtered.map((brief) => {
                const statusMeta = statusMap[brief.status] || {
                  label: brief.status,
                  badge: 'neutral',
                };
                return (
                  <tr
                    key={brief.id}
                    onClick={() => onSelectBrief(brief)}
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                  >
                    {/* Ref & Date */}
                    <td className="py-4 px-6 font-mono">
                      <span className="font-bold text-cobalt-600 block group-hover:underline">
                        {brief.referenceCode}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {new Date(brief.createdAt).toLocaleDateString('uz-UZ')}
                      </span>
                    </td>

                    {/* Client & Company */}
                    <td className="py-4 px-6">
                      <span className="font-bold text-studio-black block text-sm">
                        {brief.data.companyName}
                      </span>
                      <span className="text-slate-500 text-xs block">
                        {brief.data.fullName} · {brief.data.email}
                      </span>
                    </td>

                    {/* Website Type */}
                    <td className="py-4 px-6 font-mono text-xs">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-medium">
                        {brief.data.websiteType}
                      </span>
                    </td>

                    {/* Budget & Timeline */}
                    <td className="py-4 px-6 font-mono">
                      <span className="font-bold text-warmOrange-600 block">
                        {brief.data.budgetRange}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {brief.data.targetLaunchDate}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-6">
                      <Badge variant={statusMeta.badge}>{statusMeta.label}</Badge>
                    </td>

                    {/* Action button */}
                    <td className="py-4 px-6 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectBrief(brief);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold text-cobalt-600 hover:text-white hover:bg-cobalt-600 border border-cobalt-200 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ochish</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Ko‘rsatilmoqda: {filtered.length} ta ariza</span>
        <span>Studiya ma'lumotlar bazasi faol</span>
      </div>
    </div>
  );
};
