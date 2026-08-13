import Image from 'next/image'
import { FC } from 'react'

import KakejikuImg from '@/../public/page-images/kakejiku.webp'
import MakeHouseImg from '@/../public/page-images/makehouse.webp'
import { HeadingSub } from '@/components/common/HeadingSub/HeadingSub'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import { MAKE_HOUSE_ADDRESS, MAP_EMBED_SRC } from '@/constants/about'
import { pageLinkObject } from '@/constants/pageLinks'

/**
 * トップに置くマーケハウスの紹介。
 *
 * 京町家を24時間使える学生団体は他にほとんどなく、最も分かりやすい差別化要素なので、
 * トップで写真付きで見せる。詳しい説明は活動内容のページに置く。
 *
 * 見出しは施設名をそのまま出す。うたい文句を見出しにすると、
 * 何の節なのかが分からないまま読み進めることになるため。
 *
 * 地図は2段組みの中には入れない。右の列だけが伸びて、左の写真の脇が空いてしまうため、
 * 全幅で下に敷いている。
 */
export const MakeHouse: FC = () => (
    <section className='mx-auto max-w-(--breakpoint-lg) px-6 md:px-8'>
        <Reveal className='grid items-center gap-10 sm:grid-cols-[1.15fr_1fr] sm:gap-14'>
            {/* 外観だけだと中の空気が伝わらないので、掛け軸（内観）を並べる。
                右側は左の写真と高さを揃えたいので fill にしている */}
            <Reveal className='flex gap-3' mask>
                <Image
                    {...MakeHouseImg}
                    alt='活動拠点マーケハウスの外観。京都大学から徒歩圏の京町家'
                    className='w-[64%] object-cover'
                    sizes='(max-width: 640px) 64vw, 360px'
                />
                <div className='relative flex-1 overflow-hidden'>
                    <Image
                        {...KakejikuImg}
                        alt='マーケハウスに掛かる掛け軸'
                        className='absolute inset-0 size-full object-cover'
                        sizes='(max-width: 640px) 36vw, 200px'
                    />
                </div>
            </Reveal>
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>Our Base</p>
                    <h2 className='font-title text-title leading-tight'>
                        <span className='inline-block whitespace-nowrap'>
                            <HeadingSub>活動拠点：</HeadingSub>
                        </span>
                        <span className='inline-block whitespace-nowrap'>マーケハウス</span>
                    </h2>
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
                <Button asChild className='px-8 py-5'>
                    <NextLink href={pageLinkObject.PROJECT.href}>活動内容を見る</NextLink>
                </Button>
            </div>
        </Reveal>

        {/* 場所が実在することを示す。企業も学生も「どこにあるのか」を必ず気にする */}
        <div className='mt-12 space-y-2'>
            <div className='h-56 w-full overflow-hidden border border-gray-200 md:h-72'>
                <iframe
                    allowFullScreen
                    className='size-full'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    src={MAP_EMBED_SRC}
                    title='マーケハウスの地図'
                />
            </div>
            <p className='text-gray-600 text-xs'>{MAKE_HOUSE_ADDRESS}</p>
        </div>
    </section>
)
