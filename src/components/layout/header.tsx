import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { mainNav } from '@/config/nav'
import { Button } from '@/components/ui'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="sm">Get Started</Button>
      </div>
    </header>
  )
}
