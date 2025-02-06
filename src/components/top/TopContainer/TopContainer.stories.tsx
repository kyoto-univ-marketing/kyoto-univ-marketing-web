import { TopContainer } from './TopContainer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: TopContainer,
    tags: ['autodocs'],
    parameters: {},
    args: {
        mobile: 'mobile',
        desktop: 'desktop',
    },
} satisfies Meta<typeof TopContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
