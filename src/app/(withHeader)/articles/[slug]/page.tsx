import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById, getActivityIds } from '@/lib/microcms'

interface Params {
    slug: string
}

interface SearchParams {
    draftKey?: string
}

const getActivity = cache(async (slug: string, draftKey?: string) => getActivityById(slug, draftKey))

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}
export const generateMetadata = async ({
    params,
    searchParams,
}: {
    params: Params
    searchParams: SearchParams
}): Promise<Metadata> => {
    const { slug } = params
    const { draftKey } = searchParams
    const { title, description, thumbnail } = await getActivity(slug, draftKey).catch(notFound)
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

export default async function Page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
    const { slug } = params
    const { draftKey } = searchParams
    const content = await getActivity(slug, draftKey).catch(notFound)
    return (
        <>
            <ArticleDetailsPage {...content} />
        </>
    )
}
