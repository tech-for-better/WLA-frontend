import React, { useState } from 'react';
import useSOC from './useSOC';

const WorkingFuturesPrediction: React.FC<{ soc: string }> = ({ soc }) => {
  const [, setWfData] = useState(``);
  const [, setError] = useState(``);

  useSOC({ soc, endpoint: `/wf/predict`, setter: setWfData, setError });
  return <p>{soc}</p>;
};

export default WorkingFuturesPrediction;
