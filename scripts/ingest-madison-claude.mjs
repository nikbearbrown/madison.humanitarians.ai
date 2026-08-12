#!/usr/bin/env node
/**
 * ingest-madison-claude.mjs
 *
 * Reads the local audit ledger and marketing-relevance.json, then writes
 * data/claude-entries.json — a curated list of CLEARED_STATIC audit records
 * filtered to entries relevant to branding / marketing / advertising.
 *
 * Run from the project root:
 *   node scripts/ingest-madison-claude.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const LEDGER_ROOT = path.resolve(
  ROOT,
  '../github-claude-plugins/ledger/records',
)
const RELEVANCE_PATH = path.join(ROOT, 'data', 'marketing-relevance.json')
const OUTPUT_PATH = path.join(ROOT, 'data', 'claude-entries.json')

// ── Type slug mapping ────────────────────────────────────────────────────────

const TYPE_SLUG_MAP = {
  skill: 'skills',
  plugin: 'plugins',
  'mcp-server': 'mcp-servers',
  command: 'commands',
  agent: 'agents',
}

// "unknown" and others → skip (not included in output)
const VALID_TYPES = new Set(Object.keys(TYPE_SLUG_MAP))

// ── Helpers ──────────────────────────────────────────────────────────────────

function walkDir(dir, results = []) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return results
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(full, results)
    } else if (entry.name === 'audit.json') {
      results.push(full)
    }
  }
  return results
}

function safeRead(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch {
    return null
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

// 1. Load relevance map
if (!fs.existsSync(RELEVANCE_PATH)) {
  console.error(`ERROR: cannot find ${RELEVANCE_PATH}`)
  process.exit(1)
}
const relevanceRaw = JSON.parse(fs.readFileSync(RELEVANCE_PATH, 'utf8'))
const relevanceMap = new Map()
for (const r of relevanceRaw) {
  if (r.relevant === true) {
    relevanceMap.set(r.slug, { category: r.category, reason: r.reason })
  }
}
console.log(`Relevance map: ${relevanceMap.size} relevant slugs`)

// 2. Walk ledger
if (!fs.existsSync(LEDGER_ROOT)) {
  console.error(`ERROR: ledger not found at ${LEDGER_ROOT}`)
  process.exit(1)
}
const auditFiles = walkDir(LEDGER_ROOT)
console.log(`Scanned: ${auditFiles.length} audit.json files`)

// 3. Parse, filter, deduplicate (keep latest audited_at per slug)
const bySlug = new Map()
let totalScanned = 0

for (const filePath of auditFiles) {
  const d = safeRead(filePath)
  if (!d) continue
  totalScanned++

  // Must be schema_version:2 and CLEARED_STATIC
  if (d.schema_version !== 2) continue
  if (d.grade?.grade !== 'CLEARED_STATIC') continue

  const slug = d.meta?.slug
  if (!slug) continue

  // Must be in relevance map
  if (!relevanceMap.has(slug)) continue

  // Must have a known type
  if (!VALID_TYPES.has(d.type)) continue

  const auditedAt = d.meta?.audited_at ?? ''
  const existing = bySlug.get(slug)
  if (!existing || auditedAt > existing.meta.audited_at) {
    bySlug.set(slug, d)
  }
}

console.log(`Relevant CLEARED_STATIC matches (after dedup): ${bySlug.size}`)

// 4. Transform to MadisonEntry
const entries = []

for (const [slug, d] of bySlug) {
  const rel = relevanceMap.get(slug)
  const manifest = d.gate1?.checks?.manifest_data ?? {}
  const owner = d.meta?.owner ?? ''
  const repo = d.meta?.repo ?? ''
  const typeSlug = TYPE_SLUG_MAP[d.type]
  const urlSlug = slug.replace('__', '--')

  const entry = {
    slug,
    urlSlug,
    type: d.type,
    typeSlug,
    category: rel.category,
    marketingReason: rel.reason,
    name: manifest.name ?? repo,
    description: manifest.description ?? '',
    owner,
    repo,
    repoUrl: `https://github.com/${owner}/${repo}`,
    version: manifest.version ?? '',
    keywords: Array.isArray(manifest.keywords) ? manifest.keywords : [],
    auditedDate: d.receipts?.audited_date ?? '',
    commitSha: d.receipts?.commit_sha ?? null,
    portability: d.portability ?? 'unknown',
    coverageLabel: d.coverage?.label ?? '',
    coverageAssessed: Array.isArray(d.coverage?.assessed) ? d.coverage.assessed : [],
    coverageNotAssessed: Array.isArray(d.coverage?.not_assessed) ? d.coverage.not_assessed : [],
    behaviorAssessed: d.grade?.behavior_assessed ?? false,
    tests: Array.isArray(d.tests)
      ? d.tests.map((t) => ({
          name: t.name ?? '',
          by: t.by ?? '',
          state: t.state ?? '',
          result_or_reason: t.result_or_reason ?? '',
        }))
      : [],
    forks: d.adoption?.forks ?? null,
    lastCommit: d.adoption?.last_commit ?? null,
  }

  entries.push(entry)
}

// Sort by name for stable output
entries.sort((a, b) => a.name.localeCompare(b.name))

// 5. Write output
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(entries, null, 2))
console.log(`\nWrote ${entries.length} entries to ${OUTPUT_PATH}`)

// 6. Summary
const byType = {}
const byCat = {}
for (const e of entries) {
  byType[e.typeSlug] = (byType[e.typeSlug] ?? 0) + 1
  byCat[e.category] = (byCat[e.category] ?? 0) + 1
}
console.log('\nBy type:')
for (const [k, v] of Object.entries(byType)) console.log(`  ${k}: ${v}`)
console.log('\nBy category:')
for (const [k, v] of Object.entries(byCat)) console.log(`  ${k}: ${v}`)
