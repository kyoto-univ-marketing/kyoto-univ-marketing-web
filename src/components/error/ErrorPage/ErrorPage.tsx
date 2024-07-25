import { Home, CornerUpLeft, RotateCcw } from 'lucide-react'
import { FC } from 'react'

import { BackButton } from '@/components/common/BackButton/BackButton'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'
import { pageLinkObject } from '@/constants/pageLinks'

export interface ErrorPageProps {}

export const ErrorPage: FC<ErrorPageProps> = ({ ...props }) => {
    return (
        <>
            <PageTitle>予期せぬエラーが発生しました</PageTitle>
            <div className='mb-16 space-y-2 px-8'>
                <p>時間を置いてもう一度お試しください。</p>
                <p>
                    何度も発生する場合は、
                    <NextLink className='text-blue-600 underline underline-offset-2' href={pageLinkObject.CONTACT.href}>
                        こちら
                    </NextLink>
                    へお問い合わせください。
                </p>
            </div>
            <div className='mb-16 grid gap-4 px-8'>
                <Button onClick={() => window.location.reload()}>
                    <RotateCcw className='mr-2 size-4' />
                    再読み込み
                </Button>
                <Button asChild>
                    <NextLink href='/'>
                        <Home className='mr-2 size-4' />
                        トップページへ
                    </NextLink>
                </Button>
                <BackButton>
                    <CornerUpLeft className='mr-2 size-4' />
                    前のページに戻る
                </BackButton>
            </div>
        </>
    )
}
