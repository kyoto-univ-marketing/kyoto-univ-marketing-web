import { FC } from 'react'

import { components } from '@/api/schema'
import { projectTagList } from '@/constants/project'

import { ProjectListItem } from '../ProjectListItem/ProjectListItem'

export interface ProjectListProps {
    tag: (typeof projectTagList)[number]
    projects: Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'>[]
}

/** タグごとのプロジェクト一覧 */
export const ProjectList: FC<ProjectListProps> = ({ tag, projects, ...props }) => {
    return (
        <div>
            <h2 className='p-8 text-heading font-bold' id={tag}>
                {tag}
            </h2>
            <div className='space-y-16'>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <ProjectListItem key={project.name} reverse={Boolean(index % 2)} {...project} />
                    ))
                ) : (
                    <div className='px-12'>Comming Soon...</div>
                )}
            </div>
        </div>
    )
}
