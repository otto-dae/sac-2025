import Image from "next/image";
import heroImg from "../../../public/HeroTroyan.png";
import downArrow from "../../../public/Down_Arrow.svg";
import SectionButtons from "./SectionButtons";
import { colorVars } from "@/app/globals";
import infoIcon from "./assets/Information.png";
import scheIcon from "./assets/Schedule.png";
import exibIcon from "./assets/Exhibitor.png";

export default function Hero() {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center -mt-15 transition-all relative z-50">
      <div className="flex flex-row w-full justify-center">
        <div className="w-52 absolute left-[5%] top-0 md:top-[30%] gap-10">
          <SectionButtons
            color={colorVars[3]}
            title="¿Qué es la SAC?"
            image={infoIcon.src}
            url="#about"
          />
          <SectionButtons
            color={colorVars[0]}
            title="Horarios"
            image={scheIcon.src}
            url="#schedule"
            identation="md:ml-10"
          />
          <SectionButtons
            color={colorVars[2]}
            title="Expositores"
            image={exibIcon.src}
            url="#speakers"
            identation="md:ml-20"
          />
        </div>
        <div className="w-70 md:w-86 relative z-20">
          <Image
            src={heroImg}
            alt=""
            className=" absolute bottom-0 drop-shadow-lg"
          />

          <div className="bg-yellowsac w-70 h-70 md:w-86 md:h-86 rounded-full" />

          <div className="bg-redsac rounded-full w-30 h-30 -top-20 -right-[20%] md:w-46 md:h-46 absolute md:-top-20 md:-right-40"></div>
          <div className="bg-greensac rounded-full w-10 h-10 top-10 -right-[20%] md:w-18 md:h-18 absolute md:top-30 md:-right-40"></div>
          <div className="bg-bluesac rounded-full w-8 h-8 md:w-16 md:h-16 absolute md:-bottom-10 md:-left-20"></div>
        </div>
      </div>

      <div className=" w-full flex flex-col h-fit mt-10 z-20">
        <p className=" w-full text-center text-blacksac font-light transform text-4xl md:text-7xl ">
          SEMANA ACADEMICA <br />
          CULTURAL 2025
        </p>

        <div className=" flex flex-row w-full justify-end gap-5 pr-10 h-10">
          <p className=" text-xl md:text-2xl">Scroll</p>
          <Image alt="" src={downArrow} className=" animate-bounce h-full" />
        </div>
      </div>

      <div className="flex flex-col justify-center absolute h-96 min-h-96 w-screen top-0 opacity-30">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="flex flex-row w-full min-h-32" key={index}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className=" min-w-32 w-full min-h-24 h-full outline-1 outline-blacksac/20"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
