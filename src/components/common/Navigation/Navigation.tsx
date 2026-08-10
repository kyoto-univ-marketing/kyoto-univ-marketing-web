import Link from 'next/link'

import pageLinks, { pageLinkObject } from '@/constants/pageLinks'
import { getSiteSettings } from '@/lib/microcms'

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Logo } from '../Logo/Logo'
import { NextLink } from '../NextLink/NextLink'

export interface NavigationProps {
    showHamburger?: boolean
}

/** 読み手を振り分ける2つの入口。金は協賛（企業の方へ）だけに使う */
const entryButtonClass = 'block border px-4 py-2 text-sm transition-colors'
const studentButtonClass = `${entryButtonClass} border-white/60 hover:bg-white hover:text-primary`
const companyButtonClass = `${entryButtonClass} border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-primary`

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
            {/* 「学生の方へ」「企業の方へ」は読み手を振り分ける2つの入口なので、
                通常メニューに混ぜず、同じ見た目の枠付きボタンとして右端に並べる。
                お問い合わせは通常メニューのまま（入口の2つより先に押されると振り分けが働かない） */}
            <ul className='hidden shrink-0 items-center gap-4 text-sm lg:flex lg:gap-6'>
                {pageLinks
                    .filter(
                        (link) =>
                            link.href !== '/' &&
                            link.href !== pageLinkObject.SPONSORSHIP.href &&
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
                    <NextLink className={studentButtonClass} href={pageLinkObject.JOIN.href}>
                        学生の方へ
                    </NextLink>
                </li>
                <li>
                    <NextLink className={companyButtonClass} href={pageLinkObject.SPONSORSHIP.href}>
                        {pageLinkObject.SPONSORSHIP.text}
                    </NextLink>
                </li>
            </ul>
        </nav>
    )
}
