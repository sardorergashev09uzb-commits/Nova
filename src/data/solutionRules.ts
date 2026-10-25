import { SolutionQuestion, RecommendationResult } from '../types/solution-finder';

export const solutionQuestions: SolutionQuestion[] = [
  {
    id: "business_stage",
    stepNumber: 1,
    question: "Biznesingiz hozir qaysi rivojlanish bosqichida?",
    context: "Ushbu savol saytning qanchalik ixcham yoki keng ko‘lamli bo‘lishi kerakligini aniqlashga yordam beradi.",
    options: [
      {
        value: "idea",
        label: "Yangi g‘oya, startap yoki yangi yo‘nalish",
        description: "Bozorga endi kirib kelmoqdamiz, dastlabki talab va mijozlar qiziqishini tekshirish kerak."
      },
      {
        value: "established_small",
        label: "Faoliyat yuritayotgan korxona / xizmat ko‘rsatish",
        description: "Mijozlarimiz bor, lekin saytimiz yo‘q yoki eskirgan; B2B nufuzimizni oshirish lozim."
      },
      {
        value: "catalog_retail",
        label: "Keng assortimentga ega ishlab chiqaruvchi yoki savdo korxonasi",
        description: "Ko‘p sonli mahsulotlarimiz bor, mijozlar ularni saralab, ko‘rib, buyurtma berishi zarur."
      },
      {
        value: "scaling_ops",
        label: "Tizimli o‘sib borayotgan kompaniya",
        description: "Biznes operatsiyalari, mijozlar bilan hisob-kitob yoki ichki boshqaruvni avtomatlashtirish kerak."
      }
    ]
  },
  {
    id: "primary_goal",
    stepNumber: 2,
    question: "Veb-sayt oldiga qo‘yilgan birlamchi maqsad nima?",
    context: "Saytning asosiy konversiya yo‘nalishini belgilab olish uchun zarur.",
    options: [
      {
        value: "direct_leads",
        label: "Aniq bitta mahsulot/xizmatga tezkor buyurtmalar (lead) yig‘ish",
        description: "Reklamadan kelgan mehmon taklifni 30 soniyada tushunsin va darhol ariza qoldirsin."
      },
      {
        value: "company_reputation",
        label: "Kompaniya nufuzi, ekspertizasi va ishonchini ko‘rsatish",
        description: "Yirik buyurtmachilar bilan uchrashuvdan oldin ko‘rsatishga arziydigan professional platforma."
      },
      {
        value: "browse_products",
        label: "Mahsulotlar katalogini parametrlar va filtrlar bo‘yicha ko‘rgazma qilish",
        description: "Mijozlar tovarlarni solishtirib, qulay tanlab, savat yoki menejer orqali buyurtma jo‘natsin."
      },
      {
        value: "automation",
        label: "Biznes operatsiyalarini va mijozlar muloqotini avtomatlashtirish",
        description: "Shaxsiy kabinet, murakkab hisob-kitob algoritmlari yoki ichki tizimlar bilan integratsiya."
      }
    ]
  },
  {
    id: "catalog_size",
    stepNumber: 3,
    question: "Saytda qancha hajmda mahsulot yoki sahifalar joylashtiriladi?",
    context: "Ma'lumotlar arxitekturasi va navigatsiya tuzilmasini to‘g‘ri shakllantirish uchun muhim.",
    options: [
      {
        value: "single",
        label: "1 ta asosiy taklif yoki 2-3 ta paketli xizmat",
        description: "Barcha asosiy ma'lumot bitta uzun, tahririy kompozitsiyaga bemalol sig‘adi."
      },
      {
        value: "services_list",
        label: "4 tadan 12 tagacha mustaqil xizmatlar yoki bo‘limlar",
        description: "Har bir xizmat va keys uchun alohida sahifa, jamoa va studiya tafsilotlari kerak."
      },
      {
        value: "many_items",
        label: "O‘nlab yoki yuzlab tovarlar / mahsulotlar",
        description: "Kategoriyalar, ko‘p parametrli filtrlar va tovar kartalari tizimi zarur."
      },
      {
        value: "dynamic_data",
        label: "Doimiy yangilanuvchi ma'lumotlar bazasi yoki dinamik dashboard",
        description: "Foydalanuvchilar o‘z ma'lumotlarini kiritishi, tahrirlashi va boshqarishi kerak."
      }
    ]
  },
  {
    id: "budget_range",
    stepNumber: 4,
    question: "Loyiha uchun taxminiy byudjet ko‘rsatkichi qanday?",
    context: "Biznes imkoniyatiga mos optimal texnik yondashuvni tavsiya qilish uchun xizmat qiladi.",
    options: [
      {
        value: "starter",
        label: "Boshlang‘ich / Tejamkor (Minimal funktsional to‘plam)",
        description: "Keraksiz xarajatlarsiz, eng asosiy vazifani tezkor ishga tushirish uchun."
      },
      {
        value: "standard",
        label: "Standart / Professional (To‘liq brend tajribasi)",
        description: "Individual dizayn tizimi, tahririy tipografika va to‘liq sahifalar arxitekturasi."
      },
      {
        value: "advanced",
        label: "Ilg‘or (Filtrlar, katalog yoki murakkab modullar)",
        description: "Katta hajm, ko‘p parametrli saralash va biznes integratsiyalari bilan."
      },
      {
        value: "custom",
        label: "Individual / Maxsus ishlab chiqish (Custom Web App)",
        description: "Noyob mantiq, yuqori darajadagi xavfsizlik va chuqur dasturlash ishlari."
      },
      {
        value: "undecided",
        label: "Hozircha aniq emas (Tavsiyaga qarab belgilaymiz)",
        description: "Studiya taklif qilgan yechim va muddatga qarab qaror qabul qilamiz."
      }
    ]
  },
  {
    id: "launch_urgency",
    stepNumber: 5,
    question: "Loyihani qancha muddat ichida ishga tushirish lozim?",
    context: "Ishlab chiqish metodologiyasi va bosqichlar jadvalini to‘g‘ri tuzish uchun zarur.",
    options: [
      {
        value: "urgent",
        label: "Tezkor (1–2 hafta ichida)",
        description: "Eng zarur bloklar bilan birinchi ishchi versiyani (MVP) zudlik bilan ishga tushirish."
      },
      {
        value: "moderate",
        label: "O‘rtacha (3–4 hafta ichida)",
        description: "Pishiq dizayn tizimi, sifatli kontent va sinovlar uchun yetarli professional vaqt."
      },
      {
        value: "flexible",
        label: "Sifat birinchi o‘rinda (1–2 oy va undan ko‘p)",
        description: "Har bir detal, filtr va maxsus arxitektura puxta ishlab chiqilishi shart."
      }
    ]
  }
];

export const calculateRecommendation = (answers: Record<string, string>): RecommendationResult => {
  const stage = answers["business_stage"];
  const goal = answers["primary_goal"];
  const size = answers["catalog_size"];
  const budget = answers["budget_range"];
  const urgency = answers["launch_urgency"];

  // Rule 1: Custom Web App
  if (goal === "automation" || size === "dynamic_data" || (stage === "scaling_ops" && budget !== "starter")) {
    return {
      recommendedType: "Custom Web App",
      title: "Individual Veb-Ilova (Custom Web Application)",
      subtitle: "Standart veb-shablonlar yetarli bo‘lmagan joyda: individual biznes mantiq va operatsion avtomatlashtirish.",
      whyFit: [
        "Sizning birlamchi maqsadingiz shunchaki ma'lumot berish emas, balki biznes jarayonlarini (avtomatlashtirish, kabinet, hisob-kitob) bajarish.",
        "Dinamik ma'lumotlar bazasi va foydalanuvchilar bilan ishlash tizimi talab etiladi.",
        "Kompaniya kelajakda o‘sishi uchun mustahkam, xavfsiz va kengaytiriladigan (scalable) arxitektura zarur."
      ],
      deliverables: [
        "Foydalanuvchi tajribasi (UX) va interfeys prototipi",
        "Xavfsiz autentifikatsiya va rollar arxitekturasi",
        "Frontend interfeysi va API ma'lumotlar integratsiyasi",
        "To‘liq sinov, xavfsizlik auditi va texnik monitoring"
      ],
      estimatedTimeline: "6–10 hafta",
      suitableAlternatives: [
        "Brand & Business Website (Bosqichma-bosqich kengaytirish bilan)",
        "MVP versiya (Faqat eng muhim funksiyalarni 4 haftada ishga tushirish)"
      ],
      caveats: "Ushbu format aniq texnik spetsifikatsiya va jarayonlarni oldindan tahlil qilishni talab etadi."
    };
  }

  // Rule 2: Product Catalog
  if (goal === "browse_products" || size === "many_items" || stage === "catalog_retail") {
    return {
      recommendedType: "Product Catalog",
      title: "Interaktiv Mahsulotlar Katalogi (Product Catalog)",
      subtitle: "Keng assortimentni mijozga tushunarli, tezkor va yoqimli ko‘rsatish mexanizmi.",
      whyFit: [
        "Ko‘p sonli mahsulotlarni kategoriyalar va parametrlar orqali qulay saralash ehtiyoji mavjud.",
        "Mijozlar buyum xususiyatlarini mustaqil solishtirib, menejerga aniq buyurtma berish imkoniga ega bo‘ladi.",
        "Murakkab e-commerce to‘lov tizimlarining ortiqcha og‘irligisiz, to‘g‘ridan-to‘g‘ri savdo so‘rovlarini qabul qilish qulayligi."
      ],
      deliverables: [
        "Filtrlar va toifalar arxitekturasi",
        "Mahsulot kartalari va sifatli galereya tuzilmasi",
        "Menejerga yoki Telegram/WhatsApp orqali buyurtma yuborish shakli",
        "Barcha telefon va planshetlarda tezkor yuklanuvchi mobil layout"
      ],
      estimatedTimeline: "4–6 hafta",
      suitableAlternatives: [
        "Brand & Business Website (Agar tovarlar soni 10 tadan kam bo‘lsa)",
        "High-Impact Landing Page (Faqat eng asosiy top-tovarlar uchun)"
      ],
      caveats: "Mahsulotlarning sifatli fotosuratlari va parametrlari oldindan tayyorlanishi lozim."
    };
  }

  // Rule 3: Landing Page
  if (goal === "direct_leads" || size === "single" || stage === "idea" || (urgency === "urgent" && budget === "starter")) {
    return {
      recommendedType: "Landing Page",
      title: "Yuqori Ta'sirli Landing Page (High-Impact One-Pager)",
      subtitle: "Bitta aniq taklif, bitta diqqat markazi va maksimal konversiyaga yo‘naltirilgan taqdimot.",
      whyFit: [
        "Yangi mahsulot yoki xizmatni tezkor bozorga kiritib, mijozlar qiziqishini zudlik bilan tekshirish uchun eng optimal tanlov.",
        "Mehmonni chalg‘itmaydigan, to‘g‘ridan-to‘g‘ri arizaga yetaklovchi qat'iy tahririy kompozitsiya.",
        "Eng tez ishlab chiqish va qisqa muddatda ishga tushirish imkoniyati (1–2 hafta)."
      ],
      deliverables: [
        "Katta masshtabdagi tahririy Hero kompozitsiya",
        "Psixologik ishonch va muammo-yechim bloklari",
        "Ariza qabul qilish formasi va bildirishnomalar",
        "Sub-second tezlikda yuklanuvchi optimallashgan frontend"
      ],
      estimatedTimeline: "1–2 hafta",
      suitableAlternatives: [
        "Brand & Business Website (Kelajakda kompaniya kengayganda qo‘shilishi mumkin)"
      ],
      caveats: "Bitta sahifaga juda ko‘p bir-biriga bog‘liq bo‘lmagan mavzularni aralashtirib yubormaslik kerak."
    };
  }

  // Rule 4: Brand & Business Website (Default best-practice corporate standard)
  return {
    recommendedType: "Business Website",
    title: "Brend & Biznes Veb-Sayt (Brand & Business Website)",
    subtitle: "Kompaniya nufuzi, xizmatlari va ekspertizasini to‘liq ochib beruvchi rasmiy platforma.",
    whyFit: [
      "Kompaniyangiz bir nechta xizmatlar yoki yo‘nalishlarga ega va ularni alohida tushuntirish talab etiladi.",
      "B2B hamkorlar va jiddiy buyurtmachilar sizning tajribangiz, jamoangiz va keyslaringizni o‘rganishni istaydi.",
      "Uzoq muddatli SEO nufuzi va brend imidji uchun mustahkam poydevor yaratadi."
    ],
    deliverables: [
      "Individual Design System va tipografika",
      "Xizmatlar, keyslar va jamoa sahifalari",
      "Interaktiv loyiha briefi yoki aloqa tizimi",
      "Barcha ekranlarga moslashuvchan benuqson layout"
    ],
    estimatedTimeline: "3–4 hafta",
    suitableAlternatives: [
      "High-Impact Landing Page (Agar byudjet juda cheklangan bo‘lsa)"
    ],
    caveats: "Kompaniyaning haqiqiy tajribasi va faoliyati haqidagi ma'lumotlar ochiq taqdim etilishi zarur."
  };
};
