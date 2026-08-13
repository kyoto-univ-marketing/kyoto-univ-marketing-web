interface PageLink {
    href: string
    text: string
    /** pageLinkObject のキーになる。表示には使わないこと */
    textEng: string
    /**
     * 画面に出す欧文ラベル。
     * textEng は ARCHIVE・PROJECT のように古い言い方のまま固定されており、
     * キーとして各所から参照しているので変えられない。表示用は別に持つ。
     */
    en: string
}

/** 各ページへのリンク */
const pageLinks = [
    {
        href: '/',
        text: 'トップページ',
        textEng: 'TOP',
        en: 'Top',
    },
    {
        href: '/about',
        text: '団体概要',
        textEng: 'ABOUT',
        en: 'About',
    },
    {
        href: '/articles',
        text: 'お知らせ',
        textEng: 'ARCHIVE',
        en: 'News',
    },
    {
        href: '/projects',
        text: '活動内容',
        textEng: 'PROJECT',
        en: 'Activities',
    },
    {
        href: '/join',
        text: '入会をお考えの方へ',
        textEng: 'JOIN',
        en: 'Join Us',
    },
    {
        href: '/sponsorship',
        text: '企業の方へ',
        textEng: 'SPONSORSHIP',
        en: 'Sponsorship',
    },
    {
        href: '/contact',
        text: 'お問い合わせ',
        textEng: 'CONTACT',
        en: 'Contact',
    },
] as const satisfies PageLink[]

export default pageLinks

type PageLinkKeys = (typeof pageLinks)[number]['textEng']

export const pageLinkObject: { [K in PageLinkKeys]: Extract<(typeof pageLinks)[number], { textEng: K }> } =
    pageLinks.reduce(
        (acc, pageLink) => {
            return { ...acc, [pageLink.textEng]: pageLink }
        },
        {} as { [K in PageLinkKeys]: Extract<(typeof pageLinks)[number], { textEng: K }> },
    )
