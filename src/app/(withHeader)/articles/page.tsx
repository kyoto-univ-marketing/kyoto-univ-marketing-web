import { Metadata } from 'next'

import { ArticlesPage } from '@/components/articles/ArticlesPage/ArticlesPage'
import { getTextById } from '@/lib/api'

export const generateMetadata = async (): Promise<Metadata> => ({
    title: '活動記録',
    description: await getTextById('activity_description'),
    alternates: { canonical: '/articles' },
})

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const description = await getTextById('activity_description')
    return (
        <main>
            <ArticlesPage activityDescription={description} searchParams={searchParams} />
        </main>
    )
}
