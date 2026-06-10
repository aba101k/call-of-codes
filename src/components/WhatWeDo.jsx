import { useStaggerReveal } from '../hooks/useGsapReveal'

const CARDS = [
  {
    icon: '💻',
    title: 'Software Development',
    text: 'Real projects. Real codebases. We train you on industry-grade stacks so you leave with a portfolio, not just a certificate.',
  },
  {
    icon: '🤖',
    title: 'IoT & AI',
    text: 'From connected devices to AI integrations — hands-on labs where you build what you learn, not just read about it.',
  },
  {
    icon: '🏛️',
    title: 'Internships & Training',
    text: 'Official signing and stamping. School supervision visits ready. Experienced engineers who are in the game, not wagers.',
  },
]

export default function WhatWeDo() {
  const gridRef = useStaggerReveal('.w-card')

  return (
    <section id="what">
      <div className="section-tag">What We Do</div>
      <h2 className="what-h2">
        BUILD.
        <br />
        <span>SHIP.</span>
        <br />
        REPEAT.
      </h2>
      <div className="what-grid" ref={gridRef}>
        {CARDS.map((card) => (
          <div className="w-card" key={card.title}>
            <div className="w-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
