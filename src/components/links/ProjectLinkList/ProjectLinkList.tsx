import { FC } from 'react'

import { ProjectLinkItem, ProjectLinkItemProps } from '../ProjectLinkItem/ProjectLinkItem'

export interface ProjectLinkListProps {
    projects: ProjectLinkItemProps[]
}

/* プロジェクトリンクのリスト */
export const ProjectLinkList: FC<ProjectLinkListProps> = ({ projects, ...props }) => {
    return (
        <ul className='divide-y-2'>
            {projects.map((project) => (
                <li className='py-4' key={project.projectName}>
                    <ProjectLinkItem {...project} />
                </li>
            ))}
        </ul>
    )
}
