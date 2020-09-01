import React, { useState } from 'react';
import useSOC from './useSOC';

const WorkingFuturesReplacementDemand: React.FC<{ soc: string }> = ({ soc }) => {
  const [wfData, setWfData] = useState(``);
  const [, setError] = useState(``);

  useSOC({ soc, endpoint: `/wf/replacement_demand`, setter: setWfData, setError });

  if (wfData) {
    const { start_year, end_year, rate } = wfData?.data;
    return (
      <p>
        Between {start_year} and {end_year} the rate of replacement for {soc} is predicted to be
        {rate}.
      </p>
    );
  }

  return <p />;
};

export default WorkingFuturesReplacementDemand;
