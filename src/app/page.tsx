import Speakers from "@/components/landingpage/speakers/Example";

export default function Home() {
  return (
    <div className="p-8">
      {/* Título */}
      <h1 className="text-3xl font-bold underline text-redsac mb-8">
        Hello world!
      </h1>

      {/* Grid de 3 columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Renderizar 9 componentes Speakers */}
        {Array.from({ length: 9 }).map((_, index) => (
          <Speakers key={index} />
        ))}
      </div>
    </div>
  );
}