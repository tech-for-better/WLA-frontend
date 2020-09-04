import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

import useONET from '../hooks/useONET';

const COLORS = [`#0088FE`, `#00C49F`, `#FFBB28`, `#FF8042`];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? `start` : `end`;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`Level ${value} out of 7`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={COLORS[10 % COLORS.length]}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={COLORS[10 % COLORS.length]}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${payload.name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Abilities: React.FC<ONETChart> = ({ onet, color }) => {
  const [skills, setSkills] = useState(``);
  const [activeIndex, setActiveIndex] = useState(0);

  const [error, setError] = useState(false);
  const data = skills?.data?.scales[0]?.abilities
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 10);

  useONET({ onet, endpoint: `/abilities`, setter: setSkills, setError });
  if (error) {
    return <></>;
  }
  return (
    <div>
      <h3>Top 10 skills</h3>
      <div style={{ width: `100%`, height: 600 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="40%"
              innerRadius={70}
              outerRadius={100}
              fill={color}
              dataKey="value"
              onMouseEnter={(_, index) => {
                return setActiveIndex(index);
              }}
            />
            <Legend legendType="circle" verticalAlign="top" height={1} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Abilities;
