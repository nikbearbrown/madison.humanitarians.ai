/**
 * lib/madison-claude.ts
 *
 * Build-time data-access for the Madison /claude section.
 * Reads data/claude-entries.json — a pre-generated, committed file that is
 * regenerated locally by scripts/ingest-madison-claude.mjs.
 *
 * No API calls at build time. No dynamic database hits.
 */

import fs from 'fs'
import path from 'path'
import type { MadisonEntry } from '@/types/madison-claude'

// ── Load data (evaluated once at build time) ──────────────────────────────────

const DATA_PATH = path.join(process.cwd(), 'data', 'claude-entries.json')

function loadEntries(): MadisonEntry[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8')
    return JSON.parse(raw) as MadisonEntry[]
  } catch {
    // Return empty array if file is missing — graceful degradation
    return []
  }
}

// Cache in module scope (Next.js builds are single-process)
let _cache: MadisonEntry[] | null = null

function entries(): MadisonEntry[] {
  if (_cache === null) _cache = loadEntries()
  return _cache
}

// ── Public API ────────────────────────────────────────────────────────────────

/** All 83 marketing-relevant entries, sorted by name. */
export function getAllEntries(): MadisonEntry[] {
  return entries()
}

/** Entries for a given typeSlug (e.g. "skills", "plugins", "mcp-servers"). */
export function getEntriesByType(typeSlug: string): MadisonEntry[] {
  return entries().filter((e) => e.typeSlug === typeSlug)
}

/** Single entry by typeSlug + urlSlug. */
export function getEntry(
  typeSlug: string,
  urlSlug: string,
): MadisonEntry | undefined {
  return entries().find((e) => e.typeSlug === typeSlug && e.urlSlug === urlSlug)
}

// ── Type navigation ───────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  skills: 'Skills',
  plugins: 'Plugins',
  'mcp-servers': 'MCP Servers',
  commands: 'Commands',
  agents: 'Agents',
}

/**
 * Returns type slugs that have at least one entry — sorted by count descending.
 * Used for nav links, generateStaticParams, and index page cards.
 */
export function getActiveTypes(): {
  typeSlug: string
  label: string
  count: number
}[] {
  const counts = new Map<string, number>()
  for (const e of entries()) {
    counts.set(e.typeSlug, (counts.get(e.typeSlug) ?? 0) + 1)
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([typeSlug, count]) => ({
      typeSlug,
      label: TYPE_LABELS[typeSlug] ?? typeSlug,
      count,
    }))
}

// ── Category grouping ─────────────────────────────────────────────────────────

/**
 * Groups entries by category for display.
 * Preserves order: content, research, productivity, platform, design, data.
 */
export function groupByCategory(
  entries: MadisonEntry[],
): Record<string, MadisonEntry[]> {
  const ORDER = [
    'content',
    'research',
    'productivity',
    'platform',
    'design',
    'data',
  ]
  const result: Record<string, MadisonEntry[]> = {}
  for (const cat of ORDER) {
    const items = entries.filter((e) => e.category === cat)
    if (items.length > 0) result[cat] = items
  }
  // catch-all for any unexpected categories
  for (const e of entries) {
    if (!ORDER.includes(e.category)) {
      result[e.category] = result[e.category] ?? []
      result[e.category].push(e)
    }
  }
  return result
}
