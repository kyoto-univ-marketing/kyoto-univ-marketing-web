import Link from 'next/link'
import { FC } from 'react'

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Logo } from '../Logo/Logo'

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = ({ ...props }) => {
    return (
        <nav className='flex w-full items-center justify-between gap-2 bg-slate-100 p-2'>
            <Link href='/'>
                <Logo />
            </Link>
            <div className='font-title text-lg font-bold'>京大マーケティング研究所</div>
            <HamburgerMenu />
        </nav>
    )
}
