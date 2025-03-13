import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
    source: string;
}

export default function WhatsAppButton({ source }: WhatsAppButtonProps) {

    const phoneNumber = '5551984944045'; // Exemplo: 5511987654321 (código do país + DDD + número)
    const defaultMessage = encodeURIComponent('Olá, Leonardo!'); // Mensagem pré-definida

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className='h-full w-full mt-12 mb-12 flex justify-center'>
            {source === "Portfolio" ? (
                <button className="w-[30vh] h-[10vh] lg:w-[55vh] border-2 border-black rounded-full flex items-center justify-center gap-4 lg:gap-12"
                    onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="text-5xl" />
                    <h2 className="text-4xl select-none">WhatsApp</h2>
                </button>
            ) : (
                <button className="w-[30vh] h-[10vh] lg:w-[55vh] border-2 border-white rounded-full flex items-center justify-center gap-4 lg:gap-12 text-[#F8F1E7]"
                    onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="text-5xl" />
                    <h2 className="text-4xl select-none">WhatsApp</h2>
                </button>
            )}


        </div>
    );
}