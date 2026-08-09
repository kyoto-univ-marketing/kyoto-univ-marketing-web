/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    experimental: {
        optimizeCss: true,
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
