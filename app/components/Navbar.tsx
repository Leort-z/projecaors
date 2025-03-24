import { Roboto } from "next/font/google";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const roboto500 = Roboto({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function Navbar() {

    return (
        <>
        <div className={`visible lg:invisible ${roboto500.className}`}>
            <MobileNavbar/>
        </div>

        <div className={`invisible lg:visible ${roboto500.className}`}>
            <DesktopNavbar/> 
        </div>
        </>)
}