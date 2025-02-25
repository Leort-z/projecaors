"use client";
import Image from 'next/image'
import Link from 'next/link'
import PortfolioItem from '../components/PortfolioItem'
import portfolioData from '../../public/json-data/portfolio-data.json'
import Navbar from '../components/DesktopNavbar';

export default function Portifolio() {
  const registro = portfolioData.find(item => item.id === "20");

  return (
    <>
      <Navbar />

      <main className="h-full w-full in-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('../../portfolio-images/${registro?.mainPhoto}'` }}>

        <div className="h-full w-full opacity-60 text-[#F8F1E7] flex justify-center items-center" style={{ background: '#000000' }}>
          <h1 className='text-8xl select-none'>Portfólio</h1>
        </div>
      </main>
      <section className='text-center text-4xl px-36 py-12 ' id='portfolio'>
        <div className='flex flex-wrap h-full justify-between mt-12 gap-3'>
          {portfolioData.map(({ name, mainPhoto, id }) => <PortfolioItem name={name} imagePath={mainPhoto} id={id} />)}

        </div>
      </section>

      <section
        className='h-[calc(30%)] text-center text-2xl px-24 justify-center' id='servicos'
        style={{ background: '#1B3124' }}>
        <div className='flex h-full justify-between'>
          <div className='flex flex-col gap-6 items-start justify-center text-[#F8F1E7]'>
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
