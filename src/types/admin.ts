import { ProjectBriefData, WebsiteType } from './brief';

export type BriefStatus =
  | 'yangi'
  | "ko'rib_chiqilmoqda"
  | 'taklif_yuborildi'
  | 'qabul_qilindi'
  | 'rad_etildi'
  | 'arxivlandi';

export interface StoredBrief {
  id: string;
  referenceCode: string;
  createdAt: string;
  status: BriefStatus;
  data: ProjectBriefData;
  adminNotes?: string;
  lastUpdated?: string;
}

export interface AdminStats {
  totalBriefs: number;
  newLeads: number;
  inProgress: number;
  completed: number;
  estimatedPipelineValue: string;
  mostPopularType: string;
}

export interface BriefFilterOptions {
  status: BriefStatus | 'barchasi';
  websiteType: WebsiteType | 'barchasi';
  searchQuery: string;
}
