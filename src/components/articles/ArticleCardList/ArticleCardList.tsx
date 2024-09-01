import { FC } from 'react'

import { getActivityList } from '@/lib/microcms'

import { activityListFields } from '../ArticleCard/ArticleCard'
import { ArticleCardListPresenter } from '../ArticleCardListPresenter/ArticleCardListPresenter'

export interface ArticleCardListProps {
    /** ページ数 0-indexedで入力されることを想定 */
    page: number
    tag?: string
}

const LIMIT = 10

export const ArticleCardList: FC<ArticleCardListProps> = async ({ page, tag, ...props }) => {
    const activities = await getActivityList({ limit: LIMIT, offset: page * LIMIT, tag, fields: activityListFields })
    return (
        <ArticleCardListPresenter cardList={activities.contents} totalPage={Math.ceil(activities.totalCount / LIMIT)} />
    )
}
