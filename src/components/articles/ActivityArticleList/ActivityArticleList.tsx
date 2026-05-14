import { FC, Suspense } from 'react'
import { z } from 'zod'

import { ArticleCardSkeleton } from '@/components/ArticleCardSkeleton/ArticleCardSkeleton'
import { activityTagList } from '@/constants/activity'

import { ArticleCardList } from '../ArticleCardList/ArticleCardList'
import { ActivityArticleListPresenter } from './ActivityArticleListPresenter'

export interface ActivityArticleListProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const searchParamsSchema = z.object({
    page: z.coerce
        .number()
        .default(1)
        .transform((v) => Math.max(1, v) - 1 /* 1-indexed to 0-indexed、最小値は0 */),
    tag: z.enum(activityTagList).optional().catch(undefined),
})

/** 活動記録記事の取得を行うコンポーネント */
const ActivityArticleList: FC<ActivityArticleListProps> = async ({ searchParams, ...props }) => {
    const sp = await searchParams
    const { page, tag } = searchParamsSchema.parse(sp)
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
