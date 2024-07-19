import { FC, ReactNode } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

import { NextLink } from '@/components/common/NextLink/NextLink'
import profile from '@/constants/profile'

export interface OfficialAccountLinksProps {}

/* 公式アカウントのリンク集 */
export const OfficialAccountLinks: FC<OfficialAccountLinksProps> = ({ ...props }) => {
    return (
        <div className='space-y-12'>
            <LinkItem href={profile.instagramUrl} text='Instagram' icon={<FaInstagram size={24} />} />
            <LinkItem href={profile.xUrl} text='X' icon={<FaXTwitter size={24} />} />
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
            <div>
                <h3 className='mb-2 text-lg'>{text}</h3>
                <NextLink href={href}>{href}</NextLink>
            </div>
        </div>
    )
}
