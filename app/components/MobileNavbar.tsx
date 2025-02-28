import Link from "next/link";
import Image from 'next/image'

export default function MobileNavbar() {

    return (
        <header
            style={{ background: 'linear-gradient(360deg, rgba(15, 30, 21, 0) 0%, #0F1E15 0%)' }}
            className='w-screen flex justify-between items-center pl-10 md:pl-40 pr-32 text-x min-h-24 fixed z-10'
        >
            
            <a href="/" className="h-[8vh] items-center flex">
                <img src="/white-logo.png" className="h-full" alt="Flowbite Logo" />
            </a>
            
            {/** 
            <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
                <Link className='hover:underline underline-offset-2' href='/' >INÍCIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#portfolio' >PORTFÓLIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#servicos'>SERVIÇOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#quemsomos'>QUEM SOMOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#contato'>CONTATO</Link>
            </nav>*/}
        </header>)
}