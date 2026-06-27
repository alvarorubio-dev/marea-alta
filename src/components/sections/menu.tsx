import { siteConfig } from '@/config/site'

const dishes = [
  {
    category: 'Entrantes',
    items: [
      {
        name: 'Tartar de atún rojo',
        description: 'Atún de almadraba, aguacate, soja y aceite de sésamo',
        price: '18€',
        tag: 'Signature',
      },
      {
        name: 'Burrata con tomate',
        description: 'Burrata cremosa, tomate de temporada y albahaca fresca',
        price: '14€',
        tag: null,
      },
      {
        name: 'Croquetas de bogavante',
        description: 'Bechamel de bogavante, crujiente de pan y alioli de azafrán',
        price: '16€',
        tag: 'Favorito',
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
      },
      {
        name: 'Arroz meloso de bogavante',
        description: 'Arroz Bomba, bogavante fresco y alioli suave',
        price: '38€',
        tag: 'Signature',
      },
      {
        name: 'Solomillo con trufa',
        description: 'Solomillo de ternera, trufa negra y puré de patata trufado',
        price: '36€',
        tag: null,
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
      },
      {
        name: 'Crema catalana',
        description: 'Receta tradicional con toque de cardamomo',
        price: '8€',
        tag: null,
      },
      {
        name: 'Sorbete de limón',
        description: 'Limón de Sicilia, albahaca y espuma de cava',
        price: '9€',
        tag: null,
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
                    className="group relative rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-md"
                  >
                    {dish.tag && (
                      <span className="absolute top-4 right-4 rounded-full bg-[#c9a84c]/10 px-2 py-0.5 text-xs font-medium text-[#c9a84c]">
                        {dish.tag}
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-[#0a1628]">{dish.name}</h4>
                      <p className="shrink-0 font-bold text-[#c9a84c]">{dish.price}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{dish.description}</p>
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
