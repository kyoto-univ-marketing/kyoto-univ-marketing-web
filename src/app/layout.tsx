import { BIZ_UDPMincho } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/common/Footer/Footer'
import { Toaster } from '@/components/ui/toaster'

import type { Metadata, Viewport } from 'next'

import './globals.css'

const bizUdpMincho = BIZ_UDPMincho({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
    title: {
        default: '京大マーケティング研究所',
        template: `%s | 京大マーケティング研究所`,
    },
    description: '', // TODO
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
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
