import Image from 'next/image'
import Link from 'next/link'
import PortfolioItem from './components/PortfolioItem'
import ServicoItem from './components/ServicoItem'

export default function Home() {
  const portfolioItems = [
    { name: "Residencial Gabi", imagePath: "residencial-gabi.png" },
    { name: "Residencial Larissa", imagePath: "residencial-larissa.png" },
    { name: "Residencial LB", imagePath: "residencial-lb.png" },
    { name: "Residencial Zatti", imagePath: "residencial-zatti.png" },
    { name: "Sublime Residence", imagePath: "sublime-residence.png" }]

  const servicoItems = [
    { name: "Construção", imagePath: "construcao.png" },
    { name: "Execução de obras", imagePath: "execucao-obra.png" },
    { name: "Laudo técnico", imagePath: "laudo-tecnico.png" },
    { name: "Acompanhamento de Obras", imagePath: "construcao.png" },
    { name: "Regularização de Imóveis", imagePath: "execucao-obra.png" },
    { name: "Plotagem de Projetos", imagePath: "laudo-tecnico.png" }]

  return (
    <>
      <header
        style={{ background: 'linear-gradient(360deg, rgba(15, 30, 21, 0) 0%, #0F1E15 0%)' }}
        className='w-full flex justify-between items-center pl-40 pr-32 text-x min-h-24 fixed'
      >
        <Image src='/white-logo.png' width={120} height={75} alt='Logo da empresa Projeção' />
        <nav className='flex justify-between gap-16 text-[#F8F1E7] '>
          <Link href='/portfolio'>PORTFÓLIO</Link>
          <Link href='/services'>SERVIÇOS</Link>
          <Link href='/about'>QUEM SOMOS</Link>
          <Link href='/contact'>CONTATO</Link>
        </nav>
      </header>
      <main className="bg-[url('/main-image.png')] min-h-screen bg-cover bg-no-repeat	"></main>
      <section className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12 '>
        <h1 className="font-bold">PORTFÓLIO</h1>
        <div className='flex flex-row h-3/4 justify-between mt-12 '>
          {portfolioItems.map(({ name, imagePath }) => <PortfolioItem name={name} imagePath={imagePath} />)}

        </div>
        <button
          className="h-12 w-1/4 text-lg border-2 border-yellow-600 hover:bg-amber-50">VER MAIS

        </button>
      </section>

      <section style={{ background: '#1B3124' }}
        className='h-[calc(100%-96px)] text-center text-4xl px-36 py-12 '>
        <h1 className="font-bold text-[#F8F1E7]">SERVIÇOS</h1>
        <div className='flex flex-wrap h-4/5 mt-12 justify-center gap-3 '>
          {servicoItems.map(({ name, imagePath }) => <ServicoItem name={name} imagePath={imagePath} />)}

        </div>
        <button className="h-12 w-1/4 text-lg border-2 border-yellow-600 text-[#A77A37] mt-5 hover:bg-green-950 ">VER MAIS

        </button>
      </section>
      <section className='h-[calc(200%-96px)] px-12 py-12 flex flex-col gap-12 items-center'>
        <h1 className="text-7xl">Família Projeção</h1>
        <div className='flex flex-wrap h-3/5 justify-between gap-3 w-5/6 items-center border border-red-600'>
          <div className="h-full w-2/4 flex flex-col ">
            <div className="h-full w-full bg-cover bg-center rounded" style={{ backgroundImage: "url('/historia-images/escritorio.png" }} />
            <h3 className="text-lg text-center">(Elizabeth, Mário Sérgio e Marlene Barrionuevo em frente ao Chalé Verde)</h3>
          </div>
          <p className='text-xl border border-red-600'>[Início] <br /><br />
            A Projeção é uma empresa familiar com raízes profundas em <br />
            Capão da Canoa e uma história que remonta ao final dos <br />
            anos 80. Fundada por Mário Sérgio Jacobs Barrionuevo, <br />
            engenheiro civil formado pela PUCRS em 1983, a Projeção <br />
            iniciou sua trajetória focada em projetos de arquitetura e <br />
            engenharia. Nossa primeira sede estava localizada na <br />
            Avenida Paraguassu, mas, em meados dos anos 90, <br />
            mudamos para o emblemático Chalé Verde, na esquina da <br />
            Rua Pindorama, onde funcionava a imobiliária do pai de <br />
            Mário, Alcides Castilhos Barrionuevo, e que por muitos anos <br />
            foi o lar da família Barrionuevo.</p>
        </div>

        <div className='flex flex-wrap-reverse h-3/5 justify-between gap-3 w-5/6 items-center border border-red-600'>
          <p className='text-xl'>
          Mário Sérgio não foi apenas um engenheiro talentoso, mas também <br />
          um professor dedicado e uma figura respeitada em Capão da Canoa. <br />
          Ele contribuiu ativamente para o desenvolvimento da cidade, <br />
          ocupando um papel importante no setor de obras da prefeitura. Era <br />
          comum que profissionais e cidadãos o procurassem para esclarecer <br />
          dúvidas sobre processos da prefeitura, o funcionamento da <br />
          administração e até para resolver problemas complexos. Sempre <br />
          disposto a compartilhar seu conhecimento, Mário adorava explicar e <br />
          orientar, e por isso era amplamente admirado por sua generosidade e <br />
          dedicação à comunidade.</p>
          <div className="h-full w-2/5 flex flex-col ">
            <div className="h-full w-full bg-cover min-w-80 bg-center rounded" style={{ backgroundImage: "url('/historia-images/mario.png" }} />
            <h3 className="text-lg text-center">(Legenda: Mário Sérgio fundador da empresa Projeção)</h3>
          </div>
        </div>

        <div className='flex flex-wrap h-3/5 justify-between w-5/6 items-center'>
          <div className="h-full w-2/5 flex flex-col ">
            <div className="h-full w-full bg-cover min-h-80 min-w-80 bg-center rounded" style={{ backgroundImage: "url('/historia-images/formatura.png" }} />
            <h3 className="text-lg text-center">(Elizabeth, Mário Sérgio e Marlene Barrionuevo em frente ao Chalé Verde)</h3>
          </div>
          <p className='text-xl'>
          Ao longo das décadas, a Projeção evoluiu e se modernizou, mantendo a essência de  <br />
          qualidade e comprometimento com o cliente. Em 2016, Ramiro Nunes Barrionuevo, filho de <br /> 
          Mário Sérgio e também engenheiro civil formado pela PUCRS, passou a integrar a <br /> 
          liderança da empresa, trazendo uma visão renovada e implementando novos processos que <br /> 
          levaram a Projeção a  expandir seus horizontes. No ano de 2020, a construtora da Projeção <br /> 
          foi oficialmente inaugurada sob a direção de Ramiro. Nesse mesmo período, a filha de <br /> 
          Mário Sérgio, Isadora, ainda estudante de engenharia civil, começou seu estágio na<br /> 
          empresa, contribuindo para a  continuidade da história da família no setor. Em 2021, com<br /> 
          o falecimento de Mário Sérgio, seus filhos assumiram plenamente a liderança da Projeção,<br /> 
          mantendo vivo o legado de dedicação e excelência deixado por ele. Após a formatura de <br /> 
          Isadora em 2022, a empresa continuou sua trajetória de expansão, atuando não apenas <br />  
          em Capão da Canoa e Xangri-lá, mas também em outras cidades como Porto Alegre e Gramado.</p>
        </div>
      </section>
    </>
  )
}
