import React from 'react';
import { AdminStats } from '../../types/admin';
import { FileText, Sparkles, Clock, CheckCircle2, DollarSign, PieChart } from 'lucide-react';

interface AdminStatsCardsProps {
  stats: AdminStats;
}

export const AdminStatsCards: React.FC<AdminStatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Total Briefs */}
      <div className="bg-white border border-studio-border p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-xs font-mono uppercase tracking-wider">Jami Arizalar</span>
          <FileText className="w-4 h-4 text-studio-dark" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display font-bold text-3xl text-studio-black">
            {stats.totalBriefs}
          </span>
          <span className="text-xs font-mono text-slate-400">ta brief</span>
        </div>
        <div className="text-[11px] font-mono text-emerald-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Barcha kanallar faol</span>
        </div>
      </div>

      {/* 2. New Leads (Action required) */}
      <div className="bg-white border border-studio-border p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-xs font-mono uppercase tracking-wider text-warmOrange-600 font-bold">
            Yangi Arizalar
          </span>
          <Sparkles className="w-4 h-4 text-warmOrange-500" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display font-bold text-3xl text-warmOrange-600">
            {stats.newLeads}
          </span>
          <span className="text-xs font-mono text-slate-400">ko‘rib chiqilmagan</span>
        </div>
        <div className="text-[11px] font-mono text-warmOrange-700 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-warmOrange-500 animate-pulse"></span>
          <span>Zudlikda javob kutilmoqda</span>
        </div>
      </div>

      {/* 3. In Progress */}
      <div className="bg-white border border-studio-border p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-xs font-mono uppercase tracking-wider">Jarayondagi Loyihalar</span>
          <Clock className="w-4 h-4 text-cobalt-600" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display font-bold text-3xl text-cobalt-700">
            {stats.inProgress}
          </span>
          <span className="text-xs font-mono text-slate-400">ta faol</span>
        </div>
        <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
          <span>Taklif va tahlil bosqichida</span>
        </div>
      </div>

      {/* 4. Top Format & Value */}
      <div className="bg-white border border-studio-border p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-xs font-mono uppercase tracking-wider">Eng Ommabop Talab</span>
          <PieChart className="w-4 h-4 text-studio-dark" />
        </div>
        <div className="truncate">
          <span className="font-display font-bold text-xl text-studio-black block truncate">
            {stats.mostPopularType}
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-0.5">
          <span>Pipeline qiymati:</span>
          <span className="font-bold text-warmOrange-600">{stats.estimatedPipelineValue}</span>
        </div>
      </div>
    </div>
  );
};
