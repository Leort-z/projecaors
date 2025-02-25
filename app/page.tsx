"use client";
import Image from 'next/image'
import Link from 'next/link'
import PortfolioItem from './components/PortfolioItem'
import ServicoItem from './components/ServicoItem'
import Navbar from './components/Navbar';
import portfolioData from '../public/json-data/portfolio-data.json'
import servicosData from '../public/json-data/servicos-data.json'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'
import { SetStateAction, useState } from 'react';
import { Roboto, Inter  } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const slides = [
    {
      url: 'servicos-images/construcao.png',
      title: 'CONSTRUÇÃO',
      subtitle: "Tornamos o seu sonho de construir no litoral em realidade"
    },
    {
      url: 'servicos-images/execucao-obra.png',
      title: 'OBRAS',
      subtitle: "Executamos sua obra com excelência"
    },
    {
      url: 'servicos-images/laudo-tecnico.png',
      title: 'LAUDO TÉCNICO',
      subtitle: "Garantimos a segurança da sua obra"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <span className={inter.className}>
      <Navbar />
      <div className='h-full w-full m-auto group'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover  duration-300'>
          <div className="h-full w-full opacity-60 text-[#F8F1E7] flex flex-col justify-center items-center relative" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className='h-3/5 w-full flex flex-col  items-center justify-between absolute bottom-0'>
              <div className='flex flex-col items-center '>
                <h1 className='text-8xl select-none mb-4'>{slides[currentIndex].title}</h1>
                <h3 className='text-2xl select-none'>{slides[currentIndex].subtitle}</h3>
              </div>
              <div className='flex py-2'>
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-4xl cursor-pointer'>
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} /></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} /></div>

      </div>
      <section className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12 flex flex-col items-center' id='portfolio'>
        <h1 className="font-bold" >PORTFÓLIO</h1>
        <div className='flex flex-row h-4/5 w-full justify-between mt-12 mb-4'>
          {portfolioData.slice(0, 5).map(({ name, mainPhoto, id }) => <PortfolioItem name={name} imagePath={mainPhoto} id={id} key={id} />)}

        </div>
        <Link className="h-12 w-1/4 text-lg mt-5 border-2 border-yellow-600 hover:bg-amber-50 flex items-center justify-center"
          href="/portfolio"> VER MAIS</Link>
      </section>

      <section style={{ background: '#1B3124' }}
        className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12 flex flex-col items-center' id='servicos'>
        <h1 className="font-bold text-[#F8F1E7]">SERVIÇOS</h1>
        <div className='flex flex-wrap h-4/5 w-full mt-12 justify-center gap-3 '>
          {servicosData.slice(0, 6).map(({ name, mainPhoto, id }) => <ServicoItem name={name} imagePath={mainPhoto} id={id} key={id} />)}

        </div>
        <Link className="h-12 w-1/4 text-lg border-2 border-yellow-600 text-[#A77A37] mt-10 hover:bg-green-950 flex items-center justify-center"
          href="/servicos"> VER MAIS</Link>
      </section>
      <section className='h-[calc(200%-96px)] px-12 py-12 flex flex-col gap-12 items-center' id='quemsomos'>
        <h1 className="text-7xl">Família Projeção</h1>
        <div className='flex h-2/5 justify-between gap-3 w-5/6 items-center'>
          <div className="h-full w-2/4 flex flex-col">
            <div className="h-full w-full bg-cover bg-center rounded" style={{ backgroundImage: "url('/historia-images/escritorio.png" }} />
            <h3 className="text-lg text-center">(Elizabeth, Mário Sérgio e Marlene Barrionuevo em frente ao Chalé Verde)</h3>
          </div>
          <p className='text-xl w-2/4'>[Início] <br /><br />
            A Projeção é uma empresa familiar com raízes profundas em
            Capão da Canoa e uma história que remonta ao final dos
            anos 80. Fundada por Mário Sérgio Jacobs Barrionuevo,
            engenheiro civil formado pela PUCRS em 1983, a Projeção
            iniciou sua trajetória focada em projetos de arquitetura e
            engenharia. Nossa primeira sede estava localizada na
            Avenida Paraguassu, mas, em meados dos anos 90,
            mudamos para o emblemático Chalé Verde, na esquina da
            Rua Pindorama, onde funcionava a imobiliária do pai de
            Mário, Alcides Castilhos Barrionuevo, e que por muitos anos
            foi o lar da família Barrionuevo.</p>
        </div>

        <div className='flex h-2/5 justify-between gap-3 w-5/6 items-center '>
          <p className='text-xl w-2/4'>
            Mário Sérgio não foi apenas um engenheiro talentoso, mas também
            um professor dedicado e uma figura respeitada em Capão da Canoa.
            Ele contribuiu ativamente para o desenvolvimento da cidade,
            ocupando um papel importante no setor de obras da prefeitura. Era
            comum que profissionais e cidadãos o procurassem para esclarecer
            dúvidas sobre processos da prefeitura, o funcionamento da
            administração e até para resolver problemas complexos. Sempre
            disposto a compartilhar seu conhecimento, Mário adorava explicar e
            orientar, e por isso era amplamente admirado por sua generosidade e
            dedicação à comunidade.</p>
          <div className="h-full w-2/5 flex flex-col ">
            <div className="h-full w-full bg-cover min-w-80 bg-center rounded" style={{ backgroundImage: "url('/historia-images/mario.png" }} />
            <h3 className="text-lg text-center">(Legenda: Mário Sérgio fundador da empresa Projeção)</h3>
          </div>
        </div>

        <div className='flex h-2/5 justify-between w-5/6 items-center'>
          <div className="h-full w-2/5 flex flex-col">
            <div className="h-full w-full bg-cover min-h-80 min-w-80 bg-center rounded" style={{ backgroundImage: "url('/historia-images/formatura.png" }} />
            <h3 className="text-lg text-center">(Elizabeth, Mário Sérgio e Marlene Barrionuevo em frente ao Chalé Verde)</h3>
          </div>
          <p className='text-xl w-2/4'>
            Ao longo das décadas, a Projeção evoluiu e se modernizou, mantendo a essência de
            qualidade e comprometimento com o cliente. Em 2016, Ramiro Nunes Barrionuevo, filho de
            Mário Sérgio e também engenheiro civil formado pela PUCRS, passou a integrar a
            liderança da empresa, trazendo uma visão renovada e implementando novos processos que
            levaram a Projeção a  expandir seus horizontes. No ano de 2020, a construtora da Projeção
            foi oficialmente inaugurada sob a direção de Ramiro. Nesse mesmo período, a filha de
            Mário Sérgio, Isadora, ainda estudante de engenharia civil, começou seu estágio na
            empresa, contribuindo para a  continuidade da história da família no setor. Em 2021, com
            o falecimento de Mário Sérgio, seus filhos assumiram plenamente a liderança da Projeção,
            mantendo vivo o legado de dedicação e excelência deixado por ele. Após a formatura de
            Isadora em 2022, a empresa continuou sua trajetória de expansão, atuando não apenas
            em Capão da Canoa e Xangri-lá, mas também em outras cidades como Porto Alegre e Gramado.</p>
        </div>
      </section>

      <section style={{ background: '#1B3124' }}
        className='h-[calc(140%-96px)] text-center text-4xl px-36 py-16 flex flex-col items-center gap-16' id='contato'>
        <div className='flex w-full h-2/4 items-center justify-center'>
          <div className='flex flex-col h-3/4 w-2/5 items-start gap-4 '>
            <h1 className="font-bold text-[#F8F1E7] text-6xl">Contato:</h1>
            <div className='flex items-center text-2xl'>
              <Image src='/icones/pin.png' width={50} height={31.25} alt='Ícone localização' />
              <h3 className='text-[#F8F1E7]'>Rua peri, 1400 - Capão da Canoa/RS</h3>
            </div>
            <div className='flex items-center text-2xl gap-4'>
              <Image src='/icones/telefone.png' width={40} height={25} alt='Ícone telefone' />
              <h3 className='text-[#F8F1E7]'>51 99090-9090</h3>
            </div>
            <div className='flex items-center text-2xl gap-4'>
              <Image src='/icones/whatsapp.png' width={40} height={25} alt='Ícone whatsapp' />
              <h3 className='text-[#F8F1E7]'>51 99090-9090</h3>
            </div>
            <div className='flex items-center text-2xl gap-4'>
              <Image src='/icones/carta.png' width={40} height={25} alt='Ícone email' />
              <h3 className='text-[#F8F1E7]'>contato@projecao.com.br</h3>
            </div>
          </div>
          <div className='flex flex-col w-2/5 h-3/4 items-start gap-3 '>
            <input className="border-4 border-yellow-600 w-full text-2xl outline-none" placeholder='Nome*'></input>
            <input className="border-4 border-yellow-600 w-full text-2xl outline-none" placeholder='E-mail*'></input>
            <input className="border-4 border-yellow-600 w-full text-2xl outline-none" placeholder='Telefone*'></input>
            <textarea className="border-4 border-yellow-600 w-full h-full text-2xl outline-none" placeholder='Mensagem*'></textarea>
            <button className="w-1/3 text-lg border-2 border-yellow-600 text-[#A77A37] hover:bg-green-950 ">ENVIAR MENSAGEM</button>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.9319525534949!2d-50.017724510561!3d-29.756589710652964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95228320911045f1%3A0x3bba1caa90c3b287!2sProje%C3%A7%C3%A3o%20Arquitetura%20e%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1737053648924!5m2!1spt-BR!2sbr"
          className="w-3/4 h-3/4" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </section>
      <section
        className='h-[calc(30%)] text-center text-2xl px-24 justify-center' id='servicos'>
        <div className='flex h-full justify-between'>
          <div className='flex flex-col gap-6 items-start justify-center'>
            <Link href='#portfolio'>PORTFÓLIO</Link>
            <Link href='#servicos'>SERVIÇOS</Link>
            <Link href='#quemsomos'>QUEM SOMOS</Link>
            <Link href='#contato'>CONTATO</Link>
          </div>
          <div className='flex flex-col gap-4 justify-center'>
            <Image className='cursor-pointer' src='/icones/facebook.png' width={60} height={47.5} alt='Ícone localização' />
            <Image className='cursor-pointer' src='/icones/instagram.png' width={60} height={47.5} alt='Ícone localização' />
            <Image className='cursor-pointer' src='/icones/whatsapp-cinza.png' width={60} height={47.5} alt='Ícone localização' />
          </div>
        </div>
      </section>
    </span>
  )
}
