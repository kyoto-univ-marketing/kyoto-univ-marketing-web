import { Header } from '@/components/common/Header/Header'
import { TopButton } from '@/components/common/TopButton/TopButton'
import { ReactNode } from 'react'

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <Header />
            {children}
            <TopButton className='mb-12' />
        </>
    )
}
