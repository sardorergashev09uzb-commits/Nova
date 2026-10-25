export type WebsiteType =
  | 'Landing Page'
  | 'Business Website'
  | 'Product Catalog'
  | 'Custom Web App'
  | 'Not Sure';

export interface ProjectBriefData {
  // Step 1: Kontaktlar va Kompaniya
  fullName: string;
  email: string;
  phoneOrTelegram: string;
  companyName: string;
  roleOrPosition?: string;

  // Step 2: Veb-sayt yo‘nalishi va Maqsad
  websiteType: WebsiteType;
  businessDescription: string;
  projectGoal: string;
  targetAudience: string;

  // Step 3: Sahifalar va Funksiyalar
  pagesNeeded: string[];
  mustHaveFeatures: string[];
  hasBrandIdentity: 'yes' | 'partial' | 'no';
  referenceWebsites?: string;

  // Step 4: Byudjet va Muddat
  budgetRange: string;
  targetLaunchDate: string;
  additionalNotes?: string;
}

export type BriefStep = 1 | 2 | 3 | 4 | 'review' | 'success';

export interface BriefValidationErrors {
  fullName?: string;
  email?: string;
  phoneOrTelegram?: string;
  companyName?: string;
  websiteType?: string;
  businessDescription?: string;
  projectGoal?: string;
  budgetRange?: string;
  targetLaunchDate?: string;
}
