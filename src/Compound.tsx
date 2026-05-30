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
import { type CompoundLang as Lang, compoundContent } from './compound-i18n'

function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('compound', lang, compoundContent[lang])
}

export default function Compound({ lang = 'en' }: { lang?: Lang }) {
  const t = compoundContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://omarmostafa.org/compound/og-compound.webp',
    publishedTime: '2025-03-01',
    modifiedTime: '2026-05-30',
    articleTags: 'SNBL,Save Now Buy Later,fintech,Compound,embedded widget,MENA,consumer finance,merchant platform,AI prototyping',
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
        dateISO="2025-03-01"
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
        <Prose>{s.intro.role}</Prose>

        {/* ================================================================ */}
        {/*  THE THESIS                                                      */}
        {/* ================================================================ */}
        <H2 id="the-thesis">{s.thesis.heading}</H2>
        <StepList items={s.thesis.hypotheses.map(h => ({
          label: h.label,
          detail: h.detail,
        }))} />
        <Callout>{s.thesis.point}</Callout>

        {/* ================================================================ */}
        {/*  DECISION 1: WIDGET AS DISTRIBUTION                              */}
        {/* ================================================================ */}
        <H2 id="widget-distribution">{s.decision1.heading}</H2>
        <Prose>{s.decision1.problem}</Prose>

        <H3>{s.decision1.options.heading}</H3>
        <CardStack items={[
          { title: s.decision1.options.optionA.label, detail: s.decision1.options.optionA.detail },
          { title: s.decision1.options.optionB.label, detail: s.decision1.options.optionB.detail },
        ]} />

        <Prose>{s.decision1.decision}</Prose>
        <Prose>{s.decision1.widgetFlow}</Prose>
        <Callout>{s.decision1.principle}</Callout>

        {/* ================================================================ */}
        {/*  DECISION 2: CONSUMER JOURNEY                                    */}
        {/* ================================================================ */}
        <H2 id="consumer-journey">{s.consumerJourney.heading}</H2>
        <Prose>{s.consumerJourney.intro}</Prose>
        <StepList items={s.consumerJourney.steps.map(step => ({
          label: step.label,
          detail: step.detail,
        }))} />
        <Callout className="bg-primary/5 border-primary/20">{s.consumerJourney.dashboardScope}</Callout>

        {/* ================================================================ */}
        {/*  DECISION 3: MERCHANT JOURNEY                                    */}
        {/* ================================================================ */}
        <H2 id="merchant-journey">{s.merchantJourney.heading}</H2>
        <Prose>{s.merchantJourney.intro}</Prose>
        <StepList items={s.merchantJourney.journey.map(step => ({
          label: step.label,
          detail: step.detail,
        }))} />

        {/* ================================================================ */}
        {/*  DECISION 4: AI PROTOTYPING                                      */}
        {/* ================================================================ */}
        <H2 id="ai-prototyping">{s.aiPrototyping.heading}</H2>
        <Prose>{s.aiPrototyping.context}</Prose>
        <Prose>{s.aiPrototyping.approach}</Prose>
        <StepList items={s.aiPrototyping.value.map(v => ({
          label: v.label,
          detail: v.detail,
        }))} />
        <Callout>{s.aiPrototyping.principle}</Callout>

        {/* ================================================================ */}
        {/*  WHAT WAS DELIVERED                                              */}
        {/* ================================================================ */}
        <H2 id="delivered">{s.delivered.heading}</H2>
        <Prose>{s.delivered.intro}</Prose>
        <CardStack items={s.delivered.items.map(item => ({
          title: item.name,
          detail: item.detail,
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

      <ArticleFooter lang={lang} utmCampaign="compound-snbl" />
    </ArticleLayout>
  )
}
