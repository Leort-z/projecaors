"use client";
import Navbar from '@/app/components/Navbar';
import portfolioData from '../../../public/json-data/portfolio-data.json'
import { useParams } from 'next/navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';
import { Merriweather, Roboto } from 'next/font/google';

const merriweather = Merriweather({
    weight: '400',
    style: 'italic',
    subsets: ['latin'],
})

const roboto400 = Roboto({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto'
})

export default function DetalhesPortfolio() {
    const params = useParams();
    const registro = portfolioData.find(item => item.id === params.portfolioId);

    type ActionKeys = "PROJECT" | "EXECUTION" | "CONSTRUCTION";

    const allActions: Record<ActionKeys, string> = {
        "PROJECT": "Projeto ✅",
        "EXECUTION": "Execução ✅",
        "CONSTRUCTION": "Construção ✅",
    };

    return (
        <>
            <Navbar />
            <main className="h-3/4 w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('../portfolio-images/${registro?.mainPhoto}` }}>
                <div className="h-full w-full text-[#F8F1E7] flex justify-center items-center text-center" >
                    <h1 className={`text-6xl lg:text-8xl select-none ${merriweather.className}`}>{registro?.name}</h1>
                </div>
            </main>
            <div style={{ background: '#F8F1E7' }}
                className='text-start text-2xl flex items-center justify-center flex-col'>

                <div className='flex h-full justify-between  w-full items-center  p-16'>

                    <div className='flex flex-col w-full h-full'>
                        <div className={`text-2xl w-full h-full flex flex-col gap-3  ${roboto400.className}`}>
                            <div className='flex flex-wrap h-full justify-center gap-3'>
                                {registro?.extraPhotos?.some(photo => photo.trim() !== "") ? (
                                    registro?.extraPhotos.map((photo, index) => (
                                        <div className="h-[30vh] w-[45vh] bg-cover bg-center shadow-2xl" key={index} style={{ backgroundImage: `url(../portfolio-images/${photo})` }} />
                                    ))) : ""}
                            </div>
                            {registro?.detail ? <p>{registro?.detail}</p> : ""}
                            <p >Ano: {registro?.year}</p>
                            <p>{registro?.city}</p>
                            {registro?.actions.map((action: string, index) => (
                                <p key={index}>{allActions[action as keyof typeof allActions]}</p>
                            ))}
                            {registro?.company ? <p>Construção: {registro?.company} </p> : ""}
                            {registro?.videos.map((video, index) => (
                                <div className='h-[80vh] w-full flex items-center justify-center' key={index}>
                                    <iframe                                        
                                        className='h-full w-3/4'
                                        src={video}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <WhatsAppButton />
            </div>

            <div
                className='lg:h-[30vh] h-[30vh] text-center text-2xl px-8 flex lg:items-center justify-center '
                id='servicos'
                style={{ background: '#1B3124' }}>
                <Footer source="" />
            </div>
        </>
    )
}
