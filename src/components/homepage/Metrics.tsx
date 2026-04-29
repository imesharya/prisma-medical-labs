import CountUp from '../shared/CountUp'
import FadeIn from '../shared/FadeIn'

export const STATS = [
  { name: '+10,000', label: 'قصة ثقة', color: '#00BFFF' },
  { name: '24/7', label: 'خدمة مستمرة وقت ما تحتاج', color: '#6B4FBB' },
  { name: '+500', label: 'تحليل يغطي كل احتياجاتك', color: '#FF4FB8' },
  { name: '100%', label: 'نتائج موثوقة ومعتمدة', color: '#00A99D' },
]

const Metrics = () => {
  return (
    <FadeIn className="relative bg-white border-y">
      <div className="grid grid-cols-2 md:grid-cols-4 relative">
        {STATS.map((s) => (
          <div key={s.name} className={`py-7 md:py-10 px-4 md:px-8 text-center relative`}>
            <div
              className="text-3xl md:text-5xl font-bold leading-none mb-2"
              style={{
                background: `linear-gradient(135deg, #0A0A12, ${s.color})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <CountUp end={s.name} />
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}

export default Metrics
