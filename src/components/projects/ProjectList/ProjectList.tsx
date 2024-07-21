import { FC } from 'react'

import { projectTagList } from '@/constants/project'
import { Project } from '@/lib/microcms'

import { ProjectListItem } from '../ProjectListItem/ProjectListItem'

export interface ProjectListProps {
    tag: (typeof projectTagList)[number]
    projects: Pick<Project, 'name' | 'description' | 'thumbnail'>[]
}

/** タグごとのプロジェクト一覧 */
export const ProjectList: FC<ProjectListProps> = ({ tag, projects, ...props }) => {
    return (
        <div>
            <h2 id={tag} className='p-8 text-heading font-bold'>
                {tag}
            </h2>
            <div className='space-y-16'>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <ProjectListItem reverse={Boolean(index % 2)} key={project.name} {...project} />
                    ))
                ) : (
                    <div className='px-12'>Comming Soon...</div>
                )}
            </div>
        </div>
    )
}
