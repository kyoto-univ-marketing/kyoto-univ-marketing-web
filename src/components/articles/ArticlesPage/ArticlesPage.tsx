import { FC, Suspense } from 'react'

import { ArticleCardSkeleton } from '@/components/ArticleCardSkeleton/ArticleCardSkeleton'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import ActivityArticleList from '../ActivityArticleList/ActivityArticleList'

export const dynamic = 'force-dynamic'

export interface ArticlesPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    activityDescription: string
}

export const ArticlesPage: FC<ArticlesPageProps> = async ({ searchParams, activityDescription, ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.ARCHIVE.text, href: pageLinkObject.ARCHIVE.href },
                ]}
            />
            <PageTitle>{pageLinkObject.ARCHIVE.text}</PageTitle>
            <div className='mx-auto max-w-(--breakpoint-sm) px-4 pb-12'>
                <div className='mb-12 space-y-4 px-4'>
                    {activityDescription.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
                <Suspense fallback={<ArticleCardSkeleton />}>
                    <ActivityArticleList searchParams={searchParams} />
                </Suspense>
            </div>
        </>
    )
}
