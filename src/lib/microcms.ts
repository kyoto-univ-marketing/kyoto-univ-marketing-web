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

import pick from './pick'

const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = process.env

if (!MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!MICROCMS_API_KEY) {
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
    serviceDomain: MICROCMS_SERVICE_DOMAIN,
    apiKey: MICROCMS_API_KEY,
    retry: true,
})

interface GetActivityListResponse<T extends (keyof Activity)[]>
    extends Omit<MicroCMSGetListResponse<Endpoints, { endpoint: 'activities' }>, 'contents'> {
    contents: Pick<Activity, T[number]>[]
}

/** 活動記録のリストを取得する */
export const getActivityList = async <Fields extends (keyof Activity)[]>(option?: {
    limit?: number
    offset?: number
    tag?: string
    fields?: Fields
}): Promise<GetActivityListResponse<Fields>> => {
    if (process.env.NODE_ENV === 'development') {
        // 開発環境の場合はモックデータを返す

        // 1秒待ってから返す
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const res = {
            contents: mockActivities
                .filter((ac) => !option?.tag || ac.tag[0] === option.tag)
                .slice(option?.offset ?? 0, (option?.offset ?? 0) + (option?.limit ?? mockActivities.length))
                .map((ac) => (option?.fields ? pick(ac, ...option.fields) : ac)),
            totalCount: mockActivities.filter((ac) => !option?.tag || ac.tag[0] === option.tag).length,
            offset: option?.offset ?? 0,
            limit: option?.limit ?? mockActivities.length,
        } satisfies GetActivityListResponse<Fields>
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
                orders: '-publishedAt',
                fields: option?.fields,
            },
        })
        .catch((e) => {
            console.error('Error on getActivityList')
            throw e
        })
    return res as GetActivityListResponse<Fields>
}

/** 活動記録の詳細を取得する */
export const getActivityById = async (
    id: string,
    draftKey?: string,
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
            queries: { draftKey },
        })
        .catch((e) => {
            console.error('Error on getActivityById')
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
        .catch(async (e) => {
            const url = new URL(`https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/activities`)
            url.searchParams.set('fields', 'id')
            const res = await fetch(url, {
                headers: { 'X-MICROCMS-API-KEY': MICROCMS_API_KEY },
            })
            console.error('Error on getActivityIds')
            if (!res.ok) {
                console.error(await res.text())
            } else {
                console.log(await res.json())
                console.log(
                    'Error occurred on fetching data by microcms-ts-sdk. However Error did not occur on fetch function.',
                )
            }
            throw e
        })
    return res
}

/** 最新記事のリストを取得する */
export const getLatestActivityList = async (limit: number) => {
    return getActivityList({ limit, fields: ['title', 'publishedAt', 'id'] })
}
