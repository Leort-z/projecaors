import Link from "next/link";
import { Merriweather, Roboto } from 'next/font/google';

const merriweather = Merriweather({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
})

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
  })


interface PortfolioItemProps {
    name: string;
    imagePath: string;
    id: string;
}

export default function PortfolioItem({ name, imagePath, id }: PortfolioItemProps) {

    return (
        <div className='h-[65vh] lg:w-1/6 w-full flex flex-col  justify-between' >
            <div className="h-[60vh] bg-cover  bg-center rounded flex items-end justify-center pb-4 shadow-2xl "
                style={{ backgroundImage: `url('/portfolio-images/${imagePath}` }}>
                <Link className={`flex items-center justify-center h-12 w-3/5 text-lg bg-amber-50 border-2 border-yellow-600 text-[#A77A37] hover:shadow-[0_15px_15px_rgba(0,0,0,0.50)] transition-colors duration-200 ${roboto.className}`}
                    href={`/portfolio/${id}`}> SABER MAIS</Link>
            </div>
            <h3 className={`text-xl ${merriweather.className} ` }>{name}</h3>
        </div>)
}