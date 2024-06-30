---
to: src/components/<%= name %>/<%= name %>.tsx
---

import { FC } from 'react';

export interface <%= name %>Props {}

export const <%= name %>: FC<<%= name %>Props> = ({ ...props }) => {
    return <div><%= name %></div>;
};
