import { TopPresenterMobile } from './TopPresenterMobile'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: TopPresenterMobile,
    tags: ['autodocs'],
    parameters: {},
    args: {
        message: 'message',
        subMessage: 'subMessage',
    },
} satisfies Meta<typeof TopPresenterMobile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
