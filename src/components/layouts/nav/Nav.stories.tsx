import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CustomNav from './Nav';

export default {
  title: `CustomNav`,
  component: CustomNav,
} as Meta;

export const CustomNavDesktop: Story = () => <CustomNav />;
