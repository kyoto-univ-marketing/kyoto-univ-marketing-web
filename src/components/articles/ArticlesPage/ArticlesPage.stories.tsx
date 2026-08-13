import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPage } from './ArticlesPage'

const meta = {
    component: ArticlesPage,
    tags: ['autodocs'],
    parameters: {},
    args: {
        searchParams: Promise.resolve({ page: '1' }),
    },
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
