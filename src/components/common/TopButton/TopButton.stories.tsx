import type { Meta, StoryObj } from '@storybook/react'
import { TopButton } from './TopButton'

const meta = {
    component: TopButton,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof TopButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
