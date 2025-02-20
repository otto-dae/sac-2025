import React from "react";

export default function MenuSections(){

    return(<div className="h-[158px] p-2.5 justify-start items-start gap-2.5 text-lg w-fit  ">
        <div className="justify-start items-center gap-[15px] flex transition-all duration-100 hover:scale-106">
            <div className="w-8 h-8  px-[5px] py-2 bg-[#ffdf61] rounded-[52px] justify-center items-center gap-[5px] flex">
                <img className="h-5 w-5" src="/InfoIcon.png" />
            </div>
            <div className="w-fit text-black font-normal font-['Cera Pro'] leading-tight">¿Qué es la SAC?</div>
        </div>
        <div className="justify-start items-center gap-[15px] flex transition-all duration-100 hover:scale-106">
            <div className="w-8 h-8 px-[5px] py-2 bg-[#f75e63] rounded-[52px] justify-center items-center gap-[5px] flex ml-10">
                <img className=" w-5 h-5" src="/ScheduleIcon.png" />
            </div>
            <div className="w-fit text-black font-normal font-['Cera Pro'] leading-tight">Horarios</div>
        </div>
        <div className="justify-start items-center gap-[15px] flex transition-all duration-100 hover:scale-106">
            <div className="w-8 h-8 px-[5px] py-2 bg-[#c5f06f] rounded-[52px] justify-center items-center gap-[5px] flex ml-20">
                <img className="w-5 h-5" src="LecturesIcon.png" />
            </div>
            <div className="w-fit text-black font-normal font-['Cera Pro'] leading-tight">Expositores</div>
        </div>
    </div>)
}