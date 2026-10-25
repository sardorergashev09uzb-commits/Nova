import { ServiceItem } from '../types/portfolio';

export const studioServices: ServiceItem[] = [
  {
    id: "landing-page",
    number: "01",
    title: "High-Impact Landing Page",
    subtitle: "Bitta asosiy maqsadga yo‘naltirilgan, yuqori konversiyali taqdimot sahifasi.",
    bestFor: "Yangi mahsulot taqdimoti, marketing kampaniyalari yoki bitta xizmatni tezkor sotuvga chiqarish.",
    businessProblem: "Mijozlar taklifni tushunmayapti, reklama byudjeti samarasiz ketmoqda va sahifada diqqat tarqalib ketgan.",
    ourSolution: "Qat'iy tahririy kompozitsiya, kuchli sarlavha, psixologik ishonch bloklari va bitta aniq harakatga chorlovchi CTA arxitekturasi.",
    keyFeatures: [
      "Tezkor yuklanish (sub-second speed)",
      "Kuchli vizual va tahririy matn ierarxiyasi",
      "Mobil qurilmalar uchun mukammal optimallashgan",
      "Analitika va konversiya kuzatuv integratsiyasi"
    ],
    deliverables: ["Dizayn prototipi", "Responsive frontend kod", "SEO meta-taglar", "Forma & Telegram xabarnoma"],
    typicalTimeline: "1–2 hafta",
    pricingIndicator: "Boshlang‘ich daraja",
    comparisonMetrics: {
      pagesCount: "1 ta bittalik sahifa (One-pager)",
      targetAudience: "Reklama va ijtimoiy tarmoqlardan kelgan yangi mijozlar",
      conversionFocus: "Tezkor ariza / Kontakt qoldirish",
      contentComplexity: "Ixcham, lo‘nda va kuchli sarlavhalar"
    }
  },
  {
    id: "business-website",
    number: "02",
    title: "Brand & Business Website",
    subtitle: "Kompaniya nufuzi, xizmatlari va ekspertizasini to‘liq ochib beruvchi ko‘p sahifali sayt.",
    bestFor: "O‘z sohasida yetakchi bo‘lishni istagan B2B kompaniyalar, studiyalar, konsalting va xizmat ko‘rsatish korxonalari.",
    businessProblem: "Kompaniyaning eskirgan yoki shablon sayti mijozlarda ishonch uyg‘otmayapti, jiddiy buyurtmachilar raqobatchiga ketmoqda.",
    ourSolution: "Individual dizayn tizimi, kompaniya qadriyatlari va jarayonlarini ko‘rsatuvchi sahifalar, ishonchli portfolio taqdimoti.",
    keyFeatures: [
      "Individual Design System va tipografika",
      "Xizmatlar, keyslar va jamoa sahifalari",
      "Interaktiv loyiha kalkulyatori yoki brief formasi",
      "Yuqori darajadagi SEO va xavfsizlik standartlari"
    ],
    deliverables: ["Design System", "Ko‘p sahifali veb-platforma", "Keyslar taqdimoti", "Boshqaruv qulayligi"],
    typicalTimeline: "3–4 hafta",
    pricingIndicator: "O‘rta daraja",
    comparisonMetrics: {
      pagesCount: "5–12 ta asosiy va ichki sahifalar",
      targetAudience: "B2B hamkorlar, yirik mijozlar, investorlar",
      conversionFocus: "Kompaniya nufuzini mustahkamlash & Hamkorlik so‘rovi",
      contentComplexity: "To‘liq kompaniya tarixi, metodologiya va keyslar"
    }
  },
  {
    id: "product-catalog",
    number: "03",
    title: "Interactive Product Catalog",
    subtitle: "Mahsulotlar yoki xizmatlarni qulay saralash, filtrlar va vizual ko‘rgazma tizimi.",
    bestFor: "Keng assortimentga ega ishlab chiqaruvchilar, distribyutorlar, mebel, kiyim yoki texnika do‘konlari.",
    businessProblem: "Mijozlar mahsulotlarni qidirishda qiynaladi, narx va parametrlarni aniqlash uchun ortiqcha vaqt sarflaydi.",
    ourSolution: "Tezkor filtrlar, sifatli fotogalereya, qulay solishtirish va to‘g‘ridan-to‘g‘ri menejerga buyurtma jo‘natish imkoniyati.",
    keyFeatures: [
      "Kategoriyalar va ko‘p parametrli filtrlar",
      "Tezkor mahsulot qidiruvi va modal ko‘rish",
      "Telegram yoki WhatsApp orqali buyurtma integratsiyasi",
      "Mahsulot parametrlari (spetsifikatsiya) jadvallari"
    ],
    deliverables: ["Katalog arxitekturasi", "Filtrlar mexanizmi", "Mahsulot sahifalari", "Savatcha yoki buyurtma shakli"],
    typicalTimeline: "4–6 hafta",
    pricingIndicator: "Ilg‘or daraja",
    comparisonMetrics: {
      pagesCount: "Katalog + Toifalar + 50+ tovar kartalari",
      targetAudience: "Ulgurji va chakana xaridorlar, dilerlar",
      conversionFocus: "Filtrlash orqali tovar tanlash & Savat / So‘rov",
      contentComplexity: "Katta ma'lumotlar bazasi, fotosuratlar va parametrlar"
    }
  },
  {
    id: "custom-web-app",
    number: "04",
    title: "Custom Web Application",
    subtitle: "Biznesingizning o‘ziga xos ichki jarayonlari, mijozlar kabineti yoki maxsus hisob-kitob dasturi.",
    bestFor: "Noyob biznes modeli, startaplar, onlayn xizmat ko‘rsatuvchi platformalar va avtomatlashtirishga muhtoj kompaniyalar.",
    businessProblem: "Mavjud tayyor platformalar biznes ehtiyojlariga to‘liq javob bermayapti, qo‘lda bajariladigan jarayonlar ko‘p.",
    ourSolution: "Noldan ishlab chiqilgan moslashuvchan arxitektura, rol va ruxsatlar boshqaruvi, API integratsiyalari va mustahkam xavfsizlik.",
    keyFeatures: [
      "Foydalanuvchi kabineti va autentifikatsiya",
      "Murakkab hisob-kitoblar va ma'lumotlar tahlili",
      "CRM, to‘lov tizimlari va tashqi API integratsiyalari",
      "Maksimal xavfsizlik va yuqori yuklamaga chidamlilik"
    ],
    deliverables: ["Texnik arxitektura", "Frontend & API integratsiya", "Foydalanuvchi qo‘llanmasi", "Uzoq muddatli qo‘llab-quvvatlash"],
    typicalTimeline: "6–10 hafta",
    pricingIndicator: "Individual byudjet",
    comparisonMetrics: {
      pagesCount: "Modulli interfeyslar, dashboard va kabinetlar",
      targetAudience: "Xodimlar, ro‘yxatdan o‘tgan mijozlar, administratorlar",
      conversionFocus: "Jarayonlarni tezlashtirish & Avtomatlashtirish",
      contentComplexity: "Dinamik mantiq, hisob-kitob algoritmlari, API ma'lumotlari"
    }
  }
];
