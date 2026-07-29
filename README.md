# HM Studio — sitio web

Proyecto creado con Next.js App Router y preparado para GitHub + Vercel.

## Estructura correcta en GitHub

Los archivos deben quedar directamente en la raíz del repositorio `HM-Studio`:

```text
HM-Studio/
├── app/
├── components/
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── vercel.json
```

No subas la carpeta `HM-Studio-nuevo` como carpeta intermedia. Sube **su contenido**.

## Imágenes

Guarda las imágenes dentro de `public/images/` con estos nombres exactos. No necesitas modificar el código:

1. `hero-principal.jpg`
2. `remodelacion-residencial.jpg`
3. `mantencion-comercial.jpg`
4. `equipo-mantencion-retail.jpg`
5. `proyecto-cocina.jpg`
6. `proyecto-bano.jpg`
7. `proyecto-local-comercial.jpg`
8. `proyecto-mantencion.jpg`
9. `nosotros-hm-studio.jpg`

Mientras no existan, la web mostrará un recuadro con el número y el nombre esperado.

Recomendación: JPG o WebP horizontal de al menos 1600 px para las imágenes 1–8. Para la imagen 9, una foto vertical de al menos 1200 × 1500 px.

## Formulario

Busca esta línea en `app/page.tsx`:

```tsx
<form action="mailto:contacto@hmstudio.cl"
```

Reemplaza `contacto@hmstudio.cl` por el correo real. Este método abre el programa de correo del visitante. Para recepción automática, posteriormente conviene conectar Formspree, Resend o una API propia.

También reemplaza:

- `@hmstudio.cl` por el Instagram real.
- `HM Studio` por el enlace real de LinkedIn.
- La URL `https://hm-studio.vercel.app` en `app/layout.tsx` por el dominio definitivo.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Desplegar en Vercel

1. Reemplaza el contenido del repositorio GitHub `HM-Studio`.
2. En Vercel importa o vuelve a desplegar ese repositorio.
3. Framework Preset: `Next.js`.
4. Root Directory: vacío o `./`.
5. Output Directory: vacío.
6. Build Command: valor predeterminado (`npm run build`).

