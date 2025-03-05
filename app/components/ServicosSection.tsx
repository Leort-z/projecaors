import servicosData from '../../public/json-data/servicos-data.json'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';
import ServicoItem from './ServicoItem';

export default function ServicosSection() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex <= 1;
        const newIndex = isFirstSlide ? servicosData.length - 3 : currentIndex - 2
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isFirstSlide = currentIndex >= 4;
        const newIndex = isFirstSlide ? 0 : currentIndex + 2
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className="lg:hidden w-full h-full flex items-center  justify-between">
                <div className='text-white bg-black opacity-70 p-2 rounded absolute left-[5%]'>
                    <IoIosArrowBack onClick={prevSlide} size={40} /></div>
                <div className='flex flex-col w-full duration-300 justify-between mt-6'>
                    {servicosData.slice(currentIndex, currentIndex+2).map(({ name, mainPhoto, id }) => <ServicoItem name={name} imagePath={mainPhoto} id={id} key={id} />)}
                </div>

                <div className='text-white bg-black opacity-70 p-2 rounded absolute right-[5%]'>
                    <IoIosArrowForward onClick={nextSlide} size={40} /></div>
            </div>

            <div className="hidden lg:block w-full h-full">
                <div className='flex flex-wrap h-4/5 w-full mt-12 justify-center gap-3 '>
                    {servicosData.slice(0, 6).map(({ name, mainPhoto, id }) => <ServicoItem name={name} imagePath={mainPhoto} id={id} key={id} />)}

                </div>
            </div>
        </>)
}