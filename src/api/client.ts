import createClient from 'openapi-fetch'

import { paths } from './schema'

const baseUrl = 'https://web-backend-nnxvtvdboa-an.a.run.app/' // TODO: 開発環境ではlocalhostに変更する

export const client = createClient<paths>({
    baseUrl,
})
