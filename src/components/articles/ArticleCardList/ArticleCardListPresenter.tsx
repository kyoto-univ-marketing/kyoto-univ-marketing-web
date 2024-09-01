'use client'

import { FC, useEffect } from 'react'

import { useActivityCardContext } from '../ActivityArticleList/ActivityArticleListPresenter'
import { ArticleCardProps, ArticleCard } from '../ArticleCard/ArticleCard'

export interface ArticleCardListPresenterProps {
    cardList: ArticleCardProps[]
    totalPage: number
}

export const ArticleCardListPresenter: FC<ArticleCardListPresenterProps> = ({ cardList, totalPage, ...props }) => {
    const { setTotalPage } = useActivityCardContext()
    useEffect(() => {
        setTotalPage(totalPage)
    }, [setTotalPage, totalPage])
    return (
        <div className='space-y-6' style={{ viewTransitionName: 'card-list' }}>
            {cardList.length ? (
                cardList.map((card) => {
                    return <ArticleCard key={card.id} {...card} />
                })
            ) : (
                <div className='flex h-20 w-full items-center justify-center'>
                    <p>記事がまだ存在しません</p>
                </div>
            )}
        </div>
    )
}
