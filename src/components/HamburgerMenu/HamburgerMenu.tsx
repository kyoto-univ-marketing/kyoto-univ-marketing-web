import Link from 'next/link'
import { FC } from 'react'
import { FaBars } from 'react-icons/fa6'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

export interface HamburgerMenuProps {}

const linkList = [
    {
        href: '/',
        text: 'ホーム',
    },
    {
        href: '/about',
        text: 'サークルについて',
    },
    {
        href: '/articles',
        text: '活動記録',
    },
    {
        href: '/projects',
        text: 'プロジェクト',
    },
    {
        href: '/links',
        text: 'リンク集',
    },
    {
        href: '/contact',
        text: 'お問い合わせ',
    },
] as const satisfies { href: string; text: string }[] // TODO: 別ファイルに移動して使いまわしたい

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
                    {linkList.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}
