import { FC } from 'react'

import { client } from '@/api/client'

import { OriginPresenter } from './OriginPresenter'

export interface OriginProps {}

export const Origin: FC<OriginProps> = async ({ ...props }) => {
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id: 'origin' } } })
    const originText = data?.text ?? ''
    if (!originText) {
        console.error("Couldn't get origin text")
    }
    return <OriginPresenter text={originText} />
}
