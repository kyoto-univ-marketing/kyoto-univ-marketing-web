import fs from 'fs'
import path from 'path'

import { ImageResponse } from 'next/og'

import profile from '@/constants/profile'

// Image metadata
export const alt = '京大マーケティング研究所'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : profile.homepageUrl
    const logoUrl = baseUrl + '/logo.png'
    const logoSize = 250
    const fontData = fs.readFileSync(path.join(process.cwd(), 'public/HinaMincho-Regular.ttf'))

    return new ImageResponse(
        <div
            style={{
                fontFamily: 'Hina Mincho',
                color: '#00215b',
            }}
            tw='bg-white w-full h-full flex items-center justify-center'
        >
            <img height={logoSize} src={logoUrl.toString()} tw='mr-12' width={logoSize} />
            <p tw='text-6xl'>京大マーケティング研究所</p>
        </div>,
        // ImageResponse options
        {
            ...size,
            fonts: [
                {
                    name: 'Hina Mincho',
                    data: fontData,
                },
            ],
        },
    )
}
