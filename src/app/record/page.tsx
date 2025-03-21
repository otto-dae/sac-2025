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
      return screenWidth * 0.3; 
    } else {
      return screenWidth * 0.8;
    }
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        src="/attendance.png"
        alt="Fondo de asistencia"
        layout="fill"
        objectFit="cover"
        className="absolute z-1 mt-50"
      />

      {/* Contenedor de las manos */}
      <div className="flex w-full justify-between absolute top-[25%] px-4 sm:px-8 md:px-16 lg:px-45 z-2">
        {/* Mano izquierda */}
        <div className="w-[120px] sm:w-[150px] md:w-[177px] h-[60px] sm:h-[70px] md:h-[84px] rounded-[23px] border-[10px] border-[#E79344] bg-[#FFDF62]" />
        
        {/* Mano derecha */}
        <div className="w-[120px] sm:w-[150px] md:w-[177px] h-[60px] sm:h-[70px] md:h-[84px] rounded-[23px] border-[10px] border-[#E79344] bg-[#FFDF62]" />
      </div>

      {/* Contenedor de la cabeza y el sombrero */}
      <div className="flex flex-col items-center absolute top-0 z-[-1]">
        {/* Sombrero */}
        <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[80px] sm:h-[90px] md:h-[100px] rounded-[24px] border-[10px] border-[#E79344] bg-[#FFDF62] " />

        {/* Cabeza */}
        <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[240px] md:h-[280px] flex flex-col justify-center items-center gap-[12px] rounded-[40px] border-[10px] border-[#E79344] bg-[#FFDF62] mt-[-30px] sm:mt-[-45px]" />
      </div>

      {/* Contenedor para el SVG y el texto */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center md:top-[55%] lg:top-[60%] lg:left-[47%]">
        <AttendanceShett width={getSvgWidth()} />

        {/* Texto alineado al centro */}
        <p className="absolute top-[40%] sm:top-[25%] md:top-[35%] lg:top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50 text-center xs:text-[2px] text-md sm:text-[20px] lg:text-[2rem] mt-2">
          GENERAR HOJA DE ASISTENCIAS
        </p>

        {/* Línea con degradado */}
        <div
          className="absolute top-[50%] sm:top-[35%] md:top-[45%] lg:top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[412px] h-[4px] flex-shrink-0 mt-2"
          style={{
            background: "linear-gradient(90deg, #FFDF62 25%, #C5F06F 25%, #C5F06F 50%, #42CDFF 50%, #42CDFF 75%, #F75E63 75%)",
          }}
        />
      </div>

      {/* Contenedor para el modal */}
      <div className="absolute top-[-10%] left-[50%] transform -translate-x-1/2 z-60 w-[240px] sm:w-[80%] md:w-[53%] lg:w-[60%] md:top-[-10%] lg:top-[-1%] lg:left-[47%]">
        <LegoModal />
      </div>
    </div>
  );
}
