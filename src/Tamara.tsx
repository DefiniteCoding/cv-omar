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
import { type TamaraLang as Lang, tamaraContent } from './tamara-i18n'

function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('tamara', lang, tamaraContent[lang])
}

export default function Tamara({ lang = 'en' }: { lang?: Lang }) {
  const t = tamaraContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://omarmostafa.org/tamara/og-tamara-portal.webp',
    publishedTime: '2024-01-01',
    modifiedTime: '2026-05-30',
    articleTags: 'merchant portal,product tour,global search,BNPL,Tamara,GuideSail,fintech,B2B,product management',
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
        dateISO="2024-01-01"
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

        {/* ================================================================ */}
        {/*  THE PROBLEM                                                     */}
        {/* ================================================================ */}
        <H2 id="the-problem">{s.theProblem.heading}</H2>
        <Prose>{s.theProblem.body}</Prose>
        <StepList items={s.theProblem.painPoints.map(p => ({
          label: p.label,
          detail: p.detail,
        }))} />
        <Callout>{s.theProblem.punchline}</Callout>

        {/* ================================================================ */}
        {/*  VISION                                                          */}
        {/* ================================================================ */}
        <H2 id="vision">{s.vision.heading}</H2>
        <Prose>{s.vision.body}</Prose>
        <CardStack items={s.vision.pillars.map(p => ({
          title: p.name,
          detail: p.detail,
        }))} />

        {/* ================================================================ */}
        {/*  DECISION 1: GLOBAL SEARCH                                       */}
        {/* ================================================================ */}
        <H2 id="global-search">{s.decision1.heading}</H2>
        <H3>The Problem</H3>
        <Prose>{s.decision1.problem}</Prose>
        <H3>The Insight</H3>
        <Prose>{s.decision1.insight}</Prose>
        <H3>The Solution</H3>
        <Prose>{s.decision1.solution}</Prose>
        <Callout>{s.decision1.impact}</Callout>

        {/* ================================================================ */}
        {/*  DECISION 2: PRODUCT TOUR + GUIDESAIL                           */}
        {/* ================================================================ */}
        <H2 id="product-tour">{s.decision2.heading}</H2>
        <Prose>{s.decision2.problem}</Prose>

        <H3>{s.decision2.buildVsBuy.heading}</H3>
        <Prose>{s.decision2.buildVsBuy.body}</Prose>
        <Prose>{s.decision2.buildVsBuy.rejection}</Prose>
        <Callout className="bg-primary/5 border-primary/20">{s.decision2.buildVsBuy.solution}</Callout>
        <Callout>{s.decision2.buildVsBuy.principle}</Callout>

        <H3>{s.decision2.tourDesign.heading}</H3>
        <Prose>{s.decision2.tourDesign.body}</Prose>
        <Prose>{s.decision2.tourDesign.outcome}</Prose>

        {/* ================================================================ */}
        {/*  DECISION 3: BACKLOG DELIVERY                                    */}
        {/* ================================================================ */}
        <H2 id="feature-delivery">{s.decision3.heading}</H2>
        <Prose>{s.decision3.body}</Prose>
        <Prose>{s.decision3.approach}</Prose>
        <Callout>{s.decision3.principle}</Callout>

        {/* ================================================================ */}
        {/*  OUTCOMES                                                        */}
        {/* ================================================================ */}
        <H2 id="outcomes">{s.outcomes.heading}</H2>
        <div className="space-y-6 my-8">
          {s.outcomes.items.map(item => (
            <div key={item.metric} className="flex gap-5 p-5 rounded-xl border border-border bg-card">
              <div className="shrink-0 text-4xl font-display font-bold text-primary leading-none">
                {item.metric}
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.context}</p>
              </div>
            </div>
          ))}
        </div>

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

      <ArticleFooter lang={lang} utmCampaign="tamara-partners-portal" />
    </ArticleLayout>
  )
}
