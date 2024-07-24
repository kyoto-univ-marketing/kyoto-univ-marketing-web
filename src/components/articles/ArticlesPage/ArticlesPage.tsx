import { FC, Suspense } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import ActivityArticleList from '../ActivityArticleList/ActivityArticleList'

export const dynamic = 'force-dynamic'

export interface ArticlesPageProps {
    page: number
    tag: string | undefined
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ page, tag, ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.ARCHIVE.text, href: pageLinkObject.ARCHIVE.href },
                ]}
            />
            <PageTitle>{pageLinkObject.ARCHIVE.text}</PageTitle>
            <div className='px-4 pb-12'>
                <div className='mb-12 space-y-4 px-4'>
                    <p>京大マーケティング研究所の部員の普段の活動を記録していきます。</p>
                    <p>
                        定期的に開催している勉強会に加え、サークルの外部の方々と連携しながらイベントなどの様々な活動を行っています。
                    </p>
                </div>
                <Suspense
                    fallback={<>loading</>} // TODO
                >
                    <ActivityArticleList page={page} tag={tag} />
                </Suspense>
            </div>
        </>
    )
}
