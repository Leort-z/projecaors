import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
    source: string;
}

export default function WhatsAppButton({ source }: WhatsAppButtonProps) {
    return (
        <div className='h-full w-full mt-12 mb-12 flex justify-center'>
            {source === "Portfolio" ? (
                <button className="w-[30vh] h-[10vh] lg:w-[55vh] border-2 border-black rounded-full flex items-center justify-center gap-4 lg:gap-12">
                    <FaWhatsapp className="text-5xl"/>
                    <h2 className="text-4xl select-none">WhatsApp</h2>
                </button>
            ) : (
                <button className="w-[30vh] h-[10vh] lg:w-[55vh] border-2 border-white rounded-full flex items-center justify-center gap-4 lg:gap-12 text-[#F8F1E7]">
                    <FaWhatsapp className="text-5xl"/>
                    <h2 className="text-4xl select-none">WhatsApp</h2>
                </button>
            )}


        </div>
    );
}