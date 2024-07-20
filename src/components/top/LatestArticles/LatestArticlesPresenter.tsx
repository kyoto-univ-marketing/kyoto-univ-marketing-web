import { FC } from 'react'

import { PageTitle } from '@/components/common/PageTitle/PageTitle'

import { NextLink } from '../../common/NextLink/NextLink'
import { Button } from '../../ui/button'
import { LatestArticle, LatestArticleItem } from '../LatestArticleItem/LatestArticleItem'

export interface LatestArticlesPresenterProps {
    articleList: LatestArticle[]
}

/** 新着記事の表示を行うコンポーネント。取得は`LatestArticles`を用いる */
export const LatestArticlesPresenter: FC<LatestArticlesPresenterProps> = ({ articleList, ...props }) => {
    return (
        <div>
            <PageTitle>新着記事</PageTitle>
            <table className='mb-12 table-auto border-separate border-spacing-y-3 px-16'>
                <tbody>
                    {articleList.map((article) => (
                        <LatestArticleItem key={article.id} {...article} />
                    ))}
                </tbody>
            </table>
            <div className='mx-auto w-fit'>
                <Button className='max-w-full px-12 py-6' asChild>
                    <NextLink href='/articles'>活動記録を見る</NextLink>
                </Button>
            </div>
        </div>
    )
}
