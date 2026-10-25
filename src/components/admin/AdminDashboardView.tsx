import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { StoredBrief, BriefStatus, AdminStats } from '../../types/admin';
import { BriefStorageService } from '../../services/briefStorage';
import { AdminStatsCards } from './AdminStatsCards';
import { AdminBriefsTable } from './AdminBriefsTable';
import { AdminBriefDetailModal } from './AdminBriefDetailModal';
import {
  ArrowLeft,
  Download,
  RotateCcw,
  LogOut,
  Sparkles,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react';

interface AdminDashboardViewProps {
  onBackToSite: () => void;
  onLogout: () => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  onBackToSite,
  onLogout,
}) => {
  const [briefs, setBriefs] = useState<StoredBrief[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    totalBriefs: 0,
    newLeads: 0,
    inProgress: 0,
    completed: 0,
    estimatedPipelineValue: '$0',
    mostPopularType: '-',
  });
  const [selectedBrief, setSelectedBrief] = useState<StoredBrief | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadData = () => {
    const list = BriefStorageService.getAllBriefs();
    setBriefs(list);
    setStats(BriefStorageService.getAdminStats());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSelectBrief = (brief: StoredBrief) => {
    setSelectedBrief(brief);
    setIsModalOpen(true);
  };

  const handleStatusChange = (id: string, newStatus: BriefStatus) => {
    const updated = BriefStorageService.updateBrief(id, { status: newStatus });
    if (updated) {
      loadData();
      setSelectedBrief(updated);
    }
  };

  const handleSaveNotes = (id: string, notes: string) => {
    const updated = BriefStorageService.updateBrief(id, { adminNotes: notes });
    if (updated) {
      loadData();
      setSelectedBrief(updated);
    }
  };

  const handleDeleteBrief = (id: string) => {
    BriefStorageService.deleteBrief(id);
    loadData();
    setIsModalOpen(false);
  };

  const handleExportJson = () => {
    const jsonStr = BriefStorageService.exportBriefsAsJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nova-briefs-export-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportCsv = () => {
    const csvStr = BriefStorageService.exportBriefsAsCsv();
    const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nova-briefs-export-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleResetData = () => {
    if (window.confirm("Barcha arizalarni boshlang'ich demo holatiga qaytarishni xohlaysizmi?")) {
      BriefStorageService.resetToDefaults();
      loadData();
    }
  };

  return (
    <div className="min-h-screen bg-studio-bgLight text-studio-dark font-sans pb-24">
      {/* Top Admin Navigation Header */}
      <header className="sticky top-0 z-40 bg-studio-black text-white border-b border-studio-charcoal">
        <Container size="wide">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Brand + Back */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onBackToSite}
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Saytga Qaytish</span>
              </button>

              <div className="h-6 w-px bg-studio-charcoal hidden sm:block" />

              <div className="flex items-baseline gap-1 font-display font-bold text-xl text-white">
                <span>NOVA</span>
                <span className="text-warmOrange-500 text-xs">®</span>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-2">
                  Studio Command
                </span>
              </div>
            </div>

            {/* Right: Quick Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleExportCsv}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-studio-cardDark border border-studio-charcoal text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="CSV formatida yuklab olish"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>CSV</span>
              </button>

              <button
                type="button"
                onClick={handleExportJson}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-studio-cardDark border border-studio-charcoal text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="JSON formatida yuklab olish"
              >
                <Download className="w-3.5 h-3.5 text-cobalt-400" />
                <span>JSON</span>
              </button>

              <button
                type="button"
                onClick={handleResetData}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-studio-cardDark border border-studio-charcoal text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                title="Demo ma'lumotlarni qaytarish"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                type="button"
                onClick={onLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-red-400 hover:text-red-300 border border-red-950 hover:border-red-800 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Chiqish</span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Admin Content */}
      <main className="pt-10">
        <Container size="wide">
          <div className="space-y-8">
            {/* Title & Live Status */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-studio-border">
              <div className="space-y-2">
                <Eyebrow number="STUDIO ADMIN" accent="orange">
                  Loyiha Arizalari va Boshqaruv
                </Eyebrow>
                <Heading as="h1" size="display">
                  Kelib Tushgan Brieflar Tahlili
                </Heading>
                <p className="text-sm text-studio-muted font-sans max-w-xl">
                  Mijozlar Solution Finder va Project Brief orqali yuborgan so‘rovlarini ko‘rib chiqing, statuslarni o‘zgartiring va smeta tayyorlang.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Serverless Storage Faol</span>
                </span>
              </div>
            </div>

            {/* 1. KPI Stats Cards */}
            <AdminStatsCards stats={stats} />

            {/* 2. Briefs Table with Search & Filters */}
            <AdminBriefsTable briefs={briefs} onSelectBrief={handleSelectBrief} />
          </div>
        </Container>
      </main>

      {/* Detailed Brief Inspection Modal */}
      <AdminBriefDetailModal
        brief={selectedBrief}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStatusChange={handleStatusChange}
        onSaveNotes={handleSaveNotes}
        onDelete={handleDeleteBrief}
      />
    </div>
  );
};
