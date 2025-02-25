"use client";
import Navbar from '@/app/components/DesktopNavbar';
import Image from 'next/image'
import portfolioData from '../../../public/json-data/portfolio-data.json'
import Link from 'next/link'
import { useParams } from 'next/navigation';

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
            <main className="min-h-screen bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('../portfolio-images/${registro?.mainPhoto}` }}></main>
            <section style={{ background: '#F8F1E7' }}
                className='h-[calc(150%-96px)] text-center text-4xl px-36 py-12 ' id='servicos'>

                <div className='flex h-full justify-between  w-full items-center '>

                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-7xl'>{registro?.name}</h1>
                        <div className='text-4xl w-full h-full flex flex-col items-start gap-6'>
                            {registro?.detail ? <p>{registro?.detail}</p> : ""}
                            <p >Ano: {registro?.year}</p>
                            <p>{registro?.city}</p>
                            {registro?.actions.map((action: string) =>(
                                <p>{allActions[action]}</p>
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

            </section>

            <section
                className='h-[calc(30%)] text-center text-2xl px-24 justify-center' id='servicos'
                style={{ background: '#1B3124' }}>
                <div className='flex h-full justify-between'>
                    <div className='flex flex-col gap-6 items-start justify-center'>
                        <Link className='text-[#F8F1E7]' href='#portfolio'>PORTFÓLIO</Link>
                        <Link className='text-[#F8F1E7]' href='#servicos'>SERVIÇOS</Link>
                        <Link className='text-[#F8F1E7]' href='#quemsomos'>QUEM SOMOS</Link>
                        <Link className='text-[#F8F1E7]' href='#contato'>CONTATO</Link>
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <Image className='cursor-pointer' src='/icones/facebook.png' width={60} height={47.5} alt='Ícone localização' />
                        <Image className='cursor-pointer' src='/icones/instagram.png' width={60} height={47.5} alt='Ícone localização' />
                        <Image className='cursor-pointer' src='/icones/whatsapp-cinza.png' width={60} height={47.5} alt='Ícone localização' />
                    </div>
                </div>
            </section>
        </>
    )
}
