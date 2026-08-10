import type { Meta, StoryObj } from '@storybook/react'
import { AboutPage } from './AboutPage'

const meta = {
    component: AboutPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        outlineText:
            '「京大マーケティング研究所」は2024年3月に設立されました。初年度に入会した部員を立ち上げの一期生として、多様な方面に活動の幅を広げてきました。',
    },
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
