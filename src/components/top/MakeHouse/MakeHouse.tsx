import Image from 'next/image'
import { FC } from 'react'

import KakejikuImg from '@/../public/page-images/kakejiku.webp'
import MakeHouseImg from '@/../public/page-images/makehouse.webp'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * トップに置くマーケハウスの紹介。
 *
 * 京町家を24時間使える学生団体は他にほとんどなく、最も分かりやすい差別化要素なので、
 * トップで写真付きで見せる。詳しい説明は活動内容のページに置く。
 */
export const MakeHouse: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-lg) px-6'>
        <PageTitle asChild en='Our Base'>
            <h2>マーケハウス</h2>
        </PageTitle>
        <Reveal className='grid items-center gap-10 sm:grid-cols-2 sm:gap-14'>
            {/* 外観だけだと中の空気が伝わらないので、掛け軸（内観）を並べる。
                右側は左の写真と高さを揃えたいので fill にしている */}
            <div className='flex gap-3'>
                <Image
                    {...MakeHouseImg}
                    alt='活動拠点マーケハウスの外観。京都大学から徒歩圏の京町家'
                    className='w-[62%] object-cover'
                    sizes='(max-width: 640px) 62vw, 300px'
                />
                <div className='relative flex-1 overflow-hidden'>
                    <Image
                        {...KakejikuImg}
                        alt='マーケハウスに掛かる掛け軸'
                        className='absolute inset-0 size-full object-cover'
                        sizes='(max-width: 640px) 38vw, 180px'
                    />
                </div>
            </div>
            <div className='space-y-6'>
                <p className='font-title text-heading leading-relaxed'>
                    「行けば誰かがいる」場所が、
                    <wbr />
                    関係の深さを決めています。
                </p>
                <div className='space-y-4 text-gray-700'>
                    <p>
                        京都大学から徒歩圏にある、2階建ての京町家を借りています。
                        スマートロックなので鍵の受け渡しが要らず、部員は深夜・早朝を含めていつでも使えます。
                    </p>
                    <p>
                        OBや経営者、他団体の方が訪ねてくることもあり、日常の延長線上に社会があります。
                    </p>
                </div>
                <Button asChild className='px-8 py-5' variant='outline'>
                    <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
                </Button>
            </div>
        </Reveal>
    </section>
)
