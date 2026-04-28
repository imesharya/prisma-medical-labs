'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  direction?: Direction
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 700,
  distance = 32,
  direction = 'up',
  className = '',
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`
      case 'down':
        return `translateY(-${distance}px)`
      case 'left':
        return `translateX(${distance}px)`
      case 'right':
        return `translateX(-${distance}px)`
      case 'none':
        return 'none'
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (once) observer.disconnect()
      } else if (!once) {
        setIsVisible(false)
      }
    })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`transition ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
      }}
    >
      {children}
    </div>
  )
}
