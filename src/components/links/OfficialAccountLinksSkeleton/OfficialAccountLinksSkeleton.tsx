import { FC } from 'react'

import { Skeleton } from '@/components/ui/skeleton'

export interface OfficialAccountLinksSkeletonProps {}

export const OfficialAccountLinksSkeleton: FC<OfficialAccountLinksSkeletonProps> = ({ ...props }) => {
    return (
        <div className='space-y-12 px-4'>
            {[...new Array(2)].map((_, i) => (
                <div key={i} className='flex gap-2'>
                    <Skeleton className='size-[24px] rounded-full duration-1000' />
                    <div className='min-w-0 flex-1'>
                        <Skeleton className='mb-3 mt-1 h-5 duration-1000' />
                        <Skeleton className='h-4 duration-1000' />
                    </div>
                </div>
            ))}
        </div>
    )
}
