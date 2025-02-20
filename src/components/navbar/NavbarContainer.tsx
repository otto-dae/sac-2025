'use client'

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MiniNavbar from "./MiniNavbar";

export default function NavbarContainer(){

    const [isDesktop, setDesktop]= useState(window.innerWidth > 1000);

    const updateView = ()=>{
      setDesktop(window.innerWidth > 1000);
    }

    useEffect(() => {
      window.addEventListener("resize", updateView);
      
      return () => {
        window.removeEventListener("resize", updateView);
      }
    }, [])

    return(
        <>
            {isDesktop ? (<Navbar/>) : (<MiniNavbar/>)}

        </>
    )
    
}
