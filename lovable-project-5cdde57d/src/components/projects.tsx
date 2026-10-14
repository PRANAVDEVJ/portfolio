import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { Reveal } from '@/components/reveal'
import { Section, Tag } from '@/components/section'
import { projects, type Project } from '@/lib/site'
import { cn } from '@/lib/utils'

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    const k = featured ? 4 : 7
    el.style.setProperty('--ry', `${x * k}deg`)
    el.style.setProperty('--rx', `${-y * k}deg`)
  }
  function onLeave() {
    ref.current?.style.setProperty('--ry', '0deg')
    ref.current?.style.setProperty('--rx', '0deg')
  }
  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        'card-lift tilt-card flex h-full flex-col rounded-2xl border border-border bg-card',
        featured ? 'p-8 md:p-10' : 'p-8',
      )}
    >
      <div className="flex flex-wrap items-center gap-3">
        {featured && (
          <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-foreground">
            Featured
          </span>
        )}
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.category}</p>
      </div>
      <h3
        className={cn(
          'mt-5 text-balance font-semibold tracking-tight',
          featured ? 'max-w-3xl text-3xl md:text-4xl' : 'text-xl',
        )}
      >
        {project.title}
      </h3>
      <p
        className={cn(
          'mt-4 text-pretty leading-relaxed text-muted-foreground',
          featured ? 'max-w-2xl text-lg' : 'flex-1',
        )}
      >
        {project.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </ul>
      <a
        href={project.demo ?? project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link mt-8 inline-flex w-fit items-center gap-1.5 text-sm text-primary hover:underline"
      >
        View project
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" aria-hidden="true" />
        <span className="sr-only">{`: ${project.title}`}</span>
      </a>
    </article>
  )
}

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="Backend APIs, full-stack MVC apps and a machine learning simulation. Open a project to see the code."
    >
      <div className="flex flex-col gap-6">
        <Reveal>
          {featured && <ProjectCard project={featured} featured />}
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={(i + 1) * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
