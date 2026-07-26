import type { Meta, StoryObj } from '@storybook/react'
import { TopPresenterDesktop } from './TopPresenterDesktop'

const meta = {
    component: TopPresenterDesktop,
    tags: ['autodocs'],
    parameters: {},
    args: {
        message: 'message',
        subMessage: 'subMessage',
    },
} satisfies Meta<typeof TopPresenterDesktop>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
