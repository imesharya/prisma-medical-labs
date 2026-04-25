import { Clock, FlaskConical, ShieldCheck, Users } from 'lucide-react'

const metrics = [
  {
    icon: Users,
    value: '+10,000',
    label: 'قصة ثقة',
  },
  {
    icon: Clock,
    value: 'بسرعة',
    label: 'نتائجك توصلك بأسرع وقت',
  },
  {
    icon: FlaskConical,
    value: '+500',
    label: 'تحليل يغطي كل اللي تحتاجه',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'نتائج موثوقة ومعتمدة',
  },
]

const Metrics = () => {
  return (
    <section className="w-full bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-3 py-4 md:px-6 md:py-5 ${
                index < metrics.length - 1 ? 'lg:border-l lg:border-border' : ''
              } ${index % 2 === 0 ? 'border-l border-border' : ''} ${
                index < 2 ? 'border-b border-border lg:border-b-0' : ''
              }`}
            >
              {/* Top row: Icon + Value */}
              <div className="flex items-center justify-center gap-2">
                <metric.icon className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
                <span className="text-base md:text-lg font-bold gradient-text whitespace-nowrap">
                  {metric.value}
                </span>
              </div>
              {/* Bottom row: Label */}
              <span className="mt-1 text-xs md:text-sm text-muted-foreground leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1 gradient-bg"></div>
    </section>
  )
}

export default Metrics
