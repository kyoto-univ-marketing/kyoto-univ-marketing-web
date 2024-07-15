---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { <%= name %> } from './<%= name %>';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    component: <%= name %>,
    tags: ['autodocs'],
    parameters: {},
    args: {},
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
