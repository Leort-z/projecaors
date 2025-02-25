import Link from "next/link";
import Image from 'next/image'

export default function DesktopNavbar() {

    return (
        <header
            style={{ background: 'linear-gradient(360deg, rgba(15, 30, 21, 0) 0%, #0F1E15 0%)' }}
            className='w-full flex justify-between items-center pl-10 md:pl-40 pr-32 text-x min-h-24 fixed z-10'
        >
            <Image src='/white-logo.png' width={120} height={75} alt='Logo da empresa Projeção' className='cursor-pointer' />
            <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
                <Link className='hover:underline underline-offset-2' href='/' >INÍCIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#portfolio' >PORTFÓLIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#servicos'>SERVIÇOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#quemsomos'>QUEM SOMOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#contato'>CONTATO</Link>
            </nav>
        </header>)
}