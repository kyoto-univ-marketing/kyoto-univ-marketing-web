import { TopButton } from './TopButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: TopButton,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof TopButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
