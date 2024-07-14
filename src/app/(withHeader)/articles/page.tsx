import { ActivityArticleList } from '@/components/ActivityArticleList/ActivityArticleList'
import { getActivityList } from '@/lib/microcms'

export default async function Page() {
    const activities = await getActivityList()
    return (
        <>
            <ActivityArticleList />
        </>
    )
}
