'use client'

import { Button } from '@/components/ui'

// ... resto del código igual

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center bg-[#0a1628]"
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">
          Cocina mediterránea de autor
        </p>

        <h1 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl">Marea Alta</h1>

        <p className="max-w-xl text-lg text-white/70 md:text-xl">
          Una experiencia gastronómica única en el corazón de Barcelona. Ingredientes de temporada,
          técnica y pasión en cada plato.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-[#c9a84c] text-[#0a1628] hover:bg-[#b8943d]"
            onClick={() =>
              document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Reservar mesa
          </Button>
          <Button
            className="border-2 border-[#c9a84c] text-[#c9a84c] transition-all duration-300 hover:bg-[#c9a84c] hover:text-white"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver menú
          </Button>
        </div>

        <div className="mt-8 flex gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-[#c9a84c]">12+</p>
            <p className="text-sm text-white/60">Años de experiencia</p>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <p className="text-2xl font-bold text-[#c9a84c]">4.9</p>
            <p className="text-sm text-white/60">Valoración media</p>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <p className="text-2xl font-bold text-[#c9a84c]">2k+</p>
            <p className="text-sm text-white/60">Clientes felices</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-2 w-1.5 rounded-full bg-[#c9a84c]" />
        </div>
      </div>
    </section>
  )
}
