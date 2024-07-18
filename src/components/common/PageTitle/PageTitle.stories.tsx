import { PageTitle } from './PageTitle'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: PageTitle,
    tags: ['autodocs'],
    parameters: {},
    args: {
        children: 'タイトル',
    },
} satisfies Meta<typeof PageTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
