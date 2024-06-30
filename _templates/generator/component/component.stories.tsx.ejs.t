---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { <%= name %> } from './<%= name %>';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: '<%= name %>',
    component: <%= name %>,
    tags: ['autodocs'],
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
