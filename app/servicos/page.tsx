"use client";
import Image from 'next/image'
import Link from 'next/link'
import ServicoItem from '../components/ServicoItem'
import { useRef } from 'react'

export default function Servicos() {
    const servicoItems = [
        { name: "Construção", imagePath: "construcao.png" },
        { name: "Execução de obras", imagePath: "execucao-obra.png" },
        { name: "Laudo técnico", imagePath: "laudo-tecnico.png" },
        { name: "Acompanhamento de Obras", imagePath: "construcao.png" },
        { name: "Regularização de Imóveis", imagePath: "execucao-obra.png" },
        { name: "Plotagem de Projetos", imagePath: "laudo-tecnico.png" }]

    return (
        <>
            <header
                style={{ background: 'linear-gradient(360deg, rgba(15, 30, 21, 0) 0%, #0F1E15 0%)' }}
                className='w-full flex justify-between items-center pl-40 pr-32 text-x min-h-24 fixed'
            >
                <Image src='/white-logo.png' width={120} height={75} alt='Logo da empresa Projeção' className='cursor-pointer' />
                <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
                    <Link className='hover:underline underline-offset-2' href='#portfolio' >PORTFÓLIO</Link>
                    <Link className='hover:underline underline-offset-2' href='#servicos'>SERVIÇOS</Link>
                    <Link className='hover:underline underline-offset-2' href='#quemsomos'>QUEM SOMOS</Link>
                    <Link className='hover:underline underline-offset-2' href='#contato'>CONTATO</Link>
                </nav>
            </header>
            <main className="bg-[url('/main-image.png')] min-h-screen bg-cover bg-no-repeat	"></main>
            <section style={{ background: '#1B3124' }}
                className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12 ' id='servicos'>
                <h1 className="font-bold text-[#F8F1E7]">SERVIÇOS</h1>
                <div className='flex flex-wrap h-4/5 mt-12 justify-center gap-3 '>
                    {servicoItems.map(({ name, imagePath }) => <ServicoItem name={name} imagePath={imagePath} />)}

                </div>
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
