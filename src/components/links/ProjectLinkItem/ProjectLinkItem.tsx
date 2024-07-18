import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'

export interface ProjectLink {
    label?: string
    href: string
}

export interface ProjectLinkItemProps {
    projectName: string
    links: ProjectLink[]
}

/** プロジェクトごとのリンク集 */
export const ProjectLinkItem: FC<ProjectLinkItemProps> = ({ projectName, links, ...props }) => {
    return (
        <div>
            <h3 className='mb-2 text-lg'>{projectName}</h3>
            <ul className='space-y-1 px-1'>
                {links.map((link) => (
                    <li key={link.href}>
                        <NextLink href={link.href} className='hover:underline'>
                            {link.label || link.href}
                        </NextLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
