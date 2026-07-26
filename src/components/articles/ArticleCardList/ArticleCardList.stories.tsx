import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCardListPresenter } from './ArticleCardListPresenter'

const meta = {
    component: ArticleCardListPresenter,
    tags: ['autodocs'],
    parameters: {},
    args: {
        cardList: [],
        totalPage: 1,
    },
} satisfies Meta<typeof ArticleCardListPresenter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
