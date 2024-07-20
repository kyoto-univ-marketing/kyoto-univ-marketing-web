import { FC } from 'react'

import { getLatestActivityList } from '@/lib/microcms'

import { LatestArticlesPresenter } from './LatestArticlesPresenter'
import { LatestArticle } from '../LatestArticleItem/LatestArticleItem'

export interface LatestArticlesProps {}

/** 主に新着記事の取得を行うコンポーネント */
export const LatestArticles: FC<LatestArticlesProps> = async ({ ...props }) => {
    const articleList: LatestArticle[] = (await getLatestActivityList(4)).contents
    return <LatestArticlesPresenter articleList={articleList} />
}
