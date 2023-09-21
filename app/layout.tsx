import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
