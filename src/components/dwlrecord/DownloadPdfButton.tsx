import React from "react";

export default function DownloadPdfButton(){
    return(
        <a href="TestDownloadLego.pdf" download="TestDownloadLego" target='_blank'>        
            <div className="items-center rounded-full m-auto w-fit h-131px bg-[#FFDF62] transition-all duration-100 hover:scale-106 cursor-pointer">
                <p className="self-center p-8 font-bold text-3xl">DOWNLOAD PDF</p>
            </div>
        </a>

    )
}