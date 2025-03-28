// SpeakerCard.tsx
import Image from "next/image";
import { colorVars } from "@/app/globals";

interface Speaker {
  name: string;
  description: string;
  urlImage: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  index: number; // Añadimos el índice como propiedad
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  const maxNameLength = 40;
  const maxDescriptionLength = 100;

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-16">
        {/* Usamos el índice para variar el color */}
        <div className={`w-22 h-10 ${colorVars[index % 4]} rounded-t-lg`}></div>
        <div className={`w-22 h-10 ${colorVars[index % 4]} rounded-t-lg`}></div>
      </div>

      <div className={`w-100 h-100 ${colorVars[index % 4]} rounded-lg p-8 flex flex-col items-start text-left`}>
        <div className="w-20 h-20 relative mb-4">
          <Image
            src={speaker.urlImage}
            alt={speaker.name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-black">
          <h1 className="text-4xl mb-2">
            {truncateText(speaker.name, maxNameLength)}
          </h1>
          <p className="text-lg">
            {truncateText(speaker.description, maxDescriptionLength)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
