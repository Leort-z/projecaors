import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto400 = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

interface ServicoItemProps {
    name: string;
    imagePath: string;
    id: string;
}

export default function ServicoItem({ name, imagePath, id }: ServicoItemProps) {

    return (
        <div className="h-[18rem] w-full lg:w-1/4 flex flex-col lg:mb-0 mb-2"> 
            <div className="h-full bg-cover bg-center rounded " style={{ backgroundImage: `url('/servicos-images/${imagePath}`}}>
                <Link className={`w-full h-full flex items-end justify-center pb-4 rounded bg-gradient-to-t 
                    from-black to-transparent cursor-pointer text-2xl  text-[#F8F1E7] hover:text-[#FF9E0E]  transition-colors duration-200 ${roboto400.className}`} 
                    href={`/servicos/${id}`}>{name}</Link>
            </div>
        </div>)
}