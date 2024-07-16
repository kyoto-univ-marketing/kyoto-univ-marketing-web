import { MailIcon } from 'lucide-react'
import { FC } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

import pageLinks from '@/constants/pageLinks'
import profile from '@/constants/profile'

import { NextLink } from '../NextLink/NextLink'

export interface FooterProps {}

const mailAddress = 'kyoto.univ.marketing@gmail.com'

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
                <div className='mt-12 flex items-center gap-2'>
                    <MailIcon />
                    <NextLink className='text-sm' href={`mailto:${mailAddress}`}>
                        {mailAddress}
                    </NextLink>
                </div>
                <div className='mt-4 grid w-full grid-flow-col justify-evenly'>
                    <NextLink href={profile.xUrl}>
                        <FaXTwitter size='32' />
                    </NextLink>
                    <NextLink href={profile.instagramUrl}>
                        <FaInstagram href={profile.instagramUrl} size='32' />
                    </NextLink>
                </div>
            </div>
        </footer>
    )
}
