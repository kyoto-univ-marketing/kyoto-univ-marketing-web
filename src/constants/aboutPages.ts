/**
 * 団体概要の下層ページ。
 *
 * ヘッダーのメニューには入れない（ナビは短く保つ方針）。
 * 団体概要ページからの導線とパンくず・サイトマップで拾わせる。
 */
/**
 * 「迫田周大」の検索を受けるページ。
 *
 * 題に氏名は入れない（団体の下層ページが個人のページに見えてしまうため）。
 * その代わり、氏名は h2 と title と構造化データに必ず残すこと。
 * 主題が本人であることが消えると、検索で拾われなくなる。
 *
 * 「設立の経緯」から改題した。経緯は事実の経過を指す言葉で、
 * 中身（創設者の思想の語り）と合っていなかった。
 */
export const aboutFounderPage = {
    href: '/about/founder',
    text: '創設者の言葉',
    textEng: 'Founder',
} as const

export const aboutMembersPage = {
    href: '/about/members',
    text: '歴代代表',
    textEng: 'Presidents',
} as const
