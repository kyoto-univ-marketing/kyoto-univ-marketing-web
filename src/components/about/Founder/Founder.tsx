import Image from 'next/image'
import { FC } from 'react'

import SakodaImg from '@/../public/page-images/about/sakoda.webp'

/**
 * 創設者の節。
 *
 * このページは「迫田周大」の検索で上位を取っている資産なので、
 * 英字（FOUNDER）はあくまで装飾で、**日本語の「創設者」と氏名・ふりがなを必ず本文に残す**。
 * 英字だけにすると、日本語で調べた人がたどり着く手がかりが消える。
 *
 * 歴代代表を下に並べても主題がぶれないよう、この節を厚く保つこと。
 */
export const Founder: FC = () => (
    <section>
        <h2 className='border-b px-4 pb-4 text-heading'>創設者</h2>
        <div className='flex flex-col gap-8 py-8 sm:flex-row sm:gap-10'>
            <div className='mx-auto w-full max-w-56 shrink-0 sm:mx-0 sm:w-56'>
                <Image
                    {...SakodaImg}
                    alt='創設者 迫田周大（さこだしゅうた）'
                    className='aspect-square w-full object-cover'
                    sizes='(max-width: 640px) 60vw, 224px'
                />
            </div>
            <div className='flex-1 space-y-5'>
                <div className='space-y-2'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>Founder</p>
                    <p className='text-gray-600 text-sm'>創設者</p>
                    <p className='font-title text-heading leading-snug'>
                        迫田 周大
                        <span className='ml-3 align-middle text-base text-gray-600'>さこだ しゅうた</span>
                    </p>
                </div>
                <div className='space-y-4 text-gray-700'>
                    <p>
                        2024年3月、京都大学の学生数名とともに京大マーケティング研究所を設立。
                        2026年には運営基盤として一般社団法人マーケティング研究所を設立しました。
                    </p>
                    <p>
                        現在は運営を後進に引き継ぎ、外部から団体を支えています。
                    </p>
                </div>
            </div>
        </div>
    </section>
)
