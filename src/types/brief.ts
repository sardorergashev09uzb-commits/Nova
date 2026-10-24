export interface ProjectBriefData {
  // Step 1: Contact
  fullName: string;
  email: string;
  phoneOrTelegram: string;
  companyName: string;

  // Step 2: Project Essence
  websiteType: 'Landing Page' | 'Business Website' | 'Product Catalog' | 'Custom Web App' | 'Not Sure';
  projectGoal: string;
  targetAudience: string;

  // Step 3: Features & Scope
  pagesNeeded: string[];
  mustHaveFeatures: string[];
  hasBrandIdentity: boolean;
  referenceWebsites?: string;

  // Step 4: Budget & Timeline
  budgetRange: string;
  targetLaunchDate: string;
  additionalNotes?: string;
}

export type BriefStep = 1 | 2 | 3 | 4 | 'review' | 'success';
