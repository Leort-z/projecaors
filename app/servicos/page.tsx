"use client";
import ServicoItem from '../components/ServicoItem'
import servicosData from '../../public/json-data/servicos-data.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Roboto } from 'next/font/google';

const roboto700 = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto-bold',
})

export default function Portifolio() {
  const registro = servicosData.find(item => item.id === "2");

  return (
    <>
      <Navbar />

      <main className="h-full w-full in-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('../../servicos-images/${registro?.mainPhoto}'` }}>

        <div className="h-full w-full opacity-60 text-[#F8F1E7] flex justify-center items-center" style={{ background: '#000000' }}>
          <h1 className={`text-8xl select-none ${roboto700.className}`}>Serviços</h1>
        </div>
      </main>
      <section className=' text-center text-4xl px-12 lg:px-36 py-12 ' id='portfolio'>
        <div className='flex flex-wrap h-3/4 justify-between lg:mt-12 gap-3'>
          {servicosData.map(({ name, mainPhoto, id }) => <ServicoItem name={name} imagePath={mainPhoto} id={id} key={id}/>)}

        </div>
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
