'use client'

import { Menu } from 'lucide-react'
import { FC, useState } from 'react'

import pageLinks, { pageLinkObject } from '@/constants/pageLinks'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'
import { Logo } from '../Logo/Logo'
import { MailAndSNS } from '../MailAndSNS/MailAndSNS'
import { NextLink } from '../NextLink/NextLink'

export interface HamburgerMenuProps {
    instagramUrl: string
    mailAddress: string
}

const entryLinks = [pageLinkObject.JOIN, pageLinkObject.SPONSORSHIP]

/**
 * モバイルのメニュー。
 *
 * 日本語を主、英字を従として並べる。以前は逆（英字が大きく日本語が小さい）だったが、
 * 読み手は日本語で探すため、モバイルの主要な導線でそれをやると迷わせる。
 * 「学生の方へ」「企業の方へ」はPCと同じく枠付きにして、通常メニューと区別する。
 */
export const HamburgerMenu: FC<HamburgerMenuProps> = ({ instagramUrl, mailAddress, ...props }) => {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    return (
        <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger aria-label='メニューを開く' className='cursor-pointer'>
                <Menu />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-0 overflow-y-auto border-primary bg-primary text-primary-foreground'>
                <SheetHeader className='mt-8'>
                    <Logo className='mx-auto' reverse size='xl' />
                    <SheetTitle className='mx-auto font-title text-heading text-primary-foreground'>
                        京大マーケティング研究所
                    </SheetTitle>
                </SheetHeader>
                <ul className='mt-10 space-y-5 px-6'>
                    {pageLinks
                        .filter(
                            (link) =>
                                link.href !== pageLinkObject.JOIN.href &&
                                link.href !== pageLinkObject.SPONSORSHIP.href,
                        )
                        .map((link) => (
                            <li key={link.href}>
                                <NextLink className='block' href={link.href} onClick={close}>
                                    <p className='font-title text-lg leading-snug'>{link.text}</p>
                                    <p className='font-en text-brand-accent text-[0.6rem] uppercase tracking-[0.3em]'>
                                        {link.textEng}
                                    </p>
                                </NextLink>
                            </li>
                        ))}
                </ul>
                <ul className='mt-8 space-y-3 px-6'>
                    {entryLinks.map((link) => (
                        <li key={link.href}>
                            <NextLink
                                className='block border border-white/60 px-4 py-3 text-center text-sm'
                                href={link.href}
                                onClick={close}
                            >
                                {link.href === pageLinkObject.JOIN.href ? '学生の方へ' : link.text}
                            </NextLink>
                        </li>
                    ))}
                </ul>
                <MailAndSNS
                    className='mt-auto pt-10 pb-4'
                    instagramUrl={instagramUrl}
                    mailAddress={mailAddress}
                    mailIconSize={16}
                    mailTextClassName='text-xs'
                    snsIconSize={24}
                />
            </SheetContent>
        </Sheet>
    )
}
