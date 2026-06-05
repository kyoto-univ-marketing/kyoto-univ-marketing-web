import { FC } from 'react'

import { components } from '@/api/schema'

import { ProjectListItem } from '../ProjectListItem/ProjectListItem'

export interface ProjectListProps {
    /** 見出し。アンカーの id も兼ねる */
    heading: string
    /** 見出し下に表示する補足説明 */
    description?: string
    projects: Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'>[]
}

/** 見出しごとのプロジェクト一覧 */
export const ProjectList: FC<ProjectListProps> = ({ heading, description, projects }) => {
    return (
        <div>
            <h2 className='px-8 pt-8 pb-2 font-bold text-heading' id={heading}>
                {heading}
            </h2>
            {description ? (
                <p className='px-8 pb-6 text-gray-600 text-sm'>{description}</p>
            ) : (
                <div className='pb-6' />
            )}
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
