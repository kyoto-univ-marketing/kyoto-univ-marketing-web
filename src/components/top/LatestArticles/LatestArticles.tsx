import { FC } from 'react'

import { LatestArticle, LatestArticlesPresenter } from './LatestArticlesPresenter'

export interface LatestArticlesProps {}

/** 主に新着記事の取得を行うコンポーネント */
export const LatestArticles: FC<LatestArticlesProps> = ({ ...props }) => {
    const articleList: LatestArticle[] = [] // TODO: 最新記事の取得処理を実装する
    return <LatestArticlesPresenter articleList={articleList} />
}
