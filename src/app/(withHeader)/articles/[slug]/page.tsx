import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById, getActivityIds } from '@/lib/microcms'

interface Params {
    slug: string
}

const getActivity = cache(async (slug: string) => getActivityById(slug))

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}
export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
    const { slug } = params
    const { title, description, thumbnail } = await getActivity(slug).catch(notFound)
    return {
        title,
        description,
        openGraph: {
            images: [{ ...thumbnail, alt: title }],
        },
        twitter: {
            images: [{ ...thumbnail, alt: title }],
        },
    }
}

export default async function Page({ params }: { params: Params }) {
    const { slug } = params
    const content = await getActivity(slug).catch(notFound)
    return (
        <>
            <ArticleDetailsPage {...content} />
        </>
    )
}
