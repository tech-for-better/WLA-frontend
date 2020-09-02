import React from 'react';
import WorkingFuturesReplacemendDemand from './WorkingFuturesReplacementDemand';
// import CoursesChart from './CoursesChart';

function ExtraInfo({ soc, name, color }) {
  return (
    <div>
      <h2>courses taken by others</h2>
      {/* <CoursesChart soc={soc} /> */}
      <WorkingFuturesReplacemendDemand soc={soc} name={name} color={color} />
    </div>
  );
}

export default ExtraInfo;
