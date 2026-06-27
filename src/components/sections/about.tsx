export function About() {
  return (
    <section id="nosotros" className="bg-[#0a1628] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">
              Nuestra historia
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Pasión por el
              <br />
              mediterráneo
            </h2>
            <p className="text-lg leading-relaxed text-white/60">
              Marea Alta nació en 2012 con una idea clara: llevar la esencia del mediterráneo a la
              mesa. Nuestro chef, Carlos Vidal, formado en las mejores cocinas de Europa, regresó a
              Barcelona para crear un espacio donde la tradición y la vanguardia se encuentran.
            </p>
            <p className="text-lg leading-relaxed text-white/60">
              Cada plato es un homenaje al mar, a los productores locales y a la cultura
              gastronómica que nos define. Trabajamos con proveedores de confianza y visitamos el
              mercado cada mañana para garantizar la máxima frescura.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-[#c9a84c]">12</p>
                <p className="mt-1 text-sm text-white/50">Años de historia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c9a84c]">3</p>
                <p className="mt-1 text-sm text-white/50">Premios gastronómicos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c9a84c]">100%</p>
                <p className="mt-1 text-sm text-white/50">Producto local</p>
              </div>
            </div>
          </div>

          {/* Cards de valores */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: '🌊',
                title: 'Frescura',
                description: 'Pescado y marisco directo de la lonja cada mañana.',
              },
              {
                icon: '🌿',
                title: 'Sostenibilidad',
                description: 'Proveedores locales y cocina de temporada.',
              },
              {
                icon: '👨‍🍳',
                title: 'Técnica',
                description: 'Formación internacional al servicio del producto.',
              },
              {
                icon: '❤️',
                title: 'Pasión',
                description: 'Cada plato cocinado con dedicación y amor.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-3xl">{value.icon}</p>
                <h3 className="mt-3 font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-white/50">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
