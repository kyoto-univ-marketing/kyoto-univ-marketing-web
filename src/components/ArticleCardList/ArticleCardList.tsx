import { FC } from 'react'

import { ArticleCard, ArticleCardProps } from '../ArticleCard/ArticleCard'

export interface ArticleCardListProps {
    cardList: ArticleCardProps[]
}

export const ArticleCardList: FC<ArticleCardListProps> = ({ cardList, ...props }) => {
    return (
        <div className='space-y-6'>
            {cardList.map((card) => {
                return <ArticleCard key={card.slug} {...card} />
            })}
        </div>
    )
}
