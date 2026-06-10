import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const pos = { x: 0, y: 0 }
    const ringPos = { x: 0, y: 0 }

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.08, ease: 'power2.out' })
    }

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.13
      ringPos.y += (pos.y - ringPos.y) * 0.13
      gsap.set(ring, { x: ringPos.x, y: ringPos.y })
      requestAnimationFrame(tick)
    }

    const onEnter = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.4, duration: 0.3 })
      gsap.to(dot, { scale: 0.5, duration: 0.3 })
    }

    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 0.7, duration: 0.3 })
      gsap.to(dot, { scale: 1, duration: 0.3 })
    }

    window.addEventListener('mousemove', onMove)
    const interactive = document.querySelectorAll('a, button, .magnetic')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
