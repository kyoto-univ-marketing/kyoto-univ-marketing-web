import type { MetadataRoute } from 'next'

import profile from '@/constants/profile'
import { getActivityIds } from '@/lib/microcms'

const baseUrl = profile.homepageUrl

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
        { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' },
        // 「迫田周大」検索の受け皿。団体概要から移したばかりなので、優先度を高めに置く
        { url: `${baseUrl}/about/founder`, priority: 0.9, changeFrequency: 'yearly' },
        { url: `${baseUrl}/about/members`, priority: 0.7, changeFrequency: 'yearly' },
        { url: `${baseUrl}/projects`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${baseUrl}/articles`, priority: 0.8, changeFrequency: 'weekly' },
        { url: `${baseUrl}/join`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${baseUrl}/sponsorship`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: 'yearly' },
    ]

    try {
        const articleIds = await getActivityIds()
        const articleRoutes: MetadataRoute.Sitemap = articleIds.map((id) => ({
            url: `${baseUrl}/articles/${id}`,
            priority: 0.7,
            changeFrequency: 'monthly',
        }))
        return [...staticRoutes, ...articleRoutes]
    } catch {
        return staticRoutes
    }
}
