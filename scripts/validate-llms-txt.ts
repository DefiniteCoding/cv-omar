/**
 * Build-time validation: checks that llms.txt stays in sync with i18n.ts content.
 *
 * Defines "proof points" — key terms/phrases that MUST appear in llms.txt
 * because they represent real content from the website. When i18n.ts adds
 * new sections or projects, add matching proof points here so the check
 * catches the drift on next build.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/validate-llms-txt.ts
 */

import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// ---------------------------------------------------------------------------
// Proof points: key terms that MUST appear in llms.txt
// Grouped by source section for readable error messages.
// ---------------------------------------------------------------------------

interface ProofPoint {
  /** Where this content lives in the codebase */
  source: string
  /** Terms that must ALL appear in llms.txt (case-insensitive) */
  terms: string[]
}

const PROOF_POINTS: ProofPoint[] = [
  // -- Current role: NymCard --
  {
    source: 'experience → NymCard N4B',
    terms: ['NymCard', 'N4B', 'Nym4Business'],
  },
  {
    source: 'experience → NymCard Lynq',
    terms: ['Lynq'],
  },
  {
    source: 'experience → NymCard BaaS features',
    terms: ['KYB', 'Visa Direct', 'RBAC'],
  },

  // -- Tamara --
  {
    source: 'experience → Tamara Partners Portal',
    terms: ['Partners Portal', 'GuideSail', '30%'],
  },
  {
    source: 'experience → Tamara IDM',
    terms: ['API Developer Reference Portal', '25%'],
  },

  // -- Compound SNBL --
  {
    source: 'experience → Compound',
    terms: ['SNBL', 'Save Now', 'checkout widget'],
  },

  // -- Mondia Pay --
  {
    source: 'experience → Mondia Pay',
    terms: ['carrier billing', 'Mondia'],
  },

  // -- Education --
  {
    source: 'education → Loughborough',
    terms: ['Loughborough'],
  },

  // -- Portfolio project --
  {
    source: 'projects → portfolio evals and defense',
    terms: ['71 automated evals', 'CI gate', '6-layer'],
  },
  {
    source: 'projects → portfolio RAG and voice',
    terms: ['agentic RAG', 'voice mode', 'Langfuse'],
  },

  // -- Life OS --
  {
    source: 'projects → Life OS',
    terms: ['Life OS'],
  },

  // -- AI tooling --
  {
    source: 'skills → AI tooling',
    terms: ['Claude Code', 'Cursor', 'Figma MCP'],
  },

  // -- Case study articles --
  {
    source: 'articles/registry.ts → case studies',
    terms: ['NymCard', 'Tamara', 'Compound'],
  },
]

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const llmsTxtPath = resolve(root, 'public/llms.txt')
let llmsTxt: string

try {
  llmsTxt = readFileSync(llmsTxtPath, 'utf-8').toLowerCase()
} catch {
  console.error(`\n❌ public/llms.txt not found\n`)
  process.exit(1)
}

let errors = 0

for (const pp of PROOF_POINTS) {
  const missing = pp.terms.filter(t => !llmsTxt.includes(t.toLowerCase()))
  if (missing.length > 0) {
    errors++
    console.error(
      `❌ llms.txt missing content from [${pp.source}]:\n` +
      `   Missing terms: ${missing.map(t => `"${t}"`).join(', ')}\n`
    )
  }
}

if (errors > 0) {
  console.error(
    `\n🔴 llms.txt is out of sync — ${errors} section(s) have missing content.\n` +
    `   Update public/llms.txt to include the missing information,\n` +
    `   or add the proof point to scripts/validate-llms-txt.ts if intentionally omitted.\n`
  )
  process.exit(1)
} else {
  console.log('✅ llms.txt is in sync with i18n content')
}
