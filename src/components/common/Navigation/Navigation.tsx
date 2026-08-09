import Link from 'next/link'

import pageLinks from '@/constants/pageLinks'
import { getSiteSettings } from '@/lib/microcms'

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Logo } from '../Logo/Logo'
import { NextLink } from '../NextLink/NextLink'

export interface NavigationProps {
    showHamburger?: boolean
}

/**
 * ヘッダーの中身。
 *
 * トップページの最上部（HeaderShell が透明のとき）だけ、PC では明るいヒーローに合わせて
 * 紺の文字・紺のロゴに反転する。スマホのヒーローは暗いので白のままでよい。
 */
export const Navigation = async ({ showHamburger = true, ...props }: NavigationProps) => {
    const siteSettings = await getSiteSettings()
    return (
        <nav className='flex h-18 w-full items-center justify-between gap-4 p-4 text-primary-foreground transition-colors duration-500 md:group-data-[transparent=true]:text-primary'>
            <Link className='flex items-center gap-4' href='/'>
                <span className='relative block size-10 shrink-0'>
                    <Logo
                        className='size-full transition-opacity duration-500 md:group-data-[transparent=true]:opacity-0'
                        reverse
                    />
                    <Logo className='absolute inset-0 size-full opacity-0 transition-opacity duration-500 md:group-data-[transparent=true]:opacity-100' />
                </span>
                <div className='font-bold font-title text-accent'>京大マーケティング研究所</div>
            </Link>
            {showHamburger && (
                <div className='md:hidden'>
                    <HamburgerMenu
                        instagramUrl={siteSettings.instagram_url}
                        mailAddress={siteSettings.mail_address}
                        xUrl={siteSettings.x_url}
                    />
                </div>
            )}
            <ul className='hidden items-center gap-4 text-sm md:flex lg:gap-6 lg:text-base'>
                {pageLinks
                    .filter((link) => link.href !== '/')
                    .map((link) => (
                        <li key={link.href}>
                            <NextLink
                                className='relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:block after:h-px after:origin-left after:scale-x-0 after:bg-brand-accent after:transition-transform hover:after:scale-x-100'
                                href={link.href}
                            >
                                {link.text}
                            </NextLink>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}
