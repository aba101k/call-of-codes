import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function ScrambleText({ phrases, interval = 3000 }) {
  const [text, setText] = useState(phrases[0])
  const frameRef = useRef(0)
  const indexRef = useRef(0)

  useEffect(() => {
    let timer

    const scramble = (target) => {
      let iteration = 0
      const max = target.length

      const tick = () => {
        setText(
          target
            .split('')
            .map((_, i) => {
              if (i < iteration) return target[i]
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join(''),
        )
        iteration += 1 / 3
        if (iteration < max) {
          frameRef.current = requestAnimationFrame(tick)
        }
      }

      cancelAnimationFrame(frameRef.current)
      tick()
    }

    const cycle = () => {
      indexRef.current = (indexRef.current + 1) % phrases.length
      scramble(phrases[indexRef.current])
    }

    timer = setInterval(cycle, interval)
    return () => {
      clearInterval(timer)
      cancelAnimationFrame(frameRef.current)
    }
  }, [phrases, interval])

  return (
    <span className="hero-terminal">
      {'> '}
      {text}
      <span className="cursor-blink">_</span>
    </span>
  )
}
