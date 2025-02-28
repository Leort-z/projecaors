import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MobileNavbar() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <header
            style={{ background: '#0F1E15' }}
            className='w-screen text-x min-h-24 fixed z-10'
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="h-[8vh] items-center flex pl-6">
                    <img src="/white-logo.png" className="h-full" alt="Projecao Logo" />
                </a>
                <button className='pr-6' data-collapse-target="collapse" type="button" onClick={() => setIsVisible(!isVisible)}>
                    <RiMenuFill size={35} color="#F8F1E7" />
                </button>
                <div className={`${isVisible ? 'block' : 'hidden'} w-full ${inter.className}`} >
                    <ul className="flex flex-col font-light mt-4 rounded-lg">
                        <li>
                            <a style={{ background: '#182f21' }} href='/' className="block py-2 px-3 text-white text-4xl rounded-sm" onClick={() => setIsVisible(!isVisible)}>Início</a>
                        </li>
                        <li>
                            <a style={{ background: '#182f21' }} href='/#portfolio' className="block py-2 px-3 text-white text-4xl rounded-sm " onClick={() => setIsVisible(!isVisible)}>Portfólio</a>
                        </li>
                        <li>
                            <a style={{ background: '#182f21' }} href='/#servicos' className="block py-2 px-3 text-white text-4xl rounded-sm " onClick={() => setIsVisible(!isVisible)}>Serviços</a>
                        </li>
                        <li>
                            <a style={{ background: '#182f21' }} href='/#quemsomos' className="block py-2 px-3 text-white text-4xl rounded-sm" onClick={() => setIsVisible(!isVisible)}>Quem Somos</a>
                        </li>
                        <li>
                            <a style={{ background: '#182f21' }} href='/#contato' className="block py-2 px-3 text-white text-4xl rounded-sm" onClick={() => setIsVisible(!isVisible)}>Contato</a>
                        </li>
                    </ul>
                </div>
                {/*           
            <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
                <Link className='hover:underline underline-offset-2' href='/' >INÍCIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#portfolio' >PORTFÓLIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#servicos'>SERVIÇOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#quemsomos'>QUEM SOMOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#contato'>CONTATO</Link>
            </nav>*/}
            </div>
        </header>)
}