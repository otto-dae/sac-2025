import { colorVars } from "@/app/globals";
import Image from "next/image";
import Link from "next/link";

interface props {
  index : number;
}

export default function SpeakerCard({ index }: props) {

  return (
    <div className="flex flex-col items-center">
      {/* Puntos del bloque de Lego */}
      <div className="flex space-x-16">
        <div className={`w-22 h-10 ${colorVars[index % 4]} rounded-t-lg`}></div>
        <div className={`w-22 h-10 ${colorVars[index % 4]} rounded-t-lg`}></div>
      </div>

      {/* Base del bloque de Lego */}
      <div className={`w-100 h-100 ${colorVars[index % 4]} rounded-lg p-8 flex flex-col items-start text-left`}>
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