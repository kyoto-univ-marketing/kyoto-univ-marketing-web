import { client } from '@/api/client'

import { ProjectLinkItemProps } from '../ProjectLinkItem/ProjectLinkItem'
import { ProjectLinkListPresenter, ProjectLinkListPresenterProps } from './ProjectLinkListPresenter'

export interface ProjectLinkListProps extends Omit<ProjectLinkListPresenterProps, 'projects'> {}

export const ProjectLinkList = async (props: ProjectLinkListProps) => {
    const { data } = await client.GET('/api/project/')
    const projectLinks = (data ?? []).reduce((acc, project) => {
        if (project.links.length === 0) {
            return acc
        }
        acc.push({
            projectName: project.name,
            links: project.links.map((link) => ({
                label: link.title ?? undefined,
                href: link.url,
            })),
        })
        return acc
    }, [] as ProjectLinkItemProps[])
    return <ProjectLinkListPresenter {...props} projects={projectLinks} />
}
