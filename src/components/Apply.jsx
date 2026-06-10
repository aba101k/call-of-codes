import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MagneticButton from './MagneticButton'

export default function Apply() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.apply-inner > *', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })

      gsap.from('.apply-h2 span', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: '.apply-h2', start: 'top 75%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="apply" ref={sectionRef}>
      <div className="apply-inner">
        <div className="section-tag section-tag--center">Join The Army</div>
        <h2 className="apply-h2">
          JOIN THE
          <br />
          <span>ARMY.</span>
        </h2>
        <p className="apply-sub">
          Spots for the next cohort are moving fast. DM &quot;CODEARMY&quot; or contact us
          directly. On-site in Kigali or online — your call.
        </p>
        <div className="apply-links">
          <MagneticButton
            href="https://www.instagram.com/call_of_codes/"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 @call_of_codes
          </MagneticButton>
          <MagneticButton href="tel:0793754490" className="btn-outline">
            📞 0793754490
          </MagneticButton>
        </div>
        <div className="apply-contact">
          <a href="mailto:callofcodesarmy@gmail.com">callofcodesarmy@gmail.com</a>
          &nbsp;·&nbsp; Zaria Court Remera / Nyarutarama Deco Center
        </div>
      </div>
    </section>
  )
}
