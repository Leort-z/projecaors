import { Roboto } from "next/font/google";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const roboto500 = Roboto({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-roboto'
})

interface FooterProps {
    source: string;
}

export default function WhatsAppButton({ source }: FooterProps) {
    return (
        <div className='flex justify-between w-full  items-center '>
            {source === "White" ? (
                <div className="flex justify-between w-full h-full ">
                    <div className={`flex flex-col gap-6 items-start justify-center ${roboto500.className}`}>
                        <Link href='/#portfolio'>PORTFÓLIO</Link>
                        <Link href='/#servicos'>SERVIÇOS</Link>
                        <Link href='/#quemsomos'>QUEM SOMOS</Link>
                        <Link href='/#contato'>CONTATO</Link>
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <button>
                            <FaWhatsapp className="text-6xl" />
                        </button>
                        <button>
                            <FaFacebookSquare className="text-6xl"/>
                        </button>
                        <button>
                            <FaInstagram className="text-6xl"/>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between w-full h-full text-[#F8F1E7]">
                    <div className='flex flex-col gap-6 items-start justify-center'>
                        <Link href='/#portfolio'>PORTFÓLIO</Link>
                        <Link href='/#servicos'>SERVIÇOS</Link>
                        <Link href='/#quemsomos'>QUEM SOMOS</Link>
                        <Link href='/#contato'>CONTATO</Link>
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <button>
                            <FaWhatsapp className="text-6xl" />
                        </button>
                        <button>
                            <FaFacebookSquare className="text-6xl"/>
                        </button>
                        <button>
                            <FaInstagram className="text-6xl"/>
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
}