'use client'

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MiniNavbar from "./MiniNavbar";

export default function NavbarContainer(){

    const [isDesktop, setDesktop]= useState(window.innerWidth > 900);

    const updateView = ()=>{
      setDesktop(window.innerWidth > 900);
    }

    useEffect(() => {
      window.addEventListener("resize", updateView);
      
      return () => {
        window.removeEventListener("resize", updateView);
      }
    });

    return(
        <>
            {isDesktop ? (<Navbar/>) : (<MiniNavbar/>)}
        </>
    )
}