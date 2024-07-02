import { ContactForm } from './ContactForm'
import { Toaster } from '../ui/toaster'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ContactForm',
    component: ContactForm,
    tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

/**
 * フォーム送信に成功した時
 *
 * 本来は別ページに遷移する
 */
export const Default: Story = {
    args: {
        onSubmit: async () => {
            const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000))
            await sleep()
        },
    },
}

/** フォーム送信に失敗したとき */
export const Failed: Story = {
    args: {
        onSubmit: async () => {
            const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000))
            await sleep()
            throw new Error('Failed')
        },
    },
    render: (args) => (
        <>
            <ContactForm {...args} />
            <Toaster />
        </>
    ),
}
