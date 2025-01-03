import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header
        style={{ background: 'linear-gradient(360deg, rgba(15, 30, 21, 0) 0%, #0F1E15 0%)' }}
        className='w-full flex justify-between items-center pl-40 pr-32 text-x min-h-24'
      >
        <Image src='/white-logo.png' width={140} height={87.5} alt='Logo da empresa Projeção' />
        <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
          <Link href='/portfolio'>PORTFÓLIO</Link>
          <Link href='/services'>SERVIÇOS</Link>
          <Link href='/about'>QUEM SOMOS</Link>
          <Link href='/contact'>CONTATO</Link>
        </nav>
      </header>
      <main className="bg-[url('/main-image.png')] min-h-screen bg-cover bg-no-repeat	"></main>
    </>
  )
}
