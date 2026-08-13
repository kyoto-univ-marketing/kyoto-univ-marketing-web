import { TopContainer } from '../TopContainer/TopContainer'
import { TopPresenterDesktop } from '../TopPresenter/TopPresenterDesktop/TopPresenterDesktop'
import { TopPresenterMobile } from '../TopPresenter/TopPresenterMobile/TopPresenterMobile'

/**
 * トップページ。
 *
 * microCMS の top_message / top_sub_message は使っていない。
 * 「ようこそマーケティングの世界へ」の節を外したため（2026-08-11）。
 */
export const TopPage = async () => {
    return <TopContainer desktop={<TopPresenterDesktop />} mobile={<TopPresenterMobile />} />
}
