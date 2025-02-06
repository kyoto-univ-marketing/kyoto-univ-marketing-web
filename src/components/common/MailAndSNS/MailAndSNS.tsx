import { MailIcon } from 'lucide-react'
import { ComponentProps, FC } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

import profile from '@/constants/profile'
import { cn } from '@/lib/utils'

import { NextLink } from '../NextLink/NextLink'

export interface MailAndSNSProps extends ComponentProps<'div'> {
    snsIconSize?: number
    mailIconSize?: number
    mailTextClassName?: string
}

export const MailAndSNS: FC<MailAndSNSProps> = ({
    snsIconSize = 32,
    mailIconSize = 24,
    mailTextClassName,
    className,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                'flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-x-8',
                className,
            )}
        >
            <div className='flex items-center gap-2'>
                <MailIcon size={mailIconSize} />
                <NextLink className={cn('text-accent-sm', mailTextClassName)} href={`mailto:${profile.mailAddress}`}>
                    {profile.mailAddress}
                </NextLink>
            </div>
            <div className='grid w-full grid-flow-col justify-evenly md:w-fit md:justify-center md:gap-6'>
                <NextLink href={profile.xUrl}>
                    <FaXTwitter size={snsIconSize} />
                </NextLink>
                <NextLink href={profile.instagramUrl}>
                    <FaInstagram size={snsIconSize} />
                </NextLink>
            </div>
        </div>
    )
}
