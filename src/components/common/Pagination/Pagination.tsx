import { FC, useMemo } from 'react'

import {
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    Pagination as ShadcnPagination,
} from '@/components/ui/pagination'

export interface PaginationProps {
    /** 現在選択されているページ（0-indexed） */
    activePage: number
    /** 前後何ページずつ表示するか */
    showPrevNextPage?: number
    pageLinkList: string[]
}

export const Pagination: FC<PaginationProps> = ({ pageLinkList, showPrevNextPage = 1, activePage, ...props }) => {
    const pageLen = pageLinkList.length
    if (activePage < 0 || activePage >= pageLen) {
        throw new Error(`activePage must be between 0 and ${pageLen - 1}`)
    }
    const showIndex = useMemo(() => {
        const res: number[] = []
        for (let i = 0; i < pageLen; i++) {
            if (i !== 0 && i !== pageLen - 1 && Math.abs(i - activePage) <= showPrevNextPage) {
                // 最初と最後は別で表示する
                res.push(i)
            } else if (showPrevNextPage === 0) {
                // 前後のページを表示しない場合
                if (activePage === 0 && i === 1) res.push(i)
                else if (activePage === pageLen - 1 && i === pageLen - 2) res.push(i)
            }
        }
        return res
    }, [activePage, pageLen, showPrevNextPage])
    return (
        <ShadcnPagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        aria-disabled={activePage === 0}
                        href={activePage === 0 ? '#' : pageLinkList[activePage - 1]}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink aria-disabled={0 === activePage} href={pageLinkList[0]} isActive={0 === activePage}>
                        1
                    </PaginationLink>
                </PaginationItem>
                {showIndex[0] > 1 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {showIndex.map((i) => (
                    <PaginationItem key={i}>
                        <PaginationLink
                            aria-disabled={i === activePage}
                            href={pageLinkList[i]}
                            isActive={i === activePage}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {showIndex[showIndex.length - 1] < pageLen - 2 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {pageLen >= 2 && (
                    <PaginationItem>
                        <PaginationLink
                            aria-disabled={pageLen - 1 === activePage}
                            href={pageLinkList[pageLen - 1]}
                            isActive={pageLen - 1 === activePage}
                        >
                            {pageLen}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationNext
                        aria-disabled={activePage === pageLen - 1}
                        href={activePage === pageLen - 1 ? '#' : pageLinkList[activePage + 1]}
                    />
                </PaginationItem>
            </PaginationContent>
        </ShadcnPagination>
    )
}
