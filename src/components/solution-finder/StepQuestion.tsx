import React from 'react';
import { SolutionQuestion, SolutionOption } from '../../types/solution-finder';
import { CheckCircle2, Circle } from 'lucide-react';

interface StepQuestionProps {
  question: SolutionQuestion;
  selectedOptionValue?: string;
  onSelectOption: (value: string) => void;
}

export const StepQuestion: React.FC<StepQuestionProps> = ({
  question,
  selectedOptionValue,
  onSelectOption,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Question Header */}
      <div className="space-y-3">
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-warmOrange-600 font-bold">
          0{question.stepNumber} // SAVOL
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-studio-black leading-snug">
          {question.question}
        </h3>
        <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
          {question.context}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelectOption(option.value)}
              className={`w-full text-left p-5 sm:p-6 transition-all duration-200 border cursor-pointer flex items-start justify-between gap-4 ${
                isSelected
                  ? 'border-warmOrange-500 bg-warmOrange-50/40 shadow-sm ring-1 ring-warmOrange-500'
                  : 'border-studio-border hover:border-slate-400 bg-white hover:bg-slate-50/50'
              }`}
            >
              <div className="space-y-1.5 pr-2">
                <div className={`font-display font-bold text-base sm:text-lg ${isSelected ? 'text-studio-black' : 'text-studio-black'}`}>
                  {option.label}
                </div>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  {option.description}
                </p>
              </div>

              <div className="shrink-0 mt-1">
                {isSelected ? (
                  <CheckCircle2 className="w-5 h-5 text-warmOrange-600" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
