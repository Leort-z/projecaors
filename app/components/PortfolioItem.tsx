import Link from "next/link";

interface PortfolioItemProps {
    name: string;
    imagePath: string;
    id: string;
}

export default function PortfolioItem({ name, imagePath, id }: PortfolioItemProps) {

    return (
        <div className='h-[40rem] md:w-1/6 w-full flex flex-col justify-between ' >
            <div className="h-5/6 bg-cover min-h-80 bg-center rounded flex items-end justify-center pb-4"
                style={{ backgroundImage: `url('/portfolio-images/${imagePath}` }}>
                <Link className="flex items-center justify-center h-12 w-2/4 text-lg bg-amber-50 border-2 border-yellow-600 text-[#A77A37] hover:bg-opacity-80 transition-colors duration-200"
                    href={`/portfolio/${id}`}> SABER MAIS</Link>
            </div>
            <h3 className="text-2xl mb-14">{name}</h3>
        </div>)
}