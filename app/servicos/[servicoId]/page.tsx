"use client";
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import servicosData from '../../../public/json-data/servicos-data.json';
import { useParams } from 'next/navigation';

export default function Detalhe() {
    const params = useParams();
    const registro = servicosData.find(item => item.id === params.servicoId);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url('../servicos-images/${registro?.mainPhoto}` }}></main>
            <section style={{ background: '#1B3124' }}
                className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12 ' id='servicos'>
                <h1 className="font-bold text-[#F8F1E7]">SERVIÇOS</h1>
                <p className='font-bold text-[#F8F1E7]'>{registro?.name}</p>
                <p className='font-bold text-[#F8F1E7]'>{registro?.detail}</p>

            </section>

            <section
                className='h-[calc(30%)] text-center text-2xl px-24 justify-center' id='servicos'>
                <div className='flex h-full justify-between'>
                    <div className='flex flex-col gap-6 items-start justify-center'>
                        <Link href='#portfolio'>PORTFÓLIO</Link>
                        <Link href='#servicos'>SERVIÇOS</Link>
                        <Link href='#quemsomos'>QUEM SOMOS</Link>
                        <Link href='#contato'>CONTATO</Link>
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
