import { Metadata } from 'next'

import { ArticlesPage } from '@/components/articles/ArticlesPage/ArticlesPage'
import { ARTICLES_PAGE_DESCRIPTION } from '@/constants/description'

/**
 * Django の activity_description は使っていない。
 * 「サークルの外部の方々と…」という古い言い回しで、記事一覧の前置きとしても不要だった。
 */
export const generateMetadata = async (): Promise<Metadata> => ({
    title: 'お知らせ',
    description: ARTICLES_PAGE_DESCRIPTION,
    alternates: { canonical: '/articles' },
})

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main>
            <ArticlesPage searchParams={searchParams} />
        </main>
    )
}
