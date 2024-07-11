import { ReactNode } from 'react'

import { Navigation } from '@/components/Navigation/Navigation'

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <header className='sticky top-0'>
                <Navigation />
            </header>
            {children}
        </>
    )
}
