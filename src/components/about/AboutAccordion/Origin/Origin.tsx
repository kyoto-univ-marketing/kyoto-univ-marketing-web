import Image from 'next/image'
import { FC } from 'react'

import OriginImg from '@/../public/page-images/about/origin.webp'
import { client } from '@/api/client'

export interface OriginProps {}

export const Origin: FC<OriginProps> = async ({ ...props }) => {
    const { data } = await client.GET('/api/text/{id}/', { params: { path: { id: 'origin' } } })
    const originText = data?.text ?? ''
    if (!originText) {
        console.error("Couldn't get origin text")
    }
    return (
        <>
            <Image {...OriginImg} alt='集合写真' className='mb-12' />
            <div className='space-y-8 p-4'>
                {originText.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
        </>
    )
}
