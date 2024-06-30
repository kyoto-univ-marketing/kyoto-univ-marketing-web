---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { <%= name %> } from './<%= name %>';

const meta = {
    title: '<%= name %>',
    component: <%= name %>,
    tags: ['autodocs'],
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
