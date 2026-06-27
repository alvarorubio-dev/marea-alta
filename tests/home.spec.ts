import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('loads correctly', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Next\.js Professional Starter/)
  })

  test('header is visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('banner')).toBeVisible()
  })

  test('footer is visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('contentinfo')).toBeVisible()
  })
})

test.describe('Contact form', () => {
  test('shows validation errors on empty submit', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar mensaje' }).click()
    await expect(page.getByText('El nombre debe tener al menos 2 caracteres')).toBeVisible()
    await expect(page.getByText('Introduce un email válido')).toBeVisible()
    await expect(page.getByText('El mensaje debe tener al menos 10 caracteres')).toBeVisible()
  })

  test('submits successfully with valid data', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('Nombre').fill('Alvaro Rubio')
    await page.getByLabel('Email').fill('alvaro@example.com')
    await page.getByLabel('Mensaje').fill('Este es un mensaje de prueba completo.')
    await page.getByRole('button', { name: 'Enviar mensaje' }).click()
    await expect(page.getByText('✓ Mensaje enviado correctamente')).toBeVisible()
  })
})
