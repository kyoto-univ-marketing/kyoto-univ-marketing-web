import { FC, Suspense } from 'react'

import { ArticleCardSkeleton } from '@/components/ArticleCardSkeleton/ArticleCardSkeleton'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { pageLinkObject } from '@/constants/pageLinks'

import ActivityArticleList from '../ActivityArticleList/ActivityArticleList'

export interface ArticlesPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

/**
 * お知らせの一覧。
 *
 * 前置きの文章は置かない。「お知らせ」という見出しで用は足りており、
 * 説明を挟むと記事が下に押し下げられて、新しい記事が見えなくなる。
 */
export const ArticlesPage: FC<ArticlesPageProps> = async ({ searchParams, ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.ARCHIVE.text, href: pageLinkObject.ARCHIVE.href },
                ]}
            />
            <PageTitle band en='News'>{pageLinkObject.ARCHIVE.text}</PageTitle>
            <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-16 md:px-8'>
                <Suspense fallback={<ArticleCardSkeleton />}>
                    <ActivityArticleList searchParams={searchParams} />
                </Suspense>
            </div>
        </>
    )
}
