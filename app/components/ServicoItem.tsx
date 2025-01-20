interface ServicoItemProps {
    name: string;
    imagePath: string;
}
/* style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }} */
export default function ServicoItem({ name, imagePath }: ServicoItemProps) {

    return (
        <div className="h-254 w-1/4 flex flex-col justify-between max-w-md "> 
            <div className="h-full bg-cover bg-center rounded" style={{ backgroundImage: `url('/servicos-images/${imagePath}`}}>
                <div className="group w-full h-full flex items-end justify-center pb-4 rounded bg-gradient-to-t from-black to-transparent cursor-pointer" >
                    <h3 className="text-2xl  text-[#F8F1E7] group-hover:text-[#FF9E0E]  transition-colors duration-200">{name}</h3>
                </div>
            </div>
        </div>)
}