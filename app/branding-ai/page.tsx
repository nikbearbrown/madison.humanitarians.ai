import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Branding & AI — Madison',
  description: 'INFO 7375 at Northeastern — the curriculum that produced the Madison tools. Branding theory meets agentic AI in a hands-on course taught by Nik Bear Brown.',
}

export default function BrandingAIPage() {
  return (
    <div style={{ background: 'var(--p-bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 48px)' }}>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hai-blood-red)', fontWeight: 700, marginBottom: '20px' }}>
          Branding & AI
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: 'var(--p-ink)', lineHeight: 1.1, marginBottom: '24px' }}>
          The course that built the tools.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.75, color: 'var(--p-ink-soft)', maxWidth: '620px', marginBottom: '20px' }}>
          INFO 7375 — Branding and AI — is taught by Nik Bear Brown at Northeastern University. The course covers 19 chapters of branding theory (archetypes, JTBD, voice, measurement, ethics) and asks students to build working agentic tools at every step. Those tools are the source of the Madison Skills, auditors, and verifiers listed on this site.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.75, color: 'var(--p-ink-soft)', maxWidth: '620px', marginBottom: '32px' }}>
          The curriculum page — chapter list, assignments, the brand sub-domain taxonomy, and links to the course tools that produced each section — is in development. This page will expand as the course materials are published here.
        </p>

        <div style={{ background: 'var(--p-bg-card)', border: '1px solid var(--p-border)', borderRadius: '10px', padding: '20px 24px', marginBottom: '32px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, color: 'var(--p-ink)', marginBottom: '8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            In development
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--p-ink-soft)', lineHeight: 1.7, margin: 0 }}>
            Course chapter pages, assignment outputs, and the full tool catalog organized by brand sub-domain are being assembled. The 19-chapter arc — from brand strategy and archetypes through measurement, ethics, and crisis — will be surfaced here as pages are ready.
          </p>
        </div>

        <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--p-blue)', textDecoration: 'none' }}>
          ← Back to Roll your own
        </Link>
      </div>
    </div>
  )
}
