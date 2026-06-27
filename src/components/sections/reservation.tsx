import { ReservationForm } from '@/components/forms/reservation-form'
import { siteConfig } from '@/config/site'

export function Reservation() {
  return (
    <section id="reservas" className="bg-[#0a1628] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-3 text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">
                Reservas
              </p>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Reserva tu
                <br />
                experiencia
              </h2>
              <p className="mt-4 text-lg text-white/60">
                Asegura tu mesa y prepárate para una noche inolvidable. También puedes llamarnos
                directamente.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm font-medium text-white">Dirección</p>
                  <p className="text-sm text-white/50">
                    {siteConfig.business.address.street}, {siteConfig.business.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm font-medium text-white">Teléfono</p>
                  <p className="text-sm text-white/50">{siteConfig.business.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="text-sm font-medium text-white">Horario</p>
                  <p className="text-sm text-white/50">Mar–Dom 13:00–16:00</p>
                  <p className="text-sm text-white/50">Mar–Dom 20:00–23:30</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-white/50">{siteConfig.business.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
