import { BIZ_UDPMincho } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/Footer/Footer'
import { Toaster } from '@/components/ui/toaster'

import type { Metadata } from 'next'

import './globals.css'

const bizUdpMincho = BIZ_UDPMincho({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
    title: {
        default: '京大マーケティング研究所',
        template: `%s | 京大マーケティング研究所`,
    },
    description: '', // TODO
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang='ja'>
            <body className={bizUdpMincho.className}>
                <>
                    <div className='mx-auto max-w-screen-sm'>
                        {children}
                        <Footer />
                    </div>
                    <Toaster />
                </>
            </body>
        </html>
    )
}
