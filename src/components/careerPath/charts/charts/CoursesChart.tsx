import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function CoursesChart({ soc }) {
  const [courses, setCourses] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://api.lmiforall.org.uk/api/v1/hesa/courses/${soc}`)
      .then((res) => {
        setCourses(res);
      })
      .catch(() => {
        setError(true);
      });
  }, [setCourses, soc, setError]);

  const processedData = [];
    const fakeData = courses?.data.years;
 
  const keys = [];
  const subjects = [];
  const subjectPercentageByYear = [];

  fakeData.map((e) => {
    keys.push(e.year);
    const sortedCourses = e.courses
      .sort((a, b) => {
        return b.percentage - a.percentage;
      })
      .slice(0, 6);
    sortedCourses.map((a) => {
      subjectPercentageByYear.push({ name: a.name, [e.year]: a.percentage });
      return !subjects.includes(a.name) ? subjects.push(a.name) : 1;
    });
  });
  subjects.map((e) => {
    const dataEntry = keys.reduce(
      (a, b) => {
        // eslint-disable-next-line no-return-assign
        return (a[b] = 0), a;
      },
      {
        subject: e.replace(/\(\w+\)\s+/gi, ``),
        fullMark: 100,
      },
    );
    processedData.push(dataEntry);
  });

  processedData.map((e) => {
    const filteredYears = subjectPercentageByYear.filter((a) => {
      return a.name.replace(/\(\w+\)\s+/gi, ``) === e.subject;
    });
    filteredYears.map((a) => {
      e[Object.keys(a)[1]] = a[Object.keys(a)[1]];
    });
    return filteredYears;
  });

  if (error) {
    return <></>;
  }
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={processedData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 0]} />
      <Radar name="2011/12" dataKey="2011/12" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="2012/13" dataKey="2012/13" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Radar name="2013/14" dataKey="2013/14" stroke="#ff2122" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="2014/15" dataKey="2014/15" stroke="#879012" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  );
}

export default CoursesChart;
