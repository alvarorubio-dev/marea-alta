'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reservationSchema, type ReservationFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const timeSlots = [
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
]

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+']

export function ReservationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  })

  async function onSubmit(data: ReservationFormData) {
    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al enviar la reserva')
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="text-xl font-semibold text-white">¡Reserva recibida!</h3>
        <p className="text-white/60">Te confirmaremos por email en menos de 24 horas.</p>
        <Button
          variant="outline"
          className="mt-2 border-white/30 text-white hover:bg-white/10"
          onClick={() => reset()}
        >
          Hacer otra reserva
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          id="name"
          label="Nombre completo"
          placeholder="Tu nombre"
          error={errors.name?.message}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:ring-[#c9a84c]"
          {...register('name')}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="tu@email.com"
          error={errors.email?.message}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:ring-[#c9a84c]"
          {...register('email')}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          id="phone"
          label="Teléfono"
          type="tel"
          placeholder="+34 600 000 000"
          error={errors.phone?.message}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:ring-[#c9a84c]"
          {...register('phone')}
        />
        <Input
          id="date"
          label="Fecha"
          type="date"
          error={errors.date?.message}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:ring-[#c9a84c]"
          {...register('date')}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Hora */}
        <div className="flex flex-col gap-1">
          <label htmlFor="time" className="text-sm font-medium text-white/70">
            Hora
          </label>
          <select
            id="time"
            className="h-10 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-white focus:ring-2 focus:ring-[#c9a84c] focus:outline-none"
            {...register('time')}
          >
            <option value="" className="bg-[#0a1628]">
              Selecciona hora
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot} className="bg-[#0a1628]">
                {slot}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-xs text-red-400">{errors.time.message}</p>}
        </div>

        {/* Comensales */}
        <div className="flex flex-col gap-1">
          <label htmlFor="guests" className="text-sm font-medium text-white/70">
            Comensales
          </label>
          <select
            id="guests"
            className="h-10 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-white focus:ring-2 focus:ring-[#c9a84c] focus:outline-none"
            {...register('guests')}
          >
            <option value="" className="bg-[#0a1628]">
              Nº de personas
            </option>
            {guestOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0a1628]">
                {opt} {opt === '1' ? 'persona' : 'personas'}
              </option>
            ))}
          </select>
          {errors.guests && <p className="text-xs text-red-400">{errors.guests.message}</p>}
        </div>
      </div>

      <Textarea
        id="notes"
        label="Notas especiales (opcional)"
        placeholder="Alergias, ocasión especial, preferencias de mesa..."
        rows={3}
        error={errors.notes?.message}
        className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:ring-[#c9a84c]"
        {...register('notes')}
      />

      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        className="mt-2 bg-[#c9a84c] text-[#0a1628] hover:bg-[#b8943d]"
      >
        Confirmar reserva
      </Button>
    </form>
  )
}
