import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory fallback for Vercel serverless demo invocation
let serverlessBriefs: any[] = [
  {
    id: 'api-001',
    referenceCode: 'NV-BRIEF-2026-1042',
    createdAt: new Date().toISOString(),
    status: 'yangi',
    data: {
      fullName: 'Farhod Aliyev',
      companyName: 'Apex Logistics & Freight',
      email: 'f.aliyev@apexlogistics.uz',
      phoneOrTelegram: '+998 90 912 34 56',
      websiteType: 'Business Website',
      budgetRange: '$5,000 – $10,000',
      targetLaunchDate: '4-6 hafta (Standart)',
      projectGoal: 'Yevropalik korporativ hamkorlar uchun ishonchli taqdimot va onlayn yuk kalkulyatori yaratish.',
      businessDescription: 'Markaziy Osiyo va Turkiya o‘rtasida og‘ir sanoat uskunalarini multimodal xalqaro yuk tashish.',
    },
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      count: serverlessBriefs.length,
      data: serverlessBriefs,
    });
  }

  if (req.method === 'POST') {
    const body = req.body;
    if (!body || !body.fullName || !body.companyName) {
      return res.status(400).json({
        success: false,
        error: 'Ism va kompaniya nomi majburiy.',
      });
    }

    const newRef = `NV-BRIEF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBrief = {
      id: `brief-${Date.now()}`,
      referenceCode: newRef,
      createdAt: new Date().toISOString(),
      status: 'yangi',
      data: body,
    };

    serverlessBriefs.unshift(newBrief);

    return res.status(201).json({
      success: true,
      referenceCode: newRef,
      message: 'Brief qabul qilindi.',
      data: newBrief,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
