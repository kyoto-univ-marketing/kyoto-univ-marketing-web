import { ArticleDetailsPage } from '@/components/article-details/ArticleDetailsPage/ArticleDetailsPage'
import { getActivityById, getActivityIds } from '@/lib/microcms'

export const generateStaticParams = async () => {
    const allContentIds = await getActivityIds()
    return allContentIds.map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const content = await getActivityById(slug)
    return (
        <>
            <ArticleDetailsPage {...content} />
        </>
    )
}
