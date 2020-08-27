import { useEffect } from 'react';

const useSearchParameters = ({
  searchTerm,
  careerCatalogue,
  courseCatalogue,
  setCareerResults,
  setCourseResults,
}) => {
  useEffect(() => {
    if (careerCatalogue.length) {
      const filteredCareerData = careerCatalogue.filter((a: CareerPathEntry) => {
        return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCareerResults(filteredCareerData);
    }

    if (courseCatalogue.length) {
      const filteredData = courseCatalogue.filter((a: CourseEntry) => {
        return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCourseResults(filteredData);
    }
  }, [
    searchTerm,
    // careerCatalogue,
    // courseCatalogue,
    // setCareerResults,
    // setCourseResults,
  ]);
};

export default useSearchParameters;
