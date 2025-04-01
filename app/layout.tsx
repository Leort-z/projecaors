import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Projeção Engenharia - Construção e Projetos | Projetos de Engenharia em Capão da Canoa",
  description: "Projeção Engenharia: Desenvolvemos projetos estruturais e laudos técnicos para Capão da Canoa e região. Soluções personalizadas para obras residenciais e comerciais com garantia de qualidade.",
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br'>
      <body className='bg-[#F8F1E7] text-[#151318] h-screen'>{children}</body>
    </html>
  )
}
