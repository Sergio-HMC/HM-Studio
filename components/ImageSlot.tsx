"use client";

import { useState } from "react";

type ImageSlotProps = {
  filename: string;
  label: string;
  className?: string;
  alt: string;
};

export default function ImageSlot({ filename, label, className = "", alt }: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-slot ${className}`}>
      {!loaded && (
        <div className="image-slot__fallback" aria-hidden="true">
          <strong>{label}</strong>
          <span>public/images/{filename}</span>
        </div>
      )}
      {/* Al copiar una imagen con este nombre a public/images, aparecerá automáticamente. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${filename}`}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={loaded ? "is-loaded" : ""}
      />
    </div>
  );
}
