import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { skillGroups } from '@/lib/site'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="The stack I've used across my internship and projects."
    >
      <dl className="border-t border-border">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="grid gap-4 border-b border-border py-7 md:grid-cols-[16rem_1fr] md:gap-8">
              <dt className="pt-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">{group.title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item, j) => (
                    <li
                      key={item}
                      style={{ '--d': `${j * 50}ms` } as React.CSSProperties}
                      className="pop cursor-default rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
