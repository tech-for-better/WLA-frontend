import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CourseCard from './CourseCard';
import styles from '../../styles';

export default {
  title: `CourseCard`,
  component: CourseCard,
} as Meta;

export const lightBlue: Story = () => (
  <CourseCard
    colour={styles.lightBlue}
    name="External Wall Insulation applier"
    link=""
    description=""
  />
);
export const gold: Story = () => (
  <CourseCard colour={styles.gold} name="Plumber" link="" description="" />
);
export const sage: Story = () => (
  <CourseCard colour={styles.sage} name="Electrician" link="" description="" />
);
export const aqua: Story = () => (
  <CourseCard colour={styles.aqua} name="Gardener" link="" description="" />
);

export const longText: Story = () => (
  <CourseCard
    colour={styles.lightBlue}
    name="External Wall Insulation applier"
    link=""
    description="External Wall Insulation Training Courses (EWI) at Goldtrowel are full on hands on Courses. This 5 day External Wall Insulation Course is a must for those students wishing to learn Or gain an NVQ Level 2. By holding this Qualification it will enable you not only to work on large projects, contracts with Local Councils and various other Agencies, but most importantly prove that you been trained by Qualified Assessors and Verifiers who know what they are talking about in conjunction with the Governments Green Deal."
  />
);
