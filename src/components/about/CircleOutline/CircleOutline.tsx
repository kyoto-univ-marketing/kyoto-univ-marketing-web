import { FC } from 'react'

import shuugouShashin from '@/../public/page-images/about/36CB5A6E-5711-4641-8318-AF3C72572BBA.webp'
import { PageImage } from '@/components/common/PageImage/PageImage'

export interface CircleOutlineProps {
    text: string
}

/**
 * サークル概要。内容が短くアコーディオンに畳むほどではないため、
 * 実績数値と並べてページ上部に常時表示している。
 *
 * テキストの取得はページ側で行う（/projects や /articles と同じ形）。
 * ここで自前で取得して Suspense に包むと、境界が postponed のまま解決されず
 * スケルトンが表示され続ける問題が起きた。
 */
export const CircleOutline: FC<CircleOutlineProps> = ({ text }) => (
    <div className='space-y-8'>
        <p className='px-2 text-gray-700'>{text}</p>
        <PageImage alt='集合写真' src={shuugouShashin} />
    </div>
)
