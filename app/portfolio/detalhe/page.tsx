"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Detalhe() {

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
            <main className="bg-[url('/portfolio-images/residencial-gabi.png')] min-h-screen bg-cover bg-no-repeat	"></main>
            <section style={{ background: '#F8F1E7' }}
                className='h-[calc(150%-96px)] text-center text-4xl px-36 py-12 ' id='servicos'>

                <div className='flex h-full justify-between  w-full items-center '>

                    <div className="h-full w-full bg-cover bg-center rounded" style={{ backgroundImage: "url('/portfolio-images/residencial-gabi.png" }} />

                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-7xl'>Residencial Dona Cecília </h1>
                        <div className='text-4xl w-full h-full flex flex-col items-start gap-6'>
                            <p >Ano: 2006</p>
                            <p>Capão da Canoa/RS </p>
                            <p>Projeto ✅</p>
                            <p>Execução ✅ </p>
                            <p>Construção: Super Construtora </p>
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
