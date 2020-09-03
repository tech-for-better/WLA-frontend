import React, { useState } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';
import useSOC from '../hooks/useSOC';
import correctVowelGrammar from '../../../../utils/correctVowelGrammar';

const WorkingFuturesPrediction: React.FC<SOCChart> = ({ soc, name, color }) => {
  const [wfData, setWfData] = useState(``);
  const [error, setError] = useState(false);
  useSOC({ soc, endpoint: `/wf/predict`, setter: setWfData, setError });
  const data = wfData?.data?.predictedEmployment;
  const highestValue = data?.reduce((acc, el) => {
    return Math.max(acc, el.employment);
  }, 0);
  const upperBound = Math.round(highestValue / 10000) * 10000;
  if (error) {
    return <></>;
  }
  return (
    <div>
      <h3>Predicted number of people working as {correctVowelGrammar(name)}</h3>
      <div style={{ width: `100%`, height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor={color} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis domain={[0, upperBound * 1.25]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="employment"
              stroke={color}
              fillOpacity={0.3}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkingFuturesPrediction;
