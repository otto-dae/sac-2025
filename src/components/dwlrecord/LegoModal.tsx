'use client'
import React, { useState } from "react";
import RedBrickPdf from "./RedBrickPdf";
import YellowBrickPdf from "./YellowBrickPdf";
import DownloadPdfButton from "./DownloadPdfButton";
import BoldLego from "./BoldLego";
import TextBubbledwlr from "./TextBubbledwlr";

const LegoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expediente, setExpediente] = useState("");

  const openModal = () => {
    if (expediente.trim() !== "") {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setExpediente(""); 
  };

  return (
    <div className="flex flex-col justify-start items-center z-50 h-screen relative">
      <div className="flex flex-col justify-start items-center w-full h-full mt-20"> 
        <input
          type="number"
          value={expediente}
          onChange={(e) => setExpediente(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
          placeholder="Ingresa tu expediente..."
          className="border-1 border-gray-700 rounded-3xl p-1 md:p-2 w-[90%] max-w-[500px] focus:outline-none placeholder:text-xl placeholder:p-3"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
          {/* Modal con dimensiones fijas y propio tamaño */}
          <div className="rounded-3xl relative min-h-[400px] min-w-[500px] bg-gradient-to-r from-[#f87171] from-50% to-white to-50% overflow-hidden sm:min-h-[300px] sm:min-w-[500px] md:min-h-[400px] md:min-w-[700px]">
            <div className="w-[140px] h-[140px] absolute top-24 left-0 z-20 ml-[2px] sm:top-0 sm:p-2 md:p-0 md:w-fit md:h-fit md:mt-[30px] md:ml-[10px]">
              <TextBubbledwlr />
            </div>

            <div className="sm:hidden w-full h-fit absolute left-1/2 -translate-x-1/2 bottom-0 rotate-270 mb-[86px]">
              <YellowBrickPdf />
            </div>

            <div className="hidden sm:block w-full h-fit absolute left-1/2 -translate-x-1/2 top-0 ml-[15px]">
              <RedBrickPdf />
            </div>

            <div className="w-[140px] h-fit absolute left-1/2 -translate-x-1/2 bottom-24 mb-[86px] sm:bottom-0 sm:mb-[3px] sm:absolute sm:left-38 md:w-[160px] md:h-fit md:left-50">
              <BoldLego />
            </div>

            <div className="w-full h-fit absolute bottom-0 mb-[18px] sm:w-fit sm:h-fit sm:right-12 sm:mt-[20px] sm:top-1/2 sm:-translate-y-1/2 sm:mb-[0px]">
              <DownloadPdfButton />
            </div>

            <div className="w-fit h-fit absolute top-6 right-6 ">
              <span className="text-black text-2xl font-bold cursor-pointer hover:text-red-500" onClick={closeModal}>
                ✕
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegoModal;
