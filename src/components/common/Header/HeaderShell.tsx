'use client'

import { usePathname } from 'next/navigation'
import { FC, ReactNode, useEffect, useState } from 'react'

/**
 * ヘッダーの外枠。
 *
 * トップページでは、最初だけ背景を透明にしてヒーローの写真を一枚の絵として見せ、
 * 少しスクロールしたら紺の帯に戻す。中身（Navigation）はサーバー側で描くため、
 * 状態は data 属性で渡し、色の出し分けは Tailwind の group-data で行う。
 */
export const HeaderShell: FC<{ children: ReactNode }> = ({ children }) => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(true)

    useEffect(() => {
        const update = () => setIsScrolled(window.scrollY > 80)
        update()
        window.addEventListener('scroll', update, { passive: true })
        return () => window.removeEventListener('scroll', update)
    }, [])

    return (
        <header
            className='group sticky top-0 z-50 bg-primary transition-colors duration-500 data-[transparent=true]:bg-transparent'
            data-transparent={pathname === '/' && !isScrolled}
            id='header'
        >
            {children}
        </header>
    )
}
