import { FC } from 'react'

import { PageImage } from '@/components/common/PageImage/PageImage'
import { getTextById } from '@/lib/api'

import shuugouShashin from '../../../../../public/page-images/about/36CB5A6E-5711-4641-8318-AF3C72572BBA.webp'

export interface CircleOutlineProps {}

/** 実績数値は開かずに見えるよう CircleStats としてアコーディオンの外に配置している */
export const CircleOutline: FC<CircleOutlineProps> = async () => {
    'use cache'
    const outlineText = await getTextById('circle_outline')

    return (
        <div className='space-y-12'>
            <p className='px-6 text-gray-700'>{outlineText}</p>
            <PageImage alt='集合写真' src={shuugouShashin} />
        </div>
    )
}
