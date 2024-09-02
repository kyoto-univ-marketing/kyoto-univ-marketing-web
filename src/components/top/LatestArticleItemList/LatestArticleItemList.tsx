import { FC } from 'react'

import { getLatestActivityList } from '@/lib/microcms'

import { LatestArticleItem } from '../LatestArticleItem/LatestArticleItem'
import { LatestArticle } from '../LatestArticleItem/LatestArticleItem'

export interface LatestArticleItemListProps {}

export const LatestArticleItemList: FC<LatestArticleItemListProps> = async ({ ...props }) => {
    const articleList: LatestArticle[] = (await getLatestActivityList(4)).contents
    return <LatestArticleItemListPresenter articleList={articleList} />
}

export interface LatestArticleItemListPresenterProps {
    articleList: LatestArticle[]
}

export const LatestArticleItemListPresenter: FC<LatestArticleItemListPresenterProps> = ({ articleList }) => {
    return (
        <table className='mb-12 table-auto border-separate border-spacing-y-3 px-12'>
            <tbody>
                {articleList.map((article) => (
                    <LatestArticleItem key={article.id} {...article} />
                ))}
            </tbody>
        </table>
    )
}
