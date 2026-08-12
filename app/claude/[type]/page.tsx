import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, AlertCircle } from 'lucide-react'
import {
  getEntriesByType,
  getActiveTypes,
  groupByCategory,
} from '@/lib/madison-claude'
import type { MadisonEntry } from '@/types/madison-claude'

interface Props {
  params: Promise<{ type: string }>
}

// ── Static params — only types with ≥1 entry ─────────────────────────────────

export function generateStaticParams() {
  return getActiveTypes().map(({ typeSlug }) => ({ type: typeSlug }))
}

// ── Type metadata ─────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  skills: 'Skills',
  plugins: 'Plugins',
  'mcp-servers': 'MCP Servers',
  commands: 'Commands',
  agents: 'Agents',
}

const TYPE_BLURBS: Record<string, string> = {
  skills:
    'Capability packages that load into Claude as named workflows — task instructions, decision rules, and optional scripts. Skills activate when the user asks a relevant question; no explicit invocation required.',
  plugins:
    'Packaged extensions distributed through the Claude plugin ecosystem. Each plugin ships with a manifest declaring its name, version, description, and keywords, installed via the Claude extension system.',
  'mcp-servers':
    'Model Context Protocol servers expose structured tools and resources to Claude over a local or remote connection. MCP servers let Claude call into external services, APIs, and data stores with a defined schema.',
  commands:
    'Named, reusable canned actions invoked with stable arguments. Commands provide a repeatable execution recipe for common developer or automation tasks.',
  agents:
    'Delegable sub-agent roles with bounded tool grants and defined response formats. Agents handle scoped subtasks on behalf of a parent agent.',
}

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  research: 'Research & Intel',
  productivity: 'Productivity',
  platform: 'Platforms & Tools',
  design: 'Design & Visual',
  data: 'Data & Analytics',
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const label = TYPE_LABELS[type]
  if (!label) return {}
  return {
    title: `${label} — Claude Tools — Madison | Humanitarians AI`,
    description: TYPE_BLURBS[type]?.slice(0, 155) ?? '',
  }
}

// ── Entry card ────────────────────────────────────────────────────────────────

function EntryCard({ entry }: { entry: MadisonEntry }) {
  const href = `/claude/${entry.typeSlug}/${entry.urlSlug}`
  const shownKeywords = entry.keywords.slice(0, 3)

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border bg-background p-6 transition-colors hover:border-primary"
    >
      {/* Name + repo */}
      <div className="mb-2">
        <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
          {entry.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {entry.owner}/{entry.repo}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {entry.description.length > 160
          ? entry.description.slice(0, 160) + '…'
          : entry.description}
      </p>

      {/* Keywords */}
      {shownKeywords.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {shownKeywords.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center rounded border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t">
        <span className="text-xs text-muted-foreground">
          Audited {entry.auditedDate}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
          View <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ClaudeTypePage({ params }: Props) {
  const { type } = await params
  const label = TYPE_LABELS[type]
  if (!label) notFound()

  const typeEntries = getEntriesByType(type)
  if (typeEntries.length === 0) notFound()

  const grouped = groupByCategory(typeEntries)

  return (
    <div className="flex w-full flex-col bg-background text-foreground">

      {/* Hero */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[820px] space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Claude Tools · {label}
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {label}
            </h1>
            <p className="text-lg text-muted-foreground max-w-[640px]">
              {TYPE_BLURBS[type] ?? ''}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {typeEntries.length} entr
              {typeEntries.length === 1 ? 'y' : 'ies'} — filtered for marketing
              and brand teams
            </p>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <div className="container mx-auto px-4 md:px-6 pb-4">
        <div className="rounded-lg border bg-muted p-4 flex gap-3">
          <AlertCircle className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" aria-hidden="true" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Each entry is a <strong className="text-foreground">CLEARED_STATIC</strong> record:
            static checks ran (eligibility, dedup, cloc, secrets, egress, injection,
            required fields). Behavioral execution has not run. No entry implies a
            sandbox test or claim about runtime behavior.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pb-2">
        <p className="text-xs text-muted-foreground">
          <Link href="/claude" className="hover:text-foreground transition-colors">
            Claude Tools
          </Link>
          {' / '}
          {label}
        </p>
      </div>

      {/* Grouped listings */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4 md:px-6 space-y-14">
          {Object.entries(grouped).map(([cat, catEntries]) => (
            <div key={cat}>
              <div className="mb-6">
                <h2 className="text-xl font-bold">
                  {CATEGORY_LABELS[cat] ?? cat}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {catEntries.length} tool{catEntries.length === 1 ? '' : 's'}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catEntries.map((entry) => (
                  <EntryCard key={entry.slug} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <Link
          href="/claude"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All Claude Tools
        </Link>
      </div>
    </div>
  )
}
