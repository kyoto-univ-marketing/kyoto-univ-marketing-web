/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '*',
            },
        ],
    },
    output: 'standalone',
    experimental: {
        ppr: 'incremental',
    },
}

export default nextConfig
