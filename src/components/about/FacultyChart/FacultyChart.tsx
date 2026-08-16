import { FC } from 'react'

import { DonutChart } from '@/components/common/DonutChart/DonutChart'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { careerPaths, facultyBreakdown, SCIENCE_FACULTY_SHARE, STATS_AS_OF, scienceRatio } from '@/constants/about'

/**
 * 部員の構成。
 *
 * 学部の内訳は9区分あり、図の中に文字を置くと1.9%の区分が読めなくなるので、
 * 名前と割合は凡例側に出している。
 * 文系・理系の比率は同じデータの言い換えだが、企業も学生も真っ先に気にする点なので、
 * 一目で分かるようにもう一つ図を置いている。
 *
 * 2つの図は横に並べない。図と凡例で横幅を使うため、半分の幅では凡例が潰れる。
 */
export const FacultyChart: FC = () => (
    <div className='space-y-12'>
        <div className='space-y-12'>
            <Reveal className='space-y-5'>
                <h3 className='font-title text-lg'>所属学部の内訳</h3>
                <DonutChart
                    centerLabel='9学部'
                    centerNote='教育学部を除く'
                    data={[...facultyBreakdown]}
                    label='所属学部の内訳を示すドーナツグラフ'
                />
            </Reveal>
            <Reveal className='space-y-5' delay={100}>
                <h3 className='font-title text-lg'>文系・理系の比率</h3>
                <DonutChart
                    centerLabel={SCIENCE_FACULTY_SHARE}
                    centerNote='が理系'
                    data={[...scienceRatio]}
                    label='文系と理系の比率を示すドーナツグラフ'
                />
            </Reveal>
        </div>
        <div className='space-y-2'>
            <p className='text-gray-600 text-sm'>
                教育学部を除く9学部が在籍しています。文系・理系の垣根を越えた学生が同じ机で学び合っています。
            </p>
            <p className='text-right text-gray-600 text-xs'>※{STATS_AS_OF}現在</p>
        </div>

        {/* 学部の内訳の次に置く。「どんな人がいるか」の次に来るのは「どこへ行くか」なので */}
        <Reveal className='space-y-5'>
            <h3 className='font-title text-lg'>OB・OG、現役生の主な進路・内定先</h3>
            {/* モバイルでも2列にする。1列だと12項目が縦に並び、
                この節だけで画面数枚分の高さになってしまうため */}
            <ul className='grid grid-cols-2 gap-x-5 gap-y-3 sm:gap-x-8 lg:grid-cols-3'>
                {careerPaths.map((path) => (
                    <li className='border-gray-200 border-t pt-3 text-gray-700 text-sm leading-snug' key={path}>
                        {path}
                    </li>
                ))}
            </ul>
            <p className='text-gray-600 text-sm'>など。</p>
        </Reveal>
    </div>
)
