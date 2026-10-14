import { ArrowUpRight, Mail } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { site } from '@/lib/site'

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '')

const channels: {
  label: string
  value: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  external?: boolean
}[] = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: 'LinkedIn', value: stripProtocol(site.linkedin), href: site.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: stripProtocol(site.github), href: site.github, icon: GithubIcon, external: true },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something useful."
      description="I'm open to .NET and backend developer roles. The fastest way to reach me is email."
    >
      <Reveal>
        <div className="gradient-border mx-auto max-w-2xl">
        <ul className="px-6 md:px-10">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label} className="border-b border-border last:border-b-0">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-5 py-5"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
                  <span className="break-all transition-colors group-hover:text-primary">{value}</span>
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        </div>
      </Reveal>
    </Section>
  )
}
