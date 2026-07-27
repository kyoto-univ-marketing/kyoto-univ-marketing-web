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
