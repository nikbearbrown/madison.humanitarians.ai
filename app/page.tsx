import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, CircleAlert, CircleCheck, Eye, Layers3, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Madison — Brand-governed creative tooling | Humanitarians AI',
  description: 'Encode your brand once, compose the tools that generate against it, and verify every output before it ships.',
}

const layers = [
  {
    icon: Layers3,
    eyebrow: 'Govern',
    title: 'The brand constitution',
    body: 'Encode palette, voice, and iconography once. Load the same rules into every session instead of retyping them.',
  },
  {
    icon: Wrench,
    eyebrow: 'Execute',
    title: 'The creative tools',
    body: 'Use Cowork, Claude Code, and the design connectors already in your workflow to make the work.',
  },
  {
    icon: Eye,
    eyebrow: 'Verify',
    title: 'The brand audit',
    body: 'Score every output against the constitution and return a visible verdict before anything ships.',
  },
]

const steps = [
  ['Load your brand constitution.', 'Bring your palette, voice register, and iconography rules—or start from a template and lock them.'],
  ['Add the creative tools you use.', 'Connect the tools that make decks, assets, copy, and campaigns.'],
  ['Verify before it ships.', 'Check palette, voice, and iconography independently, with a reason for every verdict.'],
  ['Fix, don\'t guess.', 'A rejected asset comes back with the exact constraint it broke and how to correct it.'],
]

const verdicts = [
  {
    icon: CircleCheck,
    label: 'CLEARED',
    body: 'Meets every locked constraint: colors are in-palette, voice is in-register, and iconography is in-style.',
  },
  {
    icon: Eye,
    label: 'DEFERRED',
    body: 'Needs human judgment or context the asset does not carry. Madison says so instead of inventing certainty.',
  },
  {
    icon: CircleAlert,
    label: 'REJECT',
    body: 'Breaks a locked constraint. The asset is returned with the specific failure and a concrete fix.',
  },
]

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-background text-foreground">
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-6 lg:col-span-2">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  A Humanitarians AI project
                </p>
                <h1 className="max-w-[900px] text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
                  Make with AI. Ship with judgment.
                </h1>
                <p className="max-w-[760px] text-lg text-muted-foreground md:text-xl">
                  Madison is brand-governed creative tooling. Encode your brand once—palette, voice, iconography—then compose the tools that generate against it and verify every output before it ships.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[420px]:flex-row">
                <Link href="#roll" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Roll your own toolchain
                </Link>
                <Link href="#audit" className="inline-flex h-11 items-center justify-center rounded-md border border-silver bg-background px-6 text-sm font-semibold transition-colors hover:bg-muted">
                  See the brand audit
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-muted p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Madison checks</p>
              <div className="mt-5 space-y-4">
                {['Palette', 'Voice', 'Iconography'].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <span className="font-medium">{item}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      <Check className="h-4 w-4" aria-hidden="true" /> Checked
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                No silent substitutions. No generic “looks good.” Every verdict is shown.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The gap</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Three layers. Most systems ship only two.</h2>
            <p className="text-lg text-muted-foreground">
              Generation is not governance. Madison separates the rules, the tools, and the judgment required to approve the result.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {layers.map(({ icon: Icon, eyebrow, title, body }) => (
              <article key={title} className="rounded-lg border bg-background p-6">
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roll" className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Roll your own</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter md:text-4xl">Compose a governed toolchain.</h2>
              <p className="mt-4 text-muted-foreground">
                Pick the pieces that fit your work. Madison wires them into one transparent pipeline.
              </p>
            </div>
            <ol className="space-y-0 lg:col-span-2">
              {steps.map(([title, body], index) => (
                <li key={title} className="grid grid-cols-[42px_1fr] gap-4 border-b py-5 first:pt-0">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-1 text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="audit" className="w-full bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The brand audit</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">“Is this on-brand?” Answered, not asserted.</h2>
            <p className="text-lg text-muted-foreground">
              The same discipline as a security audit, pointed at brand. Each locked constraint is checked separately and the verdict stays visible.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {verdicts.map(({ icon: Icon, label, body }) => (
              <article key={label} className="rounded-lg border bg-background p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="font-bold tracking-wide">{label}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border-l-4 border-primary bg-background p-6">
            <p className="font-semibold">The rule that makes Madison trustworthy</p>
            <p className="mt-2 text-muted-foreground">
              Madison never swaps your palette, voice, or icon style because a generic convention says something else “looks better.” When a brief conflicts with a locked rule, Madison surfaces the conflict for human judgment.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-lg border bg-background p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Build your brand’s toolchain.</h2>
              <p className="mt-2 text-muted-foreground">Governed generation, with a verdict before it ships.</p>
            </div>
            <a href="mailto:bear@humanitarians.ai" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline md:mt-0">
              Contact Humanitarians AI <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
