import { getTextById } from '@/lib/api'

import { TopContainer } from '../TopContainer/TopContainer'
import { TopPresenterDesktop } from '../TopPresenter/TopPresenterDesktop/TopPresenterDesktop'
import { TopPresenterMobile } from '../TopPresenter/TopPresenterMobile/TopPresenterMobile'

export const TopPage = async () => {
    const [message, subMessage] = await Promise.all([
        getTextById('top_message'),
        getTextById('top_sub_message'),
    ])
    return (
        <TopContainer
            desktop={<TopPresenterDesktop />}
            mobile={<TopPresenterMobile message={message} subMessage={subMessage} />}
        />
    )
}
