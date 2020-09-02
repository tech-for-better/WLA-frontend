import React from 'react';
import styled from 'styled-components';

import { mediaQuery } from '../../../styles';
import EstimatedPay from './charts/EstimatedPay';
import EmploymentRate from './charts/EmploymentRate';
import WorkingFuturesPrediction from './charts/WorkingFuturesPrediction';
import WorkingFuturesReplacemendDemand from './charts/WorkingFuturesReplacementDemand';
import Abilities from './charts/Abilities';

const GraphGrid = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-column-gap: 10%;
  ${mediaQuery(`{
    grid-template-columns: 1fr;
    }`)}
`;

const Charts: React.FC<MotherChart> = ({ soc, name, color }) => {
  const onetCode = `15-1133.00`;
  return (
    <div>
      <GraphGrid>
        <div>
          <EstimatedPay soc={soc} name={name} color={color} />
          <EmploymentRate soc={soc} name={name} color={color} />
        </div>
        <Abilities onetCode={onetCode} name={name} color={color} />
      </GraphGrid>
      <div>
        <h1>vacancies availble at the moment</h1>
        <h2>courses taken by others</h2>
        <WorkingFuturesReplacemendDemand soc={soc} name={name} color={color} />
      </div>
      <WorkingFuturesPrediction soc={soc} name={name} color={color} />
    </div>
  );
};

export default Charts;
