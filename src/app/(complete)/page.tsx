import BigAhhChicken from "@/components/landingpage/herosection/BigAhhChicken";
import MenuSections from "@/components/landingpage/herosection/MenuSections";

export default function Home() {
  return (
    
    <div className="bg-[url(/backgroundLanding.jpeg)] bg-no-repeat bg-cover bg-center backdrop-opacity-100 backdrop-blur-xs ">
      <MenuSections/>
      <BigAhhChicken/>
      <div id="section-1" className="h-svh"></div>
      <div id="section-2" className="h-svh"></div>
      <div id="section-3" className="h-svh"></div>
    </div>


  )
}