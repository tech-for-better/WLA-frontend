import { useEffect } from 'react';
import sortCourses from './sortCourses';

const useSearchParameters = ({
  searchTerm,
  careerCatalogue,
  courseCatalogue,
  setCareerResults,
  setCourseResults,
  sortParam,
  onlineOnly,
}) => {
  useEffect(() => {
    if (careerCatalogue.length) {
      const filteredCareers = careerCatalogue.filter((a: CareerPathEntry) => {
        return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCareerResults(filteredCareers);
    }

    if (courseCatalogue.length) {
      let filteredCourses = courseCatalogue.filter((a: CourseEntry) => {
        return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      if (sortParam) {
        filteredCourses = sortCourses(filteredCourses, sortParam);
      }

      if (onlineOnly) {
        filteredCourses = filteredCourses.filter((course: CourseEntry) => {
          return course?.node?.online_only;
        });
      }

      setCourseResults(filteredCourses);
    }
  }, [
    searchTerm,
    onlineOnly,
    // default arguments seem to be causing an infinite re-render
    // careerCatalogue,
    // courseCatalogue,
    // setCareerResults,
    // setCourseResults,
  ]);
};

export default useSearchParameters;
