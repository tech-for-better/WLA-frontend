import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CareerCard from './CareerCard';
import styles from '../../styles';

import insulation from '../../../.storybook/assets/insulation.png';

export default {
  title: `CareerCard`,
  component: CareerCard,
} as Meta;

export const lightBlue: Story = () => {
  return (
    <CareerCard
      colour={styles.lightBlue}
      name="External Wall Insulation applier"
      link=""
      image={insulation}
    />
  );
};
export const gold: Story = () => {
  return <CareerCard colour={styles.gold} name="Plumber" link="" image={insulation} />;
};
export const sage: Story = () => {
  return <CareerCard colour={styles.sage} name="Electrician" link="" image={insulation} />;
};
export const aqua: Story = () => {
  return <CareerCard colour={styles.aqua} name="Gardener" link="" image={insulation} />;
};
