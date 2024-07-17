'use client'

import { FilterIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useMemo } from 'react'

import { activityTagList } from '@/constants/activity'

import { Pagination } from '../../common/Pagination/Pagination'
import { ArticleCardProps } from '../ArticleCard/ArticleCard'
import { ArticleCardList } from '../ArticleCardList/ArticleCardList'
import { TagRadio } from '../TagRadio/TagRadio'

export interface ActivityArticleListPresenterProps {
    activityArticleList: ArticleCardProps[]
    page: number
    totalPage: number
    tag?: string
}

/** 活動記録記事の表示を行うコンポーネント */
export const ActivityArticleListPresenter: FC<ActivityArticleListPresenterProps> = ({
    activityArticleList,
    page,
    totalPage,
    tag = '',
    ...props
}) => {
    const router = useRouter()
    const onTagChange = (tag: string) => {
        if (tag === '') {
            router.push('/articles', { scroll: false })
        } else {
            router.push(`/articles?tag=${tag}`, { scroll: false })
        }
    }
    const pageLinkList = useMemo(() => {
        return [...new Array(totalPage)].map((_, i) => `/articles?page=${i + 1}&tag=${tag}`)
    }, [tag, totalPage])
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
                        onChange={onTagChange}
                        erasable
                    />
                </div>
            </div>
            <ArticleCardList cardList={activityArticleList} />
            <Pagination activePage={page} pageLinkList={pageLinkList} />
        </div>
    )
}
