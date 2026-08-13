/**
 * 団体概要の下層ページ。
 *
 * ヘッダーのメニューには入れない（ナビは短く保つ方針）。
 * 団体概要ページからの導線とパンくず・サイトマップで拾わせる。
 */
/**
 * 「迫田周大」の検索を受けるページ。
 *
 * ページの題は「設立の経緯」だが、氏名は h2 と title と構造化データに必ず残すこと。
 * 主題が本人であることが消えると、検索で拾われなくなる。
 */
export const aboutFounderPage = {
    href: '/about/founder',
    text: '設立の経緯',
    textEng: 'Origin',
} as const

export const aboutMembersPage = {
    href: '/about/members',
    text: '歴代代表',
    textEng: 'Presidents',
} as const
