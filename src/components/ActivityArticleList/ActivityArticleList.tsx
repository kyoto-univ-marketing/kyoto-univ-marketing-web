'use client'

import { FilterIcon } from 'lucide-react'
import { FC, useMemo, useState } from 'react'

import { activityTagList } from '@/constants/activity'

import { ArticleCardProps } from '../ArticleCard/ArticleCard'
import { ArticleCardList } from '../ArticleCardList/ArticleCardList'
import { TagRadio } from '../TagRadio/TagRadio'

export interface ActivityArticleListProps {}

const card1 = (slug: string) =>
    ({
        title: '第◯回勉強会',
        slug,
        date: new Date(),
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
        tag: '勉強会',
    }) satisfies ArticleCardProps
const card2 = (slug: string) =>
    ({
        title: '長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル',
        slug,
        date: new Date(),
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
        tag: 'イベント',
    }) satisfies ArticleCardProps
const card3 = (slug: string) =>
    ({
        title: 'その他その他その他その他その他',
        slug,
        date: new Date(),
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
        tag: 'その他',
    }) satisfies ArticleCardProps

export const ActivityArticleList: FC<ActivityArticleListProps> = ({ ...props }) => {
    const [filterTag, setFilterTag] = useState<string>('')
    const cardList = useMemo(
        () =>
            [card1('study-1'), card1('study-2'), card2('event-1'), card3('other-1'), card1('study-3')].filter(
                (cd) => !filterTag || cd.tag === filterTag,
            ),
        [filterTag],
    )
    return (
        <div className='space-y-4'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-sm'>
                    <FilterIcon className='size-3.5'></FilterIcon>
                    <span>絞り込む</span>
                </div>
                <div className='flex-1'>
                    <TagRadio
                        options={activityTagList.map((tag) => ({ label: tag, value: tag }))}
                        value={filterTag}
                        onChange={setFilterTag}
                        erasable
                    />
                </div>
            </div>
            <ArticleCardList cardList={cardList} />
        </div>
    )
}
