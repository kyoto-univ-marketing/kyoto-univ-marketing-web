import createClient from 'openapi-fetch'

import { paths } from './schema'

const baseUrl = 'https://web-backend-nnxvtvdboa-an.a.run.app/'

export const client = createClient<paths>({
    baseUrl,
})
