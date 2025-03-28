// Speakers.tsx
import SpeakerCard from "./SpeakerCard";
import speakersData from "../../testdata/speakers.json";

const Speakers = () => {
  const chunkSize = 6;
  const speakerChunks = [];
  for (let i = 0; i < speakersData.length; i += chunkSize) {
    speakerChunks.push(speakersData.slice(i, i + chunkSize));
  }

  return (

    <section id="speakers" className="flex flex-col items-center w-full gap-5">
      <h1 className="text-4xl md:text-7xl font-extralight tracking-wider">EXPOSITORES</h1>
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <SpeakerCard key={index} index={index} />
      ))}
    </div>
    </section>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {speakerChunks.map((chunk, index) => (
          <div key={index} className="flex flex-col gap-6">
            {chunk.map((speaker, idx) => (
              <SpeakerCard key={idx} speaker={speaker} index={idx} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
