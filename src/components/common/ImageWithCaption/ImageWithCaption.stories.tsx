import { ImageWithCaption } from './ImageWithCaption'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: ImageWithCaption,
    tags: ['autodocs'],
    parameters: {},
    args: {
        src: 'https://via.placeholder.com/200',
        alt: 'キャプションを追加できます',
        width: 200,
        height: 200,
    },
} satisfies Meta<typeof ImageWithCaption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
