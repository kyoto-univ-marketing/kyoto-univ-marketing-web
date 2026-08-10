import makeHouse from '../../../public/page-images/makehouse-hero.webp'
import img3767 from '../../../public/top-header/IMG_3767.webp'
import img3816 from '../../../public/top-header/IMG_3816.webp'
import img3878 from '../../../public/top-header/IMG_3878.webp'
import img6855 from '../../../public/top-header/IMG_6855.webp'
import img9802 from '../../../public/top-header/IMG_9802.webp'

/**
 * ヒーローで順に表示する写真。
 * 先頭は活動拠点マーケハウス。京都の風景写真だけだと観光サイトに見えてしまい、
 * 「この団体のサイト」であることが伝わらないため。
 *
 * マーケハウスだけ hero 用に正方形へ切り出してある。縦長のままだと
 * ほぼ正方形の枠で object-cover したときに下の看板（京大マーケティング研究所）が切れるため。
 */
export const topHeaderImageList = [
    // 画面の高さによっては上下が切られるので、看板のある下寄りを基準に表示する
    { ...makeHouse, objectPosition: 'center 80%' },
    img3878,
    img3767,
    img3816,
    img6855,
    img9802,
]
