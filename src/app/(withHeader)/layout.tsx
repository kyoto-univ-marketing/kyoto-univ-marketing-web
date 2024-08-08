import { ReactNode } from 'react'

import { Navigation } from '@/components/common/Navigation/Navigation'
import { TopButton } from '@/components/common/TopButton/TopButton'

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <header className='sticky top-0 z-50' id='header'>
                <Navigation />
            </header>
            {children}
            <TopButton className='mb-12' />
        </>
    )
}
