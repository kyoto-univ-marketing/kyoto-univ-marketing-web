'use client'

import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'

import { Pagination } from '../../common/Pagination/Pagination'

export interface ActivityArticleListPresenterProps {
    page: number
    articleCardList: ReactNode
}

interface ActivityArticleContext {
    totalPage: number
    setTotalPage: (totalPage: number) => void
}

export const ActivityCardContext = createContext<ActivityArticleContext>({ totalPage: 1, setTotalPage: () => null })
export const useActivityCardContext = () => useContext(ActivityCardContext)

/**
 * お知らせ一覧の表示。
 *
 * タグの絞り込みは置いていない。記事の本数がそこまで多くなく、
 * 絞り込みの操作を挟むより新しい順にそのまま読んでもらう方が早いため。
 */
export const ActivityArticleListPresenter: FC<ActivityArticleListPresenterProps> = ({
    page,
    articleCardList,
    ...props
}) => {
    const [totalPage, setTotalPage] = useState(1)

    const pageLinkList = useMemo(
        () => Array.from({ length: totalPage }, (_, i) => `/articles?page=${i + 1}`),
        [totalPage],
    )
    return (
        <div>
            <div className='mb-12'>
                <ActivityCardContext.Provider value={{ totalPage, setTotalPage }}>
                    {articleCardList}
                </ActivityCardContext.Provider>
            </div>
            <Pagination activePage={page} pageLinkList={pageLinkList} />
        </div>
    )
}
