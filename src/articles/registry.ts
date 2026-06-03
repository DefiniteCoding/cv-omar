import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[] | Record<string, string>>>
  discussionUrl?: string
  relatedLink?: string
  communityUrl?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slugs: { ar: string; en: string }
  titles: { ar: string; en: string }
  seo: { ar: ArticleSeo; en: ArticleSeo }
  sectionLabels: { ar: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'ar' | 'en' }> }>
  /** x-default hreflang slug (defaults to ES slug) */
  xDefaultSlug?: string
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'compound',
    slugs: { ar: 'compound-snbl', en: 'compound-save-now-buy-later' },
    titles: { ar: 'Compound SNBL', en: 'Compound SNBL' },
    seo: {
      ar: {
        title: 'Compound SNBL: Building the Product Behind Save Now, Buy Later | Omar Mostafa',
        description: 'Case study: how I led product execution at Compound — SNBL consumer journey, embeddable merchant widget as distribution strategy, and AI-assisted mobile app prototyping.',
      },
      en: {
        title: 'Compound SNBL: Building the Product Behind Save Now, Buy Later | Omar Mostafa',
        description: 'Case study: how I led product execution at Compound — SNBL consumer journey, embeddable merchant widget as distribution strategy, and AI-assisted mobile app prototyping.',
      },
    },
    sectionLabels: {
      ar: {
        'the-thesis': 'The Thesis',
        'widget-distribution': 'Widget Distribution',
        'consumer-journey': 'Consumer Journey',
        'merchant-journey': 'Merchant Journey',
        'ai-prototyping': 'AI Prototyping',
        'delivered': 'Delivered',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
      en: {
        'the-thesis': 'The Thesis',
        'widget-distribution': 'Widget Distribution',
        'consumer-journey': 'Consumer Journey',
        'merchant-journey': 'Merchant Journey',
        'ai-prototyping': 'AI Prototyping',
        'delivered': 'Delivered',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/compound-i18n.ts',
    xDefaultSlug: 'compound-save-now-buy-later',
    component: () => import('../Compound.tsx'),
    seoMeta: {
      datePublished: '2025-03-01',
      dateModified: '2026-05-30',
      keywords: ['Save Now Buy Later', 'SNBL', 'Compound fintech', 'embedded widget', 'merchant platform', 'consumer finance', 'MENA fintech', 'BNPL alternative', 'savings product', 'two-sided marketplace', 'AI prototyping', 'mobile app prototype', 'Claude Code PM', 'fintech product management', 'UAE fintech'],
      articleType: 'TechArticle',
      articleTags: 'SNBL,Save Now Buy Later,Compound,embedded widget,MENA fintech,AI prototyping,consumer finance',
      images: ['https://omarmostafa.org/compound/og-compound.webp'],
      about: [
        { '@type': 'Organization', name: 'Compound', url: 'https://www.getcompound.co' },
        { '@type': 'Thing', name: 'Save Now Buy Later' },
        { '@type': 'Thing', name: 'Embedded Finance', url: 'https://en.wikipedia.org/wiki/Embedded_finance' },
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai', applicationCategory: 'AI Development Tool' },
      ],
      extra: { proficiencyLevel: 'Expert' },
      citation: [
        { '@type': 'WebPage', name: 'Compound — Save now. Shop smarter.', url: 'https://www.getcompound.co' },
        { '@type': 'NewsArticle', name: 'Save Now, Buy Later Fintech Compound Launches — The Fintech Times', url: 'https://thefintechtimes.com/save-now-buy-later-fintech-compound-launches-to-help-consumers-save-for-purchases/' },
      ],
      mentions: [
        { '@type': 'Organization', name: 'Compound', url: 'https://www.getcompound.co' },
        { '@type': 'Thing', name: 'Save Now Buy Later' },
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai' },
      ],
    },
  },
  {
    id: 'tamara',
    slugs: { ar: 'tamara-partners-portal', en: 'tamara-partners-portal-2' },
    titles: { ar: 'Tamara Partners Portal 2.0', en: 'Tamara Partners Portal 2.0' },
    seo: {
      ar: {
        title: 'Tamara Partners Portal 2.0: From Navigation Sprawl to Merchant Self-Service | Omar Mostafa',
        description: 'Case study: how I led product on Tamara\'s Partners Portal 2.0 — delivering Global Search, a GuideSail-powered onboarding tour, and 15+ merchant features that cut support queries 30% and lifted satisfaction 25%.',
      },
      en: {
        title: 'Tamara Partners Portal 2.0: From Navigation Sprawl to Merchant Self-Service | Omar Mostafa',
        description: 'Case study: how I led product on Tamara\'s Partners Portal 2.0 — delivering Global Search, a GuideSail-powered onboarding tour, and 15+ merchant features that cut support queries 30% and lifted satisfaction 25%.',
      },
    },
    sectionLabels: {
      ar: {
        'the-problem': 'The Problem',
        'vision': 'Vision',
        'global-search': 'Global Search',
        'product-tour': 'Product Tour',
        'email-savings': 'Email Savings',
        'feature-delivery': 'Feature Delivery',
        'outcomes': 'Outcomes',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
      en: {
        'the-problem': 'The Problem',
        'vision': 'Vision',
        'global-search': 'Global Search',
        'product-tour': 'Product Tour',
        'email-savings': 'Email Savings',
        'feature-delivery': 'Feature Delivery',
        'outcomes': 'Outcomes',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/tamara-i18n.ts',
    xDefaultSlug: 'tamara-partners-portal-2',
    component: () => import('../Tamara.tsx'),
    seoMeta: {
      datePublished: '2024-01-01',
      dateModified: '2026-05-30',
      keywords: ['merchant portal', 'product tour', 'global search', 'BNPL merchant platform', 'Tamara', 'GuideSail', 'fintech product management', 'B2B portal', 'merchant self-service', 'onboarding UX', 'digital adoption', 'partner portal', 'MENA fintech', 'merchant experience'],
      articleType: 'TechArticle',
      articleTags: 'merchant portal,product tour,global search,BNPL,Tamara,GuideSail,fintech,B2B,product management',
      images: ['https://omarmostafa.org/tamara/og-tamara-portal.webp'],
      about: [
        { '@type': 'Organization', name: 'Tamara', url: 'https://tamara.co' },
        { '@type': 'Thing', name: 'Buy Now Pay Later', url: 'https://en.wikipedia.org/wiki/Buy_now,_pay_later' },
        { '@type': 'Thing', name: 'Merchant Portal' },
        { '@type': 'SoftwareApplication', name: 'GuideSail', url: 'https://getguidesail.com' },
      ],
      extra: { proficiencyLevel: 'Expert' },
      citation: [
        { '@type': 'WebPage', name: 'Tamara — Buy Now Pay Later MENA', url: 'https://tamara.co' },
        { '@type': 'WebPage', name: 'GuideSail — Product Tour Platform', url: 'https://getguidesail.com' },
      ],
      mentions: [
        { '@type': 'Organization', name: 'Tamara', url: 'https://tamara.co' },
        { '@type': 'SoftwareApplication', name: 'GuideSail', url: 'https://getguidesail.com' },
        { '@type': 'Thing', name: 'Buy Now Pay Later' },
      ],
    },
  },
  {
    id: 'portfolio',
    slugs: { ar: 'portfolio-ai-pm', en: 'ai-assisted-pm-portfolio' },
    titles: { ar: 'This Portfolio', en: 'This Portfolio' },
    seo: {
      ar: {
        title: 'Why I Built an AI Portfolio Instead of Updating My LinkedIn | Omar Mostafa',
        description: 'Case study: why LinkedIn wasn\'t enough — and how I built an interactive portfolio with an AI chatbot, voice mode, agentic RAG, and 71 automated evals in 3 days using Claude Code.',
      },
      en: {
        title: 'Why I Built an AI Portfolio Instead of Updating My LinkedIn | Omar Mostafa',
        description: 'Case study: why LinkedIn wasn\'t enough — and how I built an interactive portfolio with an AI chatbot, voice mode, agentic RAG, and 71 automated evals in 3 days using Claude Code.',
      },
    },
    sectionLabels: {
      ar: {
        'linkedin-gaps': 'LinkedIn Gaps',
        'the-build': 'The Build',
        'the-system': 'The System',
        'what-it-demonstrates': 'What It Demonstrates',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
      en: {
        'linkedin-gaps': 'LinkedIn Gaps',
        'the-build': 'The Build',
        'the-system': 'The System',
        'what-it-demonstrates': 'What It Demonstrates',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/portfolio-i18n.ts',
    xDefaultSlug: 'ai-assisted-pm-portfolio',
    component: () => import('../Portfolio.tsx'),
    seoMeta: {
      datePublished: '2026-05-01',
      dateModified: '2026-05-30',
      keywords: ['AI portfolio', 'Claude Code', 'AI-assisted development', 'PM portfolio', 'LLMOps', 'RAG', 'voice mode', 'fintech PM portfolio', 'AI product manager', 'interactive portfolio', 'AI chatbot portfolio', 'technical PM'],
      articleType: 'TechArticle',
      articleTags: 'AI portfolio,Claude Code,AI-assisted development,LLMOps,RAG,voice mode,fintech PM',
      images: ['https://omarmostafa.org/portfolio/og-portfolio.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai', applicationCategory: 'AI Development Tool' },
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com', applicationCategory: 'LLM Observability' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com', applicationCategory: 'Database' },
        { '@type': 'Thing', name: 'LLMOps' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
      ],
      extra: { proficiencyLevel: 'Expert' },
      citation: [
        { '@type': 'WebPage', name: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        { '@type': 'TechArticle', name: 'Anthropic Tool Use Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
        { '@type': 'TechArticle', name: 'Langfuse — Open Source LLM Engineering Platform', url: 'https://langfuse.com/docs' },
        { '@type': 'TechArticle', name: 'Supabase pgvector — Vector Embeddings Documentation', url: 'https://supabase.com/docs/guides/ai/vector-embeddings' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai' },
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com' },
      ],
    },
  },
  {
    id: 'chatbot',
    slugs: { ar: 'self-healing-chatbot', en: 'self-healing-chatbot' },
    titles: { ar: 'The Self-Healing Chatbot', en: 'The Self-Healing Chatbot' },
    seo: {
      ar: {
        title: 'The Self-Healing Chatbot: From Widget to Production LLMOps | Omar Mostafa',
        description: 'Case study: production LLMOps with agentic observability, 6-layer defense, 71 evals, voice mode, and a closed-loop that generates tests from real failures.',
      },
      en: {
        title: 'The Self-Healing Chatbot: From Widget to Production LLMOps | Omar Mostafa',
        description: 'Case study: production LLMOps with agentic observability, 6-layer defense, 71 evals, voice mode, and a closed-loop that generates tests from real failures.',
      },
    },
    sectionLabels: {
      ar: {
        'genesis': 'Genesis',
        'evolution': 'Evolution',
        'architecture': 'Architecture',
        'agentic-observability': 'Agentic Observability',
        'how-it-was-built': 'How It Was Built',
        'rag': 'Agentic RAG',
        'defense': '6-Layer Defense',
        'evals': 'The 71 Tests',
        'closed-loop': 'Closed Loop',
        'cost': 'Real Cost',
        'voice': 'Voice Mode',
        'lessons': 'Lessons',
      },
      en: {
        'genesis': 'Genesis',
        'evolution': 'Evolution',
        'architecture': 'Architecture',
        'agentic-observability': 'Agentic Observability',
        'how-it-was-built': 'How It Was Built',
        'rag': 'Agentic RAG',
        'defense': '6-Layer Defense',
        'evals': 'The 71 Tests',
        'closed-loop': 'Closed Loop',
        'cost': 'Real Cost',
        'voice': 'Voice Mode',
        'lessons': 'Lessons',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/chatbot-i18n.ts',
    xDefaultSlug: 'self-healing-chatbot',
    component: () => import('../SelfHealingChatbot.tsx'),
    seoMeta: {
      datePublished: '2026-03-11',
      dateModified: '2026-06-03',
      keywords: ['LLMOps', 'self-healing chatbot', 'agentic RAG', 'jailbreak defense', 'Langfuse', 'evals', 'closed-loop', 'prompt injection', 'voice mode', 'OpenAI Realtime', 'pgvector', 'CI gate', 'trace-to-eval', 'AI portfolio'],
      articleType: 'TechArticle',
      articleTags: 'LLMOps,self-healing chatbot,agentic RAG,jailbreak defense,Langfuse,evals,closed-loop,voice mode',
      images: ['https://omarmostafa.org/chatbot/og-self-healing-chatbot.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com', applicationCategory: 'LLM Observability' },
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai', applicationCategory: 'AI Development Tool' },
        { '@type': 'Thing', name: 'LLMOps' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', name: 'Prompt Injection', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
      ],
      extra: { proficiencyLevel: 'Expert' },
      citation: [
        { '@type': 'TechArticle', name: 'Langfuse — Open Source LLM Engineering Platform', url: 'https://langfuse.com/docs' },
        { '@type': 'WebPage', name: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        { '@type': 'TechArticle', name: 'OpenAI Realtime API Documentation', url: 'https://platform.openai.com/docs/guides/realtime' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com' },
        { '@type': 'Thing', name: 'LLMOps' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
      ],
    },
  },
  {
    id: 'n8n',
    slugs: { ar: 'n8n-para-pms', en: 'n8n-for-pms' },
    titles: { ar: 'n8n para PMs', en: 'n8n for PMs' },
    seo: {
      ar: {
        title: 'n8n para Product Managers: Automatización sin código | Omar Mostafa',
        description: 'Guía práctica de n8n para PMs: automatiza flujos sin código, conecta herramientas, y construye workflows de IA. Contenido creado por Santiago.',
      },
      en: {
        title: 'n8n for Product Managers: No-Code Automation Guide | Omar Mostafa',
        description: 'Practical n8n guide for PMs: automate workflows without code, connect tools, and build AI pipelines. Content originally created by Santiago.',
      },
    },
    sectionLabels: {
      ar: { 'intro': 'Intro', 'workflows': 'Workflows', 'ai': 'AI', 'lessons': 'Lessons' },
      en: { 'intro': 'Intro', 'workflows': 'Workflows', 'ai': 'AI', 'lessons': 'Lessons' },
    },
    type: 'collab',
    ragReady: false,
    xDefaultSlug: 'n8n-for-pms',
    component: () => import('../N8nForPMs.tsx'),
  },
  {
    id: 'nymcard',
    slugs: { ar: 'nymcard-baas', en: 'nymcard-corporate-baas' },
    titles: { ar: 'NymCard BaaS', en: 'NymCard BaaS' },
    seo: {
      ar: {
        title: 'Building a Financial OS for SMEs: Inside N4B and Lynq | Omar Mostafa',
        description: 'Case study: how I led product on Nym4Business (N4B), a white-label Banking-as-a-Service platform for SMEs in MENA, and the PM decisions behind staged KYB, approval rules, and B2B2C design.',
      },
      en: {
        title: 'Building a Financial OS for SMEs: Inside N4B and Lynq | Omar Mostafa',
        description: 'Case study: how I led product on Nym4Business (N4B), a white-label Banking-as-a-Service platform for SMEs in MENA, and the PM decisions behind staged KYB, approval rules, and B2B2C design.',
      },
    },
    sectionLabels: {
      ar: {
        'the-problem': 'The Problem',
        'what-n4b-is': 'What N4B Is',
        'my-role': 'My Role',
        'staged-kyb': 'Staged KYB',
        'approval-engine': 'Approval Engine',
        'two-customers': 'Two Customers',
        'lynq': 'Lynq',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
      en: {
        'the-problem': 'The Problem',
        'what-n4b-is': 'What N4B Is',
        'my-role': 'My Role',
        'staged-kyb': 'Staged KYB',
        'approval-engine': 'Approval Engine',
        'two-customers': 'Two Customers',
        'lynq': 'Lynq',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/nymcard-i18n.ts',
    xDefaultSlug: 'nymcard-corporate-baas',
    component: () => import('../NymCard.tsx'),
    seoMeta: {
      datePublished: '2026-06-01',
      dateModified: '2026-05-30',
      keywords: ['banking as a service', 'BaaS', 'SME financial OS', 'NymCard', 'Lynq', 'Mawarid Finance', 'KYB onboarding', 'embedded finance', 'MENA fintech', 'card issuing', 'corporate cards', 'approval workflows', 'RBAC', 'B2B2C product', 'white-label banking', 'fintech product management', 'UAE fintech'],
      articleType: 'TechArticle',
      articleTags: 'BaaS,fintech,SME,NymCard,Lynq,KYB,embedded finance,MENA,card issuing,approval workflows',
      images: ['https://omarmostafa.org/nymcard/og-nymcard.webp'],
      about: [
        { '@type': 'Thing', name: 'Banking as a Service', url: 'https://en.wikipedia.org/wiki/Banking_as_a_service' },
        { '@type': 'Thing', name: 'Embedded Finance', url: 'https://en.wikipedia.org/wiki/Embedded_finance' },
        { '@type': 'Organization', name: 'NymCard', url: 'https://nymcard.com' },
        { '@type': 'Organization', name: 'Mawarid Finance', url: 'https://mawaridfinance.ae' },
        { '@type': 'Thing', name: 'Know Your Business (KYB)' },
        { '@type': 'Thing', name: 'Card Issuing' },
      ],
      extra: { proficiencyLevel: 'Expert' },
      citation: [
        { '@type': 'WebPage', name: 'NymCard — Banking-as-a-Service Platform', url: 'https://nymcard.com' },
        { '@type': 'WebPage', name: 'Lynq — Corporate Finance Platform', url: 'https://lynq.ae' },
        { '@type': 'WebPage', name: 'Banking as a Service — Wikipedia', url: 'https://en.wikipedia.org/wiki/Banking_as_a_service' },
      ],
      mentions: [
        { '@type': 'Organization', name: 'NymCard', url: 'https://nymcard.com' },
        { '@type': 'Organization', name: 'Mawarid Finance', url: 'https://mawaridfinance.ae' },
        { '@type': 'Thing', name: 'Banking as a Service', url: 'https://en.wikipedia.org/wiki/Banking_as_a_service' },
        { '@type': 'Thing', name: 'Know Your Business (KYB)' },
      ],
    },
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/ar',
    '/ar': '/',
    '/en': '/ar',
    '/ar-about': '/about',
    '/about': '/ar-about',
    '/ar-privacy': '/privacy',
    '/privacy': '/ar-privacy',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.ar}`] = `/${article.slugs.en}`
    map[`/${article.slugs.en}`] = `/${article.slugs.ar}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': "Omar Mostafa's Portfolio",
    '/en': "Omar Mostafa's Portfolio",
    '/ar-about': 'عني',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.ar}`] = article.titles.ar
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.ar}`] = article.sectionLabels.ar
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

/** All AR slugs (for lang detection: if pathname matches an AR slug → lang is 'ar') */
export function getArSlugs(): Set<string> {
  const slugs = new Set<string>(['/ar', '/ar-privacy', '/ar-about'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.ar}`)
  }
  return slugs
}
