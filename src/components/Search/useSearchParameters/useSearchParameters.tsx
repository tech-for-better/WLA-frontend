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
  selectedCareer,
}) => {
  useEffect(() => {
    if (careerCatalogue.length) {
      const filteredCareers = careerCatalogue.filter((a: CareerPathEntry) => {
        return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCareerResults(filteredCareers);
    }

    if (courseCatalogue.length) {
      let filteredCourses = [...courseCatalogue];

      if (searchTerm) {
        filteredCourses = courseCatalogue.filter((a: CourseEntry) => {
          return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }

      if (onlineOnly) {
        filteredCourses = filteredCourses.filter((course: CourseEntry) => {
          return course?.node?.online_only;
        });
      }

      if (selectedCareer) {
        filteredCourses = filteredCourses.filter((course: CourseEntry) => {
          return course?.node?.career_paths.some((career) => {
            return `Career-path_${career?.id}` === selectedCareer;
          });
        });
      }

      if (sortParam) {
        // do sorting after filtering to reduce cost
        filteredCourses = sortCourses(filteredCourses, sortParam);
      }

      setCourseResults(filteredCourses);
    }
  }, [
    searchTerm,
    onlineOnly,
    selectedCareer,
    sortParam,
    // careerCatalogue,  // it looks like default props are causing an infinite rerender
    courseCatalogue,
    setCareerResults,
    setCourseResults,
  ]);
};

export default useSearchParameters;
