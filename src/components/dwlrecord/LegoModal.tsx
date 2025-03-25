"use client";
import React, { useState } from "react";
import Image from "next/image";

const LegoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expediente, setExpediente] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!expediente.trim()) return;
  
    setLoading(true);
    setError("");
  
    setTimeout(() => {
      setLoading(false);
      if (expediente === "123") {
        setIsOpen(true);  
      } else {
        setError("Expediente no encontrado");
        setExpediente(""); // Reset input
      }
    }, 2000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setExpediente("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-5 lg:mt-15">
      {!loading ? (
        <>
          <input
            type="number"
            value={expediente}
            onChange={(e) => setExpediente(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Ingresa tu expediente..."
            className="border-1 border-gray-700 rounded-3xl p-2 w-full focus:outline-none text-lg md:text-xl placeholder-gray-400"
          />
          {error && <p className="text-red-500 mt-2 lg:mt-5 text-md lg:text-sm">{error}</p>}
        </>
      ) : (
        <Image
          src="/cubo.svg"
          alt="Lego Loader"
          width={70}
          height={70}
          className="animate-pulse mb-20"
        />
      )}

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
          <div className="rounded-3xl relative min-h-[600px] min-w-[300px] bg-gradient-to-r from-[#f87171] from-50% to-white to-50% overflow-hidden sm:min-h-[300px] sm:min-w-[500px] md:min-h-[400px] md:min-w-[700px]">
            
            <div className="w-[140px] h-[140px] absolute top-24 left-0 z-20 ml-[2px] sm:top-0 sm:p-2 md:p-0 md:w-fit md:h-fit md:mt-[30px] md:ml-[10px]">
              <Image src="/TextBubbleModal.svg" alt="Text Bubble" width={140} height={140} />
            </div>

            <div className="sm:hidden w-full h-fit absolute left-1/2 -translate-x-1/2 bottom-0 rotate-270 mb-[86px]">
              <svg width="" height="161" viewBox="0 0 33 161">
                <g clipPath="url(#clip0_148_1669)">
                  <path d="M32.5 69.5L32.5 23.5L16.5 23.5L16.5 69.5H32.5Z" fill="#fcd34d" />
                  <path d="M32.5 137.5L32.5 91.5H16.5L16.5 137.5H32.5Z" fill="#fcd34d" />
                  <path d="M16.5 161L16.5 0L-52.5 0L-52.5 161L16.5 161Z" fill="#fcd34d" />
                </g>
                <defs>
                  <clipPath id="clip0_148_1669">
                    <rect width="161" height="85" fill="white" transform="matrix(0 1 -1 0 32.5 0)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="hidden sm:block w-full h-fit absolute left-1/2 -translate-x-1/2 top-0 ml-[15px]">
              <svg width="" height="161" viewBox="0 0 33 161">
                <g clipPath="url(#clip0_148_1669)">
                  <path d="M32.5 69.5L32.5 23.5L16.5 23.5L16.5 69.5H32.5Z" fill="#f87171" />
                  <path d="M32.5 137.5L32.5 91.5H16.5L16.5 137.5H32.5Z" fill="#f87171" />
                  <path d="M16.5 161L16.5 0L-52.5 0L-52.5 161L16.5 161Z" fill="#f87171" />
                </g>
                <defs>
                  <clipPath id="clip0_148_1669">
                    <rect width="161" height="85" fill="white" transform="matrix(0 1 -1 0 32.5 0)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="w-[140px] h-fit absolute left-1/2 -translate-x-1/2 bottom-24 mb-[86px] sm:bottom-0 sm:mb-[3px] sm:absolute sm:left-40 md:w-[160px] md:h-fit md:left-50">
              <Image src="/ModalLego.svg" alt="Lego Modal" width={140} height={140} />
            </div>

            <div className="w-full h-fit absolute bottom-0 mb-[18px] right-0 sm:w-fit sm:h-fit sm:right-8 sm:mt-[20px] sm:top-1/2 sm:-translate-y-1/2 sm:mb-[0px]">
              <a href="TestDownloadLego.pdf" download="TestDownloadLego" target='_blank'>
                <div className="items-center rounded-full w-fit h-131px m-auto bg-[#FFDF62] transition-all duration-100 hover:scale-106 cursor-pointer">
                  <p className="self-center p-6 font-bold text-2xl sm:p-4 sm:text-xl md:p-6 md:text-2xl">DOWNLOAD PDF</p>
                </div>
              </a>
            </div>

            <div className="w-fit h-fit absolute top-6 right-6">
              <span
                className="text-black text-2xl font-bold cursor-pointer hover:text-red-500"
                onClick={closeModal}
              >
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
