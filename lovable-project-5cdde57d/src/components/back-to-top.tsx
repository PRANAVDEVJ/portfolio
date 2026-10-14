'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        'fixed right-6 bottom-6 z-40 inline-flex size-11 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-all',
        visible ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </a>
  )
}
