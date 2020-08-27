import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput/SearchOutput';
import useSearchParameters from './useSearchParameters';

const Search: React.FC<Catalogues> = ({ courseCatalogue = [], careerCatalogue = [] }) => {
  const [searchTerm, setSearchTerm] = useState(``);
  const [courseResults, setCourseResults] = useState(courseCatalogue);
  const [careerResults, setCareerResults] = useState(careerCatalogue);

  // this function is for handling any filtering logic
  useSearchParameters({
    searchTerm,
    careerCatalogue,
    courseCatalogue,
    setCareerResults,
    setCourseResults,
  });

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} />
      <SearchOutput courseResults={courseResults} careerResults={careerResults} />
    </>
  );
};

export default Search;
