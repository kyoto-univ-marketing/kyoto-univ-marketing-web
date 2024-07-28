import { FC } from 'react'

import { client } from '@/api/client'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { OfficialAccountLinks } from '../OfficialAccountLinks/OfficialAccountLinks'
import { ProjectLinkItemProps } from '../ProjectLinkItem/ProjectLinkItem'
import { ProjectLinkList } from '../ProjectLinkList/ProjectLinkList'

export interface LinksPageProps {}

export const LinksPage: FC<LinksPageProps> = async ({ ...props }) => {
    const { data } = await client.GET('/api/project/')
    const projectLinks = (data ?? []).reduce((acc, project) => {
        acc.push({
            projectName: project.name,
            links: project.links.map((link) => ({
                label: link.title ?? undefined,
                href: link.url,
            })),
        })
        return acc
    }, [] as ProjectLinkItemProps[])
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.LINKS.text, href: pageLinkObject.LINKS.href },
                ]}
            />
            <PageTitle>{pageLinkObject.LINKS.text}</PageTitle>
            <div className='mb-12 px-6'>
                <h2 className='mb-6 text-heading'>公式アカウント</h2>
                <OfficialAccountLinks className='px-4' />
            </div>
            <div className='mb-12 px-6'>
                <h2 className='mb-6 text-heading'>プロジェクト関連</h2>
                <ProjectLinkList className='px-4' projects={projectLinks} />
            </div>
        </>
    )
}
