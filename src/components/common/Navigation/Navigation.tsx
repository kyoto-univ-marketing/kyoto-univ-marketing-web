import Link from 'next/link'
import { FC } from 'react'

import pageLinks from '@/constants/pageLinks'
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Logo } from '../Logo/Logo'
import { NextLink } from '../NextLink/NextLink'

export interface NavigationProps {
    showHamburger?: boolean
}

export const Navigation: FC<NavigationProps> = ({ showHamburger = true, ...props }) => {
    return (
        <>
            <nav className='flex w-full items-center justify-between gap-4 bg-primary p-4 text-primary-foreground'>
                <Link className='flex items-center gap-4' href='/'>
                    <Logo reverse />
                    <div className='font-title text-accent font-bold'>京大マーケティング研究所</div>
                </Link>
                {/* モバイル用 */}
                <div className='sm:hidden'>{showHamburger && <HamburgerMenu />}</div>

                {/* PC用 */}
                <ul className='items-center gap-6 hidden sm:flex'>
                    {pageLinks
                        .filter((link) => link.href !== '/')
                        .map((link) => (
                            <li key={link.href}>
                                <NextLink className='hover:underline' href={link.href}>
                                    {link.text}
                                </NextLink>
                            </li>
                        ))}
                </ul>
            </nav>
        </>
    )
}
