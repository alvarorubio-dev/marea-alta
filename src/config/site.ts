export const siteConfig = {
  name: 'Marea Alta',
  description:
    'Restaurante de cocina mediterránea de autor en Barcelona. Reserva tu mesa y disfruta de una experiencia gastronómica única.',
  url: 'https://marealta.vercel.app',
  ogImage: 'https://marealta.vercel.app/og.jpg',
  locale: 'es_ES',
  business: {
    name: 'Marea Alta',
    legalName: 'Marea Alta S.L.',
    address: {
      street: 'Passeig de Gràcia 42',
      city: 'Barcelona',
      region: 'Cataluña',
      postalCode: '08007',
      country: 'ES',
    },
    phone: '+34 931 234 567',
    email: 'hola@marealta.com',
    hours: ['Tuesday-Sunday 13:00-16:00', 'Tuesday-Sunday 20:00-23:30'],
    priceRange: '€€€',
    cuisine: 'Mediterranean',
    social: {
      instagram: 'https://instagram.com/marealta',
      facebook: 'https://facebook.com/marealta',
    },
  },
  author: {
    name: 'Alvaro Rubio',
    url: 'https://tudominio.com',
  },
  keywords: [
    'restaurante barcelona',
    'cocina mediterránea',
    'restaurante de autor',
    'reservas online',
    'gastronomía barcelona',
    'passeig de gracia restaurante',
  ],
}

export type SiteConfig = typeof siteConfig
