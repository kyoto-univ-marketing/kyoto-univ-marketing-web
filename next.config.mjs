/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    experimental: {
        optimizeCss: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: '*',
            },
        ],
    },
}

export default nextConfig
