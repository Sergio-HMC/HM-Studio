# Home Market Studio Web

Landing page desarrollada con Next.js (App Router) para subir a GitHub y desplegar en Vercel.

## Cómo correr localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Deploy en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Vercel detectará automáticamente que es un proyecto Next.js.
4. Build command: `npm run build`
5. Output: configuración automática de Next.js

## Estructura

- `app/page.tsx`: landing principal
- `app/layout.tsx`: layout general y metadata SEO básica
- `app/globals.css`: estilos globales
- `public/logo-hm-studio.jpeg`: logo entregado

## Siguiente mejora recomendada

Conectar el formulario a:
- Formspree
- Resend + API Route
- HubSpot / Mailchimp
