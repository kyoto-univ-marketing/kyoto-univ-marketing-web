import { FC } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { OfficialAccountLinks } from '../OfficialAccountLinks/OfficialAccountLinks'
import { ProjectLinkList } from '../ProjectLinkList/ProjectLinkList'

export interface LinksPageProps {}

export const LinksPage: FC<LinksPageProps> = ({ ...props }) => {
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
                <ProjectLinkList className='px-4' />
            </div>
        </>
    )
}
