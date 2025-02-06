'use client'

import { useIsDesktop } from '@/hooks/use-is-desktop'
import { FC, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa6'

export interface TopContainerProps {
    mobile: React.ReactNode
    desktop: React.ReactNode
}

// このコンポーネントはクライアントコンポーネントだが、childrenはサーバーコンポーネントにすることが可能

export const TopContainer: FC<TopContainerProps> = ({ mobile, desktop, ...props }) => {
    const isDesktop = useIsDesktop()
    useEffect(() => {
        if (isDesktop !== undefined) {
            window.scrollTo(0, 0)
        }
    }, [isDesktop])
    if (isDesktop === undefined) {
        return (
            <div className='grid h-screen w-full items-center justify-center'>
                <div className='flex h-24 w-full items-center justify-center p-8'>
                    <FaSpinner className='h-8 w-8 animate-spin' />
                </div>
            </div>
        )
    }
    if (isDesktop) {
        return desktop
    }
    return mobile
}
