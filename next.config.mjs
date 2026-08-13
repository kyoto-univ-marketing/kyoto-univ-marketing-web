/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    experimental: {
        optimizeCss: true,
    },
    /**
     * 改修で無くなったページの受け皿。
     * 検索結果に残っているURLをそのまま404にすると、そこまでの評価を捨てることになる。
     */
    async redirects() {
        return [
            // リンク集は廃止し、SNSはフッターに集約した
            { source: '/links', destination: '/', permanent: true },
        ]
    },
    images: {
        remotePatterns: [
            { hostname: 'images.microcms-assets.io', pathname: '/assets/**' },
            // プロジェクトのサムネイルは Django（Cloud Run）が配信している
            {
                protocol: 'https',
                hostname: 'web-backend-1037865983023.asia-northeast1.run.app',
                pathname: '/media/**',
            },
        ],
    },
}

export default nextConfig
