import { Menu } from 'lucide-react'
import { FC } from 'react'

import pageLinks from '@/constants/pageLinks'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'
import { Logo } from '../Logo/Logo'
import { MailAndSNS } from '../MailAndSNS/MailAndSNS'
import { NextLink } from '../NextLink/NextLink'

export interface HamburgerMenuProps {}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ ...props }) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-0 border-primary bg-primary text-primary-foreground'>
                <SheetHeader className='mt-8'>
                    <Logo reverse className='mx-auto' size='xl' />
                    <SheetTitle className='mx-auto font-title text-heading text-primary-foreground'>
                        京大マーケティング研究所
                    </SheetTitle>
                </SheetHeader>
                <ul className='mt-12 space-y-4 px-6'>
                    {pageLinks.map((link) => (
                        <li key={link.href}>
                            <NextLink href={link.href}>
                                <p className='text-lg'>{link.textEng}</p>
                                <p className='text-xs'>{link.text}</p>
                            </NextLink>
                        </li>
                    ))}
                </ul>
                <MailAndSNS
                    mailIconSize={16}
                    mailTextClassName='text-xs'
                    snsIconSize={24}
                    className='mt-auto justify-self-end'
                />
            </SheetContent>
        </Sheet>
    )
}