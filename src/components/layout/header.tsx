'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { mainNav } from '@/config/nav'
import { Button } from '@/components/ui'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628]/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-wide text-white">MAREA ALTA</span>
          <span className="text-xs tracking-[0.3em] text-[#c9a84c]">BARCELONA</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-white/70 transition-colors hover:text-[#c9a84c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-[#c9a84c] text-[#0a1628] hover:bg-[#b8943d]"
            onClick={() =>
              document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Reservar mesa
          </Button>
        </div>

        {/* Hamburger mobile */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`h-px w-6 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-px w-6 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-px w-6 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Nav mobile */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0a1628]/95 px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-white/70 transition-colors hover:text-[#c9a84c]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="mt-2 bg-[#c9a84c] text-[#0a1628] hover:bg-[#b8943d]"
              onClick={() => {
                setMenuOpen(false)
                document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Reservar mesa
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
