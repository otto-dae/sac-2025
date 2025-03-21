"use client";

import { useState, useEffect } from "react";
import LegoWall from "@/components/loading/LegoWall";
import Schedule from "@/components/schedule/Schedule";
import Speakers from "@/components/speakers/Speakers";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";


export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const loadData = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 10000));
  //     setIsLoading(false);
  //   };

  //   loadData();
  // }, []);

  return (
    <div className=" overflow-hidden">
      {/* {isLoading ? (
        <LegoWall />
      ) : ( */}
        <main className="pt-22 bg-whitesac/50">
          <Hero />
          <About/>
          <Schedule />
          <Speakers/>
        </main>
        {/* )} */}
    </div>
  );
}
