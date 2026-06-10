import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomCursor from './components/CustomCursor'
import MatrixRain from './components/MatrixRain'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhatWeDo from './components/WhatWeDo'
import Program from './components/Program'
import Offer from './components/Offer'
import Team from './components/Team'
import Apply from './components/Apply'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <>
      <MatrixRain />
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatWeDo />
        <Program />
        <Offer />
        <Team />
        <Apply />
      </main>
      <Footer />
    </>
  )
}
