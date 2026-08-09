import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { BackButton } from '@/components/common/BackButton/BackButton'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { ParseHtml } from '@/components/common/ParseHtml/ParseHtml'
import { pageLinkObject } from '@/constants/pageLinks'
import { Activity } from '@/lib/microcms'

export interface ArticleDetailsPageProps extends Activity {}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ content, title, publishedAt, id,tag, ...props }) => {
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
                    <div className='border border-gray-200 bg-white px-6 py-10'>
                        {/* 日付とタグは見出しの前置きとして小さく置き、記事一覧と様式を揃える */}
                        <div className='mb-12 space-y-4 border-gray-200 border-b pb-6'>
                            <div className='flex flex-wrap items-center gap-3 text-gray-600 text-xs'>
                                <span className='font-en tracking-widest'>
                                    {dayjs(publishedAt).format('YYYY.MM.DD')}
                                </span>
                                <span aria-hidden className='block h-3 w-px bg-gray-300' />
                                <Link className='transition-colors hover:text-primary' href={`/articles?tag=${tag}`}>
                                    {tag}
                                </Link>
                            </div>
                            <h2 className='font-title text-heading leading-snug'>{title}</h2>
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
