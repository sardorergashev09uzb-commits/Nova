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
  }
];
