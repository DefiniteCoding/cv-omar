/**
 * Fetches current GitHub repo stats and updates:
 * 1. GitHubRepoBadge components in article pages (stars="X" forks="Y")
 * 2. Project cards in i18n.ts (stars: 'X', forks: 'Y')
 * Runs as part of the build pipeline.
 *
 * Usage: npx tsx scripts/update-github-stats.ts
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const I18N_PATH = resolve(__dirname, '../src/i18n.ts')

interface BadgeConfig {
  owner: string
  repo: string
  file: string
  label: string
}

// Repos with GitHubRepoBadge in article components
const BADGE_REPOS: BadgeConfig[] = []

// Repos with stars/forks in i18n.ts project cards.
// `extraLinks` allows matching cards that link to a custom domain (e.g. career-ops.org)
// instead of github.com/owner/repo.
interface I18nRepo {
  owner: string
  repo: string
  label: string
  extraLinks?: string[]
}
const I18N_REPOS: I18nRepo[] = [
  { owner: 'DefiniteCoding', repo: 'cv-omar', label: 'cv-omar (i18n)' },
]

function formatCount(n: number): string {
  if (n >= 1000) {
    const k = n / 1000
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`
  }
  return String(n)
}

const statsCache = new Map<string, { stars: number; forks: number }>()

async function fetchGitHubStats(owner: string, repo: string): Promise<{ stars: number; forks: number } | null> {
  const key = `${owner}/${repo}`
  if (statsCache.has(key)) return statsCache.get(key)!

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'User-Agent': 'cv-omar-build/1.0',
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
    })
    if (!res.ok) {
      console.warn(`  ⚠ GitHub API returned ${res.status} for ${key}`)
      return null
    }
    const data = await res.json()
    const result = { stars: data.stargazers_count, forks: data.forks_count }
    statsCache.set(key, result)
    return result
  } catch (err) {
    console.warn(`  ⚠ GitHub fetch failed:`, (err as Error).message)
    return null
  }
}

async function main() {
  console.log('⭐ Updating GitHub stats...\n')

  let anyChanged = false

  // 1. Update GitHubRepoBadge components in article pages
  for (const repo of BADGE_REPOS) {
    const filePath = resolve(__dirname, '..', repo.file)
    let content: string
    try {
      content = readFileSync(filePath, 'utf-8')
    } catch {
      console.log(`  ⏭ ${repo.label}: file not found`)
      continue
    }

    const repoPattern = `repo="${repo.owner}/${repo.repo}"`
    if (!content.includes(repoPattern)) {
      console.log(`  ⏭ ${repo.label}: no GitHubRepoBadge found`)
      continue
    }

    const stats = await fetchGitHubStats(repo.owner, repo.repo)
    if (!stats) continue

    const s = formatCount(stats.stars)
    const f = formatCount(stats.forks)

    const badgeRegex = new RegExp(
      `(repo="${repo.owner}/${repo.repo}"\\s+stars=")[^"]+("\\s+forks=")[^"]+(")`,
    )
    const newContent = content.replace(badgeRegex, `$1${s}$2${f}$3`)

    if (newContent !== content) {
      writeFileSync(filePath, newContent, 'utf-8')
      anyChanged = true
      console.log(`  ✓ ${repo.label}: ${s} stars, ${f} forks`)
    } else {
      console.log(`  ⏭ ${repo.label}: no changes (${s} stars, ${f} forks)`)
    }
  }

  // 2. Update stars/forks in i18n.ts project cards
  let i18n = readFileSync(I18N_PATH, 'utf-8')
  let i18nChanged = false

  for (const repo of I18N_REPOS) {
    const stats = await fetchGitHubStats(repo.owner, repo.repo)
    if (!stats) continue

    const s = formatCount(stats.stars)
    const f = formatCount(stats.forks)

    // Match blocks that contain the repo link/github and update stars/forks within.
    // Build alternation of all valid link patterns: github.com/owner/repo, owner/repo, or any extraLinks.
    const ghPattern = `${repo.owner}/${repo.repo}`
    const allLinks = [ghPattern, ...(repo.extraLinks ?? [])]
    if (!allLinks.some((l) => i18n.includes(l))) {
      console.log(`  ⏭ ${repo.label}: not found in i18n.ts`)
      continue
    }

    const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // For ghPattern, allow optional `github.com/` prefix; for extraLinks match literally.
    const linkAlternation = [
      `(?:github\\.com\\/)?${escape(ghPattern)}`,
      ...(repo.extraLinks ?? []).map(escape),
    ].join('|')

    // Find blocks with this repo (via link: or github: field) and update the stars line.
    // Allow up to 5 intermediate `key: value,` lines between link/github and stars
    // (e.g. linkUrl, caseStudyUrl, badge, etc.).
    const intermediate = `(?:\\s+\\w+: [^\\n]+,\\n){0,5}`
    const blockRegex = new RegExp(
      `((?:link|github): '(?:${linkAlternation})',\\n${intermediate}\\s+stars: ')[^']+(')`,
      'g',
    )
    let newI18n = i18n.replace(blockRegex, `$1${s}$2`)

    // Update forks if present (must come on the line right after stars)
    if (stats.forks > 0) {
      const forksRegex = new RegExp(
        `((?:link|github): '(?:${linkAlternation})',\\n${intermediate}\\s+stars: '[^']+',\\n\\s+forks: ')[^']+(')`,
        'g',
      )
      newI18n = newI18n.replace(forksRegex, `$1${f}$2`)
    }

    if (newI18n !== i18n) {
      i18n = newI18n
      i18nChanged = true
      console.log(`  ✓ ${repo.label}: ${s} stars${stats.forks > 0 ? `, ${f} forks` : ''}`)
    } else {
      console.log(`  ⏭ ${repo.label}: no changes (${s} stars)`)
    }
  }

  if (i18nChanged) {
    writeFileSync(I18N_PATH, i18n, 'utf-8')
    anyChanged = true
  }

  if (anyChanged) {
    console.log('\n✅ GitHub stats updated')
  } else {
    console.log('\n⏭ No changes needed')
  }
}

main()
