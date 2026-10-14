'use client'

import { useEffect } from 'react'

export function ClickEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function handlePointerDown(event: PointerEvent) {
      if (reduceMotion.matches || event.button !== 0) return
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('a, button')
      if (!target || target.hasAttribute('disabled')) return

      const style = getComputedStyle(target)
      if (style.position === 'static') target.style.position = 'relative'
      target.style.overflow = 'hidden'
      target.style.isolation = 'isolate'

      const rect = target.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 2
      const ripple = document.createElement('span')
      ripple.className = 'click-ripple'
      ripple.setAttribute('aria-hidden', 'true')
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`
      target.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true })

      const burst = document.createElement('span')
      burst.className = 'click-burst'
      burst.setAttribute('aria-hidden', 'true')
      burst.style.left = `${event.clientX}px`
      burst.style.top = `${event.clientY}px`
      document.body.appendChild(burst)
      burst.addEventListener('animationend', () => burst.remove(), { once: true })
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return null
}
