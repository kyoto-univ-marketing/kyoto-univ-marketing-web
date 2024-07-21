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
            <header id='header' className='sticky top-0 z-50'>
                <Navigation />
            </header>
            {children}
            <TopButton className='mb-12' />
        </>
    )
}
