'use client'

import { useEffect, useRef } from 'react'

export default function DnaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return

    const ctx = cv.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let t = 0
    const dpr = window.devicePixelRatio || 1

    const rsz = () => {
      W = cv.offsetWidth
      H = cv.offsetHeight
      cv.width = W * dpr
      cv.height = H * dpr
      ctx.scale(dpr, dpr)
    }

    rsz()
    window.addEventListener('resize', rsz)

    const sparks: any[] = []

    const initSparks = () => {
      sparks.length = 0
      for (let i = 0; i < 80; i++) {
        sparks.push({
          pos: Math.random(),
          strand: Math.floor(Math.random() * 3),
          offset: Math.random() * Math.PI * 2,
          size: Math.random() * 2.5 + 1,
          speed: 0.0004 + Math.random() * 0.0005,
        })
      }
    }

    initSparks()

    const strands = [
      {
        c1: '0,191,255',
        c2: '0,169,157',
        amp: 0.16,
        freq: 2.5,
        phase: 0,
        alpha: 0.25,
        width: 55,
      },
      {
        c1: '107,79,187',
        c2: '155,35,53',
        amp: 0.13,
        freq: 2.8,
        phase: 2.1,
        alpha: 0.2,
        width: 45,
      },
      {
        c1: '0,169,157',
        c2: '107,79,187',
        amp: 0.11,
        freq: 2.2,
        phase: 4.2,
        alpha: 0.18,
        width: 38,
      },
    ]

    const draw = (time: number) => {
      ctx.clearRect(0, 0, W, H)

      const s = time * 0.007

      const angle = Math.PI * 0.22
      const cosA = Math.cos(angle)
      const sinA = Math.sin(angle)

      const diag = Math.sqrt(W * W + H * H)

      strands.forEach((st, si) => {
        const layers = 10

        for (let layer = 0; layer < layers; layer++) {
          const la = st.alpha * (1 - (layer / layers) * 0.7)
          const lw = st.width * (1 - (layer / layers) * 0.6)
          const lo = layer * 0.25

          ctx.beginPath()

          const steps = 100

          for (let i = 0; i <= steps; i++) {
            const pct = i / steps
            const along = pct * diag * 1.3 - diag * 0.15

            const wave = Math.sin(pct * Math.PI * st.freq + s + st.phase + lo) * W * st.amp

            const px = along * cosA - wave * sinA + W * 0.5 + (si - 1) * W * 0.1 * cosA

            const py = along * sinA + wave * cosA + (si - 1) * W * 0.1 * sinA

            if (i === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
          }

          const grad = ctx.createLinearGradient(0, 0, W, H)

          grad.addColorStop(0, `rgba(${st.c1},0)`)
          grad.addColorStop(0.15, `rgba(${st.c1},${la})`)
          grad.addColorStop(0.5, `rgba(${st.c2},${la * 1.3})`)
          grad.addColorStop(0.85, `rgba(${st.c1},${la})`)
          grad.addColorStop(1, `rgba(${st.c2},0)`)

          ctx.strokeStyle = grad
          ctx.lineWidth = lw
          ctx.lineCap = 'round'

          ctx.stroke()
        }
      })

      sparks.forEach((sp, i) => {
        sp.pos += sp.speed

        if (sp.pos > 1.15) sp.pos = -0.15
      })
    }

    let animationFrame: number

    const loop = () => {
      t++
      draw(t)
      animationFrame = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', rsz)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
