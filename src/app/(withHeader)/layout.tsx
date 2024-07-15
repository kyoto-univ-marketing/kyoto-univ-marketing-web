import { ReactNode } from 'react'

import { Navigation } from '@/components/common/Navigation/Navigation'

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <header className='sticky top-0 z-50'>
                <Navigation />
            </header>
            {children}
        </>
    )
}
