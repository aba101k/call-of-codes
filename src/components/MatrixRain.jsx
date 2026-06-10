import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコabcdefghijklmnopqrstuvwxyz{}[]();'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, cols, drops, interval

    const init = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      cols = Math.floor(W / 18)
      drops = Array(cols).fill(1)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#00FF88'
      ctx.font = '14px Space Mono, monospace'
      drops.forEach((y, i) => {
        const c = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(c, i * 18, y * 18)
        if (y * 18 > H && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    init()
    interval = setInterval(draw, 60)
    window.addEventListener('resize', init)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', init)
    }
  }, [])

  return <canvas id="matrix" ref={canvasRef} aria-hidden="true" />
}
