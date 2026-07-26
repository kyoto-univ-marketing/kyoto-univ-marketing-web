import Image from 'next/image'
import { FC } from 'react'

import logo from '@/../public/logo.png'
import logoRev from '@/../public/logo_rev.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { AvatarProps } from '../../ui/avatar'

export interface LogoProps extends AvatarProps {
    /** 色反転 */
    reverse?: boolean
    /** 表示サイズ。実際の表示幅に合わせると無駄な大きさの画像を読み込まずに済む */
    sizes?: string
}

export const Logo: FC<LogoProps> = ({ reverse, sizes = '80px', ...props }) => {
    const lg = reverse ? logoRev : logo
    return (
        <Avatar {...props}>
            <AvatarImage asChild src={lg.src}>
                <Image alt='logo' fill priority sizes={sizes} src={lg} />
            </AvatarImage>
            <AvatarFallback />
        </Avatar>
    )
}
