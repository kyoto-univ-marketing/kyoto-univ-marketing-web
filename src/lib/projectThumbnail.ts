/**
 * プロジェクトのサムネイルを、サイト内の中継口（/project-thumbnail/…）のURLに置き換える。
 *
 * Django が返す写真は「画像だ」という札（content-type）が付いておらず、
 * 末尾スラッシュへの転送も挟まるため、そのままでは next/image の縮小処理に通せない。
 * 中継口で札を付け直してから渡すと、端末に合った大きさに縮めて配信できる。
 *
 * サムネイルの置き場所以外のURLが来たときは null を返す（呼び出し側で素のまま出す）。
 */
const THUMBNAIL_DIR = '/media/db/project/thumbnail/'

export const PROJECT_THUMBNAIL_ROUTE = '/project-thumbnail/'

export const toProjectThumbnailSrc = (url: string): string | null => {
    if (!URL.canParse(url)) return null
    const { pathname } = new URL(url)
    if (!pathname.startsWith(THUMBNAIL_DIR)) return null
    const file = pathname.slice(THUMBNAIL_DIR.length).replace(/\/$/, '')
    // 一段だけのファイル名に限る。フォルダをさかのぼる指定は通さない
    if (!file || file.includes('/')) return null
    return `${PROJECT_THUMBNAIL_ROUTE}${file}`
}
