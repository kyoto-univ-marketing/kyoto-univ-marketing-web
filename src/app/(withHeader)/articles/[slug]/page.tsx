import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById, getActivityIds } from '@/lib/microcms'

interface Params {
    slug: string
}

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}
export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
    const { slug } = params
    const { title, description } = await getActivityById(slug).catch(notFound) // TODO: キャッシュが効かないので対策する
    return {
        title,
        description,
    }
}

export default async function Page({ params }: { params: Params }) {
    const { slug } = params
    const content = await getActivityById(slug).catch(notFound)
    return (
        <>
            <ArticleDetailsPage {...content} />
        </>
    )
}
