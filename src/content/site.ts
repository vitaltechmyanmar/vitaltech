import type {
  CareerOpportunity,
  ContactChannel,
  HeroContent,
  Industry,
  Insight,
  NavigationItem,
  PageMetadata,
  RoutePath,
  Service,
} from '../types/site';

export const siteName = 'Vital Tech Myanmar';
export const siteUrl = 'https://vitaltech.example.com';

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    label: 'Phone',
    placeholder: 'Official phone details coming soon',
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Official email details coming soon',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    placeholder: 'Official WhatsApp details coming soon',
  },
];

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    kicker: 'Build what moves your business forward',
    summary:
      'Purpose-built digital products and business systems designed around the way your people, customers, and operations actually work.',
    outcome: 'Turn complex operational needs into maintainable, high-value software.',
    capabilities: ['Business applications', 'Web platforms', 'Workflow automation', 'System modernization'],
    featured: true,
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    kicker: 'Make your technology ready for growth',
    summary:
      'Practical cloud planning and implementation that helps teams modernize infrastructure, improve flexibility, and manage change with confidence.',
    outcome: 'Create a scalable foundation for reliable, adaptable digital services.',
    capabilities: ['Cloud readiness', 'Migration planning', 'Architecture advisory', 'Cost-aware modernization'],
    featured: true,
  },
  {
    id: 'devops',
    title: 'DevOps',
    kicker: 'Release with confidence',
    summary:
      'Delivery practices that connect development and operations, reduce manual friction, and give technology teams a clearer path from change to value.',
    outcome: 'Improve delivery consistency, visibility, and operational readiness.',
    capabilities: ['Delivery automation', 'Environment consistency', 'Release practices', 'Operational visibility'],
    featured: true,
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
    id: 'managed-it',
    title: 'Managed IT Solutions',
    kicker: 'Keep technology dependable',
    summary:
      'Responsive technology support and operational guidance for organizations that need a capable partner to keep essential systems working well.',
    outcome: 'Strengthen day-to-day technology confidence and business continuity.',
    capabilities: ['IT operations support', 'Technology advisory', 'Environment review', 'Service improvement'],
  },
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
    capabilities: ['Custom platforms', 'Cloud solutions', 'Managed IT'],
  },
  {
    title: 'Growing Enterprises',
    summary: 'Modernize the technology foundations needed to scale with confidence in Myanmar and beyond.',
    capabilities: ['Digital roadmaps', 'DevOps practices', 'Technology advisory'],
  },
];

export const insights: Insight[] = [];

export const careers: CareerOpportunity[] = [];

export const pageMetadata: Record<RoutePath, PageMetadata> = {
  '/': {
    title: 'Vital Tech Myanmar | Technology that creates growth',
    description:
      'Vital Tech Myanmar delivers software development, cloud, DevOps, system integration, and managed IT solutions for ambitious businesses.',
  },
  '/services': {
    title: 'Services | Vital Tech Myanmar',
    description:
      'Explore Vital Tech Myanmar software development, cloud, DevOps, system integration, and managed IT solutions.',
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
      'Explore Vital Tech Myanmar perspectives on software, cloud, DevOps, systems integration, and IT solutions.',
  },
  '/careers': {
    title: 'Careers | Vital Tech Myanmar',
    description:
      'Discover opportunities to create meaningful technology outcomes with Vital Tech Myanmar.',
  },
  '/contact': {
    title: 'Contact | Vital Tech Myanmar',
    description:
      'Start a direct conversation with Vital Tech Myanmar about software, cloud, DevOps, system integration, and IT solutions.',
  },
};

export const homeHero: HeroContent = {
  eyebrow: 'Vital Tech Myanmar',
  outline: 'CREATING',
  title: 'GROWTH',
  summary:
    'We design and deliver the software, cloud, DevOps, system integration, and IT foundations that help ambitious organizations move with confidence.',
};
