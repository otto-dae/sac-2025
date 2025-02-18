import React from "react"
import Image from "next/image";
import GenerateQrButton from "./GenerateQRButton";

export default function Navbar() {
    return (

        <>        
        <div className="flex w-full bg-amber-500 h-fit content-center items-center">
            <div className="flex w-fit bg-blue-200 h-fit content-center items-center ml-5">

                <a className="w-fit h-fit flex content-center items-center mr-10" href="/generateqr">
                    <Image src={"/homeIcon.png"} alt="Picture of SAC" width={40} height={36.666} unoptimized={true}/>
                    <div className="text-black text-2xl font-normal font-['Cera Pro'] leading-normal p-2">INICIO</div>            
                </a>

                <a className="w-fit h-fit flex content-center items-center" href="/generateqr">
                    <Image src={"/AsistenciaIcon.png"} alt="Picture of SAC" width={40} height={36.666} unoptimized={true}/>
                    <div className="text-black text-2xl font-normal font-['Cera Pro'] leading-normal p-2">ASISTENCIA</div>            
                </a>
                </div>

                <div className="w-fit h-fit justify-center self-center place-self-center">
                <Image src={"/SACIcon.png"} alt="Picture of SAC" width={61} height={61} unoptimized={true}/>
                </div>

                <div>
                    <GenerateQrButton/>
                </div>

        </div>
       


        </>

    );
}