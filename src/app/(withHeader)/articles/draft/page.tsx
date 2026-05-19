import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById, getActivityIds } from '@/lib/microcms'

interface SearchParams {
    slug: string
    draftKey: string
    secret?: string
}

const checkSecret = (secret?: string) => {
    if (process.env.DRAFT_ACCESS_SECRET && secret !== process.env.DRAFT_ACCESS_SECRET) {
        notFound()
    }
}

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}

export const generateMetadata = async ({
    searchParams,
}: {
    searchParams: Promise<SearchParams>
}): Promise<Metadata> => {
    const { slug, draftKey, secret } = await searchParams
    checkSecret(secret)
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

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const { slug, draftKey, secret } = await searchParams
    checkSecret(secret)
    const content = await getActivityById(slug, draftKey).catch(notFound)
    return <ArticleDetailsPage {...content} />
}
