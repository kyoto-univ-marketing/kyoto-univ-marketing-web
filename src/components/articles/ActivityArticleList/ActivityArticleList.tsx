'use client'

import { FilterIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { activityTagList } from '@/constants/activity'

import { Pagination } from '../../common/Pagination/Pagination'
import { ArticleCardProps } from '../ArticleCard/ArticleCard'
import { ArticleCardList } from '../ArticleCardList/ArticleCardList'
import { TagRadio } from '../TagRadio/TagRadio'

export interface ActivityArticleListProps {
    activityArticleList: ArticleCardProps[]
    page: number
    totalPage: number
    tag?: string
}

export const ActivityArticleList: FC<ActivityArticleListProps> = ({
    activityArticleList,
    page,
    totalPage,
    tag = '',
    ...props
}) => {
    const router = useRouter()
    return (
        <div className='space-y-8'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-sm'>
                    <FilterIcon className='size-3.5'></FilterIcon>
                    <span>絞り込む</span>
                </div>
                <div className='flex-1'>
                    <TagRadio
                        options={activityTagList.map((tag) => ({ label: tag, value: tag }))}
                        value={tag}
                        onChange={(tag) => router.push(`/articles?tag=${tag}`)}
                        erasable
                    />
                </div>
            </div>
            <ArticleCardList cardList={activityArticleList} />
            <Pagination
                activePage={page}
                pageLinkList={[...new Array(totalPage)].map((_, i) => `/articles?page=${i + 1}&tag=${tag}`)}
            />
        </div>
    )
}
