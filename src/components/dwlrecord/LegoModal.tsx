import React, { useState } from "react";
import RedBrickPdf from "./RedBrickPdf";
import DownloadPdfButton from "./DownloadPdfButton";
import BoldLego from "./BoldLego";
import TextBubbledwlr from "./TextBubbledwlr";


const LegoModal = () => {
      const [isOpen, setIsOpen] = useState(false);

      const openModal = () => {
        setIsOpen(true);
      };

      const closeModal = () => {
        setIsOpen(false);
  };
    return (
      <div className="p-8">
      {/* Show Modal Button */}
      <button 
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
      >
        Show Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-50">
          <div className="rounded-3xl relative min-h-[540px] min-w-[910px] bg-gradient-to-r from-[#F75E63] from-50% to-white to-50% overflow-hidden">
            <div className="w-fit h-fit absolute top-24 left-28">
              <TextBubbledwlr />
            </div>
            
            <div className="w-fit h-fit absolute left-1/4 bottom-0 mb-[10px]">
              <BoldLego />
            </div>
            
            <div className="w-fit h-fit absolute right-16 top-1/2 -translate-y-1/2">
              <DownloadPdfButton />
            </div>
            
            <div className="w-fit h-fit absolute top-6 right-6">
              <span 
                className="text-black text-2xl font-bold cursor-pointer" 
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
