import { FC } from 'react'

import pageLinks from '@/constants/pageLinks'

import { MailAndSNS } from '../MailAndSNS/MailAndSNS'
import { NextLink } from '../NextLink/NextLink'

export interface FooterProps {}

export const Footer: FC<FooterProps> = ({ ...props }) => {
    return (
        <footer className='flex w-full flex-col items-center overflow-x-hidden text-primary-foreground'>
            <div className='h-24 w-[110%] rounded-t-[100%] bg-primary' />
            <div className='flex w-full flex-col items-center justify-evenly gap-12 bg-primary px-12 pt-4 pb-12 md:flex-row-reverse md:pb-18'>
                <ul className='grid w-full max-w-96 grid-cols-1 gap-4 md:grid-cols-2'>
                    {pageLinks.map((link) => (
                        <li key={link.href}>
                            <NextLink href={link.href}>{link.text}</NextLink>
                        </li>
                    ))}
                </ul>
                <div className='md:max-w-1/2'>
                    <div className='mb-4 hidden font-title text-title md:block'>
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
