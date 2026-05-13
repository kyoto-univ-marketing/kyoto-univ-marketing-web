import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Article, WithContext } from 'schema-dts'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { JsonLD } from '@/components/common/JsonLD/JsonLD'
import { buildOrganizationJson } from '@/components/common/JsonLD/OrganizationJsonLD'
import { getActivityById, getActivityIds, getSiteSettings } from '@/lib/microcms'

interface Params {
    slug: string
}

const getActivity = (async (slug: string) => {
    'use cache'
    return getActivityById(slug)
})

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}
export const generateMetadata = async ({ params }: { params: Promise<Params> }): Promise<Metadata> => {
    const { slug } = await params
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

export default async function Page({ params }: { params: Promise<Params> }) {
    const { slug } = await params
    const [content, siteSettings] = await Promise.all([
        getActivity(slug).catch(notFound),
        getSiteSettings(),
    ])
    const organizationJson = buildOrganizationJson(siteSettings)
    const json = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: content.title,
        image: content.thumbnail.url,
        datePublished: content.publishedAt,
        dateModified: content.updatedAt,
        description: content.description,
        author: [organizationJson],
        publisher: organizationJson,
    } as WithContext<Article>
    return (
        <>
            <ArticleDetailsPage {...content} />
            <JsonLD id='article-json-ld' json={json} />
        </>
    )
}
