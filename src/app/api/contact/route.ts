import { type NextRequest, NextResponse } from 'next/server'

import { contactFormSchema } from '@/components/contact/ContactForm/schema'

const url = process.env.CONTACT_FORM_API_URL // 環境変数に設定したURL
if (!url) {
    throw new Error('CONTACT_FORM_API_URL is not defined')
}
export const POST = async (req: NextRequest) => {
    const data = contactFormSchema.parse(await req.json())
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(async (res) => {
            if (!res.ok) {
                throw new Error('送信に失敗しました')
            }
            const data = await res.json()
            if (data.isSuccess) {
                return NextResponse.json({ message: '送信に成功しました' }, { status: 200 })
            } else {
                return NextResponse.json({ message: data.message ?? '送信に失敗しました' }, { status: 400 })
            }
        })
        .catch((e) => {
            if (e instanceof Error) {
                return NextResponse.json({ message: e.message }, { status: 500 })
            } else {
                return NextResponse.json({ message: '送信に失敗しました' }, { status: 500 })
            }
        })
}
