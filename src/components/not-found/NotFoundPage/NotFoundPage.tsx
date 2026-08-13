import { CornerUpLeft, Home } from 'lucide-react'
import { FC } from 'react'

import { BackButton } from '@/components/common/BackButton/BackButton'
import { NextLink } from '@/components/common/NextLink/NextLink'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button } from '@/components/ui/button'

export interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({ ...props }) => {
    return (
        <>
            <PageTitle band en='Not Found'>
                ページが見つかりません
            </PageTitle>
            <div className='mx-auto max-w-(--breakpoint-md) space-y-10 px-6 pb-24 md:px-8'>
                <p className='text-gray-700'>
                    お探しのページは見つかりませんでした。アドレスが正しいかご確認ください。
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <Button asChild className='px-8 py-5'>
                        <NextLink href='/'>
                            <Home />
                            トップページへ
                        </NextLink>
                    </Button>
                    <BackButton className='px-8 py-5' variant='outline'>
                        <CornerUpLeft />
                        前のページに戻る
                    </BackButton>
                </div>
            </div>
        </>
    )
}
