/** @type {import('next').NextConfig} */
const nextConfig = {
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
