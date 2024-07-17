import Image from 'next/image'
import { FC } from 'react'

import logo from '@/../../public/logo.png'
import logoRev from '@/../../public/logo_rev.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { AvatarProps } from '../../ui/avatar'

export interface LogoProps extends AvatarProps {
    /** 色反転 */
    reverse?: boolean
}

export const Logo: FC<LogoProps> = ({ reverse, ...props }) => {
    return (
        <Avatar {...props}>
            <AvatarImage asChild src={logo.src}>
                {reverse ? <Image src={logoRev} alt='logo' fill /> : <Image src={logo} alt='logo' fill />}
            </AvatarImage>
            <AvatarFallback>logo</AvatarFallback>
        </Avatar>
    )
}
