import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput/SearchOutput';
import useSearchParameters from './useSearchParameters/useSearchParameters';

const Search: React.FC<Catalogues> = ({ courseCatalogue = [], careerCatalogue = [] }) => {
  const [searchTerm, setSearchTerm] = useState(``);
  const [courseResults, setCourseResults] = useState(courseCatalogue);
  const [careerResults, setCareerResults] = useState(careerCatalogue);
  const [sortParam] = useState(``);
  const [onlineOnly, setOnlineOnly] = useState(false);

  // useSearchParameters is for handling any filtering logic
  // to add filtering/sorting add it to SearchInput and
  // useSearchParameters
  useSearchParameters({
    searchTerm,
    careerCatalogue,
    courseCatalogue,
    setCareerResults,
    setCourseResults,
    sortParam,
    onlineOnly,
  });

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} setOnlineOnly={setOnlineOnly} />
      <SearchOutput courseResults={courseResults} careerResults={careerResults} />
    </>
  );
};

export default Search;
