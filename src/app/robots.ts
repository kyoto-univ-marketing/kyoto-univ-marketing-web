import type { MetadataRoute } from 'next'

/**
 * 以前は /_next/static/media/ を拒否していたが外している。
 * ここには静的に読み込んでいる写真が入るため、拒否すると画像検索に載らない。
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://kyodaimarketing.com/sitemap.xml',
    }
}
