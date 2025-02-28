import PortfolioItem from './../components/PortfolioItem'
import portfolioData from '../../public/json-data/portfolio-data.json'
import { IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

export default function Navbar() {

    return (
        <>
            <div className="lg:hidden w-full h-full">
                <div className='flex flex-row w-full justify-between mt-12'>
                    {portfolioData.slice(0, 1).map(({ name, mainPhoto, id }) => <PortfolioItem name={name} imagePath={mainPhoto} id={id} key={id} />)}

                </div>
            </div>

            <div className="hidden lg:block w-full h-full">
                <div className='flex flex-row w-full justify-between mt-12'>
                    {portfolioData.slice(0, 5).map(({ name, mainPhoto, id }) => <PortfolioItem name={name} imagePath={mainPhoto} id={id} key={id} />)}

                </div>
            </div>
        </>)
}