'use client'

import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

import { components } from '@/api/schema'
import { toHttps } from '@/lib/to-https'
import { cn } from '@/lib/utils'

export interface ProjectListItemProps
    extends Pick<components['schemas']['Project'], 'name' | 'description' | 'thumbnail'> {
    reverse?: boolean
}

export const ProjectListItem: FC<ProjectListItemProps> = ({ name, thumbnail, description, reverse, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        if (ref.current) {
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setHeight(entry.contentRect.height)
                }
            })
            observer.observe(ref.current)
            return () => observer.disconnect()
        }
    }, [])
    return (
        <div>
            <h3 className={cn('mb-6 px-12 text-heading', reverse && 'text-right')}>{name}</h3>
            <div className='relative' style={{ minHeight: height }}>
                <div
                    className={cn('relative mb-2 aspect-video w-1/2', reverse ? 'float-right' : 'float-left')}
                    ref={ref}
                >
                    {/*
                     * unoptimized にしている理由:
                     * Django が返すサムネイルは content-type が application/octet-stream で、
                     * さらに末尾スラッシュへリダイレクトするため、next/image の最適化が
                     * 「画像ではない」と判断して失敗する。素の img として出せば
                     * ブラウザが中身を見て画像として描画するので表示できる。
                     * バックエンド側で content-type を直せば unoptimized は外してよい。
                     */}
                    <Image
                        alt={`${name}の画像`}
                        className='object-contain'
                        fill
                        sizes='(max-width: 640px) 50vw, 320px'
                        src={toHttps(thumbnail)}
                        unoptimized
                    />
                </div>
                <p className='flex-1 whitespace-pre-wrap px-6'>{description}</p>
            </div>
        </div>
    )
}
