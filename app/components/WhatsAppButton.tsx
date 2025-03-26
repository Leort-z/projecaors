import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
    source: string;
}

export default function WhatsAppButton() {

    const phoneNumber = '5551984944045'; // Exemplo: 5511987654321 (código do país + DDD + número)
    const defaultMessage = encodeURIComponent('Olá, Leonardo!'); // Mensagem pré-definida

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className='h-full w-full  mb-12 flex justify-center'>
            <button className="w-[30vh] h-[10vh] lg:w-[55vh] border-2 border-black rounded-full flex items-center justify-center gap-4 lg:gap-12 shadow-2xl"
                onClick={handleWhatsAppClick}>
                <FaWhatsapp className="text-5xl" />
                <h2 className="text-4xl select-none">WhatsApp</h2>
            </button>
        </div>
    );
}