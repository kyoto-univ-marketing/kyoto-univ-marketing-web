import { FC } from 'react'
import { FaBars } from 'react-icons/fa6'

import pageLinks from '@/constants/pageLinks'

import { NextLink } from '../NextLink/NextLink'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

export interface HamburgerMenuProps {}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ ...props }) => {
    return (
        <Sheet>
            <SheetTrigger>
                <FaBars />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>京大マーケティング研究所</SheetTitle>
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