import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Search from '../components/Search/Search';

const CourseDetails: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="mt-5">
      <h1>Find Your Course</h1>
      <Search courseCatalogue={data.allStrapiCourse.edges} />
    </main>
  );
};

export default CourseDetails;

export const query = graphql`
  query {
    allStrapiCourse {
      edges {
        node {
          description
          link
          name
          career_paths {
            color
          }
          postcode
          price
          start_date(locale: "gb")
          strapiId
          online_only
        }
      }
    }
  }
`;
