/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    experimental: {
        optimizeCss: true,
    },
    images: {
        remotePatterns: [
            { hostname: 'images.microcms-assets.io', pathname: '/assets/**' },
        ],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.kyodaimarketing.com' }],
                destination: 'https://kyodaimarketing.com/:path*',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
