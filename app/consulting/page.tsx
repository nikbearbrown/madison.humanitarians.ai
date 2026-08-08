import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consulting — Bear Brown',
  description: 'Bear Brown builds bespoke AI for startups that need to move — as consultant, equity advisor, and talent connector. No bloated retainers. No generalists.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '52px' }}>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(22px, 2.5vw, 28px)',
        fontWeight: 400,
        color: 'var(--p-ink)',
        lineHeight: 1.2,
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid var(--p-border)',
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.75,
      color: 'var(--p-ink-soft)',
      maxWidth: '660px',
      margin: '0 0 16px',
    }}>
      {children}
    </p>
  )
}

function OfferItem({ children, href }: { children: React.ReactNode; href?: string }) {
  const inner = (
    <div style={{
      display: 'flex',
      gap: '12px',
      padding: '12px 0',
      borderBottom: '1px solid var(--p-border)',
    }}>
      <span style={{ color: 'var(--p-blue)', flexShrink: 0, lineHeight: 1.65, fontSize: '14px' }} aria-hidden="true">→</span>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        lineHeight: 1.65,
        color: href ? 'var(--p-blue)' : 'var(--p-ink-soft)',
      }}>
        {children}
      </span>
    </div>
  )

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
        {inner}
      </Link>
    )
  }
  return inner
}

export default function ConsultingPage() {
  return (
    <div style={{ background: 'var(--p-bg)', minHeight: '100vh' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 48px)',
      }}>

        {/* Hero */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--p-terra)',
          marginBottom: '20px',
        }}>
          Consulting
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(34px, 5vw, 52px)',
          fontWeight: 400,
          color: 'var(--p-ink)',
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
          marginBottom: '20px',
        }}>
          Bespoke AI for startups that need to move fast.
        </h1>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(18px, 2vw, 22px)',
          fontStyle: 'italic',
          color: 'var(--p-ink-soft)',
          lineHeight: 1.45,
          marginBottom: '0',
        }}>
          Most AI consultants give you a roadmap and send an invoice. Bear Brown takes equity.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--p-border)', margin: '48px 0' }} />

        {/* What he does */}
        <Section title="What he does">
          <Body>
            Bear Brown builds bespoke AI for startups that need to move — as consultant, equity advisor, and talent connector.
          </Body>
          <div style={{ marginTop: '8px', maxWidth: '660px' }}>
            <OfferItem>Bespoke AI strategy</OfferItem>
            <OfferItem>Hands-on build support</OfferItem>
            <OfferItem>Equity advisor — skin in the game, not a consulting invoice</OfferItem>
            <OfferItem href="/talent">
              A direct line to exceptional recent engineering graduates at entry-level rates
            </OfferItem>
          </div>
        </Section>

        {/* Why it's different */}
        <Section title="Why it's different">
          <Body>
            No bloated retainers. No generalists. Skin in the game, top-tier engineers, and AI that actually ships.
          </Body>
        </Section>

        {/* Who */}
        <Section title="Who">
          <Body>
            As founder of Bear Brown &amp; Company and Associate Teaching Professor of Engineering at Northeastern University — where he leads the AI for Education Project and collaborates with the Broad Institute and Harvard Medical School — he brings rare depth to early-stage AI advising: bespoke AI strategy, hands-on build support, and a direct line to exceptional recent engineering graduates at entry-level rates.
          </Body>
          <Body>
            His research spans machine learning, reinforcement learning, deep learning, and computational biology. His practice spans the gap between research-grade AI and organizations that need it working by next quarter.
          </Body>
          <Body>
            He holds a Ph.D. in computer science from UCLA, a postdoc from Harvard Medical School, and an MBA — and a career's worth of proof that AI doesn't have to be a black box to be brilliant.
          </Body>
        </Section>

        {/* Work with him */}
        <Section title="Work with him">
          <Body>
            Email Nik at{' '}
            <a
              href="mailto:bear@bearbrown.co"
              style={{ color: 'var(--p-blue)', textDecoration: 'none' }}
            >
              bear@bearbrown.co
            </a>
            {' '}— or start at{' '}
            <a
              href="https://bearbrown.co"
              style={{ color: 'var(--p-blue)', textDecoration: 'none' }}
            >
              bearbrown.co
            </a>
            .
          </Body>
        </Section>

        {/* Footer credential */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--p-border)',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'var(--p-ink-muted)',
            lineHeight: 1.6,
          }}>
            Nik Bear Brown, PhD · Associate Teaching Professor, College of Engineering, Northeastern University ·{' '}
            <a href="https://bearbrown.co" style={{ color: 'var(--p-blue)', textDecoration: 'none' }}>bearbrown.co</a>
          </p>
        </div>

      </div>
    </div>
  )
}
