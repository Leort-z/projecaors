interface PortfolioItemProps {
    name: string;
    imagePath: string;
} 

export default function PortfolioItem({ name, imagePath }: PortfolioItemProps) {

    return (
        <div className='h-full w-1/6 flex flex-col justify-between' >
            <div className="h-5/6 bg-cover min-h-80 bg-center rounded flex items-end justify-center pb-4" style={{ backgroundImage: `url('/portfolio-images/${imagePath}` }}>
                <button 
                    className="h-12 w-2/4 text-sm bg-amber-50 border-2 border-yellow-600 text-[#A77A37] hover:bg-opacity-80 transition-colors duration-200">SABER MAIS

                </button>
            </div>
            <h3 className="text-2xl mb-14">{name}</h3>
        </div>)
}