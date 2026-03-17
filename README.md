# HM Studio

Landing page desarrollada con Next.js App Router, lista para desplegar en Vercel.

## Requisitos
- Node.js 20 o superior

## Instalación
```bash
npm install
npm run dev
```

## Build local
```bash
npm run build
npm run start
```

## Despliegue en Vercel
Configuración recomendada:
- Framework Preset: Next.js
- Root Directory: /
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: vacío

Este proyecto ya incluye:
- `next.config.js` con `output: 'standalone'`
- `vercel.json` con `framework: 'nextjs'`
- Next.js actualizado a una versión corregida
