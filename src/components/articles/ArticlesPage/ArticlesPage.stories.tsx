import { ArticlesPage } from './ArticlesPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ArticlesPage,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
