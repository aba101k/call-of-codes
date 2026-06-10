import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MagneticButton from './MagneticButton'

const LINKS = [
  { href: '#what', label: 'What We Do' },
  { href: '#program', label: 'Program' },
  { href: '#offer', label: 'Offer' },
  { href: '#team', label: 'Team' },
]

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    })
  }, [])

  return (
    <nav ref={navRef}>
      <div className="nav-logo">
        <img src="/coc_logo.png" alt="Call Of Codes" />
      </div>
      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <MagneticButton href="#apply" className="nav-cta">
        Apply Now
      </MagneticButton>
    </nav>
  )
}
