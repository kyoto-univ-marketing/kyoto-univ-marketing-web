import { cacheLife } from 'next/cache'

import { client } from '@/api/client'
import { components } from '@/api/schema'

type TextId = components['schemas']['IdEnum']

/** Django REST API から指定IDのテキストを取得する */
export const getTextById = async (id: TextId): Promise<string> => {
    'use cache'
    // 管理画面で編集した内容が数分で反映されるようにする。
    // 指定しないと次のデプロイまでキャッシュが残り続ける。
    cacheLife('minutes')
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id } } })
    if (!data?.text) {
        console.error(`Couldn't get text: ${id}`)
    }
    return data?.text ?? ''
}

/**
 * 実績数値のうち会員数を取得する。取得できなければ undefined を返す。
 * 説明文などに人数を書き込みたい箇所から使う。
 *
 * 「部員」でも拾う。管理画面の項目名は「部員数」のままなので、
 * ここを「会員」だけにすると人数が取れなくなり、説明文から静かに消える。
 * 管理画面側を「会員数」に直したあとも、両方拾えるようにしておけば事故らない。
 */
export const getMemberCount = async (): Promise<number | undefined> => {
    'use cache'
    cacheLife('minutes')
    const { data } = await client.GET('/api/about_stats/')
    return data?.find((stat) => stat.title.includes('会員') || stat.title.includes('部員'))?.number
}
