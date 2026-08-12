import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, AlertCircle } from 'lucide-react'
import { getAllEntries, getEntry } from '@/lib/madison-claude'

interface Props {
  params: Promise<{ type: string; slug: string }>
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllEntries().map((e) => ({ type: e.typeSlug, slug: e.urlSlug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params
  const entry = getEntry(type, slug)
  if (!entry) return {}
  return {
    title: `${entry.name} — Claude Tools — Madison | Humanitarians AI`,
    description: entry.description.slice(0, 155),
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  skills: 'Skills',
  plugins: 'Plugins',
  'mcp-servers': 'MCP Servers',
  commands: 'Commands',
  agents: 'Agents',
}

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  research: 'Research & Intel',
  productivity: 'Productivity',
  platform: 'Platforms & Tools',
  design: 'Design & Visual',
  data: 'Data & Analytics',
}

function testStateLabel(state: string): string {
  if (state === 'ran') return 'ran'
  if (state === 'deferred') return 'deferred'
  return 'n/a'
}

function testStateClass(state: string): string {
  if (state === 'ran') return 'text-foreground font-medium'
  return 'text-muted-foreground'
}

function portabilityLabel(p: string): string {
  if (p === 'agent-agnostic') return 'Agent-agnostic'
  if (p === 'mcp-portable') return 'MCP-portable'
  if (p === 'claude-only') return 'Claude-only'
  return p
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ClaudeDetailPage({ params }: Props) {
  const { type, slug } = await params
  const entry = getEntry(type, slug)
  if (!entry) notFound()

  const typeLabel = TYPE_LABELS[type] ?? type
  const ranTests = entry.tests.filter((t) => t.state === 'ran').length
  const totalTests = entry.tests.length

  return (
    <div className="flex w-full flex-col bg-background text-foreground">
      <main className="w-full">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 max-w-5xl">

          {/* Breadcrumb */}
          <p className="text-xs text-muted-foreground mb-8">
            <Link href="/claude" className="hover:text-foreground transition-colors">
              Claude Tools
            </Link>
            {' / '}
            <Link
              href={`/claude/${type}`}
              className="hover:text-foreground transition-colors"
            >
              {typeLabel}
            </Link>
            {' / '}
            {entry.name}
          </p>

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              {typeLabel} · {entry.owner}/{entry.repo}
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              {entry.name}
            </h1>
            {entry.description && (
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[720px] mb-6">
                {entry.description}
              </p>
            )}

            {/* Meta chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center rounded border border-primary px-3 py-1 text-xs font-semibold text-primary">
                {entry.coverageLabel}
              </span>
              <span className="inline-flex items-center rounded border px-3 py-1 text-xs text-muted-foreground">
                {portabilityLabel(entry.portability)}
              </span>
              {entry.version && (
                <span className="inline-flex items-center rounded border px-3 py-1 text-xs text-muted-foreground">
                  v{entry.version}
                </span>
              )}
              <span className="inline-flex items-center rounded border px-3 py-1 text-xs text-muted-foreground">
                {CATEGORY_LABELS[entry.category] ?? entry.category}
              </span>
            </div>

            {/* GitHub button */}
            <a
              href={entry.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 h-11 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View on GitHub
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 items-start">

            {/* Main column */}
            <div className="space-y-10">

              {/* Keywords */}
              {entry.keywords.length > 0 && (
                <section>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                    Keywords
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {entry.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="inline-flex items-center rounded border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Behavior disclosure */}
              {!entry.behaviorAssessed && (
                <section>
                  <div className="rounded-lg border bg-muted p-5 flex gap-4">
                    <AlertCircle className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm mb-2">
                        Behavior was not assessed
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This record is a <strong className="text-foreground">CLEARED_STATIC</strong>{' '}
                        result. The pipeline ran static checks only: eligibility,
                        deduplication, line counts, secret detection, egress
                        pattern scanning, prompt-injection detection, and
                        required-field presence. No sandboxed execution ran. No
                        claim is made about how this tool behaves at runtime.
                        Behavioral assessment is deferred to a future pipeline
                        tier.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Audit: what ran */}
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                  Audit — what the pipeline checked
                </h2>

                {/* Assessed */}
                {entry.coverageAssessed.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Checks that ran</p>
                    <ul className="space-y-1">
                      {entry.coverageAssessed.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="shrink-0 font-bold text-primary" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Not assessed */}
                {entry.coverageNotAssessed.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Checks that did NOT run</p>
                    <ul className="space-y-1">
                      {entry.coverageNotAssessed.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="shrink-0" aria-hidden="true">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Tests table */}
              {entry.tests.length > 0 && (
                <section>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                    Test results ({ranTests} of {totalTests} ran)
                  </h2>
                  <div className="rounded-lg border overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-[140px_80px_1fr] gap-3 bg-muted px-4 py-2.5 border-b">
                      {['Test', 'State', 'Result or reason'].map((h) => (
                        <span
                          key={h}
                          className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    {entry.tests.map((test, i) => (
                      <div
                        key={test.name}
                        className={`grid grid-cols-[140px_80px_1fr] gap-3 px-4 py-3 items-start ${i < entry.tests.length - 1 ? 'border-b' : ''}`}
                      >
                        <span className="font-mono text-xs text-foreground">
                          {test.name}
                        </span>
                        <span className={`text-xs ${testStateClass(test.state)}`}>
                          {testStateLabel(test.state)}
                        </span>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {test.result_or_reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-4">

              {/* Source */}
              <div className="rounded-lg border bg-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
                  Source
                </p>
                <a
                  href={entry.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline break-all"
                >
                  {entry.owner}/{entry.repo}
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </a>
              </div>

              {/* Audit receipts */}
              <div className="rounded-lg border bg-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
                  Audit receipts
                </p>
                <div className="space-y-2">
                  {[
                    ['Date', entry.auditedDate],
                    ['Commit', entry.commitSha ?? 'pending'],
                    ['Execution', 'Static only — no sandbox'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-3 pb-2 border-b last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className="font-mono text-xs text-foreground text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Adoption */}
              <div className="rounded-lg border bg-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
                  Adoption
                </p>
                <div className="space-y-2">
                  {[
                    ['Forks', entry.forks !== null ? String(entry.forks) : '—'],
                    [
                      'Last commit',
                      entry.lastCommit ? entry.lastCommit.slice(0, 10) : '—',
                    ],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-3 pb-2 border-b last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className="text-xs text-foreground text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type + category */}
              <div className="rounded-lg border bg-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
                  Classification
                </p>
                <div className="space-y-2">
                  {[
                    ['Type', typeLabel],
                    ['Category', CATEGORY_LABELS[entry.category] ?? entry.category],
                    ['Portability', portabilityLabel(entry.portability)],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-3 pb-2 border-b last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className="text-xs text-foreground text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>

          {/* Back */}
          <div className="mt-12 pt-8 border-t">
            <Link
              href={`/claude/${type}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Back to {typeLabel}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
