import { CaseStudy } from '../types/portfolio';

export const conceptualCaseStudies: CaseStudy[] = [
  {
    id: "nordic-atelier",
    slug: "nordic-atelier",
    title: "Nordic Atelier",
    category: "Business Website",
    subtitle: "Zamonaviy mebel va arxitektura buyumlari ishlab chiqaruvchisi uchun tahririy veb-tajriba.",
    clientType: "Mebel va interyer dizayn brendi",
    isConceptual: true,
    summary: "Yuqori narx segmentidagi mebel brendining mahsulot sifatini, materiallar tabiatini va studiya estetikasini ko‘rsatuvchi raqamli platforma.",
    problem: "Standart e-commerce do‘konlar brendning premium nufuzini tushirib yuborardi. Buyurtmachilar narxni emas, balki buyumlar ortidagi me'moriy qiymatni his qilishlari kerak edi.",
    approach: "Katta formatli fotografiya, toza bo‘shliqlar (whitespace) va materiallar fakturasini ko‘rsatuvchi mikro-animatsiyalar bilan boyitilgan asimmetrik katalog yaratildi.",
    solution: "Foydalanuvchi mahsulotni shunchaki xarid qilmaydi, balki uning qanday yaratilgani, yog‘och turi va interyerdagi uyg‘unligini interaktiv ko‘radi. Buyurtma to‘g‘ridan-to‘g‘ri shaxsiy maslahatchiga yo‘naltiriladi.",
    deliverables: [
      "Vizual yo‘nalish va tahririy grid",
      "Mahsulot taqdimot sahifalari",
      "Materiallar va faktura galereyasi",
      "Maslahatchiga to‘g‘ridan-to‘g‘ri ariza shakli"
    ],
    metricsContext: "Konseptual sinovda tashrif buyuruvchilarning mahsulot tafsilotlarini o‘rganish vaqti 2.5 barobarga oshdi.",
    featured: true,
    challengeDetails: [
      "Ommaviy e-commerce shablonlari buyumlarni oddiy tovar kabi ko‘rsatar, buyurtmachi uchun arxitekturaviy qadr-qimmat yo‘qolardi.",
      "Materiallar sifati (eman, yong‘oq yog‘ochi, qo‘l mehnati) yetarli darajada ochib berilmas edi.",
      "Mijozlarning 70%i standart savat orqali emas, shaxsiy maslahatchi orqali individual o‘lchamda buyurtma berishni ma'qul ko‘rardi."
    ],
    strategyPoints: [
      "Tahririy san'at jurnali (art magazine) uslubidagi asimmetrik tipografiya tanlandi.",
      "Har bir mebel modeli uchun 3 ta asosiy rakurs va material fakturasining makro-ko‘rinishi joriy etildi.",
      "Standart narx tegi o‘rniga 'Loyiha uchun moslashtirish' harakatga chorlovi o‘rnatildi."
    ],
    visualHighlights: [
      { label: "Material Fact Sheet", description: "Yog‘och tolalari va to‘qima fakturasining interfaol zum ko‘rinishi." },
      { label: "Atelier Manifesto", description: "Ustaxonadagi ishlab chiqarish jarayonini aks ettiruvchi qora tahririy blok." },
      { label: "Bespoke Request Sheet", description: "Arxitektor va interyer dizaynerlari uchun o‘lchamli ariza shakli." }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Transitions", "Optimized WebP Engine"],
    whyNotOtherFormats: "Oddiy landing page brendning barcha kolleksiyalarini sig‘dira olmasdi; to‘liq e-commerce esa premium nufuzni tushirib yuborardi. Shuning uchun ko‘p sahifali Brand & Business formati tanlandi."
  },
  {
    id: "zenith-logistics",
    slug: "zenith-logistics",
    title: "Zenith Global Cargo",
    category: "Landing Page",
    subtitle: "Xalqaro yuk tashish xizmatini yirik sanoat korxonalariga taqdim etuvchi yuqori konversiyali lending.",
    clientType: "Xalqaro multimodal logistika",
    isConceptual: true,
    summary: "Yangi ochilgan Yevropa-Osiyo multimodal yo‘nalishi uchun ishonchli B2B buyurtmachilarni jalb qiluvchi aniq, qat'iy va tezkor taqdimot sahifasi.",
    problem: "Logistika sohasida barcha saytlar bir xil yuk mashinalari rasmlari bilan to‘lgan, narx va muddatni aniqlash juda noaniq edi.",
    approach: "Ortiqcha grafik bezaklardan voz kechilib, asosiy e'tibor marshrutlar xaritasi, bojxona rasmiylashtiruvi kafolatlari va aniq yetkazib berish grafiklariga qaratildi.",
    solution: "3 bosqichli tezkor yuk hisoblash vidjeti va to‘g‘ridan-to‘g‘ri kompensatsiya kafolatini ko‘rsatuvchi ishonch bloklari orqali konversiya oshirildi.",
    deliverables: [
      "B2B fokuslangan konversiya tuzilmasi",
      "Interaktiv marshrutlar ko‘rgazmasi",
      "Ekspress narx so‘rov shakli",
      "CRM tizimiga avtomat uzatish"
    ],
    metricsContext: "B2B auditoriya uchun o‘rtacha shakl to‘ldirish darajasi 6.8% ga teng bo‘ldi.",
    featured: true,
    challengeDetails: [
      "Yirik ishlab chiqaruvchilar noaniq takliflardan charchagan edi — ularga aniq tranzit vaqtlari kerak edi.",
      "Kompaniyaning avvalgi sayti juda og‘ir bo‘lib, mobil internetda 6 soniyada yuklanardi.",
      "Reklama kampaniyalaridan kelgan korporativ mijozlar uzoq arizani ko‘rib, sahifani tark etardi."
    ],
    strategyPoints: [
      "Sub-second yuklanish: Sahifadagi barcha og‘ir skriptlar olib tashlanib, yuklanish 0.8 soniyaga keltirildi.",
      "3 ta maydondan iborat tezkor hisoblash: 'Jo‘natish nuqtasi' → 'Qabul qilish' → 'Yuk hajmi'.",
      "Kafolat bloklari: Kechikish bo‘yicha moliyaviy javobgarlik shartlari ochiq ko‘rsatildi."
    ],
    visualHighlights: [
      { label: "Route Matrix", description: "Temiryo‘l va avto marshrutlarining real muddatli diagrammasi." },
      { label: "Cargo Calculator", description: "B2B mijozlar uchun 3 qadamli tezkor hisoblash moduli." },
      { label: "Trust Accordion", description: "Bojxona ruxsatnomalari va xalqaro sug‘urta sertifikatlari." }
    ],
    techStack: ["React", "TypeScript", "Tailwind Tokens", "Sub-second Static Architecture"],
    whyNotOtherFormats: "Mijozning maqsadi yangi marshrut bo‘yicha tezkor B2B arizalar yig‘ish edi. Ko‘p sahifali sayt diqqatni chalg‘itar edi, shuning uchun High-Impact Landing Page eng yaxshi yechim bo‘ldi."
  },
  {
    id: "kura-coffee",
    slug: "kura-coffee",
    title: "Kura Roastery",
    category: "Product Catalog",
    subtitle: "Maxsus kofe donlari (specialty coffee) distribyutsiyasi uchun ta'm profillari va qulay filtrlar tizimi.",
    clientType: "Qahva qovurish laboratoriyasi va kafelar ta'minotchisi",
    isConceptual: true,
    summary: "Kafelar va qahvaxonalar uchun dori profillari, nordonlik, achchiqlik va qayta ishlash usullarini qulay tanlash imkonini beruvchi interaktiv katalog.",
    problem: "Restoratorlar va baristalar o‘zlari qidirayotgan ta'm profilini telefon orqali so‘rab vaqt yo‘qotishar edi.",
    approach: "Ta'm g‘ildiragi (flavour wheel) va kislotalilik darajasi bo‘yicha tezkor vizual filtrlar arxitekturasi ishlab chiqildi.",
    solution: "Foydalanuvchi o‘ziga kerakli ta'm, qayta ishlash (yuvilgan / tabiiy) va mintaqa bo‘yicha filtrlab, bitta tugma orqali oylik yetkazib berish shartnomasini so‘rashi mumkin.",
    deliverables: [
      "Ta'm profillari filtrlash arxitekturasi",
      "Kofe donalari spetsifikatsiya kartalari",
      "Ulgurji narxlar darajasi kalkulyatori",
      "Telegram orqali tezkor buyurtma"
    ],
    metricsContext: "Katalog orqali qabul qilingan arizalarning 82%i birinchi qo‘ng‘iroqdayoq buyurtmaga aylandi.",
    featured: false,
    challengeDetails: [
      "Specialty kofe xaridorlari oddiy xaridor emas — ular dori balandligi (masl), qayta ishlash usuli va notalarni talab qiladi.",
      "Kompaniya har oy yangi partiya donlarini kiritardi, katalog oson yangilanuvchi bo‘lishi shart edi.",
      "Ulgurji narxlar partiya hajmiga qarab o‘zgarardi."
    ],
    strategyPoints: [
      "Ta'm profillari bo‘yicha vizual radar teglari yaratildi (Sitrus, Shokolad, Gullar, Rezavor).",
      "Ko‘p parametrli filtrlar: Qovurish darajasi (Filter / Espresso), Mamlakat (Efiopiya, Kolumbiya, Keniya).",
      "To‘g‘ridan-to‘g‘ri menejerga partiya buyurtmasini shakllantiruvchi qulay yig‘ma savat."
    ],
    visualHighlights: [
      { label: "Flavour Filter Grid", description: "Notlar va kislotalilik bo‘yicha ko‘p parametrli filtr paneli." },
      { label: "Origin Passport", description: "Fermerlik koordinatalari va dengiz sathidan balandlik ko‘rsatkichlari." },
      { label: "B2B Volume Bar", description: "Partiya hajmiga ko‘ra narx tushishini ko‘rsatuvchi interfaol chiziq." }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Filter State Engine"],
    whyNotOtherFormats: "Bir sahifali sayt 40 dan ortiq navlarni sig‘dira olmasdi; murakkab web ilova esa boshqaruvni qiyinlashtirardi. Interaktiv Product Catalog ideal muvozanat bo‘ldi."
  },
  {
    id: "strata-analytics",
    slug: "strata-analytics",
    title: "Strata Ops",
    category: "Custom Web App",
    subtitle: "Chakana savdo tarmoqlari uchun ombor va xaridlar balansini boshqaruvchi tahliliy veb-dastur.",
    clientType: "Retail va ombor boshqaruvi",
    isConceptual: true,
    summary: "Murakkab Excel jadvallarini yagona qulay dashboardga aylantiruvchi, tezkor qaror qabul qilish platformasi.",
    problem: "12 ta filialdagi tovar qoldiqlarini birlashtirish har kuni 3 soat vaqt olardi va xatoliklarga olib kelardi.",
    approach: "Yuqori kontrastli qora tema, ko‘z toliqishini kamaytiruvchi ma'lumotlar to‘ri va tezkor qisqa tugmalar (hotkeys) integratsiyasi.",
    solution: "Real vaqt rejimida qoldiqlar kamayishi haqida ogohlantiruvchi va avtomatik xarid buyurtmasini shakllantiruvchi yengil veb-ilova.",
    deliverables: [
      "Dashboard va analitika interfeysi",
      "Filiallar o‘rtasida balans hisoblash mexanizmi",
      "Eksport va avtomat bildirishnomalar",
      "Rollar va xavfsiz autentifikatsiya"
    ],
    metricsContext: "Ombor buyurtmalarini shakllantirish vaqti 3 soatdan 15 daqiqagacha qisqardi.",
    featured: false,
    challengeDetails: [
      "Har bir filial har xil usulda qoldiq yuritgani uchun markaziy ombor rejalashtirishda xato qilardi.",
      "Standart ERP tizimlari juda og‘ir, qimmat va o‘rganish uchun oylarcha vaqt talab qilardi.",
      "Kassir va omborchilar uchun oddiy, tezkor va xato qilib bo‘lmaydigan interfeys zarur edi."
    ],
    strategyPoints: [
      "Dense Data Grid: Bir qarashda barcha 12 filialdagi yetishmayotgan tovarlarni qizil bilan belgilash.",
      "1-Click Purchase Order: Kam qolgan tovarlar bo‘yicha avtomatik ta'minotchi buyurtmasini tuzish.",
      "Klaviatura boshqaruvi: Sichqonchasiz tezkor kiritish uchun hotkeys tizimi."
    ],
    visualHighlights: [
      { label: "Branch Stock Matrix", description: "Barcha filiallar balansi va qoldiqlar harakati jadvali." },
      { label: "Auto-PO Generator", description: "1 soniyada PDF va Excel formatda xarid arizasini eksport qilish." },
      { label: "Audit Log Trail", description: "Qaysi xodim qachon qanday tovar qabul qilganini ko‘rsatuvchi xavfsizlik jurnali." }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Data Table Engine", "Role Management State"],
    whyNotOtherFormats: "Bu oddiy axborot sayti emas, balki real vaqtda hisob-kitob va operatsiyalarni bajaruvchi murakkab mantiq talab qilgani sababli Custom Web App sifatida loyihalandi."
  }
];
