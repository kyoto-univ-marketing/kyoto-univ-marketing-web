import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById, getActivityIds } from '@/lib/microcms'

export const dynamic = 'force-dynamic'
export const revalidate = 1

interface SearchParams {
    slug: string
    draftKey: string
}

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}
export const generateMetadata = async ({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> => {
    const { slug, draftKey } = searchParams
    const { title, description, thumbnail } = await getActivityById(slug, draftKey).catch(notFound)
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

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
    const { slug, draftKey } = searchParams
    const content = await getActivityById(slug, draftKey).catch(notFound)
    return (
        <>
            <ArticleDetailsPage {...content} />
        </>
    )
}
