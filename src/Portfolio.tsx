import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  LessonsSection,
  MetricsGrid,
} from './articles/components'
import {
  H2,
  H3,
  Prose,
  Callout,
  CardStack,
  StepList,
  FloatingToc,
} from './articles/content-types'
import { type PortfolioLang as Lang, portfolioContent } from './portfolio-i18n'

function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('portfolio', lang, portfolioContent[lang])
}

export default function Portfolio({ lang = 'en' }: { lang?: Lang }) {
  const t = portfolioContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://omarmostafa.org/portfolio/og-portfolio.webp',
    publishedTime: '2026-05-01',
    modifiedTime: '2026-05-30',
    articleTags: 'AI portfolio,Claude Code,AI-assisted development,PM portfolio,LLMOps,RAG,voice mode,fintech PM',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: t.altSlug,
  })

  const s = t.sections

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc
        ctas={[{ href: '#cta-block', label: s.cta.sidebarLabel, variant: 'anchor' }]}
      />

      <ArticleHeader
        lang={lang}
        kicker={t.header.kicker}
        h1={t.header.h1}
        subtitle={t.header.subtitle}
        date={t.header.date}
        dateISO="2026-05-01"
        dateModifiedISO="2026-05-30"
        readingTime={t.readingTime}
      />

      <MetricsGrid items={t.heroMetrics} columns={5} compact />

      <Callout className="bg-accent/10 border-accent/40">{t.tldr}</Callout>

      <article className="prose-custom">

        {/* ================================================================ */}
        {/*  INTRO                                                           */}
        {/* ================================================================ */}
        <Prose variant="hook">{s.intro.hook}</Prose>
        <Prose>{s.intro.body}</Prose>
        <Prose>{s.intro.transition}</Prose>

        {/* ================================================================ */}
        {/*  WHAT LINKEDIN CAN'T SHOW                                        */}
        {/* ================================================================ */}
        <H2 id="linkedin-gaps">{s.theProblem.heading}</H2>
        <Prose>{s.theProblem.intro}</Prose>
        <StepList items={s.theProblem.gaps.map(g => ({
          label: g.label,
          detail: g.detail,
        }))} />
        <Callout>{s.theProblem.punchline}</Callout>

        {/* ================================================================ */}
        {/*  HOW IT WAS BUILT                                                */}
        {/* ================================================================ */}
        <H2 id="the-build">{s.theBuild.heading}</H2>

        <H3>{s.theBuild.forkDecision.heading}</H3>
        <Prose>{s.theBuild.forkDecision.body}</Prose>
        <Callout className="bg-primary/5 border-primary/20">{s.theBuild.forkDecision.insight}</Callout>

        <H3>{s.theBuild.migrationWork.heading}</H3>
        <Prose>{s.theBuild.migrationWork.body}</Prose>
        <StepList items={s.theBuild.migrationWork.phases.map(p => ({
          label: p.label,
          detail: p.detail,
        }))} />
        <Callout>{s.theBuild.migrationWork.meta}</Callout>

        {/* ================================================================ */}
        {/*  WHAT WAS BUILT                                                  */}
        {/* ================================================================ */}
        <H2 id="the-system">{s.theSystem.heading}</H2>
        <Prose>{s.theSystem.body}</Prose>
        <CardStack items={s.theSystem.components.map(c => ({
          title: c.name,
          detail: c.detail,
        }))} />
        <Callout>{s.theSystem.point}</Callout>

        {/* ================================================================ */}
        {/*  WHAT IT DEMONSTRATES                                            */}
        {/* ================================================================ */}
        <H2 id="what-it-demonstrates">{s.whatItDemonstrates.heading}</H2>
        <Prose>{s.whatItDemonstrates.body}</Prose>
        <StepList items={s.whatItDemonstrates.proofs.map(p => ({
          label: p.label,
          detail: p.detail,
        }))} />

      </article>

      {/* ================================================================== */}
      {/*  LESSONS                                                           */}
      {/* ================================================================== */}
      <LessonsSection heading={s.lessons.heading} items={s.lessons.items} />

      {/* ================================================================== */}
      {/*  FAQ                                                               */}
      {/* ================================================================== */}
      <FaqSection heading="FAQ" items={t.faq.items.map(f => ({ q: f.q, a: f.a }))} />

      {/* ================================================================== */}
      {/*  CTA                                                               */}
      {/* ================================================================== */}
      <div id="cta-block" className="mt-16 pt-8 border-t border-border">
        <h2 className="font-display text-2xl font-bold mb-3">{s.cta.heading}</h2>
        <p className="text-muted-foreground mb-6">{s.cta.body}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/omar-mostafa-mohaseb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            {s.cta.linkedInLabel}
          </a>
          <a
            href="mailto:omarmostafapm@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card border border-border font-medium hover:border-primary/50 transition-colors"
          >
            {s.cta.emailLabel}
          </a>
        </div>
      </div>

      <ArticleFooter lang={lang} utmCampaign="portfolio-ai-pm" />
    </ArticleLayout>
  )
}
