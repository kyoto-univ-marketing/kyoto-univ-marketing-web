import { ArticleCardList } from '@/components/ArticleCardList/ArticleCardList'
import { getActivityList } from '@/lib/microcms'

export default async function Page() {
    const activities = await getActivityList()
    return (
        <>
            <ArticleCardList
                cardList={activities.contents.map((activity) => {
                    return {
                        title: activity.title,
                        slug: activity.id,
                        date: new Date(activity.publishedAt),
                        image: activity.thumbnail.url,
                    }
                })}
            />
        </>
    )
}
