import type { Meta, StoryObj } from '@storybook/react'
import { LatestArticles } from './LatestArticles'

const meta = {
    component: LatestArticles,
    tags: ['autodocs'],
    args: {
        articleList: [
            {
                title: '記事タイトル1',
                date: '2024/01/01',
                id: 'sample1',
            },
            {
                title: '記事タイトル2',
                date: '2024/01/02',
                id: 'sample2',
            },
            {
                title: '記事タイトル3記事タイトル3記事タイトル3',
                date: '2024/01/03',
                id: 'sample3',
            },
        ],
    },
} satisfies Meta<typeof LatestArticles>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
