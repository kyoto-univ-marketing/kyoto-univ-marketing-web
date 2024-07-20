import { ComponentProps, FC } from 'react'

import { cn } from '@/lib/utils'

import { ProjectLinkItem, ProjectLinkItemProps } from '../ProjectLinkItem/ProjectLinkItem'

export interface ProjectLinkListProps extends Omit<ComponentProps<'ul'>, 'children'> {
    projects: ProjectLinkItemProps[]
}

/* プロジェクトリンクのリスト */
export const ProjectLinkList: FC<ProjectLinkListProps> = ({ className, projects, ...props }) => {
    return (
        <ul {...props} className={cn('divide-y-2', className)}>
            {projects.map((project) => (
                <li className='py-8 first:pt-0 last:pb-0' key={project.projectName}>
                    <ProjectLinkItem {...project} />
                </li>
            ))}
        </ul>
    )
}
