import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput/SearchOutput';
import useSearchParameters from './useSearchParameters/useSearchParameters';

const Search: React.FC<Catalogues> = ({ courseCatalogue = [], careerCatalogue = [] }) => {
  const [courseResults, setCourseResults] = useState(courseCatalogue);
  const [careerResults, setCareerResults] = useState(careerCatalogue);
  const [searchTerm, setSearchTerm] = useState(``);
  const [sortParam] = useState(``);
  const [onlineOnly, setOnlineOnly] = useState(false);
  const careers = useStaticQuery(graphql`
    query {
      allStrapiCareerPath {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `)?.allStrapiCareerPath?.edges;
  const [selectedCareer, setSelectedCareer] = useState(``);

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
    selectedCareer,
  });

  return (
    <>
      <SearchInput
        setSearchTerm={setSearchTerm}
        setOnlineOnly={setOnlineOnly}
        careers={careers}
        setSelectedCareer={setSelectedCareer}
      />
      <SearchOutput courseResults={courseResults} careerResults={careerResults} />
    </>
  );
};

export default Search;
