import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Guidebook Template — Madison',
  description:
    'The Madison Brand Guidebook: a 32-page InDesign brand guidelines template you adapt by asking Claude. Watch the walkthrough, browse every page, download the .idml and .indd.',
}

// ─── Bear Brown palette (canonical: bearbrown_co/CLAUDE.md) ──────────────────
const C = {
  brown: '#8B3A0F',
  dark: '#1a0a00',
  cream: '#F0E6D0',
  page: '#FBF7EF',
  ink: '#3D3929',
  tan: '#C8A96E',
  honey: '#E8A020',
  inkFade: 'rgba(61,57,41,0.14)',
  inkLine: 'rgba(61,57,41,0.22)',
}

const SIG = '/guidebook/bear_brown.svg'
const MONO = '/guidebook/appvdlyanxl.svg'

// ─── mini-page building blocks (cqw units scale with the card) ───────────────

function PageCard({ n, label, children, dark = false }: {
  n: number; label: string; children: React.ReactNode; dark?: boolean
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        containerType: 'inline-size',
        position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden',
        background: dark ? C.dark : C.page, borderRadius: '10px',
        border: '1px solid var(--p-border)', boxShadow: '0 10px 34px rgba(26,10,0,0.10)',
      }}>
        {/* running header / footer chrome, as in the file */}
        <div style={{ position: 'absolute', top: '4%', left: '5%', fontFamily: 'var(--font-sans)', fontSize: '1.5cqw', letterSpacing: '0.22em', color: dark ? C.cream : C.ink, opacity: 0.6 }}>BEARBROWN.CO</div>
        <div style={{ position: 'absolute', top: '4%', right: '5%', fontFamily: 'var(--font-sans)', fontSize: '1.5cqw', letterSpacing: '0.22em', color: dark ? C.cream : C.ink, opacity: 0.6 }}>NIK BEAR BROWN</div>
        <div style={{ position: 'absolute', bottom: '4%', left: '5%', fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', letterSpacing: '0.3em', color: dark ? C.cream : C.ink, opacity: 0.45 }}>GUIDELINES</div>
        <div style={{ position: 'absolute', bottom: '4%', right: '5%', fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', letterSpacing: '0.3em', color: dark ? C.cream : C.ink, opacity: 0.45 }}>NIK BEAR BROWN GUIDELINES</div>
        {children}
      </div>
      <figcaption style={{ marginTop: '10px', display: 'flex', gap: '12px', alignItems: 'baseline', fontFamily: 'var(--font-sans)' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color: C.brown }}>{String(n).padStart(2, '0')}</span>
        <span style={{ fontSize: '13px', color: 'var(--p-ink-soft)' }}>{label}</span>
      </figcaption>
    </figure>
  )
}

const Lorem = ({ lines, width = 100, dark = false }: { lines: number[]; width?: number; dark?: boolean }) => (
  <div style={{ width: `${width}%` }}>
    {lines.map((w, i) => (
      <div key={i} style={{ height: '0.9cqw', background: dark ? C.cream : C.ink, opacity: dark ? 0.3 : 0.16, marginBottom: '1.1cqw', width: `${w * 100}%` }} />
    ))}
  </div>
)

const Serif = ({ size, color = C.ink, style, children }: { size: string; color?: string; style?: React.CSSProperties; children: React.ReactNode }) => (
  <div style={{ fontFamily: 'var(--font-serif)', fontSize: size, fontWeight: 700, color, lineHeight: 1.08, ...style }}>{children}</div>
)

// ─── the 32 pages ────────────────────────────────────────────────────────────

function Cover() {
  return (
    <>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '15%', background: C.brown }} />
      <div style={{ position: 'absolute', left: '23%', top: '22%' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.7cqw', letterSpacing: '0.35em', color: C.ink, opacity: 0.65 }}>GUIDELINES PRESENTATION</div>
        <Serif size="10.5cqw" style={{ marginTop: '2cqw' }}>BRAND</Serif>
        <Serif size="10.5cqw" color={C.brown}>GUIDELINE</Serif>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6cqw', letterSpacing: '0.25em', color: C.ink, opacity: 0.65, marginTop: '2.4cqw' }}>PRESENTED BY</div>
        <img src={SIG} alt="Bear Brown signature" style={{ width: '26cqw', marginTop: '1cqw' }} />
      </div>
    </>
  )
}

function CoverAlt() {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={SIG} alt="Bear Brown signature" style={{ width: '42cqw' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '16%', width: '100%', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '1.7cqw', letterSpacing: '0.4em', color: C.ink, opacity: 0.7 }}>
        BRAND GUIDELINE · TEMPLATE
      </div>
    </>
  )
}

function Welcome() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '20%' }}>
        <Serif size="7cqw">WELCOME</Serif>
        <div style={{ marginTop: '2.5cqw', width: '30cqw' }}><Lorem lines={[1, 0.95, 1, 0.7]} /></div>
      </div>
      <div style={{ position: 'absolute', right: '6%', top: '16%', width: '38%', background: '#FFFFFF', border: `1px solid ${C.inkLine}`, padding: '3cqw' }}>
        <img src={SIG} alt="" style={{ width: '16cqw' }} />
        <Serif size="3cqw" style={{ marginTop: '1.6cqw' }}>Nik Bear Brown</Serif>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6cqw', fontWeight: 600, color: C.brown, marginTop: '0.5cqw' }}>Founder, Bear Brown</div>
        {[['TEAMWORK', 1], ['SKILLS', 0.8], ['CRAFT', 0.6]].map(([l, w]) => (
          <div key={l as string} style={{ marginTop: '1.6cqw' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2cqw', letterSpacing: '0.12em', color: C.ink, opacity: 0.65, marginBottom: '0.5cqw' }}>{l}</div>
            <div style={{ height: '0.9cqw', background: C.inkFade }}>
              <div style={{ height: '100%', width: `${(w as number) * 100}%`, background: C.brown }} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Contents() {
  const rows = ['THE BRAND', 'LOGO', 'COLOR PALETTE', 'TYPOGRAPHY', 'ONLINE', 'STATIONERY', 'IMAGERY', 'INFO']
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '20%' }}>
        <Serif size="6.5cqw">CONTENT</Serif>
      </div>
      <div style={{ position: 'absolute', left: '36%', top: '15%', right: '7%' }}>
        {rows.map((r, i) => (
          <div key={r} style={{ display: 'flex', gap: '2cqw', alignItems: 'baseline', padding: '1cqw 0', borderBottom: `1px solid ${C.inkFade}` }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.7cqw', fontWeight: 700, color: C.brown, width: '4cqw' }}>{`0${i + 1}.`}</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6cqw', fontWeight: 700, color: C.ink }}>{r}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function QuotePage() {
  return (
    <div style={{ position: 'absolute', inset: '18% 12%', display: 'flex', alignItems: 'center' }}>
      <div>
        <div style={{ width: '8cqw', height: '0.6cqw', background: C.brown, marginBottom: '2.5cqw' }} />
        <Serif size="4.2cqw" style={{ lineHeight: 1.35, textTransform: 'uppercase' as const }}>
          A brand is a small system of repeated decisions — this book is where they get decided once.
        </Serif>
      </div>
    </div>
  )
}

function Divider({ a, b, num }: { a: string; b?: string; num: string }) {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '30%' }}>
        <Serif size="12cqw" color={C.cream}>{a}</Serif>
        {b && <Serif size="12cqw" color={C.brown}>{b}</Serif>}
      </div>
      <div style={{ position: 'absolute', right: '8%', bottom: '14%', fontFamily: 'var(--font-serif)', fontSize: '5cqw', fontWeight: 700, color: C.cream, opacity: 0.5 }}>{num}</div>
      <img src={MONO} alt="" style={{ position: 'absolute', right: '7%', top: '10%', width: '12cqw', opacity: 0.35, filter: 'invert(1)' }} />
    </>
  )
}

function LogoMain() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '18%', width: '32%' }}>
        <Serif size="5cqw">BRAND LOGO.</Serif>
        <div style={{ marginTop: '2cqw' }}><Lorem lines={[1, 0.9, 1, 0.6]} /></div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4cqw', letterSpacing: '0.25em', fontWeight: 700, color: C.brown, marginTop: '3cqw' }}>ELEMENTS KEY</div>
      </div>
      <div style={{ position: 'absolute', right: '6%', top: '18%', width: '46%', height: '58%', background: '#FFFFFF', border: `1px solid ${C.inkLine}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.6cqw' }}>
        <img src={SIG} alt="" style={{ width: '28cqw' }} />
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', letterSpacing: '0.18em', color: C.ink, opacity: 0.65 }}>EVERY LISTING TESTED. EVERY VERDICT SHOWN.</div>
      </div>
    </>
  )
}

function LogoKey() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '16%' }}>
        <Serif size="4.5cqw">KEY ELEMENTS</Serif>
      </div>
      {[
        { x: '10%', mark: SIG, w: '22cqw', label: 'PRIMARY · THE SIGNATURE' },
        { x: '55%', mark: MONO, w: '13cqw', label: 'SECONDARY · THE MONOGRAM' },
      ].map((m) => (
        <div key={m.label} style={{ position: 'absolute', left: m.x, top: '34%', width: '35%', height: '44%', background: '#FFFFFF', border: `1px solid ${C.inkLine}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.4cqw' }}>
          <img src={m.mark} alt="" style={{ width: m.w }} />
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', letterSpacing: '0.14em', fontWeight: 700, color: C.ink }}>{m.label}</div>
        </div>
      ))}
    </>
  )
}

function LogoSecondary() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '16%' }}>
        <Serif size="4.5cqw">SECONDARY <span style={{ color: C.brown }}>MARK</span></Serif>
        <div style={{ marginTop: '2cqw', width: '30cqw' }}><Lorem lines={[1, 0.85, 0.5]} /></div>
      </div>
      <div style={{ position: 'absolute', right: '10%', top: '24%', width: '34%', aspectRatio: '1', background: C.dark, borderRadius: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={MONO} alt="" style={{ width: '20cqw', filter: 'invert(0.94)' }} />
      </div>
      <div style={{ position: 'absolute', left: '10%', bottom: '18%', display: 'flex', gap: '2cqw', alignItems: 'flex-end' }}>
        {[9, 6, 4].map((w) => <img key={w} src={MONO} alt="" style={{ width: `${w}cqw` }} />)}
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', color: C.ink, opacity: 0.6, marginLeft: '1cqw' }}>legible at every size</span>
      </div>
    </>
  )
}

function ColorKey() {
  const sw = [C.dark, C.brown, C.honey, C.tan]
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '16%' }}>
        <Serif size="4.5cqw">COLOR <span style={{ color: C.brown }}>THEME</span></Serif>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4cqw', letterSpacing: '0.2em', color: C.ink, opacity: 0.6, marginTop: '1cqw' }}>ELEMENTS KEY · 01 02 03 04</div>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '38%', display: 'flex', gap: '2.5cqw' }}>
        {sw.map((c, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ aspectRatio: '1.1', background: c, borderRadius: '4%' }} />
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4cqw', fontWeight: 700, color: C.ink, marginTop: '1cqw' }}>Color {['One', 'Two', 'Three', 'Four'][i]}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function ColorTints() {
  const sw: Array<[string, string]> = [['COLOR ONE', C.dark], ['COLOR TWO', C.brown], ['COLOR THREE', C.honey], ['COLOR FOUR', C.tan]]
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.5cqw">BRAND COLOR.</Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '34%' }}>
        {sw.map(([name, c]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '2cqw', marginBottom: '2cqw' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4cqw', fontWeight: 700, color: C.ink, width: '14cqw', letterSpacing: '0.1em' }}>{name}</span>
            {[0.4, 0.6, 0.8, 1].map((t) => (
              <div key={t} style={{ flex: 1, height: '4.5cqw', background: c, opacity: t, borderRadius: '3px', position: 'relative' }}>
                <span style={{ position: 'absolute', bottom: '0.4cqw', right: '0.8cqw', fontFamily: 'var(--font-sans)', fontSize: '1.1cqw', color: t > 0.5 ? C.cream : C.ink }}>{t * 100}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

function BrandSystem() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.2cqw">BRAND <span style={{ color: C.brown }}>SYSTEM</span></Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '34%', display: 'flex', gap: '2.5cqw' }}>
        {['BRAND SYSTEM', 'BRAND MANAGEMENT', 'BRAND OPPORTUNITY'].map((t, i) => (
          <div key={t} style={{ flex: 1, background: i === 1 ? C.brown : '#FFFFFF', border: `1px solid ${C.inkLine}`, padding: '2.5cqw', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5cqw', fontWeight: 700, letterSpacing: '0.1em', color: i === 1 ? C.cream : C.ink }}>{t}</div>
            <div style={{ marginTop: '1.6cqw' }}><Lorem lines={[1, 0.9, 0.95, 0.6]} dark={i === 1} /></div>
          </div>
        ))}
      </div>
    </>
  )
}

function TypeSpecimen() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.5cqw">TYPOGRAPHY</Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', bottom: '14%' }}>
        <Serif size="20cqw" style={{ lineHeight: 0.95 }}>AaBb</Serif>
      </div>
      <div style={{ position: 'absolute', right: '8%', top: '38%', textAlign: 'right' }}>
        <Serif size="3.6cqw" color={C.brown}>Boston</Serif>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6cqw', color: C.ink, opacity: 0.7, marginTop: '1cqw' }}>Pt — 60<br />Primary Typeface · Default Weight</div>
      </div>
    </>
  )
}

function TypePrimary() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.2cqw">PRIMARY <span style={{ color: C.brown }}>TYPEFACE</span></Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '36%' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '4.6cqw', fontWeight: 700, color: C.ink, lineHeight: 1.35 }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '4.6cqw', color: C.ink, lineHeight: 1.35 }}>
          abcdefghijklmnopqrstuvwxyz
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.4cqw', color: C.brown, marginTop: '1cqw' }}>0123456789 !@#$%&*()</div>
      </div>
    </>
  )
}

function TripleType() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.2cqw">TRIPLE <span style={{ color: C.brown }}>TYPEFACE</span></Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '32%' }}>
        {[['5cqw', 700, 'DISPLAY'], ['3.4cqw', 400, 'BODY'], ['2.2cqw', 400, 'CAPTION']].map(([s, w, role], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '1.4cqw 0', borderBottom: `1px solid ${C.inkFade}` }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: s as string, fontWeight: w as number, color: C.ink }}>AaBbCc 012 — the quick brown fox</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', fontWeight: 700, letterSpacing: '0.2em', color: C.brown }}>{role as string}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function OnlinePost() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '16%', width: '28%' }}>
        <Serif size="4.5cqw">ONLINE.</Serif>
        <div style={{ marginTop: '2cqw' }}><Lorem lines={[1, 0.9, 0.95, 0.55]} /></div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4cqw', letterSpacing: '0.2em', fontWeight: 700, color: C.brown, marginTop: '2.5cqw' }}>POST STYLE.</div>
      </div>
      <div style={{ position: 'absolute', right: '6%', top: '14%', display: 'flex', gap: '2.5cqw' }}>
        {[C.brown, C.dark, C.tan].map((c, i) => (
          <div key={i} style={{ width: '16cqw', height: '30cqw', maxHeight: '62cqh', background: '#FFFFFF', border: `1px solid ${C.inkLine}`, borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ height: '46%', background: c, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={MONO} alt="" style={{ width: '8cqw', filter: i === 2 ? 'none' : 'invert(0.94)' }} />
            </div>
            <div style={{ padding: '1.2cqw' }}><Lorem lines={[0.85, 1, 0.6]} /></div>
          </div>
        ))}
      </div>
    </>
  )
}

function MediaKit() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '16%' }}>
        <Serif size="4.5cqw">MEDIA KIT <span style={{ color: C.brown }}>2026</span></Serif>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4cqw', letterSpacing: '0.25em', color: C.ink, opacity: 0.6, marginTop: '1cqw' }}>WORK WISH · POWERED BY BEAR BROWN</div>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '40%', display: 'flex', gap: '2.5cqw' }}>
        {['01', '02'].map((n, i) => (
          <div key={n} style={{ flex: 1, background: i ? C.dark : '#FFFFFF', border: `1px solid ${C.inkLine}`, borderRadius: '5px', padding: '2.5cqw' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.4cqw', fontWeight: 700, color: i ? C.cream : C.brown }}>{n}</span>
            <div style={{ marginTop: '1.4cqw' }}><Lorem lines={[1, 0.9, 0.95, 0.7]} dark={!!i} /></div>
          </div>
        ))}
      </div>
    </>
  )
}

function Stationery() {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.5cqw">STATIONERY.</Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', top: '38%', width: '30%', aspectRatio: '1.75', background: C.brown, borderRadius: '4px', boxShadow: '0 1.4cqw 3.5cqw rgba(26,10,0,0.3)', padding: '2cqw' }}>
        <img src={MONO} alt="" style={{ width: '9cqw', filter: 'invert(0.94)' }} />
        <div style={{ position: 'absolute', bottom: '2cqw', left: '2cqw', fontFamily: 'var(--font-sans)', fontSize: '1.3cqw', color: C.cream }}>
          <b>Nik Bear Brown</b><br />Founder, Bear Brown · bearbrown.co
        </div>
      </div>
      <div style={{ position: 'absolute', left: '43%', top: '22%', width: '22%', height: '62%', background: '#FFFFFF', border: `1px solid ${C.inkLine}`, padding: '2cqw', boxShadow: '0 1.4cqw 3.5cqw rgba(26,10,0,0.14)' }}>
        <img src={SIG} alt="" style={{ width: '9cqw' }} />
        <div style={{ marginTop: '1.6cqw' }}><Lorem lines={[1, 0.9, 1, 0.75, 1, 0.5]} /></div>
      </div>
      <div style={{ position: 'absolute', right: '6%', top: '42%', width: '24%', aspectRatio: '1.7', background: C.cream, border: `1px solid ${C.inkLine}`, boxShadow: '0 1.4cqw 3.5cqw rgba(26,10,0,0.16)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '46%', background: 'rgba(61,57,41,0.08)', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
        <img src={MONO} alt="" style={{ position: 'absolute', bottom: '1.4cqw', right: '1.6cqw', width: '6cqw' }} />
      </div>
    </>
  )
}

function StationeryDetail({ note }: { note: string }) {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%', width: '34%' }}>
        <Serif size="4.5cqw">STATIONERY.</Serif>
        <div style={{ marginTop: '2cqw' }}><Lorem lines={[1, 0.9, 0.95, 0.7]} /></div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5cqw', color: C.brown, fontWeight: 600, marginTop: '2cqw', fontStyle: 'italic' }}>{note}</div>
      </div>
      <div style={{ position: 'absolute', right: '7%', top: '20%', width: '44%', display: 'flex', gap: '2.5cqw' }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ flex: 1, aspectRatio: '0.62', background: i ? C.dark : '#FFFFFF', border: `1px solid ${C.inkLine}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={MONO} alt="" style={{ width: '8cqw', filter: i ? 'invert(0.94)' : 'none' }} />
          </div>
        ))}
      </div>
    </>
  )
}

function Imagery({ withNote }: { withNote?: boolean }) {
  return (
    <>
      <div style={{ position: 'absolute', left: '7%', top: '14%' }}>
        <Serif size="4.5cqw">IMAGERY.</Serif>
      </div>
      <div style={{ position: 'absolute', left: '7%', right: '7%', top: '34%', bottom: '16%', display: 'flex', gap: '2.5cqw' }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ flex: 1, background: 'rgba(61,57,41,0.05)', border: `2px dashed ${C.inkLine}`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
            {withNote && i === 1 && (
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6cqw', letterSpacing: '0.1em', color: C.ink, opacity: 0.7, textAlign: 'center', width: '75%' }}>
                PLACE PRODUCT OR BRAND IMAGES HERE TO SHOW YOUR IMAGE STYLE.
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function Contact() {
  return (
    <>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '38%', background: C.dark, padding: '6cqw 4cqw' }}>
        <Serif size="6cqw" color={C.cream}>CONTACT.</Serif>
        <img src={SIG} alt="" style={{ width: '20cqw', marginTop: '4cqw', filter: 'invert(0.94)' }} />
      </div>
      <div style={{ position: 'absolute', left: '46%', top: '30%', fontFamily: 'var(--font-sans)', fontSize: '1.9cqw', color: C.ink, lineHeight: 2 }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3cqw', fontWeight: 700 }}>Bear Brown</div>
        30 N Gould St Ste N, Sheridan, WY 82801<br />
        <span style={{ color: C.brown, fontWeight: 600 }}>bearbrown.co</span><br />
        bear@bearbrown.co
      </div>
    </>
  )
}

function ThankYou() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Serif size="12cqw" color={C.cream}>THANK</Serif>
      <Serif size="12cqw" color={C.brown}>YOU.</Serif>
    </div>
  )
}

// ─── page manifest: all 32 pages of brand-guidebook-000 ──────────────────────

const PAGES: Array<{ label: string; dark?: boolean; el: React.ReactNode }> = [
  { label: 'Cover — Brand Guideline, presented by Nik Bear Brown', el: <Cover /> },
  { label: 'Cover alternate — the signature plate', el: <CoverAlt /> },
  { label: 'Welcome — who this book belongs to', el: <Welcome /> },
  { label: 'Contents — the eight sections', el: <Contents /> },
  { label: 'Section intro — the argument for a guidebook', el: <QuotePage /> },
  { label: 'Divider — 02 · Logo', dark: true, el: <Divider a="LOGO" num="2.0" /> },
  { label: 'Brand logo — the mark, tagline, and elements key', el: <LogoMain /> },
  { label: 'Key elements — primary signature vs secondary monogram', el: <LogoKey /> },
  { label: 'Secondary mark — the BB monogram at every size', el: <LogoSecondary /> },
  { label: 'Divider — 03 · Color', dark: true, el: <Divider a="COLOR." num="3.0" /> },
  { label: 'Color theme — the four brand colors', el: <ColorKey /> },
  { label: 'Brand color — tint ladders 40 / 60 / 80 / 100', el: <ColorTints /> },
  { label: 'Brand system, management, opportunity', el: <BrandSystem /> },
  { label: 'Color theme — elements key variant', el: <ColorKey /> },
  { label: 'Divider — 04 · Typography', dark: true, el: <Divider a="TYPO" b="GRAPHY." num="4.0" /> },
  { label: 'Typography — the specimen (Boston, 60 pt)', el: <TypeSpecimen /> },
  { label: 'Primary typeface — full character set', el: <TypePrimary /> },
  { label: 'Triple typeface — display, body, caption', el: <TripleType /> },
  { label: 'Divider — 05 · Online', dark: true, el: <Divider a="ONLINE" num="5.0" /> },
  { label: 'Online — post styles', el: <OnlinePost /> },
  { label: 'Media kit 2026 — work wish', el: <MediaKit /> },
  { label: 'Online post — media kit layouts', el: <MediaKit /> },
  { label: 'Online post — post style variants', el: <OnlinePost /> },
  { label: 'Divider — 06 · Stationery', dark: true, el: <Divider a="STATION" b="ERY." num="6.0" /> },
  { label: 'Stationery — business card, letterhead, envelope', el: <Stationery /> },
  { label: 'Stationery — card variants', el: <StationeryDetail note="two grounds, one mark" /> },
  { label: 'Stationery — “space can be reduced based on design type”', el: <StationeryDetail note="space can be reduced based on design type." /> },
  { label: 'Divider — 07 · Imagery', dark: true, el: <Divider a="IMAGERY" num="7.0" /> },
  { label: 'Imagery — photography style frames', el: <Imagery /> },
  { label: 'Imagery — place product or brand images here', el: <Imagery withNote /> },
  { label: 'Contact — 08 · Info', el: <Contact /> },
  { label: 'Thank you', dark: true, el: <ThankYou /> },
]

// ─── the page ────────────────────────────────────────────────────────────────

export default function BrandGuidelinesPage() {
  return (
    <div style={{ background: 'var(--p-bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 48px)' }}>

        {/* ── top card ── */}
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--hai-blood-red)', fontWeight: 700, marginBottom: '20px' }}>
          Brand Guidelines Template
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--p-ink)', lineHeight: 1.1, marginBottom: '24px' }}>
          Thirty-two pages. Every decision a brand makes. Yours by asking.
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start', background: 'var(--p-bg-card)', border: '1px solid var(--p-border)', borderRadius: '14px', padding: 'clamp(24px, 3vw, 40px)', marginBottom: '64px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.75, color: 'var(--p-ink-soft)', marginTop: 0 }}>
              The Madison Brand Guidebook is a complete InDesign brand guidelines document —
              logo system, color palette, typography, social, stationery, imagery, and contact —
              with every page a brand might need already laid out. The worked example on every
              page below is the Bear Brown identity; the placeholder structure underneath is yours.
              Delete the pages you don&apos;t need. That&apos;s the customization.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.75, color: 'var(--p-ink-soft)' }}>
              You never have to learn InDesign: the <code>.idml</code> file is zipped XML, which
              means Claude can rename, re-color, and re-brand the whole document for you.
              InDesign is just the export button.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '24px' }}>
              <a href="/guidebook/brand-guidebook-000.idml" download style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, color: 'var(--p-bg)', background: 'var(--p-ink)', padding: '12px 22px', borderRadius: '8px', textDecoration: 'none' }}>
                ↓ brand-guidebook-000.idml
              </a>
              <a href="/guidebook/brand-guidebook-000.indd" download style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, color: 'var(--p-ink)', border: '1px solid var(--p-border-strong)', padding: '12px 22px', borderRadius: '8px', textDecoration: 'none' }}>
                ↓ brand-guidebook-000.indd
              </a>
              <a href="/guidebook/brand-guidebook-000.pdf" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, color: 'var(--p-ink)', border: '1px solid var(--p-border-strong)', padding: '12px 22px', borderRadius: '8px', textDecoration: 'none' }}>
                brand-guidebook-000.pdf
              </a>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--p-ink-muted)', marginTop: '14px' }}>
              .idml — the file Claude edits (also opens in any InDesign version and Affinity Publisher).
              .indd — the native InDesign master. .pdf — just want to look? Every page, no software.
            </p>
          </div>
          <div>
            <video
              controls
              preload="metadata"
              style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '10px', background: C.dark, border: '1px solid var(--p-border)' }}
              poster="/guidebook/brand-guidebook-poster.png"
            >
              <source src="/guidebook/brand-guidebook-explainer.mp4" type="video/mp4" />
              Your browser doesn&apos;t support embedded video.
            </video>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--p-ink-muted)', marginTop: '10px' }}>
              The walkthrough: what&apos;s on every page, and the one prompt that adapts it to your brand.
            </p>
          </div>
        </div>

        {/* ── the 32 pages ── */}
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--p-ink)', marginBottom: '8px' }}>
          Every page in the file
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--p-ink-soft)', maxWidth: '640px', marginBottom: '36px' }}>
          HTML recreations of all 32 pages of <code>brand-guidebook-000.idml</code>, in the Bear
          Brown palette with the real marks — so you know exactly what you&apos;re downloading
          before you open anything.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(460px, 100%), 1fr))', gap: '36px 28px' }}>
          {PAGES.map((p, i) => (
            <PageCard key={i} n={i + 1} label={p.label} dark={p.dark}>
              {p.el}
            </PageCard>
          ))}
        </div>

        {/* ── the prompt ── */}
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--p-ink)', margin: '72px 0 12px' }}>
          Make it yours
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.75, color: 'var(--p-ink-soft)', maxWidth: '640px', marginBottom: '16px' }}>
          Download the .idml, give it to Claude (Cowork or Claude Code) with this prompt, fill in
          the brackets, and open the file it returns in InDesign — activate fonts if asked, then
          File → Export → PDF.
        </p>
        <pre style={{ background: 'var(--p-ink)', color: 'var(--p-bg)', borderRadius: '10px', padding: '20px 24px', fontSize: '12.5px', lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', marginBottom: '48px' }}>
{`In this folder is brand-guidebook-000.idml, an InDesign IDML brand guidebook
template. Make me a customized copy named brand-guidebook-MINE.idml:

- Replace the name "Nik Bear Brown" everywhere with: [YOUR NAME]
- Replace the website "bearbrown.co" / "BEARBROWN.CO" with: [YOUR SITE]
- Replace the email "bear@bearbrown.co" with: [YOUR EMAIL]
- Replace the title "Founder, Bear Brown" with: [YOUR TITLE]
- Replace the contact-page address with: [YOUR ADDRESS or "leave placeholder"]
- Change the accent palette from Bear Brown brown (#8B3A0F) to: [YOUR HEX]

Rules for editing the IDML safely:
- It is a zip archive: unzip it, edit the XML, re-zip with the "mimetype" file
  as the FIRST entry, stored uncompressed (zip -X out.idml mimetype -0, then
  add the rest).
- All visible text lives in <Content>...</Content> elements inside
  Stories/*.xml. XML-escape any & < > characters.
- Keep each replacement roughly the same length as the original (within ~25%)
  so frames don't overflow.
- Colors live in Resources/Graphic.xml as ColorValue attributes — re-map the
  accent family tint-preserving, not just the exact accent value.
- Validate every changed XML file parses; verify the zip with unzip -t.

When done, list every replacement you made and anything you could not find.`}
        </pre>

        <div>
          <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--p-blue)', textDecoration: 'none' }}>
            ← Back to Madison
          </Link>
        </div>
      </div>
    </div>
  )
}
