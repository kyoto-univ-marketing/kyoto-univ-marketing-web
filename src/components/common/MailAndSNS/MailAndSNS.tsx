import { MailIcon } from 'lucide-react'
import { ComponentProps, FC } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

import profile from '@/constants/profile'
import { cn } from '@/lib/utils'

import { NextLink } from '../NextLink/NextLink'

export interface MailAndSNSProps extends ComponentProps<'div'> {
    iconSize?: number
}

export const MailAndSNS: FC<MailAndSNSProps> = ({ iconSize = 32, className, ...props }) => {
    return (
        <div {...props} className={cn('flex w-full flex-col items-center', className)}>
            <div className='flex items-center gap-2'>
                <MailIcon />
                <NextLink className='text-accent-sm' href={`mailto:${profile.mailAddress}`}>
                    {profile.mailAddress}
                </NextLink>
            </div>
            <div className='mt-4 grid w-full grid-flow-col justify-evenly'>
                <NextLink href={profile.xUrl}>
                    <FaXTwitter size={iconSize} />
                </NextLink>
                <NextLink href={profile.instagramUrl}>
                    <FaInstagram size={iconSize} />
                </NextLink>
            </div>
        </div>
    )
}
