import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Globe,
  LineChart,
  Mail,
  Megaphone,
  PenLine,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Users2,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ServiceHighlight = { stat: string; label: string }

export type ServiceDetail = {
  slug: string
  title: string
  tagline: string
  description: string
  Icon: LucideIcon
  category: 'technical' | 'marketing'
  timeline: string
  deliverables: string[]
  process: Array<{ title: string; description: string }>
  useCases: string[]
  highlights: ServiceHighlight[]
}

export const techServices: ServiceDetail[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Bespoke systems built for your exact workflow — not the other way around.',
    description:
      'We architect, build, and scale digital products from the ground up. Whether it\'s an internal tool replacing spreadsheets, a SaaS platform serving thousands, or a mission-critical enterprise system, we deliver software that becomes a competitive advantage — not a maintenance burden.',
    Icon: Code2,
    category: 'technical',
    timeline: '8–20 weeks',
    deliverables: [
      'Functional specification & architecture document',
      'UI/UX wireframes and interactive prototype',
      'Full production codebase (fully owned by you)',
      'Unit, integration, and E2E test suite',
      'CI/CD pipeline setup and documentation',
      'Developer handoff kit and technical runbook',
      '60-day post-launch support window',
    ],
    process: [
      {
        title: 'Discovery & Scoping',
        description:
          'We map your business domain, user flows, and technical constraints in a structured workshop. Output: a detailed project scope, risk register, and tech-stack recommendation.',
      },
      {
        title: 'Architecture & Design',
        description:
          'System architecture, data models, and API contracts are agreed before a line of production code is written. We prototype critical journeys for early validation.',
      },
      {
        title: 'Agile Development',
        description:
          'Two-week sprints with live demos at every milestone. You see working software early and steer direction based on real output, not status updates.',
      },
      {
        title: 'QA & Security Review',
        description:
          'Automated test suites, manual QA regression, and an OWASP-based security review run before every release candidate.',
      },
      {
        title: 'Deployment & Handoff',
        description:
          'We configure infrastructure, set up monitoring and alerting, and hand over living documentation. Your team owns and can extend the codebase confidently from day one.',
      },
    ],
    useCases: [
      'Startups building an MVP to validate product-market fit',
      'Enterprises replacing legacy systems with modern architecture',
      'B2B companies automating complex internal workflows',
      'SaaS founders who need a scalable, multi-tenant platform',
    ],
    highlights: [
      { stat: '8–20 wks', label: 'Typical delivery' },
      { stat: '99.9%', label: 'Uptime SLA' },
      { stat: '60 days', label: 'Post-launch support' },
    ],
  },
  {
    slug: 'mobile-app',
    title: 'Mobile App Development',
    tagline: 'Native-quality iOS & Android experiences, built with cross-platform efficiency.',
    description:
      'We deliver mobile applications that feel genuinely native — smooth 60fps animations, platform conventions respected, offline-first architecture where needed. From consumer apps to enterprise mobile tools, we ship applications that users actually want to use.',
    Icon: Smartphone,
    category: 'technical',
    timeline: '10–24 weeks',
    deliverables: [
      'iOS & Android production builds',
      'App Store & Google Play listing setup',
      'Push notification infrastructure',
      'Analytics integration (Mixpanel or Firebase)',
      'Backend API development (if required)',
      'Design system & reusable component library',
      '90-day post-launch bug warranty',
    ],
    process: [
      {
        title: 'Platform Strategy',
        description:
          'We determine the right tech stack — React Native, Flutter, or native Swift/Kotlin — based on your performance requirements, team skills, and delivery timeline.',
      },
      {
        title: 'UX & Prototype',
        description:
          'High-fidelity interactive prototypes tested with real users before development begins. We validate the core journeys before writing production code.',
      },
      {
        title: 'Iterative Development',
        description:
          'Feature-by-feature delivery with weekly TestFlight and Play Console builds so you can test on real devices throughout the project, not just at the end.',
      },
      {
        title: 'Performance & Security',
        description:
          'Profiling for memory leaks, battery usage, and render performance. Security review covering data storage, network calls, and authentication flows.',
      },
      {
        title: 'Store Submission & Launch',
        description:
          'We manage the App Store and Play Store submission process end-to-end: compliance checks, screenshot production, release notes, and staged rollout configuration.',
      },
    ],
    useCases: [
      'Consumer apps targeting iOS and Android users simultaneously',
      'Enterprise mobile tools for field and frontline teams',
      'IoT companion apps with Bluetooth or hardware integration',
      'E-commerce and marketplace apps with payment integration',
    ],
    highlights: [
      { stat: '2 Platforms', label: 'iOS + Android' },
      { stat: '60fps', label: 'Smooth performance' },
      { stat: '90 days', label: 'Bug warranty' },
    ],
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    tagline: 'Make your product intelligent — with models that learn, predict, and automate.',
    description:
      'From LLM integrations and RAG pipelines to custom-trained classification models and computer vision systems, we build AI that creates measurable business value — not demos that sit in a drawer. We are honest about what AI can and cannot do for your problem.',
    Icon: Brain,
    category: 'technical',
    timeline: '6–16 weeks',
    deliverables: [
      'Trained and evaluated model or LLM integration',
      'Data pipeline and preprocessing scripts',
      'REST or GraphQL API for model inference',
      'Monitoring dashboard (drift, accuracy, latency)',
      'Model card and full technical documentation',
      'Retraining runbook for your team',
    ],
    process: [
      {
        title: 'Problem Framing',
        description:
          'We translate your business problem into a well-defined ML objective with clear success metrics. Most AI projects fail at this stage — we spend the time to get it right.',
      },
      {
        title: 'Data Assessment',
        description:
          'We audit your existing data, identify quality issues and gaps, and design a collection or labelling strategy if needed. No viable data means no viable model — we are honest about this.',
      },
      {
        title: 'Model Development',
        description:
          'Baseline → experimentation → evaluation cycle. We benchmark against simple baselines first and only add complexity when it demonstrably earns its keep.',
      },
      {
        title: 'Integration & API',
        description:
          'The model is wrapped in a production-grade API with proper error handling, rate limiting, caching, and latency optimization for your use case.',
      },
      {
        title: 'Monitoring & Iteration',
        description:
          'Post-deployment monitoring for concept drift and performance decay, with automated alerts and a retraining runbook your team can execute independently.',
      },
    ],
    useCases: [
      'SaaS products adding AI-powered features like recommendations or smart search',
      'Operations teams automating document processing and classification',
      'E-commerce platforms implementing demand forecasting',
      'Healthcare and fintech companies with anomaly detection or risk scoring needs',
    ],
    highlights: [
      { stat: 'LLM + ML', label: 'Full-stack AI' },
      { stat: 'RAG', label: 'Retrieval pipelines' },
      { stat: '< 100ms', label: 'Inference target' },
    ],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    tagline: 'Ship faster, scale confidently, and sleep through the night.',
    description:
      'We design and implement cloud infrastructure that is observable, reproducible, and as automated as possible. Whether you are migrating from on-premises, untangling a complex AWS account, or building from scratch — we get your infrastructure into a shape you can be proud of.',
    Icon: Cloud,
    category: 'technical',
    timeline: '4–12 weeks',
    deliverables: [
      'Infrastructure-as-Code (Terraform or Pulumi)',
      'CI/CD pipelines (GitHub Actions or GitLab CI)',
      'Container orchestration (Kubernetes or ECS)',
      'Centralized logging and APM (Datadog or Grafana)',
      'Alerting runbook and on-call playbook',
      'Cloud cost optimization report',
      'Disaster recovery plan and runbook',
    ],
    process: [
      {
        title: 'Audit & Assessment',
        description:
          'We review your existing infrastructure, identify security gaps, cost inefficiencies, and operational bottlenecks. You receive a written findings report with severity ratings.',
      },
      {
        title: 'Architecture Design',
        description:
          'Target-state architecture designed for your workload, expected scale, and team\'s operational maturity — covering VPC design, service boundaries, and IAM policies.',
      },
      {
        title: 'IaC & Automation',
        description:
          'All infrastructure defined in code. No more ClickOps. Every environment is reproducible, auditable, and deployable in minutes from version control.',
      },
      {
        title: 'CI/CD Implementation',
        description:
          'Automated pipelines from commit to production — with test gates, preview environments, canary deployments, and one-command rollbacks.',
      },
      {
        title: 'Observability & Handoff',
        description:
          'Metrics, logs, traces, and alerts configured across your stack. On-call runbooks written. Your team operates the infrastructure independently from day one.',
      },
    ],
    useCases: [
      'Startups migrating from shared hosting to scalable cloud infrastructure',
      'Growing companies with manual, error-prone deployment processes',
      'Enterprises seeking significant cloud cost reduction',
      'Teams that need 99.9% or higher uptime SLAs',
    ],
    highlights: [
      { stat: 'AWS / GCP', label: 'Multi-cloud' },
      { stat: '100% IaC', label: 'Infra-as-code' },
      { stat: '99.9%', label: 'Uptime target' },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & BI',
    tagline: 'Turn raw data into decisions — with dashboards your team will actually use.',
    description:
      'We build the full analytics stack: pipelines, warehousing, transformation layers, and business intelligence dashboards. The output is not just pretty charts — it is a system that gives your team the right numbers at the right time to make better decisions.',
    Icon: LineChart,
    category: 'technical',
    timeline: '4–10 weeks',
    deliverables: [
      'Data warehouse setup (BigQuery, Snowflake, or Redshift)',
      'ETL and ELT data pipelines',
      'dbt transformation and data modelling layer',
      'BI dashboards (Metabase, Looker, or Superset)',
      'KPI dictionary and data dictionary',
      'Self-serve analytics onboarding and training',
    ],
    process: [
      {
        title: 'Metric Definition',
        description:
          'We run a KPI workshop with your stakeholders. Agreeing on what to measure and how to define it — before touching data — is 80% of the real work.',
      },
      {
        title: 'Data Audit',
        description:
          'We map all your data sources, assess quality and completeness, and identify connection gaps. Many companies discover they already have the data they need — it just is not connected.',
      },
      {
        title: 'Pipeline & Warehouse',
        description:
          'Automated pipelines that move data from source systems to a central warehouse on a reliable, monitored schedule — with alerting on failures.',
      },
      {
        title: 'Transformation & Modelling',
        description:
          'Raw data transformed into clean, business-friendly tables using dbt. Dimensions, facts, and marts structured for fast querying and easy self-service.',
      },
      {
        title: 'Dashboard & Training',
        description:
          'Interactive dashboards built around your actual decisions — not a data dump. We train your team to build their own views and trust the numbers.',
      },
    ],
    useCases: [
      'Companies making key decisions on gut feeling instead of data',
      'Teams with data scattered across multiple silos that cannot be easily joined',
      'E-commerce businesses needing cohort, funnel, and attribution analytics',
      'SaaS companies tracking product usage and revenue metrics in one place',
    ],
    highlights: [
      { stat: 'Real-time', label: 'Or near-real-time' },
      { stat: 'Self-serve', label: 'For every team' },
      { stat: 'Single source', label: 'Of truth' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development & Design',
    tagline: 'Fast, beautiful websites that rank, convert, and scale.',
    description:
      'We build marketing websites, product landing pages, and e-commerce storefronts using Next.js and modern performance practices. Every site we deliver passes Core Web Vitals, is SEO-architected from the ground up, and is connected to a CMS your team can actually use.',
    Icon: Globe,
    category: 'technical',
    timeline: '4–8 weeks',
    deliverables: [
      'Fully responsive website (desktop, tablet, and mobile)',
      'CMS integration (Contentful, Sanity, or WordPress)',
      'Core Web Vitals optimization (green across all metrics)',
      'On-page SEO setup including schema, sitemap, and meta tags',
      'Analytics integration (GA4 or Plausible)',
      'Contact forms, lead capture, and CRM connection',
      '30-day post-launch support',
    ],
    process: [
      {
        title: 'Brand & Goals Alignment',
        description:
          'We review your brand guidelines, competitive landscape, and conversion goals before a single wireframe is drawn.',
      },
      {
        title: 'Design & Prototype',
        description:
          'High-fidelity desktop and mobile designs delivered in Figma. One round of revisions included. Development does not start until design is signed off.',
      },
      {
        title: 'Development',
        description:
          'Next.js with TypeScript, Tailwind CSS, and a headless CMS. Semantic HTML from the first commit — accessibility and SEO are not afterthoughts.',
      },
      {
        title: 'Performance & SEO',
        description:
          'We optimize until Core Web Vitals are green across real devices. Schema markup, sitemap, robots.txt, and OpenGraph tags are configured as standard.',
      },
      {
        title: 'Launch & Handoff',
        description:
          'Domain configuration, CDN setup, and post-launch monitoring. Your team receives a CMS training session so you can manage content independently.',
      },
    ],
    useCases: [
      'Startups needing a professional, credibility-building online presence',
      'SaaS companies with a slow or visually dated marketing site',
      'E-commerce businesses switching platforms or rebuilding for speed',
      'Agencies needing a reliable white-label development partner',
    ],
    highlights: [
      { stat: '< 1s', label: 'LCP target' },
      { stat: '100', label: 'Lighthouse score' },
      { stat: 'SEO-first', label: 'From day one' },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    tagline: 'Know your vulnerabilities before attackers do.',
    description:
      'We deliver security audits, penetration testing, and compliance implementations for web applications, APIs, and cloud infrastructure. Our engineers follow OWASP and NIST frameworks and provide remediation guidance that developers can actually act on.',
    Icon: ShieldCheck,
    category: 'technical',
    timeline: '2–6 weeks',
    deliverables: [
      'Penetration testing report (executive and technical sections)',
      'Vulnerability severity ranking by CVSS score',
      'Prioritized remediation guidance per finding',
      'Compliance gap analysis (GDPR, ISO 27001, or SOC 2)',
      'Security policy and procedure templates',
      'Full re-test after remediation at no additional cost',
    ],
    process: [
      {
        title: 'Scope Definition',
        description:
          'We agree on the attack surface — web app, API, cloud infrastructure, or all three. Rules of engagement and out-of-scope items are documented in writing before testing begins.',
      },
      {
        title: 'Reconnaissance',
        description:
          'Passive and active information gathering using the same techniques real attackers use: OSINT, subdomain enumeration, technology fingerprinting, and certificate transparency logs.',
      },
      {
        title: 'Active Testing',
        description:
          'Exploitation attempts across OWASP Top 10 and cloud-specific attack vectors. All testing is logged, timestamped, and non-destructive by default.',
      },
      {
        title: 'Reporting',
        description:
          'A full report covering executive summary, technical findings, reproduction steps, and prioritized remediation. Every finding is rated by CVSS score with business impact context.',
      },
      {
        title: 'Remediation Support',
        description:
          'We answer developer questions during the fix phase and conduct a full re-test of all findings after remediation is complete — included in the engagement.',
      },
    ],
    useCases: [
      'SaaS companies preparing for enterprise sales and security questionnaires',
      'Startups handling sensitive user data or payment information',
      'Companies pursuing ISO 27001 or SOC 2 Type II certification',
      'Development teams after a major architecture change or new feature launch',
    ],
    highlights: [
      { stat: 'OWASP', label: 'Methodology' },
      { stat: 'CVSS', label: 'Risk scoring' },
      { stat: 'Free re-test', label: 'After remediation' },
    ],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Strategy',
    tagline: 'Clarity on what to build, buy, or fix — from engineers who have shipped it.',
    description:
      'Our consulting engagements are for leadership teams who need an independent technical perspective: architecture reviews, digital transformation planning, technology vendor selection, and fractional CTO engagements for companies without an in-house technical leader.',
    Icon: Wrench,
    category: 'technical',
    timeline: '1–4 weeks per engagement',
    deliverables: [
      'Architecture review report with findings and recommendations',
      'Technology roadmap covering 12 to 24 months',
      'Vendor evaluation matrix with scoring criteria',
      'Org and team structure recommendations',
      'Technical risk register',
      'Up to three facilitated workshop sessions',
    ],
    process: [
      {
        title: 'Stakeholder Interviews',
        description:
          'We interview your technical and business leadership to understand goals, constraints, and the current state of your technology stack — without assumptions.',
      },
      {
        title: 'Codebase & Infrastructure Review',
        description:
          'For existing systems, we conduct a deep technical review covering architecture quality, code health, security posture, and operational readiness.',
      },
      {
        title: 'Analysis & Recommendations',
        description:
          'Findings are synthesized into prioritized recommendations — quick wins versus strategic investments — with clear rationale and trade-offs for each.',
      },
      {
        title: 'Roadmap Workshop',
        description:
          'A facilitated session to validate recommendations with your team and sequence them into a realistic delivery roadmap aligned to your business priorities.',
      },
      {
        title: 'Ongoing Advisory',
        description:
          'Monthly advisory retainers available for teams that want a senior technical sounding board without the cost of a full-time hire.',
      },
    ],
    useCases: [
      'Founders and CEOs who need a fractional CTO',
      'Companies evaluating a major platform rebuild or rewrite',
      'Teams with significant technical debt and no clear prioritization framework',
      'Boards seeking independent assurance on technology investment decisions',
    ],
    highlights: [
      { stat: 'Fractional', label: 'CTO available' },
      { stat: 'Vendor-neutral', label: 'Advice always' },
      { stat: '12–24 mo', label: 'Roadmap horizon' },
    ],
  },
]

export const marketingServices: ServiceDetail[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    tagline: 'Rank for the terms your buyers search — and compound that advantage over time.',
    description:
      'Our SEO methodology is technical-first: we fix what breaks rankings before touching content strategy. From crawl budget optimization and schema markup to Core Web Vitals and authoritative link building, we build a foundation that compounds in value month over month.',
    Icon: Search,
    category: 'marketing',
    timeline: '3–6 months to measurable results',
    deliverables: [
      'Comprehensive technical SEO audit',
      'Keyword research and content gap analysis',
      'On-page optimization (meta tags, headings, schema markup)',
      'Core Web Vitals audit and remediation guidance',
      'Backlink profile audit and link-building campaign',
      'Monthly performance report with ranking movement data',
    ],
    process: [
      {
        title: 'Technical Audit',
        description:
          'We crawl your site and identify indexing issues, redirect chains, duplicate content, page speed problems, and Core Web Vitals failures. This always comes first.',
      },
      {
        title: 'Keyword Research',
        description:
          'We map keywords to commercial intent and buyer journey stage. We specifically find terms your competitors rank for that represent genuine opportunities for you.',
      },
      {
        title: 'On-Page Optimization',
        description:
          'Title tags, meta descriptions, heading structure, internal linking architecture, schema markup — every page optimized to match the search intent behind its target keyword.',
      },
      {
        title: 'Content Strategy',
        description:
          'A prioritized content calendar targeting high-intent keywords, with detailed briefs your team or ours can execute — calibrated to your realistic publishing cadence.',
      },
      {
        title: 'Link Building',
        description:
          'White-hat link acquisition through digital PR, resource link building, and relationship-based outreach to relevant publications. No link farms. No shortcuts.',
      },
    ],
    useCases: [
      'B2B companies with long sales cycles where organic search intent matters',
      'E-commerce stores competing on product-level and category keywords',
      'SaaS companies building organic acquisition as a primary growth channel',
      'Local businesses trying to dominate Google Maps and local pack results',
    ],
    highlights: [
      { stat: '3–6 mo', label: 'To see results' },
      { stat: 'White-hat', label: 'Only ever' },
      { stat: 'Monthly', label: 'Ranking reports' },
    ],
  },
  {
    slug: 'ppc-advertising',
    title: 'PPC & Paid Advertising',
    tagline: 'Every rupee tracked, every campaign optimized for the metric that matters: revenue.',
    description:
      'We manage Google Ads, Meta Ads, and LinkedIn campaigns with a ROAS-first mindset. We do not report on impressions and clicks — we report on leads, demos booked, and revenue attributed to your paid channels with proper multi-touch attribution.',
    Icon: Target,
    category: 'marketing',
    timeline: '4–6 weeks to reach performance targets',
    deliverables: [
      'Campaign architecture and audience segmentation strategy',
      'Ad copy and creative brief for your design team',
      'Full conversion tracking setup (GA4 and platform pixels)',
      'Landing page conversion rate recommendations',
      'Weekly performance reports with actionable commentary',
      'Bid strategy and budget allocation optimization',
      'Monthly strategy review and next-period plan',
    ],
    process: [
      {
        title: 'Account Audit',
        description:
          'For existing accounts, we identify wasted spend, quality score issues, poor audience targeting, and missed opportunities before touching live campaigns.',
      },
      {
        title: 'Strategy & Structure',
        description:
          'Campaign architecture designed around your full customer journey — awareness, consideration, conversion — with appropriate bidding strategies for each stage.',
      },
      {
        title: 'Creative & Copy',
        description:
          'Ad copy and creative briefs written for click-through rate and post-click quality simultaneously. We write in your brand voice, not generic ad speak.',
      },
      {
        title: 'Launch & Optimise',
        description:
          'A/B testing from day one. Bid adjustments, negative keyword refinement, audience exclusions, and placement optimization run on a weekly cadence.',
      },
      {
        title: 'Attribution & Reporting',
        description:
          'Proper conversion tracking across all touchpoints configured from the start. You know exactly which campaigns drive pipeline — not just which ones generate clicks.',
      },
    ],
    useCases: [
      'B2B companies running lead generation and demo booking campaigns',
      'E-commerce stores needing Google Shopping and Meta catalogue ads',
      'SaaS companies running demand generation campaigns at scale',
      'Startups needing fast traction while organic channels are still building',
    ],
    highlights: [
      { stat: 'ROAS-first', label: 'Optimization lens' },
      { stat: 'Google + Meta', label: '+ LinkedIn' },
      { stat: 'Weekly', label: 'Optimizations' },
    ],
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    tagline: 'Content that ranks, educates, and converts — built for your buyer, not your ego.',
    description:
      'We produce SEO-driven content that aligns to every stage of the buyer journey. Long-form guides, case studies, technical tutorials, and video scripts — researched, written, and optimized to drive measurable organic growth and establish genuine authority in your category.',
    Icon: PenLine,
    category: 'marketing',
    timeline: '2–3 weeks to first content, ongoing monthly',
    deliverables: [
      'Content strategy and 90-day editorial calendar',
      'Keyword-to-content mapping and topic prioritization',
      'SEO-optimized blog articles (4–8 per month)',
      'Long-form guides, whitepapers, and gated assets',
      'Customer case studies',
      'Social media distribution copy for each piece',
      'Monthly performance review with ranking and traffic data',
    ],
    process: [
      {
        title: 'Audience & Persona',
        description:
          'We define your ideal reader — their questions, pain points, level of sophistication, and buying triggers — before a single content topic is selected.',
      },
      {
        title: 'Topic & Keyword Research',
        description:
          'Keyword-driven topic selection mapped precisely to search intent and buyer journey stage. Every article has a single target keyword and a clear conversion purpose.',
      },
      {
        title: 'Content Production',
        description:
          'Writers with subject-matter expertise in your industry or niche. We write for depth, accuracy, and reader value first — then optimize for search.',
      },
      {
        title: 'SEO Optimization',
        description:
          'On-page SEO, strategic internal linking, schema markup, image optimization, and structured formatting applied to every piece before it is published.',
      },
      {
        title: 'Distribution & Amplification',
        description:
          'Content distributed across owned channels, repurposed for social formats, and submitted to relevant industry publications where appropriate.',
      },
    ],
    useCases: [
      'B2B companies building thought leadership in a competitive or emerging category',
      'SaaS products with educational, research-heavy buyer journeys',
      'Consulting firms that compete on demonstrated expertise and trust',
      'E-commerce brands targeting informational search queries that feed purchase intent',
    ],
    highlights: [
      { stat: 'SEO-driven', label: 'Every single piece' },
      { stat: '2–3 wks', label: 'To first content' },
      { stat: '4–8 posts', label: 'Per month' },
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    tagline: 'Build an audience that compounds — not a following that forgets you.',
    description:
      'We develop and execute platform-specific social strategies for LinkedIn, Instagram, Twitter/X, and YouTube. Our focus is engagement quality, sustained brand authority, and turning social presence into measurable pipeline — not vanity metrics.',
    Icon: Users2,
    category: 'marketing',
    timeline: '30 days to first content, 90 days to see traction',
    deliverables: [
      'Platform strategy with rationale for channel selection',
      'Content calendar with 30 or more posts per month',
      'Branded content templates for your team',
      'Community management with responses within 24 hours',
      'Influencer and partnership identification list',
      'Monthly analytics report tied to business metrics',
    ],
    process: [
      {
        title: 'Audit & Strategy',
        description:
          'We audit your existing presence across platforms and define a strategy: which channels your buyers actually use, which content formats perform, and what success looks like in concrete terms.',
      },
      {
        title: 'Brand Voice & Playbook',
        description:
          'A documented brand voice guide for social — tone, style, content pillars, and visual language — so every post feels consistent whether published by us or your team.',
      },
      {
        title: 'Content Production',
        description:
          'A rolling 30-day content calendar produced and scheduled in advance. Written copy, graphic briefs, and video scripts delivered together.',
      },
      {
        title: 'Community Management',
        description:
          'Responding to comments, DMs, and mentions within 24 hours. Proactive engagement in relevant conversations, communities, and trending topics in your industry.',
      },
      {
        title: 'Analytics & Optimisation',
        description:
          'Monthly performance review against engagement, reach, follower quality, and link click metrics. Content strategy refined based on what the data actually shows.',
      },
    ],
    useCases: [
      'B2B brands building LinkedIn presence and executive thought leadership',
      'Consumer brands needing Instagram and short-form video content at scale',
      'Founders building a personal brand alongside their company brand',
      'E-commerce brands leveraging social proof, UGC, and community',
    ],
    highlights: [
      { stat: '30+ posts', label: 'Every month' },
      { stat: '24h', label: 'Response time' },
      { stat: '4 platforms', label: 'Managed' },
    ],
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy & Identity',
    tagline: "A brand is what people say when you're not in the room. Make it worth saying.",
    description:
      'We develop brand positioning, visual identity systems, and messaging frameworks for companies that want to be remembered. From early-stage startups finding their voice to established companies rebranding for a new market or buyer segment.',
    Icon: Megaphone,
    category: 'marketing',
    timeline: '6–10 weeks',
    deliverables: [
      'Brand positioning document with differentiation rationale',
      'Target audience profiles and empathy maps',
      'Messaging hierarchy (tagline, value propositions, and boilerplate)',
      'Visual identity system (logo, colour, typography, and iconography)',
      'Comprehensive brand guidelines document',
      'Tone of voice playbook with examples',
      'Core asset kit (email signature, social profiles, and letterhead)',
    ],
    process: [
      {
        title: 'Discovery & Research',
        description:
          'Stakeholder interviews, competitor brand audit, and customer research to understand how you are currently perceived versus how you want and need to be perceived.',
      },
      {
        title: 'Positioning Workshop',
        description:
          'A facilitated session to align leadership on brand positioning: who you are for, what you do, how you are different, and why that difference matters to your buyers.',
      },
      {
        title: 'Messaging Framework',
        description:
          'We develop your brand narrative — from tagline to elevator pitch to detailed value propositions — tested for resonance with actual members of your target audience.',
      },
      {
        title: 'Visual Identity Design',
        description:
          'Logo system, colour palette, typography, iconography, and illustration style. Multiple concepts presented, one developed to a complete, production-ready system.',
      },
      {
        title: 'Guidelines & Rollout',
        description:
          'A comprehensive brand guidelines document and starter asset kit for immediate use. We support rollout across your website, social profiles, and key collateral.',
      },
    ],
    useCases: [
      'Startups launching and needing a brand that punches above their current stage',
      'Companies rebranding after a pivot, acquisition, or market repositioning',
      'Established businesses whose visual identity has fallen behind their quality',
      'Professional services firms differentiating on personality and positioning',
    ],
    highlights: [
      { stat: '6–10 wks', label: 'Full identity' },
      { stat: 'Full rights', label: 'All assets yours' },
      { stat: 'Full system', label: 'Not just a logo' },
    ],
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing & CRM',
    tagline: 'Nurture leads into customers with sequences that feel personal at scale.',
    description:
      'We design, build, and optimize email marketing programs and CRM automation workflows. From welcome sequences and drip campaigns to behavioural triggers and re-engagement flows — we make email a revenue channel, not just a newsletter that goes out on the first of the month.',
    Icon: Mail,
    category: 'marketing',
    timeline: '3–4 weeks to first send, ongoing monthly',
    deliverables: [
      'Email strategy and list segmentation plan',
      'Welcome and onboarding sequence',
      'Multi-touch nurture drip campaigns',
      'Behavioural trigger and lifecycle emails',
      'Re-engagement campaign for dormant subscribers',
      'A/B test calendar and optimization log',
      'Monthly performance report (open rate, CTR, and revenue)',
    ],
    process: [
      {
        title: 'Audit & Platform Setup',
        description:
          'We audit your existing list health, deliverability infrastructure (SPF, DKIM, DMARC), and CRM configuration before designing or building anything new.',
      },
      {
        title: 'Segmentation Strategy',
        description:
          'Your list is segmented by lifecycle stage, engagement behaviour, product interest, and intent signals. The right email to the right person at the right time.',
      },
      {
        title: 'Sequence Development',
        description:
          'Welcome, nurture, and conversion sequences written, designed, and built directly in your ESP — Klaviyo, HubSpot, Mailchimp, or similar.',
      },
      {
        title: 'Automation & Triggers',
        description:
          'Behavioural triggers set up based on site activity, email engagement events, and CRM milestones. Automations that generate revenue while your team is focused elsewhere.',
      },
      {
        title: 'Testing & Optimisation',
        description:
          'Systematic A/B testing of subject lines, send times, content formats, and CTAs. Monthly reporting tied to revenue and pipeline metrics, not just open rates.',
      },
    ],
    useCases: [
      'E-commerce brands needing abandoned cart, browse abandonment, and post-purchase sequences',
      'SaaS products with trial-to-paid conversion challenges',
      'B2B companies with long sales cycles that need structured lead nurturing',
      'Content businesses and newsletters monetizing their email list',
    ],
    highlights: [
      { stat: '3–4 wks', label: 'To first send' },
      { stat: 'Automated', label: 'Revenue flows' },
      { stat: 'A/B tested', label: 'Every sequence' },
    ],
  },
  {
    slug: 'market-research',
    title: 'Market Research & Intelligence',
    tagline: 'Know your market before your competitors do.',
    description:
      'We deliver structured market research — competitive intelligence, TAM analysis, customer interviews, and industry trend reports — that gives leadership teams the confidence to make high-stakes decisions with evidence rather than assumption.',
    Icon: LineChart,
    category: 'marketing',
    timeline: '2–6 weeks',
    deliverables: [
      'Market sizing report (TAM, SAM, and SOM)',
      'Competitive landscape analysis with positioning map',
      'Customer interview synthesis (minimum 10 interviews)',
      'Buyer persona profiles with validated pain points',
      'Opportunity and threat assessment matrix',
      'Strategic recommendations with supporting evidence',
    ],
    process: [
      {
        title: 'Research Design',
        description:
          'We define the research questions, methodology, and sources before starting. What decisions will this research inform? We work backwards from that answer.',
      },
      {
        title: 'Secondary Research',
        description:
          'Desk research across industry reports, public filings, news coverage, forums, and review sites to map competitive dynamics and market structure.',
      },
      {
        title: 'Primary Research',
        description:
          'Customer and prospect interviews conducted by experienced researchers using discussion guides designed to surface genuine insights, not just confirmation of existing views.',
      },
      {
        title: 'Analysis & Synthesis',
        description:
          'Patterns across data sources synthesized into a coherent picture of the market — including the uncomfortable findings that challenge existing assumptions.',
      },
      {
        title: 'Report & Briefing',
        description:
          'A written report and a live executive briefing session. We do not just hand over a PDF — we walk your team through the implications and specific recommendations.',
      },
    ],
    useCases: [
      'Founders evaluating a new market or adjacent product vertical',
      'Companies preparing for fundraising and needing investor-grade market data',
      'Established businesses assessing new competitive threats or category disruption',
      'Teams before a major product launch, pricing change, or geographic expansion',
    ],
    highlights: [
      { stat: 'Primary +', label: 'Secondary sources' },
      { stat: '10+', label: 'Customer interviews' },
      { stat: '2–6 wks', label: 'Turnaround' },
    ],
  },
  {
    slug: 'digital-analytics',
    title: 'Digital Analytics & Reporting',
    tagline: 'Stop measuring everything. Start measuring what actually drives decisions.',
    description:
      'We implement and optimize analytics infrastructure — GA4, Mixpanel, Amplitude, and GTM — ensuring your data is accurate, your attribution reflects reality, and your team can answer business questions without needing a data analyst for every report.',
    Icon: BarChart3,
    category: 'marketing',
    timeline: '3–5 weeks',
    deliverables: [
      'Analytics audit report with data quality findings',
      'GA4 or Mixpanel setup with complete event taxonomy',
      'Google Tag Manager configuration and documentation',
      'Conversion tracking across all paid and owned channels',
      'Multi-touch attribution model setup',
      'Executive and operational dashboards in Looker Studio or Databox',
      'KPI measurement framework document',
    ],
    process: [
      {
        title: 'Measurement Audit',
        description:
          'We audit your current analytics for data quality issues, missing events, duplicated sessions, incorrect attribution, and reporting gaps before building anything new.',
      },
      {
        title: 'Measurement Plan',
        description:
          'A documented plan of every event, property, and metric to be tracked — agreed with your team before a single tag is deployed.',
      },
      {
        title: 'Implementation',
        description:
          'GA4 events, GTM tags, e-commerce tracking, and cross-domain or cross-device tracking configured, tested, and QA\'d against the agreed measurement plan.',
      },
      {
        title: 'Attribution Setup',
        description:
          'Multi-touch or data-driven attribution configured across all channels so you know which marketing investments actually drive revenue — not just last-click conversions.',
      },
      {
        title: 'Dashboard & Training',
        description:
          'Executive and operational dashboards built around your actual reporting needs. A training session so your team can self-serve reports and trust what they see.',
      },
    ],
    useCases: [
      'Marketing teams making budget decisions on inaccurate or incomplete data',
      'E-commerce stores with broken or missing conversion tracking',
      'SaaS companies needing product analytics and revenue funnel visibility',
      'Companies migrating from Universal Analytics to GA4',
    ],
    highlights: [
      { stat: 'GA4 + GTM', label: 'Full setup' },
      { stat: 'Multi-touch', label: 'Attribution' },
      { stat: 'Self-serve', label: 'Dashboards' },
    ],
  },
]
