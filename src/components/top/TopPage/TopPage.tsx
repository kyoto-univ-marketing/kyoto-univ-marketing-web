import { FC } from 'react'

import { client } from '@/api/client'
import { TopContainer } from '../TopContainer/TopContainer'
import { TopPresenterDesktop } from '../TopPresenter/TopPresenterDesktop/TopPresenterDesktop'
import { TopPresenterMobile } from '../TopPresenter/TopPresenterMobile/TopPresenterMobile'

export interface TopPageProps {}

export const TopPage: FC<TopPageProps> = async ({ ...props }) => {
    const { data: messageData } = await client.GET('/api/text/{id}/', { params: { path: { id: 'top_message' } } })
    if (!messageData?.text) {
        console.error("Couldn't get top message")
    }
    const { data: subMessageData } = await client.GET('/api/text/{id}/', {
        params: { path: { id: 'top_sub_message' } },
    })
    if (!subMessageData?.text) {
        console.error("Couldn't get top sub message")
    }
    const message = messageData?.text ?? ''
    const subMessage = subMessageData?.text ?? ''
    return (
        <TopContainer
            desktop={<TopPresenterDesktop message={message} subMessage={subMessage} />}
            mobile={<TopPresenterMobile message={message} subMessage={subMessage} />}
        />
    )
}
