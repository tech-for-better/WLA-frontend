import React, { useState } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import useSOC from '../hooks/useSOC';
import correctVowelGrammar from '../../../../utils/correctVowelGrammar';

const EstimatedPay: React.FC<SOCChart> = ({ soc, name }) => {
  const [estimatedPay, setEstimatedPay] = useState(``);
  const [, setError] = useState(``);

  useSOC({ soc, endpoint: `/ashe/estimatePay`, setter: setEstimatedPay, setError });

  const data = estimatedPay?.data?.series;
  return (
    <>
      <h3>Average weekly pay for {correctVowelGrammar(name)}</h3>
      <BarChart width={200} height={250} data={data}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="year" />
        <YAxis dataKey="estpay" />
        <Tooltip />
        <Bar dataKey="estpay" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default EstimatedPay;
