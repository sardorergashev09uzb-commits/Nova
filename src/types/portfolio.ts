export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: 'Landing Page' | 'Business Website' | 'Product Catalog' | 'Custom Web App';
  subtitle: string;
  clientType: string;
  isConceptual: true;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  deliverables: string[];
  metricsContext: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  bestFor: string;
  businessProblem: string;
  ourSolution: string;
  keyFeatures: string[];
  deliverables: string[];
  typicalTimeline: string;
  pricingIndicator: string;
}
