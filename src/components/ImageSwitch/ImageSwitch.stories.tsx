import { ImageSwitch } from './ImageSwitch'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'ImageSwitch',
    component: ImageSwitch,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        imageList: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg',
            'https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/sight/asset/b5bcabab0fcde4e3b4969d388a4923f30fc7e549.png',
            'https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/kinkakuji/about/imgSlide01@2x.jpg',
        ].map((src) => ({ src })),
        interval: 7500,
        transitionDuration: 2000,
    },
} satisfies Meta<typeof ImageSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        // <div className='max-w-dvw w-[500px]'>
        <ImageSwitch {...args} />
        // </div>
    ),
}
