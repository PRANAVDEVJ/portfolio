'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className={className}
      aria-label="Toggle color theme"
      onClick={() => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark'
        const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
        if (doc.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          doc.startViewTransition(() => setTheme(next))
        } else setTheme(next)
      }}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="block size-4 dark:hidden" />
    </button>
  )
}
