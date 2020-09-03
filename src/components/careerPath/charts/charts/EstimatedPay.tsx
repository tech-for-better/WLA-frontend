import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import useSOC from '../hooks/useSOC';
import correctVowelGrammar from '../../../../utils/correctVowelGrammar';

const EstimatedPay: React.FC<SOCChart> = ({ soc, name, color }) => {
  const [estimatedPay, setEstimatedPay] = useState(``);
  const [error, setError] = useState(``);

  useSOC({ soc, endpoint: `/ashe/estimatePay`, setter: setEstimatedPay, setError });

  const data = estimatedPay?.data?.series.sort((a, b) => {
    return a.year - b.year;
  });

  if (error) {
    return <></>;
  }
  return (
    <div>
      <h3>Average weekly pay for {correctVowelGrammar(name)}</h3>
      <div style={{ width: `100%`, height: 200 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: `£ per week`, angle: -90, position: `insideLeft` }} />
            <Tooltip />
            <Area type="monotone" dataKey="estpay" stroke={color} fill={color} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EstimatedPay;
