"use client";
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import servicosData from '../../../public/json-data/servicos-data.json';
import { useParams } from 'next/navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';

export default function Detalhe() {
    const params = useParams();
    const registro = servicosData.find(item => item.id === params.servicoId);

    return (
        <>
            <Navbar />
            <main className="h-full w-full in-h-screen bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('../servicos-images/${registro?.mainPhoto}` }}></main>
            <section style={{ background: '#F8F1E7' }}
                className='lg:h-[30vh] text-center text-2xl px-8 flex flex-col lg:items-center justify-center '
                id='servicos'>
                <h1 className="font-bold ">SERVIÇOS</h1>
                <p className='font-bold '>{registro?.name}</p>
                <p className='font-bold '>{registro?.detail}</p>

                <WhatsAppButton />

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
