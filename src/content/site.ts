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
    metaDescription:
      'Vital Tech Myanmar cloud managed services provide ongoing monitoring, incident response, cost optimization, and security patching to keep your cloud environments dependable.',
    intro:
      'Cloud platforms create opportunity, but they also require steady operational attention. Our Cloud Managed Service provides the day-to-day care needed to keep environments stable, secure, and aligned with business priorities, so your teams can stay focused on building and delivering value instead of managing infrastructure overhead.',
    deliverables: [
      'Continuous environment and health monitoring',
      'Defined incident response and escalation support',
      'Cost visibility reviews and optimization recommendations',
      'Security patching and routine maintenance coordination',
      'Operational reporting on availability, risks, and actions',
      'Practical guidance to improve reliability over time',
    ],
    approach: [
      {
        title: 'Assess and align',
        description:
          'We review your current cloud environment, priorities, and operational gaps to define the right management scope and responsibilities.',
      },
      {
        title: 'Establish operational foundations',
        description:
          'We put monitoring, access, maintenance, and response practices in place so day-to-day operations are clear and dependable.',
      },
      {
        title: 'Operate and optimize',
        description:
          'We manage ongoing health, respond to issues, and identify opportunities to improve performance, security, and cost efficiency.',
      },
      {
        title: 'Review and improve',
        description:
          'We share regular insights and recommendations so your cloud operations continue to mature with your business needs.',
      },
    ],
    idealFor: [
      'Teams running cloud workloads without a dedicated operations function',
      'Organizations that need more reliability, visibility, and cost control',
      'Businesses scaling infrastructure and wanting predictable day-to-day care',
    ],
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
    metaDescription:
      'Vital Tech Myanmar CI/CD automation helps teams design pipelines, automate testing, and orchestrate reliable releases from commit to production.',
    intro:
      'Reliable delivery depends on more than good code—it depends on a repeatable path from change to release. We help teams design and implement CI/CD automation that reduces manual effort, improves quality checks, and makes every deployment more predictable and transparent.',
    deliverables: [
      'CI/CD pipeline design aligned to your delivery workflow',
      'Automated build and test integration',
      'Release orchestration and promotion across environments',
      'Deployment strategy guidance, including safer rollout patterns',
      'Pipeline visibility and feedback-loop improvements',
      'Documentation and handover for maintainable delivery operations',
    ],
    approach: [
      {
        title: 'Understand delivery flow',
        description:
          'We assess how changes move today, where delays or errors occur, and what outcomes matter most for your teams.',
      },
      {
        title: 'Design the pipeline',
        description:
          'We define practical build, test, and release stages that fit your tools, environments, and risk profile.',
      },
      {
        title: 'Implement and automate',
        description:
          'We build and integrate pipelines that reduce manual steps, improve consistency, and provide clear release visibility.',
      },
      {
        title: 'Refine and enable',
        description:
          'We tune performance, strengthen quality gates, and support your team in operating and evolving the pipeline with confidence.',
      },
    ],
    idealFor: [
      'Teams facing slow, manual, or error-prone release processes',
      'Organizations adopting modern development practices and tooling',
      'Businesses that need faster feedback and more predictable deployments',
    ],
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
    metaDescription:
      'Vital Tech Myanmar infrastructure as code services deliver version-controlled, repeatable environments with Terraform provisioning, templates, and review workflows.',
    intro:
      'When infrastructure is defined in code, teams gain consistency, visibility, and control. We help organizations adopt infrastructure as code practices that make environments easier to provision, review, and evolve—reducing configuration drift and supporting safer, more scalable operations.',
    deliverables: [
      'Declarative infrastructure definitions and provisioning workflows',
      'Reusable environment templates and module structures',
      'Version-controlled change history and review practices',
      'Configuration management and drift-reduction guidance',
      'Policy-aware workflows to improve consistency and governance',
      'Documentation to support ongoing maintenance and scaling',
    ],
    approach: [
      {
        title: 'Evaluate current state',
        description:
          'We review existing environments, provisioning methods, and risks to identify where infrastructure as code will create the most value.',
      },
      {
        title: 'Define structure and standards',
        description:
          'We establish templates, naming, and review practices that make infrastructure changes clear, reusable, and governed.',
      },
      {
        title: 'Codify and provision',
        description:
          'We implement version-controlled infrastructure definitions and workflows that teams can apply consistently across environments.',
      },
      {
        title: 'Enable sustainable change',
        description:
          'We help teams adopt review, change, and maintenance practices so infrastructure remains reliable as needs evolve.',
      },
    ],
    idealFor: [
      'Organizations managing environments manually or inconsistently',
      'Teams needing repeatable provisioning across development, staging, and production',
      'Businesses aiming to reduce drift, risk, and configuration-related delays',
    ],
  },
  {
    id: 'code-repositories-artifact-management',
    title: 'Managing Code Repositories and Artifact Management',
    kicker: 'Keep source and build artifacts governed',
    summary:
      'Structured repository practices and artifact management that give teams clear ownership, traceable history, and dependable access to the builds they ship.',
    outcome: 'Strengthen code governance and make every release traceable and reproducible.',
    capabilities: ['Repository standards', 'Branching and access control', 'Artifact repositories', 'Version and dependency policy'],
    metaDescription:
      'Vital Tech Myanmar helps teams manage code repositories and build artifacts with clear standards, access control, versioning, and traceable release practices.',
    intro:
      'Strong delivery depends on knowing where code lives, how it changes, and which artifacts are shipped. We help teams establish repository and artifact management practices that improve ownership, traceability, and confidence—so every build can be understood, trusted, and reproduced.',
    deliverables: [
      'Repository structure and contribution standards',
      'Branching, review, and access-control practices',
      'Artifact repository setup and usage guidance',
      'Versioning and dependency policy recommendations',
      'Traceability practices linking source, builds, and releases',
      'Documentation to support consistent team adoption',
    ],
    approach: [
      {
        title: 'Review current practices',
        description:
          'We assess how code and artifacts are organized, shared, and released today to identify governance and traceability gaps.',
      },
      {
        title: 'Define standards and policies',
        description:
          'We establish practical conventions for repositories, branching, access, versioning, and artifact handling.',
      },
      {
        title: 'Implement and organize',
        description:
          'We help put structures and workflows in place so teams can manage source and artifacts consistently and securely.',
      },
      {
        title: 'Support adoption',
        description:
          'We guide teams in applying the standards day to day, making releases easier to track, audit, and reproduce.',
      },
    ],
    idealFor: [
      'Teams with unclear repository ownership or inconsistent workflows',
      'Organizations needing better traceability from source to release',
      'Businesses managing multiple services, dependencies, or build artifacts',
    ],
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    kicker: 'Connect the systems your business relies on',
    summary:
      'Integration planning and implementation that brings disconnected platforms, data flows, and business processes into a more coherent operating model.',
    outcome: 'Reduce fragmentation and improve how information moves across the business.',
    capabilities: ['Platform integration', 'Process mapping', 'Data-flow design', 'Legacy connection planning'],
    metaDescription:
      'Vital Tech Myanmar system integration services connect platforms, data flows, and processes to reduce fragmentation and improve operational visibility.',
    intro:
      'Disconnected systems slow teams down and create gaps in visibility. We help organizations plan and implement integrations that connect platforms, align processes, and improve how information moves—creating a more coherent and efficient operating environment.',
    deliverables: [
      'Integration assessment and priority roadmap',
      'Process and data-flow mapping across systems',
      'Platform integration design and implementation support',
      'Approaches for connecting modern and legacy systems',
      'Reliability and handoff considerations for integrated workflows',
      'Documentation to clarify how connected systems operate together',
    ],
    approach: [
      {
        title: 'Map the landscape',
        description:
          'We understand the systems, processes, and data dependencies involved to identify where fragmentation creates friction.',
      },
      {
        title: 'Design the integration path',
        description:
          'We define practical integration patterns and data flows that fit your operational needs and technical constraints.',
      },
      {
        title: 'Implement and connect',
        description:
          'We deliver integrations that improve coordination between platforms while keeping workflows clear and maintainable.',
      },
      {
        title: 'Validate and evolve',
        description:
          'We review outcomes, address gaps, and help refine integrations so information continues to move reliably as needs change.',
      },
    ],
    idealFor: [
      'Organizations using multiple platforms that do not work well together',
      'Teams spending effort on manual handoffs or duplicated data entry',
      'Businesses modernizing operations while still relying on legacy systems',
    ],
  },
  {
    id: 'devops-consulting',
    title: 'DevOps Consulting',
    kicker: 'Adopt DevOps with a practical roadmap',
    summary:
      'Assessment and hands-on guidance that help teams improve delivery flow, tooling, and operating practices without disrupting current commitments.',
    outcome: 'Build a realistic, measurable path toward faster and safer delivery.',
    capabilities: ['Delivery assessment', 'Tooling strategy', 'Team enablement', 'Metrics and improvement'],
    metaDescription:
      'Vital Tech Myanmar DevOps consulting provides delivery assessments, tooling strategy, team enablement, and measurable improvement roadmaps.',
    intro:
      'DevOps works best when it fits the way your teams actually operate. We provide practical consulting that helps organizations assess delivery challenges, choose the right improvements, and adopt better tooling and practices—without disrupting ongoing commitments.',
    deliverables: [
      'Delivery and operating-practice assessment',
      'Prioritized DevOps improvement roadmap',
      'Tooling and workflow strategy recommendations',
      'Team enablement guidance and practical next steps',
      'Metrics and visibility suggestions to track progress',
      'Actionable advice aligned to current capacity and goals',
    ],
    approach: [
      {
        title: 'Assess and understand',
        description:
          'We review current delivery flow, collaboration patterns, and tooling to identify constraints and opportunities.',
      },
      {
        title: 'Prioritize what matters',
        description:
          'We focus on improvements that can create meaningful impact without overloading teams or disrupting commitments.',
      },
      {
        title: 'Guide implementation',
        description:
          'We provide hands-on recommendations and support to help teams adopt better practices, workflows, and tools.',
      },
      {
        title: 'Measure and adapt',
        description:
          'We help define useful indicators of progress so improvements remain realistic, visible, and sustainable over time.',
      },
    ],
    idealFor: [
      'Teams seeking faster, safer delivery but unsure where to start',
      'Organizations balancing improvement goals with ongoing product work',
      'Businesses wanting a practical, measurable DevOps adoption path',
    ],
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
    company: { label: 'Organization', placeholder: 'Company or team name' },
    phone: { label: 'Phone', placeholder: '+95 9 000 000 000' },
    service: { label: 'Area of interest', placeholder: 'Select a service' },
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
