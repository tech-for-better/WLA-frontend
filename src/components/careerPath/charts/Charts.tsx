import React from 'react';

import EstimatedPay from './EstimatedPay';
import WorkingFuturesPrediction from './WorkingFuturesPrediction';
import WorkingFuturesReplacemendDemand from './WorkingFuturesReplacementDemand';
import Abilities from './Abilities';

const Charts: React.FC<MotherChart> = ({ soc, name }) => {
  const onetCode = `15-1133.00`;
  return (
    <div>
      <WorkingFuturesPrediction soc={soc} name={name} />
      <WorkingFuturesReplacemendDemand soc={soc} name={name} />
      <EstimatedPay soc={soc} name={name} />
      <Abilities onetCode={onetCode} name={name} />
    </div>
  );
};

export default Charts;
