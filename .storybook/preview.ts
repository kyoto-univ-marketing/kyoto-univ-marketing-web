import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import './style.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /(Date|At)$/i,
            },
        },
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
}

export default preview
