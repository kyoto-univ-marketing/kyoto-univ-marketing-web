import Link from 'next/link'

import pageLinks, { pageLinkObject } from '@/constants/pageLinks'
import { getSiteSettings } from '@/lib/microcms'

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Logo } from '../Logo/Logo'
import { NextLink } from '../NextLink/NextLink'

export interface NavigationProps {
    showHamburger?: boolean
}

export const Navigation = async ({ showHamburger = true, ...props }: NavigationProps) => {
    const siteSettings = await getSiteSettings()
    return (
        <nav className='flex h-18 w-full items-center justify-between gap-4 p-4 text-primary-foreground'>
            <Link className='flex min-w-0 items-center gap-3 sm:gap-4' href='/'>
                <Logo reverse />
                <div className='truncate font-bold font-title text-accent-sm sm:text-accent'>
                    京大マーケティング研究所
                </div>
            </Link>
            {/*
             * 横並びのメニューは lg から。md（768px）では
             * ロゴ＋4項目＋枠付きボタン2つが収まらず、はみ出してしまうため。
             */}
            {showHamburger && (
                <div className='lg:hidden'>
                    <HamburgerMenu
                        instagramUrl={siteSettings.instagram_url}
                        mailAddress={siteSettings.mail_address}
                        xUrl={siteSettings.x_url}
                    />
                </div>
            )}
            {/* 「学生の方へ」「企業の方へ」の2つの入口は、通常メニューに混ぜず枠付きで独立させる */}
            <ul className='hidden shrink-0 items-center gap-4 text-sm lg:flex lg:gap-6'>
                {pageLinks
                    .filter(
                        (link) =>
                            link.href !== '/' &&
                            link.href !== pageLinkObject.SPONSORSHIP.href &&
                            // 入会の導線はトップの大きなボタンとフッターに任せ、ナビは短く保つ
                            link.href !== pageLinkObject.JOIN.href,
                    )
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
                <li>
                    <NextLink
                        className='block border border-white/60 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-primary'
                        href={pageLinkObject.JOIN.href}
                    >
                        学生の方へ
                    </NextLink>
                </li>
                <li>
                    <NextLink
                        className='block border border-brand-accent px-4 py-2 text-brand-accent text-sm transition-colors hover:bg-brand-accent hover:text-primary'
                        href={pageLinkObject.SPONSORSHIP.href}
                    >
                        {pageLinkObject.SPONSORSHIP.text}
                    </NextLink>
                </li>
            </ul>
        </nav>
    )
}
