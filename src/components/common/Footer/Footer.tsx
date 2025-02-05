import { FC } from 'react'

import pageLinks from '@/constants/pageLinks'

import { MailAndSNS } from '../MailAndSNS/MailAndSNS'
import { NextLink } from '../NextLink/NextLink'

export interface FooterProps {}

export const Footer: FC<FooterProps> = ({ ...props }) => {
    return (
        <footer className='flex w-full flex-col items-center overflow-x-hidden text-primary-foreground'>
            <div className='h-24 w-[110%] rounded-t-[100%] bg-primary'></div>
            <div className='flex w-full flex-col items-center bg-primary px-12 pb-12 sm:pb-18 pt-4 sm:flex-row-reverse gap-12 justify-evenly'>
                <ul className='w-full gap-4 grid grid-cols-1 sm:grid-cols-2 max-w-96'>
                    {pageLinks.map((link) => (
                        <li key={link.href}>
                            <NextLink href={link.href}>{link.text}</NextLink>
                        </li>
                    ))}
                </ul>
                <div className='sm:max-w-1/2'>
                    <div className='font-title text-title mb-4 hidden sm:block'>
                        <span className='inline-block'>京大</span>
                        <span className='inline-block'>マーケティング</span>
                        <span className='inline-block'>研究所</span>
                    </div>
                    <MailAndSNS snsIconSize={24} />
                </div>
            </div>
        </footer>
    )
}
