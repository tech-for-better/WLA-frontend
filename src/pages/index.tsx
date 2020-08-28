import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Search from '../components/Search/Search';

const Home: React.FC<PageProps> = ({ data }) => {
  return (
    <Search
      courseCatalogue={data.allStrapiCourse.edges}
      careerCatalogue={data.allStrapiCareerPath.edges}
    />
  );
};

export default Home;

export const query = graphql`
  query {
    allStrapiCareerPath {
      edges {
        node {
          color
          name
          strapiId
          icon_url
        }
      }
    }
    allStrapiCourse {
      edges {
        node {
          description
          link
          name
          career_paths {
            color
          }
          provider {
            postcode
            name
          }
          total_price
          start_date(locale: "gb")
          strapiId
          online_only
        }
      }
    }
  }
`;
