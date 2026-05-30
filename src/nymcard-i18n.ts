export type NymCardLang = 'es' | 'en'

const content = {
  slug: 'nymcard-baas',
  altSlug: 'nymcard-corporate-baas',
  readingTime: '12 min read',
  seo: {
    title: 'Building a Financial OS for SMEs: Inside N4B and Lynq | Omar Mostafa',
    description: 'Case study: how I led product on Nym4Business (N4B), a white-label Banking-as-a-Service platform for SMEs, and what it looks like when a regulated UAE financial institution deploys it as Lynq.',
  },
  nav: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'NymCard BaaS',
  },
  header: {
    kicker: 'Case Study — NymCard · Corporate BaaS',
    h1: 'Building a Financial OS for SMEs',
    subtitle: 'How I led product on N4B, a white-label Banking-as-a-Service platform that collapses fragmented SME financial operations into one unified system — and what it looks like when a regulated UAE financial institution deploys it.',
    date: 'Jun 2025',
  },
  heroMetrics: [
    { value: '10+', label: 'Platform Modules' },
    { value: 'B2B2C', label: 'Distribution Model' },
    { value: '2', label: 'Customers Per Deal' },
    { value: 'MENA', label: 'Target Market' },
    { value: 'May 2026', label: 'Lynq Live' },
  ],
  faq: {
    items: [
      { q: 'What is N4B and how does it differ from regular banking?', a: 'N4B (Nym4Business) is a white-label Financial Operating System built by NymCard. Unlike a bank, N4B is infrastructure: NymCard builds and maintains the platform, regulated financial institutions brand it and offer it to their SME clients. The FI handles the regulatory relationship with the SME. NymCard handles the technology.' },
      { q: 'What is Lynq and how does it relate to N4B?', a: 'Lynq is the first public deployment of N4B. Launched in May 2026 by Mawarid Finance (a CBUAE-regulated UAE FI), Lynq is N4B white-labeled under Mawarid\'s brand, running on NymCard\'s processing infrastructure with Mastercard as the card network. Lynq is what N4B looks like in the market.' },
      { q: 'What does staged KYB onboarding mean in practice?', a: 'Instead of presenting the full compliance requirement upfront, staged onboarding splits the process into two phases. Phase 1: enough to create an account and explore the product. Phase 2: full compliance collection before account activation. The regulatory requirements are the same — the sequence changes.' },
      { q: 'How does the approval rule engine work?', a: 'Administrators define conditions and assign approvers: "payments over AED 10,000 require approval from the finance lead." The rule engine handles routing and escalation logic. This replaces fixed org-chart-based approval hierarchies with configurable policy rules — better suited to SME governance structures where authority is informal and flat.' },
      { q: 'What makes this B2B2C and why does it matter for product decisions?', a: 'N4B has two customers: the financial institution (direct buyer, distribution partner, compliance owner) and the SME (end user, daily operator). Every product decision has to work for both. FI needs: white-labeling, compliance coverage, configurability. SME needs: simplicity, speed, consistency. The tensions between these shape the product architecture.' },
    ] as const,
  },
  tldr: 'N4B is NymCard\'s white-label Financial OS for SMEs — sold to financial institutions who offer it to their business customers. I led product end-to-end: self-serve KYB onboarding with staged compliance, corporate hierarchy and RBAC, an approval rule engine adapted for informal SME governance, and the requests listing redesign. Lynq, launched May 2026 with Mawarid Finance, is N4B\'s first public deployment.',
  sections: {
    intro: {
      hook: 'SMEs in MENA don\'t have a payment problem. They have a fragmentation problem. One tool for corporate cards. Another for expense claims. A third for vendor payouts. A fourth for cross-border. None of them talk to each other, so the finance team — often one person who also does operations — spends their day reconciling instead of managing.',
      body: 'Nym4Business (N4B) is NymCard\'s answer: a unified Financial Operating System for SMEs, white-labeled to financial institutions. I joined NymCard in June 2025 as PM for N4B, leading the product from a maturing platform toward a deployable FI-grade product. The goal: build something that a regulated bank or licensed FI could put their name on and offer to their SME client base.',
    },
    theProblem: {
      heading: 'The SME Financial Operations Problem',
      body: 'Ask a UAE SME founder how they manage their company\'s finances and you\'ll hear the same story every time. Corporate cards from one provider. Expense reports on spreadsheets. Wire transfers from internet banking. International supplier payments through a foreign exchange broker. Digital invoices out of accounting software that doesn\'t connect to anything else.',
      painPoints: [
        { label: 'Fragmented tooling.', detail: 'Each point solution solves one problem and creates three integration gaps. Data doesn\'t flow between them.' },
        { label: 'Manual reconciliation.', detail: 'Someone has to match the card statement to the expense report to the AP ledger. That someone is usually the CEO or a part-time bookkeeper.' },
        { label: 'Compliance exposure.', detail: 'KYB, KYC, AML screening — each new financial provider requires its own onboarding. The compliance burden multiplies with every tool added.' },
        { label: 'No financial visibility.', detail: 'Real-time cash position is a manual calculation. Spend by department is a question that requires someone to stop what they\'re doing and export a report.' },
        { label: 'Poor controls.', detail: 'Approval processes live in WhatsApp threads. Card limits are set once and forgotten. Vendor payment authorization is informal.' },
      ],
      punchline: 'The problem isn\'t that any one of these tools is bad. The problem is the architecture: point solutions, stitched together, operated manually. The fix isn\'t another point solution. It\'s a platform.',
    },
    whatN4BIs: {
      heading: 'What N4B Is',
      body: 'N4B is a white-label Financial OS: NymCard builds and maintains the platform, financial institutions brand it and distribute it to their SME clients. The full platform covers the end-to-end SME financial operations surface.',
      modules: [
        { name: 'KYB / IDV / KYC Onboarding', detail: 'Self-serve SME signup with staged compliance flow. Identity verification, UBO collection, and regulatory screening built in.' },
        { name: 'Corporate Card Issuance', detail: 'Virtual and physical cards with configurable spend controls, limits, and merchant category restrictions.' },
        { name: 'Expense Management', detail: 'Employee expense submission, receipt capture via OCR, reimbursement workflows.' },
        { name: 'Accounts Payable', detail: 'Vendor management, invoice capture, payment scheduling, and AP approval workflows.' },
        { name: 'Accounts Receivable', detail: 'Digital invoice creation and delivery to B2B and B2C customers.' },
        { name: 'Cross-Border Payments', detail: 'Beneficiary management and international payment rails for vendor payouts across currencies.' },
        { name: 'Embedded Lending', detail: 'Credit origination, disbursement tracking, and repayment management for FI credit products.' },
        { name: 'RBAC + Entity Hierarchy', detail: 'Multi-level corporate structures with role-based access control and permission inheritance.' },
        { name: 'Approval Rule Engine', detail: 'Maker-checker workflows with configurable rules for payments, card issuance, and account changes.' },
        { name: 'MFA + OCR', detail: 'Multi-factor authentication and optical character recognition for document processing.' },
      ],
      distributionNote: 'The FI is the direct customer — they pay for the platform, brand it, and integrate it into their SME offering. The SME\'s employees and finance teams are the end users. This is B2B2C: two distinct customers with different needs, different success metrics, and different relationships with the product.',
    },
    myRole: {
      heading: 'My Role',
      body: 'I lead N4B product end-to-end. Three areas I\'ve driven specifically:',
      areas: [
        { title: 'SME Self-Signup Portal', detail: 'Designed and shipped the self-serve onboarding experience with staged KYB/KYC compliance flow. SMEs can start the onboarding process and explore the platform without hitting the full compliance wall upfront.' },
        { title: 'Corporate Hierarchy + RBAC + Approval Flows', detail: 'Defined the entity model (company → department → user), permission inheritance, and the approval rule engine. The challenge: making abstract financial governance feel concrete and manageable for non-finance-trained SME administrators.' },
        { title: 'Requests Listing Redesign', detail: 'Overhauled the requests management experience: filtering, sorting, bulk actions, and SLA-driven "due soon" logic so finance teams can triage approval queues without missing time-sensitive requests.' },
      ],
    },
    decision1: {
      heading: 'Decision 1: Staged KYB Onboarding',
      problem: 'Traditional financial platform onboarding front-loads compliance. Upload your trade license. Provide UBO details. Wait for manual review. The business hits a twelve-field compliance form before they\'ve seen a single screen of the product.',
      insight: 'In regulated financial services, the compliance requirements can\'t be removed — they\'re legally mandated. But the sequence can be engineered. The question isn\'t "how do we reduce KYB requirements?" but "when do we ask for each piece of information?"',
      solution: 'We split onboarding into two phases. Phase 1 captures enough to let the user explore the platform: account creation and basic identity confirmation. Phase 2 collects the deeper KYB/IDV requirements before full account activation. The compliance burden is identical — the experience is entirely different.',
      rationale: 'SME founders are time-poor. If they encounter a compliance wall before they\'ve seen any product value, their mental model is "bank onboarding" not "financial tool." The staged approach lets them experience the product before asking them to invest time. Early exploration creates buy-in. Buy-in creates completion.',
      principle: 'This isn\'t about hiding compliance requirements — it\'s about sequencing them intelligently. The FI still gets full KYB coverage. The SME gets a product before a form.',
    },
    decision2: {
      heading: 'Decision 2: The Approval Rule Engine',
      problem: 'Maker-checker workflows are standard in enterprise finance. A payment request flows to an approver, the approver validates, payment executes. The assumption is a clear organizational hierarchy with formal delegation of authority.',
      insight: 'SMEs don\'t work like enterprises. The "finance team" might be one person. Reporting lines are flat enough that formal approval feels like bureaucracy. The CEO approves everything personally regardless of amount — until they\'re traveling and that breaks down. The governance structures that enterprise maker-checker assumes often don\'t exist.',
      solution: 'Rules instead of roles. Rather than forcing a fixed org chart onto the platform, administrators define conditions: "any payment over AED 10,000 requires approval from X." "Card issuance requests require Y." The rule engine handles the routing and escalation. Administrators define the policy. The system enforces it.',
      uxChallenge: 'The harder problem was the UX, not the logic. "Rules" is an abstract concept. SME owners think in outcomes: "I want to know before anything over AED 5,000 goes out." They don\'t naturally think in if-then-else. The rule creation interface had to translate from "outcome the admin wants" to "condition-action pair the system needs" without exposing the underlying logic.',
      principle: 'Abstract financial governance has to become concrete financial controls. If the configuration UI requires a finance background to navigate, SME administrators won\'t configure it correctly — which means the controls won\'t work in practice.',
    },
    decision3: {
      heading: 'Decision 3: Building for Two Customers',
      problem: 'N4B\'s distribution model creates genuine product tension. Every feature decision has two stakeholders with different priorities.',
      fiPriority: 'Financial institutions want differentiation they can sell. A white-label platform they can brand, configure, and position as their own product. They want the ability to surface only the modules relevant to their SME segment. They want onboarding flows they can wrap in their own brand language. They want feature toggles.',
      smePriority: 'SMEs want a clean tool that reduces operational overhead. A consistent interface that works the way finance is supposed to work. Guided setup that doesn\'t require a consultant. Speed.',
      tension: 'These conflict at the margin. Maximum FI configurability means minimum product opinionatedness. A blank canvas that lets FIs customize everything is a canvas that most FIs will configure inconsistently, producing a bad SME experience.',
      solution: 'Our resolution: be opinionated about UX defaults, flexible about configuration. N4B has a clear opinion about how onboarding works, how approval flows are structured, and what default card controls look like. FIs can configure and brand within that opinionated structure, but they can\'t break the core experience.',
      principle: 'FIs aren\'t buying infrastructure. They\'re buying product opinions — the accumulated knowledge of what a good SME financial operations experience looks like. Our job is to have and defend those opinions, while giving FIs enough flexibility to make it theirs.',
    },
    lynq: {
      heading: 'Lynq: N4B in Production',
      body: 'Lynq launched in May 2026 — an all-in-one financial operating system for SMEs, brought to market by Mawarid Finance, a UAE-based Islamic finance and investment group regulated by the Central Bank of the UAE. Lynq runs on NymCard\'s card processing and program management infrastructure.',
      quote: {
        text: 'Lynq is our answer to a gap we consistently saw, where businesses were managing fragmented systems instead of focusing on growth.',
        attribution: 'Rashid AlQubaisi, CEO, Mawarid Finance',
      },
      features: 'Lynq launched with the core financial OS feature set: virtual and physical Mastercard corporate cards, global supplier payments, real-time financial visibility across all company activity, a dedicated virtual IBAN per business, and self-serve digital onboarding. The first cohort of UAE registered businesses can sign up at no cost.',
      architecture: 'Lynq is N4B white-labeled. Mawarid Finance chose Mastercard as the card network, built on NymCard\'s processing infrastructure. The phased feature rollout is deliberate — starting with the highest-value modules (cards, cross-border, centralized visibility) before expanding to the full platform surface.',
      significance: 'Lynq is the public proof point. Every product decision made during N4B development shows up in how Lynq works — the staged onboarding, the spend controls, the real-time visibility. Seeing a regulated FI take it to market forces prioritization clarity that internal planning discussions don\'t.',
    },
    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'B2B2C means two success metrics, not one.',
          detail: 'FI success is measured in deployment completeness, compliance coverage, and time-to-market. SME success is measured in tasks completed, reconciliation time saved, and financial errors avoided. Optimizing for one at the expense of the other produces a product that an FI will buy once and not renew.',
        },
        {
          title: 'Compliance-aware design is sequencing, not reduction.',
          detail: 'In regulated financial products, the compliance requirements are fixed. The design lever is sequence and framing — when do you ask, how do you explain why, and what does the user get before and after. Staged onboarding isn\'t a way to skip KYB. It\'s a way to get users to complete it.',
        },
        {
          title: 'Abstract governance needs concrete UX.',
          detail: 'Approval rule engines, RBAC hierarchies, permission inheritance — these are backend concepts. SME administrators think in terms of outcomes and trust, not conditions and roles. The spec and the UX both have to translate between these two frames of reference. If the configuration UI exposes the data model, administrators will configure it wrong.',
        },
        {
          title: 'Deployment reveals what planning obscures.',
          detail: 'Lynq\'s launch surfaced edge cases and prioritization questions that eighteen months of internal product development hadn\'t. A real FI deploying to real SMEs creates a different quality of feedback than stakeholder reviews and UAT sessions. The earlier you can get a live deployment, the better your product decisions become.',
        },
      ],
    },
    faq: [
      {
        q: 'What is N4B and how does it differ from regular banking?',
        a: 'N4B (Nym4Business) is a white-label Financial Operating System built by NymCard. Unlike a bank, N4B is infrastructure: NymCard builds and maintains the platform, regulated financial institutions brand it and offer it to their SME clients. The FI handles the regulatory relationship with the SME. NymCard handles the technology.',
      },
      {
        q: 'What is Lynq and how does it relate to N4B?',
        a: 'Lynq is the first public deployment of N4B. Launched in May 2026 by Mawarid Finance (a CBUAE-regulated UAE FI), Lynq is N4B white-labeled under Mawarid\'s brand, running on NymCard\'s processing infrastructure with Mastercard as the card network. Lynq is what N4B looks like in the market.',
      },
      {
        q: 'What does "staged KYB onboarding" mean in practice?',
        a: 'Instead of presenting the full compliance requirement upfront (trade license, UBO details, regulatory screening), staged onboarding splits the process into two phases. Phase 1: enough to create an account and explore the product. Phase 2: full compliance collection before account activation. The regulatory requirements are the same — the sequence changes.',
      },
      {
        q: 'How does the approval rule engine work?',
        a: 'Administrators define conditions and assign approvers: "payments over AED 10,000 require approval from the finance lead." The rule engine handles routing and escalation logic. This replaces fixed org-chart-based approval hierarchies with configurable policy rules — better suited to SME governance structures where authority is informal and flat.',
      },
      {
        q: 'What makes this B2B2C and why does it matter for product decisions?',
        a: 'N4B has two customers: the financial institution (direct buyer, distribution partner, compliance owner) and the SME (end user, daily operator). Every product decision has to work for both. FI needs: white-labeling, compliance coverage, configurability. SME needs: simplicity, speed, consistency. The tensions between these shape the product architecture.',
      },
    ],
    cta: {
      heading: 'Interested in BaaS product design?',
      body: 'I write and think about embedded finance, developer-facing products, and the product decisions that shape BaaS platforms. Happy to connect.',
      sidebarLabel: 'Connect',
      linkedInLabel: 'Connect on LinkedIn',
      emailLabel: 'Send an email',
    },
  },
}

export type NymCardContent = typeof content
export const nymcardContent: Record<NymCardLang, NymCardContent> = {
  en: content,
  es: content,
}
