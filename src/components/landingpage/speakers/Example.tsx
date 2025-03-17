import Image from "next/image";
import Link from "next/link";

const colors = [
  'bg-yellowsac', // #FFDF62
  'bg-redsac',   // #F75E63
  'bg-bluesac',  // #42CDFF
  'bg-greensac', // #C5F06F
];

export default function Speakers({ index }: { index: number }) {
  const colorClass = colors[index % colors.length]; // Selección cíclica de colores

  return (
    <div className="flex flex-col items-center">
      {/* Puntos del bloque de Lego */}
      <div className="flex space-x-16">
        <div className={`w-22 h-10 ${colorClass} rounded-t-lg`}></div>
        <div className={`w-22 h-10 ${colorClass} rounded-t-lg`}></div>
      </div>

      {/* Base del bloque de Lego */}
      <div className={`w-100 h-100 ${colorClass} rounded-lg p-8 flex flex-col items-start text-left`}>
        {/* Imagen */}
        <div className="w-20 h-20 relative mb-4">
          <Image
            src="/perfil.jpeg"
            alt="Bryan Bonilla"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Nombre y descripción */}
        <div className="text-blacksac">
          <h1 className="text-4xl mb-2">Devon Lane</h1>
          <p className="text-lg">
            Physiological respiration involves the mechanisms that ensure that the
            composition of the functional
          </p>
        </div>

        {/* Botón con contorno negro */}
        <Link
          href="/perfil/bryan-bonilla"
          className="mt-10 px-6 py-2 bg-transparent text-blacksac border border-blacksac rounded-lg font-semibold hover:bg-blacksac hover:text-whitesac transition-colors"
        >
          Ver perfil
        </Link>
      </div>
    </div>
  );
}
