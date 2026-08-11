import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Audit — Madison',
  description: 'The verify layer. Score every creative output against your locked brand constitution and return a CLEARED, DEFERRED, or REJECT verdict — per constraint, with a reason.',
}

export default function BrandAuditPage() {
  return (
    <div style={{ background: 'var(--p-bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 48px)' }}>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hai-blood-red)', fontWeight: 700, marginBottom: '20px' }}>
          Brand Audit
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: 'var(--p-ink)', lineHeight: 1.1, marginBottom: '24px' }}>
          The verify layer — Madison&rsquo;s moat.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.75, color: 'var(--p-ink-soft)', maxWidth: '620px', marginBottom: '20px' }}>
          Every other creative tool helps you make things. The brand audit scores what you made against what you said your brand is — and returns a verdict you can act on. CLEARED means it passes. REJECT comes back with the specific constraint it broke and the fix. DEFERRED means a human needs to look.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.75, color: 'var(--p-ink-soft)', maxWidth: '620px', marginBottom: '32px' }}>
          The auditors are a set of verifier Skills — brand-voice-consistency-auditor, greenwashing-claims-risk-checker, interface-brand-alignment-checker, and more — each scoring one locked constraint per run. The full catalog of auditors and their verdict logic is in development. This page will surface them as they ship.
        </p>

        <div style={{ background: 'var(--p-bg-card)', border: '1px solid var(--p-border)', borderRadius: '10px', padding: '20px 24px', marginBottom: '32px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, color: 'var(--p-ink)', marginBottom: '8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            In development
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--p-ink-soft)', lineHeight: 1.7, margin: 0 }}>
            The brand audit catalog — auditors, their constraint scope, and worked verdict examples — is being assembled from the Madison framework and the INFO 7375 course toolset. Check back as entries are verified and published.
          </p>
        </div>

        <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--p-blue)', textDecoration: 'none' }}>
          ← Back to Roll your own
        </Link>
      </div>
    </div>
  )
}
