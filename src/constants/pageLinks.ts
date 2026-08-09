interface PageLink {
    href: string
    text: string
    textEng: string
}

/** 各ページへのリンク */
const pageLinks = [
    {
        href: '/',
        text: 'トップページ',
        textEng: 'TOP',
    },
    {
        href: '/about',
        text: '団体概要',
        textEng: 'ABOUT',
    },
    {
        href: '/articles',
        text: '活動記録',
        textEng: 'ARCHIVE',
    },
    {
        href: '/projects',
        text: 'プロジェクト',
        textEng: 'PROJECT',
    },
    {
        href: '/sponsorship',
        text: '企業の方へ',
        textEng: 'SPONSORSHIP',
    },
    {
        href: '/contact',
        text: 'お問い合わせ',
        textEng: 'CONTACT',
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
