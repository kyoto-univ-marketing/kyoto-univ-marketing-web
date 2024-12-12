import { Metadata } from 'next'
import { cache } from 'react'

import { client } from '@/api/client'
import { ArticlesPage } from '@/components/articles/ArticlesPage/ArticlesPage'

const getDescription = cache(async () => {
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id: 'activity_description' } } })
    const description = data?.text ?? ''
    if (!description) {
        console.error("Couldn't get activity description text")
    }
    return description
})

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: '活動記録',
        description: await getDescription(),
    }
}

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const description = await getDescription()

    return (
        <main>
            <ArticlesPage activityDescription={description} searchParams={searchParams} />
        </main>
    )
}
