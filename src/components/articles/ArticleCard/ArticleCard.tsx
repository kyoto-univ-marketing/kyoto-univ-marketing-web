import dayjs from 'dayjs'
import Image from 'next/image'
import { FC } from 'react'

import { Activity } from '@/lib/microcms'

import { NextLink } from '../../common/NextLink/NextLink'

export interface ArticleCardProps
    extends Pick<Activity, 'title' | 'id' | 'publishedAt' | 'thumbnail' | 'description'> {}

export const ArticleCard: FC<ArticleCardProps> = ({ title, id, publishedAt, thumbnail, description, ...props }) => {
    return (
        <NextLink href={`/articles/${id}`} className='block rounded-md border bg-backgroundSecondary p-2'>
            <div className='flex items-end gap-4 p-4'>
                <p className='text-gray-700'>{dayjs(publishedAt).format('YYYY/MM/DD')}</p>
                <h2 className='text-lg'>{title}</h2>
            </div>
            <div className='flex items-stretch'>
                <div className='flex-1 p-4'>
                    <p className='line-clamp-3 text-gray-600'>{description}</p>
                </div>
                <div className='relative aspect-[4/3] w-1/3'>
                    <Image fill className='rounded-r-md object-cover' src={thumbnail.url} alt={title} />
                </div>
            </div>
        </NextLink>
    )
}
