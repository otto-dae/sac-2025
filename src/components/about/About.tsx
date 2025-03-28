import Image from "next/image";
import leftWall from "./assets/brikwall_left.svg"
import rightWall from "./assets/brikwall_right.svg"
import altBg from "./assets/altBgAbout.svg"

export default function About() {
  return (
    <section id="about" className="relative w-full h-screen flex items-center justify-center md:mt-20 md:mb-20 p-2 md:p-28">
      <div className=" w-full justify-evenly items-center flex flex-col md:p-20">
        <div className="hidden md:flex mb-20 h-1 w-6xl bg-linear-[90deg,rgba(247,94,99,1)_25%,rgba(66,205,255,1)_25%,rgba(66,205,255,1)_50%,rgba(197,240,111,1)_50%,rgba(214,235,107,1)_75%,rgba(255,223,98,1)_75%,rgba(255,223,98,1)_100%]" />
        <div className="relative pr-10 pl-10 md:p-15 mb-5 max-w-3xl text-center flex items-center justify-center gap-5 w-full">
          <Image src="/cubo.svg" alt="Lego" width={70} height={70} className=" w-16 h-16"/>
          <h1 className="text-2xl md:text-6xl font-light text-blacksac">¿QUÉ ES LA SAC?</h1>
        </div>

        <p className="pr-15 pl-15 md:p-10 text-lg md:text-4xl text-center font-light text-black">
          La Semana Académica y Cultural es el magno evento de la Facultad de Informática, este evento marca la celebración por el aniversario de su fundación. La SAC está hecha por y para toda la comunidad, crearás recuerdos, amistades, vínculos, conocimientos y experiencias que nunca olvidarás 🫶🏻
        </p>

        <div className="hidden md:flex mt-20 h-1 w-6xl bg-linear-[90deg,rgba(247,94,99,1)_25%,rgba(66,205,255,1)_25%,rgba(66,205,255,1)_50%,rgba(197,240,111,1)_50%,rgba(214,235,107,1)_75%,rgba(255,223,98,1)_75%,rgba(255,223,98,1)_100%]"/>
      </div>

      <div className="hidden lg:flex absolute w-full justify-between top-90">
        <Image alt="" src={leftWall}/>
        <Image alt="" src={rightWall}/>
      </div>

      <div className="flex justify-center w-full object-cover absolute sm:hidden">
        <Image src={altBg} alt=""/>
      </div>
    </section>
  );
}
