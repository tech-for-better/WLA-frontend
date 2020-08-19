import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from './Footer';
import Copy from './Copy';

export default {
  title: `Footer`,
  component: Footer,
} as Meta;

export const WholeFooter: Story = () => <Footer />;
export const FooterCopy: Story = () => <Copy />;
