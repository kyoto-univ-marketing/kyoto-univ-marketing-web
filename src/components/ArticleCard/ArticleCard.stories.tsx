import { ArticleCard } from './ArticleCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ArticleCard',
    component: ArticleCard,
    tags: ['autodocs'],
    args: {
        title: '第◯回勉強会',
        slug: 'study-1',
        date: new Date(),
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
    },
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
