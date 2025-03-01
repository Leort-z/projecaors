import PortfolioItem from './../components/PortfolioItem'
import portfolioData from '../../public/json-data/portfolio-data.json'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {

    const [currentIndex, setCurrentIndex] = useState(1);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? portfolioData.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isFirstSlide = currentIndex === 4;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className="lg:hidden w-full h-full flex justify-center items-center">
                <div className='text-white bg-black opacity-70 p-2 rounded absolute left-[5%]'>
                    <IoIosArrowBack onClick={prevSlide} size={40} /></div>
                <div className='flex flex-row w-full justify-between mt-12 duration-300'>
                    {portfolioData.slice(currentIndex, currentIndex+1).map(({ name, mainPhoto, id }) => <PortfolioItem name={name} imagePath={mainPhoto} id={id} key={id} />)}
                </div>

                <div className='text-white bg-black opacity-70 p-2 rounded absolute right-[5%]'>
                    <IoIosArrowForward onClick={nextSlide} size={40} /></div>
            </div>

            <div className="hidden lg:block w-full h-full">
                <div className='flex flex-row w-full justify-between mt-12'>
                    {portfolioData.slice(0, 5).map(({ name, mainPhoto, id }) => <PortfolioItem name={name} imagePath={mainPhoto} id={id} key={id} />)}

                </div>
            </div>
        </>)
}