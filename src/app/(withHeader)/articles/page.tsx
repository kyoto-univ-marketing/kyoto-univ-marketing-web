import { Metadata } from 'next'

import { ArticlesPage } from '@/components/articles/ArticlesPage/ArticlesPage'

export const metadata: Metadata = {
    title: '活動記録',
}

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = Number(searchParams.page) || 1
    const tag = (searchParams.tag as string) || undefined

    return (
        <main>
            <ArticlesPage
                page={page - 1} // 0-indexed
                tag={tag}
            />
        </main>
    )
}
