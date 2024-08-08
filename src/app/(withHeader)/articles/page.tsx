import { Metadata } from 'next'
import { cache } from 'react'

import { client } from '@/api/client'
import { ArticlesPage } from '@/components/articles/ArticlesPage/ArticlesPage'

let description: string = ''

const getDescription = cache(async () => {
    if (description) return description
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id: 'activity_description' } } })
    description = data?.text ?? ''
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
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = Number(searchParams.page) || 1
    const tag = (searchParams.tag as string) || undefined
    const description = await getDescription()

    return (
        <main>
            <ArticlesPage
                activityDescription={description}
                page={page - 1} // 0-indexed
                tag={tag}
            />
        </main>
    )
}
