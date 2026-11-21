import type {
  BlueprintContent,
  CloudRoiContent,
  ContactChannel,
  ContactFormContent,
  HeroContent,
  HomeTechStackContent,
  Industry,
  Insight,
  NavigationItem,
  NotFoundPageContent,
  PageMetadata,
  RoutePath,
  Service,
  TechnologyIcon,
  TechnologyStackGroup,
  TrustContent,
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
      'Technical cloud managed services for AWS environments: monitoring, incident response, patching, cost visibility, and operational reporting for engineering teams.',
    intro:
      'Cloud platforms create opportunity, but production environments demand disciplined operational care. Our Cloud Managed Service provides the day-to-day engineering attention required to keep workloads stable, secure, and cost-aware—so your teams can focus on product and delivery rather than undifferentiated infrastructure operations.',
    technicalSummary:
      'We operate cloud environments with an emphasis on observability, defined response paths, and controlled change. The service establishes practical baselines for monitoring, access, patching, and cost review, then runs them as repeatable operational routines with clear reporting and improvement loops.',
    illustration: {
      src: '/service-illustrations/cloud-managed-service.svg',
      alt: 'Abstract diagram of monitored cloud infrastructure with health signals, cost posture, and response flow.',
    },
    challenges: [
      'Limited visibility into workload health, capacity, and failure conditions across environments',
      'Slow or unclear incident response when alerts lack ownership, context, or escalation paths',
      'Unplanned cost growth from underused resources, missing budgets, or weak usage reviews',
      'Patch and maintenance debt that increases security exposure and operational risk',
      'Operational knowledge concentrated in a few individuals instead of documented routines',
    ],
    deliverables: [
      'Monitoring coverage and alerting baseline aligned to critical services and dependencies',
      'Incident response workflow with triage guidance, escalation paths, and communication expectations',
      'Patch and maintenance cadence covering routine updates and tracked remediation actions',
      'Cost and usage review reports with optimization recommendations and follow-up items',
      'Operational runbooks for recurring tasks, checks, and common failure scenarios',
      'Periodic service review summarizing health, risks, changes, and improvement priorities',
    ],
    scope: {
      included: [
        'Day-to-day operational monitoring and review of agreed cloud environments and workloads',
        'Alert triage, incident coordination, and guidance through defined response procedures',
        'Routine maintenance planning, patch coordination, and configuration hygiene activities',
        'Cost visibility reviews with actionable rightsizing and efficiency recommendations',
        'Operational documentation, runbooks, and regular reporting on status and risks',
      ],
      inputs: [
        'Access to relevant cloud accounts, monitoring tools, and operational communication channels',
        'Inventory of critical workloads, environments, dependencies, and business priorities',
        'Current runbooks, escalation contacts, maintenance windows, and change constraints (if available)',
        'Visibility into existing alerts, incidents, and cost or usage reporting sources',
      ],
      outputs: [
        'Agreed monitoring and response baseline for in-scope environments',
        'Documented operational routines, escalation paths, and maintenance practices',
        'Recurring health/cost/risk reports with prioritized recommendations',
        'Tracked action items to improve reliability, security posture, and operational clarity',
      ],
    },
    approach: [
      {
        title: 'Discovery and baseline assessment',
        description:
          'We inventory workloads, dependencies, access patterns, and current operational practices to identify visibility gaps, risk areas, and the right management scope.',
      },
      {
        title: 'Operational foundation setup',
        description:
          'We define monitoring coverage, alert thresholds, escalation paths, patch routines, and reporting structure so day-to-day operations are explicit and repeatable.',
      },
      {
        title: 'Run, respond, and maintain',
        description:
          'We perform ongoing operational care—reviewing health signals, coordinating incident response, supporting maintenance activities, and keeping environments aligned with agreed practices.',
      },
      {
        title: 'Review, optimize, and mature',
        description:
          'We analyze trends across incidents, performance, and spend to recommend practical improvements and evolve runbooks, controls, and routines over time.',
      },
    ],
    tooling: ['AWS', 'Linux', 'Grafana', 'Prometheus', 'OpenTelemetry'],
    principles: [
      'Observability before optimization: establish clear signals and ownership before tuning',
      'Controlled change: treat maintenance and patching as planned, traceable operational work',
      'Least privilege and access clarity for operational activities and integrations',
      'Cost awareness as an operational concern, reviewed alongside reliability and security',
      'Documentation and knowledge sharing to reduce single-person operational dependency',
    ],
    idealFor: [
      'Engineering teams running production workloads without a dedicated cloud operations function',
      'Organizations that need stronger reliability, visibility, and cost control in AWS environments',
      'Teams seeking predictable operational routines, clearer incident handling, and reduced maintenance debt',
    ],
    faqs: [
      {
        question: 'What parts of the environment are covered?',
        answer:
          'Coverage is defined during onboarding based on your workloads, environments, and priorities. We agree on in-scope accounts, services, monitoring sources, and operational responsibilities so expectations are clear.',
      },
      {
        question: 'How do you handle incidents and escalations?',
        answer:
          'We establish triage and escalation paths with your team, including communication channels and ownership expectations. Response focuses on timely assessment, coordinated action, and documented follow-up.',
      },
      {
        question: 'Do you make changes directly in production?',
        answer:
          'Operational changes follow agreed access boundaries and change practices. Where appropriate, we coordinate maintenance and remediation activities with your team to keep changes controlled and traceable.',
      },
      {
        question: 'Can this work alongside our existing engineers or vendors?',
        answer:
          'Yes. The service is designed to complement internal teams by providing defined operational routines, shared visibility, and documented practices rather than replacing your engineering ownership.',
      },
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
      'Technical CI/CD automation services: pipeline architecture, automated testing, release orchestration, and deployment strategies for reliable software delivery.',
    intro:
      'Reliable software delivery depends on a repeatable, inspectable path from change to production. We help engineering teams design and implement CI/CD automation that reduces manual steps, enforces consistent quality gates, and makes release behavior predictable across environments.',
    technicalSummary:
      'We treat delivery pipelines as production systems: versioned configuration, deterministic stages, fast feedback, and explicit promotion rules. The focus is on pipeline architecture, test and artifact flow, environment promotion, and deployment safety—implemented in tooling that fits your repositories and operating model.',
    illustration: {
      src: '/service-illustrations/cicd-automation.svg',
      alt: 'Abstract CI/CD pipeline showing commit, build, test, and deploy stages with automated checks and visibility.',
    },
    challenges: [
      'Manual or inconsistent release steps that vary by engineer, service, or environment',
      'Slow feedback loops caused by fragile builds, unclear test stages, or pipeline bottlenecks',
      'Limited confidence in deployments due to weak quality gates or opaque promotion criteria',
      'Environment drift and configuration differences that make releases hard to reproduce',
      'Poor visibility into pipeline status, failures, and the provenance of deployed artifacts',
    ],
    deliverables: [
      'Pipeline architecture and stage design (build, test, package, publish, deploy/promote)',
      'Automated build and test integration with defined quality gates and failure handling',
      'Release orchestration workflows for promotion across environments',
      'Deployment strategy recommendations and implementation (e.g. rolling or controlled rollout patterns where appropriate)',
      'Pipeline configuration managed as code with documentation and operational guidance',
      'Visibility improvements for pipeline runs, logs, and release traceability',
    ],
    scope: {
      included: [
        'Assessment of current delivery workflow, repositories, environments, and tooling constraints',
        'Design and implementation of CI/CD pipelines and automation for agreed services/projects',
        'Integration of build, test, and artifact steps into consistent automated workflows',
        'Environment promotion and deployment workflow configuration with safety considerations',
        'Knowledge transfer and documentation for maintaining and extending pipelines',
      ],
      inputs: [
        'Access to source repositories, CI/CD platform, and relevant environment/deployment targets',
        'Current build/test commands, branching model, and release process details',
        'Requirements for environments, approvals, secrets handling, and compliance constraints',
        'Stakeholder input on release frequency, risk tolerance, and feedback priorities',
      ],
      outputs: [
        'Versioned pipeline definitions and supporting automation assets',
        'Documented delivery workflow, stage responsibilities, and promotion rules',
        'Configured quality gates and deployment steps for in-scope pipelines',
        'Guidance for operating, troubleshooting, and evolving the delivery system',
      ],
    },
    approach: [
      {
        title: 'Delivery workflow assessment',
        description:
          'We map the current path from commit to production, identify bottlenecks and failure modes, and clarify requirements for environments, testing, and release control.',
      },
      {
        title: 'Pipeline and promotion design',
        description:
          'We define stage boundaries, triggers, artifact flow, quality gates, and promotion rules that balance speed, safety, and maintainability for your context.',
      },
      {
        title: 'Implementation and integration',
        description:
          'We implement pipelines as code, integrate build/test/package steps, configure secrets and environments appropriately, and establish deployment workflows for target stages.',
      },
      {
        title: 'Validation, tuning, and enablement',
        description:
          'We validate runs against real scenarios, improve feedback time and reliability, and hand over documentation so teams can operate and extend the system confidently.',
      },
    ],
    tooling: ['GitHub Actions', 'GitLab', 'Docker', 'Kubernetes', 'Helm', 'Argo CD'],
    principles: [
      'Pipelines as code: versioned, reviewable, and reproducible delivery configuration',
      'Fast, actionable feedback: fail early with clear signals and useful diagnostics',
      'Immutable, traceable artifacts promoted across environments rather than rebuilt ad hoc',
      'Least-privilege access for pipeline identities, secrets, and deployment targets',
      'Safe delivery patterns and explicit promotion criteria over manual, implicit releases',
    ],
    idealFor: [
      'Engineering teams with manual, slow, or unreliable build-and-release processes',
      'Organizations standardizing delivery practices across multiple services or repositories',
      'Technical leads seeking stronger release confidence, traceability, and deployment control',
    ],
    faqs: [
      {
        question: 'Which CI/CD platforms and repositories can you work with?',
        answer:
          'We adapt to your existing tooling and repository structure where practical. During assessment we confirm platform capabilities, constraints, and the best-fit pipeline design for your environment.',
      },
      {
        question: 'How do you handle testing and quality gates?',
        answer:
          'We integrate your existing test suites and checks into pipeline stages and define gates appropriate to each promotion step. The goal is consistent, automated feedback without creating unnecessary bottlenecks.',
      },
      {
        question: 'Can you support containerized and Kubernetes-based deployments?',
        answer:
          'Yes, where relevant to your stack. We design pipelines around your build and deployment targets, including container image workflows and Kubernetes-oriented delivery patterns when they fit your needs.',
      },
      {
        question: 'Will our team be able to maintain the pipelines after implementation?',
        answer:
          'Yes. We deliver pipeline configuration as code with documentation and handover so your engineers understand the structure, operating procedures, and how to extend it safely.',
      },
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
      'Technical infrastructure as code services: Terraform-based provisioning, reusable modules, environment parity, review workflows, and drift-aware operations.',
    intro:
      'Infrastructure defined and managed by hand is difficult to review, reproduce, and evolve safely. We help engineering teams adopt infrastructure as code so environments become declarative, version-controlled, and provisioned through consistent workflows—reducing drift and making change more predictable.',
    technicalSummary:
      'We focus on codifying infrastructure into modular, reviewable definitions with clear state, environment structure, and change workflows. The emphasis is on repeatability, environment parity, controlled provisioning, and maintainable patterns that technical teams can operate and extend over time.',
    illustration: {
      src: '/service-illustrations/infrastructure-as-code.svg',
      alt: 'Abstract diagram of infrastructure code reviewed and applied to consistent development, staging, and production environments.',
    },
    challenges: [
      'Manual provisioning and console-driven changes that are hard to audit or reproduce',
      'Configuration drift between environments causing inconsistent behavior and release risk',
      'Slow or error-prone environment creation for new services, regions, or lifecycle stages',
      'Limited review and change control for infrastructure modifications',
      'Tightly coupled or duplicated definitions that are difficult to scale and maintain',
    ],
    deliverables: [
      'Declarative infrastructure definitions structured for clarity and reuse (modules/templates where appropriate)',
      'Environment provisioning workflows and conventions for consistent application across stages',
      'Version-controlled change process with review and planning practices',
      'State and configuration management guidance to support safe, predictable operations',
      'Documentation of structure, variables, dependencies, and operational procedures',
      'Recommendations for policy, guardrails, and drift-reduction practices aligned to your context',
    ],
    scope: {
      included: [
        'Assessment of current infrastructure, provisioning methods, and environment topology',
        'Design of IaC structure, module boundaries, and environment management approach',
        'Implementation of codified resources and workflows for agreed in-scope environments',
        'Establishment of review, plan/apply, and change-control practices for infrastructure',
        'Handover documentation and guidance for ongoing maintenance and extension',
      ],
      inputs: [
        'Access to target cloud accounts, existing infrastructure details, and naming/convention constraints',
        'Current architecture diagrams, resource inventories, or operational knowledge of environments',
        'Requirements for environment separation, networking, security controls, and compliance considerations',
        'Preferred tooling, state management approach, and collaboration workflow (if defined)',
      ],
      outputs: [
        'Versioned infrastructure codebase and reusable templates/modules for in-scope components',
        'Documented provisioning and change workflow for engineers to follow',
        'Environment definitions aligned to agreed parity and separation goals',
        'Operational notes covering state, dependencies, and safe iteration practices',
      ],
    },
    approach: [
      {
        title: 'Assess topology and risk',
        description:
          'We review existing environments, dependencies, and change patterns to identify drift, coupling, and the highest-value areas to codify first.',
      },
      {
        title: 'Design structure and workflows',
        description:
          'We define module boundaries, environment layout, state strategy, and review/plan practices to keep infrastructure changes understandable and controlled.',
      },
      {
        title: 'Codify and provision iteratively',
        description:
          'We implement declarative definitions and provisioning workflows in manageable increments, validating behavior and parity across targeted environments.',
      },
      {
        title: 'Harden and enable teams',
        description:
          'We refine patterns, document operations, and support adoption so teams can manage infrastructure changes safely and evolve the codebase with confidence.',
      },
    ],
    tooling: ['Terraform', 'AWS', 'Ansible', 'Linux'],
    principles: [
      'Declarative, idempotent definitions with changes driven through version control',
      'Environment parity through reusable modules and explicit configuration boundaries',
      'Plan-and-review workflows to surface impact before applying infrastructure changes',
      'Clear separation of state, secrets, and environment-specific configuration',
      'Incremental adoption to reduce risk while improving coverage and consistency',
    ],
    idealFor: [
      'Teams managing cloud infrastructure manually or struggling with environment drift',
      'Organizations needing repeatable, reviewable provisioning across multiple environments',
      'Technical leads aiming to improve infrastructure governance, auditability, and scalability',
    ],
    faqs: [
      {
        question: 'Do we need to codify everything at once?',
        answer:
          'No. We typically prioritize high-value or high-risk components and adopt IaC incrementally, establishing patterns and workflows that can expand safely over time.',
      },
      {
        question: 'How do you manage Terraform state and environment separation?',
        answer:
          'We define a state and workspace/environment strategy appropriate to your scale and risk profile, with clear boundaries, access considerations, and documented operating practices.',
      },
      {
        question: 'Can this integrate with our existing CI/CD or review process?',
        answer:
          'Yes. Infrastructure changes can be aligned with your existing version control and review workflows, including plan/review steps where they add clarity and control.',
      },
      {
        question: 'What about existing manually created resources?',
        answer:
          'We assess existing resources and plan a practical path to bring them under management where appropriate, balancing accuracy, risk, and effort for your environment.',
      },
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
      'Technical services for repository governance and artifact management: branching standards, access control, artifact registries, versioning, and release traceability.',
    intro:
      'Delivery confidence depends on being able to answer where code lives, how it changed, and exactly which artifact was released. We help teams establish repository and artifact management practices that improve ownership, traceability, and reproducibility across the software supply path.',
    technicalSummary:
      'We align source control structure, contribution workflows, access boundaries, and artifact handling into a coherent, auditable model. The focus is on governance and traceability—linking commits, builds, versions, and releases so engineers can operate with clarity and control.',
    illustration: {
      src: '/service-illustrations/code-repositories-artifact-management.svg',
      alt: 'Abstract diagram of source branches, reviews, a versioned artifact registry, and governed releases.',
    },
    challenges: [
      'Inconsistent repository structures and naming that make ownership and navigation unclear',
      'Ad hoc branching and review practices leading to fragile or opaque release histories',
      'Unclear access controls or permissions that increase governance and security risk',
      'Build artifacts stored informally, making releases hard to trace, reproduce, or roll back',
      'Weak versioning and dependency policies causing ambiguity across services and environments',
    ],
    deliverables: [
      'Repository organization and contribution standards (structure, naming, documentation expectations)',
      'Branching, review, and merge workflow definitions aligned to your delivery model',
      'Access-control and permission model recommendations for teams and repositories',
      'Artifact repository usage patterns and versioning conventions for build outputs',
      'Traceability practices linking source revisions, builds, artifacts, and deployments',
      'Policy guidance for dependencies, retention considerations, and release provenance',
    ],
    scope: {
      included: [
        'Assessment of current repositories, workflows, permissions, and artifact handling practices',
        'Definition of governance standards for source control, reviews, and artifact lifecycle',
        'Implementation guidance or setup support for agreed repository/artifact structures',
        'Documentation of workflows, policies, and operational responsibilities',
        'Enablement to help teams adopt and sustain consistent practices',
      ],
      inputs: [
        'Access to relevant source control platforms, repositories, and artifact storage systems',
        'Current team structure, ownership model, and collaboration/release workflows',
        'Requirements for compliance, auditability, retention, and access boundaries',
        'Inventory of services, build outputs, and dependency management practices (where available)',
      ],
      outputs: [
        'Documented repository and artifact governance standards for in-scope teams/projects',
        'Defined branching/review and versioning workflows with clear roles and expectations',
        'Practical artifact organization and traceability model for releases',
        'Actionable recommendations to improve consistency, access clarity, and provenance',
      ],
    },
    approach: [
      {
        title: 'Assess current state and gaps',
        description:
          'We review repository layouts, workflows, permissions, and artifact flows to identify governance gaps, traceability breaks, and operational friction.',
      },
      {
        title: 'Define standards and policies',
        description:
          'We establish practical conventions for structure, branching, reviews, access control, versioning, and artifact lifecycle suited to your teams.',
      },
      {
        title: 'Implement structure and workflows',
        description:
          'We help apply the agreed model across repositories and artifact stores, aligning tooling configuration and day-to-day processes with the standards.',
      },
      {
        title: 'Enable adoption and traceability',
        description:
          'We document practices, support team adoption, and refine the model so source-to-release traceability remains clear and maintainable over time.',
      },
    ],
    tooling: ['GitHub', 'GitLab', 'GitHub Actions'],
    principles: [
      'Clear ownership and access boundaries aligned to team responsibilities',
      'Versioned, immutable build artifacts with explicit provenance from source to release',
      'Reviewable change history through consistent branching and merge practices',
      'Policy-driven dependency and version management to reduce ambiguity and risk',
      'Documentation and conventions that make governance usable, not burdensome',
    ],
    idealFor: [
      'Teams with growing codebases, multiple repositories, or unclear ownership and workflows',
      'Organizations needing stronger traceability, auditability, and release reproducibility',
      'Technical leads standardizing contribution, access, and artifact practices across teams',
    ],
    faqs: [
      {
        question: 'Can you work with our existing Git platform and tooling?',
        answer:
          'Yes. We align standards and workflows with the platforms you already use, focusing on practical governance and traceability improvements within your current environment.',
      },
      {
        question: 'How do you improve traceability from source to release?',
        answer:
          'We define conventions that link commits, builds, artifact versions, and deployments—supported by repository structure, tagging/versioning practices, and documented release workflows.',
      },
      {
        question: 'Will this slow down developer workflows?',
        answer:
          'The intent is the opposite: clear, lightweight standards reduce confusion and rework. We tailor practices to your team size and delivery needs to keep workflows efficient and consistent.',
      },
      {
        question: 'Do you cover dependency and versioning policies?',
        answer:
          'Yes. We provide guidance on versioning conventions and dependency handling appropriate to your projects, helping teams manage change and compatibility with greater clarity.',
      },
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
      'Technical system integration services: platform and data-flow design, API/event integration patterns, legacy connectivity, and reliable cross-system workflows.',
    intro:
      'Disconnected platforms create manual work, inconsistent data, and fragile handoffs. We help technical teams design and implement integrations that connect systems, clarify data flows, and align processes—so information moves reliably and operations become more coherent.',
    technicalSummary:
      'We approach integration as an architectural and operational concern: understanding system boundaries, contracts, data ownership, and failure modes before implementation. The result is practical integration designs and workflows that balance reliability, maintainability, and the realities of existing platforms, including legacy systems.',
    illustration: {
      src: '/service-illustrations/system-integration.svg',
      alt: 'Abstract diagram of multiple platforms connected through an integration layer with mapped data flows.',
    },
    challenges: [
      'Fragmented systems with duplicated or inconsistent data across platforms',
      'Manual handoffs and swivel-chair processes that slow operations and introduce errors',
      'Unclear data ownership, contracts, or flow boundaries between systems',
      'Legacy platforms that are difficult to connect with modern services and workflows',
      'Limited observability and error handling for cross-system processes',
    ],
    deliverables: [
      'System landscape and dependency mapping for in-scope platforms and processes',
      'Integration architecture and data-flow design (interfaces, contracts, and transformation points)',
      'Implementation of agreed integrations and workflow connections between systems',
      'Error-handling, retry, and operational considerations for reliable cross-system behavior',
      'Documentation of integration flows, dependencies, and support/run considerations',
      'Prioritized roadmap for further integration opportunities and improvements',
    ],
    scope: {
      included: [
        'Discovery of systems, processes, data entities, and integration pain points',
        'Design of integration patterns and data flows suited to technical and operational constraints',
        'Implementation support for agreed integrations across modern and/or legacy platforms',
        'Validation of data movement and workflow behavior for in-scope scenarios',
        'Documentation and handover covering integration behavior and operational touchpoints',
      ],
      inputs: [
        'Access to relevant systems, APIs, documentation, and technical stakeholders',
        'Current process descriptions, data definitions, and known integration issues',
        'Security, access, and compliance constraints for connected systems and data',
        'Priorities for workflows, latency/consistency expectations, and operational ownership',
      ],
      outputs: [
        'Documented integration design and data-flow maps for in-scope systems',
        'Implemented integrations/workflows aligned to agreed requirements',
        'Operational notes on failure handling, dependencies, and support considerations',
        'Recommendations for evolving and extending the integration landscape',
      ],
    },
    approach: [
      {
        title: 'Discover systems and flows',
        description:
          'We map platforms, processes, data entities, and dependencies to understand boundaries, pain points, and where integration will create the most value.',
      },
      {
        title: 'Design contracts and patterns',
        description:
          'We define integration patterns, interfaces, and data-flow behavior—including ownership, transformations, and failure considerations—appropriate to each connection.',
      },
      {
        title: 'Implement and connect',
        description:
          'We build and configure integrations in manageable increments, validating functional behavior and data movement against agreed scenarios.',
      },
      {
        title: 'Validate, document, and evolve',
        description:
          'We verify outcomes, document flows and operational considerations, and identify next steps to improve reliability and extend coverage over time.',
      },
    ],
    tooling: ['AWS'],
    principles: [
      'Explicit system boundaries, data ownership, and interface contracts',
      'Design for failure: clear error handling, retries, and operational visibility where feasible',
      'Prefer maintainable, observable integration patterns over brittle point-to-point coupling',
      'Security- and access-aware connectivity aligned to organizational constraints',
      'Incremental delivery to reduce risk and validate value across complex landscapes',
    ],
    idealFor: [
      'Organizations operating multiple platforms with fragmented processes or inconsistent data',
      'Teams needing to connect modern applications with legacy or third-party systems',
      'Technical leads seeking reliable, well-documented cross-system workflows and data flows',
    ],
    faqs: [
      {
        question: 'Can you integrate with legacy systems or limited APIs?',
        answer:
          'Often, yes. We assess available interfaces, constraints, and data access options, then propose practical integration approaches that fit the capabilities and risks of existing systems.',
      },
      {
        question: 'Do you handle real-time and batch integration needs?',
        answer:
          'We design integration patterns based on your process and data requirements, including timing, consistency, and reliability considerations, and select approaches that fit your context.',
      },
      {
        question: 'How do you address data consistency and errors between systems?',
        answer:
          'We make data ownership and flow behavior explicit, define transformation and validation points, and incorporate appropriate error-handling and operational considerations into the design.',
      },
      {
        question: 'Will the integration be documented for our team to support?',
        answer:
          'Yes. We provide documentation of flows, dependencies, and operational touchpoints so your team can understand, support, and evolve the integrations over time.',
      },
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
      'Technical DevOps consulting: delivery flow assessment, tooling and platform strategy, CI/CD and IaC guidance, enablement, and measurable improvement roadmaps.',
    intro:
      'Improving delivery performance requires more than new tools—it requires a clear understanding of flow, constraints, and operating practices. We provide technical DevOps consulting that helps engineering teams assess their current state, prioritize high-impact changes, and adopt practices that make delivery faster, safer, and more sustainable.',
    technicalSummary:
      'We work with technical leads to examine the end-to-end delivery system: source control, CI/CD, infrastructure management, environments, release practices, and feedback loops. Recommendations are grounded in your constraints and capacity, producing a practical roadmap with actionable engineering and process improvements.',
    illustration: {
      src: '/service-illustrations/devops-consulting.svg',
      alt: 'Abstract diagram of DevOps assessment, roadmap planning, and measurable improvement outcomes.',
    },
    challenges: [
      'Unclear bottlenecks across build, test, release, and operational workflows',
      'Tooling sprawl or misaligned platforms that add complexity without improving flow',
      'Inconsistent practices across teams leading to variable delivery quality and speed',
      'Limited visibility into delivery performance, reliability, and improvement progress',
      'Difficulty prioritizing DevOps investments alongside ongoing product commitments',
    ],
    deliverables: [
      'Current-state delivery and operations assessment with identified constraints and opportunities',
      'Prioritized improvement roadmap with practical, sequenced initiatives',
      'Tooling and platform recommendations aligned to workflows, skills, and constraints',
      'Guidance on CI/CD, infrastructure practices, environment management, and collaboration patterns',
      'Suggested metrics and feedback mechanisms to track delivery and operational improvement',
      'Enablement sessions and actionable next steps for engineering teams and leads',
    ],
    scope: {
      included: [
        'Discovery with engineering stakeholders on workflows, tooling, architecture, and pain points',
        'Assessment of delivery pipeline, infrastructure practices, and operational routines',
        'Prioritization of improvements based on impact, effort, and organizational capacity',
        'Advisory support and recommendations for implementing selected initiatives',
        'Documentation of findings, roadmap, and practical guidance for sustained progress',
      ],
      inputs: [
        'Access to relevant stakeholders, repositories, pipelines, and infrastructure context',
        'Current documentation of processes, environments, and tooling (where available)',
        'Visibility into recent delivery challenges, incidents, or operational pain points',
        'Business and engineering goals, constraints, and capacity for change',
      ],
      outputs: [
        'Assessment summary highlighting strengths, gaps, and key constraints',
        'Actionable DevOps roadmap with prioritized initiatives and rationale',
        'Tooling/workflow recommendations and implementation guidance for in-scope areas',
        'Suggested measures and review cadence to evaluate ongoing improvement',
      ],
    },
    approach: [
      {
        title: 'Discover and assess',
        description:
          'We engage stakeholders and review delivery workflows, tooling, and operating practices to understand how work flows today and where friction or risk accumulates.',
      },
      {
        title: 'Identify constraints and priorities',
        description:
          'We analyze findings to surface systemic bottlenecks and opportunities, then prioritize changes that are feasible within current capacity and aligned to goals.',
      },
      {
        title: 'Define roadmap and recommendations',
        description:
          'We produce a practical roadmap covering process, tooling, and technical practices—such as CI/CD, IaC, and environment management—tailored to your context.',
      },
      {
        title: 'Enable, measure, and iterate',
        description:
          'We support teams with guidance and enablement, recommend meaningful indicators of progress, and help establish a cadence for reviewing and adapting improvements.',
      },
    ],
    tooling: ['AWS', 'Linux', 'Terraform', 'Docker', 'Kubernetes', 'GitHub', 'GitHub Actions', 'GitLab', 'Argo CD', 'Grafana', 'Prometheus', 'OpenTelemetry'],
    principles: [
      'Improve flow by addressing systemic constraints, not isolated symptoms',
      'Favor pragmatic, incremental changes that fit team capacity and operating reality',
      'Treat delivery systems (pipelines, infrastructure, environments) as engineered products',
      'Make work visible with useful metrics and feedback loops, avoiding vanity measures',
      'Enable teams through shared understanding, documentation, and sustainable practices',
    ],
    idealFor: [
      'Technical leads seeking a clear, evidence-informed path to improve delivery performance',
      'Teams balancing platform and process improvements with ongoing product delivery',
      'Organizations wanting to align tooling, practices, and culture around reliable delivery',
    ],
    faqs: [
      {
        question: 'Is this advisory-only or do you help with implementation?',
        answer:
          'We provide assessment and hands-on guidance tailored to your needs. Engagement can focus on roadmap and enablement, and can also include support for implementing selected technical improvements.',
      },
      {
        question: 'How do you measure improvement without relying on vanity metrics?',
        answer:
          'We recommend indicators that reflect real delivery and operational outcomes in your context, paired with a review cadence so progress is visible, interpretable, and actionable.',
      },
      {
        question: 'Can you work with our current tools and processes?',
        answer:
          'Yes. We start from your existing environment and constraints, then recommend changes that are practical and compatible—evolving what you have rather than forcing unnecessary replacements.',
      },
      {
        question: 'How do you avoid disrupting ongoing delivery work?',
        answer:
          'We prioritize incremental, high-impact initiatives and sequence them around team capacity, so improvements can be adopted alongside ongoing commitments with manageable risk.',
      },
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
  turnstileAction: 'contact',
  verificationMessage: 'We could not verify this submission. Please refresh the page and try again.',
  rateLimitMessage: 'Too many messages in a short period. Please wait a few minutes and try again.',
  unavailableMessage: 'The contact form is temporarily unavailable. Please use the direct contact options.',
  failureMessage: 'We could not send your message. Please try again or use the direct contact options.',
  privacyNote: 'We use the details you provide only to respond to your enquiry. We do not sell or share them.',
};

export const technologyStack: TechnologyIcon[] = [
  { label: 'AWS', iconPath: '/technology-icons/aws.svg' },
  { label: 'Linux', iconPath: '/technology-icons/linux.svg' },
  { label: 'Docker', iconPath: '/technology-icons/docker.svg' },
  { label: 'Kubernetes', iconPath: '/technology-icons/kubernetes.svg' },
  { label: 'Helm', iconPath: '/technology-icons/helm.svg' },
  { label: 'Terraform', iconPath: '/technology-icons/terraform.svg' },
  { label: 'Ansible', iconPath: '/technology-icons/ansible.svg' },
  { label: 'GitHub', iconPath: '/technology-icons/github.svg' },
  { label: 'GitHub Actions', iconPath: '/technology-icons/github-actions.svg' },
  { label: 'GitLab', iconPath: '/technology-icons/gitlab.svg' },
  { label: 'Argo CD', iconPath: '/technology-icons/argocd.svg' },
  { label: 'Grafana', iconPath: '/technology-icons/grafana.svg' },
  { label: 'Prometheus', iconPath: '/technology-icons/prometheus.svg' },
  { label: 'OpenTelemetry', iconPath: '/technology-icons/opentelemetry.svg' },
  { label: 'OpenStack', iconPath: '/technology-icons/openstack.svg' },
  { label: 'Red Hat', iconPath: '/technology-icons/red-hat.svg' },
];

export const technologyStackGroups: TechnologyStackGroup[] = [
  {
    title: 'Cloud & platform',
    labels: ['AWS', 'Linux', 'OpenStack', 'Red Hat'],
  },
  {
    title: 'Containers & orchestration',
    labels: ['Docker', 'Kubernetes', 'Helm'],
  },
  {
    title: 'Infrastructure as Code & configuration',
    labels: ['Terraform', 'Ansible'],
  },
  {
    title: 'CI/CD & source control',
    labels: ['GitHub', 'GitHub Actions', 'GitLab', 'Argo CD'],
  },
  {
    title: 'Observability',
    labels: ['Grafana', 'Prometheus', 'OpenTelemetry'],
  },
];

export const homeTechStackContent: HomeTechStackContent = {
  eyebrow: 'DevOps technology stack',
  title: 'Tools and platforms we use to build, deliver, and operate.',
  summary:
    'We work across cloud, infrastructure, automation, delivery, and observability tooling to help teams create reliable environments and predictable software delivery.',
};

export const industries: Industry[] = [
  {
    id: 'financial-services',
    title: 'Financial Services',
    summary: 'Support modern customer experiences and more connected operational systems.',
    capabilities: ['Workflow modernization', 'Integration planning', 'Cloud readiness'],
    hero: {
      eyebrow: 'Financial Services',
      headline: 'Resilient foundations for regulated financial platforms.',
      summary:
        'Helping banking, payments, and fintech institutions modernize core workflows, enforce strict security compliance, and achieve continuous system availability.',
    },
    challenges: [
      'Regulatory scrutiny requiring auditable change management and strict data residency.',
      'Legacy monolithic cores that complicate real-time data integration and digital banking features.',
      'Zero-tolerance expectations for transactional downtime and security vulnerabilities.',
    ],
    solutions: [
      {
        title: 'Zero-Downtime Delivery Pipelines',
        description:
          'Trunk-based CI/CD with automated vulnerability gates and rollback mechanisms for continuous release safety.',
      },
      {
        title: 'Isolated Multi-Zone Cloud Architecture',
        description:
          'High-availability infrastructure designed for automated failover, private connectivity, and data encryption at rest and in transit.',
      },
      {
        title: 'Comprehensive Audit & Compliance Logging',
        description:
          'Centralized immutable telemetry, distributed tracing, and automated access reviews satisfying audit mandates.',
      },
    ],
    keyOutcomes: [
      'Audit-ready infrastructure with declarative, versioned change controls.',
      'Zero single points of failure across payment and transactional pathways.',
      'Accelerated time-to-market for modern digital customer features.',
    ],
    relevantServices: ['cloud-managed-service', 'cicd-automation', 'infrastructure-as-code'],
  },
  {
    id: 'commerce-distribution',
    title: 'Commerce & Distribution',
    summary: 'Connect operational data and systems to help teams move faster with better visibility.',
    capabilities: ['Business applications', 'System integration', 'Operational automation'],
    hero: {
      eyebrow: 'Commerce & Distribution',
      headline: 'High-throughput infrastructure for connected supply chains.',
      summary:
        'Connecting inventory, order management, and multi-channel commerce platforms into a resilient, scalable digital backbone.',
    },
    challenges: [
      'High-volume order surges during seasonal promotions overwhelming backend APIs.',
      'Fragmented data between warehouse management, inventory, and online storefronts.',
      'Operational disruption caused by brittle point-to-point system integrations.',
    ],
    solutions: [
      {
        title: 'Elastic Auto-Scaling Cloud Environments',
        description:
          'Containerized workloads that dynamically scale compute resources to absorb sudden consumer demand spikes.',
      },
      {
        title: 'Event-Driven System Integration',
        description:
          'Decoupled message queues and asynchronous API pipelines that synchronize inventory without cascading failures.',
      },
      {
        title: 'End-to-End Observability Dashboards',
        description:
          'Real-time tracking of order pipeline latency, checkout completion rates, and integration health.',
      },
    ],
    keyOutcomes: [
      'Uninterrupted checkout and order processing during peak promotional volumes.',
      'Sub-second inventory synchronization across warehouses and sales channels.',
      'Clear visibility into order lifecycle bottlenecks and delivery performance.',
    ],
    relevantServices: ['system-integration', 'cloud-managed-service', 'devops-consulting'],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    summary: 'Create practical digital foundations for teams that depend on reliable collaboration and delivery.',
    capabilities: ['Custom platforms', 'Cloud managed services', 'CI/CD automation'],
    hero: {
      eyebrow: 'Professional Services',
      headline: 'Dependable digital platforms for client-facing organizations.',
      summary:
        'Enabling consulting, legal, and operational service firms to collaborate securely, streamline client deliverables, and operate with high reliability.',
    },
    challenges: [
      'Siloed client engagement tools and disparate communication channels.',
      'Client data protection requirements and access governance across distributed teams.',
      'Lack of dedicated internal DevOps capacity to manage and patch cloud infrastructure.',
    ],
    solutions: [
      {
        title: 'Fully Managed Cloud Operations',
        description:
          '24/7 proactive monitoring, automated security patching, and SLA-backed operational management.',
      },
      {
        title: 'Role-Based Access Governance',
        description:
          'Granular identity federation and least-privilege access controls protecting confidential client assets.',
      },
      {
        title: 'Standardized Development Environments',
        description:
          'Reproducible developer workspaces and automated deployment workflows for rapid delivery of client tooling.',
      },
    ],
    keyOutcomes: [
      'Reliable, secure collaboration platforms with guaranteed uptime for client delivery.',
      'Complete freedom for internal teams to focus on client work rather than server administration.',
      'Verifiable data protection compliance reassuring enterprise clients.',
    ],
    relevantServices: ['cloud-managed-service', 'code-repositories-artifact-management', 'devops-consulting'],
  },
  {
    id: 'growing-enterprises',
    title: 'Growing Enterprises',
    summary: 'Modernize the technology foundations needed to scale with confidence in Myanmar and beyond.',
    capabilities: ['Digital roadmaps', 'DevOps consulting', 'Technology advisory'],
    hero: {
      eyebrow: 'Growing Enterprises',
      headline: 'Scalable engineering practices to fuel organizational growth.',
      summary:
        'Guiding expanding companies to transition from ad-hoc manual routines to modern, automated, and maintainable cloud systems.',
    },
    challenges: [
      'Technical debt and manual release processes slowing down product iterations.',
      'Difficulty recruiting and retaining specialized cloud and DevOps engineering talent.',
      'Unpredictable infrastructure costs and lack of architectural standardization.',
    ],
    solutions: [
      {
        title: 'DevOps Transformation & Mentorship',
        description:
          'Hands-on advisory that introduces trunk-based workflows, automated testing, and team delivery velocity.',
      },
      {
        title: 'Infrastructure as Code Standardization',
        description:
          'Declarative Terraform blueprints that replace manual setup with reproducible cloud environments.',
      },
      {
        title: 'Cloud Cost Optimization & Architecture Review',
        description:
          'Identifying overprovisioned resources, architectural bottlenecks, and sustainable cloud budgeting.',
      },
    ],
    keyOutcomes: [
      'Transition from monthly manual releases to automated daily deployment capability.',
      'Predictable, rightsized cloud expenditure aligned with business growth.',
      'Empowered in-house engineering team equipped with modern DevOps practices.',
    ],
    relevantServices: ['devops-consulting', 'infrastructure-as-code', 'cicd-automation'],
  },
];

export const insights: Insight[] = [
  {
    category: 'Cloud operations',
    title: 'What dependable cloud operations look like for growing teams',
    summary:
      'Reliable cloud operations start with clear visibility, defined ownership, and repeatable routines. Monitoring, patching, incident response, and cost review work best when they are treated as ongoing engineering practices—not occasional clean-up tasks—so teams can reduce surprises and focus on delivery.',
    slug: 'dependable-cloud-operations',
    readTime: '5 min read',
    metaDescription:
      'Practical guidance on building dependable cloud operations: observability, ownership, incident response, and cost discipline as sustainable engineering routines.',
    body: [
      'Growing engineering teams often reach a point where the cloud environment has outpaced the operational discipline around it. Workloads accumulate, alerts multiply, and the people who understand what each service does are increasingly stretched. The result is a fragile, reactive posture—responding to incidents rather than preventing them.',
      'Dependable cloud operations begin with visibility. Without clear observability across workloads, dependencies, and cost centres, every other practice is guesswork. This means instrumenting key services with meaningful metrics and alerts, capturing structured logs, and surfacing dashboards that reflect the actual health of the system—not just whether a process is running.',
      'Ownership is the second pillar. When everyone is responsible for a service, in practice nobody is. Defining clear ownership for each workload—including who is on call, who approves changes, and who reviews post-incident reports—prevents the diffusion of responsibility that lets small problems grow into large failures.',
      'Repeatable operational routines are what sustain the first two pillars over time. Patching, cost reviews, security posture checks, and backup validation should run on predictable schedules with documented outputs. When these routines are encoded into runbooks and tracked, teams accumulate institutional knowledge rather than depending on tribal memory.',
      'Cost discipline fits within the same operational framework. Cloud costs are a function of configuration decisions made over time, and without regular review they drift upward. Effective teams treat rightsizing, reserved capacity planning, and waste identification as recurring engineering work, not a finance team concern surfaced at year-end.',
      'The discipline required to run cloud environments reliably is achievable for growing teams, but it requires treating operations as a first-class engineering practice. That means investing in tooling, documentation, and routine review cycles before incidents make the investment feel urgent.',
    ],
  },
  {
    category: 'CI/CD automation',
    title: 'Building a CI/CD pipeline that teams can trust',
    summary:
      'A trustworthy pipeline is versioned, observable, and designed for fast feedback. Clear stages, consistent quality gates, traceable artifacts, and safe promotion paths help engineering teams release with confidence while keeping the delivery process maintainable as systems evolve.',
    slug: 'trustworthy-cicd-pipeline',
    readTime: '6 min read',
    metaDescription:
      'How to design a CI/CD pipeline engineers trust: versioned configuration, observable stages, consistent quality gates, and safe artifact promotion paths.',
    body: [
      'A CI/CD pipeline that teams do not trust is worse than no pipeline at all. When engineers learn to work around a pipeline—pushing directly to main, skipping tests, or manually deploying because automation is unreliable—the investment in automation becomes negative. Building trust in the delivery process is an engineering problem, and it requires deliberate design.',
      'The most visible property of a trustworthy pipeline is speed of feedback. If a commit takes forty minutes to reach a test result, engineers context-switch away and rarely return with full attention. Fast feedback loops—typically under ten minutes for the core check—require investment in test parallelism, caching strategy, and clear separation of quick unit checks from slower integration suites.',
      'Pipeline configuration itself should be versioned, reviewed, and held to the same quality standards as application code. Pipeline-as-code stored in the repository means changes to the delivery process go through pull requests, are visible in history, and can be reverted cleanly if something breaks. Ad-hoc changes made through a CI tool UI accumulate invisible debt.',
      'Quality gates require consistent enforcement. A gate that sometimes runs and sometimes does not—depending on who triggered the build or which branch is involved—teaches teams that the gate is optional. Every stage should have an explicit pass/fail criterion, and that criterion should be the same for every change regardless of urgency.',
      'Artifact management and promotion paths close the loop. Building a versioned, immutable artifact once and promoting it through environments—rather than rebuilding at each stage—eliminates environment-specific build drift. Tracing a production deployment back to a specific commit, test run, and artifact version should be a routine operation, not a forensic investigation.',
      'Secure credential handling and least-privilege access to deployment targets deserve attention early. Pipelines that hold broad credentials or interact with production in ways that bypass normal change controls create risk that grows with the organization. Environment-scoped secrets, explicit approval gates for production, and audit logs for deployments are practical starting points.',
    ],
  },
  {
    category: 'Infrastructure as Code',
    title: 'Why infrastructure as code matters beyond provisioning speed',
    summary:
      'Infrastructure as code is as much about control as it is about automation. Declarative definitions, reviewable changes, and reusable environment patterns help reduce drift, improve auditability, and make infrastructure changes safer and easier to reproduce across environments.',
    slug: 'infrastructure-as-code-beyond-speed',
    readTime: '5 min read',
    metaDescription:
      'Infrastructure as code extends beyond fast provisioning: how declarative definitions, drift prevention, and reviewable changes improve auditability and operational safety.',
    body: [
      'The common case for infrastructure as code focuses on speed—spin up an environment in minutes rather than hours. Speed is a real benefit, but it is not the primary reason to invest. The more durable value is control: a clear, reviewable record of what infrastructure exists, why it was created, and what state it is expected to be in.',
      'Drift is the central operational risk in any cloud environment managed without code. When engineers make changes through cloud consoles or ad-hoc scripts, the actual state of infrastructure diverges from whatever documentation or memory exists. Over time, nobody knows with confidence what is running, what it depends on, or what will break if something changes. Declarative infrastructure definitions make drift visible and correctable.',
      'Reviewability is the property that changes organisational behaviour. When a Terraform plan or similar diff is part of a pull request review, infrastructure changes get the same scrutiny as application code. Junior engineers learn from the review process. Senior engineers catch configuration decisions that will cause problems at scale. Changes that bypass review become exceptions, not norms.',
      'Reusable module patterns accelerate the right way. Rather than speed for its own sake, modules allow teams to encode organisational standards—security controls, tagging conventions, network boundaries—into reusable building blocks. Spinning up a new environment using an approved module is fast and correct, rather than fast and inconsistent.',
      'State management is where infrastructure as code implementations often break down. Remote state stored reliably, locked during operations, and accessible to the right team members is a prerequisite for multi-person workflows. Teams that treat state as an afterthought encounter conflicts, corrupted state files, and the anxiety of not knowing whether a plan output reflects reality.',
      'The transition from manual infrastructure to code-managed infrastructure is incremental in practice. Starting with new workloads, incrementally importing existing resources, and building review habits gradually produces more lasting results than attempting to convert everything at once. The goal is a codebase that accurately represents the environment—and can be used to recreate it.',
    ],
  },
  {
    category: 'Artifact governance',
    title: 'Traceability from source to release starts with good repository practices',
    summary:
      'Strong governance connects repositories, build outputs, and releases into a clear chain of custody. Consistent branching, access controls, versioning, and artifact management make it easier for teams to understand what changed, what shipped, and how to reproduce or roll back when needed.',
    slug: 'artifact-governance-traceability',
    readTime: '5 min read',
    metaDescription:
      'Building traceability from source to release: repository branching standards, access controls, immutable artifact versioning, and chain-of-custody practices for engineering teams.',
    body: [
      'Traceability is the ability to answer a specific question under pressure: given what is running in production right now, what source code produced it, what tests validated it, and when was it deployed? Teams that cannot answer this question reliably spend incident time on investigation rather than remediation—and face harder conversations with customers and auditors.',
      'Repository structure is where traceability begins. Consistent branching conventions, enforced through branch protection rules and clear contribution guidelines, mean that the history of a repository tells a coherent story. Merge commits, meaningful commit messages, and tag conventions for releases create a navigable record. Repositories where anything goes in any direction make archaeology difficult.',
      'Access controls on repositories are operational hygiene, not just a security measure. When every engineer has write access to every branch of every repository, it is impossible to know whether a change was intended or accidental, reviewed or unreviewed. Restricting direct pushes to protected branches and requiring pull request approval before merge is a baseline that most teams find easy to implement and hard to argue against once in place.',
      'Artifact versioning creates the second link in the chain. Build outputs—container images, compiled binaries, deployment packages—should be versioned immutably, stored in a managed registry, and annotated with metadata connecting them to source commits and build runs. Pulling an artifact by a mutable tag like "latest" in production undermines the entire traceability model.',
      'The registry is the custody point between build and deploy. Policies on which registries can be used as sources for production deployments, who can promote artifacts between environments, and which scans or approvals are required before promotion represent operational controls that mature teams encode into their delivery process rather than relying on convention.',
      'Retention policies and audit logs complete the picture. Knowing what was deployed matters; knowing when it was deployed and by whom matters equally when investigating a failure or responding to a compliance inquiry. These records should be treated as operational infrastructure with the same durability requirements as the systems they describe.',
    ],
  },
  {
    category: 'System integration',
    title: 'Designing integrations that stay maintainable over time',
    summary:
      'Effective integration work begins with clear system boundaries, data ownership, and failure handling—not just connectivity. When interfaces, data flows, and operational responsibilities are explicit, teams can reduce fragmentation and evolve connected systems without creating brittle dependencies.',
    slug: 'maintainable-system-integrations',
    readTime: '6 min read',
    metaDescription:
      'Designing system integrations for long-term maintainability: clear boundaries, explicit data ownership, failure handling, and interface contracts that survive change.',
    body: [
      'Most integration failures are not technical failures—they are failures of definition. The systems that become unmaintainable over time are usually those where ownership boundaries were never explicit, data transformations were never documented, and failure handling was deferred to "we will deal with that later." Technical implementation follows from design clarity; it does not substitute for it.',
      'System boundaries are the first thing to establish. Each system in an integration should have a defined scope of responsibility and a defined perimeter of what it owns versus what it consumes. When those boundaries are fuzzy, changes in one system create unexpected ripple effects in another, and the team responsible for neither system ends up debugging both.',
      'Data ownership and schema contracts deserve explicit agreement early. Which system is the source of truth for a given entity? Who can modify the schema, and what notice is required? Versioned API contracts or schema registries are practical mechanisms for making these agreements durable rather than conversational. The integration that treats contracts informally accumulates silent breakage over time.',
      'Failure handling is the design decision most often deferred and most costly when avoided. What happens when the upstream system is unavailable? What is the retry strategy, and does it include exponential backoff and circuit-breaking? How does the consuming system behave with stale data? Systems that handle failure gracefully—with explicit degraded modes and clear operational signals—are easier to operate and diagnose than those that fail silently or catastrophically.',
      'Observability across integration boundaries is an operational necessity. Tracing a request through multiple systems, measuring latency and error rates at each boundary, and surfacing meaningful alerts when flows degrade are more difficult across system boundaries than within a single service. These concerns should be addressed during design, not added as a retrofit after the first production incident.',
      'Governance of integration points includes knowing what integrations exist. Teams that have grown through acquisition or organic complexity often find they have undocumented dependencies discovered only when something breaks. Maintaining an integration map—even a simple one—and treating it as a living document alongside architecture decisions keeps the picture current and reduces the blast radius of changes.',
    ],
  },
  {
    category: 'DevOps consulting',
    title: 'A practical way to prioritize DevOps improvements',
    summary:
      'Meaningful DevOps progress comes from addressing the constraints that limit flow today. By focusing on high-impact changes, aligning tooling with team capacity, and using useful feedback signals, organizations can improve delivery speed and reliability without disrupting ongoing commitments.',
    slug: 'prioritizing-devops-improvements',
    readTime: '5 min read',
    metaDescription:
      'A practical framework for prioritizing DevOps improvements: identifying flow constraints, aligning tooling to team capacity, and using feedback signals to guide high-impact changes.',
    body: [
      'DevOps improvement programmes fail most often not because they choose the wrong tools but because they attempt to change everything at once. Adoption pressure, competing priorities, and the difficulty of running improvements alongside delivery commitments mean that broad, simultaneous changes typically produce partial implementations that satisfy nobody. A focused, constraint-driven approach produces more durable results.',
      'The first step is identifying where flow actually breaks down. Value stream mapping—even a lightweight version conducted in a workshop with the team—surfaces the stages where work waits longest, where rework rates are highest, and where handoffs introduce the most variability. These are the constraints. Improvements that do not address a real constraint in the value stream improve metrics without improving outcomes.',
      'Tooling decisions should follow constraint analysis, not precede it. The selection of a CI platform, an observability stack, or an infrastructure provisioning tool matters significantly less than whether the tool directly addresses a bottleneck in the team\'s current delivery flow. Teams that invest in tooling before understanding their constraints often find that new tools create new overhead without resolving the original friction.',
      'Team capacity and change absorption rate are practical limits on improvement velocity. A team already at capacity cannot sustain a parallel improvement programme without degrading delivery. Realistic planning accounts for this by sequencing changes, protecting time for improvement work explicitly, and treating improvement as a commitment rather than a background activity.',
      'Feedback signals are what allow course correction. Deployment frequency, lead time for changes, change failure rate, and time to restore service are widely used indicators of delivery health. But the signal value comes from tracking them consistently over time, not from a single snapshot. Teams that review these metrics in regular retrospectives and connect them to recent changes build a feedback loop that guides prioritisation organically.',
      'External consulting can accelerate the diagnostic phase and provide a reference point for what good looks like in comparable environments. The value is not in prescribing a universal toolchain but in helping teams distinguish between problems that are specific to their context and patterns that have well-tested solutions. The goal is a team that can sustain its own improvement programme, not one that is permanently dependent on external guidance.',
    ],
  },
];

export const pageMetadata: Record<RoutePath, PageMetadata> = {
  '/': {
    title: 'Vital Tech Myanmar | Cloud, CI/CD, and DevOps Services',
    description:
      'Vital Tech Myanmar helps organizations in Myanmar and beyond with cloud managed services, CI/CD automation, infrastructure as code, artifact management, system integration, and DevOps consulting.',
  },
  '/services': {
    title: 'Cloud, CI/CD, and DevOps Services | Vital Tech Myanmar',
    description:
      'Explore Vital Tech Myanmar services: cloud managed services, CI/CD automation, infrastructure as code, repository and artifact management, system integration, and DevOps consulting.',
  },
  '/industries': {
    title: 'Industries We Support | Vital Tech Myanmar',
    description:
      'See how Vital Tech Myanmar supports financial services, commerce, professional services, and growing enterprises with practical cloud, delivery, and integration capabilities.',
  },
  '/about': {
    title: 'About Vital Tech Myanmar | Practical Technology Partnership',
    description:
      'Learn about Vital Tech Myanmar, our approach to cloud operations, delivery automation, infrastructure, and integration, and how we help teams make practical technology progress.',
  },
  '/insights': {
    title: 'Insights on Cloud, CI/CD, and DevOps | Vital Tech Myanmar',
    description:
      'Read Vital Tech Myanmar perspectives on cloud operations, CI/CD automation, infrastructure as code, artifact governance, system integration, and DevOps improvement.',
  },
  '/contact': {
    title: 'Contact Vital Tech Myanmar | Start a Conversation',
    description:
      'Contact Vital Tech Myanmar to discuss cloud managed services, CI/CD automation, infrastructure as code, artifact management, system integration, or DevOps consulting.',
  },
  '/404': {
    title: 'Page Not Found | Vital Tech Myanmar',
    description:
      'The page you are looking for cannot be found. Explore Vital Tech Myanmar cloud managed services, CI/CD pipelines, and DevOps infrastructure solutions.',
  },
};

export const homeHero: HeroContent = {
  eyebrow: 'Vital Tech Myanmar',
  outline: 'Enterprise',
  title: 'IT Partner',
  summary:
    'We design and deliver the cloud, delivery automation, and integration foundations that help ambitious organizations move with confidence.',
};

export const servicesPageContent = {
  hero: {
    eyebrow: 'Our services',
    outline: 'BUILT FOR',
    title: 'MOMENTUM',
    summary:
      'Explore cloud, delivery automation, infrastructure, and integration capabilities designed to help teams modernize how they build, operate, and grow.',
  },
  section: {
    eyebrow: 'What we deliver',
    title: 'Practical capabilities for modern operations.',
    summary:
      'Each service addresses a specific part of your technology landscape—from cloud operations and CI/CD to infrastructure as code, artifact governance, system integration, and DevOps consulting—with clear outcomes and hands-on support.',
  },
};

export const industriesPageContent = {
  hero: {
    eyebrow: 'Industries',
    outline: 'RELEVANT',
    title: 'EXPERIENCE',
    summary:
      'Technology creates the most value when it fits the operational context, constraints, and goals of the organization using it.',
  },
  section: {
    eyebrow: 'Where capability meets context',
    title: 'Designed for organizations ready to operate with more clarity.',
    summary:
      'We bring a practical lens to cloud operations, delivery automation, infrastructure, and integration so teams can improve reliability, visibility, and momentum in ways that fit their environment.',
  },
  evidence: {
    eyebrow: 'Approved evidence',
    title: 'Case studies will appear here as customer-safe evidence becomes available.',
    summary:
      'We share customer stories and outcomes only when they have been approved for public use. In the meantime, we focus on clear capabilities, practical approaches, and direct conversations about your context.',
  },
};

export const aboutPageContent = {
  hero: {
    eyebrow: 'About Vital Tech Myanmar',
    outline: 'PRACTICAL',
    title: 'PARTNERSHIP',
    summary:
      'We help teams make better technology decisions and turn them into reliable delivery across cloud, infrastructure, integration, and DevOps practices.',
  },
  approach: {
    eyebrow: 'Our approach',
    title: 'Clear thinking. Strong delivery. Useful technology.',
    summary:
      'Vital Tech Myanmar brings together technical capability and business context so organizations can focus effort where it creates the most value—building foundations that are maintainable, secure, and ready to evolve.',
  },
  principles: [
    {
      step: '01',
      title: 'Understand the operating reality',
      summary:
        'We start with the systems, people, constraints, and outcomes that shape the work, so recommendations and delivery fit how your organization actually operates.',
    },
    {
      step: '02',
      title: 'Build for useful progress',
      summary:
        'We favor clear, maintainable solutions over unnecessary complexity, helping teams improve reliability, delivery flow, and visibility in practical increments.',
    },
    {
      step: '03',
      title: 'Support the next stage',
      summary:
        'We create foundations that can adapt as business needs, platforms, and delivery maturity evolve—through documentation, enablement, and repeatable practices.',
    },
  ],
  focus: {
    eyebrow: 'What we focus on',
    title: 'Capabilities that strengthen day-to-day technology operations.',
    summary:
      'Our work spans the practices that help teams run and improve modern systems with confidence.',
    areas: [
      {
        title: 'Cloud and operations',
        summary:
          'Operational care, visibility, and cost-aware practices that keep cloud environments dependable and easier to manage.',
      },
      {
        title: 'Delivery and automation',
        summary:
          'CI/CD and workflow improvements that make software delivery more predictable, traceable, and efficient for engineering teams.',
      },
      {
        title: 'Infrastructure and governance',
        summary:
          'Infrastructure as code and artifact/repository practices that improve consistency, control, and reproducibility across environments and releases.',
      },
      {
        title: 'Integration and enablement',
        summary:
          'System integration and DevOps guidance that connect platforms, align processes, and help teams adopt sustainable ways of working.',
      },
    ],
  },
};

export const insightsPageContent = {
  hero: {
    eyebrow: 'Insights',
    outline: 'THINKING',
    title: 'FORWARD',
    summary:
      'Practical perspectives on cloud operations, CI/CD automation, infrastructure as code, artifact governance, system integration, and DevOps improvement.',
  },
};

export const contactPageContent = {
  hero: {
    eyebrow: 'Contact',
    outline: "LET'S",
    title: 'CONNECT',
    summary:
      'Start a direct conversation about your cloud, delivery, infrastructure, integration, or DevOps goals and the practical next step for your team.',
  },
  intro: {
    eyebrow: 'Direct contact',
    title: 'Choose the channel that works best for you.',
    summary:
      'Prefer to speak directly? Reach the team by phone or email, or send a message using the form with details about your organization and what you want to achieve.',
  },
};

export const trustContent: TrustContent = {
  eyebrow: 'Engineering delivery & trust',
  title: 'Built for operational stability, verified in production.',
  summary:
    'We partner with engineering organizations to transform manual routines into dependable, automated, and observable cloud operations.',
  metrics: [
    {
      value: '99.95%',
      label: 'Target Availability Objective',
      description: 'Resilient architectures designed for redundancy, automated failover, and zero single points of failure.',
    },
    {
      value: '< 15m',
      label: 'Automated Delivery Flow',
      description: 'Streamlined build, test, and release automation pipelines providing rapid feedback to development teams.',
    },
    {
      value: '100%',
      label: 'Infrastructure as Code',
      description: 'Declarative environment definitions eliminating configuration drift between staging and production.',
    },
    {
      value: '24/7',
      label: 'Continuous Observability',
      description: 'Proactive metrics, distributed tracing, and health checks that alert on anomalies before users are impacted.',
    },
  ],
  testimonials: [
    {
      quote:
        'Vital Tech helped us transition our core systems to AWS with containerized workloads and automated CI/CD. What used to take days of manual coordination is now a predictable 15-minute deployment.',
      author: 'Technology Director',
      role: 'Head of Engineering',
      organization: 'Financial Services Enterprise',
      tag: 'Cloud & CI/CD Migration',
    },
    {
      quote:
        'Their approach to Infrastructure as Code and repository governance gave our engineering team full auditability and confidence. We now spin up isolated environments on demand with zero configuration drift.',
      author: 'Infrastructure Lead',
      role: 'Principal Systems Architect',
      organization: 'Digital Commerce Platform',
      tag: 'IaC & Governance',
    },
    {
      quote:
        'Having Vital Tech manage our cloud operations and observability stack has allowed our product engineers to focus 100% on building customer features rather than troubleshooting servers.',
      author: 'Operations Manager',
      role: 'VP of Technology',
      organization: 'Regional Logistics Network',
      tag: 'Managed Cloud Operations',
    },
  ],
  standards: [
    {
      title: 'Zero Configuration Drift',
      description: 'All infrastructure state is versioned in Git, reviewed through pull requests, and applied via automated pipelines.',
    },
    {
      title: 'Security & Access Isolation',
      description: 'Strict principle of least privilege, encrypted secrets storage, and automated container vulnerability scanning.',
    },
    {
      title: 'Auditable Delivery Gates',
      description: 'Cryptographic commit signatures, artifact provenance tracking, and policy-as-code validation before releases.',
    },
  ],
};

export const blueprintContent: BlueprintContent = {
  eyebrow: 'Architecture & Delivery Blueprint',
  title: 'An end-to-end cloud engineering lifecycle.',
  summary:
    'Explore the sequential stages, automated verification gates, and tooling we implement to transform delivery from manual uncertainty into predictable, auditable software flow.',
  stages: [
    {
      id: 'source',
      step: '01',
      kicker: 'Source & Policy',
      title: 'Repository Architecture & Branch Governance',
      summary:
        'Standardized Git workflows with strict branch protection policies, pre-commit security hooks, and automated dependency scanning to guarantee that only validated code enters mainline development.',
      gates: [
        'Trunk-based branch protection requiring peer code reviews',
        'Automated pre-commit secret detection & linting checks',
        'Signed commits with cryptographic developer identity',
      ],
      tools: ['GitLab', 'GitHub', 'Linux'],
      outcome: 'A tamper-proof, auditable source codebase with zero unauthorized or uninspected commits.',
    },
    {
      id: 'build',
      step: '02',
      kicker: 'Build & Security',
      title: 'Continuous Integration & Artifact Integrity',
      summary:
        'Containerized build runners execute deterministic pipelines, running automated test suites, software composition analysis (SCA), and container vulnerability scans before publishing signed artifacts.',
      gates: [
        'Automated unit, integration, and contract test matrices',
        'Static application security testing (SAST) & dependency audits',
        'Immutable container image building with cryptographic digest pinning',
      ],
      tools: ['GitHub Actions', 'Docker', 'Red Hat'],
      outcome: 'Validated, vulnerability-screened container images ready for promotion across environments.',
    },
    {
      id: 'provision',
      step: '03',
      kicker: 'Infrastructure as Code',
      title: 'Declarative Cloud Infrastructure & Drift Control',
      summary:
        'All networking, VPCs, compute instances, and Kubernetes clusters are provisioned through declarative Terraform and Ansible configurations with isolated state backends and speculative plan reviews.',
      gates: [
        'Automated pull request plan execution and resource diff previews',
        'State locking with encrypted remote backends to prevent concurrency errors',
        'Policy-as-code verification preventing unapproved security group rules',
      ],
      tools: ['Terraform', 'Ansible', 'AWS', 'OpenStack'],
      outcome: 'Zero configuration drift between staging and production environments, reproducible in minutes.',
    },
    {
      id: 'deploy',
      step: '04',
      kicker: 'GitOps & Delivery',
      title: 'GitOps Reconciliation & Zero-Downtime Rollouts',
      summary:
        'Argo CD continuously reconciles Kubernetes cluster state with desired state declared in Git. Progressive delivery techniques (blue-green and canary) ensure zero-downtime releases with instant automated rollback.',
      gates: [
        'Declarative GitOps sync loops eliminating out-of-band cluster modifications',
        'Canary analysis measuring error rates and latency before full promotion',
        'Instant automated rollback triggered by Prometheus threshold breaches',
      ],
      tools: ['Kubernetes', 'Helm', 'Argo CD'],
      outcome: 'Zero-downtime application deployments with automated self-healing cluster synchronization.',
    },
    {
      id: 'operate',
      step: '05',
      kicker: 'Telemetry & SRE',
      title: 'Distributed Observability & Proactive SRE Operations',
      summary:
        'Unified telemetry captures distributed traces, application metrics, and infrastructure logs. Prometheus alerts notify engineering teams of threshold anomalies well before service levels or users are impacted.',
      gates: [
        'Full-context distributed tracing across microservices via OpenTelemetry',
        'Multi-channel alerting routing high-priority incidents with actionable runbooks',
        'Real-time SLA/SLO dashboards tracking error budgets and resource saturation',
      ],
      tools: ['Prometheus', 'Grafana', 'OpenTelemetry'],
      outcome: 'Complete operational transparency with proactive incident response and guaranteed availability.',
    },
  ],
};

export const notFoundPageContent: NotFoundPageContent = {
  eyebrow: '404 Error',
  code: '404',
  title: 'Page not found',
  summary:
    'The page you are looking for has been moved, removed, or may never have existed. Let us help you navigate back to our core engineering services.',
  primaryAction: {
    label: 'Return to Homepage',
    href: '/',
  },
  secondaryAction: {
    label: 'Contact Engineering Team',
    href: '/contact',
  },
  suggestedHeading: {
    eyebrow: 'Recommended Destinations',
    title: 'Explore Vital Tech Core Capabilities',
    summary:
      'Direct access to our managed cloud offerings, industry playbooks, technical blueprints, and engineering insights.',
  },
  suggestedLinks: [
    {
      label: 'Cloud & DevOps Services',
      href: '/services',
      description:
        'Cloud managed services, automated CI/CD pipelines, declarative IaC, and SRE observability routines.',
    },
    {
      label: 'Industry Playbooks',
      href: '/industries',
      description:
        'Tailored cloud architecture patterns for Financial Services, Digital Commerce, and Growing Enterprises.',
    },
    {
      label: 'Technical Insights',
      href: '/insights',
      description:
        'In-depth engineering perspectives on cloud operations, delivery security, and artifact governance.',
    },
    {
      label: 'About Partnership',
      href: '/about',
      description:
        'Our engineering principles, operating reality alignment, and practical technology roadmap approach.',
    },
  ],
};

export const cloudRoiContent: CloudRoiContent = {
  eyebrow: 'Interactive ROI Estimator',
  title: 'Calculate the business impact of engineering acceleration.',
  summary:
    'Estimate how proactive cloud operations and automated CI/CD pipelines eliminate cloud waste, accelerate release cycles, and reclaim engineering time for core product development.',
  spendLabel: 'Current Monthly Cloud Spend (USD)',
  spendMin: 1000,
  spendMax: 50000,
  spendStep: 500,
  spendDefault: 10000,
  teamSizeLabel: 'Engineering Team Size (Engineers)',
  teamMin: 2,
  teamMax: 60,
  teamStep: 1,
  teamDefault: 10,
  frequencyLabel: 'Current Deployment Cadence',
  frequencies: [
    { id: 'monthly', label: 'Monthly (1x/mo)', cadence: 'Manual release gates with monthly change windows', multiplier: 1.0 },
    { id: 'biweekly', label: 'Bi-Weekly (2x/mo)', cadence: 'Scheduled sprint releases with staging reviews', multiplier: 1.25 },
    { id: 'weekly', label: 'Weekly (4x/mo)', cadence: 'Frequent releases with partial pipeline automation', multiplier: 1.5 },
    { id: 'daily', label: 'Daily / On-Demand', cadence: 'Continuous integration with multi-environment promotion', multiplier: 1.75 },
  ],
  defaultFrequencyId: 'biweekly',
  resultsTitle: 'Estimated Annual Operational & Cost Impact',
  annualSavingsLabel: 'Estimated Annual Cloud Savings',
  annualSavingsSubtext: 'Based on 22% waste reduction through rightsizing, idle resource cleanups, and reserved capacity planning.',
  hoursReclaimedLabel: 'Reclaimed Developer Hours / Mo',
  hoursReclaimedSubtext: 'Eliminating manual release checklists, ad-hoc server fixes, and uninstrumented alert troubleshooting.',
  velocityLabel: 'Release Cycle Acceleration',
  velocitySubtext: 'From manual handoffs to automated GitOps pipelines with instant verification gates.',
  ctaText: 'Discuss Your Tailored Architecture',
  disclaimer:
    '* Projections are conservative estimates derived from AWS Well-Architected reviews and industry DevOps benchmarks across growing enterprise teams. Actual savings and acceleration vary based on infrastructure complexity and current automation maturity.',
};
