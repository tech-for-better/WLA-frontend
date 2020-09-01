import React from 'react';

import CourseResults from './CourseResults';
import CareerResults from './CareerResults';

const SearchOutput: React.FC<SearchResults> = ({ courseResults, careerResults }) => {
  return (
    <main className="mt-5">
      {Boolean(careerResults.length) && <CareerResults careerResults={careerResults} />}
      {Boolean(courseResults.length) && <CourseResults courseResults={courseResults} />}
    </main>
  );
};

export default SearchOutput;
