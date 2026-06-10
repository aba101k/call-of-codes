import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useGsapReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          ease: options.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [options.y, options.duration, options.ease, options.start])

  return ref
}

export function useStaggerReveal(selector, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll(selector)
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: options.y ?? 32 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          stagger: options.stagger ?? 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: options.start ?? 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, container)

    return () => ctx.revert()
  }, [selector, options.y, options.duration, options.stagger, options.start])

  return ref
}
