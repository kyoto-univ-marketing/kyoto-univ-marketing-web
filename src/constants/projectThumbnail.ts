import Campus from '@/../public/page-images/projects/campus.webp'
import Festival from '@/../public/page-images/projects/festival.webp'
import KyotoCulture from '@/../public/page-images/projects/kyoto-culture.webp'
import NewBusiness from '@/../public/page-images/projects/new-business.webp'
import Pitch from '@/../public/page-images/projects/pitch.webp'
import WebMarketing from '@/../public/page-images/projects/web-marketing.webp'

/**
 * 写真が用意できていないプロジェクトの差し替え画像。
 *
 * 管理画面には単色の画像が登録されている。ファイル名で見分けようとすると
 * 「1728444114-oBqWAITtkbaYwROcm3lhy47e.webp」のようなハッシュ名を取りこぼすため、
 * **プロジェクト名で明示的に指定する**方式にしている。
 * 単色画像を新しく登録した場合は、ここに1行足すこと。
 *
 * 素材はすべて Unsplash（Unsplash License：商用利用可・帰属表示不要）。
 * 管理画面で本物の写真を登録すれば、ここから名前を消すだけで切り替わる。
 */
const fallbackByName: Record<string, typeof Festival> = {
    NF2025: Festival,
    インバウンド向け文化体験事業: KyotoCulture,
    WEBマーケティング支援: WebMarketing,
    知財ビジコン: Pitch,
    新規事業開発: NewBusiness,
    京大キャンパスツアー: Campus,
}

export const getFallbackImage = (name: string) => fallbackByName[name]
