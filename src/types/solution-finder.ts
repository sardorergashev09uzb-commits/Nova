export type BusinessStage = 'idea' | 'new_business' | 'established' | 'scaling';

export type PrimaryGoal = 
  | 'test_offer' 
  | 'company_credibility' 
  | 'showcase_products' 
  | 'automate_operations';

export type BudgetRange = 'starter' | 'standard' | 'advanced' | 'custom' | 'undecided';

export interface SolutionOption {
  value: string;
  label: string;
  description: string;
  hint?: string;
}

export interface SolutionQuestion {
  id: string;
  stepNumber: number;
  question: string;
  context: string;
  options: SolutionOption[];
}

export interface RecommendationResult {
  recommendedType: 'Landing Page' | 'Business Website' | 'Product Catalog' | 'Custom Web App';
  title: string;
  subtitle: string;
  whyFit: string[];
  deliverables: string[];
  estimatedTimeline: string;
  suitableAlternatives?: string[];
  caveats: string;
}
