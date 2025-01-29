"use client";
import Image from 'next/image'
import Link from 'next/link'
import PortfolioItem from '../components/PortfolioItem'
import portfolioData from '../../public/json-data/portfolio-data.json'
import Navbar from '../components/Navbar';

export default function Portifolio() {
  const portfolioItems = portfolioData;

  return (
    <>
      <Navbar/>
      <main className="bg-[url('/main-image.png')] min-h-screen bg-cover bg-no-repeat	"></main>
      <section className=' text-center text-4xl px-36 py-12 ' id='portfolio'>
        <h1 className="font-bold" >PORTFÓLIO</h1>
        <div className='flex flex-wrap h-3/4 justify-between mt-12 gap-3'>
          {portfolioItems.map(({ name, mainPhoto }) => <PortfolioItem name={name} imagePath={mainPhoto} />)}

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
