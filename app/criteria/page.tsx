import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Criteria — Madison Brand Audit',
  description: 'What we verify, what fails, and why a verdict must be earned. The brand compliance criteria behind every Madison CLEARED, DEFERRED, and REJECT verdict.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '48px' }}>
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
      marginBottom: '16px',
    }}>
      {children}
    </p>
  )
}

function Check({ result, children }: { result: 'pass' | 'fail' | 'note'; children: React.ReactNode }) {
  const color = result === 'pass' ? '#0072B2' : result === 'fail' ? '#D55E00' : '#9E8C6C'
  const icon  = result === 'pass' ? '✓' : result === 'fail' ? '✗' : '→'
  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      padding: '10px 0',
      borderBottom: '1px solid var(--p-border)',
    }}>
      <span style={{ color, fontWeight: 700, flexShrink: 0, width: '16px' }} aria-hidden="true">{icon}</span>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        lineHeight: 1.6,
        color: 'var(--p-ink)',
      }}>
        {children}
      </span>
    </div>
  )
}

export default function CriteriaPage() {
  return (
    <div style={{ background: 'var(--p-bg)', minHeight: '100vh' }}>
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 48px)',
      }}>

        {/* Header */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--hai-blood-red)',
          fontWeight: 700,
          marginBottom: '20px',
        }}>
          Criteria
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          color: 'var(--p-ink)',
          lineHeight: 1.1,
          marginBottom: '24px',
        }}>
          What we verify, what fails,<br />and why a verdict must be earned.
        </h1>
        <Body>
          These are the criteria the Madison brand audit applies — palette, voice, iconography, and claims. The audit toolset is in development; no public run records exist yet. This page documents what each check scores and what triggers a REJECT so the standards are visible before the first audit ships. When verdicts are published, each will cite the run that produced it. Until then, this is the spec.
        </Body>

        <hr style={{ border: 'none', borderTop: '1px solid var(--p-border)', margin: '40px 0' }} />

        <Section title="The palette check">
          <Body>
            Every color in the output is measured against the locked palette definition in the brand constitution. A color is CLEARED if it matches within the defined tolerance. A color that falls outside the palette — even if it looks close — is a REJECT with the specific off-palette value and the nearest locked alternative returned as the fix.
          </Body>
          <Body>
            Colorblind-safe is a required property of every palette entry. If the brand constitution does not declare WCAG contrast ratios for each color pair, the check flags the gap rather than inventing a passing number.
          </Body>
          <div style={{ background: 'var(--p-bg-card)', borderRadius: '6px', padding: '0 16px', border: '1px solid var(--p-border)', marginTop: '16px' }}>
            <Check result="pass">All colors match the locked palette within the declared tolerance</Check>
            <Check result="pass">Colorblind-safe pairs are declared and the output respects them</Check>
            <Check result="fail">A color falls outside the palette without a declared exception</Check>
            <Check result="fail">Contrast ratio undeclared for a color pair used in the output</Check>
          </div>
        </Section>

        <Section title="The voice check">
          <Body>
            We score the output against the voice register declared in the brand constitution — reading level, sentence structure, prohibited phrases, and register (e.g. direct/sardonic vs warm/collegiate). Drift into generic marketing tone is a REJECT, not a DEFERRED.
          </Body>
          <Body>
            A &ldquo;clean&rdquo; voice result means no superlatives, no brand-register violations, and no phrases explicitly prohibited in the constitution. A &ldquo;flagged&rdquo; result means an edge case the automated check cannot score — returned as DEFERRED for human review.
          </Body>
          <div style={{ background: 'var(--p-bg-card)', borderRadius: '6px', padding: '0 16px', border: '1px solid var(--p-border)', marginTop: '16px' }}>
            <Check result="pass">Register matches the declared voice profile throughout</Check>
            <Check result="note">Edge case — needs human review; returned as DEFERRED</Check>
            <Check result="fail">Superlative or prohibited phrase found — specific instance returned with fix</Check>
            <Check result="fail">Register drifts to generic marketing tone not declared in the constitution</Check>
          </div>
        </Section>

        <Section title="The iconography check">
          <Body>
            Iconography style — line weight, fill convention, corner radius, metaphor vocabulary — is scored against the constitution&rsquo;s declared icon style. Stock-icon aesthetics not declared in the constitution are a REJECT. The check returns the specific icon, the declared style it violated, and a prompt for a replacement.
          </Body>
        </Section>

        <Section title="Claims and proof">
          <Body>
            We read the output for quantitative claims. If copy asserts a specific improvement — conversion lift, performance gain, engagement increase — we check whether the backing evidence is stated or the claim is undeclared. Undeclared quantitative claims return DEFERRED for human sign-off. Flat superlatives (&ldquo;the best,&rdquo; &ldquo;industry-leading&rdquo;) with no declared exception are a REJECT.
          </Body>
          <Body>
            Our research background shapes what we look for: baseline visibility, methodology disclosure, claim scope. We apply those standards to the brand assets themselves.
          </Body>
        </Section>

        <Section title="Verdicts">
          <Body>
            Verdicts are derived from the check results, not asserted. A CLEARED verdict requires every scored constraint to pass. A single constraint failure is a REJECT — with the failing constraint and its fix returned. DEFERRED means the check cannot score it automatically and human review is required.
          </Body>
          <div style={{ background: 'var(--p-bg-card)', borderRadius: '6px', padding: '16px 20px', border: '1px solid var(--p-border)', marginTop: '16px' }}>
            {[
              { tier: 'CLEARED', color: '#128263', desc: 'All checked constraints pass — palette in range, voice in register, iconography in style, claims declared.' },
              { tier: 'DEFERRED', color: '#8a6a1f', desc: 'One or more constraints cannot be scored automatically — returned for human review with the specific constraint flagged.' },
              { tier: 'REJECT', color: '#7A0000', desc: 'One or more constraints failed — returned with the specific violation and a corrective fix for each.' },
            ].map(({ tier, color, desc }) => (
              <div key={tier} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--p-border)' }}>
                <p style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '12px', fontWeight: 700, color, letterSpacing: '0.07em', marginBottom: '4px' }}>{tier}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6, color: 'var(--p-ink-soft)', margin: 0 }}>{desc}</p>
              </div>
            ))}
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--p-ink-muted)', margin: 0 }}>
              Every verdict is per-constraint. An asset can CLEAR the palette check and REJECT the voice check in the same run.
            </p>
          </div>
        </Section>

        <Section title="What fails outright">
          <Body>
            These are automatic REJECTs — no partial credit, no DEFERRED fallback:
          </Body>
          <div style={{ background: 'var(--p-bg-card)', borderRadius: '6px', padding: '0 16px', border: '1px solid var(--p-border)' }}>
            <Check result="fail">An off-palette color with no declared exception in the brand constitution</Check>
            <Check result="fail">A superlative or prohibited phrase with no declared exception</Check>
            <Check result="fail">An iconography style not declared in the constitution</Check>
            <Check result="fail">A quantitative claim with no baseline or source stated</Check>
            <Check result="fail">A brand constitution that contradicts itself — flagged before any asset is scored</Check>
          </div>
        </Section>

        <Section title="Why a verdict must be earned">
          <Body>
            Generic AI tools say &ldquo;looks good.&rdquo; Madison does not. The design rule is that a CLEARED verdict requires every scored constraint to pass. If Madison cannot score a constraint it says DEFERRED — it does not round up to CLEARED.
          </Body>
          <Body>
            A brand constitution with three locked constraints and three verified CLEAREDs is more trustworthy than a tool that waves everything through. Madison grows the check list when the verification logic is sound — not to fill a grid.
          </Body>
          <Body>
            The audit system is not yet live. No run records exist to cite today. The criteria on this page are the standard future verdicts will be held to — stated here so the bar is visible and fixed before the first audit ships, not set retroactively to match what was convenient.
          </Body>
          <Body>
            If you want to submit a brand asset for audit or propose a constraint type, contact us. When the system is live, audits will be run on the same criteria and the results published either way.
          </Body>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--p-ink-soft)' }}>
            <a href="mailto:bear@humanitarians.ai" style={{ color: 'var(--p-blue)', textDecoration: 'none' }}>bear@humanitarians.ai</a> — submit for audit
          </p>
        </Section>

        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--p-border)' }}>
          <Link href="/brand-audit" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--p-blue)', textDecoration: 'none' }}>
            ← Back to brand audit
          </Link>
        </div>
      </div>
    </div>
  )
}
