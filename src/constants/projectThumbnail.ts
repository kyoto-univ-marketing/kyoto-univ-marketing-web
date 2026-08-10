import img3767 from '@/../public/top-header/IMG_3767.webp'
import img3816 from '@/../public/top-header/IMG_3816.webp'
import img3878 from '@/../public/top-header/IMG_3878.webp'
import img6855 from '@/../public/top-header/IMG_6855.webp'
import img9802 from '@/../public/top-header/IMG_9802.webp'

/**
 * 写真が用意できていないプロジェクトには、管理画面で単色の画像が登録されている。
 * そのまま出すと色の面が並ぶだけになるので、団体の写真を代わりに敷く。
 *
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
 * 差し込む写真。
 * 「そのプロジェクトを写した写真」と誤解されないよう、表示側で紺をかぶせて使う。
 */
export const projectFallbackImages = [img3878, img3767, img3816, img6855, img9802]
