import createClient from 'openapi-fetch'

import { paths } from './schema'

const baseUrl =
    process.env.NEXT_PUBLIC_API_URL ?? 'https://web-backend-1037865983023.asia-northeast1.run.app/'

export const client = createClient<paths>({
    baseUrl,
})
