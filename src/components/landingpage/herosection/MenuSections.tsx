import React from "react";

export default function MenuSections(){

    return(<div className="h-[158px] p-2.5 justify-start items-start gap-2.5 ">
        <div className="justify-start items-center gap-[15px] flex">
            <div className="w-10 h-10 px-[5px] py-2 bg-[#ffdf61] rounded-[52px] justify-center items-center gap-[5px] flex">
                <img className="grow shrink basis-0 self-stretch" src="https://placehold.co/30x24" />
            </div>
            <div className="w-[294px] text-black text-2xl font-normal font-['Cera Pro'] leading-tight">¿Qué es la SAC?</div>
        </div>
        <div className="justify-start items-center gap-[15px] flex">
            <div className="w-10 h-10 px-[5px] py-2 bg-[#f75e63] rounded-[52px] justify-center items-center gap-[5px] flex ml-10">
                <img className="grow shrink basis-0 self-stretch" src="https://placehold.co/30x24" />
            </div>
            <div className="w-[294px] text-black text-2xl font-normal font-['Cera Pro'] leading-tight">Horarios</div>
        </div>
        <div className="justify-start items-center gap-[15px] flex">
            <div className="w-10 h-10 px-[5px] py-2 bg-[#c5f06f] rounded-[52px] justify-center items-center gap-[5px] flex ml-20">
                <img className="grow shrink basis-0 self-stretch" src="https://placehold.co/30x24" />
            </div>
            <div className="w-[294px] text-black text-2xl font-normal font-['Cera Pro'] leading-tight">Expositores</div>
        </div>
    </div>)
}