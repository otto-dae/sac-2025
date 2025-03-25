"use client"

import Image from "next/image";
import Static from "./resources/Static-Err.svg";
import Leg from "./resources/Leg-Err.svg";
import Ouch from "./resources/Ouch-Err.svg"
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";

interface props {
  code: number;
  message: string;
}

const ErrorComponent = ({code, message}: props) => {
  const movable = useRef(null);

  const {contextSafe} = useGSAP({scope: movable})
  
  const move = contextSafe(() => {
    gsap.set('#movable-leg', {rotate: -60, transformOrigin: "50% 10%"})
    gsap.to('#movable-leg', {rotate: -45, duration: 1, ease: "back", yoyo: true, repeat: -1})

    gsap.set("#ouch", {opacity: 0})
    gsap.to("#ouch", {opacity: 1, x: 10, ease: "bounce",
      duration: 2,
      stagger: {
        each: 0.5,
        repeat: -1
      }})
  })

  useEffect(() => {
    move()
  })

  
  return (
    <div className=" m-20 flex flex-col justify-center gap-10 items-center h-full overflow-clip">
      <div className=" relative flex flex-row h-full w-full md:w-96" ref={movable}>
        <Image id="movable-leg" src={Leg} alt="" className="absolute right-[40%] top-[20%] w-[70%]" />
        
        <Image src={Static} alt="" className="w-full"/>
        <Image id="ouch" src={Ouch} alt="" className=" w-[20%] -ml-[25%] mt-[10%]"/>
      </div>
      <div className="lg:text-6xl text-3xl inline-flex items-center gap-5 h-full">
        <span className=" text-redsac font-bold text-6xl lg:text-8xl">{code}: </span>
        {message}
      </div>
    </div>
  );
};

export default ErrorComponent;
