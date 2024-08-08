import { FC } from 'react'

import { getActivityList } from '@/lib/microcms'

import { ActivityArticleListPresenter } from './ActivityArticleListPresenter'

export interface ActivityArticleListProps {
    /** ページ数 0-indexedで入力されることを想定 */
    page: number
    tag?: string
}

const LIMIT = 10

/** 活動記録記事の取得を行うコンポーネント */
const ActivityArticleList: FC<ActivityArticleListProps> = async ({ page, tag, ...props }) => {
    const activities = await getActivityList({ limit: LIMIT, offset: page * LIMIT, tag })
    return (
        <ActivityArticleListPresenter
            activityArticleList={activities.contents}
            page={page}
            tag={tag}
            totalPage={Math.ceil(activities.totalCount / LIMIT)}
        />
    )
}

export default ActivityArticleList
