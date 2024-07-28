import createClient from 'openapi-fetch'

import { paths } from './schema'

if (!process.env.BACKEND_BASE_URL) {
    throw new Error('BACKEND_BASE_URL is not set')
}

export const client = createClient<paths>({
    baseUrl: process.env.BACKEND_BASE_URL,
})
