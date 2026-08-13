import type { Meta, StoryObj } from '@storybook/react'
import { HamburgerMenu } from './HamburgerMenu'

const meta = {
    component: HamburgerMenu,
    tags: ['autodocs'],
    args: {
        instagramUrl: 'https://www.instagram.com/kyotouniv_marketing/',
        mailAddress: 'kyoto.univ.marketing@gmail.com',
    },
} satisfies Meta<typeof HamburgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
