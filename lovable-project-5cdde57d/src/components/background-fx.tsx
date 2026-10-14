'use client'

import { useEffect, useRef } from 'react'

export function BackgroundFx() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 3

    function paint() {
      frame = 0
      spotlightRef.current?.style.setProperty('--x', `${pointerX}px`)
      spotlightRef.current?.style.setProperty('--y', `${pointerY}px`)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`)
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(paint)
    }

    function handlePointerMove(event: PointerEvent) {
      pointerX = event.clientX
      pointerY = event.clientY
      schedule()
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <>
      <div
        ref={progressRef}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div ref={spotlightRef} className="bg-spotlight absolute inset-0" />
      </div>
    </>
  )
}
