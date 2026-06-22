import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrambleText from './ScrambleText'
import MagneticButton from './MagneticButton'

const TERMINAL_PHRASES = [
  'CALL_OF_CODES.init()',
  'engineer.enroll()',
  'cohort.start()',
  'skills.push("AI")',
  'career.launch()',
]

const STATS = [
  { value: '20%', label: 'Off 10+ Members' },
  { value: '2×', label: 'On-site + Online' },
]

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-terminal-wrap', { opacity: 0, y: 20, duration: 0.8, delay: 0.3 })
        .from('.hero-line', { opacity: 0, y: 60, duration: 0.9, stagger: 0.15 }, '-=0.4')
        .from('.hero-sub', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-actions > *', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.stat-item', { opacity: 0, y: 30, duration: 0.7, stagger: 0.12 }, '-=0.3')

      gsap.to('.hero-video-bg video', {
        scale: 1.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef}>
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/coc_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-terminal-wrap">
        <ScrambleText phrases={TERMINAL_PHRASES} />
      </div>

      <h1 className="hero-h1">
        <span className="hero-line">CALL</span>
        <span className="hero-line">OF</span>
        <span className="hero-line g">CODES</span>
      </h1>

      <p className="hero-sub">
        Coding made simple. Piece of cake. 🧁 Software Dev · IoT · AI — hands-on training built
        for engineers, not just students.
      </p>

      <div className="hero-actions">
        <MagneticButton href="mailto:callofcodesarmy@gmail.com" className="btn-primary">
          🚀 Apply Now
        </MagneticButton>
        <MagneticButton
          href="https://wa.me/250793754490"
          className="btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 0793754490
        </MagneticButton>
      </div>

      <div className="hero-stats">
        {STATS.map((stat) => (
            <div className="stat-n">{stat.value}</div>
            <div className="stat-l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
