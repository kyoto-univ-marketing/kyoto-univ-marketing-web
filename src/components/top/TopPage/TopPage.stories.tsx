import type { Meta, StoryObj } from '@storybook/react'
import { TopPage } from './TopPage'

const meta = {
    component: TopPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TopPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
