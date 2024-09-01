
import { ArticleCardList } from './ArticleCardList'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ArticleCardList,
    tags: ['autodocs'],
    args: {
        page: 0,
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
