import { HamburgerMenu } from './HamburgerMenu'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'HamburgerMenu',
    component: HamburgerMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof HamburgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
