import React from 'react';

import { Donut } from 'britecharts-react';

const with4Slices = () => {
  return [
    {
      quantity: 60,
      percentage: 60,
      name: `React`,
      id: 1,
    },
    {
      quantity: 20,
      percentage: 20,
      name: `Ember`,
      id: 2,
    },
    {
      quantity: 10,
      percentage: 10,
      name: `Angular`,
      id: 3,
    },
    {
      quantity: 10,
      percentage: 10,
      name: `Backbone`,
      id: 4,
    },
  ];
};

const DonutChart = () => {
  return <Donut data={with4Slices()} />;
};

export default DonutChart;
