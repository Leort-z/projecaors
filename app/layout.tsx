import './globals.css'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-br'>
      <body className='bg-[#F8F1E7] text-[#151318] h-screen'>{children}</body>
    </html>
  )
}
