import { JsonLd, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { ContactForm } from '@/components/forms'
import { siteConfig } from '@/config/site'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
            <CardDescription>Rellena el formulario y te responderemos pronto.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </main>
    </>
  )
}
