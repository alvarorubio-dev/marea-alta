import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede superar los 50 caracteres'),
  email: z.string().email('Introduce un email válido'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede superar los 500 caracteres'),
})

export const reservationSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede superar los 50 caracteres'),
  email: z.string().email('Introduce un email válido'),
  phone: z
    .string()
    .min(9, 'El teléfono debe tener al menos 9 dígitos')
    .max(15, 'Teléfono no válido'),
  date: z.string().min(1, 'Selecciona una fecha'),
  time: z.string().min(1, 'Selecciona una hora'),
  guests: z.string().min(1, 'Selecciona el número de comensales'),
  notes: z.string().max(300, 'Máximo 300 caracteres').optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type ReservationFormData = z.infer<typeof reservationSchema>
