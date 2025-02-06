import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import { FC } from 'react'

import { BackButton } from '@/components/common/BackButton/BackButton'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { ParseHtml } from '@/components/common/ParseHtml/ParseHtml'
import { pageLinkObject } from '@/constants/pageLinks'
import { Activity } from '@/lib/microcms'

export interface ArticleDetailsPageProps extends Activity {}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ content, title, publishedAt, id, ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.ARCHIVE.text, href: pageLinkObject.ARCHIVE.href },
                    { label: title, href: `${pageLinkObject.ARCHIVE.href}/${id}` },
                ]}
            />
            <div className='mx-auto max-w-(--breakpoint-sm)'>
                <div className='my-2 px-2'>
                    <BackButton className='h-fit p-2 text-lg hover:bg-transparent' variant='ghost'>
                        <ArrowLeft size='1.25rem' />
                        戻る
                    </BackButton>
                </div>
                <div className='mb-12 px-6'>
                    <div className='bg-background-secondary px-4 py-8'>
                        <div className='mb-16 flex items-end gap-4'>
                            <p className='text-gray-700'>{dayjs(publishedAt).format('YYYY/MM/DD')}</p>
                            <h2 className='text-lg'>{title}</h2>
                        </div>
                        <div className='space-y-12 px-2'>
                            <ParseHtml>{content}</ParseHtml>
                        </div>
                    </div>
                </div>
            </div>
            {/* TODO: 戻る・進むボタンの設置 */}
        </>
    )
}
