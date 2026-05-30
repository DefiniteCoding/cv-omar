export type CompoundLang = 'ar' | 'en'

const content = {
  slug: 'compound-snbl',
  altSlug: 'compound-save-now-buy-later',
  readingTime: '11 min read',
  seo: {
    title: 'Compound SNBL: Building the Product Behind Save Now, Buy Later | Omar Mostafa',
    description: 'Case study: how I led product execution at Compound — defining the consumer savings journey, designing an embeddable merchant widget as a distribution strategy, and building a mobile app prototype using AI tools.',
  },
  nav: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Compound SNBL',
  },
  header: {
    kicker: 'Case Study — Compound · Save Now, Buy Later',
    h1: 'Building the Product Behind Save Now, Buy Later',
    subtitle: 'How I led product execution at Compound — a UAE fintech built on the thesis that the market wants the outcome of BNPL without the debt — defining consumer and merchant journeys, designing an embedded widget as a distribution strategy, and prototyping a mobile app using AI tools.',
    date: 'Mar 2025',
  },
  heroMetrics: [
    { value: 'SNBL', label: 'Model' },
    { value: '4', label: 'Core Surfaces Shipped' },
    { value: '2', label: 'User Types (Consumer + Merchant)' },
    { value: 'Zero-to-One', label: 'Stage' },
    { value: 'AI-Assisted', label: 'Build Method' },
  ],
  faq: {
    items: [
      { q: 'What is Save Now, Buy Later (SNBL)?', a: 'SNBL is the structural opposite of Buy Now, Pay Later (BNPL). Instead of enabling a purchase on credit and repaying later, SNBL lets consumers save toward a purchase goal, earn merchant-funded rewards while saving, and buy debt-free when the goal is reached. Compound\'s positioning: "Save now. Shop smarter." The model benefits both sides — consumers build financial discipline, merchants acquire customers who have already committed before purchase.' },
      { q: 'What did Omar build at Compound?', a: 'Omar joined as Product Lead & Consultant (part-time, remote) after Compound\'s initial concept was defined. His scope covered execution and delivery: the consumer savings journey (goal creation through redemption), the customer dashboard, the embeddable merchant widget and merchant onboarding journey, an admin backoffice portal, API documentation, and a mobile app prototype built using AI tools (Claude Code, Cursor).' },
      { q: 'What is the embedded merchant widget?', a: 'An embeddable JavaScript widget that merchants install on their landing pages, e-commerce sites, or booking flows. Instead of requiring consumers to leave a merchant\'s site to discover Compound, the widget brings SNBL directly into the merchant\'s existing experience — at the point where purchase intent already exists. It\'s a distribution strategy disguised as a product feature.' },
      { q: 'How was the mobile app prototyped?', a: 'Omar used Claude Code and Cursor to prototype the Compound customer mobile app before handing off to the engineering team. This compressed the time between product definition and testable prototype, enabled faster iteration on UX flows without requiring full engineering resources, and produced a working reference for the development team. AI-assisted prototyping as a PM workflow, not just a developer tool.' },
      { q: 'Why is SNBL a different market position than BNPL?', a: 'Most fintech competes on credit: better rates, faster approval, lower fees. Compound doesn\'t compete on credit — it competes on the absence of credit. The market segment is consumers who want large purchases but don\'t want repayment obligations. This is a behaviorally different customer: someone motivated by financial discipline rather than deferred payment. Merchant-funded rewards make the savings period valuable rather than just a waiting period.' },
    ] as const,
  },
  tldr: 'Compound is a UAE fintech built on the thesis that consumers want the outcome of BNPL (large purchases they can\'t immediately afford) without the debt. I joined as Product Lead to own execution: consumer savings journey, merchant onboarding, an embeddable widget as a distribution strategy, and a mobile app prototyped using Claude Code. Zero-to-one product delivery across consumer, merchant, and operator surfaces.',
  sections: {
    intro: {
      hook: 'BNPL didn\'t fail because of the product. It succeeded enormously — and then struggled under the weight of what "buy now, pay later" actually produces: consumers who owe money they weren\'t sure they could repay, and merchants who acquired customers who converted once and churned. The debt creates the transaction. The debt also creates the churn.',
      body: 'Compound\'s thesis is that the market wants the outcome of BNPL without the mechanism. People want to own the laptop, book the trip, buy the furniture — the desire for the purchase is real. The resistance isn\'t to the thing; it\'s to the debt. If you could save toward the purchase, earn rewards along the way, and buy without a repayment schedule, a meaningful segment of consumers would prefer that. Save now, buy later.',
      role: 'I joined Compound in March 2025 as Product Lead & Consultant — part-time and remote. The initial concept was defined. My scope was execution: translating the SNBL vision into a shippable product across consumer, merchant, and operator surfaces.',
    },
    thesis: {
      heading: 'The Thesis Behind SNBL',
      hypotheses: [
        { label: 'Consumers want the outcome, not the debt.', detail: 'BNPL\'s growth proved the demand for deferred large purchases. SNBL bets that a meaningful segment of that demand is actually demand for purchase enablement without credit obligation — not for the credit itself.' },
        { label: 'Many purchases are planned, not impulse.', detail: 'Travel, electronics, furniture, education, car down payments — these aren\'t impulse purchases. They have purchase timelines. SNBL works precisely because these purchases have a natural "I\'ll buy this in 3–6 months" structure that maps cleanly onto a savings plan.' },
        { label: 'Brands will fund rewards if it reduces CAC.', detail: 'A customer who saves toward your product for three months before purchasing is dramatically more likely to buy than one who clicks an ad. Merchants benefit from commitment before conversion. Merchant-funded rewards make the economics work: the brand pays to acquire a committed customer, not a browser.' },
        { label: 'Commitment before purchase predicts retention.', detail: 'Someone who saved toward a purchase has invested time and money in the process. That investment changes the relationship with the brand — before the transaction. SNBL turns the pre-purchase period into an engagement channel.' },
      ],
      point: 'The whole company is built on a bet that financial discipline can be the product, not just the outcome. That\'s a genuinely unusual market position in fintech.',
    },
    decision1: {
      heading: 'Decision 1: The Widget as Distribution Strategy',
      problem: 'Compound had a distribution problem common to all new financial products: getting consumers to discover and adopt something they haven\'t heard of. BNPL solved this by embedding directly into checkout flows — you encounter BNPL when you\'re already buying. Compound needed an equivalent moment.',
      options: {
        heading: 'Two Distribution Options',
        optionA: {
          label: 'Option A: Drive consumers to the Compound app.',
          detail: 'Acquire consumers through marketing, get them into the Compound experience, let them discover merchants from inside the platform. The problem: this requires Compound to own the discovery moment before purchase intent exists. It\'s a top-of-funnel problem that requires significant marketing investment to solve.',
        },
        optionB: {
          label: 'Option B: Bring Compound to merchants.',
          detail: 'Build an embeddable widget that merchants install on their existing sites and booking flows. Consumers encounter SNBL exactly when purchase intent is highest — on the merchant\'s product page or checkout. Discovery happens in context.',
        },
      },
      decision: 'We chose Option B. The embeddable JavaScript widget — installable on landing pages, e-commerce sites, clinic sites, travel agencies — was the distribution vehicle. Merchants become Compound\'s acquisition channel, not a source of inventory.',
      widgetFlow: 'Consumer lands on merchant site → sees Compound widget → starts a savings goal for that specific product → deposits over time → returns to merchant to redeem. The widget turns merchant traffic into savings commitments, and savings commitments into high-intent future purchases.',
      principle: 'The widget is a distribution decision disguised as a product feature. Most PMs would have focused on dashboard enhancements. The higher-leverage question was: where does purchase intent already exist, and how do we embed Compound there?',
    },
    consumerJourney: {
      heading: 'Decision 2: The Consumer Savings Journey',
      intro: 'The consumer experience had to solve a problem that BNPL doesn\'t face: BNPL converts immediately. SNBL asks consumers to start a relationship with a brand before the purchase, maintain it over weeks or months, and trust that the reward will be worth the wait. The journey design had to make the saving period feel like progress, not delay.',
      steps: [
        { label: 'Goal creation.', detail: 'Consumer selects a merchant and sets a target amount and timeline. The key UX challenge: making an abstract future purchase feel concrete and achievable. Goal creation had to feel like a commitment, not a form.' },
        { label: 'Funding the goal.', detail: 'Consumer makes an initial deposit and sets up a recurring contribution. The contribution model needed to be flexible enough for different income patterns while being structured enough to keep savers on track.' },
        { label: 'Progress tracking.', detail: 'The customer dashboard shows savings progress, rewards earned, and purchase readiness — the percentage toward goal completion. The design principle: every dashboard interaction should reinforce that saving is working.' },
        { label: 'Rewards accumulation.', detail: 'Merchant-funded rewards accumulate as the consumer saves. This is the mechanism that makes the saving period valuable rather than just a waiting period. Rewards aren\'t a discount — they\'re a return on financial discipline.' },
        { label: 'Goal completion and redemption.', detail: 'Consumer reaches the target → receives a redemption code or voucher → completes the purchase with the merchant. The completion moment needed to feel like a milestone, not a transaction.' },
      ],
      dashboardScope: 'The customer dashboard covered: savings overview (total saved, active goals, progress indicators), rewards overview (earned and upcoming rewards), goal management (pause, edit, top-up), and purchase readiness (percentage complete, remaining amount, estimated completion).',
    },
    merchantJourney: {
      heading: 'Decision 3: The Merchant Journey',
      intro: 'Compound\'s value to merchants is specific: a customer who saves toward your product for three months is a fundamentally different acquisition than one who clicks an ad. But merchants need to believe that before they install the widget, configure rewards, and integrate with their existing stack.',
      journey: [
        { label: 'Merchant signup and verification.', detail: 'Business details, account verification, compliance checks. The merchant onboarding had to be self-serve enough for smaller merchants (clinics, travel agencies) while being structured enough to support enterprise integrations.' },
        { label: 'Merchant dashboard.', detail: 'Campaign management, widget configuration, savings activity overview, conversion tracking. Merchants needed visibility into how many customers were saving toward their products and what the conversion pipeline looked like.' },
        { label: 'Reward configuration.', detail: 'Merchants set the reward structure: how much they fund per goal, at what milestones, in what form (percentage discount, voucher, cashback). This is the business model lever — the reward level determines Compound\'s CAC reduction proposition for each merchant.' },
        { label: 'Widget generation and installation.', detail: 'Generate an embeddable JavaScript snippet, install on the merchant\'s site. Zero friction for installation was a product requirement — if widget integration required a developer sprint, adoption would stall at small merchants.' },
        { label: 'Campaign monitoring.', detail: 'Ongoing visibility into active savers, goal completion rates, redemptions, and revenue generated through Compound. Merchants needed to see the CAC reduction argument validated in their own data.' },
      ],
    },
    aiPrototyping: {
      heading: 'Decision 4: AI-Assisted Mobile App Prototyping',
      context: 'Compound\'s consumer experience needed a mobile app. The conventional path: PM writes specs, designer produces mockups, engineers build. The gap between spec and testable prototype is weeks. By the time engineering builds something, the product decisions embedded in the spec may already be wrong.',
      approach: 'I used Claude Code and Cursor to prototype the Compound customer mobile app before handoff to engineering. Not a static mockup — a working prototype with the core flows: goal creation, funding, progress tracking, and dashboard. The prototype served as a reference implementation: something the engineering team could interact with, not just read about.',
      value: [
        { label: 'Compressed iteration time.', detail: 'Questions that would have taken a design sprint and an engineering ticket could be tested in hours. UX decisions that looked right in a spec often revealed themselves as wrong in a working flow.' },
        { label: 'Engineering alignment.', detail: 'A working prototype communicates intent more precisely than a requirements document. Engineers can interrogate the prototype to resolve ambiguities that documents create.' },
        { label: 'Resource efficiency.', detail: 'A part-time PM at an early-stage startup doesn\'t have unlimited engineering cycles. AI-assisted prototyping means product decisions get validated before they consume those cycles, not during.' },
      ],
      principle: 'AI-assisted prototyping is a PM workflow, not just a developer tool. The output isn\'t production code — it\'s a decision-quality artifact that makes the next engineering conversation more precise.',
    },
    delivered: {
      heading: 'What Was Delivered',
      intro: 'Across the Compound engagement, four core surfaces were defined and shipped:',
      items: [
        { name: 'Consumer Mobile App', detail: 'Full savings journey: goal creation, funding, progress tracking, rewards, dashboard. Prototyped with AI tools, handed off to engineering with a working reference.' },
        { name: 'Embeddable Checkout Widget', detail: 'JavaScript widget installable on merchant sites. The distribution mechanism: SNBL at the point of purchase intent, not at the point of Compound discovery.' },
        { name: 'Admin Backoffice Portal', detail: 'Operator tooling for managing merchants, reviewing savings plans, handling compliance workflows, and monitoring platform health. The internal surface that makes the consumer and merchant experiences operationally viable.' },
        { name: 'API Documentation', detail: 'Developer-facing documentation for merchant integration. Self-serve integration is a distribution multiplier — a merchant who can integrate without a dedicated onboarding call scales differently than one who can\'t.' },
      ],
    },
    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'Distribution is a product decision, not a marketing one.',
          detail: 'The embedded widget was the most important product decision in the Compound engagement — not a feature on the consumer app. Where consumers discover your product shapes who discovers it and under what conditions. Embedding at the point of purchase intent is a fundamentally different distribution model than acquiring users through campaigns.',
        },
        {
          title: 'At zero-to-one, what you choose not to build matters as much as what you build.',
          detail: 'Early-stage scope is ruthless. The consumer journey, merchant journey, widget, backoffice, and API docs are the minimum viable surface for a two-sided marketplace. Every additional feature in that period is capacity stolen from the core loops. Getting the core loops right is the job.',
        },
        {
          title: 'AI-assisted prototyping changes the speed of product decisions.',
          detail: 'Building a working mobile app prototype before engineering engagement compressed the feedback loop from weeks to days. Product decisions that are wrong are cheaper to fix in a prototype than in production code. PMs who can prototype accelerate their team without consuming engineering cycles.',
        },
        {
          title: 'The reward mechanism is the business model.',
          detail: 'SNBL\'s unit economics rest on merchants funding rewards to acquire committed customers. The reward configuration UX wasn\'t just a merchant portal feature — it was the mechanism that made the whole model viable. How merchants set rewards determines Compound\'s CAC reduction proposition. Product decisions about that surface are business model decisions.',
        },
      ],
    },
    cta: {
      heading: 'Interested in zero-to-one fintech product work?',
      body: 'I build two-sided marketplace products, consumer financial journeys, and merchant-facing platforms — with a particular focus on MENA markets and AI-assisted delivery.',
      sidebarLabel: 'Connect',
      linkedInLabel: 'Connect on LinkedIn',
      emailLabel: 'Send an email',
    },
  },
}

export type CompoundContent = typeof content
export const compoundContent: Record<CompoundLang, CompoundContent> = {
  en: content,
  ar: content,
}
