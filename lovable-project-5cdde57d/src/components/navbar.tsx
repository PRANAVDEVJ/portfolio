'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

const iconButton =
  'inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')
  const [bar, setBar] = useState({ left: 0, width: 0, visible: false })
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ids = navLinks.map((l) => l.href)
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current = ids[0] ?? '#top'
      for (const id of ids) {
        const el = document.querySelector(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const place = () => {
      const a = listRef.current?.querySelector<HTMLAnchorElement>(`a[href="${active}"]`)
      if (!a || !listRef.current) return setBar((b) => ({ ...b, visible: false }))
      setBar({ left: a.offsetLeft, width: a.offsetWidth, visible: true })
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors',
        scrolled || open ? 'border-border bg-background/90 backdrop-blur-md' : 'border-transparent bg-background',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          {site.name}
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-7 lg:flex">
          <span className="nav-indicator" aria-hidden="true" style={{ left: bar.left, width: bar.width, opacity: bar.visible ? 1 : 0 }} />
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn('relative text-sm transition-colors hover:text-foreground', active === link.href ? 'text-foreground' : 'text-muted-foreground')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={cn(iconButton, 'hidden sm:inline-flex')}
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={cn(iconButton, 'hidden sm:inline-flex')}
          >
            <LinkedinIcon className="size-4" />
          </a>
          <ThemeToggle className={iconButton} />
          <button
            type="button"
            className={cn(iconButton, 'lg:hidden')}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
