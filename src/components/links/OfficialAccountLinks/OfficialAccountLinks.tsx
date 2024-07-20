import { unstable_noStore as noStore } from 'next/cache'
import { ComponentProps, FC, ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaXTwitter } from 'react-icons/fa6'

import { NextLink } from '@/components/common/NextLink/NextLink'
import profile from '@/constants/profile'
import { cn } from '@/lib/utils'

export interface OfficialAccountLinksProps extends Omit<ComponentProps<'div'>, 'children'> {}

/* 公式アカウントのリンク集 */
export const OfficialAccountLinks: FC<OfficialAccountLinksProps> = ({ className, ...props }) => {
    noStore()
    const isTwitter = Math.random() < 0.1
    return (
        <div {...props} className={cn('space-y-12', className)}>
            <LinkItem href={profile.instagramUrl} text='Instagram' icon={<FaInstagram size={24} />} />
            <LinkItem
                className={cn(!isTwitter && 'hidden')}
                href={profile.twitterUrl}
                text='Twitter'
                icon={<FaTwitter size={24} />}
            />
            <LinkItem
                className={cn(isTwitter && 'hidden')}
                href={profile.xUrl}
                text='X'
                icon={<FaXTwitter size={24} />}
            />
        </div>
    )
}

interface LinkItemProps {
    href: string
    text: string
    icon: ReactNode
    className?: string
}

const LinkItem: FC<LinkItemProps> = ({ href, text, icon, className }) => {
    return (
        <div className={cn('flex gap-2', className)}>
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
