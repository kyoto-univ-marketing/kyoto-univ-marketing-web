import kakejiku from '../../../public/page-images/kakejiku.webp'
import makeHouse from '../../../public/page-images/makehouse.webp'
import img3767 from '../../../public/top-header/IMG_3767.webp'
import img3816 from '../../../public/top-header/IMG_3816.webp'
import img3878 from '../../../public/top-header/IMG_3878.webp'
import img6855 from '../../../public/top-header/IMG_6855.webp'
import img9802 from '../../../public/top-header/IMG_9802.webp'

/**
 * ヒーローで順に表示する写真。
 * 先頭は活動拠点マーケハウス。京都の風景写真だけだと観光サイトに見えてしまい、
 * 「この団体のサイト」であることが伝わらないため。
 */

/**
 * PC用。マーケハウスは縦長の写真なので、横長の枠に1枚で入れると
 * 家の全体か下の看板（京大マーケティング研究所）のどちらかが必ず切れる。
 * 枠を2つに割って掛け軸と並べ、どちらも切らずに見せている。
 */
export const topHeaderImageListDesktop = [
    { ...makeHouse, alt: '', secondary: kakejiku },
    img3878,
    img3767,
    img3816,
    img6855,
    img9802,
]

/**
 * モバイル用。枠が縦長なのでマーケハウスは1枚のままで全体が収まる。
 * 画面が横長寄りになったときに看板が切れないよう、下寄りを基準に表示する。
 */
export const topHeaderImageList = [
    { ...makeHouse, objectPosition: 'center 90%' },
    img3878,
    img3767,
    img3816,
    img6855,
    img9802,
]
