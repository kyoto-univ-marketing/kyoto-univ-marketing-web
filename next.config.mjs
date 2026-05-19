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
}

export default nextConfig
