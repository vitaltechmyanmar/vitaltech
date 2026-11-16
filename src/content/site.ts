import type {
  ContactChannel,
  ContactFormContent,
  HeroContent,
  Industry,
  Insight,
  NavigationItem,
  PageMetadata,
  RoutePath,
  Service,
  TechnologyIcon,
} from '../types/site';

export const siteName = 'Vital Tech Myanmar';
export const siteUrl = 'https://vitaltech.example.com';

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    label: 'Phone',
    links: [
      { label: '+959 443 167 419', href: 'tel:+959443167419' },
      { label: '+959 964444882', href: 'tel:+959964444882' },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    links: [{ label: 'info@vitaltechmyanmar.com', href: 'mailto:info@vitaltechmyanmar.com' }],
  },
];

export const services: Service[] = [
  {
    id: 'cloud-managed-service',
    title: 'Cloud Managed Service',
    kicker: 'Keep your cloud dependable',
    summary:
      'Ongoing management and operational care for cloud environments, so your teams can focus on delivering value while infrastructure stays secure, observable, and cost-aware.',
    outcome: 'Gain reliable day-to-day operations without carrying the full overhead in-house.',
    capabilities: ['Environment monitoring', 'Incident response', 'Cost optimization', 'Security patching'],
    featured: true,
  },
  {
    id: 'cicd-automation',
    title: 'CI/CD Automation',
    kicker: 'Move from commit to release with confidence',
    summary:
      'Automated build, test, and deployment pipelines that shorten feedback loops, reduce manual steps, and make releases predictable for every team.',
    outcome: 'Ship changes faster with fewer errors and clearer release visibility.',
    capabilities: ['Pipeline design', 'Automated testing', 'Release orchestration', 'Deployment strategies'],
    featured: true,
  },
  {
    id: 'infrastructure-as-code',
    title: 'Infrastructure as Code',
    kicker: 'Make infrastructure repeatable by default',
    summary:
      'Declarative, version-controlled infrastructure that teams can provision, review, and reproduce consistently across environments.',
    outcome: 'Reduce drift and configuration risk while scaling environments with confidence.',
    capabilities: ['Terraform provisioning', 'Environment templates', 'Policy and review workflows', 'Configuration management'],
    featured: true,
  },
  {
    id: 'code-repositories-artifact-management',
    title: 'Managing Code Repositories and Artifact Management',
    kicker: 'Keep source and build artifacts governed',
    summary:
      'Structured repository practices and artifact management that give teams clear ownership, traceable history, and dependable access to the builds they ship.',
    outcome: 'Strengthen code governance and make every release traceable and reproducible.',
    capabilities: ['Repository standards', 'Branching and access control', 'Artifact repositories', 'Version and dependency policy'],
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    kicker: 'Connect the systems your business relies on',
    summary:
      'Integration planning and implementation that brings disconnected platforms, data flows, and business processes into a more coherent operating model.',
    outcome: 'Reduce fragmentation and improve how information moves across the business.',
    capabilities: ['Platform integration', 'Process mapping', 'Data-flow design', 'Legacy connection planning'],
  },
  {
    id: 'devops-consulting',
    title: 'DevOps Consulting',
    kicker: 'Adopt DevOps with a practical roadmap',
    summary:
      'Assessment and hands-on guidance that help teams improve delivery flow, tooling, and operating practices without disrupting current commitments.',
    outcome: 'Build a realistic, measurable path toward faster and safer delivery.',
    capabilities: ['Delivery assessment', 'Tooling strategy', 'Team enablement', 'Metrics and improvement'],
  },
];

export const contactForm: ContactFormContent = {
  eyebrow: 'Project enquiry',
  title: 'Send us a message.',
  summary:
    'Share a little about your organization and what you want to achieve. We will reply using the details you provide.',
  fields: {
    name: { label: 'Name', placeholder: 'Your full name' },
    email: { label: 'Email', placeholder: 'you@company.com' },
    company: { label: 'Organization', placeholder: 'Company or team name', optional: true },
    phone: { label: 'Phone', placeholder: '+95 9 000 000 000', optional: true },
    service: { label: 'Area of interest', placeholder: 'Select a service', optional: true },
    message: {
      label: 'How can we help?',
      placeholder: 'Tell us about the project, challenge, or outcome you have in mind.',
    },
  },
  servicePlaceholder: 'Select a service',
  serviceOptions: services.map((service) => service.title),
  requiredNote: '* Required fields',
  submitLabel: 'Send message',
  submittingLabel: 'Sending…',
  successMessage: 'Thank you. Your message has been sent and we will be in touch shortly.',
  validationMessage: 'Please check the highlighted fields and try again.',
  rateLimitMessage: 'Too many messages in a short period. Please wait a few minutes and try again.',
  unavailableMessage: 'The contact form is temporarily unavailable. Please use the direct contact options.',
  failureMessage: 'We could not send your message. Please try again or use the direct contact options.',
  privacyNote: 'We use the details you provide only to respond to your enquiry. We do not sell or share them.',
};

export const technologyStack: TechnologyIcon[] = [
  { label: 'AWS', iconPath: '/technology-icons/aws.svg' },
  { label: 'Docker', iconPath: '/technology-icons/docker.svg' },
  { label: 'Kubernetes', iconPath: '/technology-icons/kubernetes.svg' },
  { label: 'Helm', iconPath: '/technology-icons/helm.svg' },
  { label: 'Terraform', iconPath: '/technology-icons/terraform.svg' },
  { label: 'Ansible', iconPath: '/technology-icons/ansible.svg' },
  { label: 'GitHub Actions', iconPath: '/technology-icons/github-actions.svg' },
  { label: 'GitLab', iconPath: '/technology-icons/gitlab.svg' },
  { label: 'Argo CD', iconPath: '/technology-icons/argocd.svg' },
];

export const industries: Industry[] = [
  {
    title: 'Financial Services',
    summary: 'Support modern customer experiences and more connected operational systems.',
    capabilities: ['Workflow modernization', 'Integration planning', 'Cloud readiness'],
  },
  {
    title: 'Commerce & Distribution',
    summary: 'Connect operational data and systems to help teams move faster with better visibility.',
    capabilities: ['Business applications', 'System integration', 'Operational automation'],
  },
  {
    title: 'Professional Services',
    summary: 'Create practical digital foundations for teams that depend on reliable collaboration and delivery.',
    capabilities: ['Custom platforms', 'Cloud managed services', 'CI/CD automation'],
  },
  {
    title: 'Growing Enterprises',
    summary: 'Modernize the technology foundations needed to scale with confidence in Myanmar and beyond.',
    capabilities: ['Digital roadmaps', 'DevOps consulting', 'Technology advisory'],
  },
];

export const insights: Insight[] = [];

export const pageMetadata: Record<RoutePath, PageMetadata> = {
  '/': {
    title: 'Vital Tech Myanmar | Technology that creates growth',
    description:
      'Vital Tech Myanmar delivers cloud managed services, CI/CD automation, infrastructure as code, artifact management, system integration, and DevOps consulting.',
  },
  '/services': {
    title: 'Services | Vital Tech Myanmar',
    description:
      'Explore Vital Tech Myanmar cloud managed services, CI/CD automation, infrastructure as code, artifact management, system integration, and DevOps consulting.',
  },
  '/industries': {
    title: 'Industries | Vital Tech Myanmar',
    description:
      'See how Vital Tech Myanmar aligns technology capability with the needs of growing organizations and industries.',
  },
  '/about': {
    title: 'About | Vital Tech Myanmar',
    description:
      'Learn about Vital Tech Myanmar and our approach to practical, growth-focused technology partnership.',
  },
  '/insights': {
    title: 'Insights | Vital Tech Myanmar',
    description:
      'Explore Vital Tech Myanmar perspectives on cloud operations, delivery automation, infrastructure as code, system integration, and DevOps consulting.',
  },
  '/contact': {
    title: 'Contact | Vital Tech Myanmar',
    description:
      'Start a direct conversation with Vital Tech Myanmar about cloud managed services, CI/CD automation, infrastructure as code, system integration, or DevOps consulting.',
  },
};

export const homeHero: HeroContent = {
  eyebrow: 'Vital Tech Myanmar',
  outline: 'Enterprise',
  title: 'IT Partner',
  summary:
    'We design and deliver the cloud, delivery automation, and integration foundations that help ambitious organizations move with confidence.',
};
