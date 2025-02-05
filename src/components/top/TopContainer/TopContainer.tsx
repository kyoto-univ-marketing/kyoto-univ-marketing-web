'use client'

import { useIsDesktop } from '@/hooks/use-is-desktop'
import { FC } from 'react'

export interface TopContainerProps {
    children: React.ReactNode
    isDesktop: boolean
}

// このコンポーネントはクライアントコンポーネントだが、childrenはサーバーコンポーネントにすることが可能

export const TopContainer: FC<TopContainerProps> = ({ children, isDesktop, ...props }) => {
    const isShow = isDesktop === useIsDesktop()
    if (isShow) {
        return children
    }
    return null
}
