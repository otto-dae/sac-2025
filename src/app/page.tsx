"use client";

import Schedule from "@/components/schedule/Schedule";
import Speakers from "@/components/speakers/Speakers";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";


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
    <div className=" overflow-hidden bg-[auto_50%] bg-repeat bg-whitesac bg-[url('../../public/backgroundLanding.jpg')]">
      {/* {isLoading ? (
        <LegoWall />
      ) : ( */}
        <main className="pt-22 bg-whitesac/50">
          <Hero />
          <About/>
          <Schedule />
          <Speakers/>
          <Footer/>
        </main>
        {/* )} */}
    </div>
  );
}
