import { GoogleAnalytics } from '@next/third-parties/google'
import { BIZ_UDPMincho, Hina_Mincho } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/common/Footer/Footer'
import { Toaster } from '@/components/ui/toaster'

import type { Metadata, Viewport } from 'next'

import './globals.css'

/** 本文のフォント */
const bizUdpMincho = BIZ_UDPMincho({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-biz-udp-mincho' })
/** タイトルのフォント */
const hinaMincho = Hina_Mincho({ subsets: ['latin'], weight: ['400'], variable: '--font-hina-mincho' })

export const metadata: Metadata = {
    title: {
        default: '京大マーケティング研究所',
        template: `%s | 京大マーケティング研究所`,
    },
    metadataBase: new URL('https://kyodaimarketing.com'),
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        url: 'https://kyodaimarketing.com',
        siteName: '京大マーケティング研究所',
    },
    twitter: {
        creatorId: '@ku__marketing',
        site: '@ku__marketing',
        card: 'summary_large_image',
    },
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
    const { NEXT_PUBLIC_MEASUREMENT_ID } = process.env
    if (!NEXT_PUBLIC_MEASUREMENT_ID) {
        throw new Error('Google AnalyticsのIDが設定されていません')
    }

    return (
        <html lang='ja'>
            <body className={`${bizUdpMincho.variable} ${hinaMincho.variable}`}>
                <div className='mx-auto max-w-screen-sm'>
                    {children}
                    <Footer />
                </div>
                <Toaster />
                {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId={NEXT_PUBLIC_MEASUREMENT_ID} />}
            </body>
        </html>
    )
}
