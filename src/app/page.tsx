import { JsonLd } from '@/components/ui'
import { Hero } from '@/components/sections/hero'
import { Menu } from '@/components/sections/menu'
import { About } from '@/components/sections/about'
import { Reservation } from '@/components/sections/reservation'
import { siteConfig } from '@/config/site'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    priceRange: siteConfig.business.priceRange,
    servesCuisine: siteConfig.business.cuisine,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.region,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.country,
    },
    openingHours: siteConfig.business.hours,
    sameAs: [siteConfig.business.social.instagram, siteConfig.business.social.facebook],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <Menu />
      <About />
      <Reservation />
    </>
  )
}
