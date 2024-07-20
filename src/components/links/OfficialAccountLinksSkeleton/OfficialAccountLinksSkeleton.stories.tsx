import { OfficialAccountLinksSkeleton } from './OfficialAccountLinksSkeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: OfficialAccountLinksSkeleton,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {},
    render: (args) => (
        <div className='mx-auto max-w-sm'>
            <OfficialAccountLinksSkeleton {...args} />
        </div>
    ),
} satisfies Meta<typeof OfficialAccountLinksSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
