import { FC } from 'react'

/**
 * 歴代代表。
 *
 * 創設者の節の「下」に、簡潔に置くこと。ここを厚くすると
 * 「迫田周大」のページという主題がぼやけ、検索順位を落としかねない。
 * 構造化データ（Person）にも含めない。
 *
 * 写真は現在収集中。揃ったら各行に添える。
 */
const representatives = [
    { order: '2代目代表', name: '中尾 優太', reading: 'なかお ゆうた' },
    { order: '3代目代表', name: '三上 透輝', reading: 'みかみ とうき' },
]

export const Representatives: FC = () => (
    <section>
        <h2 className='border-b px-4 pb-4 text-heading'>歴代代表</h2>
        <dl className='divide-y divide-gray-200 py-2'>
            {representatives.map(({ order, name, reading }) => (
                <div className='flex flex-col gap-1 px-4 py-5 sm:flex-row sm:items-baseline sm:gap-8' key={name}>
                    <dt className='shrink-0 text-gray-600 text-sm sm:w-28'>{order}</dt>
                    <dd className='flex-1 font-title text-lg'>
                        {name}
                        <span className='ml-3 align-middle text-gray-600 text-sm'>{reading}</span>
                    </dd>
                </div>
            ))}
        </dl>
    </section>
)
