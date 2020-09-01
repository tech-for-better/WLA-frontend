import React, { useState } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import useONET from '../hooks/useONET';
import correctVowelGrammar from '../../../../utils/correctVowelGrammar';

const Abilities: React.FC<ONETChart> = ({ onetCode, name, color }) => {
  const [skills, setSkills] = useState(``);
  const [error, setError] = useState(false);
  const data = skills?.data?.scales[0]?.abilities;
  useONET({ onetCode, endpoint: `/abilities`, setter: setSkills, setError });

  const highestValue = data?.reduce((acc, el) => {
    return Math.max(acc, el.value);
  }, 0);

  const upperBound = Math.round(highestValue) + 1;

  if (error) {
    return <></>;
  }
  return (
    <>
      <h3>Average abilities of {correctVowelGrammar(name)}</h3>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="name" hide />
        <YAxis domain={[0, upperBound]} />
        <Tooltip />
        <Bar dataKey="value" fill={color} />
      </BarChart>
    </>
  );
};

export default Abilities;
