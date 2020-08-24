import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CourseCard from './CourseCard';
import styles from '../../styles';

export default {
  title: `CourseCard`,
  component: CourseCard,
} as Meta;

export const longTextOnline: Story = () => {
  return (
    <CourseCard
      colours={[styles.lightBlue]}
      name="External Wall Insulation applier"
      link=""
      description="External Wall Insulation Training Courses (EWI) at Goldtrowel are full on hands on Courses. This 5 day External Wall Insulation Course is a must for those students wishing to learn Or gain an NVQ Level 2. By holding this Qualification it will enable you not only to work on large projects, contracts with Local Councils and various other Agencies, but most importantly prove that you been trained by Qualified Assessors and Verifiers who know what they are talking about in conjunction with the Governments Green Deal."
      postcode=""
      onlineOnly
    />
  );
};

export const offlineCourse: Story = () => {
  return (
    <CourseCard
      colours={[styles.lightBlue]}
      name="External Wall Insulation applier"
      link=""
      description="External Wall Insulation Training Courses (EWI) at Goldtrowel are full on hands on Courses. This 5 day External Wall Insulation Course is a must for those students wishing to learn Or gain an NVQ Level 2. By holding this Qualification it will enable you not only to work on large projects, contracts with Local Councils and various other Agencies, but most importantly prove that you been trained by Qualified Assessors and Verifiers who know what they are talking about in conjunction with the Governments Green Deal."
      postcode="N1 4BG"
      onlineOnly={false}
    />
  );
};

export const oneColour: Story = () => {
  return (
    <CourseCard
      colours={[styles.lightBlue]}
      name="External Wall Insulation applier"
      link=""
      description=""
      postcode=""
      onlineOnly
    />
  );
};

export const twoColours: Story = () => {
  return (
    <CourseCard
      colours={[styles.lightBlue, styles.orange]}
      name="External Wall Insulation applier"
      link=""
      description="External Wall Insulation Training Courses (EWI) at Goldtrowel are full on hands on Courses. This 5 day External Wall Insulation Course is a must for those students wishing to learn Or gain an NVQ Level 2. By holding this Qualification it will enable you not only to work on large projects, contracts with Local Councils and various other Agencies, but most importantly prove that you been trained by Qualified Assessors and Verifiers who know what they are talking about in conjunction with the Governments Green Deal."
      postcode=""
      onlineOnly
    />
  );
};

export const threeColours: Story = () => {
  return (
    <CourseCard
      colours={[styles.lightBlue, styles.orange, styles.gold]}
      name="External Wall Insulation applier"
      link=""
      description="External Wall Insulation Training Courses (EWI) at Goldtrowel are full on hands on Courses. This 5 day External Wall Insulation Course is a must for those students wishing to learn Or gain an NVQ Level 2. By holding this Qualification it will enable you not only to work on large projects, contracts with Local Councils and various other Agencies, but most importantly prove that you been trained by Qualified Assessors and Verifiers who know what they are talking about in conjunction with the Governments Green Deal."
      postcode=""
      onlineOnly={false}
    />
  );
};
