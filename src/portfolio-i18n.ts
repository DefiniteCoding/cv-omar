export type PortfolioLang = 'es' | 'en'

const content = {
  slug: 'portfolio-ai-pm',
  altSlug: 'ai-assisted-pm-portfolio',
  readingTime: '8 min read',
  seo: {
    title: 'Why I Built an AI Portfolio Instead of Updating My LinkedIn | Omar Mostafa',
    description: 'Case study: why LinkedIn wasn\'t enough to represent a technical PM who works with AI tools — and how I built an interactive portfolio with an AI chatbot, voice mode, agentic RAG, and 71 automated evals in 3 days using Claude Code.',
  },
  nav: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'This Portfolio',
  },
  header: {
    kicker: 'Case Study — This Portfolio',
    h1: 'Why I Built an AI Portfolio Instead of Updating My LinkedIn',
    subtitle: 'LinkedIn shows titles and bullet points. It can\'t show how I work with AI tools, the decisions behind my product choices, or who I actually am as a PM. So I built something that could. You\'re using it right now.',
    date: 'May 2026',
  },
  heroMetrics: [
    { value: '3', label: 'Days to Build' },
    { value: '71', label: 'Automated Evals' },
    { value: '6', label: 'Defense Layers' },
    { value: '4', label: 'AI Models' },
    { value: '100%', label: 'Claude Code' },
  ],
  faq: {
    items: [
      { q: 'What is this portfolio built with?', a: 'React 19, TypeScript, Vite, Tailwind CSS, deployed on Netlify. The AI features run on Claude API (Anthropic) for the chatbot and agentic RAG, OpenAI Realtime API for voice mode, and Supabase pgvector for vector search. The ops dashboard and eval pipeline use Langfuse for observability. All backend logic runs as Netlify serverless functions.' },
      { q: 'How long did it take to build?', a: 'Three days. The foundation was a fork of Santiago Fernández\'s open-source portfolio (cv-santiago), which had the architecture I needed — React 19, Claude API integration, voice mode, agentic RAG, and a full eval suite. I directed Claude Code to migrate all content from Santiago\'s profile to mine, adapted the architecture for Netlify deployment (replacing Vercel-specific infrastructure), and added my own case studies. The build was itself a demonstration of AI-assisted development.' },
      { q: 'What can the AI chatbot do?', a: 'It speaks in my voice as a first-person representation of my professional profile. It can answer questions about my experience, projects, product decisions, and approach — drawing on indexed case study content via agentic RAG (Supabase pgvector). It has a 6-layer jailbreak defense system, streams responses via SSE, and every conversation is traced, evaluated, and scored automatically.' },
      { q: 'What is voice mode?', a: 'Voice mode (the mic icon) lets you have a spoken conversation with the AI version of me, powered by OpenAI\'s Realtime API. The voice persona is calibrated to sound natural, not robotic — conversational rhythm, appropriate pauses, genuine enthusiasm about the fintech work. It\'s effectively an interactive introduction call.' },
      { q: 'What are the 71 automated evals?', a: 'An LLM-as-judge evaluation suite that runs on every deployment. It tests factual accuracy (does the bot correctly describe my current role?), persona adherence (is it speaking in first person?), safety (does it protect private information?), RAG quality (are retrieved sources accurate?), boundary handling (does it decline appropriately?), and more. If any test fails, the deploy is blocked. This is the same quality gate I\'d use in a production AI product.' },
      { q: 'Why fork instead of build from scratch?', a: 'A PM decision. Santiago\'s portfolio had solved every hard problem I would have encountered: streaming SSE for chat, WebRTC for voice, pgvector for RAG, Langfuse for observability, a full eval pipeline. Building from scratch would have taken weeks and produced a worse result. The right call was to fork a well-engineered foundation and focus effort on the content and migration — the part that required me, not a blank canvas.' },
    ] as const,
  },
  tldr: 'LinkedIn is a form. It shows what roles I\'ve held, not how I think or what I can build. This portfolio is the alternative: a production AI system that represents my voice, demonstrates my technical fluency with AI tools, and lets you interact with my professional profile directly. Built in 3 days by forking cv-santiago and directing Claude Code to migrate and extend it. The build process is itself the argument.',
  sections: {
    intro: {
      hook: 'A LinkedIn profile has about 300 words of real estate to make a first impression. You get a headline, a summary, a list of job titles and bullet points, and a skills section that everyone has. It\'s a form, not a representation.',
      body: 'For most PMs, that\'s fine. The form communicates the signal. But if the thing you\'re trying to communicate is that you work differently from most PMs — that you prototype with AI tools, that you can direct a codebase without a developer, that you think in systems — the LinkedIn form actively works against you. It flattens everything into the same template. There\'s no way to show the reasoning behind the decisions, the technical fluency that shapes the product thinking, or the voice behind the role.',
      transition: 'So I built something that could. You\'re using it right now.',
    },
    theProblem: {
      heading: 'What LinkedIn Can\'t Show',
      intro: 'LinkedIn is optimised for credentials, not for demonstration. It\'s useful for signaling employment history and professional network. It\'s almost useless for showing how you actually work.',
      gaps: [
        { label: 'Technical fluency.', detail: 'I can read and reason about code, write specs at API level, prototype features with Claude Code and Cursor, and debug integration issues alongside engineers. LinkedIn lets me list "REST APIs" and "Figma" as skills. Anyone can list those. Showing it is different.' },
        { label: 'AI-native workflow.', detail: 'My day-to-day product work involves Claude Code for prototyping, Cursor for exploring codebases, Figma MCP for design context, and custom skills for repetitive tasks. This is how I ship faster than a PM who doesn\'t have these tools. LinkedIn can\'t show a workflow.' },
        { label: 'The decisions behind the work.', detail: 'Every case study in this portfolio describes a specific product decision — staged KYB onboarding, approval rule engines for informal SME governance, right-sizing a product tour tool, negotiating custom pricing with a developer. LinkedIn shows outcomes. This shows the reasoning.' },
        { label: 'Voice and brand.', detail: 'I\'m an Egyptian PM based in Dubai, building fintech infrastructure for MENA markets, who prototypes with AI tools and thinks in systems. That sentence doesn\'t fit in a LinkedIn headline. But a 10-minute interaction with this portfolio communicates it completely.' },
      ],
      punchline: 'The alternative to updating my LinkedIn was building something that did what LinkedIn couldn\'t.',
    },
    theBuild: {
      heading: 'How It Was Built: 3 Days, One Fork, Claude Code',
      forkDecision: {
        heading: 'The Fork Decision',
        body: 'I didn\'t build this from scratch. That was the first PM decision. Santiago Fernández\'s open-source portfolio (cv-santiago) had already solved every difficult engineering problem I would have encountered: streaming SSE for the AI chatbot, WebRTC for voice mode, pgvector for semantic search, Langfuse for observability, a complete eval pipeline with LLM-as-judge scoring. Building from scratch would have taken weeks and produced an inferior result for months.',
        insight: 'The right call was to fork a well-engineered foundation and direct effort at the part that required me: the content migration, the architectural adaptation for my stack, and the case studies. I\'m a PM who works with AI tools. Demonstrating that by spending three weeks reinventing infrastructure that already exists would have been the wrong kind of proof.',
      },
      migrationWork: {
        heading: 'What the Migration Actually Looked Like',
        body: 'The fork gave me the architecture. The migration work was everything else — and it was done almost entirely with Claude Code. Four phases over three days:',
        phases: [
          { label: 'Phase 1 — Identity migration.', detail: 'Every reference to Santiago\'s name, email, location, social links, and domain replaced with mine across 30+ files. Claude Code ran the replacements, I reviewed and corrected edge cases.' },
          { label: 'Phase 2 — Content migration.', detail: 'Professional experience, skills, and project data in the i18n translation files replaced with my NymCard, Tamara, Compound, and Dell timeline. The AI chatbot prompt rewritten in my voice.' },
          { label: 'Phase 3 — AI persona migration.', detail: 'The chatbot system prompt, voice persona, and eval datasets updated to represent me accurately. 71 evals rewritten to test facts about Tamara, NymCard, Loughborough — not Santiago\'s iRepair business.' },
          { label: 'Phase 4 — Infrastructure migration.', detail: 'Vercel configuration replaced with Netlify (netlify.toml, serverless function migration, CSP header updates). Domain references updated throughout the build pipeline.' },
        ],
        meta: 'The migration itself was a demonstration of the skill being claimed. Every file that Claude Code touched was reviewed, corrected, and directed by product judgment — not just accepted output. The AI does the pattern-matching and mechanical work. The PM decides what\'s correct.',
      },
    },
    theSystem: {
      heading: 'What Was Built: A Complete Product, Not a Document',
      body: 'The portfolio is a production system. Not a collection of pages with text about my work — an interactive product with real infrastructure.',
      components: [
        { name: 'AI Chatbot', detail: 'Claude API with streaming SSE. Speaks in first person as me. Agentic RAG: it searches my indexed case studies before responding, so answers are grounded in actual content rather than hallucinated. 6-layer jailbreak defense. Every conversation is traced in Langfuse.' },
        { name: 'Voice Mode', detail: 'OpenAI Realtime API (WebRTC). A spoken conversation with the AI version of me. Voice persona tuned for natural rhythm — not a robotic assistant reading text aloud.' },
        { name: 'Agentic RAG', detail: 'Supabase pgvector for semantic search across case study content. The chatbot searches before responding, not after. This is the difference between a grounded answer and a hallucination.' },
        { name: '71 Automated Evals', detail: 'LLM-as-judge evaluation suite running on every deploy. Tests: factual accuracy, persona adherence, safety, RAG quality, boundary handling, multi-turn consistency. Deploy is blocked if any test fails.' },
        { name: 'Ops Dashboard', detail: 'Internal observability dashboard showing conversation traces, eval results, cost breakdown, and RAG statistics. The same tooling I\'d use to monitor a production AI feature at NymCard or Tamara.' },
        { name: 'Daily Eval Cron', detail: 'A scheduled Netlify function that runs the full eval suite nightly, scores recent conversations with Claude, and sends an alert if jailbreaks or quality degradation are detected.' },
      ],
      point: 'A PM who can build and operate this system has a different relationship with AI-assisted development than one who can describe it in a presentation. The portfolio is the argument.',
    },
    whatItDemonstrates: {
      heading: 'What This Demonstrates',
      body: 'The portfolio makes a specific claim: I\'m a technical PM who works natively with AI tools, can prototype and ship real systems, and thinks in production — not just in slides.',
      proofs: [
        { label: 'AI-assisted prototyping is real.', detail: 'Not "I use ChatGPT." I directed the migration of a complex TypeScript codebase, extended its architecture for a different deployment platform, and added new features — in three days. That\'s what AI-assisted product development looks like at the PM layer.' },
        { label: 'Technical fluency without an engineering title.', detail: 'I understand the architecture of this system well enough to explain it, debug it, and extend it. Not because I wrote every line — because I directed the AI that did, and reviewed what it produced. That\'s the skill.' },
        { label: 'LLMOps is not just an engineering concern.', detail: 'A PM who owns an AI product needs to understand evals, observability, prompt versioning, and cost management. The 71-eval pipeline and Langfuse dashboard aren\'t engineering additions. They\'re the product operating correctly.' },
        { label: 'Eating my own cooking.', detail: 'I built an AI portfolio to demonstrate AI-assisted product work. The portfolio uses the same AI tools to serve recruiters, hiring managers, and collaborators that I use to ship fintech features. The medium is the message.' },
      ],
    },
    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'Don\'t build what already exists well.',
          detail: 'The fork decision saved weeks of work and produced a better result. A PM who reinvents infrastructure to prove they can build is optimizing for the wrong signal. Recognize the right starting point, then focus effort on what only you can provide.',
        },
        {
          title: 'The medium shapes what you can communicate.',
          detail: 'LinkedIn is the right medium for credentials. It\'s the wrong medium for demonstrating how you work. Choosing the right medium for the message is a product decision — even when the product is yourself.',
        },
        {
          title: 'AI-assisted development is a PM skill, not just an engineering one.',
          detail: 'The bottleneck in AI-assisted development isn\'t the model — it\'s the judgment applied to its output. What to build, what to review, what to correct, what to ship. That\'s product thinking. PMs who develop this skill change their relationship with what\'s buildable.',
        },
        {
          title: 'A portfolio that does something is more convincing than one that describes doing things.',
          detail: 'You can read about my fintech PM work in the case studies. You can also talk to the AI version of me, by voice, right now. One of those is more memorable.',
        },
      ],
    },
    cta: {
      heading: 'Want to talk about what this represents?',
      body: 'If you\'re a hiring manager, recruiter, or potential collaborator — the chatbot is the fastest introduction. If you\'d rather talk directly, LinkedIn or email works too.',
      sidebarLabel: 'Connect',
      linkedInLabel: 'Connect on LinkedIn',
      emailLabel: 'Send an email',
    },
  },
}

export type PortfolioContent = typeof content
export const portfolioContent: Record<PortfolioLang, PortfolioContent> = {
  en: content,
  es: content,
}
