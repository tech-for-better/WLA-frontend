import React, { useState, useEffect } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, linearGradient } from 'recharts';
import useSOC from './useSOC';

const WorkingFuturesPrediction: React.FC<{ soc: string }> = ({ soc }) => {
  const [wfData, setWfData] = useState(``);
  const [, setError] = useState(``);
  useSOC({ soc, endpoint: `/wf/predict`, setter: setWfData, setError });
  const data = wfData?.data?.predictedEmployment;
  const highestValue = data?.reduce((acc, el) => {
    return Math.max(acc, el.employment);
  }, 0);
  const upperBound = Math.round(highestValue / 10000) * 10000;

  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis domain={[0, upperBound * 1.25]} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="employment"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default WorkingFuturesPrediction;
