import dayjs from 'dayjs'
import Image from 'next/image'
import { FC } from 'react'

import { activityTagList } from '@/constants/activity'

import { NextLink } from '../NextLink/NextLink'

export interface ArticleCardProps {
    title: string
    slug: string
    date: Date
    image: string
    tag: (typeof activityTagList)[number]
}

export const ArticleCard: FC<ArticleCardProps> = ({ title, slug, date, image, ...props }) => {
    return (
        <div className=''>
            <NextLink href={`/articles/${slug}`}>
                <div className='flex items-stretch'>
                    <div className='flex flex-1 flex-col gap-2 rounded-l-md border-y border-l p-6'>
                        <p className='text-sm text-gray-700'>{dayjs(date).format('YYYY/MM/DD')}</p>
                        <div className='flex flex-1 items-center'>
                            <p className='line-clamp-2 text-xl'>{title}</p>
                        </div>
                    </div>
                    <div className='relative aspect-[4/3] w-1/3'>
                        <Image fill className='rounded-r-md object-cover' src={image} alt={title} />
                    </div>
                </div>
            </NextLink>
        </div>
    )
}
