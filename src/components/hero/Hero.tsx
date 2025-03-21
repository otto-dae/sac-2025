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
    <div className=" h-screen w-full flex flex-col justify-between items-center pt-10">
      <div className="flex flex-row w-full justify-center">
        <div className="w-52 absolute left-30 top-[50%] gap-10">
          <SectionButtons
            color={colorVars[3]}
            title="¿Qué es la SAC?"
            image={infoIcon}
            url="#about"
          />
          <SectionButtons
            color={colorVars[0]}
            title="Horarios"
            image={scheIcon}
            url="#schedule"
            identation="ml-10"
          />
          <SectionButtons
            color={colorVars[2]}
            title="Expositores"
            image={exibIcon}
            url="#speakers"
            identation="ml-20"
          />
        </div>
        <div className="w-96 relative">
          <Image
            src={heroImg}
            alt=""
            className=" absolute bottom-0 drop-shadow-lg"
          />

          <div className="bg-yellowsac w-96 h-96 rounded-full" />

          <div className="bg-redsac rounded-full w-70 h-70 absolute -top-40 -right-80"></div>
          <div className="bg-greensac rounded-full w-30 h-30 absolute top-40 -right-80"></div>
          <div className="bg-bluesac rounded-full w-30 h-30 absolute -bottom-20 -left-40"></div>
        </div>
      </div>

      <div className=" w-full flex flex-col">
        <p className=" w-full text-center text-blacksac font-light transform text-7xl ">
          SEMANA ACADEMICA <br />
          CULTURAL 2025
        </p>

        <div className=" flex flex-row w-full justify-end gap-5 pr-15">
          <p className=" text-2xl">Scroll</p>
          <Image alt="" src={downArrow} className=" animate-bounce h-full" />
        </div>
      </div>
    </div>
  );
}
