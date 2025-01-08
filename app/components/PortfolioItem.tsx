interface PortfolioItemProps {
    name: string;
    imagePath: string;
}
/*bg-[url('/portfolio-images/${imagePath})]*/
export default function PortfolioItem({ name, imagePath }: PortfolioItemProps) {

    return (
        <div className="h-full w-1/6 flex flex-col justify-between">
            <div className="h-5/6 bg-cover bg-center rounded flex items-end justify-center pb-4" style={{ backgroundImage: `url('/portfolio-images/${imagePath}` }}>
                <button style={{ background: '#F8F1E7' }}
                    className="h-12 w-2/4 text-sm border-2 border-yellow-600 text-[#A77A37]">SABER MAIS

                </button>
            </div>
            <h3 className="text-2xl mb-6">{name}</h3>
        </div>)
}