import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitle?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  stepTitle,
}) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-cobalt-600">Qadam {currentStep}</span>
          <span className="text-slate-400">/</span>
          <span className="text-studio-muted">{totalSteps} ta</span>
        </div>
        {stepTitle && (
          <span className="text-studio-muted font-sans font-medium hidden sm:inline">
            {stepTitle}
          </span>
        )}
        <span className="font-bold text-studio-black">{percentage}%</span>
      </div>

      <div className="w-full h-1.5 bg-slate-200 overflow-hidden rounded-none">
        <div
          className="h-full bg-warmOrange-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
