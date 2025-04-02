import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

export default function MobileNavbar() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <header
            style={{ background: '#0F1E15' }}
            className='w-screen text-x min-h-24 fixed z-20'
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="h-[8vh] items-center flex pl-6">
                    <div className="h-full w-[16vh] relative">
                        <Image
                            src="/white-logo.png"
                            alt="Projecao Logo"
                            fill
                            style={{objectFit: "cover"}}
                        />
                    </div>
                </Link>
                <button className='pr-6' data-collapse-target="collapse" type="button" onClick={() => setIsVisible(!isVisible)}>
                    <RiMenuFill size={35} color="#F8F1E7" />
                </button>
                <div className={`${isVisible ? 'block' : 'hidden'} w-full `} >
                    <ul className="flex flex-col font-light mt-4 rounded-lg">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white text-4xl rounded-sm" style={{ background: '#182f21' }} onClick={() => setIsVisible(!isVisible)}>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/#portfolio" className="block py-2 px-3 text-white text-4xl rounded-sm" style={{ background: '#182f21' }} onClick={() => setIsVisible(!isVisible)}>
                                Portfólio
                            </Link>
                        </li>
                        <li>
                            <Link href="/#servicos" className="block py-2 px-3 text-white text-4xl rounded-sm" style={{ background: '#182f21' }} onClick={() => setIsVisible(!isVisible)}>
                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link href="/#quemsomos" className="block py-2 px-3 text-white text-4xl rounded-sm" style={{ background: '#182f21' }} onClick={() => setIsVisible(!isVisible)}>
                                Quem Somos
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contato" className="block py-2 px-3 text-white text-4xl rounded-sm" style={{ background: '#182f21' }} onClick={() => setIsVisible(!isVisible)}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>)
}