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
import { type NymCardLang as Lang, nymcardContent } from './nymcard-i18n'

function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('nymcard', lang, nymcardContent[lang])
}

export default function NymCard({ lang = 'en' }: { lang?: Lang }) {
  const t = nymcardContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://omarmostafa.org/nymcard/og-nymcard.webp',
    publishedTime: '2026-06-01',
    modifiedTime: '2026-05-30',
    articleTags: 'BaaS,fintech,SME,financial OS,NymCard,Lynq,KYB,embedded finance,MENA,card issuing',
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
        dateISO="2026-06-01"
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
        {/*  WHAT N4B IS                                                     */}
        {/* ================================================================ */}
        <H2 id="what-n4b-is">{s.whatN4BIs.heading}</H2>
        <Prose>{s.whatN4BIs.body}</Prose>
        <CardStack items={s.whatN4BIs.modules.map(m => ({
          title: m.name,
          detail: m.detail,
        }))} />
        <Callout className="bg-primary/5 border-primary/20">{s.whatN4BIs.distributionNote}</Callout>

        {/* ================================================================ */}
        {/*  MY ROLE                                                         */}
        {/* ================================================================ */}
        <H2 id="my-role">{s.myRole.heading}</H2>
        <Prose>{s.myRole.body}</Prose>
        <StepList items={s.myRole.areas.map(a => ({
          label: a.title,
          detail: a.detail,
        }))} />

        {/* ================================================================ */}
        {/*  DECISION 1: STAGED KYB                                          */}
        {/* ================================================================ */}
        <H2 id="staged-kyb">{s.decision1.heading}</H2>
        <H3>The Problem</H3>
        <Prose>{s.decision1.problem}</Prose>
        <H3>The Insight</H3>
        <Prose>{s.decision1.insight}</Prose>
        <H3>The Solution</H3>
        <Prose>{s.decision1.solution}</Prose>
        <Prose>{s.decision1.rationale}</Prose>
        <Callout>{s.decision1.principle}</Callout>

        {/* ================================================================ */}
        {/*  DECISION 2: APPROVAL RULE ENGINE                                */}
        {/* ================================================================ */}
        <H2 id="approval-engine">{s.decision2.heading}</H2>
        <H3>The Problem</H3>
        <Prose>{s.decision2.problem}</Prose>
        <H3>The Insight</H3>
        <Prose>{s.decision2.insight}</Prose>
        <H3>The Solution</H3>
        <Prose>{s.decision2.solution}</Prose>
        <H3>The UX Challenge</H3>
        <Prose>{s.decision2.uxChallenge}</Prose>
        <Callout>{s.decision2.principle}</Callout>

        {/* ================================================================ */}
        {/*  DECISION 3: TWO CUSTOMERS                                       */}
        {/* ================================================================ */}
        <H2 id="two-customers">{s.decision3.heading}</H2>
        <Prose>{s.decision3.problem}</Prose>
        <H3>What the FI Wants</H3>
        <Prose>{s.decision3.fiPriority}</Prose>
        <H3>What the SME Wants</H3>
        <Prose>{s.decision3.smePriority}</Prose>
        <H3>The Tension</H3>
        <Prose>{s.decision3.tension}</Prose>
        <H3>Our Resolution</H3>
        <Prose>{s.decision3.solution}</Prose>
        <Callout>{s.decision3.principle}</Callout>

        {/* ================================================================ */}
        {/*  LYNQ                                                            */}
        {/* ================================================================ */}
        <H2 id="lynq">{s.lynq.heading}</H2>
        <Prose>{s.lynq.body}</Prose>

        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-foreground/80">
          <p className="text-xl leading-relaxed mb-2">"{s.lynq.quote.text}"</p>
          <footer className="text-sm text-muted-foreground not-italic">— {s.lynq.quote.attribution}</footer>
        </blockquote>

        <Prose>{s.lynq.features}</Prose>
        <Prose>{s.lynq.architecture}</Prose>
        <Callout>{s.lynq.significance}</Callout>

      </article>

      {/* ================================================================== */}
      {/*  LESSONS                                                           */}
      {/* ================================================================== */}
      <LessonsSection heading={s.lessons.heading} items={s.lessons.items} />

      {/* ================================================================== */}
      {/*  FAQ                                                               */}
      {/* ================================================================== */}
      <FaqSection heading="FAQ" items={s.faq.map(f => ({ q: f.q, a: f.a }))} />

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

      <ArticleFooter lang={lang} utmCampaign="nymcard-baas" />
    </ArticleLayout>
  )
}
