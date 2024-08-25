import { FC } from 'react'

import { Skeleton } from '../ui/skeleton'

export interface ArticleCardSkeletonProps {}

export const ArticleCardSkeleton: FC<ArticleCardSkeletonProps> = ({ ...props }) => {
    return (
        <>
            {Array.from({ length: 3 }).map((_, index) => (
                <ArticleCardSkeletonItem key={index} />
            ))}
        </>
    )
}

const ArticleCardSkeletonItem = () => {
    return (
        <div className='h-40 w-full p-2'>
            <div className='flex items-end gap-4 p-4'>
                <Skeleton className='h-4 w-24' />
                <Skeleton className='h-6 flex-1' />
            </div>
            <div className='flex items-stretch'>
                <div className='flex-1 space-y-2 p-4'>
                    <Skeleton className='h-4' />
                    <Skeleton className='h-4' />
                    <Skeleton className='h-4' />
                </div>
                <div className='relative aspect-[4/3] w-1/3'>
                    <Skeleton className='absolute inset-0 h-full w-full' />
                </div>
            </div>
        </div>
    )
}
