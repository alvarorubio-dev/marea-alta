'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    // Por ahora simulamos el envío
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        id="name"
        label="Nombre"
        placeholder="Tu nombre"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="tu@email.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Textarea
        id="message"
        label="Mensaje"
        placeholder="¿En qué podemos ayudarte?"
        rows={4}
        error={errors.message?.message}
        {...register('message')}
      />

      {isSubmitSuccessful && (
        <p className="text-sm text-green-600">✓ Mensaje enviado correctamente</p>
      )}

      <Button type="submit" loading={isSubmitting}>
        Enviar mensaje
      </Button>
    </form>
  )
}
