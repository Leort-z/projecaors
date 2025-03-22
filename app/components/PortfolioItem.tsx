import Link from "next/link";

interface PortfolioItemProps {
    name: string;
    imagePath: string;
    id: string;
}

export default function PortfolioItem({ name, imagePath, id }: PortfolioItemProps) {

    return (
        <div className='h-[68vh] lg:w-1/6 w-full flex flex-col' >
            <div className="h-[60vh] bg-cover min-h-80 bg-center rounded flex items-end justify-center pb-4"
                style={{ backgroundImage: `url('/portfolio-images/${imagePath}` }}>
                <Link className="flex items-center justify-center h-12 w-3/5 text-lg bg-amber-50 border-2 border-yellow-600 text-[#A77A37] hover:bg-opacity-80 transition-colors duration-200"
                    href={`/portfolio/${id}`}> SABER MAIS</Link>
            </div>
            <h3 className="text-xl">{name}</h3>
        </div>)
}