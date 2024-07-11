import Image from 'next/image'
import { FC } from 'react'

import logo from '@/../public/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { AvatarProps } from '../ui/avatar'

export interface LogoProps extends AvatarProps {}

export const Logo: FC<LogoProps> = ({ ...props }) => {
    return (
        <Avatar {...props}>
            <AvatarImage asChild src={logo.src}>
                <Image src={logo} alt='logo' fill />
            </AvatarImage>
            <AvatarFallback>logo</AvatarFallback>
        </Avatar>
    )
}
