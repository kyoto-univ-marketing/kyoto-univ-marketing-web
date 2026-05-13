import type { MetadataRoute } from 'next'
import profile from '@/constants/profile'
import { getActivityIds } from '@/lib/microcms'

const baseUrl = profile.homepageUrl

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
        { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' },
        { url: `${baseUrl}/projects`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${baseUrl}/articles`, priority: 0.8, changeFrequency: 'weekly' },
        { url: `${baseUrl}/links`, priority: 0.5, changeFrequency: 'monthly' },
        { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: 'yearly' },
    ]

    const articleIds = await getActivityIds()
    const articleRoutes: MetadataRoute.Sitemap = articleIds.map((id) => ({
        url: `${baseUrl}/articles/${id}`,
        priority: 0.7,
        changeFrequency: 'monthly',
    }))

    return [...staticRoutes, ...articleRoutes]
}
