import Image from 'next/image'
import { FC } from 'react'

import KakejikuImg from '@/../public/page-images/kakejiku.webp'
import MakeHouseImg from '@/../public/page-images/makehouse.webp'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * トップに置くマーケハウスの紹介。
 *
 * 京町家を24時間使える学生団体は他にほとんどなく、最も分かりやすい差別化要素なので、
 * トップで写真付きで見せる。詳しい説明は活動内容のページに置く。
 *
 * 見出しは施設名をそのまま出す。うたい文句を見出しにすると、
 * 何の節なのかが分からないまま読み進めることになるため。
 */
export const MakeHouse: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-lg) px-6 md:px-8'>
        <Reveal className='grid items-center gap-10 sm:grid-cols-2 sm:gap-14'>
            {/* 外観だけだと中の空気が伝わらないので、掛け軸（内観）を並べる。
                右側は左の写真と高さを揃えたいので fill にしている */}
            <Reveal className='flex gap-3' mask>
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
            </Reveal>
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>Our Base</p>
                    <h2 className='font-title text-title leading-tight'>
                        <span className='inline-block whitespace-nowrap'>活動拠点：</span>
                        <span className='inline-block whitespace-nowrap'>マーケハウス</span>
                    </h2>
                    <span aria-hidden className='block h-px w-10 bg-brand-accent' />
                </div>
                <div className='space-y-4 text-gray-700'>
                    <p>
                        京都大学から徒歩圏にある、2階建ての京町家を借りています。
                        部員は深夜・早朝を含めていつでも使えます。
                    </p>
                    <p>
                        OBや経営者、他団体の方が訪ねてくることもあり、日常の延長線上に社会があります。
                        「行けば誰かがいる」場所があることが、関係の深さを決めています。
                    </p>
                </div>
                <Button asChild className='px-8 py-5' variant='outline'>
                    <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
                </Button>
            </div>
        </Reveal>
    </section>
)
