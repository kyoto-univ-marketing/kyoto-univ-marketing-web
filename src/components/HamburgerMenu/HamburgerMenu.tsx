import { Menu } from 'lucide-react'
import { FC } from 'react'

import pageLinks from '@/constants/pageLinks'

import { Logo } from '../Logo/Logo'
import { NextLink } from '../NextLink/NextLink'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

export interface HamburgerMenuProps {}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ ...props }) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <Logo className='mx-auto' size='xl' />
                    <SheetTitle className='mx-auto font-title'>京大マーケティング研究所</SheetTitle>
                </SheetHeader>
                <ul className='mt-8 space-y-4'>
                    {pageLinks.map((link) => (
                        <li key={link.href}>
                            <NextLink href={link.href}>{link.text}</NextLink>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}