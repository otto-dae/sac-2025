"use client";

import React, { useEffect, useState,  } from "react";
import Image from "next/image";
import NavbarButton from "./NavbarButton";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () =>{
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-1000">
        <div id="navbar-container" className={`flex h-[8dvh] transition text-xl w-full content-center items-center justify-between bg-black`}>
          <div className="hidden md:flex md:flex-row px-4 gap-4 md:w-fit md:h-fit">
            <NavbarButton text={"Inicio"} styling={""} imageUrl={"/homeIcon.png"} linkUrl={"/"} tStyling={""} width={45} height={90}/>
            <NavbarButton text={"Asistencia"} styling={""} imageUrl={"/AsistenciaIcon.png"} linkUrl={"/record"} tStyling={""} width={45} height={90}/>
          </div>

          <div className="md:hidden px-4">
            <button onClick={toggleMenu} className="flex flex-col justify-center items-center w-10 h-10 z-30">
              <span className={`block w-6 h-0.5 mb-1.5 transition-all bg-white`}></span>
              <span className={`block w-6 h-0.5 mb-1.5 transition-all bg-white`}></span>
              <span className={`block w-6 h-0.5 transition-all bg-white`}></span>
            </button>
          </div>

          <Link href={"/"} className="px-2" onClick={closeMenu}>
            <Image className="transition-all duration-100 hover:scale-106" src={"/SACIcon.png"} alt={"Sac Icon"} width={100} height={100}/>
          </Link>

          <div className="px-4" onClick={closeMenu}>
            <NavbarButton 
              text={"Generar qr"} 
              styling={`md:border-2 md:border-whitesac md:rounded-full md:px-6 md:py-1 text-white`} 
              imageUrl={"/QRLegoHead.svg"} 
              linkUrl={"/expsearch"} 
              tStyling={" hidden md:block text-xl font-medium font-['Cera_Pro'] leading-normal"} 
              width={32} 
              height={80}
            />
          </div>
        </div>
      </header> 

      <div className="h-[8vh]"></div>

      <div 
        className={`fixed inset-0 bg-transparent backdrop-blur-xs z-100 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      ></div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-bluesac z-101 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="pt-24 px-4 flex flex-col gap-10">
          <div className="w-fit" onClick={closeMenu}>        
            <NavbarButton text={"Inicio"} styling={""} imageUrl={"/homeIcon.png"} linkUrl={"/"} tStyling={""} width={45} height={90}/>
          </div>
          <div className="w-fit" onClick={closeMenu}>        
            <NavbarButton text={"Asistencia"} styling={""} imageUrl={"/AsistenciaIcon.png"} linkUrl={"/record"} tStyling={""} width={45} height={90}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;