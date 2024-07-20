import Link from 'next/link'
import { ComponentProps, FC } from 'react'

import hostname from '@/constants/hostname'

export interface NextLinkProps extends ComponentProps<typeof Link> {}

export const NextLink: FC<NextLinkProps> = ({ ...props }) => {
    const isExternal = (() => {
        let href = ''
        if (typeof props.href !== 'string') {
            href = props.href.href || ''
        } else {
            href = props.href
        }
        return !href.startsWith('/') && !href.match(`https?://${hostname}`)
    })()
    return (
        <Link
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            {...props}
        />
    )
}
