import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Guidelines — Madison | Humanitarians AI',
  description: 'Madison brand-guideline resources from Humanitarians AI.',
}

export default function BrandGuidelinesPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Madison · Humanitarians AI
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tighter sm:text-5xl">
            Brand Guidelines
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            The Madison brand-guideline library is being assembled. It will include the brand constitution, palette and typography rules, voice guidance, iconography standards, and reusable guidebook templates.
          </p>

          <div className="mt-10 rounded-lg border bg-muted p-6">
            <p className="font-semibold">In development</p>
            <p className="mt-2 text-muted-foreground">
              This placeholder will be replaced as the guidelines and downloadable resources are reviewed and published.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="inline-flex h-11 items-center justify-center rounded-md border border-silver px-6 text-sm font-semibold transition-colors hover:bg-muted">
              Back to Madison
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
