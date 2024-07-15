import { FC } from 'react'

import { NextLink } from '../../common/NextLink/NextLink'
import { Button } from '../../ui/button'

export interface LatestArticle {
    title: string
    date: string
    slug: string
}

export interface LatestArticlesPresenterProps {
    articleList: LatestArticle[]
}

/** 新着記事の表示を行うコンポーネント。取得は`LatestArticles`を用いる */
export const LatestArticlesPresenter: FC<LatestArticlesPresenterProps> = ({ articleList, ...props }) => {
    return (
        <div className='space-y-6 p-4'>
            {/* TODO: コンポーネントを分離する */}
            <h2 className='text-2xl'>新着記事</h2>
            <table className='table-auto border-separate border-spacing-x-2 border-spacing-y-3'>
                <tbody>
                    {articleList.map((article) => (
                        <tr key={article.slug}>
                            <td className='align-top'>{article.date}</td>
                            <td className='whitespace-pre-wrap'>
                                <NextLink href={`/articles/${article.slug}`}>{article.title}</NextLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='mx-auto w-fit'>
                <Button asChild>
                    <NextLink href='/articles'>活動記録を見る</NextLink>
                </Button>
            </div>
        </div>
    )
}
