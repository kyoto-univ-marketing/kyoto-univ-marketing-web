/** @type {import('next').NextConfig} */
const nextConfig = {
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
