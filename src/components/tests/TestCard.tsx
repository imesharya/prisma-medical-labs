import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Test } from '@/payload-types'
import SaudiPrice from './shared/SaudiPrice'

const TestCard = ({ test }: { test: Test }) => {
  return (
    <div className="group flex flex-col gap-4 h-full w-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-border hover:border-primary hover:bg-background/80">
      <div className="flex gap-2 items-center justify-between flex-none">
        <p className="font-bold">{test.name}</p>
        <Button className="bg-primary/20 text-primary riyal-symbol" size={'sm'} variant={'outline'}>
          <SaudiPrice amount={test.price.toFixed(2)} />
        </Button>
      </div>

      <div className="flex items-center flex-none">
        <span className="bg-primary/20 text-primary px-2 rounded-md text-sm">{test.badge}</span>
      </div>

      <p className="flex-1 min-h-0 text-sm leading-relaxed text-muted-foreground">
        {test.description}
      </p>

      <Separator className="h-[1px] flex-none" />

      <Button className="flex-none">احجز مجاناً الآن</Button>
    </div>
  )
}

export default TestCard
