import Image from 'next/image'
import { FC } from 'react'

import { components } from '@/api/schema'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { getFallbackImage } from '@/constants/projectThumbnail'
import { toHttps } from '@/lib/to-https'
import { cn } from '@/lib/utils'

export interface ProjectListItemProps
    extends Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'> {
    /** 一覧の中での並び順。順に現れる演出の遅延に使う */
    order?: number
    /** 終了したプロジェクト。灰色に落として「実績」の札を付ける */
    archived?: boolean
}

/**
 * プロジェクト1件。
 *
 * 枠線で囲まない。囲む見た目は「押せるもの」に限って使う決まりにしており、
 * ここはリンクではないため、写真そのものをまとまりの手がかりにしている。
 *
 * サムネイルは縦横比がばらばら（ロゴ・横長写真が混在）なので、
 * 切り取らずに object-contain で全体を見せ、余白は背景色で埋める。
 * 写真が未登録のものは差し替え画像を使う（こちらは写真なので object-cover）。
 *
 * 終了したものは別の節にまとめず、同じ分類の中に「実績」として並べる。
 * 分けると、その分類で今なにをしているのかと、これまで何をしてきたのかが
 * 別の場所に散ってしまうため。区別は札と彩度でつける。
 */
export const ProjectListItem: FC<ProjectListItemProps> = ({
    name,
    description,
    thumbnail,
    order = 0,
    archived = false,
}) => {
    const fallback = getFallbackImage(name)

    return (
        <Reveal className='flex flex-col' delay={order * 80} mask>
            <div className='relative aspect-video w-full overflow-hidden bg-background-secondary'>
                {fallback ? (
                    <Image
                        alt=''
                        className={cn('object-cover', archived && 'opacity-55 grayscale')}
                        fill
                        sizes='(max-width: 640px) 100vw, 400px'
                        src={fallback}
                    />
                ) : (
                    /*
                     * unoptimized にしている理由:
                     * Django が返すサムネイルは content-type が application/octet-stream で、
                     * さらに末尾スラッシュへリダイレクトするため、next/image の最適化が
                     * 「画像ではない」と判断して失敗する。素の img として出せば
                     * ブラウザが中身を見て画像として描画するので表示できる。
                     * バックエンド側で content-type を直せば unoptimized は外してよい。
                     */
                    <Image
                        alt={`${name}の画像`}
                        className={cn('object-contain', archived && 'opacity-55 grayscale')}
                        fill
                        sizes='(max-width: 640px) 100vw, 400px'
                        src={toHttps(thumbnail)}
                        unoptimized
                    />
                )}
            </div>
            <div className='flex flex-1 flex-col gap-3 pt-5'>
                {/* 札は写真の上に重ねない。写真の内容が隠れるうえ、
                    見出しの前置きとして置いたほうが一覧を流し読みしやすい */}
                <span
                    className={cn(
                        'w-fit border px-2 py-0.5 font-en text-[0.6875rem] tracking-[0.15em]',
                        archived ? 'border-gray-300 text-gray-500' : 'border-brand-accent text-brand-accent',
                    )}
                >
                    {archived ? '実績' : '進行中'}
                </span>
                <h4 className={cn('font-title text-lg leading-snug', archived && 'text-gray-500')}>{name}</h4>
                <p className={cn('whitespace-pre-wrap text-sm leading-relaxed', archived ? 'text-gray-500' : 'text-gray-700')}>
                    {description}
                </p>
            </div>
        </Reveal>
    )
}
