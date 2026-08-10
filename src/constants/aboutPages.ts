/**
 * 団体概要の下層ページ。
 *
 * ヘッダーのメニューには入れない（ナビは短く保つ方針）。
 * 団体概要ページからの導線とパンくず・サイトマップで拾わせる。
 */
export const aboutFounderPage = {
    href: '/about/founder',
    text: '創設者',
    textEng: 'Founder',
} as const

export const aboutMembersPage = {
    href: '/about/members',
    text: '歴代代表',
    textEng: 'Presidents',
} as const
