# NOVA® Digital Studio — Creative Direction & Web Experience

> **NOVA®** — Biznes muammolarini chiroyli va foydali raqamli yechimlarga aylantiradigan konseptual studiya veb-sayti.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, **Vite 6** and **Vercel Serverless Architecture**.

---

## ✨ Asosiy Imkoniyatlar (Key Features)

* **Art Direction & Editorial Typography:** `Space Grotesk` va `Plus Jakarta Sans` asosidagi o‘ziga xos tahririy tipografik tizim, asimmetrik kompozitsiyalar va Cobalt Blue (`#1D4ED8`) / Warm Orange (`#EA580C`) dizayn tokenlari.
* **Formatlar Taqqoslash Matritsasi:** 4 asosiy veb-sayt formati (Landing Page, Business Website, Product Catalog, Custom Web App) taqqoslashi (Desktop jadval + Mobil kartalar rejimi).
* **Konseptual Keyslar (Deep-Dive Portfolio):** Real biznes keyslari tahlili, strategiya, nima uchun boshqa formatlar rad etilgani va texnologiyalar ro‘yxati (0% soxta sharhlar).
* **Interaktiv Solution Finder:** 5 bosqichli so‘rovnoma orqali biznes ehtiyojiga eng mos veb-yechimni aniqlovchi shaffof qoidalar algoritmi.
* **Ko‘p Bosqichli Project Brief:** Qamrov, sahifalar, byudjet, muddat va referenslarni qabul qiluvchi interaktiv shakl (Solution Finder natijalari avtomatik to‘ldiriladi).
* **NOVA® Lead CMS & Admin Panel:**
  * Studiya paroli bilan xavfsiz kirish (`nova2026`).
  * Yangi lidlar, konversiya va kutilayotgan byudjet KPI metrikalari.
  * Arizalarni qidirish, statuslar bo‘yicha filtrlash (`Yangi`, `Jarayonda`, `Taklif yuborildi`, `Qabul qilindi`).
  * Mijozlar bilan bir bosishda aloqa (Telegram, Email).
  * Ichki studiya qaydlari (Admin Notes) va CSV/JSON formatida eksport.
* **Mobile-First & Accessible:** To‘liq moslashuvchan, `prefers-reduced-motion` qo‘llab-quvvatlovi.

---

## 🛠️ Texnologik Stack (Tech Stack)

| Qatlam | Texnologiyalar |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Tailwind CSS, Lucide Icons |
| **Tooling** | Vite 6, PostCSS, Autoprefixer |
| **Backend & API** | Vercel Serverless Functions (`/api/briefs`, `/api/auth`, `/api/stats`) |
| **Storage** | Client Persistent Storage Adapter + Serverless In-Memory Fallback |
| **Deployment** | Vercel (`vercel.json` SPA routing bilan) |

---

## 🚀 Mahalliy Ishga Tushirish (Local Setup)

```bash
# 1. Repozitoriyni klonlash
git clone https://github.com/sardorergashev09uzb-commits/Nova.git
cd Nova

# 2. Bog'liqliklarni o'rnatish
npm install

# 3. Dasturchi serverini yoqish
npm run dev
```

Brauzeringizda oching: `http://localhost:5173/`

### 🔐 Studiya Boshqaruv Paneli (Admin Lead CMS):

Studiya arizalari (leadlar) va loyiha holatlarini boshqarish paneli xavfsizlik va estetik maqsadida asosiy sayt menyusida ochiq ko‘rsatilmaydi. 

Portfolio ko‘ruvchilar va rekruterlar tizimni sinab ko‘rishi uchun:
1. Sayt havolasi oxiriga **`/#admin`** qo‘shing (masalan: `https://your-nova.vercel.app/#admin` yoki mahalliy `http://localhost:5173/#admin`).
2. Kirish paroli (Studio Passcode): **`nova2026`**
3. Tizimda barcha arizalar, statuslarni boshqarish, ichki qaydlar (Admin Notes) va CSV/JSON eksport imkoniyatlari mavjud.

---

## 📦 Ishlab Chiqarish Yig'masi (Production Build)

```bash
npm run build
```
Yig‘ilgan statik fayllar `dist/` papkasida hosil bo‘ladi va Vercel, Netlify, GitHub Pages yoki Nginx serverlariga to‘g‘ridan-to‘g‘ri yuklanishi mumkin.

---

## 📄 Litsenziya

MIT License © 2026 NOVA® Digital Studio.
