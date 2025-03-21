import Image from "next/image";
import leftWall from "./assets/brikwall_left.svg"
import rightWall from "./assets/brikwall_right.svg"

export default function About() {
  return (
    <section id="about" className="relative w-full h-screen flex items-center justify-center">
      <div>
        <div className="h-1 w-full bg-linear-[90deg,rgba(247,94,99,1)_25%,rgba(66,205,255,1)_25%,rgba(66,205,255,1)_50%,rgba(197,240,111,1)_50%,rgba(214,235,107,1)_75%,rgba(255,223,98,1)_75%,rgba(255,223,98,1)_100%]" />
        <div className="relative p-10 max-w-3xl text-center flex items-center justify-center gap-5">
          <Image src="/cubo.svg" alt="Lego" width={70} height={70} />
          <h1 className="text-6xl font-light text-blacksac">¿QUÉ ES LA SAC?</h1>
        </div>

        <p className="relative p-10 max-w-3xl text-4xl text-center font-light text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          bibendum at tellus sit amet tristique. Phasellus sit amet feugiat
          eros, a lobortis orci. Duis tempus aliquam sem, in convallis magna
          bibendum eget.
        </p>

        <div className="h-1 w-full bg-linear-[90deg,rgba(247,94,99,1)_25%,rgba(66,205,255,1)_25%,rgba(66,205,255,1)_50%,rgba(197,240,111,1)_50%,rgba(214,235,107,1)_75%,rgba(255,223,98,1)_75%,rgba(255,223,98,1)_100%]"/>
      </div>

      <div className=" absolute w-full flex justify-between top-40">
        <Image alt="" src={leftWall}/>
        <Image alt="" src={rightWall}/>
      </div>
    </section>
  );
}
