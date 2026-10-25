import { StoredBrief, BriefStatus, AdminStats } from '../types/admin';
import { ProjectBriefData } from '../types/brief';

const STORAGE_KEY = 'nova_studio_stored_briefs_v1';
const ADMIN_PASSCODE = 'nova2026';

const mockSeedBriefs: StoredBrief[] = [
  {
    id: 'seed-001',
    referenceCode: 'NV-BRIEF-2026-1042',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hours ago
    status: 'yangi',
    data: {
      fullName: 'Farhod Aliyev',
      companyName: 'Apex Logistics & Freight',
      email: 'f.aliyev@apexlogistics.uz',
      phoneOrTelegram: '+998 90 912 34 56',
      roleOrPosition: 'Bosh direktor',
      websiteType: 'Business Website',
      businessDescription: 'Markaziy Osiyo va Turkiya o‘rtasida og‘ir sanoat uskunalarini multimodal xalqaro yuk tashish.',
      projectGoal: 'Yevropalik korporativ hamkorlar uchun ishonchli taqdimot va onlayn yuk kalkulyatori yaratish.',
      targetAudience: 'B2B ishlab chiqarish korxonalari va importyorlar',
      pagesNeeded: [
        'Bosh sahifa (Hero, xizmatlar, keyslar, CTA)',
        'Xizmatlar / Takliflar taqdimoti',
        'Kompaniya haqida / Jamoa va qadriyatlar',
        'Aloqa / Xarita va to‘g‘ridan-to‘g‘ri shakl',
        'Narxlar / Paketlar va kalkulyator',
      ],
      mustHaveFeatures: [
        '100% Moslashuvchan dizayn (Mobile/Tablet/Desktop)',
        'Ko‘p tillilik (O‘zbek, Rus, Ingliz)',
        'Telegram-bot bilan zudlikda bildirishnomalar',
        'SEO optimizatsiya (Google qidiruvida tez topilish)',
      ],
      hasBrandIdentity: 'yes',
      referenceWebsites: 'dhl.com kabi ishonchli, linear.app kabi toza zamonaviy minimalist tipografika',
      budgetRange: '$5,000 – $10,000',
      targetLaunchDate: '4-6 hafta (Standart)',
      additionalNotes: 'Loyiha uchun rus va ingliz tillarida matnlar tayyorlangan.',
    },
    adminNotes: 'Mijoz bilan dastlabki muloqot rejalashtirildi. Texnik topshiriq tayyorlanmoqda.',
  },
  {
    id: 'seed-002',
    referenceCode: 'NV-BRIEF-2026-0985',
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(), // Yesterday
    status: "ko'rib_chiqilmoqda",
    data: {
      fullName: 'Kamilla Zokirova',
      companyName: 'Nordic Craft Roasters',
      email: 'hello@nordiccraft.uz',
      phoneOrTelegram: '@kamilla_coffee',
      roleOrPosition: 'Hammuassis & Art-direktor',
      websiteType: 'Product Catalog',
      businessDescription: 'Maxsus navli (specialty) qahva donalarini qovurish va kafelarga ulgurji hamda chakana yetkazish.',
      projectGoal: 'Qahva navlari va qovurish darajalari bo‘yicha filtrli interaktiv katalog hamda buyurtma shakli.',
      targetAudience: 'Toshkent va viloyatlardagi premium kafelar va qahva ixlosmandlari',
      pagesNeeded: [
        'Bosh sahifa (Hero, xizmatlar, keyslar, CTA)',
        'Mahsulotlar katalogi / Toifalar',
        'Kompaniya haqida / Jamoa va qadriyatlar',
        'Aloqa / Xarita va to‘g‘ridan-to‘g‘ri shakl',
      ],
      mustHaveFeatures: [
        '100% Moslashuvchan dizayn (Mobile/Tablet/Desktop)',
        'CMS boshqaruv paneli (Matn va rasmlarni mustaqil yangilash)',
        'Yuqori darajadagi interaktiv animatsiyalar va mikro-o‘tishlar',
      ],
      hasBrandIdentity: 'partial',
      referenceWebsites: 'bluebottlecoffee.com tozaligi va kofe taʼriflari',
      budgetRange: '$2,500 – $5,000',
      targetLaunchDate: '2-3 hafta (Shoshilinch)',
      additionalNotes: 'Fotosuratlar professional olingan, katalogga joylash kerak.',
    },
    adminNotes: 'Katalog filtrlari arxitekturasi muhokama qilindi.',
  },
  {
    id: 'seed-003',
    referenceCode: 'NV-BRIEF-2026-0814',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(), // 3 days ago
    status: 'taklif_yuborildi',
    data: {
      fullName: 'Sherzod Qodirov',
      companyName: 'FinPulse Cloud Analytics',
      email: 'sherzod@finpulse.io',
      phoneOrTelegram: '+998 97 789 00 11',
      roleOrPosition: 'CTO / Texnik rahbar',
      websiteType: 'Custom Web App',
      businessDescription: 'Kichik bizneslar uchun kassa va ombor aylanmasini avtomatlashtiruvchi bulutli tahlil tizimi.',
      projectGoal: 'Shaxsiy mijozlar kabineti, obuna to‘lovlari va real-time grafikli boshqaruv paneli.',
      targetAudience: 'Chakana savdo do‘konlari va tarmoq korxonalar',
      pagesNeeded: [
        'Bosh sahifa (Hero, xizmatlar, keyslar, CTA)',
        'Xizmatlar / Takliflar taqdimoti',
        'Narxlar / Paketlar va kalkulyator',
        'Shaxsiy kabinet / Foydalanuvchi paneli',
      ],
      mustHaveFeatures: [
        '100% Moslashuvchan dizayn (Mobile/Tablet/Desktop)',
        'Mavzular almashtirish (Dark / Light rejimlari)',
        'Ko‘p tillilik (O‘zbek, Rus, Ingliz)',
        'Telegram-bot bilan zudlikda bildirishnomalar',
      ],
      hasBrandIdentity: 'yes',
      referenceWebsites: 'stripe.com/billing va raycast.com dizayni',
      budgetRange: '$10,000+',
      targetLaunchDate: '2-3 oy (Keng hajm)',
      additionalNotes: 'REST API backend jamoamiz tomonidan tayyorlangan, front qismini studiyangizga topshirmoqchimiz.',
    },
    adminNotes: 'Smeta va sprintlar kalendari mijozga email orqali yuborildi. Javob kutilmoqda.',
  },
];

export const BriefStorageService = {
  // Check and initialize data
  getAllBriefs(): StoredBrief[] {
    if (typeof window === 'undefined') return mockSeedBriefs;

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with realistic demo briefs for Contra/Vercel visitors
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockSeedBriefs));
      return mockSeedBriefs;
    }

    try {
      return JSON.parse(raw) as StoredBrief[];
    } catch (e) {
      console.error('Storage parse error, resetting:', e);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockSeedBriefs));
      return mockSeedBriefs;
    }
  },

  getBriefById(id: string): StoredBrief | undefined {
    const list = this.getAllBriefs();
    return list.find((b) => b.id === id);
  },

  saveBrief(data: ProjectBriefData, referenceCode?: string): StoredBrief {
    const list = this.getAllBriefs();
    const newRef = referenceCode || `NV-BRIEF-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBrief: StoredBrief = {
      id: `brief-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      referenceCode: newRef,
      createdAt: new Date().toISOString(),
      status: 'yangi',
      data,
    };

    const updated = [newBrief, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    return newBrief;
  },

  updateBrief(
    id: string,
    updates: { status?: BriefStatus; adminNotes?: string }
  ): StoredBrief | null {
    const list = this.getAllBriefs();
    const index = list.findIndex((b) => b.id === id);
    if (index === -1) return null;

    const current = list[index];
    const updated: StoredBrief = {
      ...current,
      ...(updates.status ? { status: updates.status } : {}),
      ...(updates.adminNotes !== undefined ? { adminNotes: updates.adminNotes } : {}),
      lastUpdated: new Date().toISOString(),
    };

    list[index] = updated;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
    return updated;
  },

  deleteBrief(id: string): boolean {
    const list = this.getAllBriefs();
    const filtered = list.filter((b) => b.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
    return true;
  },

  resetToDefaults(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockSeedBriefs));
    }
  },

  verifyAdminPasscode(passcode: string): boolean {
    return passcode.trim() === ADMIN_PASSCODE;
  },

  getAdminStats(): AdminStats {
    const list = this.getAllBriefs();
    const totalBriefs = list.length;
    const newLeads = list.filter((b) => b.status === 'yangi').length;
    const inProgress = list.filter(
      (b) => b.status === "ko'rib_chiqilmoqda" || b.status === 'taklif_yuborildi'
    ).length;
    const completed = list.filter((b) => b.status === 'qabul_qilindi').length;

    // Calculate most requested website type
    const typeCounts: Record<string, number> = {};
    list.forEach((b) => {
      const type = b.data.websiteType || 'Business Website';
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    });

    let mostPopularType = 'Business Website';
    let maxCount = 0;
    Object.entries(typeCounts).forEach(([t, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostPopularType = t;
      }
    });

    return {
      totalBriefs,
      newLeads,
      inProgress,
      completed,
      estimatedPipelineValue: '$28,000+',
      mostPopularType,
    };
  },

  exportBriefsAsJson(): string {
    const list = this.getAllBriefs();
    return JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        total: list.length,
        studio: 'NOVA® Digital Studio',
        briefs: list,
      },
      null,
      2
    );
  },

  exportBriefsAsCsv(): string {
    const list = this.getAllBriefs();
    const headers = [
      'Referens Kod',
      'Status',
      'Sana',
      'Mijoz Ismi',
      'Kompaniya',
      'Email',
      'Telefon/Telegram',
      'Sayt Turi',
      'Byudjet',
      'Muddat',
      'Asosiy Maqsad',
      'Studiya Qaydlari',
    ];

    const escapeCsv = (val: string = '') => {
      return `"${val.replace(/"/g, '""')}"`;
    };

    const rows = list.map((b) => [
      escapeCsv(b.referenceCode),
      escapeCsv(b.status),
      escapeCsv(new Date(b.createdAt).toLocaleDateString('uz-UZ')),
      escapeCsv(b.data.fullName),
      escapeCsv(b.data.companyName),
      escapeCsv(b.data.email),
      escapeCsv(b.data.phoneOrTelegram),
      escapeCsv(b.data.websiteType),
      escapeCsv(b.data.budgetRange),
      escapeCsv(b.data.targetLaunchDate),
      escapeCsv(b.data.projectGoal),
      escapeCsv(b.adminNotes || ''),
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  },
};
