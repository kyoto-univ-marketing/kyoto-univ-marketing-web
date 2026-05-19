import { client } from '@/api/client'

/** Django REST API から指定IDのテキストを取得する */
export const getTextById = async (id: string): Promise<string> => {
    'use cache'
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id } } })
    if (!data?.text) {
        console.error(`Couldn't get text: ${id}`)
    }
    return data?.text ?? ''
}
