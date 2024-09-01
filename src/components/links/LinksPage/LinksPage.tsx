import { FC, Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

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
                <Suspense
                    fallback={
                        <div className='flex h-24 w-full items-center justify-center p-8'>
                            <FaSpinner className='h-8 w-8 animate-spin' />
                        </div>
                    }
                >
                    <ProjectLinkList className='px-4' />
                </Suspense>
            </div>
        </>
    )
}
