import { Metadata } from 'next'

import { ActivityArticleList } from '@/components/ActivityArticleList/ActivityArticleList'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { getActivityList } from '@/lib/microcms'

export const metadata: Metadata = {
    title: '活動記録',
}

const LIMIT = 10

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = Number(searchParams.page) || 1
    const tag = (searchParams.tag as string) || undefined
    const activities = await getActivityList({ limit: LIMIT, offset: (page - 1) * LIMIT, tag })
    return (
        <main className='px-4 pb-12'>
            <div className='py-4'>
                <BreadCrumb items={[{ label: 'ホーム', href: '/' }, { label: '活動記録' }]} />
            </div>
            <h1 className='my-12 text-center text-xl font-bold'>活動記録</h1>
            <div className='mb-12 space-y-4 px-4'>
                <p>京大マーケティング研究所の部員の普段の活動を記録していきます。</p>
                <p>
                    定期的に開催している勉強会に加え、サークルの外部の方々と連携しながらイベントなどの様々な活動を行っています。
                </p>
            </div>
            <ActivityArticleList
                activityArticleList={activities.contents}
                page={page - 1} // 0-indexed
                totalPage={Math.ceil(activities.totalCount / LIMIT)}
                tag={tag}
            />
        </main>
    )
}
