import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { footerNav } from '@/config/nav'

export function Footer() {
  return (
    <footer className="w-full bg-[#0a1628]">
      {/* Franja dorada superior */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Columna 1 — Marca */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">Marea Alta</h3>
            <p className="text-sm leading-relaxed text-white/50">
              Cocina mediterránea de autor en el corazón de Barcelona. Una experiencia gastronómica
              única desde 2012.
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-[#c9a84c]"
              >
                Instagram
              </Link>
              <Link
                href={siteConfig.business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-[#c9a84c]"
              >
                Facebook
              </Link>
            </div>
          </div>

          {/* Columna 2 — Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  {siteConfig.business.address.street}, {siteConfig.business.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <Link
                  href={`tel:${siteConfig.business.phone}`}
                  className="transition-colors hover:text-[#c9a84c]"
                >
                  {siteConfig.business.phone}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <Link
                  href={`mailto:${siteConfig.business.email}`}
                  className="transition-colors hover:text-[#c9a84c]"
                >
                  {siteConfig.business.email}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 — Horario */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
              Horario
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/50">
              <li className="flex justify-between">
                <span>Martes — Domingo</span>
              </li>
              <li className="flex justify-between">
                <span>Mediodía</span>
                <span>13:00 — 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Noche</span>
                <span>20:00 — 23:30</span>
              </li>
              <li className="mt-2 text-[#c9a84c]">Lunes cerrado</li>
            </ul>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {siteConfig.business.name}. Todos los derechos reservados.
          </p>
          <nav className="flex gap-6">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
