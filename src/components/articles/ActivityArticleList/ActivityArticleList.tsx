import { FC, Suspense } from 'react'
import { z } from 'zod'

import { ArticleCardSkeleton } from '@/components/ArticleCardSkeleton/ArticleCardSkeleton'

import { ActivityArticleListPresenter } from './ActivityArticleListPresenter'
import { ArticleCardList } from '../ArticleCardList/ArticleCardList'

export interface ActivityArticleListProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const searchParamsSchema = z.object({
    page: z.coerce
        .number()
        .default(1)
        .transform((v) => v - 1 /* 1-indexed to 0-indexed */),
    tag: z.string().optional(),
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
