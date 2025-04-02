import Link from "next/link";
import Image from 'next/image'

export default function DesktopNavbar() {

    return (
        <header
            style={{ background: '#0F1E15' }}
            className='w-full flex justify-between items-center pl-10 lg:pl-40 pr-32 text-x min-h-24 fixed z-20'
        >
            <Link href="/" className="h-[8vh] items-center flex">
                <div className="h-full w-[16vh] relative">
                    <Image
                        src="/white-logo.png"
                        alt="Logo"
                        fill
                        style={{objectFit: "cover"}}
                    />
                </div>
            </Link>
            <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
                <Link className='hover:underline underline-offset-2' href='/' >INÍCIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#portfolio' >PORTFÓLIO</Link>
                <Link className='hover:underline underline-offset-2' href='/#servicos'>SERVIÇOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#quemsomos'>QUEM SOMOS</Link>
                <Link className='hover:underline underline-offset-2' href='/#contato'>CONTATO</Link>
            </nav>
        </header>)
}