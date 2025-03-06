import React from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return (
      <html lang="en" className=" scroll-smooth font-[Cera-pro]">
        <body className="bg-amber-950">
          {children}
          <div className=" w-10 h-10 bg-green-500">asdasd</div>
        </body>
      </html>
  
    );
      
    }