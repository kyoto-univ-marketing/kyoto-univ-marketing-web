import { OfficialAccountLinks } from './OfficialAccountLinks'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: OfficialAccountLinks,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof OfficialAccountLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
