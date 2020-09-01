import React from 'react';

import EstimatedPay from './charts/EstimatedPay';
import WorkingFuturesPrediction from './charts/WorkingFuturesPrediction';
import WorkingFuturesReplacemendDemand from './charts/WorkingFuturesReplacementDemand';
import Abilities from './charts/Abilities';

const Charts: React.FC<MotherChart> = ({ soc, name, color }) => {
  const onetCode = `15-1133.00`;
  return (
    <div>
      <WorkingFuturesPrediction soc={soc} name={name} color={color} />
      <WorkingFuturesReplacemendDemand soc={soc} name={name} color={color} />
      <EstimatedPay soc={soc} name={name} color={color} />
      <Abilities onetCode={onetCode} name={name} color={color} />
    </div>
  );
};

export default Charts;
