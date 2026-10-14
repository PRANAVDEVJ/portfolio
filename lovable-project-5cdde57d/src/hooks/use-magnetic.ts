import { useEffect, useRef } from 'react'

/** Pulls an element slightly toward the cursor when it is nearby. */
export function useMagnetic<T extends HTMLElement>(strength = 0.3, radius = 90) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    function onMove(e: PointerEvent) {
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) / 2 + radius
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transform = near ? `translate(${dx * strength}px, ${dy * strength}px)` : ''
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [strength, radius])
  return ref
}
