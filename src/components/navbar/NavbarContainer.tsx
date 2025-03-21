
import Navbar from "./Navbar";
import MiniNavbar from "./MiniNavbar";

export default function NavbarContainer(){

    return(
        <div className=" fixed z-10 w-full">
            <Navbar/>
            <MiniNavbar/>
        </div>
    )
}