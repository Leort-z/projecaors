import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {

    return (
        <>
        <div className="visible md:invisible ">
            <MobileNavbar/>
        </div>

        <div className="invisible md:visible ">
            <DesktopNavbar/> 
        </div>
        </>)
}