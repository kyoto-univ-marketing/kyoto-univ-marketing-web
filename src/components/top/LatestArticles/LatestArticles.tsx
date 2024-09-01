import { FC } from 'react'
import { Suspense } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'

import { NextLink } from '../../common/NextLink/NextLink'
import { Button } from '../../ui/button'
import { LatestArticleItemList } from '../LatestArticleItemList/LatestArticleItemList'
import { LatestArticlesSkeleton } from '../LatestArticlesSkeleton/LatestArticlesSkeleton'

export interface LatestArticlesProps {}

/** 主に新着記事の取得を行うコンポーネント */
export const LatestArticles: FC<LatestArticlesProps> = async ({ ...props }) => {
    return (
        <div>
            <PageTitle asChild>
                <h2>新着記事</h2>
            </PageTitle>
            <Suspense fallback={<LatestArticlesSkeleton />}>
                <LatestArticleItemList />
            </Suspense>
            <div className='mx-auto w-fit'>
                <Button asChild className='max-w-full px-12 py-6'>
                    <NextLink href='/articles'>活動記録を見る</NextLink>
                </Button>
            </div>
        </div>
    )
}
