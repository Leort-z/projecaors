import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

    const phoneNumber = '5551995185674'; 
    const defaultMessage = encodeURIComponent('Olá, estou entrando em contato através do site!'); 

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className='h-full w-full  mb-16  flex justify-center'>
            <button className="w-[40vh] h-[10vh] lg:w-[55vh] border-2 border-black rounded-full flex items-center justify-center gap-4 lg:gap-12 shadow-2xl hover:scale-105"
                onClick={handleWhatsAppClick}>
                <FaWhatsapp className="text-5xl" />
                <h2 className="text-4xl select-none">WhatsApp</h2>
            </button>
        </div>
    );
}