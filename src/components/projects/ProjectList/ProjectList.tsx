import { FC } from 'react'

import { components } from '@/api/schema'

import { ProjectListItem } from '../ProjectListItem/ProjectListItem'

export interface ProjectListProps {
    /** 見出し。アンカーの id も兼ねる */
    heading: string
    /** 見出し下に表示する補足説明 */
    description?: string
    projects: (Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'> & {
        /** 終了したプロジェクト。灰色に落として「実績」の札を付ける */
        archived: boolean
    })[]
}

/**
 * 見出しごとのプロジェクト一覧。
 *
 * 該当がないタグは見出しごと出さない（以前は「Comming Soon...」と出していたが、
 * 空の区画が並ぶと活動が止まっているように見えるため）。
 */
export const ProjectList: FC<ProjectListProps> = ({ heading, description, projects }) => {
    if (projects.length === 0) {
        return null
    }

    return (
        <section>
            <h3 className='font-title text-heading' id={heading}>
                {heading}
            </h3>
            {description && <p className='mt-3 text-gray-600 text-sm'>{description}</p>}
            <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                {projects.map((project, index) => (
                    <ProjectListItem key={project.name} order={index} {...project} />
                ))}
            </div>
        </section>
    )
}
