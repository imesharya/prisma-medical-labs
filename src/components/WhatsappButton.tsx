import { BsWhatsapp } from 'react-icons/bs'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+966920031642"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 start-4 md:bottom-6 md:start-6 z-50 flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-green-300 to-green-500 text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Contact us on WhatsApp"
    >
      <BsWhatsapp width={28} height={28} className="h-7 w-7 text-white" />
    </a>
  )
}

export default WhatsappButton
