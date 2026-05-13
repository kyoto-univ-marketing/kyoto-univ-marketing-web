import { ComponentProps, FC, ReactNode } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { cn } from '@/lib/utils'

export interface OfficialAccountLinksProps extends Omit<ComponentProps<'div'>, 'children'> {
    xUrl: string
    instagramUrl: string
}

export const OfficialAccountLinks: FC<OfficialAccountLinksProps> = ({ xUrl, instagramUrl, className, ...props }) => {
    return (
        <div {...props} className={cn('space-y-12', className)}>
            <LinkItem href={instagramUrl} icon={<FaInstagram size={24} />} text='Instagram' />
            <LinkItem href={xUrl} icon={<FaXTwitter size={24} />} text='X' />
        </div>
    )
}

interface LinkItemProps {
    href: string
    text: string
    icon: ReactNode
}

const LinkItem: FC<LinkItemProps> = ({ href, text, icon }) => {
    return (
        <div className='flex gap-2'>
            <div>{icon}</div>
            <div
                className='min-w-0' // 参考： https://qiita.com/mpyw/items/dfc63c1fed5dfc5eda26
            >
                <h3 className='mb-2 text-lg'>{text}</h3>
                <NextLink className='break-words' href={href}>
                    {href}
                </NextLink>
            </div>
        </div>
    )
}
