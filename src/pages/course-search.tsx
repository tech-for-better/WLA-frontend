import React from 'react';
import { PageProps } from 'gatsby';
// import CoursesWrapper from '../components/cards/CoursesWrapper';
import Search from '../components/Search/Search';

const CourseDetails: React.FC<PageProps> = () => {
  return (
    <main className="mt-5">
      <h1>Find Your Course</h1>
      <Search />
      {/* <CoursesWrapper /> */}
    </main>
  );
};

export default CourseDetails;
