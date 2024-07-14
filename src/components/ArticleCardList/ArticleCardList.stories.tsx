import { ArticleCardList } from './ArticleCardList'

import type { Meta, StoryObj } from '@storybook/react'

const card1 = {
    title: '第◯回勉強会',
    slug: 'study-1',
    date: new Date(),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
    tag: '勉強会',
} as const
const card2 = {
    title: '長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル',
    slug: 'event-1',
    date: new Date(),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
    tag: 'イベント',
} as const

const meta = {
    title: 'ArticleCardList',
    component: ArticleCardList,
    tags: ['autodocs'],
    args: {
        cardList: [card1, card1, card2, card1],
    },
} satisfies Meta<typeof ArticleCardList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <div className='max-w-[600px]'>
            <ArticleCardList {...args} />
        </div>
    ),
}
