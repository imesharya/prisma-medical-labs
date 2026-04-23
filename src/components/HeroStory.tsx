'use client'

import React, { useEffect, useState } from 'react'

type Story = {
  id: string
  number: string
  text: React.ReactNode
  icon: React.ReactNode
  color: string
}

const stories: Story[] = [
  {
    id: '1',
    number: '01',
    color: '#2bb673',
    text: (
      <>
        <strong>صحتك قصة متكاملة</strong>
        <br />
        ودنا نفهمها صح
      </>
    ),
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path d="M12 6.25c-3.5 0-7 2.5-9.5 5.75 2.5 3.25 6 5.75 9.5 5.75s7-2.5 9.5-5.75C19 8.75 15.5 6.25 12 6.25z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: '2',
    number: '02',
    color: '#3a7ca5',
    text: (
      <>
        أسئلة بسيطة تبني لك <strong>خطة رعاية دقيقة</strong>
        <br />
        مبنية على أحدث البراهين الطبية
      </>
    ),
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" />
        <path d="M14 9l-1 2h2l-1 2" />
      </svg>
    ),
  },
  {
    id: '3',
    number: '03',
    color: '#2bb673',
    text: (
      <>
        كل تفصيلة تشاركها معنا
        <br />
        <strong>تقربنا خطوة من صحتك المثالية</strong>
      </>
    ),
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
]

export default function HeroStoryFlip() {
  const [index, setIndex] = useState(0)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % stories.length)
        setFlipping(false)
      }, 300) // half flip duration
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const story = stories[index]

  return (
    <div className="flex justify-center w-full">
      {/* FLIP CONTAINER */}
      <div
        className={`
          relative w-full
          rounded-xl border border-white/10
          bg-white/5 px-6 py-5
          transition-transform duration-500
          [transform-style:preserve-3d]
          ${flipping ? '[transform:rotateX(90deg)] opacity-0' : '[transform:rotateX(0deg)] opacity-100'}
        `}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="text-white" style={{ color: story.color }}>
            {story.icon}
          </div>

          {/* Number */}
          <div className="text-sm font-bold text-white/40">{story.number}</div>

          {/* Text */}
          <p className="text-lg leading-relaxed text-white/90">{story.text}</p>
        </div>
      </div>
    </div>
  )
}
