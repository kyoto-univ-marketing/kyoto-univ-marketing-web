import { RedirectCountDown } from './RedirectCountDown'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: RedirectCountDown,
    tags: ['autodocs'],
    parameters: {},
    args: {
        duration: 5,
    },
} satisfies Meta<typeof RedirectCountDown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
