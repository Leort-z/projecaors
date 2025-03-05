import Link from "next/link";

interface ServicoItemProps {
    name: string;
    imagePath: string;
    id: string;
}

export default function ServicoItem({ name, imagePath, id }: ServicoItemProps) {

    return (
        <div className="h-[18rem] w-full lg:w-1/4 flex flex-col mt-6"> 
            <div className="h-full bg-cover bg-center rounded " style={{ backgroundImage: `url('/servicos-images/${imagePath}`}}>
                <Link className="w-full h-full flex items-end justify-center pb-4 rounded bg-gradient-to-t 
                    from-black to-transparent cursor-pointer text-2xl  text-[#F8F1E7] hover:text-[#FF9E0E]  transition-colors duration-200" 
                    href={`/servicos/${id}`}>{name}</Link>
            </div>
        </div>)
}