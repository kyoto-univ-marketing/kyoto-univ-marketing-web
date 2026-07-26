import type { Meta, StoryObj } from '@storybook/react'
import { PageImage } from './PageImage'

const meta = {
    component: PageImage,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {
        src: 'https://via.placeholder.com/1920x1080.jpg',
        alt: 'Placeholder image',
    },
} satisfies Meta<typeof PageImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
