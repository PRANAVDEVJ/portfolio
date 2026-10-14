import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('font-mono text-xs uppercase tracking-[0.2em] text-primary', className)}>{children}</p>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id={`${id}-title`} className="mt-4 font-display text-balance text-5xl leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h2>
          <span className="heading-line" aria-hidden="true" />
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
          )}
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </li>
  )
}
