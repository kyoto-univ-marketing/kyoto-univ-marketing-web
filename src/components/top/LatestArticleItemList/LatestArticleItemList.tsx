import { FC } from 'react'

import { getLatestActivityList } from '@/lib/microcms'

import { LatestArticle, LatestArticleItem } from '../LatestArticleItem/LatestArticleItem'

export interface LatestArticleItemListProps {}

/**
 * トップページの新着のお知らせ（4件）。
 *
 * サーバー側で microCMS から読む。以前はブラウザから /api/article/latest を
 * 呼んでいたが、トップページを最初の HTML から描くようにした（2026-11-10）ため、
 * サーバー側でも動く形にした。記事の題名が最初の HTML に入るので、検索にも載りやすい。
 */
export const LatestArticleItemList: FC<LatestArticleItemListProps> = async () => {
    const data = await getLatestActivityList(4)
    const articleList: LatestArticle[] = data.contents
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
