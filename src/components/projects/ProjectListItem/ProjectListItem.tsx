import Image from 'next/image'
import { FC } from 'react'

import { components } from '@/api/schema'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { toHttps } from '@/lib/to-https'

export interface ProjectListItemProps
    extends Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'> {
    /** 一覧の中での並び順。順に現れる演出の遅延に使う */
    order?: number
}

/**
 * プロジェクト1件のカード。
 *
 * 以前は写真を回り込み（float）させ、高さを ResizeObserver で測って合わせていたが、
 * 画面幅によって崩れやすかったため、画像と本文を縦に積むカードに変えている。
 * サムネイルは縦横比がばらばら（ロゴ・横長写真が混在）なので、
 * 切り取らずに object-contain で全体を見せ、余白は背景色で埋める。
 */
export const ProjectListItem: FC<ProjectListItemProps> = ({ name, description, thumbnail, order = 0 }) => (
    <Reveal className='flex flex-col border border-gray-200 bg-white' delay={order * 80}>
        <div className='relative aspect-video w-full overflow-hidden bg-background-secondary'>
            {thumbnail && (
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
                    className='object-contain p-4'
                    fill
                    sizes='(max-width: 640px) 100vw, 480px'
                    src={toHttps(thumbnail)}
                    unoptimized
                />
            )}
        </div>
        <div className='flex flex-1 flex-col gap-3 px-6 py-6'>
            <h4 className='font-title text-lg leading-snug'>{name}</h4>
            <p className='whitespace-pre-wrap text-gray-700 text-sm leading-relaxed'>{description}</p>
        </div>
    </Reveal>
)
