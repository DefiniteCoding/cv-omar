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
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
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
    slugs: { es: 'compound-snbl', en: 'compound-save-now-buy-later' },
    titles: { es: 'Compound SNBL', en: 'Compound SNBL' },
    seo: {
      es: {
        title: 'Compound SNBL: Building the Product Behind Save Now, Buy Later | Omar Mostafa',
        description: 'Case study: how I led product execution at Compound — SNBL consumer journey, embeddable merchant widget as distribution strategy, and AI-assisted mobile app prototyping.',
      },
      en: {
        title: 'Compound SNBL: Building the Product Behind Save Now, Buy Later | Omar Mostafa',
        description: 'Case study: how I led product execution at Compound — SNBL consumer journey, embeddable merchant widget as distribution strategy, and AI-assisted mobile app prototyping.',
      },
    },
    sectionLabels: {
      es: {
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
    },
  },
  {
    id: 'tamara',
    slugs: { es: 'tamara-partners-portal', en: 'tamara-partners-portal-2' },
    titles: { es: 'Tamara Partners Portal 2.0', en: 'Tamara Partners Portal 2.0' },
    seo: {
      es: {
        title: 'Tamara Partners Portal 2.0: From Navigation Sprawl to Merchant Self-Service | Omar Mostafa',
        description: 'Case study: how I led product on Tamara\'s Partners Portal 2.0 — delivering Global Search, a GuideSail-powered onboarding tour, and 15+ merchant features that cut support queries 30% and lifted satisfaction 25%.',
      },
      en: {
        title: 'Tamara Partners Portal 2.0: From Navigation Sprawl to Merchant Self-Service | Omar Mostafa',
        description: 'Case study: how I led product on Tamara\'s Partners Portal 2.0 — delivering Global Search, a GuideSail-powered onboarding tour, and 15+ merchant features that cut support queries 30% and lifted satisfaction 25%.',
      },
    },
    sectionLabels: {
      es: {
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
    },
  },
  {
    id: 'portfolio',
    slugs: { es: 'portfolio-ai-pm', en: 'ai-assisted-pm-portfolio' },
    titles: { es: 'This Portfolio', en: 'This Portfolio' },
    seo: {
      es: {
        title: 'Why I Built an AI Portfolio Instead of Updating My LinkedIn | Omar Mostafa',
        description: 'Case study: why LinkedIn wasn\'t enough — and how I built an interactive portfolio with an AI chatbot, voice mode, agentic RAG, and 71 automated evals in 3 days using Claude Code.',
      },
      en: {
        title: 'Why I Built an AI Portfolio Instead of Updating My LinkedIn | Omar Mostafa',
        description: 'Case study: why LinkedIn wasn\'t enough — and how I built an interactive portfolio with an AI chatbot, voice mode, agentic RAG, and 71 automated evals in 3 days using Claude Code.',
      },
    },
    sectionLabels: {
      es: {
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
    },
  },
  {
    id: 'nymcard',
    slugs: { es: 'nymcard-baas', en: 'nymcard-corporate-baas' },
    titles: { es: 'NymCard BaaS', en: 'NymCard BaaS' },
    seo: {
      es: {
        title: 'Building a Financial OS for SMEs: Inside N4B and Lynq | Omar Mostafa',
        description: 'Case study: how I led product on Nym4Business (N4B), a white-label Banking-as-a-Service platform for SMEs in MENA, and the PM decisions behind staged KYB, approval rules, and B2B2C design.',
      },
      en: {
        title: 'Building a Financial OS for SMEs: Inside N4B and Lynq | Omar Mostafa',
        description: 'Case study: how I led product on Nym4Business (N4B), a white-label Banking-as-a-Service platform for SMEs in MENA, and the PM decisions behind staged KYB, approval rules, and B2B2C design.',
      },
    },
    sectionLabels: {
      es: {
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
    },
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/en',
    '/en': '/',
    '/sobre-mi': '/about',
    '/about': '/sobre-mi',
    '/privacidad': '/privacy',
    '/privacy': '/privacidad',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = `/${article.slugs.en}`
    map[`/${article.slugs.en}`] = `/${article.slugs.es}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': "Omar Mostafa's Portfolio",
    '/en': "Omar Mostafa's Portfolio",
    '/sobre-mi': 'Sobre Mí',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.titles.es
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.sectionLabels.es
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

/** All ES slugs (for lang detection: if pathname matches an ES slug → lang is 'es') */
export function getEsSlugs(): Set<string> {
  const slugs = new Set<string>(['/', '/privacidad', '/sobre-mi'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.es}`)
  }
  return slugs
}
