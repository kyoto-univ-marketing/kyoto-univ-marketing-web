import { TopContainer } from './TopContainer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: TopContainer,
    tags: ['autodocs'],
    parameters: {},
    args: {
        children: 'children',
        isDesktop: true,
    },
} satisfies Meta<typeof TopContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
