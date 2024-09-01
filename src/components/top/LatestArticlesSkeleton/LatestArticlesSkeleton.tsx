import { FC } from 'react'

import { Skeleton } from '@/components/ui/skeleton'

export interface LatestArticlesSkeletonProps {}

export const LatestArticlesSkeleton: FC<LatestArticlesSkeletonProps> = ({ ...props }) => {
    return (
        <table className='mb-12 table-auto border-separate border-spacing-y-3 px-16'>
            <tbody>
                {[1, 2, 3, 4].map((_, index) => (
                    <tr className='h-[23px]' key={index}>
                        <td className='pr-8'>
                            <Skeleton className='h-4 w-[90.188px]' />
                        </td>
                        <td className='w-full'>
                            <Skeleton className='h-4 w-full' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
