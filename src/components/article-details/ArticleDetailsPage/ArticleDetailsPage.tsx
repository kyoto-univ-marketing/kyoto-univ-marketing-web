import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import { FC } from 'react'

import { BackButton } from '@/components/common/BackButton/BackButton'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import { ParseHtml } from '@/components/common/ParseHtml/ParseHtml'
import { pageLinkObject } from '@/constants/pageLinks'
import { Activity } from '@/lib/microcms'

export interface ArticleDetailsPageProps extends Activity {}

/**
 * お知らせの本文。
 *
 * 見出しは h1。記事のページで一番大きな主題は記事の題名で、
 * ここを h2 にすると検索エンジンにも読み上げにも主題が伝わらない。
 *
 * 白い枠では囲まない（囲む見た目は押せるものに限る、というサイト全体の決まり）。
 * タグは表示のみ。一覧のタグ絞り込みは廃止したので、リンクにはしない。
 */
export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ content, title, publishedAt, id, tag, ...props }) => {
    return (
        <>
            <BreadCrumb
                items={[
                    { label: pageLinkObject.TOP.textEng, href: pageLinkObject.TOP.href },
                    { label: pageLinkObject.ARCHIVE.text, href: pageLinkObject.ARCHIVE.href },
                    { label: title, href: `${pageLinkObject.ARCHIVE.href}/${id}` },
                ]}
            />
            <article className='mx-auto max-w-(--breakpoint-md) px-6 pb-24 md:px-8'>
                <header className='mt-12 space-y-4 border-gray-200 border-b pb-8 md:mt-16'>
                    <div className='flex flex-wrap items-center gap-3 text-gray-600 text-xs'>
                        <span className='font-en tracking-widest'>{dayjs(publishedAt).format('YYYY.MM.DD')}</span>
                        <span aria-hidden className='block h-3 w-px bg-gray-300' />
                        <span>{tag}</span>
                    </div>
                    <h1 className='font-title text-title leading-snug'>{title}</h1>
                </header>
                <div className='mt-12 space-y-12'>
                    <ParseHtml>{content}</ParseHtml>
                </div>
                <div className='mt-16 border-gray-200 border-t pt-8'>
                    <BackButton className='h-fit p-0 hover:bg-transparent' variant='ghost'>
                        <ArrowLeft size='1.25rem' />
                        戻る
                    </BackButton>
                </div>
            </article>
        </>
    )
}
