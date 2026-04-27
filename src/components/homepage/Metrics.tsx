export const PRISMA = {
  cyan: '#00BFFF',
  blue: '#0A84FF',
  teal: '#00A99D',
  purple: '#6B4FBB',
  pink: '#FF4FB8',
  magenta: '#D61F9E',
  crimson: '#9B2335',
  ink: '#0A0A12',
  ink2: '#141420',
  paper: '#FAFAFB',
  line: 'rgba(255,255,255,0.08)',
}

export const STATS = [
  { n: '+10,000', l: 'قصة ثقة' },
  { n: '3 ساعات', l: 'نتائجك توصلك بأسرع وقت' },
  { n: '+500', l: 'تحليل يغطي كل احتياجاتك' },
  { n: '100%', l: 'نتائج موثوقة ومعتمدة' },
]

const Metrics = () => {
  const softInk = '#0A0A12'
  const line = 'rgba(10,10,18,0.08)'

  return (
    <section
      className="relative bg-white"
      style={{ borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 relative">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="py-7 md:py-10 px-4 md:px-8 text-center relative"
            style={{
              borderLeft: i % 2 === 0 && i < STATS.length - 1 ? `1px solid ${line}` : undefined,
              borderBottom: i < 2 ? `1px solid ${line}` : undefined,
            }}
          >
            <div
              className="text-[28px] md:text-[44px] font-bold leading-none mb-2"
              style={{
                background: `linear-gradient(135deg, ${softInk}, ${[PRISMA.cyan, PRISMA.purple, PRISMA.pink, PRISMA.teal][i]})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {s.n}
            </div>
            <div className="text-[11px] md:text-[13px]" style={{ color: 'rgba(10,10,18,0.55)' }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Metrics
