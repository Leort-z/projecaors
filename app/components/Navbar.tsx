import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {

    return (
        <>
        <div className="visible lg:invisible ">
            <MobileNavbar/>
        </div>

        <div className="invisible lg:visible ">
            <DesktopNavbar/> 
        </div>
        </>)
}