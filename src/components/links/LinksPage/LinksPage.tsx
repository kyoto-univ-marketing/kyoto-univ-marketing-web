import { FC } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import { OfficialAccountLinks } from '../OfficialAccountLinks/OfficialAccountLinks'

export interface LinksPageProps {}

export const LinksPage: FC<LinksPageProps> = ({ ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.LINKS.text },
                ]}
            />
            <PageTitle>{pageLinkObject.LINKS.text}</PageTitle>
            <div>
                <h2 className='mb-6 text-heading'>公式アカウント</h2>
                <OfficialAccountLinks />
            </div>
        </>
    )
}
