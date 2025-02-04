'use client'

import { FilterIcon } from 'lucide-react'
import { FC, ReactNode, createContext, useContext, useMemo, useState } from 'react'

import { activityTagList } from '@/constants/activity'
import { useTransitionRouterPush } from '@/hooks/viewTransition'

import { Pagination } from '../../common/Pagination/Pagination'
import { TagRadio } from '../TagRadio/TagRadio'

export interface ActivityArticleListPresenterProps {
    page: number
    tag?: string
    articleCardList: ReactNode
}

interface ActivityArticleContext {
    totalPage: number
    setTotalPage: (totalPage: number) => void
}

export const ActivityCardContext = createContext<ActivityArticleContext>({ totalPage: 1, setTotalPage: () => null })
export const useActivityCardContext = () => useContext(ActivityCardContext)

/** 活動記録記事の表示を行うコンポーネント */
export const ActivityArticleListPresenter: FC<ActivityArticleListPresenterProps> = ({
    page,
    tag = '',
    articleCardList,
    ...props
}) => {
    const [totalPage, setTotalPage] = useState(1)

    const { routerPushWithTransition } = useTransitionRouterPush()
    const onTagChange = (tag: string) => {
        if (tag === '') {
            routerPushWithTransition('/articles', { scroll: false })
        } else {
            routerPushWithTransition(`/articles?tag=${tag}`, { scroll: false })
        }
    }
    const pageLinkList = useMemo(() => {
        return [...new Array(totalPage)].map((_, i) => `/articles?page=${i + 1}${tag ? `&tag=${tag}` : ''}`)
    }, [tag, totalPage])
    return (
        <div>
            <div className='mb-4 flex items-center gap-4 border-b p-4'>
                <div className='flex items-center gap-1 text-sm'>
                    <FilterIcon className='size-3.5'></FilterIcon>
                    <span>絞り込む</span>
                </div>
                <div className='flex-1'>
                    <TagRadio
                        erasable
                        onChange={onTagChange}
                        options={activityTagList.map((tag) => ({ label: tag, value: tag }))}
                        value={tag}
                    />
                </div>
            </div>
            <div className='mb-12'>
                <ActivityCardContext.Provider value={{ totalPage, setTotalPage }}>
                    {articleCardList}
                </ActivityCardContext.Provider>
            </div>
            <Pagination activePage={page} pageLinkList={pageLinkList} />
        </div>
    )
}
