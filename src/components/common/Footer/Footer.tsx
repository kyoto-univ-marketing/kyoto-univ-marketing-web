import { FC } from 'react'

import pageLinks from '@/constants/pageLinks'

import { MailAndSNS } from '../MailAndSNS/MailAndSNS'
import { NextLink } from '../NextLink/NextLink'

export interface FooterProps {}

export const Footer: FC<FooterProps> = ({ ...props }) => {
    return (
        <footer className='flex w-full flex-col items-center overflow-x-hidden text-primary-foreground'>
            <div className='h-24 w-[110%] rounded-t-[100%] bg-primary'></div>
            <div className='flex w-full flex-col items-center bg-primary px-12 pb-12 pt-4'>
                <ul className='w-full space-y-4'>
                    {pageLinks.map((link) => (
                        <li key={link.href}>
                            <NextLink href={link.href}>{link.text}</NextLink>
                        </li>
                    ))}
                </ul>
                <MailAndSNS className='mt-12' />
            </div>
        </footer>
    )
}
