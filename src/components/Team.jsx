import { useStaggerReveal } from '../hooks/useGsapReveal'

const MEMBERS = [
  {
    role: 'Creative & Managing Director',
    handle: '@aba101k',
    skill: 'A1A — Creative Tech Ecosystem',
  },
  {
    role: 'Board Member',
    handle: '@bahizi_11',
    skill: 'Engineering & Operations',
  },
  {
    role: 'Board Member',
    handle: '@comscat',
    skill: 'Technology & Infrastructure',
  },
]

export default function Team() {
  const gridRef = useStaggerReveal('.t-card', { y: 40, stagger: 0.15 })

  return (
    <section id="team">
      <div className="section-tag">The Army</div>
      <h2 className="team-h2">
        BOARD OF
        <br />
        MEMBERS
      </h2>
      <div className="team-grid" ref={gridRef}>
        {MEMBERS.map((member) => (
          <div className="t-card" key={member.handle}>
            <div className="t-role">{member.role}</div>
            <div className="t-handle">{member.handle}</div>
            <div className="t-skill">{member.skill}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
