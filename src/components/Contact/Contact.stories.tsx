import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Contact from './Contact';

export default {
  title: `Contact`,
  component: Contact,
} as Meta;

export const fullComponent: Story = () => {
  return <Contact />;
};
