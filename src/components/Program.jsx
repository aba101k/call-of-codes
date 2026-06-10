import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ITEMS = [
  { num: '01', name: 'AI & OpenAI API Integration', tag: 'Featured', featured: true },
  { num: '02', name: 'Mobile Development', tag: 'React Native' },
  { num: '03', name: 'Blockchain & Web3', tag: 'Solidity' },
  { num: '04', name: 'Next.js & Full Stack', tag: 'Frontend + Backend' },
  { num: '05', name: 'Cloud & DevOps', tag: 'AWS / Vercel' },
  { num: '06', name: 'Demo Day — Ship It', tag: 'Finale', featured: true },
]

export default function Program() {
  const sectionRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prog-head > *', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: { trigger: '.prog-head', start: 'top 80%' },
      })

      const items = listRef.current?.querySelectorAll('.prog-item')
      if (items?.length) {
        gsap.from(items, {
          opacity: 0,
          x: -40,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: { trigger: listRef.current, start: 'top 75%' },
        })

        items.forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => item.classList.add('active'),
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="program" ref={sectionRef}>
      <div className="section-tag">The Roadmap</div>
      <div className="prog-head">
        <h2 className="prog-h2">
          PROGRAM
          <br />
          SCHEDULE
        </h2>
        <p className="prog-desc">
          A structured path from fundamentals to deployment. Every session is hands-on. Every
          cohort ships something real.
        </p>
      </div>
      <div className="prog-list" ref={listRef}>
        {ITEMS.map((item) => (
          <div className={`prog-item${item.featured ? ' featured' : ''}`} key={item.num}>
            <div className="prog-num">{item.num}</div>
            <div className="prog-name">{item.name}</div>
            <div className="prog-tag">{item.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
