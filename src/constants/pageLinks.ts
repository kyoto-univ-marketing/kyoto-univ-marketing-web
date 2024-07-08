/** 各ページへのリンク */
export default [
    {
        href: '/',
        text: 'ホーム',
    },
    {
        href: '/about',
        text: 'サークルについて',
    },
    {
        href: '/articles',
        text: '活動記録',
    },
    {
        href: '/projects',
        text: 'プロジェクト',
    },
    {
        href: '/links',
        text: 'リンク集',
    },
    {
        href: '/contact',
        text: 'お問い合わせ',
    },
] as const satisfies { href: string; text: string }[]
