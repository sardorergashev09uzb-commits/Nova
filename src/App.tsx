import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Container } from './components/layout/Container';
import { Button } from './components/ui/Button';
import { Eyebrow } from './components/ui/Eyebrow';
import { Heading } from './components/ui/Heading';
import { Card } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Layers, 
  Palette, 
  Type, 
  CheckCircle2, 
  Sparkles,
  Compass,
  FileText,
  Sliders
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'preview'>('preview');

  return (
    <div className="min-h-screen flex flex-col bg-studio-bgLight text-studio-dark">
      {/* Site Header */}
      <Header />

      <main className="flex-grow">
        {/* Phase 2 Announcement Bar */}
        <section className="bg-studio-black text-white border-b border-studio-charcoal py-3">
          <Container size="wide">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warmOrange-500 animate-ping"></span>
                <span className="text-warmOrange-400 font-semibold">2-BOSQICH</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-300">Vizual Design System & Komponentlar Poydevori</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="cobalt">Vite + React 18</Badge>
                <Badge variant="orange">Tailwind Tokens</Badge>
                <Badge variant="dark">Phase 2 Verified</Badge>
              </div>
            </div>
          </Container>
        </section>

        {/* Hero Foundation Section */}
        <section className="py-20 lg:py-28 border-b border-studio-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 space-y-6">
                <Eyebrow number="02" accent="orange">
                  Design System Foundation
                </Eyebrow>
                <Heading as="h1" size="hero">
                  NOVA® <br />
                  <span className="text-cobalt-600">Vizual</span> Tizim & Poydevor.
                </Heading>
                <p className="text-lg sm:text-xl text-studio-muted max-w-2xl leading-relaxed">
                  Standart SaaS va agentlik shablonlaridan xoli, qat'iy asimmetrik kompozitsiya, tahririy tipografika va kobalt-to‘q sariq ranglar uyg‘unligidagi mustaqil studiya design systemi.
                </p>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white p-6 border border-studio-border shadow-sm">
                  <div className="text-xs font-mono uppercase text-studio-muted mb-2 tracking-wider">
                    Arxitektura holati
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">1-bosqich: Loyiha auditi</span>
                      <span className="text-emerald-600 font-mono font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Tasdiqlangan
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">2-bosqich: Design System</span>
                      <span className="text-cobalt-600 font-mono font-semibold flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> Tayyor
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-600">3-bosqich: Landing & Hero</span>
                      <span className="text-slate-400 font-mono">Keyingi qadam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Tab Navigation for Design System Inspection */}
        <section className="bg-white border-b border-studio-border sticky top-20 z-40">
          <Container size="wide">
            <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto py-4">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-2 pb-1 text-sm font-semibold tracking-tight transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                  activeTab === 'preview'
                    ? 'border-cobalt-600 text-cobalt-600'
                    : 'border-transparent text-studio-muted hover:text-studio-black'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Poydevor Namoyishi</span>
              </button>
              <button
                onClick={() => setActiveTab('tokens')}
                className={`flex items-center gap-2 pb-1 text-sm font-semibold tracking-tight transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                  activeTab === 'tokens'
                    ? 'border-cobalt-600 text-cobalt-600'
                    : 'border-transparent text-studio-muted hover:text-studio-black'
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>Design Tokens (Rang & Shrift)</span>
              </button>
              <button
                onClick={() => setActiveTab('components')}
                className={`flex items-center gap-2 pb-1 text-sm font-semibold tracking-tight transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                  activeTab === 'components'
                    ? 'border-cobalt-600 text-cobalt-600'
                    : 'border-transparent text-studio-muted hover:text-studio-black'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Qayta ishlatiluvchi UI Komponentlar</span>
              </button>
            </div>
          </Container>
        </section>

        {/* Content based on Active Tab */}
        {activeTab === 'preview' && (
          <section className="py-16 space-y-20">
            {/* Design Direction Overview */}
            <Container size="wide">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card variant="light" hoverEffect className="space-y-4">
                  <Eyebrow accent="cobalt" number="01">Kobalt & To‘q Sariq</Eyebrow>
                  <Heading as="h3" size="title">Rang falsafasi</Heading>
                  <p className="text-sm text-studio-muted leading-relaxed">
                    Studiya intellektual salohiyatini ifodalovchi Deep Cobalt Blue (`#1D4ED8`) va diqqatni jalb qiluvchi Warm Orange (`#EA580C`) aksenti. Keraksiz ko‘p ranglilik va noaniqlik yo‘q.
                  </p>
                </Card>

                <Card variant="light" hoverEffect className="space-y-4">
                  <Eyebrow accent="orange" number="02">Space Grotesk & Jakarta</Eyebrow>
                  <Heading as="h3" size="title">Editorial Tipografika</Heading>
                  <p className="text-sm text-studio-muted leading-relaxed">
                    Katta masshtabdagi tahririy sarlavhalar va toza o‘qiladigan body shrifti. Matn faqat ma'lumot emas, balki vizual kompozitsiyaning asosiy arxitektura elementidir.
                  </p>
                </Card>

                <Card variant="dark" hoverEffect className="space-y-4">
                  <Eyebrow accent="orange" number="03">Asimmetrik To‘r</Eyebrow>
                  <Heading as="h3" size="title" dark>Erkin kompozitsiya</Heading>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Keng havo (whitespace), kutilmagan assimetriya va to‘g‘ri proporsiyalar. Standart bir xil qoliplardan uzoqda.
                  </p>
                </Card>
              </div>
            </Container>

            {/* Foundational Elements Visual Showcase */}
            <Container size="wide">
              <div className="bg-white border border-studio-border p-8 sm:p-12 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-studio-border">
                  <div className="space-y-2">
                    <Eyebrow accent="cobalt">Foundational UI</Eyebrow>
                    <Heading as="h2" size="display">Tugmalar va boshqaruv elementlari</Heading>
                  </div>
                  <p className="text-sm text-studio-muted max-w-md">
                    Har bir interaktiv tugma aniq maqsadga ega: asosiy harakat (Primary), qat'iy buyruq (Secondary), yordamchi havola yoki CTA.
                  </p>
                </div>

                {/* Button Variations */}
                <div className="space-y-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-studio-muted font-semibold">
                    Tugma variantlari (Button Variants)
                  </h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary" icon="arrow-up-right">
                      Primary (Cobalt)
                    </Button>
                    <Button variant="warm" icon="arrow-right">
                      Warm Accent
                    </Button>
                    <Button variant="secondary" icon="arrow-up-right">
                      Secondary (Dark)
                    </Button>
                    <Button variant="outline">
                      Outline Minimal
                    </Button>
                    <Button variant="ghost">
                      Ghost Text Button
                    </Button>
                    <Button variant="primary" size="sm" icon="arrow-right">
                      Kichik o‘lcham (Small)
                    </Button>
                    <Button variant="warm" size="lg" icon="arrow-up-right">
                      Katta CTA (Large)
                    </Button>
                  </div>
                </div>

                {/* Badge Variations */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-studio-muted font-semibold">
                    Status va kategoriya teglari (Badges)
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="cobalt">Landing Page</Badge>
                    <Badge variant="orange">Solution Finder</Badge>
                    <Badge variant="dark">Custom Web App</Badge>
                    <Badge variant="neutral">Katalog Sayt</Badge>
                    <Badge variant="outline">Konseptual Keys</Badge>
                  </div>
                </div>

                {/* Card Variations Preview */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-studio-muted font-semibold">
                    Karta turlari (Card Styles)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="light" className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="cobalt">Xizmat Kartasi</Badge>
                        <span className="font-mono text-xs text-studio-muted">01 / 04</span>
                      </div>
                      <Heading as="h3" size="title">Korporativ Web Yechim</Heading>
                      <p className="text-sm text-studio-muted">
                        Kompaniyaning professional nufuzini ko‘rsatuvchi, xizmatlar va mahsulotlar arxitekturasini aniq ifodalovchi biznes veb-sayti.
                      </p>
                      <div className="pt-2">
                        <Button variant="ghost" size="sm" icon="arrow-right">Batafsil ko‘rish</Button>
                      </div>
                    </Card>

                    <Card variant="dark" className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="orange">Konseptual Keys</Badge>
                        <span className="font-mono text-xs text-slate-400">Concept Prototype</span>
                      </div>
                      <Heading as="h3" size="title" dark>Arxitektura Byurosi</Heading>
                      <p className="text-sm text-slate-300">
                        O‘ziga xos vizual identifikatsiya va portfolio taqdimoti orqali premium mijozlar ishonchini qozonish uchun yaratilgan raqamli platforma.
                      </p>
                      <div className="pt-2">
                        <Button variant="warm" size="sm" icon="arrow-up-right">Keysni o‘rganish</Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}

        {activeTab === 'tokens' && (
          <section className="py-16">
            <Container size="wide">
              <div className="bg-white border border-studio-border p-8 sm:p-12 space-y-12">
                <div>
                  <Eyebrow accent="cobalt">Design Tokens</Eyebrow>
                  <Heading as="h2" size="display" className="mt-2">Ranglar va Tipografik Mashtab</Heading>
                </div>

                {/* Color Swatches */}
                <div className="space-y-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-studio-muted font-semibold">
                    Asosiy Ranglar Palitrasi (Core Palette)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="space-y-2">
                      <div className="h-24 bg-cobalt-600 rounded-none border border-black/10"></div>
                      <div className="font-mono text-xs font-semibold">Cobalt 600</div>
                      <div className="font-mono text-[11px] text-slate-500">#1D4ED8 (Asosiy)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 bg-cobalt-800 rounded-none border border-black/10"></div>
                      <div className="font-mono text-xs font-semibold">Cobalt 800</div>
                      <div className="font-mono text-[11px] text-slate-500">#1E3A8A (To‘q)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 bg-warmOrange-600 rounded-none border border-black/10"></div>
                      <div className="font-mono text-xs font-semibold">Warm Orange 600</div>
                      <div className="font-mono text-[11px] text-slate-500">#EA580C (Aksent)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 bg-studio-black rounded-none border border-black/10"></div>
                      <div className="font-mono text-xs font-semibold">Studio Black</div>
                      <div className="font-mono text-[11px] text-slate-500">#0A0F1D (Matn)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 bg-studio-cardDark rounded-none border border-black/10"></div>
                      <div className="font-mono text-xs font-semibold">Card Dark</div>
                      <div className="font-mono text-[11px] text-slate-500">#131B2E (Yuza)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 bg-studio-bgLight rounded-none border border-studio-border"></div>
                      <div className="font-mono text-xs font-semibold">Studio Light</div>
                      <div className="font-mono text-[11px] text-slate-500">#F8FAFC (Fon)</div>
                    </div>
                  </div>
                </div>

                {/* Typography Scale */}
                <div className="space-y-6 pt-8 border-t border-slate-100">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-studio-muted font-semibold">
                    Tipografik Ierarxiya (Space Grotesk & Plus Jakarta Sans)
                  </h3>
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <div className="text-xs font-mono text-slate-400">Hero Display / text-7xl</div>
                      <div className="text-5xl sm:text-6xl font-display font-bold tracking-tighter">
                        Kreativ Direksiya & Web
                      </div>
                    </div>
                    <div className="border-b border-slate-100 pb-4">
                      <div className="text-xs font-mono text-slate-400">Section Title / text-4xl</div>
                      <div className="text-3xl sm:text-4xl font-display font-bold">
                        Biznes muammolariga to‘g‘ri raqamli yechim
                      </div>
                    </div>
                    <div className="border-b border-slate-100 pb-4">
                      <div className="text-xs font-mono text-slate-400">Body Large / text-lg</div>
                      <div className="text-lg font-sans text-studio-dark max-w-2xl leading-relaxed">
                        Har bir loyiha o‘ziga xos arxitektura va strategiyaga ega. Biz shablonlarni takrorlamaymiz, balki brendingiz uchun yagona tajribani quramiz.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">Mono Eyebrow / text-xs</div>
                      <div className="text-xs font-mono uppercase tracking-widest text-cobalt-600 font-semibold">
                        01 // DISCOVERY & STRATEGY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}

        {activeTab === 'components' && (
          <section className="py-16">
            <Container size="wide">
              <div className="bg-white border border-studio-border p-8 sm:p-12 space-y-12">
                <div>
                  <Eyebrow accent="orange">Reusability</Eyebrow>
                  <Heading as="h2" size="display" className="mt-2">Modulli Komponentlar Ro‘yxati</Heading>
                  <p className="text-sm text-studio-muted mt-2">
                    Keyingi bosqichlarda (Landing, Solution Finder, Brief) ishlatiladigan barcha asosiy bloklar:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 border border-studio-border space-y-2">
                    <div className="font-mono text-xs text-cobalt-600 font-semibold">Layout</div>
                    <h4 className="font-display font-bold text-lg">Header & MobileNav</h4>
                    <p className="text-xs text-studio-muted">
                      Sticky responsive boshqaruv paneli, ochiluvchi mobil menyu va to‘g‘ridan-to‘g‘ri CTA tugmalari.
                    </p>
                  </div>

                  <div className="p-6 border border-studio-border space-y-2">
                    <div className="font-mono text-xs text-cobalt-600 font-semibold">Layout</div>
                    <h4 className="font-display font-bold text-lg">Footer</h4>
                    <p className="text-xs text-studio-muted">
                      Studiya rekvizitlari, aloqa havolalari, tezkor navigatsiya va etika kafolati.
                    </p>
                  </div>

                  <div className="p-6 border border-studio-border space-y-2">
                    <div className="font-mono text-xs text-cobalt-600 font-semibold">UI Base</div>
                    <h4 className="font-display font-bold text-lg">Button</h4>
                    <p className="text-xs text-studio-muted">
                      5 ta uslub (primary, secondary, warm, outline, ghost) va 3 ta o‘lcham, ikonka animatsiyalari.
                    </p>
                  </div>

                  <div className="p-6 border border-studio-border space-y-2">
                    <div className="font-mono text-xs text-cobalt-600 font-semibold">Typography</div>
                    <h4 className="font-display font-bold text-lg">Eyebrow & Heading</h4>
                    <p className="text-xs text-studio-muted">
                      Tahririy mikrosarlavhalar, raqamli indikatorlar va asimmetrik matn masshtablari.
                    </p>
                  </div>

                  <div className="p-6 border border-studio-border space-y-2">
                    <div className="font-mono text-xs text-cobalt-600 font-semibold">Container</div>
                    <h4 className="font-display font-bold text-lg">Card & Container</h4>
                    <p className="text-xs text-studio-muted">
                      Yorug‘ va qorong‘i yuzalar, hover reaksiyalari, to‘r qoidalariga moslashuvchan chekka masofalar.
                    </p>
                  </div>

                  <div className="p-6 border border-studio-border space-y-2">
                    <div className="font-mono text-xs text-warmOrange-600 font-semibold">Future-ready</div>
                    <h4 className="font-display font-bold text-lg">Solution Finder Hooks</h4>
                    <p className="text-xs text-studio-muted">
                      5-bosqichdagi interaktiv tavsiya mexanizmi va 6-bosqichdagi brief uchun tayyorlangan ma'lumot arxitekturasi.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
