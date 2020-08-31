import React, { useState } from 'react';
import useSOC from './useSOC';

const EstimatedPay: React.FC<{ soc: string }> = ({ soc }) => {
  const [estimatedPay, setEstimatedPay] = useState(``);
  const [, setError] = useState(``);

  useSOC({ soc, endpoint: `/ashe/estimatePay`, setter: setEstimatedPay, setError });

  return (
    <p>
      {estimatedPay?.data?.series?.reduce((acc, year) => {
        return acc + year.estpay;
      }, 0) / estimatedPay?.data?.series?.length}
    </p>
  );
};

export default EstimatedPay;
