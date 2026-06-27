import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { reservationSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = reservationSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Datos no válidos' }, { status: 400 })
    }

    const { name, email, phone, date, time, guests, notes } = result.data

    await resend.emails.send({
      from: 'Marea Alta <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nueva reserva — ${name} — ${date} ${time}`,
      html: `
        <h2>Nueva reserva en Marea Alta</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Nombre</strong></td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Email</strong></td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Teléfono</strong></td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Fecha</strong></td><td style="padding:8px;border:1px solid #eee">${date}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Hora</strong></td><td style="padding:8px;border:1px solid #eee">${time}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Comensales</strong></td><td style="padding:8px;border:1px solid #eee">${guests}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Notas</strong></td><td style="padding:8px;border:1px solid #eee">${notes || '—'}</td></tr>
        </table>
      `,
    })

    // Email de confirmación al cliente
    await resend.emails.send({
      from: 'Marea Alta <onboarding@resend.dev>',
      to: email,
      subject: '¡Reserva recibida en Marea Alta!',
      html: `
        <h2>¡Hola ${name}!</h2>
        <p>Hemos recibido tu reserva correctamente. Te confirmamos los detalles:</p>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Fecha</strong></td><td style="padding:8px;border:1px solid #eee">${date}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Hora</strong></td><td style="padding:8px;border:1px solid #eee">${time}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee"><strong>Comensales</strong></td><td style="padding:8px;border:1px solid #eee">${guests}</td></tr>
        </table>
        <p>En menos de 24 horas recibirás la confirmación definitiva.</p>
        <p>Si necesitas modificar o cancelar tu reserva, contáctanos en <a href="tel:+34931234567">+34 931 234 567</a></p>
        <br/>
        <p>¡Hasta pronto!</p>
        <p><strong>Marea Alta</strong><br/>Passeig de Gràcia 42, Barcelona</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reservation error:', error)
    return NextResponse.json({ error: 'Error al procesar la reserva' }, { status: 500 })
  }
}
