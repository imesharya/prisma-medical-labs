import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const quickLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الباقات', href: '/packages' },
  { label: 'من نحن', href: '/about' },
  { label: 'المدونة', href: '/blog' },
  { label: 'زيارة منزلية', href: '/home-visit' },
  { label: 'بريزما AI', href: '/prisma-ai' },
]

const branches = [
  {
    name: 'فرع النرجس',
    dailyHours: 'يومياً: ٧ صباحاً — ١١ مساءً',
    fridayHours: 'الجمعة: ٣ مساءً — ١١ مساءً',
    mapUrl: 'https://maps.app.goo.gl/7thyVBCaKtArjii97',
  },
  {
    name: 'فرع القادسية',
    dailyHours: 'يومياً: ٧ صباحاً — ١١ مساءً',
    fridayHours: 'الجمعة: مغلق',
    mapUrl: 'https://maps.app.goo.gl/yTpTy4EK1FCtwy2u9',
  },
]

const socialLinks = [
  { icon: BsFacebook, href: '#', label: 'Facebook' },
  { icon: BsTwitter, href: '#', label: 'Twitter' },
  { icon: BsInstagram, href: '#', label: 'Instagram' },
  { icon: BsLinkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Image
              src="/prisma-logo.png"
              alt="Prisma Logo"
              width={180}
              height={48}
              className="h-12 w-auto brightness-0 invert mb-5"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              مختبرات بريزما الطبية - شريكك الموثوق في الرعاية الصحية. نقدم أدق التحاليل بأحدث
              التقنيات وأسرع النتائج.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 gradient-text">معلومات التواصل</h3>
            <ul className="space-y-3">
              {/* Address */}
              <li>
                <Link
                  href="https://maps.app.goo.gl/7thyVBCaKtArjii97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-background/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-background/50 mb-0.5 group-hover:text-background/70 transition-colors">
                      العنوان
                    </p>
                    <p className="font-medium text-sm group-hover:text-background transition-colors">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </Link>
              </li>
              {/* Phone */}
              <li>
                <Link
                  href="tel:920031642"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-background/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-background/50 mb-0.5 group-hover:text-background/70 transition-colors">
                      اتصل بنا
                    </p>
                    <p
                      className="font-medium text-sm group-hover:text-background transition-colors"
                      dir="rtl"
                    >
                      +966920031642
                    </p>
                  </div>
                </Link>
              </li>
              {/* WhatsApp */}
              <li>
                <Link
                  href="https://wa.me/+966920031642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-background/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <BsWhatsapp />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-background/50 mb-0.5 group-hover:text-background/70 transition-colors">
                      واتساب
                    </p>
                    <p
                      className="font-medium text-sm group-hover:text-background transition-colors"
                      dir="rtl"
                    >
                      966920031642
                    </p>
                  </div>
                </Link>
              </li>
              {/* Email */}
              <li>
                <Link
                  href="mailto:info@prismalaboratory.com"
                  className="group flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-background/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-background/50 mb-0.5 group-hover:text-background/70 transition-colors">
                      البريد الإلكتروني
                    </p>
                    <p className="font-medium text-sm group-hover:text-background transition-colors">
                      info@prismalaboratory.com
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 gradient-text">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-lg font-semibold mb-5 gradient-text">فروعنا وأوقات العمل</h3>
            <div className="space-y-4">
              {branches.map((branch) => (
                <Link
                  key={branch.name}
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative p-4 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-background/20 transition-all duration-200"
                >
                  {/* External Link Icon */}
                  <ExternalLink className="absolute top-3 left-3 w-4 h-4 text-background/40 group-hover:text-background/70 transition-colors" />

                  {/* Branch Name */}
                  <p className="font-semibold text-sm mb-3 group-hover:gradient-text transition-colors">
                    {branch.name}
                  </p>

                  {/* Hours */}
                  <div className="space-y-2 text-sm text-background/60 group-hover:text-background/80 transition-colors">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{branch.dailyHours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{branch.fridayHours}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>جميع الحقوق محفوظة © {new Date().getFullYear()} مختبرات بريزما</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
