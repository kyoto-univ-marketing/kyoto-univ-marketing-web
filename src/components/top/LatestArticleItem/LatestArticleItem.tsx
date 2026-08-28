'use client' // 新しい記事かどうかを判定するためにクライアント側で日付を比較する

import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { Badge } from '@/components/ui/badge'
import { formatArticleDate, isRecentArticle } from '@/lib/articleDate'

export interface LatestArticle {
    title: string
    date: string
    id: string
}

export interface LatestArticleItemProps extends LatestArticle {}

export const LatestArticleItem: FC<LatestArticleItemProps> = ({ title, date, id, ...props }) => {
    const isNew = isRecentArticle(date)
    return (
        <tr>
            <td className='pr-8 align-top font-en tracking-widest'>{formatArticleDate(date)}</td>
            <td className='whitespace-pre-wrap'>
                <NextLink href={`/articles/${id}`}>
                    <span className='inline-block'>{title}</span>
                    {isNew && (
                        <Badge className='ml-2 border-none bg-brand-accent text-xs hover:bg-brand-accent'>New</Badge>
                    )}
                </NextLink>
            </td>
        </tr>
    )
}
