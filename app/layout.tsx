import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Home Market Studio | Remodelaciones de departamentos en Santiago',
  description:
    'Rediseñamos departamentos antiguos en Santiago con un enfoque Design & Build: arquitectura, materiales y ejecución integral.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
