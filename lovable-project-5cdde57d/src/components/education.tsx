import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Eyebrow, Section } from '@/components/section'
import { certifications, education } from '@/lib/site'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <article className="card-lift h-full rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <GraduationCap className="size-4" aria-hidden="true" />
              Degree
            </p>
            <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight md:text-3xl">{education.degree}</h3>
            <p className="mt-3 text-lg text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-muted-foreground">{education.location}</p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.15em]">
              <span className="text-muted-foreground">{education.period}</span>
              <span className="text-primary">{education.grade}</span>
            </div>
          </article>
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow className="text-muted-foreground">Certifications</Eyebrow>
          <ul className="mt-5 border-t border-border">
            {certifications.map((cert) => (
              <li key={cert.title} className="flex gap-4 border-b border-border py-5">
                <Award className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium leading-snug">{cert.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
