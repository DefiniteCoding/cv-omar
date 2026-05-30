export type TamaraLang = 'es' | 'en'

const content = {
  slug: 'tamara-partners-portal',
  altSlug: 'tamara-partners-portal-2',
  readingTime: '10 min read',
  seo: {
    title: 'Tamara Partners Portal 2.0: From Navigation Sprawl to Merchant Self-Service | Omar Mostafa',
    description: 'Case study: how I led product on Tamara\'s Partners Portal 2.0 — delivering Global Search, a GuideSail-powered onboarding tour, and 15+ merchant features that cut support queries 30% and lifted satisfaction 25%.',
  },
  nav: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Tamara Partners Portal 2.0',
  },
  header: {
    kicker: 'Case Study — Tamara · Partners Portal 2.0',
    h1: 'From Navigation Sprawl to Merchant Self-Service',
    subtitle: 'How I led product on Tamara\'s Partners Portal 2.0: shipping Global Search, an onboarding product tour built with GuideSail instead of Pendo, and 15+ merchant-requested features — cutting support queries 30% and lifting satisfaction 25%.',
    date: 'Jan 2024',
  },
  heroMetrics: [
    { value: '30%', label: 'Fewer Support Queries' },
    { value: '25%', label: 'Satisfaction Uplift' },
    { value: '15+', label: 'Features Shipped' },
    { value: '0', label: 'Eng Days for Tour Setup' },
    { value: '2024', label: 'Launched' },
  ],
  faq: {
    items: [
      { q: 'What is Tamara Partners Portal?', a: 'The Partners Portal is the merchant-facing operating platform for Tamara\'s BNPL network. Merchants use it to manage orders (capture, refund, cancel), view settlements and tax invoices, configure webhooks and API tokens, manage team access and roles, and generate reports. It is the primary operational interface between Tamara and its merchant base across MENA.' },
      { q: 'What is Partners Portal 2.0?', a: 'Partners Portal 2.0 was a major product investment in the merchant experience — not a full rebuild, but a coherent uplift. Three pillars: Global Search (find anything across all portal modules instantly), a guided onboarding tour for new merchants, and a structured delivery of 15+ merchant-requested features. The goal: reduce merchants\' dependence on partner success teams for navigation and routine tasks.' },
      { q: 'Why GuideSail instead of Pendo or Appcues?', a: 'Pendo and Appcues are digital adoption platforms priced for enterprises that need deep analytics, segmentation, and multi-product orchestration. We needed a focused product tour: step-by-step guidance for new merchants on their first login. GuideSail gave us exactly that — no engineering effort required, fast to implement, right-sized for the scope, and priced for what we actually needed rather than for a use case we didn\'t have.' },
      { q: 'What does Global Search cover in the portal?', a: 'Global Search covers the core operational objects merchants work with: orders (by order ID, merchant order ID, customer name, customer phone), settlements, tax invoices, reports, users, and webhooks. The goal was to replace module-by-module navigation with a single entry point. Merchants could find a specific order or settlement without knowing which section of the portal to look in first.' },
      { q: 'What were the outcomes of Partners Portal 2.0?', a: 'Support queries from merchants dropped 30%, driven primarily by Global Search reducing navigation friction and the product tour reducing first-session confusion. Merchant satisfaction scores improved 25%. And over 15 merchant-requested features were shipped, deepening the portal\'s coverage of common operational workflows.' },
    ] as const,
  },
  tldr: 'As PM for Tamara\'s Partners Portal, I led the 2.0 uplift: Global Search across all portal modules, a product tour built with GuideSail (not Pendo), and 15+ merchant-requested features. Outcome: 30% fewer support queries, 25% satisfaction uplift. The most defensible PM decision was right-sizing the onboarding tool — paying for what the problem actually needed, not what enterprise vendors wanted to sell.',
  sections: {
    intro: {
      hook: 'When a merchant can\'t find the refund button, they don\'t explore the interface. They open a support ticket. That ticket costs time — for the merchant, for the partner success team, and indirectly for Tamara. Multiply it by a growing merchant base across MENA, and "navigation confusion" becomes a measurable drag on operations.',
      body: 'I joined Tamara as a Product Manager in January 2024, taking ownership of the Partners Portal — the merchant-facing operating platform used by Tamara\'s merchant network to manage orders, settlements, invoices, team access, and integrations. The portal worked. But it had grown organically as Tamara\'s merchant offering expanded, and that growth had left marks: navigation that required you to already know where to look, onboarding that assumed familiarity, and a backlog of merchant-requested features that had accumulated without a coordinated delivery strategy.',
    },
    theProblem: {
      heading: 'The Problem: A Portal That Required a Map',
      body: 'Tamara\'s Partners Portal covered significant operational ground. Merchants used it to capture and refund orders, download settlement reports, manage team members and roles, configure webhooks and API tokens, and generate tax invoices. The feature surface was genuinely useful. The problem was navigation.',
      painPoints: [
        { label: 'Merchants couldn\'t find things.', detail: 'As the portal grew, the navigation did too — but it grew by addition, not by redesign. Features landed where they fit at the time, not where merchants would intuitively look for them.' },
        { label: 'Support teams became search engines.', detail: '"How do I download a settlement report?" "Where do I add a user?" "How do I issue a refund?" These questions filled the partner success queue — not because the portal couldn\'t do these things, but because merchants couldn\'t find where.' },
        { label: 'First-login drop-off was real.', detail: 'New merchants arrived at the portal and encountered a full-featured platform with no guidance. BNPL terminology (captures, settlements, refund windows) isn\'t universal. Merchants who couldn\'t orient themselves quickly leaned on support rather than self-serving.' },
        { label: 'Merchant-requested features had no coordinated delivery.', detail: 'There was a growing backlog of specific, well-understood requests from merchants — filtering improvements, bulk actions, reporting enhancements. Each was reasonable. None had been shipped at pace.' },
      ],
      punchline: 'A support ticket is a product failure. Not always — some questions are genuinely complex. But when the ticket says "where do I find X", that\'s a navigation problem, and navigation problems are solvable.',
    },
    vision: {
      heading: 'The Vision: From Operations Tool to Self-Service Platform',
      body: 'The framing for Partners Portal 2.0 was a shift in what the portal was designed to do. Version 1.x was an operations tool: it gave merchants the ability to perform tasks. Version 2.0 was designed around self-service: merchants should be able to discover functionality, learn the platform, and complete workflows without requiring partner success team involvement.',
      pillars: [
        { name: 'Discoverability', detail: 'Any merchant should be able to find any object or workflow within seconds, regardless of where they enter the portal.' },
        { name: 'Guided Adoption', detail: 'New merchants should understand the platform enough to be operationally independent after their first session.' },
        { name: 'Feature Completeness', detail: 'The backlog of merchant-requested enhancements should ship coherently, not in isolation.' },
      ],
    },
    decision1: {
      heading: 'Decision 1: Global Search',
      problem: 'Merchants working with Tamara operated across multiple modules: order management, settlements, invoices, user management, webhooks, reports. Each module had its own navigation, its own search (where it existed), and its own mental model. Finding a specific order or settlement meant knowing which section of the portal to go to first.',
      insight: 'The insight was straightforward: the portal had good data and the operational objects were well-defined. Orders have IDs and customer details. Settlements have dates and amounts. Invoices have numbers. Users have names and emails. What was missing was a unified entry point that searched across all of them.',
      solution: 'Global Search indexed the portal\'s core operational objects and made them searchable from a single bar, available from any screen. Merchants could search by order ID, merchant order ID, customer name, customer phone, settlement ID, tax invoice number, username, or report name — and land directly on the relevant record.',
      impact: 'The immediate effect was visible in the partner success queue. Navigation questions dropped significantly. Merchants who previously opened tickets to locate a specific order or settlement could find it themselves. The search bar didn\'t add new capabilities — it made existing ones accessible.',
    },
    decision2: {
      heading: 'Decision 2: The Product Tour — and Why We Chose GuideSail',
      problem: 'New merchants arrived at the portal and encountered a powerful platform with no orientation. Tamara\'s BNPL model has specific terminology: captures (what triggers merchant disbursement), settlement cycles, refund windows, order statuses. Merchants unfamiliar with BNPL operations had to learn both the product and the platform at the same time.',
      buildVsBuy: {
        heading: 'The Build vs. Buy Decision',
        body: 'The options I evaluated for the product tour covered most of the market: Pendo, Appcues, and Intercom Product Tours. All three could technically do what I needed. None of them were the right fit.',
        rejection: 'Pendo, Appcues, and Intercom Product Tours are digital adoption platforms built for enterprises managing multiple products, multiple user segments, and complex analytics pipelines. They\'re priced accordingly. The use case I had was specific and bounded: step-by-step guidance for new merchants on their first login to a B2B portal. Paying for enterprise-grade user analytics infrastructure to ship a six-step onboarding tour would have been the wrong call — both commercially and technically, since implementation complexity would have added engineering cost on top of licensing cost.',
        solution: 'I found GuideSail (getguidesail.com) — a focused product tour tool that matched the scope of the problem. No engineering days required for setup. Fast to implement. Sufficient feature set: step-by-step modals and tooltips, triggered on first login, covering the portal\'s core sections. Right-priced for a targeted use case.',
        principle: 'The right tool for a problem isn\'t always the market leader. When the problem is bounded and specific, buying the enterprise platform is often a waste of budget and engineering time. Right-sizing the solution is a product decision, not just a procurement one.',
      },
      tourDesign: {
        heading: 'Tour Design',
        body: 'The tour covered six steps, triggering on first merchant login. Each step corresponded to a core portal section: Orders (the primary operational view), Captures (how merchant disbursement is triggered), Settlements (understanding the payout cycle), User Management (inviting teammates and managing access), Reports (downloading exports and invoices), and a completion state that confirmed the merchant was ready to operate independently.',
        outcome: 'First-session orientation improved. New merchant support queries — the "I don\'t understand what a capture is" and "where do I find my settlement" tickets — declined. Merchants who completed the tour moved through their first operational tasks faster than those who arrived before the tour existed.',
      },
    },
    decision3: {
      heading: 'Decision 3: Coordinated Merchant Feature Delivery',
      body: 'Beyond search and onboarding, Partners Portal 2.0 included a structured push through the merchant-requested backlog. Over 15 features were shipped across the portal\'s operational surface — filtering improvements, workflow optimizations, reporting enhancements, and UI refinements that had been requested by merchants but hadn\'t made it through the prioritization cycle.',
      approach: 'The PM work here was coordination, not invention. The requests were known. The engineering effort was understood. What was missing was a prioritized delivery plan that grouped related changes coherently rather than shipping them in isolation. Batching the delivery also meant merchants received a perceptibly improved portal rather than incremental changes that felt invisible.',
      principle: 'A backlog of reasonable merchant requests doesn\'t need a big-bet product moment. It needs someone to own the prioritization and sequence the delivery.',
    },
    outcomes: {
      heading: 'Outcomes',
      items: [
        { metric: '30%', label: 'reduction in merchant support queries', context: 'Driven primarily by Global Search eliminating navigation friction and the product tour reducing first-session confusion. Partner success teams spent less time answering "where is X" questions.' },
        { metric: '25%', label: 'improvement in merchant satisfaction scores', context: 'Measured through Tamara\'s merchant satisfaction tracking. The combination of faster task completion (search), better onboarding (tour), and resolved feature requests moved the needle across the merchant base.' },
        { metric: '15+', label: 'merchant-requested features shipped', context: 'A coordinated push through the existing backlog. Individual features ranged from filtering improvements to workflow optimizations — none were large standalone bets, but collectively they represented meaningful coverage of merchant operational needs.' },
      ],
    },
    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'A support ticket is a design signal, not just an ops problem.',
          detail: 'The 30% reduction in support queries didn\'t come from better support — it came from better product. When support volume drops after a product change, you\'ve fixed something that was genuinely broken. Track what your partner success teams are fielding and treat it as a product research input.',
        },
        {
          title: 'Right-size the solution to the problem.',
          detail: 'Pendo and Appcues exist for specific use cases: multi-product platforms with complex user segmentation needs and enterprise analytics requirements. When you need a six-step onboarding tour for a B2B portal, you need a six-step onboarding tour tool. GuideSail solved the problem without the overhead. The PM judgment call was recognizing that the problem was bounded.',
        },
        {
          title: 'Discoverability unlocks existing value.',
          detail: 'Global Search didn\'t add any new capabilities to the portal. Every order, settlement, and invoice was already there. What changed was the ease of access. Feature value that exists but can\'t be found is effectively zero. Discoverability is a product investment, not just a UX nicety.',
        },
        {
          title: 'Backlog coordination is unglamorous and high-impact.',
          detail: 'The 15+ merchant features weren\'t individually exciting. None of them were bet-the-company features. But merchants had asked for them, they were buildable, and shipping them together created a perceptible improvement. The PM work was coordination and sequencing — not the most visible product moment, but a meaningful one.',
        },
      ],
    },
    cta: {
      heading: 'Interested in merchant platform product design?',
      body: 'I build and think about B2B fintech products — merchant platforms, developer-facing tools, and the PM decisions behind them.',
      sidebarLabel: 'Connect',
      linkedInLabel: 'Connect on LinkedIn',
      emailLabel: 'Send an email',
    },
  },
}

export type TamaraContent = typeof content
export const tamaraContent: Record<TamaraLang, TamaraContent> = {
  en: content,
  es: content,
}
