/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true,
        ppr: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: '*',
            },
        ],
    },
    output: 'standalone',
}

export default nextConfig
