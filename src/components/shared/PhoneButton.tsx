import { Phone } from 'lucide-react'

const PhoneButton = () => {
  return (
    <a
      href="tel:+966920031642"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 end-4 md:bottom-6 md:end-6 z-50 flex items-center justify-center rounded-full gradient-bg text-primary-foreground gradient-bg-hover p-4 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Contact us on WhatsApp"
      style={{
        background: 'linear-gradient(135deg,#00bfff,#6b4fbb)',
        boxShadow: '0 6px 28px rgba(0,191,255,0.35)',
      }}
    >
      <span
        className="
          absolute h-full w-full rounded-full
          border-2 border-sky-300/40
          animate-[floatPulse_2.5s_ease-in-out_infinite]
        "
      />
      <Phone width={28} height={28} className="h-7 w-7 text-white" />
    </a>
  )
}

export default PhoneButton
