import { useEffect, useRef } from 'react'
import { Reveal } from '@/components/reveal'
import { Section, Tag } from '@/components/section'
import { experience } from '@/lib/site'

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = list.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height))
      list.style.setProperty('--p', String(p))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
    }, { rootMargin: '0px 0px -30% 0px' })
    list.querySelectorAll('.timeline-dot').forEach((d) => io.observe(d))
    window.addEventListener('scroll', schedule, { passive: true })
    update()
    return () => { window.removeEventListener('scroll', schedule); io.disconnect(); cancelAnimationFrame(frame) }
  }, [])
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="Hands-on experience with SQL, data pipelines and turning business requirements into technical solutions."
    >
      <ol ref={listRef} className="relative border-l border-border">
        <span className="timeline-line" aria-hidden="true" />
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-14 pl-8 last:pb-0 md:pl-10">
            <span
              className="timeline-dot absolute top-2.5 -left-[6px] size-3 rounded-full border-2 border-background bg-border transition-colors duration-500"
              aria-hidden="true"
            />
            <Reveal delay={i * 80}>
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-10">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{job.company}</h3>
                  <p className="mt-1.5 text-lg text-primary">{job.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{job.focus}</p>
                </div>
                <div className="font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-muted-foreground md:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-4 leading-relaxed text-muted-foreground">
                    <span className="shrink-0 text-primary" aria-hidden="true">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills used">
                {job.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
