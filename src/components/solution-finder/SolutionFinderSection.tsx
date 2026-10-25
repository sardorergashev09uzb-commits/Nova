import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { ProgressBar } from './ProgressBar';
import { StepQuestion } from './StepQuestion';
import { RecommendationView } from './RecommendationView';
import { solutionQuestions, calculateRecommendation } from '../../data/solutionRules';
import { RecommendationResult } from '../../types/solution-finder';
import { ArrowLeft, ArrowRight, RotateCcw, AlertCircle, Compass } from 'lucide-react';

interface SolutionFinderSectionProps {
  onProceedToBrief?: (recommendation: RecommendationResult, answers: Record<string, string>) => void;
  isStandalonePage?: boolean;
}

export const SolutionFinderSection: React.FC<SolutionFinderSectionProps> = ({
  onProceedToBrief,
  isStandalonePage = false,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const totalSteps = solutionQuestions.length;
  const currentQuestion = solutionQuestions[currentStepIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const handleSelectOption = (value: string) => {
    setValidationError(null);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (!currentAnswer) {
      setValidationError("Iltimos, keyingi bosqichga o‘tish uchun variantlardan birini tanlang.");
      return;
    }

    setValidationError(null);
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    setValidationError(null);
    if (isCompleted) {
      setIsCompleted(false);
      setCurrentStepIndex(totalSteps - 1);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleEditAnswers = () => {
    setIsCompleted(false);
    setCurrentStepIndex(0);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
    setValidationError(null);
  };

  const recommendation = isCompleted ? calculateRecommendation(answers) : null;

  return (
    <section id="solution-finder" className="py-20 md:py-32 bg-studio-bgLight border-b border-studio-border">
      <Container size="default">
        {/* Section Header */}
        <div className="space-y-4 pb-12 border-b border-studio-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Eyebrow number="05" accent="orange">
              Interaktiv Yechim Topuvchi
            </Eyebrow>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-studio-muted">
              <Compass className="w-4 h-4 text-warmOrange-600" />
              <span>Shaffof Qarorlar Daraxti</span>
            </div>
          </div>

          <Heading as="h2" size="display">
            NOVA® Solution Finder.
          </Heading>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed max-w-2xl">
            5 ta oddiy savolga javob berib, biznesingiz uchun qaysi turdagi veb-yechim (Landing, Biznes sayt, Katalog yoki Veb-ilova) eng mos ekanini aniqlang.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="mt-12 bg-white border border-studio-border p-6 sm:p-12 shadow-sm">
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress Bar */}
              <ProgressBar
                currentStep={currentStepIndex + 1}
                totalSteps={totalSteps}
                stepTitle={currentQuestion.question}
              />

              {/* Question & Options */}
              <StepQuestion
                question={currentQuestion}
                selectedOptionValue={currentAnswer}
                onSelectOption={handleSelectOption}
              />

              {/* Validation Alert */}
              {validationError && (
                <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStepIndex === 0}
                  className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                    currentStepIndex === 0
                      ? 'text-slate-300 pointer-events-none'
                      : 'text-studio-dark hover:text-cobalt-600'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Orqaga</span>
                </button>

                <div className="flex items-center gap-3">
                  {Object.keys(answers).length > 0 && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-mono text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer hidden sm:flex"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Tozalash</span>
                    </button>
                  )}

                  <Button
                    variant="primary"
                    size="md"
                    icon="arrow-right"
                    onClick={handleNext}
                  >
                    {currentStepIndex === totalSteps - 1 ? 'Natijani Ko‘rish' : 'Keyingi Qadam'}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            recommendation && (
              <RecommendationView
                recommendation={recommendation}
                userAnswers={answers}
                onEditAnswers={handleEditAnswers}
                onReset={handleReset}
                onProceedToBrief={(rec) => {
                  if (onProceedToBrief) {
                    onProceedToBrief(rec, answers);
                  } else {
                    document.getElementById('brief-cta')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};
