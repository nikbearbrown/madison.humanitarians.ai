import type { Metadata } from 'next'
import bookData from '@/data/branding-ai-book.json'

export const metadata: Metadata = {
  title: 'Branding and AI — Madison',
  description: bookData.description.slice(0, 155),
}

type Section = (typeof bookData.sections)[number]

function eyebrow(s: Section): string {
  if (s.label) return s.label
  if (s.number !== null) return `Chapter ${s.number}`
  if (s.kind === 'front') return 'Opening'
  if (s.kind === 'back') return 'Closing'
  return s.kind
}

function SectionCard({ s }: { s: Section }) {
  return (
    <article className="rounded-lg border bg-background p-6 flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        {eyebrow(s)}
      </p>
      <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
    </article>
  )
}

function GroupHeading({ label, count }: { label: string; count: number }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <h2 className="text-2xl font-bold tracking-tight">{label}</h2>
      <span className="text-sm text-muted-foreground">{count} section{count !== 1 ? 's' : ''}</span>
    </div>
  )
}

export default function BrandingAIPage() {
  const main = bookData.sections.filter((s) => s.kind === 'front' || s.kind === 'chapter')
  const shipIt = bookData.sections.filter((s) => s.kind === 'appendix')
  const closing = bookData.sections.filter((s) => s.kind === 'back')

  return (
    <div className="flex w-full flex-col bg-background text-foreground">

      {/* Hero */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[820px] space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Branding & AI · A Textbook
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
              {bookData.title}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[680px] italic">
              &ldquo;{bookData.tagline}&rdquo;
            </p>
            <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
              {bookData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main sequence */}
      <section className="w-full bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <GroupHeading label="Chapters" count={main.length} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {main.map((s) => <SectionCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      {/* Ship It appendices */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <GroupHeading label="Ship It" count={shipIt.length} />
          <p className="mb-8 max-w-[640px] text-muted-foreground">
            Four hands-on appendices that turn the argument into a working product on Madison:
            scope it, pipeline it, decide where the AI decides, and deploy it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {shipIt.map((s) => <SectionCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      {/* Closing */}
      {closing.length > 0 && (
        <section className="w-full bg-muted py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <GroupHeading label="Themes" count={closing.length} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {closing.map((s) => <SectionCard key={s.id} s={s} />)}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
