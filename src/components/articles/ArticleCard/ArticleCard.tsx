import dayjs from 'dayjs'
import Image from 'next/image'
import { FC } from 'react'

import { Activity } from '@/lib/microcms'

import { NextLink } from '../../common/NextLink/NextLink'

/* 記事一覧で必要なfield */
export const activityListFields = [
    'title',
    'id',
    'date',
    'thumbnail',
    'description',
    'tag',
] as const satisfies (keyof Activity)[]

export interface ArticleCardProps extends Pick<Activity, (typeof activityListFields)[number]> {}

export const ArticleCard: FC<ArticleCardProps> = ({
    title,
    id,
    date,
    thumbnail,
    description,
    tag: _tag,
    ...props
}) => {
    const tag = _tag[0]
    return (
        <NextLink
            className='group block border border-gray-200 bg-white transition-colors hover:border-brand-accent'
            href={`/articles/${id}`}
        >
            <div className='flex items-stretch gap-4 p-5 sm:gap-6 sm:p-6'>
                <div className='flex min-w-0 flex-1 flex-col gap-3'>
                    {/* 日付とタグは記事の「見出しの前置き」として小さく置く */}
                    <div className='flex flex-wrap items-center gap-3 text-gray-600 text-xs'>
                        <span className='font-en tracking-widest'>{dayjs(date).format('YYYY.MM.DD')}</span>
                        <span aria-hidden className='block h-3 w-px bg-gray-300' />
                        <span>{tag}</span>
                    </div>
                    <h2 className='font-title text-lg leading-snug transition-colors group-hover:text-primary'>
                        {title}
                    </h2>
                    <p className='line-clamp-3 text-gray-600 text-sm'>{description}</p>
                </div>
                <div className='relative aspect-4/3 w-1/3 shrink-0 self-start overflow-hidden'>
                    <Image
                        alt={title}
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                        fill
                        sizes='(max-width: 640px) 33vw, 220px'
                        src={thumbnail.url}
                    />
                </div>
            </div>
        </NextLink>
    )
}
