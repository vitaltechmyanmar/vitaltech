export type RoutePath =
  | '/'
  | '/services'
  | '/industries'
  | '/about'
  | '/insights'
  | '/contact'
  | '/404';

export type ServiceRoutePath = `/services/${string}`;

export type IndustryRoutePath = `/industries/${string}`;

export type InsightRoutePath = `/insights/${string}`;

export type PagePath = RoutePath | ServiceRoutePath | IndustryRoutePath | InsightRoutePath;

export interface PageMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
}

export interface NavigationItem {
  label: string;
  href: RoutePath;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactChannel {
  id: 'phone' | 'email' | 'whatsapp';
  label: string;
  links?: ContactLink[];
  placeholder?: string;
}

export interface TechnologyIcon {
  label: string;
  iconPath: string;
}

export interface TechnologyStackGroup {
  title: string;
  labels: string[];
}

export interface HomeTechStackContent {
  eyebrow: string;
  title: string;
  summary: string;
}

export interface ServiceApproachStep {
  title: string;
  description: string;
}

export interface ServiceIllustration {
  src: string;
  alt: string;
}

export interface ServiceScope {
  included: string[];
  inputs?: string[];
  outputs?: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  outcome: string;
  capabilities: string[];
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  technicalSummary?: string;
  illustration?: ServiceIllustration;
  challenges?: string[];
  deliverables?: string[];
  scope?: ServiceScope;
  approach?: ServiceApproachStep[];
  tooling?: string[];
  principles?: string[];
  idealFor?: string[];
  faqs?: ServiceFaq[];
}

export interface ContactFormField {
  label: string;
  placeholder: string;
}

export interface ContactFormContent {
  eyebrow: string;
  title: string;
  summary: string;
  fields: Record<'name' | 'email' | 'company' | 'phone' | 'service' | 'message', ContactFormField>;
  servicePlaceholder: string;
  serviceOptions: string[];
  requiredNote: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  validationMessage: string;
  turnstileAction: string;
  verificationMessage: string;
  rateLimitMessage: string;
  unavailableMessage: string;
  failureMessage: string;
  privacyNote: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
  hero?: {
    eyebrow: string;
    headline: string;
    summary: string;
  };
  challenges?: string[];
  solutions?: IndustrySolution[];
  keyOutcomes?: string[];
  relevantServices?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface Insight {
  title: string;
  category: string;
  summary: string;
  href?: string;
  slug: string;
  readTime: string;
  body: string[];
  metaDescription?: string;
}

export interface HeroContent {
  eyebrow: string;
  outline: string;
  title: string;
  summary: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  tag: string;
}

export interface TrustStandard {
  title: string;
  description: string;
}

export interface TrustContent {
  eyebrow: string;
  title: string;
  summary: string;
  metrics: TrustMetric[];
  testimonials: Testimonial[];
  standards: TrustStandard[];
}

export interface BlueprintStage {
  id: string;
  step: string;
  kicker: string;
  title: string;
  summary: string;
  gates: string[];
  tools: string[];
  outcome: string;
}

export interface BlueprintContent {
  eyebrow: string;
  title: string;
  summary: string;
  stages: BlueprintStage[];
}

export interface NotFoundLink {
  label: string;
  href: RoutePath;
  description: string;
}

export interface NotFoundPageContent {
  eyebrow: string;
  code: string;
  title: string;
  summary: string;
  primaryAction: {
    label: string;
    href: RoutePath;
  };
  secondaryAction: {
    label: string;
    href: RoutePath;
  };
  suggestedHeading: {
    eyebrow: string;
    title: string;
    summary: string;
  };
  suggestedLinks: NotFoundLink[];
}

export interface RoiFrequencyOption {
  id: string;
  label: string;
  cadence: string;
  multiplier: number;
}

export interface CloudRoiContent {
  eyebrow: string;
  title: string;
  summary: string;
  spendLabel: string;
  spendMin: number;
  spendMax: number;
  spendStep: number;
  spendDefault: number;
  teamSizeLabel: string;
  teamMin: number;
  teamMax: number;
  teamStep: number;
  teamDefault: number;
  frequencyLabel: string;
  frequencies: RoiFrequencyOption[];
  defaultFrequencyId: string;
  resultsTitle: string;
  annualSavingsLabel: string;
  annualSavingsSubtext: string;
  hoursReclaimedLabel: string;
  hoursReclaimedSubtext: string;
  velocityLabel: string;
  velocitySubtext: string;
  ctaText: string;
  disclaimer: string;
}


