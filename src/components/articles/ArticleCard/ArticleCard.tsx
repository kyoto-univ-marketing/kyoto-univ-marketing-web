import dayjs from 'dayjs'
import Image from 'next/image'
import { FC } from 'react'

import { Activity } from '@/lib/microcms'

import { NextLink } from '../../common/NextLink/NextLink'

export interface ArticleCardProps extends Activity {}

export const ArticleCard: FC<ArticleCardProps> = ({ title, id, publishedAt, thumbnail, ...props }) => {
    return (
        <div className=''>
            <NextLink href={`/articles/${id}`}>
                <div className='flex items-stretch'>
                    <div className='flex flex-1 flex-col gap-2 rounded-l-md border-y border-l p-6'>
                        <p className='text-sm text-gray-700'>{dayjs(publishedAt).format('YYYY/MM/DD')}</p>
                        <div className='flex flex-1 items-center'>
                            <p className='line-clamp-2 text-xl'>{title}</p>
                        </div>
                    </div>
                    <div className='relative aspect-[4/3] w-1/3'>
                        <Image fill className='rounded-r-md object-cover' src={thumbnail.url} alt={title} />
                    </div>
                </div>
            </NextLink>
        </div>
    )
}
