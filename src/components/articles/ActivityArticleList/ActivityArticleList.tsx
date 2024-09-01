import { FC, Suspense } from 'react'


import { ArticleCardSkeleton } from '@/components/ArticleCardSkeleton/ArticleCardSkeleton'

import { ActivityArticleListPresenter } from './ActivityArticleListPresenter'
import { ArticleCardList } from '../ArticleCardList/ArticleCardList'

export interface ActivityArticleListProps {
    /** ページ数 0-indexedで入力されることを想定 */
    page: number
    tag?: string
}

/** 活動記録記事の取得を行うコンポーネント */
const ActivityArticleList: FC<ActivityArticleListProps> = async ({ page, tag, ...props }) => {
    return (
        <ActivityArticleListPresenter
            articleCardList={
                <Suspense fallback={<ArticleCardSkeleton />}>
                    <ArticleCardList page={page} tag={tag} />
                </Suspense>
            }
            page={page}
            tag={tag}
        />
    )
}

export default ActivityArticleList
