import React from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Ehtiyoj Tahlili & Tashxis',
      timeline: '1-hafta',
      description:
        'Sizga shunchaki "sayt" emas, balki qaysi format biznesingizni yurgizishi kerakligini aniqlaymiz. Solution Finder va birgalikdagi brief orqali asosiy vazifalarni belgilab olamiz.',
      deliverable: 'Loyiha arxitekturasi va texnik spetsifikatsiya',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Konsept & Vizual Tizim',
      timeline: '2-hafta',
      description:
        'Kompaniyangiz nufuziga mos, tahririy tipografika va asimmetrik grid asosida individual vizual yo‘nalish quramiz. Standart shablonlarni mutlaqo chetlab o‘tamiz.',
      deliverable: 'Interfaol Figma prototipi va Design System',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Muhandislik & Kod',
      timeline: '3–4-hafta',
      description:
        'Zamonaviy frontend texnologiyalarida toza, sub-second tezlikda yuklanadigan, barcha telefon va monitorlarda mukammal ishlaydigan kod yozamiz.',
      deliverable: 'Tezkor, xavfsiz va to‘liq moslashuvchan veb-platforma',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Sinov & Ishga Tushirish',
      timeline: 'Yakuniy bosqich',
      description:
        'Barcha formalarni, yuklanish tezligini, SEO sozlamalarini va qurilmalarni to‘liq testdan o‘tkazamiz hamda saytni jonli serverga joylaymiz.',
      deliverable: 'Jonli sayt, monitoring va foydalanish qo‘llanmasi',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-white border-b border-studio-border">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 pb-16">
          <Eyebrow number="04" accent="cobalt">
            Ishlash Tartibi
          </Eyebrow>
          <Heading as="h2" size="display">
            Mavhumlikdan xoli, shaffof jarayon.
          </Heading>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            Biznes egalarining eng katta og‘rig‘i — dasturchilar bilan noaniq muloqot va muddatsiz kutilish. NOVA® har bir bosqichni aniq natijalar bilan olib boradi.
          </p>
        </div>

        {/* 4-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-studio-bgLight/40 border border-studio-border p-8 flex flex-col justify-between hover:border-cobalt-600 transition-colors relative"
              >
                <div className="space-y-6">
                  {/* Step Top Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <span className="font-mono text-2xl font-bold text-cobalt-600">
                      {step.number}
                    </span>
                    <div className="p-2.5 bg-white border border-slate-200 text-studio-black">
                      <Icon className="w-5 h-5 text-cobalt-600" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-warmOrange-600 uppercase tracking-widest font-semibold">
                      {step.timeline}
                    </div>
                    <h3 className="font-display font-bold text-xl text-studio-black">
                      {step.title}
                    </h3>
                    <p className="text-sm text-studio-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-mono">
                  <span className="text-studio-muted block text-[10px] uppercase tracking-wider mb-1">
                    Topshiriladigan natija:
                  </span>
                  <span className="font-medium text-studio-black">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Principles Callout */}
        <div className="mt-16 p-8 sm:p-10 bg-studio-black text-white border border-studio-charcoal flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="font-mono text-xs uppercase text-warmOrange-400 font-semibold tracking-wider">
              NOVA® Hamkorlik Qoidasi
            </div>
            <p className="font-display text-lg sm:text-xl text-slate-100 font-medium">
              Hech qanday kutilmagan to‘lovlar, shablon nusxalar yoki aloqasiz yo‘qolib qolishlar yo‘q. Shartnoma va belgilangan muddat kafolatlanadi.
            </p>
          </div>
          <div className="shrink-0 font-mono text-xs text-slate-400">
            Haftalik demo taqdimotlar · Shaxsiy menejer
          </div>
        </div>
      </Container>
    </section>
  );
};
