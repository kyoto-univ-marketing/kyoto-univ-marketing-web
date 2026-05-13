import type { Meta, StoryObj } from '@storybook/react'
import { OfficialAccountLinks } from './OfficialAccountLinks'

const meta = {
    component: OfficialAccountLinks,
    tags: ['autodocs'],
    parameters: {},
    args: {
        xUrl: 'https://twitter.com/ku__marketing/',
        instagramUrl: 'https://www.instagram.com/kyotouniv_marketing/',
    },
} satisfies Meta<typeof OfficialAccountLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
