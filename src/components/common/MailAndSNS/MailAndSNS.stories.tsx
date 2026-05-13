import type { Meta, StoryObj } from '@storybook/react'
import { MailAndSNS } from './MailAndSNS'

const meta = {
    component: MailAndSNS,
    tags: ['autodocs'],
    parameters: {},
    args: {
        xUrl: 'https://twitter.com/ku__marketing/',
        instagramUrl: 'https://www.instagram.com/kyotouniv_marketing/',
        mailAddress: 'kyoto.univ.marketing@gmail.com',
    },
} satisfies Meta<typeof MailAndSNS>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
