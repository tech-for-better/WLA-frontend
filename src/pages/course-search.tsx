import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Search from '../components/Search/Search';
import PageBackground from '../components/layouts/PageBackground';
import Searchcourses from '../assets/pagebackgrounds/searchcoursebg.svg';

const CourseDetails: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="mt-5">
      <PageBackground imgsrc={Searchcourses} text="Find the course you always wanted to take" />
      <Search courseCatalogue={data.allStrapiCourse.edges} careerCatalogue={[]} />
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
          total_price
          start_date(locale: "gb")
          strapiId
          online_only
          career_paths {
            color
            id
          }
          provider {
            postcode
            name
          }
        }
      }
    }
  }
`;
