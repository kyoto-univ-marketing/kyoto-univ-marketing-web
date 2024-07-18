import { AboutPage } from './AboutPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: AboutPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
