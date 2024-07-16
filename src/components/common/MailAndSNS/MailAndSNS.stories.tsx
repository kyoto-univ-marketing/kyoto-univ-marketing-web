import { MailAndSNS } from './MailAndSNS'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: MailAndSNS,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof MailAndSNS>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
