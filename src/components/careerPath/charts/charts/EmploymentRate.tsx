import React, { useState } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';
import useSOC from '../hooks/useSOC';

const EmploymentRate: React.FC<SOCChart> = ({ soc, name, color }) => {
  const [unemployment, setUnemployment] = useState(``);
  const [error, setError] = useState(``);

  useSOC({ soc, endpoint: `/lfs/unemployment`, setter: setUnemployment, setError });

  const data = unemployment?.data?.years.sort((a, b) => {
    return a.year - b.year;
  });

  if (error) {
    return <></>;
  }

  return (
    <div>
      <h3>Unemployment Rate</h3>
      <div style={{ width: `100%`, height: 300 }}>
        <ResponsiveContainer>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="year" />
            <YAxis dataKey="unemprate" />
            <Tooltip />
            <Bar dataKey="unemprate" fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmploymentRate;
