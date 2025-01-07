interface PortfolioItemProps {
    name: string;
    imagePath: string;
}
/*bg-[url('/portfolio-images/${imagePath})]*/
export default function PortfolioItem({ name, imagePath }: PortfolioItemProps) {

    return (
        <div className="h-3/4 w-1/6 flex flex-col justify-between">
            <div className="h-5/6 bg-cover bg-center rounded" style={{backgroundImage:`url('/portfolio-images/${imagePath}`}}></div>
            <h3 className="text-2xl mb-6">{name}</h3>
        </div>)
}