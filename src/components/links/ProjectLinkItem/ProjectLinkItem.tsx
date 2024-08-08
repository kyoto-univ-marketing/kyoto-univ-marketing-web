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
            <h3 className='mb-3 text-lg'>{projectName}</h3>
            <ul className='space-y-2 px-1'>
                {links.map((link) => (
                    <li
                        className='flex before:mr-2 before:inline-block before:content-["\2022"]' // unicodeの参考： https://www.compart.com/en/unicode/U+2022
                        key={link.href}
                    >
                        <NextLink
                            className='min-w-0 break-words underline underline-offset-2 sm:no-underline sm:hover:underline'
                            href={link.href}
                        >
                            {link.label || link.href}
                        </NextLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
