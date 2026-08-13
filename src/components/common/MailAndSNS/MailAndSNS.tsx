import { MailIcon } from 'lucide-react'
import { ComponentProps, FC } from 'react'
import { FaInstagram } from 'react-icons/fa6'

import { cn } from '@/lib/utils'

import { NextLink } from '../NextLink/NextLink'

export interface MailAndSNSProps extends ComponentProps<'div'> {
    instagramUrl: string
    mailAddress: string
    snsIconSize?: number
    mailIconSize?: number
    mailTextClassName?: string
}

/**
 * 連絡先とSNS。
 *
 * X（旧Twitter）は載せていない。運用していないアカウントを出すと、
 * 見に行った人に「止まっている団体」という印象を与えるため。
 * 再開したら instagram と同じ形で戻せばよい。
 */
export const MailAndSNS: FC<MailAndSNSProps> = ({
    instagramUrl,
    mailAddress,
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
                <NextLink className={cn('text-accent-sm', mailTextClassName)} href={`mailto:${mailAddress}`}>
                    {mailAddress}
                </NextLink>
            </div>
            <NextLink aria-label='Instagram' href={instagramUrl}>
                <FaInstagram size={snsIconSize} />
            </NextLink>
        </div>
    )
}
