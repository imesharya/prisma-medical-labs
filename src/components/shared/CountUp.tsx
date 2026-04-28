'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type CountUpProps = {
  end: string
  duration?: number
}

export default function CountUp({ end, duration = 1000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const parsed = useMemo(() => {
    const match = end.match(/(\d+(?:[.,]\d+)?)/)

    if (!match) {
      return {
        target: 0,
        format: () => end,
      }
    }

    const raw = match[0]
    const target = Number(raw.replace(/,/g, ''))

    return {
      target,
      format: (value: number) => end.replace(raw, Math.floor(value).toLocaleString()),
    }
  }, [end])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null

    const animate = (time: number) => {
      if (!startTime) startTime = time

      const progress = Math.min((time - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 2)

      setCount(parsed.target * easeOut)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, parsed.target, duration])

  return <span ref={ref}>{parsed.format(count)}</span>
}
