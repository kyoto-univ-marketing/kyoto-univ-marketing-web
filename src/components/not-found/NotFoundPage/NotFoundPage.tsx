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
            <PageTitle asChild>
                <h1 className='grid text-center'>
                    <span className='text-5xl'>404</span>
                    <span className='text-lg'>Not Found</span>
                </h1>
            </PageTitle>
            <div className='mb-16 px-8'>
                <p>お探しのページは見つかりませんでした。URLが正しいかご確認ください。</p>
            </div>
            <div className='mb-16 grid gap-4 px-8'>
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
