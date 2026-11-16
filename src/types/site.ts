export type RoutePath =
  | '/'
  | '/services'
  | '/industries'
  | '/about'
  | '/insights'
  | '/contact';

export interface PageMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
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

export interface Service {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  outcome: string;
  capabilities: string[];
  featured?: boolean;
}

export interface ContactFormField {
  label: string;
  placeholder: string;
  optional?: boolean;
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
  rateLimitMessage: string;
  unavailableMessage: string;
  failureMessage: string;
  privacyNote: string;
}

export interface Industry {
  title: string;
  summary: string;
  capabilities: string[];
}

export interface Insight {
  title: string;
  category: string;
  summary: string;
  href?: string;
}

export interface HeroContent {
  eyebrow: string;
  outline: string;
  title: string;
  summary: string;
}
