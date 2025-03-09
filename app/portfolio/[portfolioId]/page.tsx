"use client";
import Navbar from '@/app/components/Navbar';
import portfolioData from '../../../public/json-data/portfolio-data.json'
import { useParams } from 'next/navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';

export default function DetalhesPortfolio() {
    const params = useParams();
    const registro = portfolioData.find(item => item.id === params.portfolioId);
    const allActions = {
        "PROJECT": "Projeto ✅",
        "EXECUTION": "Execução ✅",
        "CONSTRUCTION": "Construção ✅",
    };
    return (
        <>
            <Navbar />
            <main className="h-full w-full in-h-screen bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('../portfolio-images/${registro?.mainPhoto}` }}></main>
            <section style={{ background: '#F8F1E7' }}
                className='text-center text-2xl flex items-center justify-center flex-col'
                 id='servicos'>

                <div className='flex h-full justify-between  w-full items-center '>

                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-4xl'>{registro?.name}</h1>
                        <div className='text-4xl w-full h-full flex flex-col items-start gap-6'>
                            {registro?.detail ? <p>{registro?.detail}</p> : ""}
                            <p >Ano: {registro?.year}</p>
                            <p>{registro?.city}</p>
                            {registro?.actions.map((action: string) =>(                                
                                <p key={action}>{allActions[action]}</p>
                            ))}
                            {registro?.company ? <p>Construção: {registro?.company} </p> : ""}
                            {registro?.videos.map((video, index) => (
                                <iframe
                                    key={index}
                                    className='h-4/5 w-4/5'
                                    src={video}
                                    allowFullScreen
                                ></iframe>
                            ))
                            }
                        </div>
                    </div>                    
                </div>
                <WhatsAppButton source={"Portfolio"}/>
            </section>

            <section
                className='lg:h-[30vh] h-[30vh] text-center text-2xl px-8 flex lg:items-center justify-center ' 
                id='servicos'
                style={{ background: '#1B3124' }}>
                <Footer source="" />
            </section>
        </>
    )
}
