import React, { useState } from 'react';
import useSOC from './hooks/useSOC';
import correctVowelGrammar from '../../../utils/correctVowelGrammar';

const WorkingFuturesReplacementDemand: React.FC<SOCChart> = ({ soc, name }) => {
  const [wfData, setWfData] = useState(``);
  const [, setError] = useState(false);

  useSOC({ soc, endpoint: `/wf/replacement_demand`, setter: setWfData, setError });

  if (wfData) {
    const { start_year, end_year, rate } = wfData?.data;
    return (
      <p>
        Between {start_year} and {end_year} the rate of replacement for {correctVowelGrammar(name)}
        {` `}
        is predicted to be{` `}
        {rate}.
      </p>
    );
  }

  return <p />;
};

export default WorkingFuturesReplacementDemand;
