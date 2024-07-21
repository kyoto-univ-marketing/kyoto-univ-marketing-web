'use client' // 新しい記事かどうかを判定するためにクライアント側で日付を比較する

import dayjs from 'dayjs'
import { FC } from 'react'

import { NextLink } from '@/components/common/NextLink/NextLink'
import { Badge } from '@/components/ui/badge'

export interface LatestArticle {
    title: string
    publishedAt: string
    id: string
}

export interface LatestArticleItemProps extends LatestArticle {}

export const LatestArticleItem: FC<LatestArticleItemProps> = ({ title, publishedAt, id, ...props }) => {
    const publishedDate = dayjs(publishedAt)
    const isNew = publishedDate.isAfter(dayjs().subtract(1, 'week'))
    return (
        <tr>
            <td className='pr-8 align-top'>{publishedDate.format('YYYY/MM/DD')}</td>
            <td className='whitespace-pre-wrap'>
                <NextLink href={`/articles/${id}`}>
                    <span className='inline-block'>{title}</span>
                    {isNew && <Badge className='ml-2 border-none text-xs'>New</Badge>}
                </NextLink>
            </td>
        </tr>
    )
}
