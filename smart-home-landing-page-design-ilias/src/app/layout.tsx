import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Home',
  description: 'Elevate Your Living Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body 
        className="bg-black min-h-screen"
        suppressHydrationWarning={true}
      >
        <div className="bg-black p-4 md:p-6 lg:p-8">
          <Header />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}