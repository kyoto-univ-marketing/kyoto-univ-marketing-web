'use client'


import { useSuspenseQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { LatestArticle, LatestArticleItem } from '../LatestArticleItem/LatestArticleItem'

export interface LatestArticleItemListProps {}

export const LatestArticleItemList: FC<LatestArticleItemListProps> = ({ ...props }) => {
    const { data } = useSuspenseQuery({
        queryKey: ['articleList'],
        queryFn: async () => await fetch('/api/article/latest').then((res) => res.json()),
    })
    const articleList: LatestArticle[] = 'contents' in data ? data.contents : []
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
