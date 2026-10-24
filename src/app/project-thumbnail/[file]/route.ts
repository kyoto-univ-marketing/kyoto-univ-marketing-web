/**
 * プロジェクトのサムネイルの中継口。
 *
 * Django（Cloud Run）の写真は content-type が application/octet-stream で返り、
 * さらに末尾スラッシュへ転送される。これでは next/image の縮小処理が画像と認めず、
 * 以前は縮めないまま（数MBのまま）表示していた。
 * ここで受け取り直して正しい content-type を付ければ、縮小処理に通せる。
 *
 * 何でも取りに行く中継にならないよう、サムネイルの置き場所の、
 * 画像の拡張子を持つファイルだけを扱う。
 */

const BACKEND = (
    process.env.NEXT_PUBLIC_API_URL ?? 'https://web-backend-1037865983023.asia-northeast1.run.app/'
).replace(/\/$/, '')

const IMAGE_TYPES: Record<string, string> = {
    webp: 'image/webp',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    avif: 'image/avif',
}

export const GET = async (_req: Request, { params }: { params: Promise<{ file: string }> }) => {
    const { file } = await params
    const ext = file.split('.').pop()?.toLowerCase() ?? ''
    const type = IMAGE_TYPES[ext]
    if (!type || file.includes('/') || file.includes('..')) {
        return new Response(null, { status: 404 })
    }

    // 末尾スラッシュ付きが Django の正規のURL。付けておけば転送を一回省ける
    const res = await fetch(`${BACKEND}/media/db/project/thumbnail/${encodeURIComponent(file)}/`)
    if (!res.ok || !res.body) {
        return new Response(null, { status: 404 })
    }

    return new Response(res.body, {
        headers: {
            'Content-Type': type,
            // 写真は差し替えるとファイル名が変わる（Django が別名で保存する）ので、長めに持たせてよい
            'Cache-Control': 'public, max-age=86400, s-maxage=604800',
        },
    })
}
