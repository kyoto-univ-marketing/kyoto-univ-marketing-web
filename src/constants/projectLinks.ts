import { ProjectLinkItemProps } from '@/components/links/ProjectLinkItem/ProjectLinkItem'

const projectLinks = [
    {
        projectName: 'KULIFE(クライフ)| 京大向けアプリ',
        links: [{ href: 'https://linktr.ee/kulife' }],
    },
    {
        projectName: 'プロジェクト名',
        links: [
            { href: 'https://example.com', label: 'ラベル付きリンク' },
            { href: 'https://example.com', label: '複数リンク設定できます' },
        ],
    },
] as const satisfies ProjectLinkItemProps[]

export default projectLinks
