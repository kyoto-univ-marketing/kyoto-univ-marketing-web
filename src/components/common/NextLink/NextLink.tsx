import Link from 'next/link'
import { ComponentProps, FC } from 'react'

import hostname from '@/constants/hostname'
import { cn } from '@/lib/utils'

export interface NextLinkProps extends ComponentProps<typeof Link> {}

export const NextLink: FC<NextLinkProps> = ({ className, ...props }) => {
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
            className={cn('underline underline-offset-2 hover:underline md:no-underline', className)}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            {...props}
        />
    )
}
