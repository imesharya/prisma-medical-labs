'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    label: 'الرئيسية',
    href: '/',
  },
  {
    label: 'الباقات',
    href: '/packages',
    children: [
      { label: 'الباقات الشاملة', href: '/packages/comprehensive' },
      { label: 'الباقات المختصة', href: '/packages/specialized' },
      { label: 'الصحة الجنسية', href: '/packages/sexual-health' },
      { label: 'باقة الزواج', href: '/packages/marriage' },
      { label: 'التحاليل الجينية', href: '/packages/genetic' },
      { label: 'العروض', href: '/packages/offers' },
      { label: 'التحاليل الفردية', href: '/individual-tests' },
    ],
  },
  {
    label: 'من نحن',
    href: '/about',
  },
  {
    label: 'المدونة',
    href: '/blog',
  },
  {
    label: 'زيارة منزلية',
    href: '/home-visit',
  },
  {
    label: 'بريزما AI',
    href: '/prisma-ai',
  },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const close = () => setOpenDropdown(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-10 lg:h-12"
                src="/prisma-logo.png"
                alt="Prisma Logo"
                height={48}
                width={180}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const shouldExpand =
                  isActive || (link.children?.some((child) => pathname === child.href) ?? false)

                if (link.children) {
                  return (
                    <li
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={close}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          shouldExpand
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      </Link>

                      {/* dropdown */}
                      {openDropdown === link.label && (
                        <div className="absolute inset-s-0 top-full pt-2">
                          <div className="bg-card shadow-xl rounded-xl py-2 w-56 border border-border">
                            <ul className="flex flex-col">
                              {link.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={close}
                                    className={`block px-4 py-2.5 text-sm transition-colors ${
                                      pathname === child.href
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  )
                }

                // Simple link (no children)
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-5 py-2.5 text-sm font-medium gradient-bg text-primary-foreground rounded-xl gradient-bg-hover shadow-md">
                استشارة طبية
              </button>
              <Link href="/#contact">
                <button className="px-5 py-2.5 text-sm font-medium bg-card text-foreground border border-border rounded-xl hover:bg-muted transition-all duration-200">
                  احجز الآن
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-foreground/40 z-50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 inset-s-0 h-full w-[85%] max-w-sm bg-card shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Image
            className="h-10"
            src="/prisma-logo.png"
            alt="Prisma Logo"
            height={40}
            width={180}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href

              if (link.children) {
                const shouldExpand =
                  pathname === link.href || link.children.some((child) => pathname === child.href)

                return (
                  <li key={link.label} className="border-b border-gray-100">
                    {/* Accordion header */}
                    <input
                      type="checkbox"
                      id={`mobile-accordion-${index}`}
                      className="peer hidden"
                      defaultChecked={shouldExpand}
                      key={`mobile-accordion-${index}-${pathname}`}
                    />
                    <label
                      htmlFor={`mobile-accordion-${index}`}
                      className={`group flex items-center justify-between px-6 py-3 text-base font-medium cursor-pointer hover:bg-muted transition-colors`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-[.peer:checked+&]:rotate-180" />
                    </label>

                    {/* Expandable content */}
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-[500px] transition-all duration-300 ease-out">
                      <ul className="flex flex-col py-1">
                        {/* Parent page link inside accordion */}
                        <li>
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-10 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors ${
                              isActive ? 'bg-primary/10 text-primary' : ''
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>

                        {/* Child links */}
                        {link.children.map((child) => {
                          const childIsActive = pathname === child.href
                          return (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-10 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors ${
                                  childIsActive ? 'bg-primary/10 text-primary' : ''
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.label} className="border-b border-gray-100">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Mobile CTA Buttons */}
        <div className="p-6 space-y-3 border-t border-border">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 text-base font-medium gradient-bg text-primary-foreground rounded-xl shadow-md"
          >
            استشارة طبية
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 text-base font-medium bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors"
          >
            احجز الآن
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
