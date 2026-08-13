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
        /*
         * 送信先が失敗を返したときは、必ず中身をログに残す。
         * 以前はここで理由を捨てていたため、問い合わせが届かなくなっても
         * 「送信に失敗しました」としか分からず、原因を追えなかった。
         * 本文は先頭だけ。送信先が HTML のエラーページを返すことがあり、全部載せると読めない。
         */
        if (!res.ok) {
            /*
             * 送信先は環境変数なので、どこに送っているかはログからしか分からない。
             * 認証情報が混じりうる path や query は載せず、ホスト名だけ残す。
             */
            console.error('[contact] 送信先がエラーを返しました', {
                host: new URL(url).host,
                status: res.status,
                body: (await res.text()).replace(/<style[\s\S]*?<\/style>/g, '').slice(0, 1500),
            })
            throw new Error('送信に失敗しました')
        }
        const result = await res.json()
        if (result.isSuccess) {
            return NextResponse.json({ message: '送信に成功しました' }, { status: 200 })
        }
        console.error('[contact] 送信先が成功を返しませんでした', result)
        return NextResponse.json({ message: result.message ?? '送信に失敗しました' }, { status: 400 })
    } catch (e) {
        // 送信先に届かなかった場合（URLが無効・名前解決できない等）もここに来る
        console.error('[contact] 送信できませんでした', e)
        const message = e instanceof Error ? e.message : '送信に失敗しました'
        return NextResponse.json({ message }, { status: 500 })
    }
}
