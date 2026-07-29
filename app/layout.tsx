import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HM Studio | Remodelación y mantención comercial",
  description:
    "Remodelación residencial, habilitación de locales y mantención para shopping centers en Santiago.",
  metadataBase: new URL("https://hm-studio.vercel.app"),
  openGraph: {
    title: "HM Studio",
    description: "Remodelamos, habilitamos y mantenemos espacios residenciales y comerciales.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
