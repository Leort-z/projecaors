interface ServicoItemProps {
    name: string;
    imagePath: string;
}
/*bg-[url('/portfolio-images/${imagePath})]*/
export default function ServicoItem({ name, imagePath }: ServicoItemProps) {

    return (
        <div className="h-full w-1/6 flex flex-col justify-between ">
            <div className="h-3/6 bg-cover bg-center rounded" style={{ backgroundImage: `url('/servicos-images/${imagePath}` }}>
                <div className=" w-full h-full flex items-end justify-center pb-4 " style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
                    <h3 className="text-2xl mb-6 text-[#F8F1E7]">{name}</h3>
                </div>
            </div>
        </div>)
}