import SpeakerCard from "./SpeakerCard";

const Speakers = () => {
  return (
    <section id="speakers" className=" flex flex-col items-center w-full gap-5">
        <h1 className=" text-4xl md:text-7xl font-extralight tracking-wider">EXPOSITORES</h1>
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <SpeakerCard key={index} index={index} />
      ))}
    </div>
    </section>

  );
};

export default Speakers;
