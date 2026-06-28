import Image from 'next/image'
import { siteConfig } from '@/config/site'

type Dish = {
  name: string
  description: string
  price: string
  tag: string | null
  image: string
}

type DishCategory = {
  category: string
  items: Dish[]
}

const dishes: DishCategory[] = [
  {
    category: 'Entrantes',
    items: [
      {
        name: 'Tartar de atún rojo',
        description: 'Atún de almadraba, aguacate, soja y aceite de sésamo',
        price: '18€',
        tag: 'Signature',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      },
      {
        name: 'Burrata con tomate',
        description: 'Burrata cremosa, tomate de temporada y albahaca fresca',
        price: '14€',
        tag: null,
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80',
      },
      {
        name: 'Croquetas de bogavante',
        description: 'Bechamel de bogavante, crujiente de pan y alioli de azafrán',
        price: '16€',
        tag: 'Favorito',
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&q=80',
      },
    ],
  },
  {
    category: 'Principales',
    items: [
      {
        name: 'Lubina a la sal',
        description: 'Lubina salvaje, verduras asadas y emulsión de limón',
        price: '32€',
        tag: null,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
      },
      {
        name: 'Arroz meloso de bogavante',
        description: 'Arroz Bomba, bogavante fresco y alioli suave',
        price: '38€',
        tag: 'Signature',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80',
      },
      {
        name: 'Solomillo con trufa',
        description: 'Solomillo de ternera, trufa negra y puré de patata trufado',
        price: '36€',
        tag: null,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
      },
    ],
  },
  {
    category: 'Postres',
    items: [
      {
        name: 'Coulant de chocolate',
        description: 'Chocolate 70%, helado de vainilla y sal Maldon',
        price: '10€',
        tag: 'Favorito',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80',
      },
      {
        name: 'Crema catalana',
        description: 'Receta tradicional con toque de cardamomo',
        price: '8€',
        tag: null,
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80',
      },
      {
        name: 'Sorbete de limón',
        description: 'Limón de Sicilia, albahaca y espuma de cava',
        price: '9€',
        tag: null,
        image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80',
      },
    ],
  },
]

export function Menu() {
  return (
    <section id="menu" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">
            Nuestra carta
          </p>
          <h2 className="text-4xl font-bold text-[#0a1628] md:text-5xl">Menú de temporada</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Ingredientes frescos del mercado, seleccionados cada día por nuestro chef para ofrecerte
            lo mejor del mediterráneo.
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-col gap-16">
          {dishes.map((category) => (
            <div key={category.category}>
              <h3 className="mb-8 border-b border-[#c9a84c]/30 pb-3 text-xl font-semibold text-[#0a1628]">
                {category.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                {category.items.map((dish) => (
                  <div
                    key={dish.name}
                    className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Imagen */}
                    <div className="relative aspect-4/3 w-full overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay sutil en hover */}
                      <div className="absolute inset-0 bg-[#0a1628]/0 transition-all duration-300 group-hover:bg-[#0a1628]/10" />
                      {/* Tag badge */}
                      {dish.tag && (
                        <span className="absolute top-3 left-3 rounded-full bg-[#c9a84c] px-3 py-1 text-xs font-semibold text-white shadow-md">
                          {dish.tag}
                        </span>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="leading-snug font-semibold text-[#0a1628]">{dish.name}</h4>
                        <p className="shrink-0 font-bold text-[#c9a84c]">{dish.price}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {dish.description}
                      </p>
                    </div>

                    {/* Línea decorativa dorada inferior en hover */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota alérgenos */}
        <p className="mt-12 text-center text-xs text-gray-400">
          Si tienes alguna alergia o intolerancia alimentaria, por favor indícalo al personal.
          Precios con IVA incluido. •{' '}
          <span className="text-[#c9a84c]">{siteConfig.business.priceRange}</span>
        </p>
      </div>
    </section>
  )
}
