"use client";

import React from "react";
import Image from "next/image";

interface LegoBlockProps {
  imageUrl: string;
}

export default function LegoBlock({ imageUrl }: LegoBlockProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={imageUrl}
        alt="Lego Block"
        width={100} // Ajusta el tamaño de la imagen
        height={100} // Ajusta el tamaño de la imagen
        className="object-contain"
      />
    </div>
  );
}