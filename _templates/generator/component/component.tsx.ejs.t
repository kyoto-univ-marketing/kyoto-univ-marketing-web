---
to: src/components/<%= name %>/<%= name %>.tsx
---

import React from 'react';

export interface <%= name %>Props {}

export const <%= name %>: React.FC<<%= name %>Props> = ({ ...props }) => {
  return <div><%= name %></div>;
};
