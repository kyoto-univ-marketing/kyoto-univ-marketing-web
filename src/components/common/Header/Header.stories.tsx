import { Header } from './Header'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: Header,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
