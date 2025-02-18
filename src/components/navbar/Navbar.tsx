import React from "react"
import Image from "next/image";
import GenerateQrButton from "./GenerateQRButton";

export default function Navbar() {
    return (
        <div className="flex w-full bg-amber-500 h-fit content-center items-center">
            <a className="w-fit h-fit" href="/generateqr">
                <Image src={"/homeIcon.png"} alt="Picture of SAC" width={40} height={36.666} unoptimized={true}/>
            </a>

            <div className="w-fit h-fit">
                <Image src={"/AsistenciaIcon.png"} alt="Picture of SAC" width={40} height={36.666} unoptimized={true}/>
            </div>

            <div className="w-fit h-fit">
                <Image src={"/SACIcon.png"} alt="Picture of SAC" width={61} height={61} unoptimized={true}/>
            </div>
            <div>
                <GenerateQrButton/>
            </div>
        </div>
    );
}