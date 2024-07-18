import { BackButton } from './BackButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: BackButton,
    tags: ['autodocs'],
    parameters: {},
    args: {
        children: '戻る',
    },
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
