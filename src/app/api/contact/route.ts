import { type NextRequest, NextResponse } from 'next/server'

import { contactFormSchema } from '@/components/contact/ContactForm/schema'

const url = process.env.CONTACT_FORM_API_URL
if (!url) {
    throw new Error('CONTACT_FORM_API_URL is not defined')
}

export const POST = async (req: NextRequest) => {
    const data = contactFormSchema.parse(await req.json())

    if (data.website) {
        return NextResponse.json({ message: '送信に成功しました' }, { status: 200 })
    }

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        if (!res.ok) {
            throw new Error('送信に失敗しました')
        }
        const result = await res.json()
        if (result.isSuccess) {
            return NextResponse.json({ message: '送信に成功しました' }, { status: 200 })
        }
        return NextResponse.json({ message: result.message ?? '送信に失敗しました' }, { status: 400 })
    } catch (e) {
        const message = e instanceof Error ? e.message : '送信に失敗しました'
        return NextResponse.json({ message }, { status: 500 })
    }
}
