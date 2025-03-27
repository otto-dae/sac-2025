import Schedule from "@/components/schedule/Schedule";
import Speakers from "@/components/speakers/Speakers";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/loading/Loader";

export default function Home() {
  return (
    <div className=" overflow-hidden ">
      <Loader />
      <main className="pt-22 bg-[auto_70%] bg-repeat bg-[url('../../public/backgroundLanding.jpg')]">
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <Footer />
      </main>
    </div>
  );
}
