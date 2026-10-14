import { ArrowRight, Download, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { Typewriter } from '@/components/typewriter'
import { useMagnetic } from '@/hooks/use-magnetic'
import { Reveal } from '@/components/reveal'
import { downloadFile } from '@/lib/download'
import { site } from '@/lib/site'

const codeLines: { indent: number; tokens: { text: string; tone?: 'kw' | 'type' | 'str' | 'muted' }[] }[] = [
  { indent: 0, tokens: [{ text: '[ApiController]', tone: 'muted' }] },
  { indent: 0, tokens: [{ text: '[Route(', tone: 'muted' }, { text: '"api/brands"', tone: 'str' }, { text: ')]', tone: 'muted' }] },
  {
    indent: 0,
    tokens: [
      { text: 'public class ', tone: 'kw' },
      { text: 'BrandsController', tone: 'type' },
      { text: ' : ControllerBase' },
    ],
  },
  { indent: 0, tokens: [{ text: '{' }] },
  { indent: 1, tokens: [{ text: '[HttpGet]', tone: 'muted' }, { text: ' [Authorize]', tone: 'muted' }] },
  {
    indent: 1,
    tokens: [
      { text: 'public async ', tone: 'kw' },
      { text: 'Task', tone: 'type' },
      { text: '<' },
      { text: 'IActionResult', tone: 'type' },
      { text: '> GetAll()' },
    ],
  },
  { indent: 1, tokens: [{ text: '{' }] },
  {
    indent: 2,
    tokens: [
      { text: 'var ', tone: 'kw' },
      { text: 'brands = ' },
      { text: 'await ', tone: 'kw' },
      { text: '_db.Brands' },
    ],
  },
  { indent: 3, tokens: [{ text: '.Select(b => b.ToDto())' }] },
  { indent: 3, tokens: [{ text: '.ToListAsync();' }] },
  { indent: 2, tokens: [{ text: 'return ', tone: 'kw' }, { text: 'Ok(brands);' }] },
  { indent: 1, tokens: [{ text: '}' }] },
  { indent: 0, tokens: [{ text: '}' }] },
]

const toneClass = {
  kw: 'text-primary',
  type: 'text-foreground font-medium',
  str: 'text-accent-foreground',
  muted: 'text-muted-foreground',
}

function CodeCard() {
  const ref = useRef<HTMLDivElement>(null)
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${x * 10}deg`)
    el.style.setProperty('--rx', `${-y * 10}deg`)
  }
  function onLeave() {
    ref.current?.style.setProperty('--ry', '0deg')
    ref.current?.style.setProperty('--rx', '0deg')
  }
  return (
    <div className="float-slow">
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className="tilt rounded-2xl border border-border bg-card p-2 shadow-[0_30px_80px_-30px_oklch(0.5_0.13_35/0.25)]">
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">BrandsController.cs</span>
        </div>
        <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 text-muted-foreground">
          <code>
            {codeLines.map((line, i) => (
              <span key={i} className="flex">
                <span className="mr-5 w-5 shrink-0 select-none text-right text-border" aria-hidden="true">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.tone ? toneClass[t.tone] : 'text-foreground/80'}>
                      {t.text}
                    </span>
                  ))}
                  {i === codeLines.length - 1 && <span className="caret" aria-hidden="true" />}
                </span>
              </span>
            ))}
          </code>
        </pre>
        <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-xs text-muted-foreground">
          <span>ASP.NET Core · EF Core · JWT</span>
          <span className="text-primary">200 OK</span>
        </div>
      </div>
    </div>
    </div>
  )
}

const headline: { text: string; serif?: boolean }[] = [
  { text: 'Pranav' },
  { text: 'Dev' },
  { text: 'J', serif: true },
]

const roles = ['.NET Developer', 'ASP.NET Core Engineer', 'SQL & Data Enthusiast']

const stack = ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'REST APIs', 'JWT Auth', 'LINQ', 'Git']

export function Hero() {
  const primaryRef = useMagnetic<HTMLAnchorElement>()
  const resumeRef = useMagnetic<HTMLAnchorElement>()
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-24 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
        <div>
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              {site.location}
            </p>
          </Reveal>
          <h1
            id="hero-title"
            aria-label="Pranav Dev J"
            className="mt-6 text-balance text-6xl font-semibold leading-[1] tracking-tight md:text-8xl"
          >
            {headline.map((w, i) => (
              <span key={i} className="word" aria-hidden="true">
                <span
                  className={w.serif ? 'font-display font-normal italic text-primary' : undefined}
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  {w.text}
                </span>
                {i < headline.length - 1 ? '\u00a0' : ''}
              </span>
            ))}
          </h1>
          <p className="mt-5 min-h-[1.4em] font-display text-3xl italic text-primary md:text-4xl">
            <Typewriter words={roles} />
          </p>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {"I'm Pranav, a Computer Science graduate building web applications and secure REST APIs with C#, ASP.NET Core, Entity Framework Core and SQL."}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="relative flex size-1.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Available for full-time opportunities
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                ref={primaryRef}
                href="#projects"
                className="magnetic glow-pulse btn-shine group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                ref={resumeRef}
                href={site.resume}
                download="Pranav_Dev_J_Resume.pdf"
                onClick={(e) => {
                  e.preventDefault()
                  void downloadFile(site.resume, 'Pranav_Dev_J_Resume.pdf')
                }}
                className="magnetic inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Me
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <CodeCard />
        </Reveal>
      </div>
      <div className="marquee overflow-hidden border-y border-border py-5" aria-hidden="true">
        <div className="marquee-track">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 font-display text-3xl italic text-muted-foreground md:text-4xl">
              {t}
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
