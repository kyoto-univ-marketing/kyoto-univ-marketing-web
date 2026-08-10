import { FC } from 'react'

import { Reveal } from '@/components/common/Reveal/Reveal'
import { facultyBreakdown, SCIENCE_FACULTY_SHARE, STATS_AS_OF } from '@/constants/about'

/**
 * 所属学部の内訳。
 *
 * 円グラフではなく横棒にしている。9つに分かれると円では小さい区分が読めなくなるうえ、
 * 「経済が半分強、次が工」という並び順そのものが伝えたい情報のため。
 * 図の描画にライブラリは使わない（数値が9個並ぶだけなので、幅の指定で足りる）。
 */
export const FacultyChart: FC = () => (
    <div className='space-y-6'>
        <div className='space-y-3'>
            {facultyBreakdown.map(({ name, percent }, i) => (
                <Reveal className='flex items-center gap-4' delay={i * 50} key={name}>
                    <span className='w-12 shrink-0 text-gray-600 text-sm sm:w-16'>{name}</span>
                    <div className='h-3 flex-1 bg-background-secondary'>
                        <div className='h-full bg-primary' style={{ width: `${percent}%` }} />
                    </div>
                    <span className='w-14 shrink-0 text-right font-en text-gray-600 text-sm tabular-nums'>
                        {percent}%
                    </span>
                </Reveal>
            ))}
        </div>
        <p className='text-gray-600 text-sm'>
            教育学部を除く9学部が在籍しています。うち理系学部は{SCIENCE_FACULTY_SHARE}
            。文系・理系の垣根を越えた学生が同じ机で学び合っています。
        </p>
        <p className='text-right text-gray-600 text-xs'>※{STATS_AS_OF}現在</p>
    </div>
)
