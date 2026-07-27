import { FC } from 'react'

import shuugouShashin from '@/../public/page-images/about/36CB5A6E-5711-4641-8318-AF3C72572BBA.webp'
import { PageImage } from '@/components/common/PageImage/PageImage'
import { getTextById } from '@/lib/api'

export interface CircleOutlineProps {}

/**
 * サークル概要。内容が短くアコーディオンに畳むほどではないため、
 * 実績数値と並べてページ上部に常時表示している。
 */
export const CircleOutline: FC<CircleOutlineProps> = async () => {
    'use cache'
    const outlineText = await getTextById('circle_outline')

    return (
        <div className='space-y-8'>
            <p className='px-2 text-gray-700'>{outlineText}</p>
            <PageImage alt='集合写真' src={shuugouShashin} />
        </div>
    )
}

/** CircleOutline の読み込み中に表示するプレースホルダー */
export const CircleOutlineSkeleton = () => (
    <div className='space-y-8'>
        <div className='space-y-2 px-2'>
            <div className='h-4 w-full animate-pulse rounded bg-muted' />
            <div className='h-4 w-2/3 animate-pulse rounded bg-muted' />
        </div>
        <div className='aspect-video w-full animate-pulse rounded bg-muted' />
    </div>
)
