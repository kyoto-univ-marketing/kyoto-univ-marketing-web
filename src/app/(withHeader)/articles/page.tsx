import { ActivityArticleList } from '@/components/ActivityArticleList/ActivityArticleList'
import { getActivityList } from '@/lib/microcms'

const limit = 10

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = Number(searchParams.page) || 1
    const tag = (searchParams.tag as string) || undefined
    const activities = await getActivityList({ limit, offset: (page - 1) * limit, tag })
    return (
        <main>
            <ActivityArticleList
                activityArticleList={activities.contents.map((item) => ({
                    slug: item.id,
                    title: item.title,
                    description: item.description,
                    image: item.thumbnail.url,
                    tag: item.tag[0],
                    date: new Date(item.publishedAt),
                }))}
                page={page - 1} // 0-indexed
                totalPage={Math.ceil(activities.totalCount / limit)} // TODO
                tag={tag}
            />
        </main>
    )
}
