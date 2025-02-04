import { AvatarProps } from '../../ui/avatar'
import { Logo } from './Logo'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: Logo,
    tags: ['autodocs'],
    args: {
        size: 'md',
    },
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
            },
            options: ['sm', 'md', 'lg', '2xl', '3xl'] satisfies AvatarProps['size'][],
        },
    },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/** 色反転 */
export const Rev: Story = {
    args: {
        reverse: true,
    },
}
