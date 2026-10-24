import { SolutionQuestion, RecommendationResult } from '../types/solution-finder';

export const solutionQuestions: SolutionQuestion[] = [
  {
    id: "business_stage",
    stepNumber: 1,
    question: "Biznesingiz hozir qaysi rivojlanish bosqichida?",
    context: "Bu savol saytning qanchalik murakkab yoki ixcham bo‘lishi kerakligini aniqlashga yordam beradi.",
    options: [
      {
        value: "idea",
        label: "Yangi g‘oya yoki startap",
        description: "Bozorga endi kirib kelmoqdamiz, dastlabki qiziqish va talabni tekshirib ko‘rish kerak."
      },
      {
        value: "established_small",
        label: "Faoliyat yuritayotgan kichik biznes",
        description: "Mijozlarimiz bor, lekin saytimiz yo‘q yoki eskirgan, nufuzimizni oshirish lozim."
      },
      {
        value: "catalog_retail",
        label: "Tovar yoki xizmatlar assortimenti keng korxona",
        description: "Katta katalogimiz bor, mijozlar buyumni ko‘rib, tanlab so‘rov yuborishlari zarur."
      },
      {
        value: "scaling_ops",
        label: "O‘sib borayotgan tizimli kompaniya",
        description: "Ichki jarayonlar, hisob-kitoblar yoki mijozlar bilan ishlashni avtomatlashtirish kerak."
      }
    ]
  },
  {
    id: "primary_goal",
    stepNumber: 2,
    question: "Veb-sayt oldiga qo‘yilgan birlamchi maqsad nima?",
    context: "Har bir veb-saytning o‘z asosiy vazifasi bor: e'tibor qaratish, ishonch hosil qilish yoki operatsiyalarni bajarish.",
    options: [
      {
        value: "direct_leads",
        label: "Aniq bitta mahsulot/xizmatga tezkor mijoz (lead) yig‘ish",
        description: "Reklamadan kelgan mehmon darhol taklifni tushunsin va ariza qoldirsin."
      },
      {
        value: "company_reputation",
        label: "Kompaniya nufuzi va xizmatlar portfoliosini to‘liq taqdim etish",
        description: "Yirik buyurtmachilar bilan uchrashuvdan oldin ko‘rsatishga arziydigan rasmiy platforma."
      },
      {
        value: "browse_products",
        label: "Mahsulotlar katalogini parametrlar bo‘yicha ko‘rsatish",
        description: "Mijozlar filtrlar orqali qidirib, tanlab, buyurtma jo‘nata olsin."
      },
      {
        value: "automation",
        label: "Mijozlar bilan ishlash yoki ma'lumotlarni avtomatlashtirish",
        description: "Shaxsiy kabinet, murakkab kalkulyator yoki ichki tizimlar bilan uzviy bog‘lanish."
      }
    ]
  },
  {
    id: "catalog_size",
    stepNumber: 3,
    question: "Saytda qancha hajmda mahsulot yoki xizmat joylashtiriladi?",
    context: "Sahifalar soni va ma'lumotlar arxitekturasini to‘g‘ri belgilash uchun muhim.",
    options: [
      {
        value: "single",
        label: "1 ta asosiy mahsulot yoki 2-3 ta paketli xizmat",
        description: "Barcha ma'lumot bitta tushunarli sahifaga bemalol sig‘adi."
      },
      {
        value: "services_list",
        label: "4 tadan 10 tagacha mustaqil xizmatlar yoki yo‘nalishlar",
        description: "Har bir yo‘nalish uchun alohida tushuntirish va keyslar kerak."
      },
      {
        value: "many_items",
        label: "O‘nlab yoki yuzlab tovarlar / mahsulotlar",
        description: "Kategoriyalar, qidiruv va filtrlar tizimi zarur."
      },
      {
        value: "dynamic_data",
        label: "Doimiy o‘zgarib turuvchi ma'lumotlar bazasi yoki shaxsiy kabinet",
        description: "Foydalanuvchilar o‘z ma'lumotlarini kiritishi va boshqarishi kerak."
      }
    ]
  },
  {
    id: "launch_urgency",
    stepNumber: 4,
    question: "Loyihani qancha vaqt ichida ishga tushirish rejalashtirilgan?",
    context: "Ishlab chiqish metodologiyasi va funksional hajmni rejalashtirishga ta'sir qiladi.",
    options: [
      {
        value: "urgent",
        label: "Tez orada (1–2 hafta ichida)",
        description: "Tezkor natija, eng zarur elementlar bilan birinchi versiya (MVP)."
      },
      {
        value: "moderate",
        label: "1 oy ichida",
        description: "Pishiq dizayn tizimi, to‘liq matnlar va sinovlar uchun yetarli vaqt."
      },
      {
        value: "flexible",
        label: "Sifat birinchi o‘rinda, 1–2 oy vaqt bor",
        description: "Har bir detal, filtr va maxsus arxitektura mukammal ishlab chiqilishi kerak."
      }
    ]
  }
];

export const calculateRecommendation = (answers: Record<string, string>): RecommendationResult => {
  const stage = answers["business_stage"];
  const goal = answers["primary_goal"];
  const size = answers["catalog_size"];

  // Rule 1: Custom Web App
  if (goal === "automation" || size === "dynamic_data" || stage === "scaling_ops") {
    return {
      recommendedType: "Custom Web App",
      title: "Individual Veb-Ilova (Custom Web Application)",
      subtitle: "Standart shablonlar yetarli bo‘lmagan joyda: individual biznes mantiq va avtomatlashtirish.",
      whyFit: [
        "Sizning maqsadingiz oddiy ma'lumot ko‘rsatish emas, balki biznes operatsiyalarini bajarish.",
        "Foydalanuvchi ma'lumotlari, shaxsiy kabinet yoki ichki hisob-kitoblar talab etiladi.",
        "Kompaniya kelajakda o‘sishi uchun kengaytiriladigan (scalable) arxitektura kerak."
      ],
      deliverables: [
        "Interfaol prototip va UX arxitektura",
        "Frontend va API integratsiya qatlamlari",
        "Xavfsiz autentifikatsiya va rollar",
        "Ishga tushirish va monitoring"
      ],
      estimatedTimeline: "6–10 hafta",
      suitableAlternatives: ["Brand & Business Website (Bosqichma-bosqich kengaytirish bilan)"],
      caveats: "Ushbu yechim aniq texnik spetsifikatsiya va batafsil tahlilni talab qiladi."
    };
  }

  // Rule 2: Product Catalog
  if (goal === "browse_products" || size === "many_items" || stage === "catalog_retail") {
    return {
      recommendedType: "Product Catalog",
      title: "Interaktiv Mahsulotlar Katalogi (Product Catalog)",
      subtitle: "Keng assortimentni mijozga tushunarli, tez va yoqimli ko‘rsatish mexanizmi.",
      whyFit: [
        "Ko‘p sonli mahsulotlarni filtrlar va toifalar orqali qulay saralash zarur.",
        "Mijozlar buyum xususiyatlarini mustaqil taqqoslab, menejerga aniq buyurtma beradi.",
        "To‘liq e-commerce to‘lov tizimlarining ortiqcha murakkabligisiz, savdo arizalarini yig‘ish imkoniyati."
      ],
      deliverables: [
        "Filtrlar va toifalar arxitekturasi",
        "Mahsulot kartalari va galereyasi",
        "Menejerga yoki Telegramga buyurtma jo‘natish shakli",
        "Tezkor mobil ko‘rinish"
      ],
      estimatedTimeline: "4–6 hafta",
      suitableAlternatives: ["Brand & Business Website"],
      caveats: "Mahsulotlarning sifatli fotosuratlari va aniq parametrlari oldindan tayyor bo‘lishi lozim."
    };
  }

  // Rule 3: Landing Page
  if (goal === "direct_leads" || size === "single" || stage === "idea") {
    return {
      recommendedType: "Landing Page",
      title: "Yuqori Ta'sirli Landing Page (High-Impact One-Pager)",
      subtitle: "Bitta taklif, bitta diqqat markazi va maksimal konversiya.",
      whyFit: [
        "Yangi mahsulot yoki xizmatni tezkor bozorga kiritib, mijozlar qiziqishini tekshirish uchun eng maqbul.",
        "Foydalanuvchini chalg‘itmaydigan, to‘g‘ridan-to‘g‘ri arizaga yetaklovchi tahririy tuzilma.",
        "Eng tez ishlab chiqish va ishga tushirish imkoniyati."
      ],
      deliverables: [
        "Katta masshtabdagi tahririy Hero kompozitsiya",
        "Psixologik ishonch va muammo-yechim bloklari",
        "Ariza qabul qilish formasi va xabarnomalar",
        "Maksimal tezlikda yuklanuvchi optimallashgan kod"
      ],
      estimatedTimeline: "1–2 hafta",
      suitableAlternatives: ["Brand & Business Website (Agar kelgusida ko‘p sahifa kerak bo‘lsa)"],
      caveats: "Bir sahifaga juda ko‘p xilma-xil mavzularni aralashtirib yubormaslik muhim."
    };
  }

  // Rule 4: Default Business Website
  return {
    recommendedType: "Business Website",
    title: "Brend va Korporativ Biznes Sayt (Business Website)",
    subtitle: "Kompaniya nufuzi, xizmatlari va ekspertizasini mustahkamlovchi rasmiy platforma.",
    whyFit: [
      "Kompaniyangiz bir nechta xizmatlar yoki yo‘nalishlarga ega va ularni alohida tushuntirish kerak.",
      "B2B hamkorlar va mijozlar sizning tajribangiz, jamoangiz va keyslaringizni o‘rganishni istaydi.",
      "Uzoq muddatli SEO va brend imidji uchun mustahkam poydevor yaratadi."
    ],
    deliverables: [
      "Individual Design System va tipografika",
      "Xizmatlar, keyslar va studiya sahifalari",
      "Interaktiv Project Brief yoki aloqa tizimi",
      "Barcha ekranlarga moslashuvchan benuqson layout"
    ],
    estimatedTimeline: "3–4 hafta",
    suitableAlternatives: ["High-Impact Landing Page"],
    caveats: "Kompaniyaning haqiqiy keyslari va ochiq faoliyat ma'lumotlari talab qilinadi."
  };
};
