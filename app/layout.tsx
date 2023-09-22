import type { Metadata } from 'next'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishant Bhurani | Personal Portfolio',
  description:
    'Ishant Bhurani is a full-stack developer and freelancer with experience in various domains, such as electronics, Arduino microcontrollers, Internet of Things (IoT), home automation, Python development, and Web Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#fbe2e3] absolute h-[31.25rem] w-[31.25rem] -z-10 rounded-full -top-24 right-44 blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute h-[31.25rem] w-[50rem] -z-10 rounded-full -top-4 -left-[35rem] right-44 blur-[10rem] sm:w-[68.75rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-60 2xl:-left-20'></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}

          <Toaster position='top-right' />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
