import Link from 'next/link'
import { FC } from 'react'

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Logo } from '../Logo/Logo'

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = ({ ...props }) => {
    return (
        <nav className='flex w-full items-center justify-between gap-4 bg-primary p-4 text-primary-foreground'>
            <Link className='flex items-center gap-4' href='/'>
                <Logo reverse />
                <div className='font-title text-accent font-bold'>京大マーケティング研究所</div>
            </Link>
            <HamburgerMenu />
        </nav>
    )
}
