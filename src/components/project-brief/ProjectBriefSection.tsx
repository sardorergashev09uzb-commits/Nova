import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import {
  ProjectBriefData,
  BriefStep,
  BriefValidationErrors,
  WebsiteType,
} from '../../types/brief';
import { StepContact } from './StepContact';
import { StepProjectDetails } from './StepProjectDetails';
import { StepFeaturesScope } from './StepFeaturesScope';
import { StepBudgetTimeline } from './StepBudgetTimeline';
import { StepReviewSubmit } from './StepReviewSubmit';
import { BriefSuccessView } from './BriefSuccessView';
import { BriefStorageService } from '../../services/briefStorage';
import {
  FileText,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';

interface ProjectBriefSectionProps {
  prefilledType?: string | null;
  finderAnswers?: Record<string, string>;
  onBriefSubmitted?: (data: ProjectBriefData) => void;
}

const initialBriefData: ProjectBriefData = {
  fullName: '',
  email: '',
  phoneOrTelegram: '',
  companyName: '',
  roleOrPosition: '',

  websiteType: 'Business Website',
  businessDescription: '',
  projectGoal: '',
  targetAudience: '',

  pagesNeeded: [
    'Bosh sahifa (Hero, xizmatlar, keyslar, CTA)',
    'Xizmatlar / Takliflar taqdimoti',
    'Kompaniya haqida / Jamoa va qadriyatlar',
    'Aloqa / Xarita va to‘g‘ridan-to‘g‘ri shakl',
  ],
  mustHaveFeatures: [
    '100% Moslashuvchan dizayn (Mobile/Tablet/Desktop)',
    'Telegram-bot bilan zudlikda bildirishnomalar',
  ],
  hasBrandIdentity: 'partial',
  referenceWebsites: '',

  budgetRange: '$2,500 – $5,000',
  targetLaunchDate: '4-6 hafta (Standart)',
  additionalNotes: '',
};

export const ProjectBriefSection: React.FC<ProjectBriefSectionProps> = ({
  prefilledType,
  finderAnswers,
  onBriefSubmitted,
}) => {
  const [currentStep, setCurrentStep] = useState<BriefStep>(1);
  const [data, setData] = useState<ProjectBriefData>(initialBriefData);
  const [errors, setErrors] = useState<BriefValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasPrefilledNotice, setHasPrefilledNotice] = useState(false);
  const [submittedRefCode, setSubmittedRefCode] = useState<string>('');

  // Sync prefill from Solution Finder
  useEffect(() => {
    if (prefilledType) {
      const validTypes: WebsiteType[] = [
        'Landing Page',
        'Business Website',
        'Product Catalog',
        'Custom Web App',
        'Not Sure',
      ];
      const matched = validTypes.find(
        (t) => t.toLowerCase() === prefilledType.toLowerCase()
      );
      if (matched) {
        setData((prev) => ({
          ...prev,
          websiteType: matched,
        }));
        setHasPrefilledNotice(true);
      }
    }

    if (finderAnswers) {
      setData((prev) => {
        const next = { ...prev };
        // Map finder answers to brief if available
        if (finderAnswers['q-budget']) {
          const b = finderAnswers['q-budget'];
          if (b.includes('1,200') || b.includes('2,500')) {
            next.budgetRange = '$1,200 – $2,500';
          } else if (b.includes('5,000') && !b.includes('10,000')) {
            next.budgetRange = '$2,500 – $5,000';
          } else if (b.includes('10,000') && !b.includes('+')) {
            next.budgetRange = '$5,000 – $10,000';
          } else if (b.includes('+')) {
            next.budgetRange = '$10,000+';
          }
        }
        if (finderAnswers['q-outcome']) {
          next.projectGoal = finderAnswers['q-outcome'];
        }
        if (finderAnswers['q-industry']) {
          next.businessDescription = `Faoliyat: ${finderAnswers['q-industry']}`;
        }
        return next;
      });
    }
  }, [prefilledType, finderAnswers]);

  const handleChange = (field: keyof ProjectBriefData, value: any) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear validation error on change
    if (errors[field as keyof BriefValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateStep = (step: BriefStep): boolean => {
    const newErrors: BriefValidationErrors = {};

    if (step === 1) {
      if (!data.fullName.trim() || data.fullName.trim().length < 2) {
        newErrors.fullName = "Ism va familiyangizni to'liq kiriting";
      }
      if (!data.companyName.trim()) {
        newErrors.companyName = 'Kompaniya yoki loyiha nomini kiriting';
      }
      if (!data.email.trim()) {
        newErrors.email = 'Elektron pochtangizni kiriting';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
        newErrors.email = "Haqiqiy elektron pochta manzilini kiriting (masalan: name@company.uz)";
      }
      if (!data.phoneOrTelegram.trim() || data.phoneOrTelegram.trim().length < 4) {
        newErrors.phoneOrTelegram = 'Telefon raqam yoki Telegram kontaktini kiriting';
      }
    } else if (step === 2) {
      if (!data.websiteType) {
        newErrors.websiteType = 'Kerakli veb-sayt turini tanlang';
      }
      if (!data.businessDescription.trim() || data.businessDescription.trim().length < 5) {
        newErrors.businessDescription = 'Faoliyat sohangiz haqida qisqacha maʼlumot bering (kamida 5 belgi)';
      }
      if (!data.projectGoal.trim() || data.projectGoal.trim().length < 4) {
        newErrors.projectGoal = 'Sayt oldidagi asosiy maqsadni belgilang yoki kiriting';
      }
    } else if (step === 4) {
      if (!data.budgetRange) {
        newErrors.budgetRange = 'Mo‘ljallangan byudjet diapazonini tanlang';
      }
      if (!data.targetLaunchDate) {
        newErrors.targetLaunchDate = 'Ishga tushirish muddatini tanlang';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scrollToBriefTop = () => {
    const el = document.getElementById('brief');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      return;
    }

    if (currentStep === 1) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(3);
    else if (currentStep === 3) setCurrentStep(4);
    else if (currentStep === 4) setCurrentStep('review');

    scrollToBriefTop();
  };

  const handleBack = () => {
    if (currentStep === 2) setCurrentStep(1);
    else if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 4) setCurrentStep(3);
    else if (currentStep === 'review') setCurrentStep(4);

    scrollToBriefTop();
  };

  const handleJumpToStep = (stepNumber: 1 | 2 | 3 | 4) => {
    setCurrentStep(stepNumber);
    scrollToBriefTop();
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Generate clean ref code and save to backend storage
    const refCode = `NV-BRIEF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    BriefStorageService.saveBrief(data, refCode);
    setSubmittedRefCode(refCode);

    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep('success');
      scrollToBriefTop();
      if (onBriefSubmitted) {
        onBriefSubmitted(data);
      }
    }, 600);
  };

  const handleReset = () => {
    setData(initialBriefData);
    setErrors({});
    setCurrentStep(1);
    setHasPrefilledNotice(false);
    scrollToBriefTop();
  };

  const stepsList = [
    { num: 1, label: 'Kontaktlar' },
    { num: 2, label: 'Loyiha turi' },
    { num: 3, label: 'Qamrov & Funksiyalar' },
    { num: 4, label: 'Byudjet & Muddat' },
  ];

  return (
    <section id="brief" className="py-24 bg-studio-bgLight relative border-t border-studio-border">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <Eyebrow number="06" accent="orange">
            Loyiha Briefi (Ariza)
          </Eyebrow>

          <Heading as="h2" size="display" className="leading-[1.1]">
            Talablarni tizimlashtiring, <br />
            <span className="text-cobalt-600">aniq texnik brief</span> bilan boshlang.
          </Heading>

          <p className="text-base sm:text-lg text-studio-muted leading-relaxed font-sans">
            Mavhum suhbatlarsiz va tushunarsiz topshiriqlarsiz. 4 ta oddiy qadamda biznesingiz nimalarga muhtojligini ko‘rsating va tayyor texnik xulosani oling.
          </p>

          {hasPrefilledNotice && currentStep !== 'success' && (
            <div className="flex items-center gap-2 p-3 bg-warmOrange-50 border border-warmOrange-200 text-warmOrange-900 text-xs font-mono">
              <Sparkles className="w-4 h-4 text-warmOrange-600 flex-shrink-0" />
              <span>
                Solution Finder natijalari formaga avtomatik tarzda kiritildi: <strong>{data.websiteType}</strong> ({data.budgetRange})
              </span>
            </div>
          )}
        </div>

        {/* Step Navigation Pill Indicator (Only if not success) */}
        {currentStep !== 'success' && (
          <div className="mb-10 pb-6 border-b border-studio-border">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 w-full md:w-auto">
                {stepsList.map((s) => {
                  const isCurrent = currentStep === s.num;
                  const isCompleted = typeof currentStep === 'number' ? currentStep > s.num : true;
                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => handleJumpToStep(s.num as any)}
                      className={`flex items-center gap-2 px-3 py-2 text-xs font-mono transition-all cursor-pointer border ${
                        isCurrent
                          ? 'bg-studio-black text-white border-studio-black font-bold'
                          : isCompleted
                          ? 'bg-white text-cobalt-700 border-cobalt-200 hover:border-cobalt-400'
                          : 'bg-white text-slate-400 border-slate-200 hover:text-slate-700'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-none flex items-center justify-center text-[10px] font-bold ${
                          isCompleted && !isCurrent
                            ? 'bg-cobalt-600 text-white'
                            : isCurrent
                            ? 'bg-warmOrange-500 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {isCompleted && !isCurrent ? <Check className="w-3 h-3" /> : s.num}
                      </span>
                      <span className="whitespace-nowrap">{s.label}</span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    if (validateStep(1) && validateStep(2) && validateStep(4)) {
                      setCurrentStep('review');
                      scrollToBriefTop();
                    }
                  }}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-mono transition-all cursor-pointer border ${
                    currentStep === 'review'
                      ? 'bg-studio-black text-white border-studio-black font-bold'
                      : 'bg-white text-slate-400 border-slate-200 hover:text-slate-700'
                  }`}
                >
                  <span className="w-4 h-4 rounded-none bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold">
                    05
                  </span>
                  <span>Tekshirish & Xulosa</span>
                </button>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-studio-muted">
                <span>Bosqich:</span>
                <span className="font-bold text-studio-black">
                  {currentStep === 'review' ? 'Xulosa' : `${currentStep} / 4`}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step Content Card */}
        <div className="bg-white border border-studio-border p-6 sm:p-10 shadow-sm relative">
          {currentStep === 1 && (
            <StepContact
              data={data}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {currentStep === 2 && (
            <StepProjectDetails
              data={data}
              errors={errors}
              onChange={handleChange}
              prefilledFromFinder={hasPrefilledNotice}
            />
          )}

          {currentStep === 3 && (
            <StepFeaturesScope
              data={data}
              onChange={handleChange}
            />
          )}

          {currentStep === 4 && (
            <StepBudgetTimeline
              data={data}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {currentStep === 'review' && (
            <StepReviewSubmit
              data={data}
              onEditStep={handleJumpToStep}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}

          {currentStep === 'success' && (
            <BriefSuccessView
              data={data}
              referenceCode={submittedRefCode}
              onReset={handleReset}
            />
          )}

          {/* Navigation Controls (Steps 1 through 4) */}
          {typeof currentStep === 'number' && (
            <div className="flex items-center justify-between gap-4 pt-8 mt-8 border-t border-studio-border">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleBack}
                  className="cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ortga
                </Button>
              ) : (
                <div></div>
              )}

              <Button
                variant="primary"
                size="md"
                onClick={handleNext}
                className="cursor-pointer"
              >
                {currentStep === 4 ? "Tekshirishga o'tish" : 'Keyingisi'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
