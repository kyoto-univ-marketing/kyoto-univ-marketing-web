import { FC } from 'react'

import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'
import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import { pageLinkObject } from '@/constants/pageLinks'

import { Members } from '../Members/Members'

/** 歴代代表の一覧。団体概要の下層に置く */
export const MembersPage: FC = () => (
    <>
        <BreadCrumb
            items={[
                { href: pageLinkObject.TOP.href, label: pageLinkObject.TOP.textEng },
                { href: pageLinkObject.ABOUT.href, label: pageLinkObject.ABOUT.text },
                { href: aboutMembersPage.href, label: aboutMembersPage.text },
            ]}
        />
        <PageTitle band en={aboutMembersPage.textEng}>
            {aboutMembersPage.text}
        </PageTitle>
        <div className='mx-auto max-w-(--breakpoint-md) px-6 pb-24 md:px-8'>
            {/* 発起人への導線はページ下部のボタンに任せている。
                「迫田周大」の検索は /about/founder 本体と団体概要からのリンクで受けており、
                ここに氏名を書かなくても手がかりは足りる */}
            <p className='mb-16 text-justify text-gray-700'>
                京大マーケティング研究所は、2024年3月の設立以来、一年ごとに代表が交代しています。
                それぞれが考える「この場所は何であるか」を、そのままの言葉で載せています。
                初代代表については
                <NextLink className='underline underline-offset-4 hover:text-primary' href={aboutFounderPage.href}>
                    {aboutFounderPage.text}
                </NextLink>
                をご覧ください。
            </p>
            <Members />
            <div className='mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                <Button asChild className='px-8 py-5'>
                    <NextLink href={aboutFounderPage.href}>{aboutFounderPage.text}を見る</NextLink>
                </Button>
                <Button asChild className='px-8 py-5' variant='outline'>
                    <NextLink href={pageLinkObject.ABOUT.href}>団体概要へ戻る</NextLink>
                </Button>
            </div>
        </div>
    </>
)
