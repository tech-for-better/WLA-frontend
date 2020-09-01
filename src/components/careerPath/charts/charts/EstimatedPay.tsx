import React, { useState } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import useSOC from '../hooks/useSOC';
import correctVowelGrammar from '../../../../utils/correctVowelGrammar';

const EstimatedPay: React.FC<SOCChart> = ({ soc, name, color }) => {
  const [estimatedPay, setEstimatedPay] = useState(``);
  const [error, setError] = useState(``);

  useSOC({ soc, endpoint: `/ashe/estimatePay`, setter: setEstimatedPay, setError });

  const data = estimatedPay?.data?.series;
  if (error) {
    return <></>;
  }
  return (
    <>
      <h3>Average weekly pay for {correctVowelGrammar(name)}</h3>
      <BarChart width={200} height={250} data={data}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="year" />
        <YAxis dataKey="estpay" />
        <Tooltip />
        <Bar dataKey="estpay" fill={color} />
      </BarChart>
    </>
  );
};

export default EstimatedPay;
