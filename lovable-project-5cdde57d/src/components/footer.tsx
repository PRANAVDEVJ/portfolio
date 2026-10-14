import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{site.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <ul className="flex gap-6 text-sm text-muted-foreground">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                Email
              </a>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground">{`© 2026 ${site.name}`}</p>
        </div>
      </div>
    </footer>
  )
}
