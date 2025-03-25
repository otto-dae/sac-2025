import React from "react";
import Image from "next/image"; 

function App() {
  return (
    <div className="page">
      <div className="top-image w-full">
        <Image 
          src="/bloques.png" 
          alt="Imagen Superior" 
          layout="responsive" 
          width={1920} 
          height={1080} 
          className="w-full h-auto"
        />
      </div>

      <div className="content flex flex-col min-h-screen">
        
        <div className="logo absolute top-16 left-8 w-1/4">
          <Image 
            src="/Logo.png" 
            alt="logo" 
            layout="responsive" 
            width={400} 
            height={200} 
            className="w-full h-auto"
          />
        </div>

        <div className="perfil absolute top-20 left-80 w-1/4">
          <Image 
            src="/perfil.png" 
            alt="perfil" 
            layout="responsive" 
            width={400} 
            height={400} 
            className="w-full h-auto"
          />
          <p>000000</p>
        </div>

        <h1 className="text-xl mt-32">Contenido Central</h1>
        <p>Aquí va el contenido principal de la página.</p>
      </div>

      <div className="bottom-image w-full">
        <Image 
          src="/bloques2.png" 
          alt="Imagen Inferior" 
          layout="responsive" 
          width={1920} 
          height={1080} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default App;
