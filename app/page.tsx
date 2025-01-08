import Image from 'next/image'
import Link from 'next/link'
import PortfolioItem from './components/PortfolioItem'
import ServicoItem from './components/ServicoItem'

export default function Home() {
  const portfolioItems = [
    { name: "Residencial Gabi", imagePath: "residencial-gabi.png" },
    { name: "Residencial Larissa", imagePath: "residencial-larissa.png" },
    { name: "Residencial LB", imagePath: "residencial-lb.png" },
    { name: "Residencial Zatti", imagePath: "residencial-zatti.png" },
    { name: "Sublime Residence", imagePath: "sublime-residence.png" }]

    const servicoItems = [
      { name: "Construção", imagePath: "construcao.png" },
      { name: "Execução de obras", imagePath: "execucao-obra.png" },
      { name: "Laudo técnico", imagePath: "laudo-tecnico.png" },
      { name: "Construção", imagePath: "construcao.png" },
      { name: "Execução de obras", imagePath: "execucao-obra.png" },
      { name: "Laudo técnico", imagePath: "laudo-tecnico.png" }]

  return (
    <>
      <header
        style={{ background: 'linear-gradient(360deg, rgba(15, 30, 21, 0) 0%, #0F1E15 0%)' }}
        className='w-full flex justify-between items-center pl-40 pr-32 text-x min-h-24 fixed'
      >
        <Image src='/white-logo.png' width={120} height={75} alt='Logo da empresa Projeção' />
        <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
          <Link href='/portfolio'>PORTFÓLIO</Link>
          <Link href='/services'>SERVIÇOS</Link>
          <Link href='/about'>QUEM SOMOS</Link>
          <Link href='/contact'>CONTATO</Link>
        </nav>
      </header>
      <main className="bg-[url('/main-image.png')] min-h-screen bg-cover bg-no-repeat	"></main>
      <section className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12'>
        <h1 className="font-bold">PORTFÓLIO</h1>
        <div className='flex flex-row h-3/4 justify-between mt-12'>
          {portfolioItems.map(({ name, imagePath }) => <PortfolioItem name={name} imagePath={imagePath} />)}
          
        </div>
        <button style={{ background: '#F8F1E7' }}
                    className="h-12 w-1/4 text-lg border-2 border-yellow-600 ">VER MAIS

        </button>
      </section>
      
      <section style={{ background: '#1B3124' }}
      className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12'>
        <h1 className="font-bold text-[#F8F1E7]">SERVIÇOS</h1>
        <div className='flex h-3/4 justify-between mt-12 '>
          {servicoItems.map(({ name, imagePath }) => <ServicoItem  name={name} imagePath={imagePath} />)}
          
        </div>
      </section>
      
    </>
  )
}
