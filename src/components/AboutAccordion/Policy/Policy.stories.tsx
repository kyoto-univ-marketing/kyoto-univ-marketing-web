import { Policy } from './Policy'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: Policy,
    tags: ['autodocs'],
} satisfies Meta<typeof Policy>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
