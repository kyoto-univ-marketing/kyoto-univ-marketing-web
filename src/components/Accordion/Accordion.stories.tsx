import { Accordion } from './Accordion'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    component: Accordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        items: [
            { value: 'item1', title: 'Item 1', content: 'Content 1' },
            { value: 'item2', title: 'Item 2', content: 'Content 2' },
            { value: 'item3', title: 'Item 3', content: 'Content 3' },
        ],
    },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <div className='p-8'>
            <Accordion {...args} />
        </div>
    ),
}
