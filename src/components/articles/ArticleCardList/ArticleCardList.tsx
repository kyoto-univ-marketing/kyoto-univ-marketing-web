import { FC } from 'react'

import { ArticleCard, ArticleCardProps } from '../ArticleCard/ArticleCard'

export interface ArticleCardListProps {
    cardList: ArticleCardProps[]
}

export const ArticleCardList: FC<ArticleCardListProps> = ({ cardList, ...props }) => {
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
