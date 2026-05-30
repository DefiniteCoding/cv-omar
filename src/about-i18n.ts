export type AboutLang = 'ar' | 'en'

const omAbout = {
  slug: 'about',
  altSlug: 'about',
  seo: {
    title: 'Omar Mostafa Mohaseb | Product Manager - BaaS & Embedded Finance',
    description: 'Product Manager with 8+ years in fintech. Shipped BaaS platforms at NymCard, SNBL at Compound, Partners Portal 2.0 at Tamara, and integrated 100+ merchants at Mondia Pay.',
  },
  heading: 'Omar Mostafa Mohaseb',
  manifesto: 'Fintech products are never done — they\'re in production, handling real money, for real people. Ship with that weight in mind.',
  subtitle: 'Product Manager · BaaS & Embedded Finance · Dubai, UAE',
  location: 'Dubai, UAE',
  lastUpdated: 'May 2026',
  bio: [
    'Egyptian product manager based in Dubai with 8+ years building fintech products across the MENA region. Specializes in Banking as a Service (BaaS), card programs, money movement, and developer-facing products for embedded finance.',
    'Currently leading product for Nym4Business (N4B) and Lynq at NymCard — white-label BaaS platforms used by financial institutions across MENA. Previously shipped Partners Portal 2.0 at Tamara (BNPL), launched a Save Now Buy Later product at Compound, and integrated 100+ global merchants onto Mondia Pay\'s carrier billing platform.',
    'Uses AI tools (Claude Code, Cursor, Windsurf, Figma MCP) to prototype BaaS features, generate API specs, and ship faster. Built this interactive portfolio entirely with Claude Code.',
  ],
  seeking: '',
  roles: [],
  timelineHeading: 'Experience',
  timeline: [
    { period: 'Jun 2025–Now', role: 'Product Manager – Corporate BaaS', company: 'NymCard', desc: 'Leading N4B and Lynq — white-label BaaS platforms for MENA financial institutions' },
    { period: 'Mar–Dec 2025', role: 'Product Lead & Consultant', company: 'Compound', desc: 'SNBL product, customer app, checkout widget, admin portal, and API docs' },
    { period: 'Jan 2024–Jan 2025', role: 'Product Manager', company: 'Tamara', desc: 'Partners Portal 2.0 — -30% support queries, +25% satisfaction, 15+ features shipped' },
    { period: 'Oct 2022–Jan 2024', role: 'Integration Delivery Manager', company: 'Tamara', desc: 'API portal revamp, -25% integration time, 100M+ SAR GMV enabled' },
    { period: 'Nov 2020–Sep 2022', role: 'Senior Integration Operations Engineer', company: 'Mondia Pay', desc: '100+ merchant integrations (Spotify, OSN, Tinder, Anghami), API documentation revamp' },
    { period: 'Feb 2018–Nov 2020', role: 'Technical Support Engineer', company: 'Dell Technologies', desc: 'Enterprise B2B technical support across servers, storage, and networking' },
  ],
  projectsHeading: 'Key Deliverables',
  projects: [
    { name: 'Nym4Business (N4B) & Lynq', desc: 'White-label Corporate BaaS platform with card programs, Visa Direct, and KYB/KYC onboarding', href: '/tamara-partners-portal-2' },
    { name: 'Compound SNBL', desc: 'Save Now, Buy Later product — customer app, checkout widget, admin portal, API docs', href: '/compound-save-now-buy-later' },
    { name: 'Tamara Partners Portal 2.0', desc: 'Merchant-facing portal — -30% support queries, +25% satisfaction, 15+ features', href: '/tamara-partners-portal-2' },
    { name: 'Tamara API Reference Portal', desc: 'Developer docs revamp — -25% integration GTM time, 100M+ SAR GMV enabled', href: '/tamara-partners-portal-2' },
    { name: 'Mondia Pay API Documentation', desc: '100+ merchant integrations across MENA, Europe, and Africa', href: '/tamara-partners-portal-2' },
  ],
  certificationsHeading: 'Certifications',
  certifications: [] as { org: string; items: string[] }[],
  educationHeading: 'Education',
  education: [
    'Loughborough University — BSc, Electrical and Communications Engineering (2012–2017)',
  ],
  pressHeading: 'Press',
  press: [] as { title: string; publisher: string; date: string; href: string }[],
  communityHeading: 'Connect',
  community: [
    { title: 'LinkedIn — Omar Mostafa Mohaseb', platform: 'LinkedIn', href: 'https://www.linkedin.com/in/omar-mostafa-mohaseb' },
  ],
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      q: 'Who is Omar Mostafa Mohaseb?',
      a: 'Omar Mostafa Mohaseb is an Egyptian Product Manager based in Dubai, UAE, with 8+ years of experience building fintech products across the MENA region. He specializes in Banking as a Service (BaaS), card programs, embedded finance, and developer-facing products. He is currently Product Manager for Corporate BaaS at NymCard, leading the Nym4Business (N4B) and Lynq platforms. Previously he shipped Partners Portal 2.0 at Tamara (BNPL), launched a Save Now Buy Later product at Compound, and integrated 100+ global merchants (Spotify, OSN, Tinder, Anghami) onto Mondia Pay\'s carrier billing platform. He holds a BSc in Electrical and Communications Engineering from Loughborough University (UK). He uses AI tools including Claude Code, Cursor, Windsurf, and Figma MCP to prototype BaaS features and ship faster.',
    },
    {
      q: 'What has Omar built?',
      a: 'Omar has shipped five significant fintech products. At NymCard (current), he leads Nym4Business (N4B) — a white-label Corporate BaaS platform with multi-tier corporate hierarchy, card issuance, expense management, KYB/IDV onboarding, and Visa Direct cross-border payments — and Lynq (getlynq.ae), the direct-to-SME variant. At Compound, he defined and launched a Save Now Buy Later (SNBL) product including savings plans, eligibility rules, customer mobile app, embeddable checkout widget, admin backoffice portal, and API documentation. At Tamara as Product Manager, he launched Partners Portal 2.0 (reducing merchant support by 30%, lifting satisfaction by 25%, delivering 15+ features). At Tamara as Integration Delivery Manager, he revamped the API developer reference portal (cutting integration GTM by 25%, enabling 100M+ SAR GMV) and deployed e-commerce plugins for MENA merchants. At Mondia Pay, he integrated 100+ global merchants onto their carrier billing platform and rewrote their API documentation.',
    },
    {
      q: 'What is Omar\'s area of expertise?',
      a: 'Omar specializes in Banking as a Service (BaaS), card programs, money movement, and embedded finance. His core domain expertise covers: card issuing and corporate card programs, KYB/KYC/IDV onboarding flows (Onfido, PRM, WorldCheck), cross-border payments via Visa Direct, RBAC and approval workflows, FX management and funds storage, CBUAE compliance, and payment lifecycle management. On the technical side, he works fluently with REST APIs, JSON, SQL, Postman, Kibana, and developer documentation. He also uses AI tools (Claude Code, Cursor, Windsurf, Figma MCP) to prototype features and accelerate delivery.',
    },
  ],
  connectHeading: 'Connect',
  email: 'omarmostafapm@gmail.com',
}

export const aboutContent = {
  ar: omAbout,
  en: omAbout,
} as const
