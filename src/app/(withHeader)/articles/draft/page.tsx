import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById } from '@/lib/microcms'

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

/*
 * generateStaticParams は置いていない。
 * この経路は /articles/draft?slug=... で、URL に動的な区切りが無いため効かず、
 * ビルドのたびに microCMS を呼ぶだけになっていた。
 */
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
        // 未公開記事のプレビュー。draftKey を知っている人だけの画面なので検索には載せない
        robots: { index: false, follow: false },
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
