import { client } from '@/api/client'

import { ProjectLinkItemProps } from '../ProjectLinkItem/ProjectLinkItem'
import { ProjectLinkListPresenter, ProjectLinkListPresenterProps } from './ProjectLinkListPresenter'

export interface ProjectLinkListProps extends Omit<ProjectLinkListPresenterProps, 'projects'> {}

export const ProjectLinkList = async (props: ProjectLinkListProps) => {
    'use cache'
    const { data } = await client.GET('/api/project/')
    const projectLinks: ProjectLinkItemProps[] = (data ?? [])
        .filter((project) => project.links.length > 0)
        .map((project) => ({
            projectName: project.name,
            links: project.links.map((link) => ({
                label: link.title ?? undefined,
                href: link.url,
            })),
        }))
    return <ProjectLinkListPresenter {...props} projects={projectLinks} />
}
