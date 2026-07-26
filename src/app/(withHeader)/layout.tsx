import { ReactNode } from 'react'
import { TopButton } from '@/components/common/TopButton/TopButton'

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            {children}
            <TopButton className='mb-12' />
        </>
    )
}
