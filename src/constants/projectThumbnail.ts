import Festival from '@/../public/page-images/projects/festival.webp'
import KyotoCulture from '@/../public/page-images/projects/kyoto-culture.webp'
import NewBusiness from '@/../public/page-images/projects/new-business.webp'
import Pitch from '@/../public/page-images/projects/pitch.webp'
import WebMarketing from '@/../public/page-images/projects/web-marketing.webp'

/**
 * 写真が用意できていないプロジェクトには、管理画面で単色の画像が登録されている。
 * そのまま出すと色の面が並ぶだけになるので、内容に合うフリー素材を代わりに出す。
 *
 * 素材はすべて Unsplash（Unsplash License：商用利用可・帰属表示不要）。
 * 差し替えたい場合は、管理画面でそのプロジェクトに写真を登録すれば自動的にそちらが出る。
 */
const placeholderPattern = /(黄色|深紅|緑|水色|深紫|青|赤|橙|桃)\.(webp|jpe?g|png)$/

export const isPlaceholderThumbnail = (url: string) => {
    try {
        return placeholderPattern.test(decodeURIComponent(url))
    } catch {
        // 不正なエスケープが含まれる URL は判定せず、そのまま表示させる
        return false
    }
}

/**
 * プロジェクト名ごとの差し込み写真。
 * 名前が変わったら（ここに載っていない名前になったら）末尾の既定の写真が出る。
 */
const fallbackByName: Record<string, typeof Festival> = {
    NF2025: Festival,
    インバウンド向け文化体験事業: KyotoCulture,
    WEBマーケティング支援: WebMarketing,
    知財ビジコン: Pitch,
    新規事業開発: NewBusiness,
}

const defaultFallbacks = [NewBusiness, WebMarketing, Pitch, Festival, KyotoCulture]

export const getFallbackImage = (name: string, order: number) =>
    fallbackByName[name] ?? defaultFallbacks[order % defaultFallbacks.length]
