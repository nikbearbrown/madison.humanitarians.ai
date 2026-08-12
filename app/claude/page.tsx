import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle } from 'lucide-react'
import { getAllEntries, getActiveTypes } from '@/lib/madison-claude'

export const metadata: Metadata = {
  title: 'Claude Tools — Madison | Humanitarians AI',
  description:
    'AI tools for marketing teams, curated. CLEARED_STATIC entries from the Humanitarians AI audit pipeline, filtered for branding, marketing, and advertising relevance.',
}

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  research: 'Research & Intel',
  productivity: 'Productivity',
  platform: 'Platforms & Tools',
  design: 'Design & Visual',
  data: 'Data & Analytics',
}

const TYPE_DESCRIPTIONS: Record<string, string> = {
  skills: 'Capability packages that load into Claude as named workflows — task instructions, decision rules, and optional scripts.',
  plugins:
    'Packaged extensions distributed through the Claude plugin ecosystem with manifest-based installation.',
  'mcp-servers':
    'Model Context Protocol servers — local or remote services that expose structured tools and resources to Claude.',
  commands: 'Named, reusable canned actions invoked by the user with stable arguments.',
  agents: 'Delegable sub-agent roles with bounded tool grants and defined response formats.',
}

export default function ClaudeIndexPage() {
  const allEntries = getAllEntries()
  const activeTypes = getActiveTypes()
  const total = allEntries.length

  // Count by category
  const byCat: Record<string, number> = {}
  for (const e of allEntries) {
    byCat[e.category] = (byCat[e.category] ?? 0) + 1
  }

  return (
    <div className="flex w-full flex-col bg-background text-foreground">

      {/* Hero */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[820px] space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Claude Tools
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
              AI tools for marketing teams, curated.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[680px]">
              {total} tools across skills, plugins, and MCP servers — filtered
              for marketers and brand teams. Every entry is a{' '}
              <span className="font-semibold text-foreground">
                CLEARED_STATIC
              </span>{' '}
              record from the Humanitarians AI audit pipeline: structure, code,
              and static properties verified. Curated from the open-source
              Claude plugin ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Honesty disclosure */}
      <section className="w-full bg-muted py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-lg border border-border bg-background p-6 md:flex md:gap-5">
            <AlertCircle className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm">What &ldquo;audited&rdquo; means here</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Humanitarians AI pipeline runs static checks on every entry:
                eligibility (not a fork, valid manifest), deduplication, line
                counts, secret detection, egress pattern scanning, prompt
                injection detection, and required-field presence. These checks
                are mechanical and run without sandboxed execution.{' '}
                <strong className="text-foreground">
                  Behavioral execution has not run on any entry.
                </strong>{' '}
                No entry here implies a sandbox test, a gVisor run, or any
                claim about how the tool behaves at runtime. The audit verifies
                structure; it does not verify behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Type cards */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3 mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Browse by type</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Three tool types, one pipeline.
            </h2>
            <p className="text-lg text-muted-foreground">
              All verified through the same static audit. Pick the integration
              shape that fits your workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {activeTypes.map(({ typeSlug, label, count }) => (
              <Link
                key={typeSlug}
                href={`/claude/${typeSlug}`}
                className="group rounded-lg border bg-background p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                  {label}
                </p>
                <p className="text-3xl font-bold tracking-tight mb-3">{count}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {TYPE_DESCRIPTIONS[typeSlug] ?? 'Tools in this category.'}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                  Browse {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category breakdown */}
      <section className="w-full bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3 mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">By marketing use case</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Filtered for brand practitioners.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every entry was hand-selected for relevance to branding,
              marketing, and advertising workflows — not general developer
              tooling.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(byCat)
              .sort((a, b) => b[1] - a[1])
              .map(([cat, count]) => (
                <article
                  key={cat}
                  className="rounded-lg border bg-background p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-1">
                    {CATEGORY_LABELS[cat] ?? cat}
                  </p>
                  <p className="text-2xl font-bold">{count} tools</p>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-lg border bg-background p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Build your brand&apos;s toolchain.
              </h2>
              <p className="mt-2 text-muted-foreground">
                Governed generation, with a verdict before it ships.
              </p>
            </div>
            <a
              href="mailto:bear@humanitarians.ai"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline md:mt-0"
            >
              Contact Humanitarians AI{' '}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
