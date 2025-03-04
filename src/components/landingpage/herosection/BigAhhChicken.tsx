import React from "react";

export default function BigAhhChicken(){
    return(
        <div id="hero-section-container" className="w-full absolute m-0 bg-amber-500 ">
            <div className=" w-[251px] h-[251px] bg-[#f75e63] m-auto right-0 rounded-full absolute"></div>
            <div className="w-[122px] h-[122px] bg-[#c5f06f] m-auto right-0 rounded-full absolute"></div>
            <div className="w-[88px] h-[88px] bg-[#42cdff] m-auto left-0 rounded-full absolute"></div>

            <div id="model-container" className="h-fit w-fit m-auto relative bg-fuchsia-600">
            <div className="w-[429.58px] h-[429.58px] m-auto left-0 right-0 top-[56.42px] bg-[#ffdf61] rounded-full"></div>
            <img className="w-[800.58px] h-[486px] rounded-bl-[999px] top-0 absolute rounded-br-[999px] shadow-[4px_0px_10px_0px_rgba(0,0,0,0.20)]" src="BigAhhhhChicken.png" />
            </div>

        </div>
    )
}