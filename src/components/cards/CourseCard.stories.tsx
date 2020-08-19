import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CourseCard from './CourseCard';

export default {
  title: `CourseCard`,
  component: CourseCard,
} as Meta;

export const card: Story = () => <CourseCard />;
