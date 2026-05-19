import { getTextById } from '@/lib/api'

import { OriginPresenter } from './OriginPresenter'

export const Origin = async () => {
    const text = await getTextById('origin')
    return <OriginPresenter text={text} />
}
