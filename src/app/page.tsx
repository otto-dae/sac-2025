"use client";

import Schedule from "@/components/schedule/Schedule";
import Speakers from "@/components/speakers/Speakers";
import LegoWall from "@/components/loading/LegoWall";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className=" overflow-hidden ">
      {isLoading ? (
        <LegoWall />
      ) : (
        <main className="pt-22 bg-[auto_70%] bg-repeat bg-[url('../../public/backgroundLanding.jpg')]">
          <Hero />
          <About/>
          <Schedule />
          <Speakers/>
          <Footer/>
        </main>
        )}
    </div>
  );
}
