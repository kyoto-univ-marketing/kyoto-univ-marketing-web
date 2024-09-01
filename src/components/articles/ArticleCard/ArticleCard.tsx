import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Activity } from '@/lib/microcms'

import { NextLink } from '../../common/NextLink/NextLink'


/* 記事一覧で必要なfield */
export const activityListFields = [
    'title',
    'id',
    'publishedAt',
    'thumbnail',
    'description',
    'tag',
] as const satisfies (keyof Activity)[]

export interface ArticleCardProps extends Pick<Activity, (typeof activityListFields)[number]> {}

export const ArticleCard: FC<ArticleCardProps> = ({
    title,
    id,
    publishedAt,
    thumbnail,
    description,
    tag: _tag,
    ...props
}) => {
    const tag = _tag[0]
    return (
        <NextLink className='block rounded-md border bg-backgroundSecondary p-2' href={`/articles/${id}`}>
            <div className='p-4'>
                <div className='mb-1 flex items-end gap-4'>
                    <p className='text-gray-700'>{dayjs(publishedAt).format('YYYY/MM/DD')}</p>
                    <h2 className='text-lg'>{title}</h2>
                </div>
                <Link href={`/articles?tag=${tag}`}>
                    <Badge>{tag}</Badge>
                </Link>
            </div>
            <div className='flex items-stretch'>
                <div className='flex-1 p-4'>
                    <p className='line-clamp-3 text-gray-600'>{description}</p>
                </div>
                <div className='relative aspect-[4/3] w-1/3'>
                    <Image alt={title} className='object-cover' fill src={thumbnail.url} />
                </div>
            </div>
        </NextLink>
    )
}
