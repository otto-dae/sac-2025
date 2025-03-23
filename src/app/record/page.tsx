'use client';
import { useEffect, useState } from 'react';
import LegoModal from '@/components/dwlrecord/LegoModal';
import Image from 'next/image';
import AttendanceShett from '@/components/attendance/AttendanceSheet';

export default function Record() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSvgWidth = () => {
    if (screenWidth >= 1024) {
      return screenWidth * 0.6; 
    } else if (screenWidth >= 768) {
      return screenWidth * 0.65; 
    } else if (screenWidth >= 640) {
      return screenWidth * 0.4;  
    } else {
      return screenWidth * 0.75; 
    }
  };

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        src="/Attendance.png"
        alt="Fondo de asistencia"
        layout="fill"
        objectFit="cover"
        className="absolute z-1 w-full h-full mt-50"
        
      />

      {/* Contenedor de las manos */}
      <div className="flex w-full justify-between absolute z-2 mt-[-70%] px-4 sm:px-8 md:px-16 lg:px-45 lg:mt-[-18%] ">
        <div className="w-[120px] sm:w-[150px] md:w-[177px] h-[60px] sm:h-[70px] md:h-[84px] rounded-[23px] border-[10px] border-[#E79344] bg-[#FFDF62]" />
        <div className="w-[120px] sm:w-[150px] md:w-[177px] h-[60px] sm:h-[70px] md:h-[84px] rounded-[23px] border-[10px] border-[#E79344] bg-[#FFDF62]" />
      </div>

      {/* Contenedor de la cabeza y el sombrero */}
      <div className="flex flex-col items-center absolute top-0 z-[-1] ">
        <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[80px] sm:h-[90px] md:h-[100px] rounded-[24px] border-[10px] border-[#E79344] bg-[#FFDF62] " />
        <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[240px] md:h-[280px] flex flex-col justify-center items-center gap-[12px] rounded-[40px] border-[10px] border-[#E79344] bg-[#FFDF62] mt-[-30px] sm:mt-[-45px]" />
      </div>

      {/* Contenedor para el SVG, el texto y el modal */}
      <div className="flex flex-col items-center justify-center z-2 mt-[140px] relative">
        {/* Contenedor SVG con el modal dentro */}
        <div className="relative w-full flex justify-center items-center mt-50">
          {/* El SVG */}
          <AttendanceShett width={getSvgWidth()} />
          
          {/* Texto sobre el SVG */}
          <span className="absolute top-[40%] text-center xs:text-xs sm:text-[20px] md:text-[24px] lg:text-[2rem] z-2 w-fit lg:top-[25%]">
            GENERAR HOJA DE ASISTENCIAS

            {/* Línea de degradado */}
            <div className="absolute left-1/2 bottom-[-4px] h-[4px] w-full bg-[linear-gradient(90deg,#F75E63_0%,#F75E63_25%,#42CDFF_25%,#42CDFF_50%,#C5F06F_50%,#C5F06F_75%,#FFDF62_75%,#FFDF62_100%)] transform -translate-x-1/2" />

            {/* Modal */}
            <div className="absolute top-[-100%] left-[50%] transform -translate-x-1/2 z-2 w-full lg:top-[60%]">
              <LegoModal />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
