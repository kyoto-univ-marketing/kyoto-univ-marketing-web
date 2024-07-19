import {
    ClientEndPoints,
    createClient,
    MicroCMSContentId,
    MicroCMSDate,
    MicroCMSGetListDetailResponse,
    MicroCMSGetListResponse,
    MicroCMSImage,
} from 'microcms-ts-sdk'

import { activityTagList } from '@/constants/activity'
import { mockActivities } from '@/mocks/activities'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required')
}

export type Activity = Required<MicroCMSDate> &
    MicroCMSContentId & {
        title: string
        description: string
        thumbnail: MicroCMSImage
        content: string
        tag: [(typeof activityTagList)[number]]
    }

interface Endpoints extends ClientEndPoints {
    list: {
        activities: Activity
    }
}

/** microCMSのクライアント */
export const client = createClient<Endpoints>({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
})

/** 活動記録のリストを取得する */
export const getActivityList = async (option?: {
    limit?: number
    offset?: number
    tag?: string
}): Promise<MicroCMSGetListResponse<Endpoints, { endpoint: 'activities' }>> => {
    if (process.env.NODE_ENV === 'development') {
        // 開発環境の場合はモックデータを返す
        const res = {
            contents: mockActivities
                .filter((ac) => !option?.tag || ac.tag[0] === option.tag)
                .slice(option?.offset ?? 0, (option?.offset ?? 0) + (option?.limit ?? mockActivities.length)),
            totalCount: mockActivities.filter((ac) => !option?.tag || ac.tag[0] === option.tag).length,
            offset: option?.offset ?? 0,
            limit: option?.limit ?? mockActivities.length,
        } satisfies MicroCMSGetListResponse<Endpoints, { endpoint: 'activities' }>
        return res
    }

    // 本番環境の場合はmicroCMSからデータを取得する
    const res = await client
        .getList({
            endpoint: 'activities',
            queries: {
                limit: option?.limit,
                offset: option?.offset,
                filters: option?.tag ? `tag[contains]${option.tag}` : undefined,
            },
        })
        .catch((e) => {
            console.error(e)
            throw e
        })
    return res
}

/** 活動記録の詳細を取得する */
export const getActivityById = async (
    id: string,
): Promise<MicroCMSGetListDetailResponse<Endpoints, { endpoint: 'activities'; contentId: string }>> => {
    if (process.env.NODE_ENV === 'development') {
        // 開発環境の場合はモックデータを返す
        const activity = mockActivities.find((activity) => activity.id === id)
        if (!activity) {
            throw new Error('Activity not found')
        }
        return activity
    }

    // 本番環境の場合はmicroCMSからデータを取得する
    const res = await client
        .getListDetail({
            endpoint: 'activities',
            contentId: id,
        })
        .catch((e) => {
            console.error(e)
            throw e
        })
    return res
}

/** 活動記録のIDを全件取得する */
export const getActivityIds = async (): Promise<string[]> => {
    if (process.env.NODE_ENV === 'development') {
        // 開発環境の場合はモックデータを返す
        return mockActivities.map((activity) => activity.id)
    }

    // 本番環境の場合はmicroCMSからデータを取得する
    const res = await client
        .getAllContentIds({
            endpoint: 'activities',
            orders: '-publishedAt',
        })
        .catch((e) => {
            console.error(e)
            throw e
        })
    return res
}
