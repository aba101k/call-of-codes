import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MagneticButton from './MagneticButton'

const BENEFITS = [
  'Official internship signing & stamping',
  'School supervision visits on-site',
  'Experienced engineers — in the game, not wagers',
  'On-site at Zaria Court Remera / Nyarutarama Deco Center',
  'Online sessions available — flexible scheduling',
  'ALX Rwanda partnership — co-program certified',
]

export default function Offer() {
  const sectionRef = useRef(null)
  const codeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.offer-left > *', {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      if (codeRef.current) {
        gsap.from(codeRef.current, {
          opacity: 0,
          x: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: codeRef.current, start: 'top 80%' },
        })

        gsap.to(codeRef.current, {
          y: -30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="offer" ref={sectionRef}>
      <div className="section-tag">The Offer</div>
      <div className="offer-grid">
        <div className="offer-left">
          <h2 className="offer-h2">
            REAL
            <br />
            <span>RESULTS.</span>
            <br />
            REAL CODE.
          </h2>
          <div className="offer-list">
            {BENEFITS.map((item) => (
              <div className="o-item" key={item}>
                <span className="o-check">✓</span>
                {item}
              </div>
            ))}
          </div>
          <div className="offer-price">
            <div className="price-amount">25K</div>
            <div className="price-label">RWF per internship cohort</div>
            <div className="price-disc">20% OFF for groups of 10+</div>
          </div>
          <MagneticButton href="#apply" className="btn-primary">
            DM &quot;CODEARMY&quot; to Apply
          </MagneticButton>
        </div>
        <div className="offer-right">
          <div className="offer-code" ref={codeRef}>
            <span className="code-comment">// Call Of Codes — Boot sequence</span>
            <br />
            <span className="code-green">const</span> <span className="code-white">engineer</span> = {'{'}
            <br />
            &nbsp;&nbsp;<span className="code-green">name</span>: <span className="code-str">&quot;You&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="code-green">stack</span>: [<span className="code-str">&quot;AI&quot;</span>, <span className="code-str">&quot;Mobile&quot;</span>, <span className="code-str">&quot;Web3&quot;</span>],
            <br />
            &nbsp;&nbsp;<span className="code-green">location</span>: <span className="code-str">&quot;Kigali 🇷🇼&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="code-green">ready</span>: <span className="code-green">true</span>
            <br />
            {'};'}
            <br />
            <br />
            <span className="code-green">callOfCodes</span>.enroll(engineer);
            <br />
            <span className="code-comment">// → Building Africa&apos;s engineers</span>
            <br />
            <span className="code-comment">// → Session starts soon...</span>
            <br />
            <span className="code-green">console</span>.log(<span className="code-str">&quot;🧁 Simple. Fast. Ahead.&quot;</span>);
          </div>
        </div>
      </div>
    </section>
  )
}
