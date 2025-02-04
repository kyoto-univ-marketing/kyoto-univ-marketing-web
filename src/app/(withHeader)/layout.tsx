import { TopButton } from '@/components/common/TopButton/TopButton'
import { ReactNode } from 'react'

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
