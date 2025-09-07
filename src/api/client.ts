import createClient from 'openapi-fetch'

import { paths } from './schema'

const baseUrl = 'https://web-backend-1037865983023.asia-northeast1.run.app/' // TODO: 開発環境ではlocalhostに変更する

export const client = createClient<paths>({
    baseUrl,
})
