export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Reservas', href: '#reservas' },
]

export const footerNav: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Privacidad', href: '/privacidad' },
]
