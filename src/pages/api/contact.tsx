import { contactFormSchema } from '@/components/ContactForm/ContactForm'

import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const url = process.env.CONTACT_FORM_API_URL // 環境変数に設定したURL
    if (!url) {
        throw new Error('CONTACT_FORM_API_URL is not defined')
    }
    const { body } = req
    const data = contactFormSchema.parse(body)
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((fetchRes) => fetchRes.json())
        .then((data) => {
            if (data.isSuccess) {
                res.status(200).json({ message: '送信に成功しました' })
            } else {
                res.status(400).json({ message: data.message ?? '送信に失敗しました' })
            }
        })
        .catch((e) => {
            if (e instanceof Error) {
                res.status(500).json({ message: e.message })
            } else {
                res.status(500).json({ message: '送信に失敗しました' })
            }
        })
}
